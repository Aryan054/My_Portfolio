import { useState } from 'react'
import { Menu, X, Command } from 'lucide-react'
import { routes } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'

export default function Nav({ onOpenPalette }) {
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(routes.map((r) => r.id))

  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur-sm border-b border-line-dark transition-colors duration-300">
      <div className="max-w-[1160px] mx-auto px-6 h-[60px] flex items-center justify-between">
        <a href="#top" className="font-mono text-sm text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_0_3px_rgba(45,125,110,0.25)] shrink-0" />
          /aryan-rathod
        </a>

        <div className="hidden md:flex items-center gap-1">
          <nav className="flex gap-0.5">
            {routes.map((r) => (
              <a
                key={r.id}
                href={`#${r.id}`}
                className={`font-mono text-[12.5px] px-3 py-2 rounded-md flex items-center gap-1.5 transition-colors ${
                  activeId === r.id ? 'text-white bg-ink-soft' : 'text-muted hover:text-white hover:bg-ink-soft'
                }`}
              >
                <span className={activeId === r.id ? 'text-accent2 font-semibold' : 'text-accent font-semibold'}>
                  {r.method}
                </span>
                {r.label}
              </a>
            ))}
          </nav>
          <button
            onClick={onOpenPalette}
            className="ml-3 flex items-center gap-1.5 font-mono text-[11.5px] text-muted border border-line-dark rounded-md px-2.5 py-1.5 hover:text-white hover:border-muted transition-colors"
            aria-label="Open command palette"
          >
            <Command size={12} /> K
          </button>
        </div>

        <button
          className="md:hidden text-white border border-line-dark rounded-md w-10 h-9 flex items-center justify-center"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <nav
        className={`md:hidden bg-ink border-b border-line-dark overflow-hidden transition-[max-height] duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        {routes.map((r) => (
          <a
            key={r.id}
            href={`#${r.id}`}
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-6 py-3.5 font-mono text-[12.5px] text-muted border-b border-line-dark last:border-b-0"
          >
            <span className="text-accent font-semibold">{r.method}</span>
            {r.label}
          </a>
        ))}
        <button
          onClick={() => {
            setOpen(false)
            onOpenPalette()
          }}
          className="w-full text-left flex items-center gap-2 px-6 py-3.5 font-mono text-[12.5px] text-muted"
        >
          <Command size={13} /> Open command palette
        </button>
      </nav>
    </header>
  )
}
