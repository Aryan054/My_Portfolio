import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { recruiterHighlights, profile } from '../data/portfolio'
import { FileText, Download, CheckCircle, Sparkles } from 'lucide-react'
import { downloadResume } from '../utils/downloadResume'

export default function QuickWins({ onOpenResume }) {
  const [repoCount, setRepoCount] = useState('15+')

  useEffect(() => {
    fetch('https://api.github.com/users/aryan054')
      .then((res) => res.json())
      .then((data) => {
        if (data.public_repos !== undefined) {
          setRepoCount(`${data.public_repos}+`)
        }
      })
      .catch(() => {})
  }, [])

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white border-b border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 font-mono text-xs text-accent bg-accent-soft border border-accent/25 px-3 py-1.5 rounded-full mb-3">
              <Sparkles size={13} />
              <span>// Recruiter Quick Match</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ink_text tracking-tight">
              Why Aryan for Your Engineering Team?
            </h2>
            <p className="text-text-soft text-sm sm:text-base mt-2 max-w-2xl">
              High-impact engineering delivered across production SaaS, fintech workflows, and AI systems.
            </p>
          </div>

          {/* Quick Resume CTA */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenResume}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-accent/40 bg-accent/5 hover:bg-accent text-accent hover:text-white font-mono text-xs font-semibold transition-all shadow-sm cursor-pointer"
            >
              <FileText size={14} />
              <span>View Resume (PDF)</span>
            </button>
            <a
              href={profile.resumeUrl}
              onClick={downloadResume}
              download="Aryan-Rathod-Resume.pdf"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-line hover:border-ink bg-white text-ink_text font-mono text-xs font-medium transition-all cursor-pointer"
            >
              <Download size={14} />
              <span>Download</span>
            </a>
          </div>
        </div>

        {/* 6-Grid Recruiter Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {recruiterHighlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative bg-gradient-to-br from-white to-paper/60 border border-line rounded-2xl p-5 sm:p-6 hover:border-accent/40 transition-all hover:shadow-xl"
            >
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-mono text-[11px] text-accent bg-accent-soft border border-accent/20 px-2.5 py-0.5 rounded-full font-semibold">
                  {item.tag}
                </span>
              </div>

              {/* Metric & Title */}
              <div className="text-xl sm:text-2xl font-bold text-ink_text mb-1 flex items-center gap-2">
                {item.metric}
                {item.title === 'Immediate Availability' && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-ink_text text-base mb-2 group-hover:text-accent transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-soft leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner with Live GitHub and SPPU Details */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 p-4 sm:p-5 rounded-2xl bg-paper-soft/70 border border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs text-text-soft"
        >
          <div className="flex items-start sm:items-center gap-2">
            <CheckCircle size={16} className="text-accent shrink-0 mt-0.5 sm:mt-0" />
            <span>
              <strong className="text-ink_text font-semibold">Education &amp; Availability:</strong> B.E. in AI &amp; ML (SPPU, 2021–2025) · 7.24/10 CGPA · Ready to join immediately.
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
            <span>
              GitHub Repos: <strong className="text-ink_text">{repoCount}</strong>
            </span>
            <span>
              Location: <strong className="text-ink_text">Pune, MH</strong>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
