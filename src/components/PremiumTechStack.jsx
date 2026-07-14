import { motion } from 'framer-motion'
import { techStackByCategory } from '../data/portfolio'

function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent2/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all" />
      <div className="relative bg-white border border-line rounded-lg p-4 group-hover:border-accent/50 transition-all">
        <div className="font-bold text-sm text-ink_text mb-3">{skill.name}</div>

        <div className="w-full bg-paper-soft rounded-full h-2 overflow-hidden mb-2">
          <motion.div
            className="h-full bg-gradient-to-r from-accent to-accent2 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.proficiency}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>

        <div className="flex justify-between items-center text-xs text-text-soft font-mono">
          <span>{skill.proficiency}%</span>
          <span>{skill.years}y</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function PremiumTechStack() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-white border-b border-line">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block font-mono text-xs text-accent bg-accent-soft border border-accent/25 px-3 py-1.5 rounded-full mb-4">
            // Technical Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink_text mb-4">Expertise &amp; Skills</h2>
          <p className="text-lg text-text-soft max-w-2xl">
            Proficiency levels across key technologies and frameworks I use in production.
          </p>
        </motion.div>

        <div className="space-y-12">
          {techStackByCategory.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-ink_text mb-2">{category.category}</h3>
                <p className="text-sm text-text-soft">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, idx) => (
                  <SkillCard key={idx} skill={skill} index={catIdx * 10 + idx} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
