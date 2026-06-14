import { useCallback, useEffect, useRef, useState } from 'react'
import { AUDIO, RECITERS } from './data/duas.js'

const pad3 = (n) => String(n).padStart(3, '0')

// Real reciter audio (MP3) — no system TTS voice required.
//  • Alafasy   → exact per-ayah files from everyayah.com
//  • Bandar    → full-surah file from quranicaudio.com, seeked to the verse timing
function everyayahUrl(surah, ayah) {
  return `https://everyayah.com/data/Alafasy_128kbps/${pad3(surah)}${pad3(ayah)}.mp3`
}
function bandarSurahUrl(surah) {
  return `https://download.quranicaudio.com/quran/bandar_baleela/complete/${pad3(surah)}.mp3`
}

export function useAudio() {
  const audioRef = useRef(null)
  const stopAtRef = useRef(null) // segment end time (s) for Bandar
  const queueRef = useRef([]) // remaining per-ayah urls for Alafasy
  const tokenRef = useRef(0) // guards against races when switching duas fast

  const [playingId, setPlayingId] = useState(null)
  const [loadingId, setLoadingId] = useState(null)
  const [error, setError] = useState(null)

  // Lazily create one shared <audio> element.
  if (!audioRef.current && typeof Audio !== 'undefined') {
    audioRef.current = new Audio()
    audioRef.current.preload = 'auto'
  }

  const reset = useCallback(() => {
    const a = audioRef.current
    if (a) {
      a.pause()
      a.onended = null
      a.ontimeupdate = null
      a.onloadedmetadata = null
      a.onplaying = null
      a.onerror = null
      a.removeAttribute('src')
    }
    stopAtRef.current = null
    queueRef.current = []
  }, [])

  const stop = useCallback(() => {
    tokenRef.current += 1
    reset()
    setPlayingId(null)
    setLoadingId(null)
  }, [reset])

  const fail = useCallback(
    (msg) => {
      reset()
      setPlayingId(null)
      setLoadingId(null)
      setError(msg || 'Audio could not be played. Please check your connection and try again.')
    },
    [reset]
  )

  const play = useCallback(
    (duaId, reciterId) => {
      const a = audioRef.current
      const meta = AUDIO[duaId]
      const reciter = RECITERS[reciterId]
      if (!a || !meta || !reciter) {
        fail('Audio is unavailable for this dua.')
        return
      }

      tokenRef.current += 1
      const token = tokenRef.current
      reset()
      setError(null)
      setPlayingId(null)
      setLoadingId(duaId)

      a.onplaying = () => {
        if (token !== tokenRef.current) return
        setLoadingId(null)
        setPlayingId(duaId)
      }
      a.onerror = () => {
        if (token !== tokenRef.current) return
        fail(
          'Could not load the recitation audio (network or source issue). Please try again or pick the other reciter.'
        )
      }

      if (reciter.type === 'ayah') {
        // Queue of exact per-ayah files, played back to back.
        queueRef.current = meta.ayahs.map((ay) => everyayahUrl(meta.surah, ay))
        const playNext = () => {
          if (token !== tokenRef.current) return
          const next = queueRef.current.shift()
          if (!next) {
            setPlayingId(null)
            return
          }
          a.src = next
          a.play().catch(() => fail())
        }
        a.onended = playNext
        playNext()
      } else {
        // Segment of a full-surah file: seek to start, stop at end.
        const { from, to } = meta.bandar
        stopAtRef.current = to
        a.src = bandarSurahUrl(meta.surah)
        a.onloadedmetadata = () => {
          if (token !== tokenRef.current) return
          try {
            a.currentTime = from
          } catch {
            /* seek will be retried on canplay */
          }
        }
        a.ontimeupdate = () => {
          if (token !== tokenRef.current) return
          if (stopAtRef.current != null && a.currentTime >= stopAtRef.current) {
            reset()
            setPlayingId(null)
            setLoadingId(null)
          }
        }
        a.onended = () => {
          if (token !== tokenRef.current) return
          setPlayingId(null)
        }
        a.play().catch(() => fail())
      }
    },
    [fail, reset]
  )

  const toggle = useCallback(
    (duaId, reciterId) => {
      if (playingId === duaId || loadingId === duaId) stop()
      else play(duaId, reciterId)
    },
    [playingId, loadingId, play, stop]
  )

  // Cleanup on unmount.
  useEffect(() => () => reset(), [reset])

  return {
    toggle,
    stop,
    playingId,
    loadingId,
    error,
    clearError: () => setError(null),
  }
}
