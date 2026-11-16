import { motion } from 'framer-motion'
import { FaBrain, FaRobot, FaMicrophone, FaChartLine } from 'react-icons/fa'
import SectionHeading from './SectionHeading'

const About = () => {
  const highlights = [
    {
      icon: <FaBrain />,
      title: 'LLM Systems in Production',
      description: 'Taking LLM systems from research into production — model selection, benchmarking, fine-tuning, deployment, and monitoring'
    },
    {
      icon: <FaRobot />,
      title: 'Agentic AI & Multi-Agent Systems',
      description: 'Multi-agent systems and agentic RAG on LangChain and LangGraph, with tool calling and human-in-the-loop escalation'
    },
    {
      icon: <FaMicrophone />,
      title: 'Real-Time Voice AI',
      description: 'Real-time voice agents and inbound calling agents on LiveKit, with ASR/STT and TTS'
    },
    {
      icon: <FaChartLine />,
      title: 'Evaluation & Observability',
      description: 'Retrieval evaluation, LLM-as-judge, DeepEval and Confident AI over golden datasets — working to an accuracy target, not a demo'
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
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          eyebrow="ABOUT"
          title="About"
          highlight="Me"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-xs tracking-[0.3em] text-primary/80 mb-3">
              {'// PROFILE'}
            </p>
            <h3 className="font-display text-3xl font-bold mb-6 neon-text">
              AI Engineer & Software Developer
            </h3>
            <p className="text-textSecondary text-lg mb-4 leading-relaxed">
              I'm an AI Engineer with 3 years taking LLM systems from research into production. I own
              the full lifecycle — model selection and benchmarking, fine-tuning, retrieval and
              evaluation design, deployment, and monitoring — and work to an accuracy target agreed
              up front rather than to a demo.
            </p>
            <p className="text-textSecondary text-lg mb-4 leading-relaxed">
              At MDSOL Technologies I owned the model and retrieval layers across two production SaaS
              AI platforms serving 40+ agencies, shipping end to end — including a multi-agent system
              on LangChain and LangGraph and a four-stage RAG evaluation harness over a 200-case
              golden set. At PureLogics I architect end-to-end RAG pipelines with hybrid retrieval,
              cross-encoder reranking, and LoRA/QLoRA fine-tuning for enterprise workflows.
            </p>
            <p className="text-textSecondary text-lg mb-6 leading-relaxed">
              My bachelor's thesis used SHAP and LIME on a fine-tuned Mental-BERT model to detect
              early depression signals from social media text, reaching 88.3% accuracy on
              CLPsych/RSDD benchmarks. My goal is the same on every system I build: grounded,
              measured, production-grade AI.
            </p>

            <div className="flex gap-8">
              <div className="text-center">
                <div className="font-display text-4xl font-bold neon-text">3+</div>
                <div className="text-textSecondary text-sm mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-bold neon-text">7</div>
                <div className="text-textSecondary text-sm mt-1">Projects</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-bold neon-text">8</div>
                <div className="text-textSecondary text-sm mt-1">Certifications</div>
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
                whileHover={{ scale: 1.03, y: -5 }}
                className="glass rounded-2xl p-6 hover:border-primary/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.15)] transition-all"
              >
                <div className="text-4xl text-primary mb-4 drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]">{item.icon}</div>
                <h4 className="text-xl font-semibold mb-2 text-white">{item.title}</h4>
                <p className="text-textSecondary text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
