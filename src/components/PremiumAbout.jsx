import { motion } from 'framer-motion'
import { aboutStory } from '../data/portfolio'

export default function PremiumAbout() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-white to-paper-soft border-b border-line">
      <div className="max-w-6xl mx-auto px-6">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block font-mono text-xs text-accent bg-accent-soft border border-accent/25 px-3 py-1.5 rounded-full mb-4">
            // About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink_text mb-6">{aboutStory.intro}</h2>
          <p className="text-lg text-text-soft max-w-2xl leading-relaxed">{aboutStory.motivation}</p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-ink_text mb-12">My Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-12 top-0 bottom-0 w-px bg-line" />

            <div className="space-y-12">
              {aboutStory.journey.map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-0 md:pl-32"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-0 top-2 w-6 h-6 rounded-full bg-white border-4 border-accent" />

                  {/* Event card */}
                  <div className="bg-white border border-line rounded-xl p-6 hover:border-accent/30 transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-bold text-ink_text">{event.title}</h4>
                      <span className="font-mono text-sm text-accent bg-accent-soft px-3 py-1 rounded">{event.year}</span>
                    </div>
                    <p className="text-text-soft">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values / Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-accent/5 to-accent2/5 border border-accent/20 rounded-2xl p-10"
        >
          <h3 className="text-2xl font-bold text-ink_text mb-8">What I Value</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {aboutStory.values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-3"
              >
                <div className="text-accent text-xl mt-1">✓</div>
                <p className="text-ink_text font-medium">{value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
