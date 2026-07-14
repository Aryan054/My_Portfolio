import { motion } from 'framer-motion'
import Section from './Section'
import { skillGroups } from '../data/portfolio'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="headers" title="Skills /skills">
      <div className="grid md:grid-cols-3 gap-5">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: gi * 0.08 }}
            whileHover={{ scale: 1.01 }}
            className="bg-white border border-line rounded-[10px] p-6 transition-transform will-change-transform"
          >
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent mb-4">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
