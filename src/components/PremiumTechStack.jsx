import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { technicalSkills } from '../data/portfolio'
import { Search, Flame, CheckCircle, Code, Layers } from 'lucide-react'

export default function PremiumTechStack() {
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = useMemo(() => {
    return [
      { id: 'all', label: 'All Technologies' },
      { id: 'backend', label: 'Backend & APIs' },
      { id: 'frontend', label: 'Frontend & UI' },
      { id: 'databases', label: 'Databases & Vector' },
      { id: 'aiMl', label: 'AI, ML & NLP' },
      { id: 'tools', label: 'Tools & DevOps' },
      { id: 'familiar', label: 'Familiar' },
    ]
  }, [])

  // Flatten and filter skills
  const filteredSkills = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    const result = []

    Object.entries(technicalSkills).forEach(([catKey, catData]) => {
      if (activeTab === 'all' || activeTab === catKey) {
        catData.skills.forEach((skill) => {
          if (!q || skill.name.toLowerCase().includes(q) || catData.category.toLowerCase().includes(q)) {
            result.push({
              ...skill,
              categoryName: catData.category,
              catKey,
              icon: catData.icon,
            })
          }
        })
      }
    })

    return result
  }, [activeTab, searchQuery])

  // Count total skills
  const totalSkillsCount = useMemo(() => {
    return Object.values(technicalSkills).reduce((acc, cat) => acc + cat.skills.length, 0)
  }, [])

  const levelColors = {
    Expert: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30',
    Advanced: 'bg-blue-500/10 text-blue-700 border-blue-500/30',
    Intermediate: 'bg-amber-500/10 text-amber-700 border-amber-500/30',
    Familiar: 'bg-purple-500/10 text-purple-700 border-purple-500/30',
  }

  return (
    <section id="skills" className="py-20 md:py-28 bg-white border-b border-line">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-block font-mono text-xs text-accent bg-accent-soft border border-accent/25 px-3 py-1.5 rounded-full mb-4">
            // Technical Skills &amp; Stack
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-ink_text tracking-tight mb-3">
                Expertise &amp; Production Stack
              </h2>
              <p className="text-lg text-text-soft max-w-2xl">
                Comprehensive technical skills based on live production work, university training in AI/ML, and certified programs.
              </p>
            </div>
            <div className="font-mono text-xs text-text-soft bg-paper-soft px-3.5 py-2 rounded-xl border border-line shrink-0">
              <span className="font-bold text-ink_text">{totalSkillsCount}</span> Technologies &amp; Frameworks
            </div>
          </div>
        </motion.div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`font-mono text-xs px-3.5 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-ink text-white font-semibold shadow-sm'
                    : 'bg-paper text-text-soft hover:text-ink_text hover:bg-paper-soft border border-line'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Interactive Search for Recruiters */}
          <div className="relative min-w-[260px]">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. FastAPI, pgvector, Docker)..."
              className="w-full pl-9 pr-4 py-2 text-xs font-mono bg-paper border border-line rounded-xl text-ink_text placeholder:text-muted focus:border-accent focus:bg-white focus:outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink_text text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Categorized View (when all is selected and no search) OR Filtered Grid */}
        {activeTab === 'all' && !searchQuery ? (
          <div className="space-y-10">
            {Object.entries(technicalSkills).map(([catKey, catData], catIdx) => (
              <motion.div
                key={catKey}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.05 }}
                className="p-6 md:p-7 rounded-2xl bg-paper/50 border border-line hover:border-line-dark/30 transition-all"
              >
                <div className="flex items-center justify-between gap-4 mb-5 pb-3 border-b border-line">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">{catData.icon}</span>
                    <h3 className="font-bold text-lg text-ink_text">{catData.category}</h3>
                  </div>
                  <span className="text-xs font-mono text-text-soft hidden sm:inline">
                    {catData.description}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {catData.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      whileHover={{ scale: 1.04, y: -1 }}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-line shadow-2xs hover:border-accent/50 hover:shadow-sm transition-all ${
                        skill.hot ? 'border-accent/40 bg-accent/[0.02]' : ''
                      }`}
                    >
                      {skill.hot && <Flame size={13} className="text-accent shrink-0" />}
                      <span className="font-semibold text-xs text-ink_text">{skill.name}</span>
                      <span
                        className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${
                          levelColors[skill.level] || 'bg-paper-soft text-text-soft border-line'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div>
            {filteredSkills.length === 0 ? (
              <div className="p-12 text-center text-text-soft font-mono text-sm bg-paper rounded-2xl border border-line">
                No matching technologies found for &quot;{searchQuery}&quot;.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <AnimatePresence>
                  {filteredSkills.map((skill, idx) => (
                    <motion.div
                      key={`${skill.name}-${idx}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className={`p-4 rounded-xl bg-white border border-line hover:border-accent/50 hover:shadow-md transition-all flex flex-col justify-between ${
                        skill.hot ? 'border-accent/40 bg-accent/[0.01]' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="font-bold text-sm text-ink_text">{skill.name}</span>
                        {skill.hot && <Flame size={14} className="text-accent shrink-0" />}
                      </div>
                      <div className="flex items-center justify-between text-xs font-mono mt-2 pt-2 border-t border-line/60">
                        <span className="text-text-soft truncate max-w-[120px]">{skill.categoryName}</span>
                        <span
                          className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${
                            levelColors[skill.level] || 'bg-paper-soft text-text-soft border-line'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        )}

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-line text-xs font-mono text-text-soft">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5">
              <Flame size={13} className="text-accent" />
              <span>Core / High Proficiency</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Expert</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Advanced</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Intermediate</span>
            </span>
          </div>
          <div>All skills verified in live projects or professional internships.</div>
        </div>
      </div>
    </section>
  )
}
