import { useState } from 'react'
import { Menu, X, Command, FileText, Download } from 'lucide-react'
import { routes, profile } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { downloadResume } from '../utils/downloadResume'

export default function Nav({ onOpenPalette, onOpenResume }) {
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(routes.map((r) => r.id))

  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur-md border-b border-line-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-[64px] flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#top" className="font-mono text-sm text-white flex items-center gap-2 group">
          <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_rgba(45,125,110,0.6)] group-hover:scale-125 transition-transform shrink-0" />
          <span className="font-semibold text-white tracking-tight">/aryan-rathod</span>
          <span className="hidden lg:inline-block font-mono text-[11px] text-muted ml-1 bg-ink-soft border border-line-dark px-2 py-0.5 rounded">
            python-fullstack
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <nav className="flex gap-0.5">
            {routes.map((r) => (
              <a
                key={r.id}
                href={`#${r.id}`}
                className={`font-mono text-[12.5px] px-3 py-2 rounded-md flex items-center gap-1.5 transition-all ${
                  activeId === r.id
                    ? 'text-white bg-ink-soft border border-line-dark shadow-sm'
                    : 'text-muted hover:text-white hover:bg-ink-soft/70'
                }`}
              >
                <span className={activeId === r.id ? 'text-accent2 font-semibold' : 'text-accent font-semibold'}>
                  {r.method}
                </span>
                {r.label}
              </a>
            ))}
          </nav>

          {/* Quick Resume Button */}
          <button
            onClick={onOpenResume}
            className="ml-2 flex items-center gap-1.5 font-mono text-[12px] text-accent bg-accent/10 border border-accent/35 rounded-md px-3 py-1.5 hover:bg-accent hover:text-white transition-all shadow-sm group"
            title="Preview Resume"
          >
            <FileText size={13} className="text-accent group-hover:text-white transition-colors" />
            <span className="font-semibold">Resume</span>
          </button>

          {/* Download Direct */}
          <a
            href={profile.resumeUrl}
            onClick={downloadResume}
            download="Aryan-Rathod-Resume.pdf"
            className="flex items-center gap-1 font-mono text-[11px] text-muted hover:text-white border border-line-dark hover:border-accent/40 rounded-md px-2 py-1.5 transition-colors cursor-pointer"
            title="Download PDF"
          >
            <Download size={12} />
            <span className="hidden xl:inline">PDF</span>
          </a>

          {/* Command Palette Button */}
          <button
            onClick={onOpenPalette}
            className="ml-2 flex items-center gap-1.5 font-mono text-[11.5px] text-muted border border-line-dark rounded-md px-2.5 py-1.5 hover:text-white hover:border-muted transition-colors"
            aria-label="Open command palette"
          >
            <Command size={12} /> K
          </button>
        </div>

        {/* Mobile menu button & quick resume */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1 font-mono text-xs text-accent bg-accent/10 border border-accent/30 rounded px-2.5 py-1.5"
          >
            <FileText size={13} />
            Resume
          </button>
          <button
            className="text-white border border-line-dark rounded-md w-10 h-9 flex items-center justify-center hover:bg-ink-soft"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <nav
        className={`md:hidden bg-ink border-b border-line-dark overflow-hidden transition-[max-height] duration-300 ${
          open ? 'max-h-[460px]' : 'max-h-0'
        }`}
      >
        <div className="p-3 space-y-1">
          {routes.map((r) => (
            <a
              key={r.id}
              href={`#${r.id}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-4 py-2.5 font-mono text-[13px] text-muted hover:text-white hover:bg-ink-soft rounded-lg transition-colors"
            >
              <span className="text-accent font-semibold">{r.method}</span>
              {r.label}
            </a>
          ))}

          <div className="pt-2 border-t border-line-dark flex flex-col gap-2">
            <button
              onClick={() => {
                setOpen(false)
                onOpenResume()
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 font-mono text-xs bg-accent text-white font-semibold rounded-lg"
            >
              <FileText size={14} /> Preview Resume (PDF)
            </button>
            <a
              href={profile.resumeUrl}
              onClick={downloadResume}
              download="Aryan-Rathod-Resume.pdf"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 font-mono text-xs border border-line-dark text-muted hover:text-white rounded-lg cursor-pointer"
            >
              <Download size={13} /> Download Resume PDF
            </a>
            <button
              onClick={() => {
                setOpen(false)
                onOpenPalette()
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 font-mono text-xs text-muted hover:text-white"
            >
              <Command size={13} /> Command Palette (Ctrl+K)
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
