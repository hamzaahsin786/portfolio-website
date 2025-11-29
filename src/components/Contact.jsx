import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'hamzaahsin786@gmail.com',
      link: 'mailto:hamzaahsin786@gmail.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'Muhammad Hamza',
      link: 'https://www.linkedin.com/in/hamzaahsin/',
      gradient: 'from-blue-600 to-blue-400'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+92 313 7791392',
      link: 'tel:+923137791392',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Lahore, Pakistan',
      link: null,
      gradient: 'from-red-500 to-pink-500'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="block bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-700 hover:border-primary/50 transition-all h-full"
                  >
                    <div className={`text-4xl bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-4`}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm break-words">{item.value}</p>
                  </a>
                ) : (
                  <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-700 h-full">
                    <div className={`text-4xl bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-4`}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm break-words">{item.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-lg rounded-2xl border border-primary/30 p-8"
          >
            <h3 className="text-3xl font-bold mb-4 text-gradient">
              Let's Work Together
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm currently available for freelance work and full-time opportunities in AI/ML engineering.
              If you have a project that you want to get started or think you need my help with something,
              then get in touch.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-gray-300">AI & Machine Learning Solutions</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-gray-300">LLM Integration & RAG Pipelines</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-gray-300">Full-Stack AI Applications</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-gray-300">NLP & Deep Learning Projects</span>
              </div>
            </div>

            <a
              href="mailto:hamzaahsin786@gmail.com"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-all w-full text-center"
            >
              Send Me an Email
            </a>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 mb-4">
            Built with React, Tailwind CSS, and Framer Motion
          </p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Muhammad Hamza. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
