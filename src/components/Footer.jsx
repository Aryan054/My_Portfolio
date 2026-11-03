import { useEffect, useState } from 'react'
import { FileText, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Footer({ onOpenResume }) {
  const [ms, setMs] = useState(12.0)

  useEffect(() => {
    const id = setInterval(() => setMs(Math.random() * 6 + 9), 2500)
    return () => clearInterval(id)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-8 sm:py-10 bg-ink text-muted border-t border-line-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 pb-6 border-b border-line-dark/60">
          <div>
            <div className="font-bold text-white text-base tracking-tight">
              Aryan Rathod
            </div>
            <p className="font-mono text-xs text-muted mt-0.5">
              Python Full Stack Developer · Django · FastAPI · PostgreSQL · React
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono">
            <button
              onClick={onOpenResume}
              className="text-accent hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <FileText size={13} />
              <span>Resume PDF</span>
            </button>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Github size={13} />
              <span>GitHub</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Linkedin size={13} />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Mail size={13} />
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pt-6 font-mono text-[11px] sm:text-[11.5px]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span>© 2026 Aryan Rathod · Pune, Maharashtra, IN</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-emerald-400">Immediate Availability</span>
          </div>

          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
            <span className="text-muted/80">x-response-time: {ms.toFixed(1)}ms</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg border border-line-dark hover:border-accent text-muted hover:text-white transition-colors cursor-pointer"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
