import { motion } from 'framer-motion'
import { education, certifications } from '../data/portfolio'
import { Award, BookOpen } from 'lucide-react'

export default function EducationNew() {
  return (
    <section id="education" className="py-20 md:py-28 bg-white border-b border-line">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block font-mono text-xs text-accent bg-accent-soft border border-accent/25 px-3 py-1.5 rounded-full mb-4">
            // Education
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink_text mb-4">Degrees & Certifications</h2>
          <p className="text-lg text-text-soft max-w-2xl">Continuous learner with formal education in AI/ML and industry certifications.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Degree */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent/10 to-accent2/10 border-2 border-accent/30 rounded-2xl p-8 hover:border-accent/60 transition-all"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <BookOpen className="text-accent" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-ink_text">{education.degree}</h3>
                <p className="text-accent font-semibold mt-1">{education.school}</p>
              </div>
            </div>
            <p className="font-mono text-sm text-text-soft mb-6">{education.dates}</p>
            <div className="flex items-center gap-2 text-accent font-mono text-sm">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Specialization in AI & ML
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-accent2/10 to-accent/10 border-2 border-accent2/30 rounded-2xl p-8 hover:border-accent2/60 transition-all"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-accent2/20 flex items-center justify-center flex-shrink-0">
                <Award className="text-accent2" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-ink_text">Certifications</h3>
                <p className="text-accent2 font-semibold mt-1">Professional Credentials</p>
              </div>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <span className="font-mono text-xs text-white bg-accent2 px-2.5 py-1 rounded font-bold">✓</span>
                  <span className="text-ink_text">{cert}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
