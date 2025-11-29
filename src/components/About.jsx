import { motion } from 'framer-motion'
import { FaBrain, FaCode, FaRobot, FaChartLine } from 'react-icons/fa'

const About = () => {
  const highlights = [
    {
      icon: <FaBrain />,
      title: 'AI & Machine Learning',
      description: 'Expert in ML, DL, and NLP with hands-on experience in building intelligent systems'
    },
    {
      icon: <FaRobot />,
      title: 'LLM Integration',
      description: 'Proficient in LangChain, RAG pipelines, and integrating GPT-4 for real-world applications'
    },
    {
      icon: <FaCode />,
      title: 'Full-Stack Development',
      description: 'Building robust backends with Django, FastAPI, and Flask with modern frontend integration'
    },
    {
      icon: <FaChartLine />,
      title: 'Data Science',
      description: 'Strong foundation in data analysis, visualization, and predictive modeling'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gradient">
              AI Engineer & Software Developer
            </h3>
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              I'm an Associate Software Engineer at Purelogics, specializing in developing AI-powered
              solutions using cutting-edge technologies in Machine Learning, Deep Learning, and Natural
              Language Processing.
            </p>
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              With a Bachelor's degree in Computer Science from COMSATS University (2020-2024), I've
              built expertise in creating intelligent systems that solve real-world problems. My work
              involves integrating advanced AI models, implementing RAG pipelines, and developing
              scalable applications with modern frameworks.
            </p>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I'm passionate about leveraging AI to create innovative solutions, from intelligent
              chatbots to automated recruitment systems. My goal is to push the boundaries of what's
              possible with AI technology.
            </p>

            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient">4+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient">1+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient">6+</div>
                <div className="text-gray-400">Certifications</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-700 hover:border-primary/50 transition-all"
              >
                <div className="text-4xl text-primary mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
