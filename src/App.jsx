import { useCallback, useState } from 'react'
import Nav from './components/Nav'
import PremiumHero from './components/PremiumHero'
import QuickWins from './components/QuickWins'
import PremiumAbout from './components/PremiumAbout'
import PremiumTechStack from './components/PremiumTechStack'
import PremiumProjects from './components/PremiumProjects'
import PremiumExperience from './components/PremiumExperience'
import EducationNew from './components/EducationNew'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'
import ResumeModal from './components/ResumeModal'
import { useKeyboardShortcut } from './hooks/useKeyboardShortcut'

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [resumeOpen, setResumeOpen] = useState(false)

  const openPalette = useCallback(() => setPaletteOpen(true), [])
  const closePalette = useCallback(() => setPaletteOpen(false), [])

  const openResume = useCallback(() => setResumeOpen(true), [])
  const closeResume = useCallback(() => setResumeOpen(false), [])

  useKeyboardShortcut('k', openPalette)

  return (
    <>
      <Nav onOpenPalette={openPalette} onOpenResume={openResume} />
      <main>
        <PremiumHero onOpenResume={openResume} />
        <QuickWins onOpenResume={openResume} />
        <PremiumAbout onOpenResume={openResume} />
        <PremiumTechStack />
        <PremiumProjects />
        <PremiumExperience onOpenResume={openResume} />
        <EducationNew onOpenResume={openResume} />
        <Contact onOpenResume={openResume} />
      </main>
      <Footer onOpenResume={openResume} />
      <CommandPalette open={paletteOpen} onClose={closePalette} onOpenResume={openResume} />
      <ResumeModal open={resumeOpen} onClose={closeResume} />
    </>
  )
}
