import { useCallback, useEffect, useRef, useState } from 'react'

// Hook around the Web Speech API (SpeechSynthesis) tuned for Arabic recitation.
// Handles the common real-world snags: voices loading late, no Arabic voice
// installed, and Chrome's "synthesis silently pauses" bug.
export function useSpeech() {
  const [speakingId, setSpeakingId] = useState(null)
  const [supported, setSupported] = useState(true)
  const [error, setError] = useState(null) // user-facing message when playback fails
  const [hasArabicVoice, setHasArabicVoice] = useState(true)

  const voicesRef = useRef([])
  const resumeTimerRef = useRef(null)

  // Load and keep voices in sync. They often arrive asynchronously.
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setSupported(false)
      return
    }

    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices()
      if (voices.length) {
        voicesRef.current = voices
        setHasArabicVoice(voices.some((v) => /^ar\b|ar[-_]|arabic/i.test(v.lang + ' ' + v.name)))
      }
    }

    loadVoices()
    window.speechSynthesis.addEventListener?.('voiceschanged', loadVoices)
    // Some browsers only populate after a tick.
    const t = setTimeout(loadVoices, 250)

    return () => {
      window.speechSynthesis.removeEventListener?.('voiceschanged', loadVoices)
      clearTimeout(t)
      clearInterval(resumeTimerRef.current)
      window.speechSynthesis.cancel()
    }
  }, [])

  const pickArabicVoice = () => {
    const voices = voicesRef.current.length
      ? voicesRef.current
      : window.speechSynthesis.getVoices()
    return (
      voices.find((v) => /^ar([-_]|$)/i.test(v.lang)) ||
      voices.find((v) => /arabic/i.test(v.name)) ||
      null
    )
  }

  const stop = useCallback(() => {
    clearInterval(resumeTimerRef.current)
    if (supported) window.speechSynthesis.cancel()
    setSpeakingId(null)
  }, [supported])

  const speak = useCallback(
    (text, id) => {
      if (!supported) return
      setError(null)

      const synth = window.speechSynthesis
      synth.cancel() // clear anything queued/stuck

      const utter = new SpeechSynthesisUtterance(text)
      const arVoice = pickArabicVoice()
      if (arVoice) {
        utter.voice = arVoice
        utter.lang = arVoice.lang
      } else {
        // No Arabic voice installed — still attempt (Edge has online voices),
        // and let the user know if nothing comes out.
        utter.lang = 'ar-SA'
      }
      utter.rate = 0.85
      utter.pitch = 1
      utter.volume = 1

      utter.onstart = () => setSpeakingId(id)
      utter.onend = () => {
        clearInterval(resumeTimerRef.current)
        setSpeakingId(null)
      }
      utter.onerror = (e) => {
        clearInterval(resumeTimerRef.current)
        setSpeakingId(null)
        if (e.error !== 'interrupted' && e.error !== 'canceled') {
          setError(
            arVoice
              ? 'Playback failed. Please try again.'
              : 'No Arabic text-to-speech voice is installed on this device. On Windows you can add one in Settings → Time & Language → Speech.'
          )
        }
      }

      // Optimistically mark speaking (onstart may lag on some browsers).
      setSpeakingId(id)
      synth.speak(utter)

      // Chrome bug workaround: long utterances pause after ~15s; nudge resume.
      clearInterval(resumeTimerRef.current)
      resumeTimerRef.current = setInterval(() => {
        if (!synth.speaking) {
          clearInterval(resumeTimerRef.current)
          return
        }
        synth.pause()
        synth.resume()
      }, 10000)
    },
    [supported]
  )

  return { speak, stop, speakingId, supported, error, hasArabicVoice, clearError: () => setError(null) }
}
