import { useEffect, useMemo, useReducer, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, CornerDownLeft, ArrowUp, ArrowDown } from 'lucide-react'
import { commands, profile } from '../data/portfolio'

const initialState = { query: '', selected: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'SET_QUERY':
      return { query: action.payload, selected: 0 }
    case 'MOVE':
      return { ...state, selected: action.payload }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

export default function CommandPalette({ open, onClose }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const inputRef = useRef(null)

  const filtered = useMemo(() => {
    const q = state.query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter(
      (c) => c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q)
    )
  }, [state.query])

  useEffect(() => {
    if (open) {
      dispatch({ type: 'RESET' })
      setTimeout(() => inputRef.current?.focus(), 20)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function runCommand(cmd) {
    if (!cmd) return
    if (cmd.id === 'email') {
      navigator.clipboard?.writeText(profile.email).catch(() => {})
    } else if (cmd.id === 'mail') {
      window.location.href = `mailto:${profile.email}`
    } else if (cmd.id === 'linkedin') {
      window.open(profile.linkedin, '_blank', 'noopener')
    } else {
      document.getElementById(cmd.id)?.scrollIntoView({ behavior: 'smooth' })
    }
    onClose()
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      onClose()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      dispatch({ type: 'MOVE', payload: Math.min(state.selected + 1, filtered.length - 1) })
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      dispatch({ type: 'MOVE', payload: Math.max(state.selected - 1, 0) })
    } else if (e.key === 'Enter') {
      e.preventDefault()
      runCommand(filtered[state.selected])
    }
  }

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] bg-ink/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-ink border border-line-dark rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-line-dark">
              <Search size={16} className="text-muted shrink-0" />
              <input
                ref={inputRef}
                value={state.query}
                onChange={(e) => dispatch({ type: 'SET_QUERY', payload: e.target.value })}
                onKeyDown={handleKeyDown}
                placeholder="Type a command or search…"
                className="w-full bg-transparent font-mono text-sm text-white placeholder:text-muted outline-none"
              />
              <kbd className="font-mono text-[10px] text-muted border border-line-dark rounded px-1.5 py-0.5 shrink-0">
                esc
              </kbd>
            </div>

            <ul className="max-h-72 overflow-y-auto py-1.5">
              {filtered.length === 0 && (
                <li className="px-4 py-6 text-center text-muted font-mono text-xs">No matching commands</li>
              )}
              {filtered.map((cmd, i) => (
                <li key={cmd.id}>
                  <button
                    onClick={() => runCommand(cmd)}
                    onMouseEnter={() => dispatch({ type: 'MOVE', payload: i })}
                    className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-left font-mono text-[13px] ${
                      i === state.selected ? 'bg-ink-soft text-white' : 'text-[#D6DCE5]'
                    }`}
                  >
                    <span>{cmd.label}</span>
                    <span className="text-muted text-[11px]">{cmd.hint}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 px-4 py-2.5 border-t border-line-dark text-muted font-mono text-[10.5px]">
              <span className="flex items-center gap-1">
                <ArrowUp size={11} /> <ArrowDown size={11} /> navigate
              </span>
              <span className="flex items-center gap-1">
                <CornerDownLeft size={11} /> select
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
