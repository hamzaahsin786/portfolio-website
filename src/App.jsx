import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Workflows from './components/Workflows'
import Contact from './components/Contact'
import FloatingCVButton from './components/FloatingCVButton'
import NeuralCanvas from './components/NeuralCanvas'

function App() {
  const { scrollYProgress } = useScroll()
  const scrollProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  return (
    <div className="min-h-screen bg-void text-textPrimary overflow-x-hidden relative">
      {/* Faint fixed global background: grid + radial glows */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute inset-0 grid-bg opacity-60"></div>
        <div className="absolute -top-32 left-1/4 w-[36rem] h-[36rem] bg-primary/[0.07] rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-secondary/[0.07] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-primary/[0.05] rounded-full blur-3xl"></div>
        <NeuralCanvas className="absolute inset-0 w-full h-full opacity-[0.18]" density={50} />
      </div>

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-cyan-400 via-primary to-violet-500"
        style={{ scaleX: scrollProgress }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Workflows />
        <Contact />
        <FloatingCVButton />
      </div>
    </div>
  )
}

export default App
