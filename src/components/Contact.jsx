import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/hamzaahsin786',
      color: 'hover:bg-gray-800',
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/hamzaahsin/',
      color: 'hover:bg-blue-600',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      url: 'https://wa.me/923137791392',
      color: 'hover:bg-green-600',
      gradient: 'from-green-500 to-green-700'
    }
  ]

  return (
    <footer id="contact" className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 260, damping: 20 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`p-5 bg-gradient-to-r ${social.gradient} text-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl`}
            >
              <div className="text-3xl">{social.icon}</div>
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="text-textSecondary text-sm">
            © {new Date().getFullYear()} Muhammad Hamza. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Contact
