import { motion } from 'framer-motion'
import {
  SiPython, SiTensorflow, SiPytorch, SiDjango, SiFastapi,
  SiPostgresql, SiMysql, SiGit, SiDocker, SiReact,
  SiJupyter, SiPandas, SiNumpy
} from 'react-icons/si'
import { FaBrain, FaRobot, FaCode, FaDatabase, FaChartLine, FaMicrophone, FaLaptopCode } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Machine Learning & Data Science',
      icon: <FaBrain />,
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', icon: <SiPython />, level: 95 },
        { name: 'Pandas', icon: <SiPandas />, level: 90 },
        { name: 'NumPy', icon: <SiNumpy />, level: 90 },
        { name: 'Scikit-learn', icon: <FaChartLine />, level: 85 },
        { name: 'SQL', icon: <FaDatabase />, level: 85 },
      ]
    },
    {
      title: 'Deep Learning & AI',
      icon: <FaRobot />,
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'TensorFlow', icon: <SiTensorflow />, level: 85 },
        { name: 'PyTorch', icon: <SiPytorch />, level: 85 },
        { name: 'LangChain', icon: <FaBrain />, level: 90 },
        { name: 'OpenAI GPT', icon: <FaRobot />, level: 90 },
        { name: 'RAG Pipelines', icon: <FaDatabase />, level: 88 },
      ]
    },
    {
      title: 'Backend & APIs',
      icon: <FaCode />,
      gradient: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Django', icon: <SiDjango />, level: 90 },
        { name: 'FastAPI', icon: <SiFastapi />, level: 88 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 85 },
        { name: 'MySQL', icon: <SiMysql />, level: 82 },
        { name: 'REST APIs', icon: <FaCode />, level: 90 },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <FaChartLine />,
      gradient: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', icon: <SiGit />, level: 90 },
        { name: 'VS Code', icon: <FaLaptopCode />, level: 95 },
        { name: 'Jupyter', icon: <SiJupyter />, level: 90 },
        { name: 'Docker', icon: <SiDocker />, level: 75 },
        { name: 'React', icon: <SiReact />, level: 80 },
      ]
    }
  ]

  const additionalSkills = [
    'NLP & Text Processing',
    'Hugging Face Transformers',
    'Vector Databases',
    'Speech Recognition (Whisper, Vosk)',
    'Prompt Engineering',
    'Model Fine-tuning',
    'Data Visualization (Matplotlib, Seaborn)',
    'Power BI',
    'Bash Scripting',
    'Postman',
    'GitHub Copilot',
    'Claude Code'
  ]

  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive technical skills across AI, ML, and modern software development
          </p>
        </motion.div>

        {/* Main Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700 p-6 hover:border-primary/50 transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`text-3xl bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`text-lg bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                          {skill.icon}
                        </span>
                        <span className="text-sm font-medium text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-lg rounded-2xl border border-primary/20 p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-gradient">
            Additional Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-gray-800/70 backdrop-blur-sm rounded-full text-sm font-medium text-gray-300 border border-gray-700 hover:border-primary/50 hover:text-primary transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
