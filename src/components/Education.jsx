import { motion } from 'framer-motion'
import Section from './Section'
import { education, certifications } from '../data/portfolio'

export default function Education() {
  return (
    <Section id="education" eyebrow="records" title="Education /education">
      <div className="grid md:grid-cols-[1.3fr_1fr] gap-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="bg-white border border-line rounded-[10px] p-6.5"
        >
          <h3 className="font-display text-lg mb-1.5">{education.degree}</h3>
          <p className="text-text-soft text-sm mb-1">{education.school}</p>
          <p className="font-mono text-xs text-muted">{education.dates}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="bg-white border border-line rounded-[10px] p-6.5"
        >
          <h3 className="font-display text-lg mb-3.5">Certifications</h3>
          <ul className="list-none p-0 m-0">
            {certifications.map((c, i) => (
              <li
                key={i}
                className="flex items-center gap-2.5 text-sm text-text-soft py-2.5 border-t border-line first:border-t-0 first:pt-0"
              >
                <span className="font-mono text-[11px] text-accent bg-accent-soft px-1.5 py-0.5 rounded shrink-0">
                  OK
                </span>
                {c}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  )
}
