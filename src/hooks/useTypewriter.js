import { useEffect, useRef, useState } from 'react'

/**
 * Reveals `text` progressively, chunk by chunk, unless the user prefers
 * reduced motion (in which case the full text is shown immediately).
 */
export function useTypewriter(text, { speed = 8, chunk = 3, startDelay = 300 } = {}) {
  const [output, setOutput] = useState('')
  const [done, setDone] = useState(false)
  const reduceMotionRef = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    if (reduceMotionRef.current) {
      setOutput(text)
      setDone(true)
      return
    }

    let idx = 0
    let intervalId
    const startId = setTimeout(() => {
      intervalId = setInterval(() => {
        idx += chunk
        setOutput(text.slice(0, idx))
        if (idx >= text.length) {
          clearInterval(intervalId)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(startId)
      clearInterval(intervalId)
    }
  }, [text, speed, chunk, startDelay])

  return { output, done }
}
