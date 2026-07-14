import { motion } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter'
import { profile } from '../data/portfolio'

const RAW_RESPONSE = `$ curl https://aryan054.vercel.app/api/profile

HTTP/1.1 200 OK
content-type: application/json

{
  "name": "Aryan Rathod",
  "role": "Python & Django Developer",
  "stack": "Django · DRF · PostgreSQL · ML",
  "status": "open_to_work",
  "location": "Pune, Maharashtra, IN"
}`

function renderTerminalLine(line, i) {
  if (line.startsWith('$')) {
    return (
      <div key={i}>
        <span className="text-[#6FE3C4]">$</span>
        {line.slice(1)}
      </div>
    )
  }
  const kv = line.match(/^(\s*)"([^"]+)":\s*"([^"]*)"(,?)$/)
  if (kv) {
    const [, indent, key, value, comma] = kv
    return (
      <div key={i}>
        {indent}
        <span className="text-[#7FB8E8]">&quot;{key}&quot;</span>: <span className="text-[#E8B23A]">&quot;{value}&quot;</span>
        {comma}
      </div>
    )
  }
  return <div key={i}>{line || '\u00A0'}</div>
}

export default function Hero() {
  const { output } = useTypewriter(RAW_RESPONSE, { speed: 8, chunk: 3, startDelay: 300 })
  const lines = output.split('\n')

  return (
    <section
      id="top"
      className="pt-[70px] pb-20 md:pb-24 border-b border-line"
      style={{
        background:
          'radial-gradient(circle at 85% 15%, #F6E9D2 0%, transparent 45%), #F6F5F1',
      }}
    >
      <div className="relative overflow-hidden max-w-[1160px] mx-auto px-6 grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-center">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <span className="absolute right-0 top-8 w-28 h-28 rounded-full bg-accent/15 blur-3xl animate-float" />
          <span
            className="absolute left-2/4 top-32 w-40 h-40 rounded-full bg-accent2/15 blur-3xl animate-float"
            style={{ animationDelay: '0.35s', animationDuration: '7s' }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 font-mono text-[12.5px] text-accent bg-accent-soft border border-accent/25 px-3 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse2" />
            200 OK · open to work
          </div>

          <h1 className="font-display font-bold text-[clamp(34px,5.5vw,58px)] leading-[1.05] mb-4 tracking-tight">
            {profile.name} builds backend systems that{' '}
            <span className="text-accent">ship, scale, and think.</span>
          </h1>

          <p className="text-[17px] text-text-soft max-w-[52ch] mb-7">
            Python &amp; Django developer from Pune. I design REST APIs with DRF and PostgreSQL, then
            wire in NLP and ML models where CRUD isn&apos;t enough — appointment platforms, admissions
            chatbots, recommendation engines.
          </p>

          <div className="flex flex-wrap gap-3">
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="font-mono text-[13px] font-medium px-5 py-3 rounded-lg bg-ink text-white flex items-center gap-2 shadow-sm hover:shadow-lg transition-all"
            >
              View projects →
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="font-mono text-[13px] font-medium px-5 py-3 rounded-lg border border-line hover:border-ink_text transition-all"
            >
              Get in touch
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={`mailto:${profile.email}`}
              className="font-mono text-[13px] font-medium px-5 py-3 rounded-lg border border-line hover:border-ink_text transition-all"
            >
              Email me
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -6, scale: 1.01 }}
          className="rounded-xl overflow-hidden border border-line-dark bg-ink shadow-[0_20px_50px_-18px_rgba(15,20,25,0.45)] transition-transform"
        >
          <div className="flex items-center gap-2 px-4 py-2.5 bg-ink-soft border-b border-line-dark">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E4645A]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8B23A]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#3FA968]" />
            <span className="ml-2 font-mono text-[11.5px] text-muted">zsh — profile.sh</span>
          </div>
          <div className="font-mono text-[13px] text-[#D6DCE5] p-5 min-h-[260px] whitespace-pre-wrap break-words">
            {lines.map(renderTerminalLine)}
            <span className="inline-block w-[7px] h-[15px] bg-[#6FE3C4] align-middle animate-blink" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
