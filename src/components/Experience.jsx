import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendar } from 'react-icons/fa'
import SectionHeading from './SectionHeading'

const Experience = () => {
  const experiences = [
    {
      title: 'Associate Software Engineer (AI/ML)',
      company: 'PureLogics, Lahore',
      period: 'Dec 2025 – Present',
      bullets: [
        'Architect end-to-end RAG pipelines using hybrid BM25 + vector retrieval (ChromaDB), cross-encoder reranking, and GPT-4.1 for enterprise workflows',
        'Prompt engineering and parameter-efficient fine-tuning (LoRA/QLoRA)',
        'Build RESTful APIs connecting AI models with React frontends using Django REST Framework and FastAPI',
        'Promoted from AI/ML Intern after bootcamp-to-internship track'
      ],
      current: true
    },
    {
      title: 'AI/ML Intern',
      company: 'PureLogics',
      period: 'Sep 2025 – Dec 2025',
      bullets: [
        'Early-stage RAG pipeline development and LLM integration under senior supervision',
        'Semantic chunking and context-budgeting to reduce hallucinations in RAG prototypes'
      ],
      current: false
    },
    {
      title: 'Python + AI Bootcamp Trainee',
      company: 'PureLogics',
      period: 'May 2025 – Sep 2025',
      bullets: [
        'Intensive bootcamp: supervised/unsupervised learning, deep learning, NLP',
        'ML models with Python, Scikit-learn, TensorFlow, PyTorch'
      ],
      current: false
    },
    {
      title: 'Associate Software Engineer (AI/ML)',
      company: 'MDSOL Technologies, Lahore',
      period: 'Aug 2024 – Aug 2025',
      bullets: [
        'Owned model and retrieval layers across two production SaaS AI platforms serving 40+ agencies, shipped end to end; Employee of the Month',
        "Designed Propitive's multi-agent system on LangChain and LangGraph: intent classification, 0–100 lead qualification score, confidence thresholds escalating weak evidence to a human",
        'Hybrid retrieval (PostgreSQL + pgvector, BM25, RRF fusion, Voyage re-ranker) with strict per-agency data isolation and a provider-agnostic LLM/embedding layer',
        'Four-stage RAG evaluation harness (DeepEval, Confident AI, LangSmith) over a 200-case golden set, 3 tenants, 3 conversation types: cut top-1 errors 80% (hit@1 0.783 → 0.957), unsupported answers on unanswerable questions 0/11 → 11/11; identified 8 backend defects, 7 fixed'
      ],
      current: false
    }
  ]

  const certifications = [
    { name: 'AI Engineer Agentic Track: The Complete Agent & MCP Course — Ed Donner, Ligency', url: null },
    { name: 'AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents — Ed Donner, Ligency', url: null },
    { name: 'AI for Healthcare Systems Specialization — University of Colorado System', url: null },
    { name: 'Large Language Model Operations (LLMOps) Specialization — Duke University (Coursera)', url: null },
    { name: 'Generative AI and LLMs: Architecture and Data Preparation — IBM (Coursera)', url: null },
    { name: 'Machine Learning Specialization — IBM', url: null },
    { name: 'Introduction to Model Context Protocol — Anthropic (SkillJar)', url: null },
    { name: 'Python + AI Bootcamp (Batch-5) — PureLogics', url: null }
  ]

  const honours = [
    'PureLogics — Star of the Month, outstanding performance',
    'COMSATS Skills Development Society — Director of Communication'
  ]

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="EXPERIENCE"
          title="Work"
          highlight="Experience"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
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
                  {/* Glowing timeline dot */}
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-void shadow-[0_0_12px_rgba(34,211,238,0.9)]"></div>

                  {exp.current && (
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/15 text-primary text-xs font-mono font-semibold tracking-wider rounded-full mb-2 border border-primary/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true"></span>
                      CURRENT
                    </span>
                  )}

                  <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-textSecondary text-sm mb-3">
                    <FaCalendar className="text-xs" />
                    <span>{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-textSecondary leading-relaxed">
                        <span className="text-primary mt-0.5">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Education & Certifications</h3>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-2xl p-6 mb-8 bg-gradient-to-br from-primary/10 to-secondary/10 hover:border-primary/40 transition-all"
            >
              <h4 className="text-xl font-bold text-white mb-2">
                Bachelor of Science in Computer Science
              </h4>
              <div className="text-primary font-semibold mb-2">COMSATS University Islamabad (CUI)</div>
              <div className="flex items-center gap-2 text-textSecondary text-sm mb-2">
                <FaCalendar className="text-xs" />
                <span>Sep 2020 – Sep 2024 · CGPA 2.94/4.0</span>
              </div>
              <p className="text-textSecondary text-sm leading-relaxed">
                Thesis: Early Depression Signal Detection from Social Media Text Using Fine-Tuned
                LLMs with Explainable AI — SHAP and LIME interpretability, 88.3% accuracy on
                CLPsych/RSDD benchmarks.
              </p>
            </motion.div>

            {/* Certifications */}
            <div className="glass rounded-2xl p-6 mb-8">
              <h4 className="text-lg font-bold mb-4 neon-text">Certifications</h4>
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
                        className="flex items-start gap-3 text-textSecondary group hover:text-primary transition-colors cursor-pointer"
                      >
                        <span className="text-primary mt-1 group-hover:scale-125 transition-transform">
                          ✓
                        </span>
                        <span className="text-sm group-hover:underline">{cert.name}</span>
                      </a>
                    ) : (
                      <div className="flex items-start gap-3 text-textSecondary">
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

            {/* Honours & Awards */}
            <div className="glass rounded-2xl p-6">
              <h4 className="text-lg font-bold mb-4 neon-text">Honours &amp; Awards</h4>
              <div className="space-y-3">
                {honours.map((honour, index) => (
                  <div key={index} className="flex items-start gap-3 text-textSecondary">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">{honour}</span>
                  </div>
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
