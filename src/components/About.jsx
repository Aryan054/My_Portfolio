import { motion } from 'framer-motion'
import Section from './Section'
import { summary, strengths } from '../data/portfolio'

export default function About() {
  return (
    <Section id="about" eyebrow="summary" title="About /about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-line rounded-[10px] p-8"
      >
        <span className="block font-mono text-[11.5px] text-muted mb-4">response_body.summary</span>
        <p className="text-[16.5px] max-w-[78ch]">{summary}</p>

        <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-3.5 list-none p-0">
          {strengths.map((s, i) => (
            <li key={i} className="text-[14.5px] text-text-soft relative pl-5">
              <span className="absolute left-0 text-accent">▹</span>
              {s}
            </li>
          ))}
        </ul>
      </motion.div>
    </Section>
  )
}
