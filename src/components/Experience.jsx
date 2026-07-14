import { motion } from 'framer-motion'
import Section from './Section'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="activity log" title="Experience /experience">
      <div className="border-l-2 border-line ml-1.5">
        {experience.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative pl-8 pb-10 last:pb-1"
          >
            <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-paper border-2 border-accent" />
            <div className="font-mono text-xs text-muted mb-1.5 flex gap-2.5 flex-wrap items-center">
              <span className="text-accent2 font-semibold">{item.verb}</span>
              {item.dates}
            </div>
            <h3 className="font-display text-lg mb-1">{item.title}</h3>
            <p className="text-text-soft text-[14.5px] mb-3">{item.org}</p>
            <ul className="text-[14.5px] text-text-soft pl-4.5 space-y-1.5 list-disc marker:text-line">
              {item.bullets.map((b, bi) => (
                <li key={bi}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
