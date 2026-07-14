import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'
import { Github, ExternalLink } from 'lucide-react'

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
      className="group"
    >
      <div className="relative bg-white border border-line rounded-2xl overflow-hidden hover:border-accent/50 transition-all hover:shadow-2xl">
        <div className="relative w-full h-48 bg-gradient-to-br from-accent/5 via-accent2/5 to-paper-soft overflow-hidden">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
              📦
            </div>
          )}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/0 to-accent/0"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        <div className="p-7">
          <div className="inline-flex items-center gap-1 font-mono text-xs text-accent bg-accent-soft border border-accent/25 px-2.5 py-1 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Production Ready
          </div>

          <h3 className="text-2xl font-bold text-ink_text mb-3 group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          <p className="text-text-soft mb-4 leading-relaxed">{project.description}</p>

          <div className="grid md:grid-cols-2 gap-4 mb-6 pb-6 border-b border-line">
            <div>
              <span className="text-xs font-mono text-accent font-bold">Problem</span>
              <p className="text-sm text-ink_text mt-1">{project.problem}</p>
            </div>
            <div>
              <span className="text-xs font-mono text-accent font-bold">Solution</span>
              <p className="text-sm text-ink_text mt-1">{project.solution}</p>
            </div>
          </div>

          <div className="bg-paper-soft rounded-lg p-4 mb-6">
            <div className="text-xs font-mono text-accent font-bold mb-2">Impact</div>
            <div className="text-sm text-ink_text font-bold">{project.impact}</div>
          </div>

          {project.features && (
            <div className="mb-6">
              <div className="text-xs font-mono text-accent font-bold mb-3">Key Features</div>
              <div className="grid grid-cols-2 gap-2">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="text-xs text-text-soft flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6 flex flex-wrap gap-2">
            {project.techStack && project.techStack.slice(0, 5).map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1.5 bg-accent/10 text-accent border border-accent/30 rounded-full font-mono"
              >
                {tech}
              </span>
            ))}
            {project.techStack && project.techStack.length > 5 && (
              <span className="text-xs px-3 py-1.5 bg-paper-soft text-text-soft border border-line rounded-full font-mono">
                +{project.techStack.length - 5} more
              </span>
            )}
          </div>

          <div className="flex gap-3">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-ink text-white text-sm font-bold hover:bg-ink/90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} /> Code
            </motion.a>
            <motion.a
              href={project.demo !== '#' ? project.demo : '#'}
              target={project.demo !== '#' ? '_blank' : undefined}
              rel={project.demo !== '#' ? 'noopener noreferrer' : undefined}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-accent/50 text-accent text-sm font-bold hover:bg-accent/5 transition-all cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={16} /> Details
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function PremiumProjects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-white border-b border-line">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block font-mono text-xs text-accent bg-accent-soft border border-accent/25 px-3 py-1.5 rounded-full mb-4">
            // Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink_text mb-4">Case Studies</h2>
          <p className="text-lg text-text-soft max-w-2xl">
            Production-ready projects demonstrating full-stack engineering, problem-solving, and attention to detail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
