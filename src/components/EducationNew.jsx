import { motion } from 'framer-motion'
import { education, certifications, languages, profile } from '../data/portfolio'
import { Award, BookOpen, Globe, CheckCircle2, FileText, GraduationCap } from 'lucide-react'

export default function EducationNew({ onOpenResume }) {
  return (
    <section id="education" className="py-20 md:py-28 bg-paper/30 border-b border-line">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="inline-block font-mono text-xs text-accent bg-accent-soft border border-accent/25 px-3 py-1.5 rounded-full mb-4">
            // Academic Background &amp; Certifications
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-ink_text tracking-tight mb-3">
            Education, Credentials &amp; Certifications
          </h2>
          <p className="text-lg text-text-soft max-w-2xl">
            Formal engineering degree in Artificial Intelligence &amp; Machine Learning from SPPU alongside industry-recognized professional certifications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Degree Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white border border-line rounded-2xl p-7 md:p-8 hover:border-accent/40 transition-all shadow-sm"
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent-soft text-accent flex items-center justify-center shrink-0">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <div className="inline-block font-mono text-[11px] text-accent bg-accent-soft px-2.5 py-0.5 rounded-full font-semibold mb-1">
                    Formal Degree
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-ink_text leading-tight">
                    {education.degree}
                  </h3>
                  <p className="text-sm font-semibold text-accent mt-1">{education.school}</p>
                  <p className="text-xs text-text-soft mt-0.5">{education.college}</p>
                </div>
              </div>
            </div>

            {/* Dates & CGPA Row */}
            <div className="grid sm:grid-cols-2 gap-4 p-4 rounded-xl bg-paper border border-line mb-6 font-mono text-xs">
              <div>
                <span className="text-text-soft">Timeline:</span>
                <p className="font-semibold text-ink_text mt-0.5">{education.dates}</p>
              </div>
              <div>
                <span className="text-text-soft">Cumulative GPA:</span>
                <p className="font-bold text-accent text-sm mt-0.5">{education.cgpa}</p>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div>
              <div className="font-mono text-xs text-text-soft font-semibold uppercase tracking-wider mb-3">
                Key Curriculum &amp; Specialization
              </div>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course, cIdx) => (
                  <span
                    key={cIdx}
                    className="font-mono text-xs px-3 py-1 bg-paper-soft text-ink_text border border-line rounded-lg"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications & Languages (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Certifications Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-line rounded-2xl p-6 md:p-7 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-accent2-soft text-accent2 flex items-center justify-center shrink-0">
                  <Award size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-ink_text">Certifications</h3>
                  <p className="text-xs text-text-soft font-mono">Industry credentials from resume</p>
                </div>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 2 }}
                    className="flex items-center justify-between p-3 rounded-xl bg-paper/60 border border-line/70 text-xs"
                  >
                    <div>
                      <div className="font-bold text-ink_text">{cert.title}</div>
                      <div className="text-text-soft font-mono text-[11px] mt-0.5">{cert.issuer}</div>
                    </div>
                    <span className="font-mono text-[10px] text-accent font-semibold bg-accent-soft px-2 py-0.5 rounded">
                      {cert.badge}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages & Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-white to-paper-soft border border-line rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <Globe size={18} className="text-accent" />
                <h4 className="font-bold text-sm text-ink_text uppercase tracking-wider font-mono">
                  Languages &amp; Availability
                </h4>
              </div>

              <div className="space-y-2 mb-4">
                {languages.map((lang, lIdx) => (
                  <div key={lIdx} className="flex items-center justify-between text-xs font-mono">
                    <span className="font-semibold text-ink_text">{lang.language}</span>
                    <span className="text-text-soft">{lang.proficiency}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-line flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-emerald-700">Immediate Availability</span>
                </div>
                <button
                  onClick={onOpenResume}
                  className="text-xs font-mono text-accent hover:underline font-semibold"
                >
                  View Resume →
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
