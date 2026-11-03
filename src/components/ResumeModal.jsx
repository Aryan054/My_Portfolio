import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, ExternalLink, Mail, Phone, FileText, Smartphone } from 'lucide-react'
import { profile } from '../data/portfolio'
import { downloadResume } from '../utils/downloadResume'

export default function ResumeModal({ open, onClose }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768)
    }
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && open) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[250] bg-ink/75 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Resume Preview"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl h-[94vh] bg-ink border border-line-dark rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-2 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3.5 bg-ink-soft border-b border-line-dark shrink-0">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center text-accent shrink-0">
                  <FileText size={18} className="sm:hidden" />
                  <FileText size={20} className="hidden sm:block" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-white text-sm sm:text-base md:text-lg flex items-center gap-1.5 sm:gap-2 truncate">
                    <span className="truncate">Aryan Rathod</span>
                    <span className="font-mono text-[9.5px] sm:text-[10px] text-accent bg-accent/15 border border-accent/30 px-1.5 sm:px-2 py-0.5 rounded-full font-semibold shrink-0">
                      PDF
                    </span>
                  </h3>
                  <p className="text-[11px] sm:text-xs text-muted font-mono hidden md:block truncate">
                    Python Full Stack Developer · B.E. AI &amp; ML · Immediate Availability
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <a
                  href={`mailto:${profile.email}`}
                  className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line-dark text-muted hover:text-white hover:border-accent text-xs font-mono transition-colors"
                >
                  <Mail size={13} />
                  <span>Email</span>
                </a>
                <a
                  href={`tel:${profile.phone}`}
                  className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line-dark text-muted hover:text-white hover:border-accent text-xs font-mono transition-colors"
                >
                  <Phone size={13} />
                  <span>Call</span>
                </a>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg border border-line-dark text-muted hover:text-white hover:border-accent text-[11px] sm:text-xs font-mono transition-colors"
                  title="Open PDF in new tab"
                >
                  <ExternalLink size={13} />
                  <span className="hidden sm:inline">New Tab</span>
                </a>
                <a
                  href={profile.resumeUrl}
                  onClick={downloadResume}
                  download="Aryan-Rathod-Resume.pdf"
                  className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg bg-accent hover:bg-accent/90 text-white text-[11px] sm:text-xs font-semibold shadow-sm transition-all cursor-pointer"
                >
                  <Download size={13} />
                  <span>Download</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-1.5 text-muted hover:text-white hover:bg-ink rounded-lg transition-colors ml-0.5 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Mobile Helper Banner */}
            <div className="bg-ink px-3 sm:px-4 py-2 border-b border-line-dark flex items-center justify-between text-xs text-muted font-mono flex-wrap gap-2">
              <span className="flex items-center gap-1.5 text-white">
                <Smartphone size={13} className="text-accent" />
                <span>Viewing PDF Resume</span>
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center gap-1 font-semibold"
                >
                  <ExternalLink size={11} /> Open Fullscreen
                </a>
                <button
                  onClick={downloadResume}
                  className="text-white hover:text-accent font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Download size={11} /> Download File
                </button>
              </div>
            </div>

            {/* Resume Viewer Body */}
            <div className="flex-1 bg-[#20252D] relative overflow-hidden flex flex-col">
              <object
                data={`${profile.resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                type="application/pdf"
                className="w-full h-full flex-1"
              >
                <iframe
                  src={`${profile.resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                  title="Aryan Rathod Resume"
                  className="w-full h-full border-0 flex-1"
                >
                  <div className="flex flex-col items-center justify-center h-full text-center p-8 text-white space-y-4">
                    <FileText size={48} className="text-accent" />
                    <p className="text-sm font-mono text-muted max-w-md">
                      Your browser does not support inline PDF previews. You can open the resume directly in a new tab or download it.
                    </p>
                    <div className="flex items-center gap-3">
                      <a
                        href={profile.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-accent text-white font-mono text-xs rounded-lg font-semibold"
                      >
                        Open PDF in New Tab
                      </a>
                      <button
                        onClick={downloadResume}
                        className="px-4 py-2 bg-ink-soft border border-line-dark text-white font-mono text-xs rounded-lg font-semibold"
                      >
                        Download PDF
                      </button>
                    </div>
                  </div>
                </iframe>
              </object>
            </div>

            {/* Recruiter quick bar at the bottom */}
            <div className="px-4 md:px-6 py-2.5 bg-ink-soft border-t border-line-dark flex items-center justify-between text-xs text-muted font-mono flex-wrap gap-2 shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-white font-medium">Available Immediately</span>
                <span className="text-muted hidden md:inline">· Pune / Hybrid / Remote</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Phone: {profile.phone}</span>
                <span>Email: {profile.email}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
