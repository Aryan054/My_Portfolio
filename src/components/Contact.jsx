import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Download, FileText, ArrowRight, Check, Send, MapPin } from 'lucide-react'
import { profile } from '../data/portfolio'
import { downloadResume } from '../utils/downloadResume'

export default function Contact({ onOpenResume }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [copied, setCopied] = useState(false)

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Engineering Opportunity / Enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  function copyEmail() {
    navigator.clipboard?.writeText(profile.email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-white to-paper-soft border-b border-line">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="inline-block font-mono text-xs text-accent bg-accent-soft border border-accent/25 px-3 py-1.5 rounded-full mb-4">
            // Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-ink_text tracking-tight mb-3">
            Let&apos;s Build Something Impactful
          </h2>
          <p className="text-lg text-text-soft max-w-2xl">
            Currently open to full-time Python Full Stack, Backend Developer, and Software Engineer opportunities. Available immediately.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Recruiter Actions (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 space-y-4"
          >
            {/* 1-Click Copy Email Card */}
            <motion.button
              onClick={copyEmail}
              className="w-full flex items-center justify-between p-4 rounded-2xl border border-line hover:border-accent/50 bg-white hover:bg-accent/[0.02] transition-all text-left group shadow-xs cursor-pointer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-accent-soft text-accent flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-mono text-xs text-text-soft">Direct Email</div>
                  <div className="font-bold text-ink_text text-sm md:text-base">{profile.email}</div>
                </div>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-paper-soft text-text-soft group-hover:text-accent font-semibold transition-colors">
                {copied ? 'Copied! ✓' : 'Copy'}
              </span>
            </motion.button>

            {/* Direct Phone Call Card */}
            <motion.a
              href={`tel:${profile.phone}`}
              className="w-full flex items-center justify-between p-4 rounded-2xl border border-line hover:border-accent/50 bg-white hover:bg-accent/[0.02] transition-all group shadow-xs"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-accent2-soft text-accent2 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-mono text-xs text-text-soft">Direct Phone</div>
                  <div className="font-bold text-ink_text text-sm md:text-base">{profile.phone}</div>
                </div>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-paper-soft text-text-soft group-hover:text-accent font-semibold transition-colors">
                Call
              </span>
            </motion.a>

            {/* LinkedIn Card */}
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-4 rounded-2xl border border-line hover:border-accent/50 bg-white hover:bg-accent/[0.02] transition-all group shadow-xs"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="font-mono text-xs text-text-soft">LinkedIn Network</div>
                  <div className="font-bold text-ink_text text-sm md:text-base">aryan-rathod054</div>
                </div>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-paper-soft text-text-soft group-hover:text-accent font-semibold transition-colors">
                Connect
              </span>
            </motion.a>

            {/* Resume Buttons Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-ink to-ink-soft text-white space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm">Official Resume</div>
                  <div className="text-xs text-muted font-mono">Updated as per latest experience</div>
                </div>
                <span className="font-mono text-[10px] bg-accent/30 text-accent2 px-2 py-0.5 rounded border border-accent/40 font-semibold">
                  PDF
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={onOpenResume}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-accent hover:bg-accent/90 text-white font-mono text-xs font-semibold transition-all cursor-pointer"
                >
                  <FileText size={14} />
                  <span>Preview</span>
                </button>
                <a
                  href={profile.resumeUrl}
                  onClick={downloadResume}
                  download="Aryan-Rathod-Resume.pdf"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-line-dark hover:border-accent text-white font-mono text-xs font-semibold transition-all cursor-pointer"
                >
                  <Download size={14} />
                  <span>Download</span>
                </a>
              </div>
            </div>

            {/* Quick Status Note */}
            <div className="p-4 rounded-xl bg-paper border border-line text-xs font-mono text-text-soft space-y-1">
              <div className="flex items-center gap-2 text-ink_text font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Notice Period: Immediate (0 Days)</span>
              </div>
              <div className="flex items-center gap-1 text-text-soft">
                <MapPin size={12} />
                <span>Current Location: Pune, Maharashtra, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-white border border-line rounded-2xl p-7 md:p-8 shadow-sm"
          >
            <h3 className="text-xl font-bold text-ink_text mb-2">Send a Direct Message</h3>
            <p className="text-sm text-text-soft mb-6">
              Recruiters and hiring managers: reach out with open roles, project collaborations, or interview invitations.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs text-text-soft uppercase tracking-wider mb-2 font-semibold">
                  Your Name / Recruiter Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="e.g. Alex Johnson (Tech Recruiter)"
                  className="w-full text-sm px-4 py-3 border border-line rounded-xl bg-paper/30 focus:bg-white focus:border-accent focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-text-soft uppercase tracking-wider mb-2 font-semibold">
                  Work Email Address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  placeholder="alex@company.com"
                  className="w-full text-sm px-4 py-3 border border-line rounded-xl bg-paper/30 focus:bg-white focus:border-accent focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-text-soft uppercase tracking-wider mb-2 font-semibold">
                  Message / Role Overview
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Hi Aryan, we are hiring for a Python Full Stack / Backend Engineer role and were impressed by your SMART360 and DRF experience..."
                  className="w-full text-sm px-4 py-3 border border-line rounded-xl bg-paper/30 focus:bg-white focus:border-accent focus:outline-none resize-y transition-all"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-white font-semibold shadow-md hover:bg-accent/90 transition-all cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={16} />
                <span>Send Enquiry to Aryan</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
