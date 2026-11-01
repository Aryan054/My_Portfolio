import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, ExternalLink, Mail, Phone, FileText } from 'lucide-react'
import { profile } from '../data/portfolio'
import { downloadResume } from '../utils/downloadResume'

export default function ResumeModal({ open, onClose }) {
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
          className="fixed inset-0 z-[250] bg-ink/75 backdrop-blur-md flex items-center justify-center p-3 md:p-6"
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
            className="w-full max-w-5xl h-[92vh] bg-ink border border-line-dark rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-ink-soft border-b border-line-dark">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base md:text-lg flex items-center gap-2">
                    Aryan Rathod — Resume
                    <span className="font-mono text-xs text-accent bg-accent/15 border border-accent/30 px-2.5 py-0.5 rounded-full">
                      PDF
                    </span>
                  </h3>
                  <p className="text-xs text-muted font-mono">
                    Python Full Stack Developer · B.E. AI &amp; ML · Immediate Availability
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href={`mailto:${profile.email}`}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line-dark text-muted hover:text-white hover:border-accent text-xs font-mono transition-colors"
                >
                  <Mail size={13} />
                  <span>Email</span>
                </a>
                <a
                  href={`tel:${profile.phone}`}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line-dark text-muted hover:text-white hover:border-accent text-xs font-mono transition-colors"
                >
                  <Phone size={13} />
                  <span>Call</span>
                </a>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-line-dark text-muted hover:text-white hover:border-accent text-xs font-mono transition-colors"
                >
                  <ExternalLink size={13} />
                  <span>New Tab</span>
                </a>
                <a
                  href={profile.resumeUrl}
                  onClick={downloadResume}
                  download="Aryan-Rathod-Resume.pdf"
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-accent hover:bg-accent/90 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
                >
                  <Download size={14} />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-1.5 text-muted hover:text-white hover:bg-ink rounded-lg transition-colors ml-1"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Resume Viewer Body */}
            <div className="flex-1 bg-[#20252D] relative overflow-hidden">
              <iframe
                src={`${profile.resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                title="Aryan Rathod Resume"
                className="w-full h-full border-0"
              />
            </div>

            {/* Recruiter quick bar at the bottom */}
            <div className="px-6 py-2.5 bg-ink-soft border-t border-line-dark flex items-center justify-between text-xs text-muted font-mono flex-wrap gap-2">
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
