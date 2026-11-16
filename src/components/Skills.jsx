import { motion } from 'framer-motion'
import { FaBrain, FaRobot, FaCode, FaDatabase, FaChartLine, FaMicrophone, FaLaptopCode } from 'react-icons/fa'
import SectionHeading from './SectionHeading'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Primary Stack',
      icon: <FaCode />,
      gradient: 'from-cyan-400 to-blue-500',
      skills: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'vLLM', 'LiveKit', 'Go', 'PostgreSQL + pgvector']
    },
    {
      title: 'NLP & Deep Learning',
      icon: <FaBrain />,
      gradient: 'from-violet-400 to-fuchsia-500',
      skills: ['PyTorch', 'Hugging Face Transformers', 'LLMs', 'Fine-Tuning (LoRA / QLoRA)', 'Quantization', 'Vision-Language Models (VLMs)', 'NLP', 'GRU / RNN']
    },
    {
      title: 'Agentic AI',
      icon: <FaRobot />,
      gradient: 'from-emerald-400 to-cyan-500',
      skills: ['AI Agents', 'Multi-Agent Systems', 'Agentic RAG', 'RAG', 'Tool Calling', 'Re-ranking', 'Hybrid Retrieval', 'Human-in-the-Loop', 'Model Context Protocol (MCP)']
    },
    {
      title: 'Voice AI',
      icon: <FaMicrophone />,
      gradient: 'from-amber-400 to-violet-500',
      skills: ['Voice Agents', 'Inbound Calling Agents', 'LiveKit', 'ASR / STT', 'TTS']
    },
    {
      title: 'Evaluation & Observability',
      icon: <FaChartLine />,
      gradient: 'from-cyan-400 to-violet-500',
      skills: ['Retrieval Evaluation (hit@1, recall@k, precision@k, MRR, nDCG)', 'Confident AI', 'LLM Evaluation', 'LLM-as-Judge', 'DeepEval', 'LangSmith Tracing', 'Langfuse', 'Golden Datasets', 'Regression Testing', 'Model Benchmarking']
    },
    {
      title: 'Data & Infrastructure',
      icon: <FaDatabase />,
      gradient: 'from-violet-400 to-cyan-500',
      skills: ['SQL', 'BM25', 'Vector Databases', 'Qdrant', 'GPU Inference Optimisation', 'Model Serving', 'Docker', 'Microsoft Azure', 'CI/CD', 'Git / GitHub', 'Hugging Face']
    },
    {
      title: 'Frontend & Full-Stack',
      icon: <FaLaptopCode />,
      gradient: 'from-emerald-400 to-violet-500',
      skills: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'REST APIs']
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="SKILLS"
          title="Skills &"
          highlight="Expertise"
          subtitle="The stack behind production LLM systems — from model and retrieval to evaluation and serving"
        />

        {/* Skill Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

              {/* Skill Chips */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.04 }}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 hover:border-primary/50 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
