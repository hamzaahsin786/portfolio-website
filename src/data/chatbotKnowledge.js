// Q&A knowledge base for the portfolio chatbot.
// Every answer comes from Muhammad Hamza's current CV (Nov 2026):
// profile, education, work, projects, skills, certifications, honours, contact.
// No invented facts: if something is not in the CV, the bot says so
// and points the visitor to LinkedIn or email.

export const BOT_NAME = 'Hamza AI'
export const BOT_GREETING =
  "Hi, I'm Hamza AI, Muhammad Hamza's assistant. Ask me about his work, projects, skills, education, or how to reach him."

export const SUGGESTIONS = [
  'What does Hamza do?',
  'Show me his projects',
  'What are his skills?',
  'How can I contact him?',
]

const INTENTS = [
  {
    id: 'greeting',
    keywords: ['hello', 'hi', 'hey', 'salam', 'aoa', 'assalam', 'good morning', 'good afternoon', 'good evening'],
    answer:
      "Hello! I'm Hamza AI. I can tell you about Muhammad Hamza, his AI engineering work, his projects, his skills, or how to contact him. What would you like to know?",
  },
  {
    id: 'who',
    keywords: ['who are you', 'who is hamza', 'about hamza', 'about yourself', 'about you', 'tell me about yourself', 'tell me about hamza', 'introduce', 'yourself', 'who is muhammad'],
    answer:
      "Muhammad Hamza is an AI Engineer from Lahore, Pakistan, with 3 years taking LLM systems from research into production.\nHe owns the full lifecycle: model selection and benchmarking, fine-tuning, retrieval and evaluation design, deployment, and monitoring.\nHis core areas are LLM fine-tuning, vision-language models, real-time voice agents, agentic RAG, and multi-agent systems.",
  },
  {
    id: 'querive',
    keywords: ['querive'],
    answer:
      "Querive (querive.com) is an AI Support & Lead Agent for SMBs, answering from each business's knowledge base with cited answers. Hamza built it alone as sole AI engineer.\nIt uses multi-tenant hybrid retrieval (RRF fusion, Voyage re-ranker), a LangGraph agent for lead capture, and an outbound engine routing leads in under 60 seconds.\nResults: inference cost down 78%, grounding accuracy up 25%, tool-call correctness 40% to 100%.\nStack: Go, LangGraph, Agentic RAG, pgvector, BM25.",
  },
  {
    id: 'propitive',
    keywords: ['propitive'],
    answer:
      "Propitive (propitive.com) is a Multi-Agent AI CRM for property-management agencies. Three autonomous agents run tenant and landlord conversations, lead qualification, and scheduled outreach.\nHamza designed the multi-agent system (LangChain, LangGraph): intent classification, a 0-100 lead qualification score, and confidence thresholds that escalate weak evidence to a human.\nStack: Python, LangGraph, pgvector.",
  },
  {
    id: 'thesis',
    keywords: ['thesis', 'depression', 'mental-bert', 'shap', 'lime', 'explainable', 'clpsych', 'rsdd'],
    answer:
      "His bachelor's thesis is 'Early Depression Signal Detection from Social Media Text Using Fine-Tuned LLMs with Explainable AI'. He applied SHAP and LIME interpretability to a fine-tuned Mental-BERT model, reaching 88.3% accuracy on CLPsych/RSDD benchmarks, with transparent predictions for potential clinical review.",
  },
  {
    id: 'tms-sqa',
    keywords: ['tms-sqa', 'tms', 'test generation', 'qa agent', 'autonomous test'],
    answer:
      "The TMS-SQA Agent is an autonomous test generation system for QA teams. It generates end-to-end tests from live repositories using tree-sitter AST analysis and hybrid BM25 + ChromaDB retrieval, with context budgeting and semantic chunking to reduce hallucinations and structured output via GPT-4.1.",
  },
  {
    id: 'fine-tuning',
    keywords: ['fine-tuning', 'fine tuning', 'lora', 'qlora', 'mistral', 'pipeline'],
    answer:
      "His Domain-Specific LLM Fine-Tuning Pipeline uses parameter-efficient fine-tuning (LoRA / QLoRA) to adapt Mistral 7B for domain-specific NLP, bringing trainable parameters down by about 99%. The fine-tuned adapter is deployed via a FastAPI inference endpoint with streaming, and benchmarked against a GPT-3.5 baseline.",
  },
  {
    id: 'production-rag',
    keywords: ['production rag', 'rag system', 'ragas', 'latency'],
    answer:
      "His Production RAG System with Evaluation & Monitoring is a multi-stage RAG pipeline (ChromaDB + BM25 + cross-encoder reranking) with RAGAS evaluation across technical manuals. Context-aware query routing runs via LangGraph, and average latency is down 35% while maintaining accuracy.",
  },
  {
    id: 'talenttorch',
    keywords: ['talenttorch', 'recruitment', 'hiring', 'resume', 'candidate', 'talent'],
    answer:
      "TalentTorch is an AI-based recruitment system: an ML platform automating candidate-job matching via NLP skill extraction and RAG-style ranking using BAAI/bge-large-en embeddings and Mistral 7B.",
  },
  {
    id: 'evaluation',
    keywords: ['evaluation', 'evaluated', 'evaluate', 'deepeval', 'confident ai', 'langsmith', 'langfuse', 'judge', 'benchmark', 'benchmarking', 'golden', 'observability'],
    answer:
      "He works to an accuracy target agreed up front. His toolkit: hit@1, recall@k, precision@k, MRR, nDCG, DeepEval, Confident AI, LangSmith, Langfuse, LLM-as-Judge, golden datasets, regression testing.\nOn Propitive he cut top-1 errors 80% (hit@1 0.783 to 0.957) and took unsupported answers on unanswerable questions from 0/11 to 11/11.",
  },
  {
    id: 'voice',
    keywords: ['voice', 'voice ai', 'livekit', 'calling', 'asr', 'stt', 'tts', 'real-time voice', 'realtime voice'],
    answer:
      "Yes, he builds real-time voice agents and inbound calling agents on LiveKit, with ASR/STT and TTS. Voice AI is one of his core areas, alongside agentic RAG and multi-agent systems.",
  },
  {
    id: 'work',
    keywords: ['what do you do', 'what does he do', 'what does hamza do', 'your job', 'his job', 'work', 'role', 'profession', 'occupation', 'job', 'career', 'experience', 'where do you work', 'where does he work', 'company', 'purelogics', 'mdsol', 'current', 'bootcamp', 'intern'],
    answer:
      "Associate Software Engineer (AI/ML) at PureLogics, Lahore, Dec 2025 to present. He architects end-to-end RAG pipelines (hybrid BM25 + vector retrieval, cross-encoder reranking, GPT-4.1) and does LoRA/QLoRA fine-tuning.\nBefore that: AI/ML Intern at PureLogics (Sep-Dec 2025) and Python + AI Bootcamp Trainee (May-Sep 2025).\nEarlier: MDSOL Technologies (Aug 2024 - Aug 2025), where he owned the model and retrieval layers of two production SaaS AI platforms serving 40+ agencies.",
  },
  {
    id: 'education',
    keywords: ['education', 'degree', 'university', 'college', 'study', 'studied', 'comsats', 'bachelor', 'bs cs', 'graduation', 'qualification', 'cgpa', 'coursework'],
    answer:
      "He has a BS in Computer Science from COMSATS University Islamabad (Sep 2020 - Sep 2024), CGPA 2.94/4.0. His thesis: Early Depression Signal Detection from Social Media Text Using Fine-Tuned LLMs with Explainable AI, reached 88.3% accuracy on CLPsych/RSDD benchmarks. Coursework: Machine Learning, Artificial Intelligence, Computer Vision, Data Structures & Algorithms, Data Science.",
  },
  {
    id: 'projects',
    keywords: ['project', 'projects', 'portfolio', 'built', 'work samples', 'show me'],
    answer:
      "He has 7 key projects:\n1. Querive: AI Support & Lead Agent (querive.com).\n2. Propitive: Multi-Agent AI CRM (propitive.com).\n3. Depression Detection with Explainable AI (his thesis, 88.3% accuracy).\n4. TMS-SQA Agent: autonomous test generation.\n5. Domain-Specific LLM Fine-Tuning Pipeline (LoRA / QLoRA, Mistral 7B).\n6. Production RAG System with Evaluation & Monitoring.\n7. TalentTorch: AI recruitment system.\nAsk me about any of them by name for details.",
  },
  {
    id: 'skills',
    keywords: ['skill', 'skills', 'tech stack', 'stack', 'technology', 'technologies', 'tools', 'python', 'langchain', 'langgraph', 'rag', 'llm', 'machine learning', 'deep learning', 'nlp', 'django', 'fastapi', 'go', 'vllm', 'qdrant', 'mcp', 'what can he do', 'expertise'],
    answer:
      "Primary stack: Python, FastAPI, LangChain, LangGraph, vLLM, LiveKit, Go, PostgreSQL + pgvector.\nAlso: NLP & deep learning (PyTorch, Hugging Face Transformers, LoRA/QLoRA, VLMs), agentic AI (multi-agent systems, agentic RAG, MCP), voice AI (LiveKit, ASR/STT, TTS), and evaluation (DeepEval, Confident AI, LangSmith, Langfuse).\nPlus data & infra (Qdrant, Docker, Azure, CI/CD) and frontend (React, Next.js, TypeScript).",
  },
  {
    id: 'certifications',
    keywords: ['certification', 'certifications', 'certificate', 'certificates', 'course', 'courses', 'credentials'],
    answer:
      "He holds 8 certifications:\n1. AI Engineer Agentic Track (Ed Donner, Ligency)\n2. AI Engineer Core Track (Ed Donner, Ligency)\n3. AI for Healthcare Systems (University of Colorado)\n4. LLMOps Specialization (Duke, Coursera)\n5. Generative AI and LLMs (IBM, Coursera)\n6. Machine Learning Specialization (IBM)\n7. Introduction to MCP (Anthropic, SkillJar)\n8. Python + AI Bootcamp (PureLogics)",
  },
  {
    id: 'honours',
    keywords: ['award', 'awards', 'honour', 'honours', 'honor', 'honors', 'star of the month', 'employee of the month', 'director of communication', 'recognition'],
    answer:
      "His honours include Star of the Month at PureLogics for outstanding performance, and Director of Communication at the COMSATS Skills Development Society. At MDSOL Technologies he was also Employee of the Month.",
  },
  {
    id: 'contact',
    keywords: ['contact', 'reach', 'email', 'mail', 'hire', 'hiring', 'whatsapp', 'linkedin', 'github', 'phone', 'message', 'talk to him', 'get in touch', 'social', 'portfolio link', 'website'],
    answer:
      "You can reach him by email at hamzaahsin786@gmail.com, on LinkedIn (linkedin.com/in/hamzaahsin), on GitHub (github.com/hamzaahsin786), on WhatsApp at +92 313 7791392, or through his portfolio at mhamza-aiengineer.vercel.app.",
  },
  {
    id: 'cv',
    keywords: ['cv', 'resume', 'download cv', 'download resume', 'download'],
    answer:
      "You can download his CV with the 'Download CV' button on this page (bottom-right corner). It is also listed as 'Muhammad Hamza, AI Engineer'.",
  },
  {
    id: 'location',
    keywords: ['where are you', 'where is he', 'location', 'based', 'live', 'from', 'country', 'city', 'lahore', 'pakistan'],
    answer:
      "He is based in Lahore, Pakistan.",
  },
  {
    id: 'thanks',
    keywords: ['thank', 'thanks', 'shukran', 'great', 'awesome', 'nice'],
    answer:
      "You're welcome! Anything else you'd like to know about Hamza, his projects, skills, or experience?",
  },
  {
    id: 'availability',
    keywords: ['available', 'availability', 'freelance', 'open to work', 'looking for', 'job opportunity', 'opportunity'],
    answer:
      "He is currently working as an Associate Software Engineer (AI/ML) at PureLogics. For work inquiries or opportunities, the best way is to message him on LinkedIn or email hamzaahsin786@gmail.com.",
  },
]

