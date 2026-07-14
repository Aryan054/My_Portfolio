import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Code2, Briefcase } from 'lucide-react'
import { projects, experience } from '../data/portfolio'

// Helper to calculate total experience in months
const calculateTotalMonths = (experiences) => {
  let totalMonths = 0;
  experiences.forEach(exp => {
    const parts = exp.dates.split(/[-–]/).map(p => p.trim());
    if (parts.length === 2) {
      const start = new Date(parts[0]);
      const end = parts[1].toLowerCase() === 'present' ? new Date() : new Date(parts[1]);
      if (!isNaN(start) && !isNaN(end)) {
        // Adding 1 to make it inclusive (e.g. Feb-Mar = 2 months)
        const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;
        totalMonths += months;
      }
    }
  });
  return totalMonths;
};

export default function QuickWins() {
  const [githubData, setGithubData] = useState('500+') // Default fallback
  const [label, setLabel] = useState('GitHub Contributions')

  // Calculate live project and experience stats
  const liveProjectCount = projects.length;
  const liveExperienceMonths = calculateTotalMonths(experience);

  useEffect(() => {
    // Fetch live data from GitHub API
    fetch('https://api.github.com/users/aryan054')
      .then(res => res.json())
      .then(data => {
        if (data.public_repos !== undefined) {
          setGithubData(`${data.public_repos}+`)
          setLabel('Live GitHub Repos')
        }
      })
      .catch(err => console.error('Failed to fetch github data', err))
  }, [])

  const stats = [
    { icon: Github, label: label, value: githubData, color: 'from-accent to-accent', isLive: true },
    { icon: Code2, label: 'Production Projects', value: `${liveProjectCount}`, color: 'from-accent to-accent2', isLive: true },
    { icon: Briefcase, label: 'Months Experience', value: `${liveExperienceMonths}mo`, color: 'from-accent2 to-accent', isLive: true },
  ]

  return (
    <section className="py-12 md:py-16 bg-white border-b border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent2/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 border border-line rounded-xl hover:border-accent/30 transition-all">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={24} />
                  </div>
                  <div className="text-3xl font-bold text-ink_text mb-1 flex items-center gap-2">
                    {stat.value}
                    {stat.isLive && <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                    </span>}
                  </div>
                  <div className="text-text-soft font-mono text-sm">{stat.label}</div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
