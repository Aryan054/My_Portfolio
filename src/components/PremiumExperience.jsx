import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experience } from '../data/portfolio'
import { ArrowRight } from 'lucide-react'

function ExperienceCard({ item }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const details = item.bullets || item.achievements

  return (
    <div className="bg-gradient-to-br from-white to-paper-soft border border-line rounded-xl p-7 hover:border-accent/50 transition-all hover:shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-sm text-accent bg-accent-soft px-2 py-1 rounded">
              {item.verb}
            </span>
            <span className="font-mono text-xs text-text-soft">{item.dates}</span>
          </div>
          <h3 className="text-xl font-bold text-ink_text">{item.title}</h3>
        </div>
      </div>

      <p className="text-text-soft mb-3">{item.company || item.org}</p>
      <p className="text-sm text-text-soft mb-4">{item.description}</p>

      <AnimatePresence>
        {isExpanded && details && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <ul className="space-y-2 text-sm text-text-soft mb-4 pt-2 border-t border-line">
              {details.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {details && (
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-accent text-sm font-bold hover:text-accent2 transition-colors flex items-center gap-1"
          whileHover={{ x: 4 }}
        >
          {isExpanded ? 'Show Less' : 'Learn More'} 
          <ArrowRight size={14} className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
        </motion.button>
      )}
    </div>
  )
}

export default function PremiumExperience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-white border-b border-line">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block font-mono text-xs text-accent bg-accent-soft border border-accent/25 px-3 py-1.5 rounded-full mb-4">
            // Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink_text mb-4">Professional Timeline</h2>
          <p className="text-lg text-text-soft max-w-2xl">
            Production experience across multiple companies and domains, learning from real-world challenges.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-16 top-0 bottom-0 w-px bg-line" />

          <div className="space-y-8">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-0 md:pl-40"
              >
                <div className="hidden md:block absolute left-4 top-4 w-6 h-6 rounded-full bg-accent border-4 border-white shadow-lg" />
                <ExperienceCard item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
