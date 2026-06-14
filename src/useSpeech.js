import { useCallback, useEffect, useRef, useState } from 'react'

// Small hook around the Web Speech API (SpeechSynthesis) tuned for Arabic recitation.
export function useSpeech() {
  const [speakingId, setSpeakingId] = useState(null)
  const [supported, setSupported] = useState(true)
  const voiceRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setSupported(false)
      return
    }

    const pickVoice = () => {
      const voices = window.speechSynthesis.getVoices()
      if (!voices.length) return
      // Prefer an Arabic voice; fall back gracefully.
      voiceRef.current =
        voices.find((v) => /ar(-|_|$)/i.test(v.lang)) ||
        voices.find((v) => /arabic/i.test(v.name)) ||
        null
    }

    pickVoice()
    window.speechSynthesis.onvoiceschanged = pickVoice

    return () => {
      window.speechSynthesis.onvoiceschanged = null
      window.speechSynthesis.cancel()
    }
  }, [])

  const stop = useCallback(() => {
    if (supported) window.speechSynthesis.cancel()
    setSpeakingId(null)
  }, [supported])

  const speak = useCallback(
    (text, id) => {
      if (!supported) return
      window.speechSynthesis.cancel()

      const utter = new SpeechSynthesisUtterance(text)
      utter.lang = 'ar-SA'
      if (voiceRef.current) utter.voice = voiceRef.current
      utter.rate = 0.8 // slower, closer to recitation pace
      utter.pitch = 1

      utter.onend = () => setSpeakingId(null)
      utter.onerror = () => setSpeakingId(null)

      setSpeakingId(id)
      window.speechSynthesis.speak(utter)
    },
    [supported]
  )

  return { speak, stop, speakingId, supported }
}
