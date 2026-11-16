import { motion } from 'framer-motion'
import { FaRobot, FaBrain, FaDatabase, FaFlask, FaChartLine, FaGraduationCap, FaComments } from 'react-icons/fa'
import { SiDjango } from 'react-icons/si'
import SectionHeading from './SectionHeading'

const Projects = () => {
  const projects = [
    {
      title: 'Querive — AI Support & Lead Agent',
      link: 'https://querive.com',
      description: "AI front office for SMBs answering from each business's knowledge base with cited answers. Built independently as sole AI engineer.",
      highlights: [
        'Multi-tenant hybrid retrieval (RRF fusion, Voyage re-ranker) with LangGraph agent for lead capture and escalation',
        'Outbound engine qualifying and routing leads in under 60 seconds',
        'On a 125-case golden set, benchmarked 5 models and shipped a switch cutting inference cost 78% and raising grounding accuracy 25%',
        'Validated GEval judges lifted tool-call correctness from 40% to 100%'
      ],
      tech: ['Go', 'LangGraph', 'Agentic RAG', 'pgvector', 'BM25'],
      icon: <FaComments />,
      gradient: 'from-cyan-500/25 to-blue-500/25'
    },
    {
      title: 'Propitive — Multi-Agent AI CRM',
      link: 'https://propitive.com',
      description: 'CRM for property-management agencies where three autonomous agents run tenant and landlord conversations, lead qualification, and scheduled outreach against live property records.',
      highlights: [
        'Three autonomous agents for tenant and landlord conversations, lead qualification, and scheduled outreach',
        'Multi-agent system on LangChain and LangGraph with intent classification and a 0–100 lead qualification score',
        'Confidence thresholds escalate weak evidence to a human',
        'Grounded in jurisdiction-narrowed retrieval'
      ],
      tech: ['Python', 'LangGraph', 'pgvector'],
      icon: <FaRobot />,
      gradient: 'from-violet-500/25 to-fuchsia-500/25'
    },
    {
      title: 'Depression Detection with Explainable AI',
      description: 'Thesis project: early depression signal detection from social media text using fine-tuned LLMs with explainable AI.',
      highlights: [
        'SHAP and LIME interpretability on a fine-tuned Mental-BERT model',
        '88.3% accuracy on CLPsych/RSDD benchmarks',
        'Transparent predictions for potential clinical review'
      ],
      tech: ['Mental-BERT', 'SHAP', 'LIME', 'Fine-Tuning'],
      icon: <FaGraduationCap />,
      gradient: 'from-emerald-500/25 to-cyan-500/25'
    },
    {
      title: 'TMS-SQA Agent — Autonomous Test Generation',
      description: 'Autonomous AI agent for QA teams, generating end-to-end tests from live repositories.',
      highlights: [
        'End-to-end test generation from live repositories using tree-sitter AST analysis',
        'Hybrid BM25 + ChromaDB retrieval',
        'Context budgeting and semantic chunking to reduce hallucinations',
        'Structured output via GPT-4.1'
      ],
      tech: ['GPT-4.1', 'tree-sitter', 'ChromaDB', 'BM25'],
      icon: <FaFlask />,
      gradient: 'from-amber-500/25 to-violet-500/25'
    },
    {
      title: 'Domain-Specific LLM Fine-Tuning Pipeline',
      description: 'Parameter-efficient fine-tuning pipeline adapting Mistral 7B for domain-specific NLP.',
      highlights: [
        'LoRA / QLoRA fine-tuning with trainable parameters down ~99%',
        'Fine-tuned adapter deployed via FastAPI inference endpoint with streaming',
        'Benchmarked against a GPT-3.5 baseline'
      ],
      tech: ['Mistral 7B', 'LoRA', 'QLoRA', 'FastAPI'],
      icon: <FaBrain />,
      gradient: 'from-cyan-500/25 to-violet-500/25'
    },
    {
      title: 'Production RAG System with Evaluation & Monitoring',
      description: 'Multi-stage RAG pipeline with evaluation across technical manuals, built for production use.',
      highlights: [
        'Multi-stage RAG pipeline: ChromaDB + BM25 + cross-encoder reranking',
        'RAGAS evaluation across technical manuals',
        'Context-aware query routing via LangGraph',
        'Average latency down 35% while maintaining accuracy'
      ],
      tech: ['ChromaDB', 'BM25', 'RAGAS', 'LangGraph'],
      icon: <FaChartLine />,
      gradient: 'from-violet-500/25 to-cyan-500/25'
    },
    {
      title: 'TalentTorch — AI Recruitment System',
      description: 'ML recruitment platform automating candidate-job matching via NLP skill extraction and RAG-style ranking.',
      highlights: [
        'NLP-based skill extraction from resumes',
        'RAG-style ranking using BAAI/bge-large-en embeddings',
        'Mistral 7B for contextual job matching'
      ],
      tech: ['NLP', 'BAAI/bge-large-en', 'Mistral 7B', 'RAG'],
      icon: <SiDjango />,
      gradient: 'from-emerald-500/25 to-cyan-500/25'
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow="PROJECTS"
          title="Featured"
          highlight="Projects"
          subtitle="Showcasing cutting-edge AI solutions built with modern technologies"
        />

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
              <div className="glass rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-[0_0_32px_rgba(34,211,238,0.15)] transition-all h-full">
                {/* Terminal-window header */}
                <div className={`bg-gradient-to-r ${project.gradient} border-b border-white/10 p-5`}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/70"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-accent/80"></span>
                    <span className="ml-auto font-mono text-xs tracking-[0.25em] text-white/50">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-5xl text-white opacity-90 drop-shadow-[0_0_16px_rgba(34,211,238,0.5)]">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs tracking-wider text-primary hover:underline"
                        >
                          {project.link.replace('https://', '')} ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-textSecondary mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary mb-3 font-mono tracking-wider">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-textSecondary">
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
