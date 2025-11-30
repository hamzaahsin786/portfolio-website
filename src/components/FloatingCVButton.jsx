import { motion } from 'framer-motion'
import { FaDownload, FaFilePdf } from 'react-icons/fa'
import { useState } from 'react'

const FloatingCVButton = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleDownload = () => {
    // This will download the CV from the public folder
    const link = document.createElement('a')
    link.href = '/Muhammad Hamza-AI Engineeer.pdf'
    link.download = 'Muhammad_Hamza_AI_Engineer_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-8 right-8 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleDownload}
        className="relative group bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300"
      >
        {/* Button Container */}
        <div className="flex items-center gap-3 px-6 py-4">
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaFilePdf className="text-2xl" />
          </motion.div>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: isHovered ? 'auto' : 0,
              opacity: isHovered ? 1 : 0
            }}
            className="overflow-hidden whitespace-nowrap"
          >
            <span className="font-semibold">Download CV</span>
          </motion.div>

          <motion.div
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaDownload className={`text-lg ${isHovered ? 'block' : 'hidden'}`} />
          </motion.div>
        </div>

        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping"></span>
      </motion.button>

      {/* Tooltip */}
      {!isHovered && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-dark text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg"
        >
          Download My CV
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-8 border-transparent border-l-dark"></div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default FloatingCVButton
