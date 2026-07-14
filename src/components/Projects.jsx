import { motion } from 'framer-motion'
import Section from './Section'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <Section id="projects" eyebrow="endpoints" title="Projects /projects">
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.path}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.08, type: 'spring', stiffness: 140, damping: 20 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="bg-white border border-line rounded-[10px] overflow-hidden flex flex-col hover:shadow-[0_16px_32px_-20px_rgba(15,20,25,0.35)] transition-shadow will-change-transform"
          >
            <div className="flex items-center gap-2.5 px-4.5 py-3.5 bg-ink font-mono text-[12.5px]">
              <span className="text-[#6FE3C4] font-bold">GET</span>
              <span className="text-[#D6DCE5] truncate">{p.path}</span>
              <span className="ml-auto text-accent2 font-semibold shrink-0">200</span>
            </div>
            <div className="p-5.5 flex-1 flex flex-col">
              <h3 className="font-display text-lg mb-2.5">{p.title}</h3>
              <ul className="text-sm text-text-soft space-y-1.5 mb-4 list-disc pl-4.5 marker:text-line">
                {p.bullets.map((b, bi) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[11px] text-accent bg-accent-soft border border-accent/20 px-2 py-0.5 rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
