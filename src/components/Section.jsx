import { motion, useReducedMotion } from 'framer-motion'

export default function Section({ id, eyebrow, title, children, className = '' }) {
  const shouldReduceMotion = useReducedMotion()

  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section id={id} className={`py-16 md:py-24 border-b border-line last:border-b-0 ${className}`}>
      <div className="max-w-[1160px] mx-auto px-6">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={variants}
          className="eyebrow font-mono text-[12.5px] text-accent uppercase tracking-wider mb-3.5 flex items-center"
        >
          {eyebrow}
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={variants}
          className="font-display font-semibold text-3xl md:text-4xl mb-10 tracking-tight"
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  )
}
