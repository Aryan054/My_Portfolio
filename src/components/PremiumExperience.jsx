import { motion } from 'framer-motion'
import { experience, profile } from '../data/portfolio'
import { Briefcase, Calendar, MapPin, CheckCircle2, FileText, ArrowRight } from 'lucide-react'

function ExperienceCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="relative bg-white border border-line rounded-2xl p-7 md:p-8 hover:border-accent/50 transition-all hover:shadow-xl"
    >
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2.5 flex-wrap mb-1.5">
            <span className="font-mono text-xs text-accent bg-accent-soft border border-accent/25 px-2.5 py-0.5 rounded-full font-bold">
              {item.verb}
            </span>
            <span className="font-mono text-xs text-ink_text bg-paper-soft border border-line px-2.5 py-0.5 rounded-full font-semibold">
              {item.badge}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-ink_text tracking-tight">{item.role}</h3>
          <p className="text-base font-semibold text-accent mt-0.5">{item.company}</p>
        </div>

        {/* Date & Location */}
        <div className="font-mono text-xs text-text-soft sm:text-right shrink-0 space-y-1">
          <div className="flex items-center sm:justify-end gap-1.5 text-ink_text font-semibold">
            <Calendar size={13} className="text-accent" />
            <span>{item.dates}</span>
          </div>
          <div className="flex items-center sm:justify-end gap-1.5 text-text-soft">
            <MapPin size={13} />
            <span>{item.location}</span>
          </div>
        </div>
      </div>

      {/* Product Highlight Banner */}
      <div className="p-3.5 mb-5 rounded-xl bg-paper/60 border border-line text-xs font-mono">
        <span className="text-accent font-bold">{item.productName}: </span>
        <span className="text-text-soft">{item.productDesc}</span>
      </div>

      {/* Highlights / Metric Badges */}
      {item.highlights && (
        <div className="grid sm:grid-cols-3 gap-2.5 mb-5">
          {item.highlights.map((hl, hIdx) => (
            <div
              key={hIdx}
              className="p-2.5 rounded-lg bg-accent/[0.04] border border-accent/20 text-xs font-mono text-ink_text flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span className="font-medium truncate">{hl}</span>
            </div>
          ))}
        </div>
      )}

      {/* Detailed Bullets from Resume */}
      <div className="space-y-3 mb-6 pt-2">
        {item.bullets.map((bullet, bIdx) => (
          <div key={bIdx} className="flex items-start gap-3">
            <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-text-soft leading-relaxed">{bullet}</p>
          </div>
        ))}
      </div>

      {/* Tech Stack used in this role */}
      <div className="pt-4 border-t border-line flex flex-wrap items-center gap-2">
        <span className="font-mono text-xs text-text-soft font-semibold mr-1">Stack:</span>
        {item.stack.map((tech, tIdx) => (
          <span
            key={tIdx}
            className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-paper-soft text-ink_text border border-line"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function PremiumExperience({ onOpenResume }) {
  return (
    <section id="experience" className="py-20 md:py-28 bg-white border-b border-line">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="inline-block font-mono text-xs text-accent bg-accent-soft border border-accent/25 px-3 py-1.5 rounded-full mb-4">
            // Professional Experience
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-ink_text tracking-tight mb-3">
                Production Software Internships
              </h2>
              <p className="text-lg text-text-soft max-w-2xl">
                6+ months of live software experience delivering SaaS utility features, fintech workflows, scalable REST APIs, and production bug fixes.
              </p>
            </div>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-accent/40 bg-accent/5 hover:bg-accent text-accent hover:text-white font-mono text-xs font-semibold transition-all shrink-0"
            >
              <FileText size={14} />
              <span>Verify on Resume (PDF)</span>
            </button>
          </div>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experience.map((item, idx) => (
            <ExperienceCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
