import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendar } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Associate Software Engineer - AI',
      company: 'Purelogics',
      period: 'Sept 2025 – Present',
      description: 'Developing AI-powered solutions using machine learning, deep learning, and integrating into real-world applications with Flask, FastAPI, and Django.',
      current: true
    },
    {
      title: 'AI Intern',
      company: 'Purelogics',
      period: 'May 2025 – Aug 2025',
      description: 'Completed hands-on training in ML, DL, and NLP, building and deploying AI-powered applications.',
      current: false
    },
    {
      title: 'RPA Developer Intern',
      company: 'Arcana Info',
      period: 'Sept 2024 – Dec 2024',
      description: 'Assisted in building RPA bots using UiPath to automate repetitive business tasks.',
      current: false
    }
  ]

  const certifications = [
    {
      name: 'Python + AI Bootcamp | Purelogics',
      url: null // No URL for this one
    },
    {
      name: 'Fine-Tuning for LLMs: from Beginner to Advanced',
      url: 'https://www.linkedin.com/learning/certificates/9688c87ec55eca2b1d8bc3bd4932567f70cab3ec97a4d51e7afda0fc91ffd608'
    },
    {
      name: 'Mastering Model Context Protocol (MCP)',
      url: 'https://www.linkedin.com/learning/certificates/d0f8de2e651cb47845ecc1db0b58e517a69053cf0c84f725f1c6ed8d917e59cc'
    },
    {
      name: 'Microsoft Azure Machine Learning Fundamentals',
      url: 'https://www.linkedin.com/learning/certificates/1fd3da910535522b78140afa9d05d9b181f375b9b7360e77e329b0540ffaeca9'
    },
    {
      name: 'Generative AI and LLMs: Architecture and Data Preparation',
      url: 'https://www.coursera.org/account/accomplishments/verify/M860BOQGEW0E'
    },
    {
      name: 'Introduction to Artificial Intelligence (AI)',
      url: 'https://www.coursera.org/account/accomplishments/verify/VELOFNXKXZJA'
    },
    {
      name: 'Introduction to SQL',
      url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/6aa3427a48fc77c608163f01c7b0706c5fcb69ee'
    },
    {
      name: 'Python for Beginners | SimpliLearn',
      url: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzIzIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNzM4NzE0Ml8xNzI2NzQzNDI1LnBuZyIsInVzZXJuYW1lIjoiTXVoYW1tYWQgSGFtemEifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion'
    },
    {
      name: 'Google Soft Skills Program | Pakistan Freelancers Association',
      url: null // No URL provided
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <FaBriefcase className="text-primary" />
              Professional Experience
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-dark"></div>

                  {exp.current && (
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-2">
                      Current
                    </span>
                  )}

                  <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                    <FaCalendar className="text-xs" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Education & Certifications</h3>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-lg p-6 rounded-2xl border border-primary/20 mb-8"
            >
              <h4 className="text-xl font-bold text-white mb-2">
                Bachelor of Science in Computer Science
              </h4>
              <div className="text-primary font-semibold mb-2">COMSATS University</div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <FaCalendar className="text-xs" />
                <span>2020 - 2024</span>
              </div>
            </motion.div>

            {/* Certifications */}
            <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-700">
              <h4 className="text-lg font-bold mb-4 text-gradient">Certifications</h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {cert.url ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 text-gray-300 group hover:text-primary transition-colors cursor-pointer"
                      >
                        <span className="text-primary mt-1 group-hover:scale-125 transition-transform">
                          ✓
                        </span>
                        <span className="text-sm group-hover:underline">{cert.name}</span>
                      </a>
                    ) : (
                      <div className="flex items-start gap-3 text-gray-300">
                        <span className="text-primary mt-1">
                          ✓
                        </span>
                        <span className="text-sm">{cert.name}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
