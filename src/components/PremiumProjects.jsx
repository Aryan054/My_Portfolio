import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/portfolio'
import { Github, ExternalLink, Sparkles, Check, ArrowUpRight, Code } from 'lucide-react'

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group flex flex-col h-full bg-white border border-line rounded-2xl overflow-hidden hover:border-accent/50 hover:shadow-2xl transition-all"
    >
      {/* Top Media / Preview */}
      <div className="relative w-full h-44 sm:h-52 md:h-56 bg-ink-soft overflow-hidden border-b border-line">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent pointer-events-none" />

        {/* Badges on image */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-1.5 sm:gap-2 flex-wrap">
          <span className="font-mono text-[10.5px] sm:text-[11px] text-white bg-ink/80 backdrop-blur-md border border-white/20 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium">
            {project.badge}
          </span>
          {project.hasLiveDemo && (
            <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] sm:text-[11px] text-white bg-emerald-600/90 backdrop-blur-md px-2.5 py-0.5 sm:py-1 rounded-full font-semibold shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Live Demo
            </span>
          )}
        </div>

        {/* Architecture Pill on Bottom of Image */}
        <div className="absolute bottom-2.5 left-3 right-3 sm:bottom-3 sm:left-4 sm:right-4">
          <span className="font-mono text-[10.5px] sm:text-[11px] text-white/90 bg-ink/85 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-md inline-block max-w-full truncate">
            {project.architecture}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 sm:p-6 md:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Tagline */}
          <div className="mb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-ink_text group-hover:text-accent transition-colors leading-snug">
              {project.title}
            </h3>
            <p className="font-mono text-xs text-accent font-semibold mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-text-soft mb-4 sm:mb-5 leading-relaxed">
            {project.description}
          </p>

          {/* Problem / Solution Grid */}
          <div className="grid grid-cols-1 gap-2 sm:gap-2.5 mb-4 sm:mb-5 p-3 sm:p-3.5 bg-paper rounded-xl border border-line text-xs">
            <div>
              <span className="font-mono text-accent font-bold uppercase tracking-wider text-[10px]">
                Challenge
              </span>
              <p className="text-ink_text font-medium mt-0.5 leading-snug">{project.problem}</p>
            </div>
            <div className="pt-2 border-t border-line/60">
              <span className="font-mono text-accent font-bold uppercase tracking-wider text-[10px]">
                Engineering Solution
              </span>
              <p className="text-ink_text font-medium mt-0.5 leading-snug">{project.solution}</p>
            </div>
          </div>

          {/* Key Features Bullet List */}
          {project.features && (
            <div className="mb-4 sm:mb-5">
              <div className="font-mono text-[10.5px] sm:text-[11px] text-text-soft font-semibold uppercase tracking-wider mb-2">
                Key Highlights
              </div>
              <ul className="space-y-1.5">
                {project.features.slice(0, 4).map((feat, fIdx) => (
                  <li key={fIdx} className="text-xs text-text-soft flex items-start gap-2">
                    <Check size={14} className="text-accent shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Tech Stack Chips & Action Buttons */}
        <div>
          <div className="mb-5 sm:mb-6 flex flex-wrap gap-1.5 pt-4 border-t border-line">
            {project.stack.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="text-[10.5px] sm:text-[11px] font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 bg-paper-soft text-ink_text border border-line rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
            {project.hasLiveDemo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-accent text-white font-mono text-xs font-semibold hover:bg-accent/90 transition-all shadow-sm cursor-pointer"
              >
                <span>Live Demo</span>
                <ArrowUpRight size={14} />
              </a>
            ) : null}

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer ${
                project.hasLiveDemo
                  ? 'flex-1 border border-line hover:border-ink bg-white text-ink_text'
                  : 'w-full bg-ink text-white hover:bg-ink-soft'
              }`}
            >
              <Github size={14} />
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function PremiumProjects() {
  const [filter, setFilter] = useState('all')

  const filterTabs = [
    { id: 'all', label: 'All Projects (4)' },
    { id: 'fullstack', label: 'Full Stack & APIs (2)' },
    { id: 'ai-nlp', label: 'AI & Machine Learning (2)' },
  ]

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true
    if (filter === 'fullstack') return p.category.includes('Full Stack')
    if (filter === 'ai-nlp') return p.category.includes('AI') || p.category.includes('Machine Learning')
    return true
  })

  return (
    <section id="projects" className="py-14 sm:py-20 md:py-28 bg-paper/30 border-b border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12"
        >
          <div className="inline-block font-mono text-xs text-accent bg-accent-soft border border-accent/25 px-3 py-1.5 rounded-full mb-4">
            // Featured Projects &amp; Case Studies
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-ink_text tracking-tight mb-2 sm:mb-3">
                Production-Grade Engineering Projects
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-text-soft max-w-2xl">
                Real-world web applications and AI systems showcasing end-to-end architecture, clean APIs, and modern frontends.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex items-center overflow-x-auto pb-1 sm:pb-0 scrollbar-none shrink-0">
              <div className="flex items-center gap-1.5 bg-paper-soft p-1 rounded-xl border border-line shrink-0">
                {filterTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setFilter(tab.id)}
                    className={`font-mono text-xs px-3 py-1.5 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                      filter === tab.id
                        ? 'bg-white text-ink_text font-semibold shadow-xs'
                        : 'text-text-soft hover:text-ink_text'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
