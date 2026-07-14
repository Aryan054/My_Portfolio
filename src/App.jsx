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
import { useKeyboardShortcut } from './hooks/useKeyboardShortcut'

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false)

  const openPalette = useCallback(() => setPaletteOpen(true), [])
  const closePalette = useCallback(() => setPaletteOpen(false), [])

  useKeyboardShortcut('k', openPalette)

  return (
    <>
      <Nav onOpenPalette={openPalette} />
      <main>
        <PremiumHero />
        <QuickWins />
        <PremiumAbout />
        <PremiumTechStack />
        <PremiumProjects />
        <PremiumExperience />
        <EducationNew />
        <Contact />
      </main>
      <Footer />
      <CommandPalette open={paletteOpen} onClose={closePalette} />
    </>
  )
}
