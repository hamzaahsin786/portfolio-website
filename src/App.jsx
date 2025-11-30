import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Workflows from './components/Workflows'
import Contact from './components/Contact'
import FloatingCVButton from './components/FloatingCVButton'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
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
  )
}

export default App
