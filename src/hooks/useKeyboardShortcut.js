import { useEffect } from 'react'

/**
 * Fires `callback` when the given key is pressed with (or without) the
 * platform "meta" modifier (Cmd on macOS, Ctrl on Windows/Linux).
 */
export function useKeyboardShortcut(key, callback, { withMeta = true } = {}) {
  useEffect(() => {
    function handleKeyDown(e) {
      const metaOk = withMeta ? e.metaKey || e.ctrlKey : true
      if (metaOk && e.key.toLowerCase() === key.toLowerCase()) {
        e.preventDefault()
        callback(e)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [key, callback, withMeta])
}
