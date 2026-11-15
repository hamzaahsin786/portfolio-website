import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import SectionHeading from './SectionHeading'

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/hamzaahsin786',
      handle: 'hamzaahsin786'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/hamzaahsin/',
      handle: 'hamzaahsin'
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      url: 'https://wa.me/923137791392',
      handle: '+92 313 7791392'
    }
  ]

  return (
    <footer id="contact" className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="06"
          eyebrow="CONTACT"
          title="Let's Build"
          highlight="The Future"
          subtitle="Have an AI project in mind, or just want to talk tech? My inbox is always open."
        />

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <a
            href="mailto:hamzaahsin786@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full text-white font-medium shadow-[0_0_28px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-all"
          >
            <FaEnvelope className="text-xl" />
            hamzaahsin786@gmail.com
          </a>
        </motion.div>

        {/* Social Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="glass rounded-2xl p-6 flex flex-col items-center gap-3 text-center hover:border-primary/60 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)] transition-all"
            >
              <div className="text-3xl text-primary">{social.icon}</div>
              <div className="font-semibold text-white">{social.name}</div>
              <div className="font-mono text-xs text-textSecondary">{social.handle}</div>
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center border-t border-white/5 pt-8"
        >
          <p className="font-mono text-xs tracking-wider text-muted">
            © {new Date().getFullYear()} Muhammad Hamza. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Contact
