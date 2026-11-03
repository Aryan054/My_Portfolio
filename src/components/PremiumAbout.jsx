import { motion } from 'framer-motion'
import { summary, strengths, profile } from '../data/portfolio'
import { CheckCircle2, FileText, ArrowRight, Server, Layout, Brain, Cpu } from 'lucide-react'

export default function PremiumAbout({ onOpenResume }) {
  const pillars = [
    {
      icon: Server,
      title: 'Backend & API Engineering',
      description:
        'Specialized in Django, Django REST Framework, and FastAPI. Architecting scalable RESTful APIs, relational database schemas, and robust ORM queries.',
    },
    {
      icon: Layout,
      title: 'Modern Full-Stack Interfaces',
      description:
        'Building responsive, accessible web frontends in React.js, TypeScript, and modern CSS, seamlessly integrated with backend API endpoints.',
    },
    {
      icon: Brain,
      title: 'AI, NLP & Vector Embeddings',
      description:
        'Practical AI implementation: pgvector semantic search, Sentence-Transformers embeddings, PyTorch neural networks, and automated resume parsing.',
    },
    {
      icon: Cpu,
      title: 'Production SaaS Reliability',
      description:
        '6+ months debugging production systems, tracing root causes, and delivering clean, maintainable fixes for B2B SaaS and fintech platforms.',
    },
  ]

  return (
    <section id="about" className="py-14 sm:py-20 md:py-28 bg-gradient-to-b from-white to-paper-soft border-b border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14"
        >
          <div className="inline-block font-mono text-xs text-accent bg-accent-soft border border-accent/25 px-3 py-1.5 rounded-full mb-4">
            // Professional Summary
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-ink_text mb-4 sm:mb-6 tracking-tight">
            Engineering Scalable Software &amp; Intelligent Workflows
          </h2>
          <div className="p-5 sm:p-6 md:p-8 rounded-2xl bg-white border border-line shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 sm:w-2 bg-gradient-to-b from-accent to-accent2" />
            <p className="text-base sm:text-lg md:text-xl text-ink_text leading-relaxed font-normal">
              {summary}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-mono text-text-soft">
              <span className="flex items-center gap-1.5 text-accent font-semibold">
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                Immediate Availability
              </span>
              <span className="text-muted hidden sm:inline">•</span>
              <span>Pune, Maharashtra, India</span>
              <span className="text-muted hidden sm:inline">•</span>
              <span>B.E. in AI &amp; ML (SPPU, 2025)</span>
              <span className="text-muted hidden sm:inline">•</span>
              <button
                onClick={onOpenResume}
                className="text-accent underline font-semibold hover:text-accent2 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <FileText size={12} /> View Resume
              </button>
            </div>
          </div>
        </motion.div>

        {/* 4 Engineering Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-line rounded-2xl p-5 sm:p-6 hover:border-accent/40 transition-all hover:shadow-md"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent-soft text-accent flex items-center justify-center mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-ink_text text-sm sm:text-base mb-2">{pillar.title}</h3>
                <p className="text-xs text-text-soft leading-relaxed">{pillar.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Core Strengths Checklist & Quick Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-accent/5 via-white to-accent2/5 border border-accent/25 rounded-2xl p-5 sm:p-8 md:p-10 shadow-sm"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-ink_text">Key Demonstrated Competencies</h3>
              <p className="text-xs sm:text-sm text-text-soft mt-1">
                Verified achievements from live enterprise codebases and academic research.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-ink text-white font-mono text-xs font-medium hover:bg-ink-soft transition-all w-full sm:w-fit cursor-pointer"
            >
              <span>Connect with Aryan</span>
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
            {strengths.map((str, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-2.5 sm:gap-3 bg-white/80 border border-line/60 rounded-xl p-3 sm:p-3.5"
              >
                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-ink_text leading-relaxed font-medium">{str}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
