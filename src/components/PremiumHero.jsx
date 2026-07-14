import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function PremiumHero() {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-20 pb-20 md:pb-24 overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at 85% 15%, rgba(45,125,110,0.1) 0%, transparent 45%), radial-gradient(circle at 15% 85%, rgba(201,138,42,0.08) 0%, transparent 45%), #F6F5F1',
      }}
    >
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.span
          className="absolute right-0 top-8 w-32 h-32 rounded-full bg-accent/10 blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.span
          className="absolute left-1/3 top-40 w-40 h-40 rounded-full bg-accent2/10 blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          {/* Left: Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Status badge */}
            <motion.div
              className="inline-flex items-center gap-2 font-mono text-[12.5px] text-accent bg-accent-soft border border-accent/25 px-4 py-2 rounded-full mb-6 w-fit"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-accent"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Open to full-time opportunities
            </motion.div>

            {/* Main headline */}
            <motion.h1
              className="text-[clamp(42px,6.5vw,68px)] font-bold leading-[1.1] mb-5 tracking-tight text-ink_text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <span>Backend Engineer</span>
              <br />
              <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                & AI Systems Builder
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg text-text-soft max-w-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {profile.subtitle}
            </motion.p>

            {/* Stats row */}
            <motion.div
              className="flex gap-8 mb-10 text-sm flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div>
                <div className="font-bold text-ink_text text-lg">3+</div>
                <div className="text-text-soft text-sm">Production Projects</div>
              </div>
              <div>
                <div className="font-bold text-ink_text text-lg">9mo</div>
                <div className="text-text-soft text-sm">Backend Experience</div>
              </div>
              <div>
                <div className="font-bold text-ink_text text-lg">B.E. AI/ML</div>
                <div className="text-text-soft text-sm">SPPU 2025</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-ink text-white font-medium transition-all shadow-md"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-ink_text text-ink_text font-medium hover:bg-ink_text/5 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={16} /> Get In Touch
              </motion.a>
              <motion.a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-line text-ink_text font-medium hover:bg-paper-soft transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github size={16} /> GitHub
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex gap-4 text-text-soft"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Linkedin size={22} />
              </motion.a>
              <motion.a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Github size={22} />
              </motion.a>
              <motion.a
                href={`mailto:${profile.email}`}
                className="hover:text-accent transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Mail size={22} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Hero visual */}
          <motion.div
            className="hidden md:block relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-line bg-gradient-to-br from-accent/10 via-accent2/5 to-paper-soft shadow-2xl">
              {/* Professional photo */}
              <img
                src={profile.photoUrl}
                alt="Aryan Rathod"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextElementSibling.style.display = 'flex'
                }}
              />

              {/* Fallback placeholder if image not found */}
              <div className="absolute inset-0 hidden w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/5 via-accent2/5 to-paper-soft">
                <div className="text-center">
                  <div className="text-7xl mb-4">👨‍💻</div>
                  <p className="text-text-soft font-mono text-sm">Professional photo not found</p>
                  <p className="text-text-soft font-mono text-xs mt-1">Add to: public/aryan-professional.jpg</p>
                </div>
              </div>

              {/* Floating stats cards removed as per request */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
