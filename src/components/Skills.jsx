import { motion } from 'framer-motion'
import {
  SiPython, SiTensorflow, SiPytorch, SiDjango, SiFastapi,
  SiPostgresql, SiMysql, SiGit, SiDocker, SiReact,
  SiJupyter, SiPandas, SiNumpy
} from 'react-icons/si'
import { FaBrain, FaRobot, FaCode, FaDatabase, FaChartLine, FaMicrophone, FaLaptopCode, FaProjectDiagram } from 'react-icons/fa'
import SectionHeading from './SectionHeading'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Machine Learning & Data Science',
      icon: <FaBrain />,
      gradient: 'from-cyan-400 to-blue-500',
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
      gradient: 'from-violet-400 to-fuchsia-500',
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
      gradient: 'from-emerald-400 to-cyan-500',
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
      gradient: 'from-amber-400 to-violet-500',
      skills: [
        { name: 'Git', icon: <SiGit />, level: 90 },
        { name: 'VS Code', icon: <FaLaptopCode />, level: 95 },
        { name: 'n8n', icon: <FaProjectDiagram />, level: 85 },
        { name: 'Jupyter', icon: <SiJupyter />, level: 90 },
        { name: 'Docker', icon: <SiDocker />, level: 75 },
        { name: 'React', icon: <SiReact />, level: 80 },
      ]
    }
  ]

  const additionalSkills = [
    'NLP & Text Processing',
    'Hugging Face Transformers',
    'Vector Databases (Pinecone)',
    'Speech Recognition (Whisper, Vosk)',
    'Prompt Engineering',
    'Model Fine-tuning',
    'n8n Workflow Automation',
    'Data Visualization (Matplotlib, Seaborn)',
    'Power BI',
    'Bash Scripting',
    'Postman',
    'GitHub Copilot',
    'Claude Code'
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="SKILLS"
          title="Skills &"
          highlight="Expertise"
          subtitle="Comprehensive technical skills across AI, ML, and modern software development"
        />

        {/* Main Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-primary/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)] transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`text-3xl bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(34,211,238,0.35)]`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
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
                        <span className="text-sm font-medium text-textSecondary">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-primary">{skill.level}%</span>
                    </div>

                    {/* Glowing Progress Bar */}
                    <div className="w-full bg-white/5 border border-white/5 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.6)]"
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
          className="glass rounded-2xl p-8 bg-gradient-to-br from-primary/[0.06] to-secondary/[0.06]"
        >
          <h3 className="font-display text-2xl font-bold mb-6 text-center neon-text">
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
                whileHover={{ scale: 1.08, y: -3 }}
                className="px-4 py-2 glass rounded-full text-sm font-medium text-textPrimary hover:border-primary/60 hover:text-primary transition-all cursor-default"
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
