import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Calendar, Download, ArrowRight } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [copied, setCopied] = useState(false)

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  function copyEmail() {
    navigator.clipboard?.writeText(profile.email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-white to-paper-soft border-b border-line">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block font-mono text-xs text-accent bg-accent-soft border border-accent/25 px-3 py-1.5 rounded-full mb-4">
            // Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink_text mb-4">Let&apos;s Work Together</h2>
          <p className="text-lg text-text-soft max-w-2xl">
            Whether you have an opportunity, or just want to chat, feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 mb-8">
              <motion.button
                onClick={copyEmail}
                className="w-full flex items-center gap-4 p-4 rounded-lg border border-line hover:border-accent/50 bg-white hover:bg-accent/5 transition-all group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail size={20} className="text-accent" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-mono text-xs text-text-soft">Email</div>
                  <div className="font-bold text-ink_text">{profile.email}</div>
                </div>
                {copied && <span className="text-xs text-accent font-bold">Copied!</span>}
              </motion.button>

              <motion.a
                href={`tel:${profile.phone}`}
                className="w-full flex items-center gap-4 p-4 rounded-lg border border-line hover:border-accent/50 bg-white hover:bg-accent/5 transition-all group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone size={20} className="text-accent" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-mono text-xs text-text-soft">Phone</div>
                  <div className="font-bold text-ink_text">{profile.phone}</div>
                </div>
                <ArrowRight size={18} className="text-text-soft" />
              </motion.a>

              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-4 p-4 rounded-lg border border-line hover:border-accent/50 bg-white hover:bg-accent/5 transition-all group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Linkedin size={20} className="text-accent" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-mono text-xs text-text-soft">LinkedIn</div>
                  <div className="font-bold text-ink_text">@aryanrathod054</div>
                </div>
                <ArrowRight size={18} className="text-text-soft" />
              </motion.a>
            </div>

            <div className="flex flex-col gap-3">
              <motion.button
                className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-ink text-white font-bold transition-all shadow-md"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar size={18} /> Schedule a Call
              </motion.button>
              <motion.a
                href={profile.resumeUrl}
                download="Aryan-Rathod-Resume.pdf"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg border-2 border-accent text-accent font-bold hover:bg-accent/5 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} /> Download Resume
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-line rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Field label="Full Name">
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Your name"
                  className="w-full text-[14.5px] px-4 py-3 border border-line rounded-lg bg-white focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all"
                />
              </Field>
              <Field label="Email Address">
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@company.com"
                  className="w-full text-[14.5px] px-4 py-3 border border-line rounded-lg bg-white focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all"
                />
              </Field>
              <Field label="Message">
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell me about your opportunity..."
                  className="w-full text-[14.5px] px-4 py-3 border border-line rounded-lg bg-white focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none resize-y transition-all"
                />
              </Field>
              <motion.button
                type="submit"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-accent2 text-white font-bold transition-all shadow-md mt-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message <ArrowRight size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block font-mono text-xs text-text-soft uppercase tracking-wider mb-2 font-semibold">
        {label}
      </label>
      {children}
    </div>
  )
}
