import { motion } from 'framer-motion'
import { FaReact, FaPython, FaDatabase, FaRobot, FaBrain } from 'react-icons/fa'
import { SiDjango, SiFastapi, SiPostgresql, SiOpenai } from 'react-icons/si'

const Projects = () => {
  const projects = [
    {
      title: 'Test Management System (TMS)',
      description: 'An intelligent Task Management System integrating AI-driven automation for task creation, prioritization, and progress tracking.',
      highlights: [
        'AI assistance using LangChain and OpenAI GPT-4o for natural-language interaction',
        'Django REST Framework backend with PostgreSQL and role-based access control',
        'Asynchronous processing with Redis and Celery for notifications and analytics',
        'React-based frontend with seamless API integration'
      ],
      tech: ['Django', 'PostgreSQL', 'React', 'LangChain', 'GPT-4o', 'Redis', 'Celery'],
      icon: <FaBrain />,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI-Powered Restaurant System',
      description: 'Intelligent restaurant management system with conversational AI chatbot for menu exploration and autonomous ordering.',
      highlights: [
        'FastAPI backend with high-performance RESTful APIs',
        'Agentic AI chatbot using LangGraph and GPT-4o Mini',
        'RAG pipeline with Pinecone vector database for semantic search',
        'PostgreSQL integration for structured data and metadata intelligence'
      ],
      tech: ['FastAPI', 'LangGraph', 'Pinecone', 'GPT-4o', 'PostgreSQL'],
      icon: <FaRobot />,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'TalentTorch - AI Recruitment System',
      description: 'AI-powered recruitment platform automating candidate-job matching through NLP and semantic similarity.',
      highlights: [
        'Django REST Framework with NLP-based skill extraction',
        'RAG-style ranking using BAAI/bge-large-en and Mistral 7B Instruct',
        'Intelligent resume parsing and contextual job matching',
        'MySQL integration with modular APIs for scalable search'
      ],
      tech: ['Django', 'NLP', 'Mistral 7B', 'MySQL', 'RAG'],
      icon: <SiDjango />,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Intelligent Codebase Assistant',
      description: 'AI-powered codebase analysis system enabling developers to query repositories in natural language.',
      highlights: [
        'Django REST Framework with Pinecone vector database',
        'Dual-provider architecture: OpenAI (paid) and Ollama (free)',
        'Semantic code search with BGE-Large embeddings and LLaMA 3 8B',
        'Factory design pattern with automatic fallback and hybrid chat completion'
      ],
      tech: ['Django', 'Pinecone', 'GPT-4o', 'LLaMA 3', 'Ollama'],
      icon: <FaDatabase />,
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing cutting-edge AI solutions built with modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700 overflow-hidden hover:border-primary/50 transition-all h-full">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${project.gradient} p-6`}>
                  <div className="flex items-center gap-4">
                    <div className="text-5xl text-white opacity-90">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-primary mt-1">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10 rounded-2xl`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
