import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight, Download, FileText, CheckCircle2, MapPin } from 'lucide-react'
import { profile } from '../data/portfolio'
import { downloadResume } from '../utils/downloadResume'

export default function PremiumHero({ onOpenResume }) {
  return (
    <section
      id="top"
      className="relative min-h-[90vh] pt-10 pb-14 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at 85% 15%, rgba(45,125,110,0.12) 0%, transparent 45%), radial-gradient(circle at 15% 85%, rgba(201,138,42,0.08) 0%, transparent 45%), #F6F5F1',
      }}
    >
      {/* Background ambient light */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.span
          className="absolute right-4 top-10 w-72 h-72 rounded-full bg-accent/15 blur-3xl"
          animate={{ scale: [1, 1.15, 1], y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          className="absolute left-1/4 bottom-10 w-80 h-80 rounded-full bg-accent2/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], y: [0, -25, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 0.6, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.2fr_0.95fr] gap-10 lg:gap-12 items-center">
          {/* Left: Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Immediate Availability Badge */}
            <motion.div
              className="inline-flex flex-wrap items-center gap-2 font-mono text-xs sm:text-[12.5px] text-accent bg-accent-soft border border-accent/30 px-3 py-1.5 rounded-full mb-5 shadow-sm max-w-full"
              whileHover={{ scale: 1.02 }}
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              <span className="font-semibold text-accent">Available Immediately</span>
              <span className="text-muted hidden xs:inline">·</span>
              <span className="text-text-soft flex items-center gap-1">
                <MapPin size={11} className="shrink-0" /> Pune, IN (Open to Remote)
              </span>
            </motion.div>

            {/* Name & Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-text-soft mb-2 font-semibold">
                Hi, I am {profile.name}
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.12] mb-4 tracking-tight text-ink_text">
                <span>Python Full Stack</span>
                <br />
                <span className="bg-gradient-to-r from-accent via-emerald-700 to-accent2 bg-clip-text text-transparent">
                  Developer &amp; API Engineer
                </span>
              </h1>
            </motion.div>

            {/* Sub-headline: Tech Specialization */}
            <motion.div
              className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-5 font-mono text-xs md:text-sm text-text-soft"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <span className="bg-white border border-line px-2.5 py-1 rounded-md text-ink_text font-semibold shadow-2xs">
                Django &amp; REST APIs
              </span>
              <span className="text-muted">•</span>
              <span className="bg-white border border-line px-2.5 py-1 rounded-md text-ink_text font-semibold shadow-2xs">
                FastAPI
              </span>
              <span className="text-muted">•</span>
              <span className="bg-white border border-line px-2.5 py-1 rounded-md text-ink_text font-semibold shadow-2xs">
                PostgreSQL &amp; pgvector
              </span>
              <span className="text-muted">•</span>
              <span className="bg-white border border-line px-2.5 py-1 rounded-md text-ink_text font-semibold shadow-2xs">
                React.js
              </span>
            </motion.div>

            {/* Subtitle / Summary Hook */}
            <motion.p
              className="text-sm sm:text-base md:text-[17px] text-text-soft max-w-xl mb-7 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {profile.subtitle}
            </motion.p>

            {/* Recruiter CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {/* Primary Resume Preview Button */}
              <motion.button
                onClick={onOpenResume}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold shadow-lg shadow-accent/25 hover:bg-accent/90 transition-all cursor-pointer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FileText size={17} />
                <span>Preview Resume</span>
              </motion.button>

              {/* Download Resume Button */}
              <motion.a
                href={profile.resumeUrl}
                onClick={downloadResume}
                download="Aryan-Rathod-Resume.pdf"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-ink text-white font-semibold hover:bg-ink-soft transition-all shadow-md cursor-pointer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={16} />
                <span>Download PDF</span>
              </motion.a>

              {/* View Projects */}
              <motion.a
                href="#projects"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-line-dark/20 bg-white text-ink_text font-semibold hover:border-accent hover:text-accent transition-all shadow-sm"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View Projects</span>
                <ArrowRight size={15} />
              </motion.a>
            </motion.div>

            {/* Key Metrics Strip */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-line/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="p-2 sm:p-0">
                <div className="text-xl sm:text-2xl font-bold text-ink_text flex items-center gap-1">
                  6+ <span className="text-accent text-xs sm:text-sm">mo</span>
                </div>
                <div className="text-text-soft text-[11px] sm:text-xs font-mono mt-0.5">SaaS &amp; Fintech Intern</div>
              </div>
              <div className="p-2 sm:p-0">
                <div className="text-xl sm:text-2xl font-bold text-ink_text flex items-center gap-1">
                  10+ <span className="text-accent text-xs sm:text-sm">APIs</span>
                </div>
                <div className="text-text-soft text-[11px] sm:text-xs font-mono mt-0.5">Django &amp; DRF Built</div>
              </div>
              <div className="p-2 sm:p-0">
                <div className="text-xl sm:text-2xl font-bold text-ink_text flex items-center gap-1">
                  50+ <span className="text-accent2 text-xs sm:text-sm">Bugs</span>
                </div>
                <div className="text-text-soft text-[11px] sm:text-xs font-mono mt-0.5">Production Clean Fixes</div>
              </div>
              <div className="p-2 sm:p-0">
                <div className="text-xl sm:text-2xl font-bold text-ink_text flex items-center gap-1">
                  7.24 <span className="text-accent text-xs sm:text-sm">CGPA</span>
                </div>
                <div className="text-text-soft text-[11px] sm:text-xs font-mono mt-0.5">B.E. AI &amp; ML (SPPU)</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Photo & Visual Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <div className="relative mx-auto max-w-xs sm:max-w-sm rounded-3xl p-2.5 sm:p-3 bg-white/70 backdrop-blur-sm border-2 border-line/80 shadow-2xl">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-paper-soft to-white border border-line">
                <img
                  src={profile.photoUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = '/aryan-professional.jpg'
                  }}
                />

                {/* Bottom glassmorphic info bar */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-ink/90 via-ink/60 to-transparent text-white backdrop-blur-[2px]">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="font-bold text-sm sm:text-base flex items-center gap-1.5 truncate">
                        <span>{profile.name}</span>
                        <CheckCircle2 size={15} className="text-accent shrink-0" />
                      </div>
                      <div className="text-[11px] sm:text-xs text-paper-soft font-mono truncate">
                        B.E. AI &amp; ML · SPPU Graduate
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono bg-accent/40 border border-accent text-white px-2 py-0.5 sm:py-1 rounded shrink-0">
                      Available
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating tech badge */}
              <motion.div
                className="absolute top-1 right-1 sm:-top-3 sm:-right-3 bg-white/95 sm:bg-white backdrop-blur-xs border border-line rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 shadow-lg flex items-center gap-1.5 sm:gap-2 font-mono text-[11px] sm:text-xs text-ink_text"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span className="font-semibold">FastAPI + DRF</span>
              </motion.div>

              {/* Floating experience badge */}
              <motion.div
                className="absolute bottom-1 left-1 sm:-bottom-3 sm:-left-3 bg-white/95 sm:bg-white backdrop-blur-xs border border-line rounded-lg sm:rounded-xl px-2.5 sm:px-3.5 py-1.5 sm:py-2 shadow-lg flex items-center gap-1.5 sm:gap-2 font-mono text-[11px] sm:text-xs text-ink_text"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 0.5, ease: 'easeInOut' }}
              >
                <span className="text-accent font-bold">SMART360</span>
                <span className="text-muted">·</span>
                <span className="text-text-soft">Meter Workflow</span>
              </motion.div>
            </div>

            {/* Quick social links below photo */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-6 text-text-soft">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono hover:text-accent border border-line bg-white px-3 py-1.5 rounded-lg transition-colors shadow-2xs"
              >
                <Linkedin size={14} className="text-[#0A66C2]" />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono hover:text-accent border border-line bg-white px-3 py-1.5 rounded-lg transition-colors shadow-2xs"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 text-xs font-mono hover:text-accent border border-line bg-white px-3 py-1.5 rounded-lg transition-colors shadow-2xs"
              >
                <Mail size={14} className="text-accent" />
                Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
