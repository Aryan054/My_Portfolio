import { useEffect, useState } from 'react'

export default function Footer() {
  const [ms, setMs] = useState(12.0)

  useEffect(() => {
    const id = setInterval(() => setMs(Math.random() * 8 + 8), 2500)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="py-8 md:py-12">
      <div className="max-w-[1160px] mx-auto px-6 flex flex-wrap justify-between gap-3 font-mono text-xs text-muted">
        <span>© 2026 Aryan Rathod · Pune, Maharashtra, IN</span>
        <span>x-response-time: {ms.toFixed(1)}ms</span>
      </div>
    </footer>
  )
}
