import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
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
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4 text-textPrimary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="text-gradient">Muhammad Hamza</span>
            </motion.h1>

            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
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

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-primary rounded-full text-primary font-medium hover:bg-primary hover:text-white transition-all"
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
                className="p-3 bg-white border-2 border-gray-200 rounded-full hover:border-primary hover:bg-primary/5 transition-all hover:scale-110"
              >
                <FaLinkedin className="text-2xl text-primary" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border-2 border-gray-200 rounded-full hover:border-primary hover:bg-primary/5 transition-all hover:scale-110"
              >
                <FaGithub className="text-2xl text-textPrimary" />
              </a>
              <a
                href="mailto:hamzaahsin786@gmail.com"
                className="p-3 bg-white border-2 border-gray-200 rounded-full hover:border-primary hover:bg-primary/5 transition-all hover:scale-110"
              >
                <FaEnvelope className="text-2xl text-primary" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse"></div>

              {/* Image container */}
              <div className="relative bg-gradient-to-r from-primary to-secondary p-1 rounded-full">
                <div className="bg-white rounded-full p-2">
                  {/* Replace this placeholder with your actual image */}
                  <img
                    src="/profile.jpg"
                    alt="Muhammad Hamza"
                    className="w-full h-auto rounded-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `
                        <div class="w-full aspect-square rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                          <span class="text-8xl font-bold text-gradient">MH</span>
                        </div>
                      `
                    }}
                  />
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -right-4 bg-white/80 backdrop-blur-lg rounded-2xl p-4 border border-primary/30 shadow-xl"
              >
                <div className="text-sm font-semibold text-textPrimary">AI Engineer</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white/80 backdrop-blur-lg rounded-2xl p-4 border border-secondary/30 shadow-xl"
              >
                <div className="text-sm font-semibold text-textPrimary">ML & DL Expert</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