const FALLBACK =
  "I can only answer from Hamza's profile: his work, projects, skills, education, certifications, and contact details. Try asking, for example: 'What are his skills?' or 'Show me his projects.'"

// Salary is not in the CV: answer it directly, before any other intent
// can claim the question (e.g. 'current' matching the work intent).
// Includes common misspellings like 'slary'.
const SALARY_KEYWORDS = [
  'salary', 'slary', 'salry', 'sallery', 'salery',
  'pay', 'income', 'earn', 'earnings', 'wage', 'wages',
  'compensation', 'ctc', 'remuneration',
]
const SALARY_ANSWER =
  "His salary isn't in his public profile, so I can't share it. To discuss compensation, message him on LinkedIn (linkedin.com/in/hamzaahsin) or email hamzaahsin786@gmail.com."

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[?!.،,]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

// Match whole words only: 'hi' must not match 'him' or 'his',
// and 'work' must not match 'workflows'.
function keywordMatches(text, keyword) {
  if (keyword.includes(' ')) return text.includes(keyword)
  return text.split(' ').includes(keyword)
}

export function answerQuestion(rawText) {
  const text = normalize(rawText || '')
  if (!text) return FALLBACK

  // Salary guard: checked before the scoring loop so no other
  // intent (e.g. 'current' -> work) can steal a salary question.
  if (SALARY_KEYWORDS.some((keyword) => keywordMatches(text, keyword))) return SALARY_ANSWER

  let best = null
  let bestScore = 0

  for (const intent of INTENTS) {
    let score = 0
    for (const keyword of intent.keywords) {
      if (keywordMatches(text, keyword)) {
        // Multi-word phrases are a stronger signal than single words.
        score += keyword.includes(' ') ? 3 : 1
      }
    }
    if (score > bestScore) {
      bestScore = score
      best = intent
    }
  }

  return best ? best.answer : FALLBACK
}
