import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import NeuralCanvas from './NeuralCanvas'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-void">
      {/* Neural network canvas background */}
      <NeuralCanvas className="absolute inset-0 w-full h-full opacity-60" />

      {/* Ambient glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* System status line */}
            <motion.p
              className="font-mono text-xs sm:text-sm tracking-[0.2em] text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 animate-pulse" aria-hidden="true"></span>
              SYSTEM ONLINE — OPEN TO WORK
            </motion.p>

            <motion.h1
              className="font-display text-5xl md:text-7xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="neon-text">Muhammad Hamza</span>
            </motion.h1>

            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm font-semibold">
                AI Engineer & Developer
              </span>
            </motion.div>

            <motion.p
              className="text-lg text-textSecondary mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Specializing in Machine Learning, Deep Learning, and NLP. Building intelligent solutions
              with cutting-edge AI technologies including LangChain, RAG pipelines, and LLMs.
            </motion.p>

            {/* Terminal-style card */}
            <motion.div
              className="glass rounded-xl p-4 mb-8 font-mono text-xs sm:text-sm max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-accent/80"></span>
                <span className="ml-2 text-muted">hamza@ai-engineer: ~</span>
              </div>
              <p className="text-slate-300">
                <span className="text-primary">$</span> whoami
              </p>
              <p className="text-slate-400 pl-4">&gt; ai_engineer --stack langchain,rag,llms</p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full text-white font-medium shadow-[0_0_24px_rgba(34,211,238,0.4)] hover:shadow-[0_0_36px_rgba(34,211,238,0.6)] transition-all"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-primary/60 rounded-full text-primary font-medium hover:bg-primary/10 transition-all"
              >
                View Projects
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <a
                href="https://www.linkedin.com/in/hamzaahsin/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 glass rounded-xl hover:border-primary/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-all hover:scale-110"
              >
                <FaLinkedin className="text-2xl text-primary" />
              </a>
              <a
                href="https://github.com/hamzaahsin786"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 glass rounded-xl hover:border-primary/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-all hover:scale-110"
              >
                <FaGithub className="text-2xl text-white" />
              </a>
              <a
                href="mailto:hamzaahsin786@gmail.com"
                aria-label="Email"
                className="p-3 glass rounded-xl hover:border-primary/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-all hover:scale-110"
              >
                <FaEnvelope className="text-2xl text-primary" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image — HUD frame */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow behind frame */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-25 animate-pulse"></div>

              {/* HUD frame */}
              <div className="relative hud-corner scanline rounded-3xl border border-primary/30 bg-panel/80 overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Muhammad Hamza"
                  className="w-full h-auto object-cover aspect-square"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `
                      <div class="w-full aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <span class="text-8xl font-bold font-display neon-text">MH</span>
                      </div>
                    `
                  }}
                />
                {/* HUD caption bar */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-[#05060a]/90 to-transparent flex items-end justify-between">
                  <span className="font-mono text-[11px] sm:text-xs tracking-widest text-cyan-200">
                    MUHAMMAD_HAMZA // AI_ENGINEER
                  </span>
                </div>
              </div>

              {/* Neural core chip */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-1.5 flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true"></span>
                <span className="font-mono text-[11px] tracking-[0.2em] text-white">NEURAL CORE: ACTIVE</span>
              </div>

              {/* Floating chips */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -right-4 glass rounded-2xl p-4 shadow-xl"
              >
                <div className="text-sm font-semibold text-white">AI Engineer</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 shadow-xl"
              >
                <div className="text-sm font-semibold text-white">ML & DL Expert</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
