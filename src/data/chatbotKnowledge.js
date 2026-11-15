// Q&A knowledge base for the portfolio chatbot.
// Every answer comes from Muhammad Hamza's own portfolio content:
// role, experience, education, projects, skills, certifications and contact links.
// No invented facts: if something is not in the profile, the bot says so
// and points the visitor to LinkedIn or email.

export const BOT_NAME = 'Hamza AI'
export const BOT_GREETING =
  "Hi, I'm Hamza AI — Muhammad Hamza's assistant. Ask me about his work, projects, skills, education, or how to reach him."

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
      "Hello! I'm Hamza AI. I can tell you about Muhammad Hamza — his AI engineering work, his projects, his skills, or how to contact him. What would you like to know?",
  },
  {
    id: 'who',
    keywords: ['who are you', 'who is hamza', 'about hamza', 'about yourself', 'about you', 'tell me about yourself', 'tell me about hamza', 'introduce', 'yourself', 'who is muhammad'],
    answer:
      "Muhammad Hamza is an AI Engineer and Software Developer from Lahore, Pakistan. He is an Associate Software Engineer (AI) at PureLogics, where he builds AI-powered solutions with machine learning, deep learning, and NLP — including LangChain, RAG pipelines, and LLMs. He holds a BS in Computer Science from COMSATS University (2020–2024).",
  },
  {
    id: 'work',
    keywords: ['what do you do', 'what does he do', 'your job', 'his job', 'work', 'role', 'profession', 'occupation', 'job', 'career', 'experience', 'where do you work', 'where does he work', 'company', 'purelogics', 'current'],
    answer:
      "He is an Associate Software Engineer — AI at PureLogics (Sept 2025 – present), building AI-powered solutions with ML, deep learning, and NLP using Flask, FastAPI, and Django. Before that he was an AI Intern at PureLogics (May–Aug 2025) and an RPA Developer Intern at Arcana Info (Sept–Dec 2024), where he built UiPath bots to automate repetitive business tasks.",
  },
  {
    id: 'education',
    keywords: ['education', 'degree', 'university', 'college', 'study', 'studied', 'comsats', 'bachelor', 'bs cs', 'graduation', 'qualification'],
    answer:
      "He has a Bachelor of Science in Computer Science from COMSATS University, 2020–2024.",
  },
  {
    id: 'tms',
    keywords: ['tms', 'test management', 'task management system'],
    answer:
      "TMS — Test Management System — is an intelligent task management system with AI-driven automation for task creation, prioritisation, and progress tracking. It uses LangChain and OpenAI GPT-4o for natural-language interaction, a Django REST Framework backend with PostgreSQL and role-based access control, Redis and Celery for async processing, and a React frontend.",
  },
  {
    id: 'restaurant',
    keywords: ['restaurant', 'branvelo', 'mezban', 'food', 'ordering', 'menu', 'chatbot', 'restaurant system'],
    answer:
      "His AI-Powered Restaurant System is an intelligent restaurant management system with a conversational AI chatbot for menu exploration and autonomous ordering. It runs on a FastAPI backend, an agentic AI chatbot built with LangGraph and GPT-4o Mini, a RAG pipeline with Pinecone for semantic search, and PostgreSQL for structured data.",
  },
  {
    id: 'talenttorch',
    keywords: ['talenttorch', 'recruitment', 'hiring', 'resume', 'candidate', 'talent'],
    answer:
      "TalentTorch is an AI-powered recruitment platform that automates candidate-job matching through NLP and semantic similarity. It uses Django REST Framework with NLP-based skill extraction, RAG-style ranking with BAAI/bge-large-en and Mistral 7B Instruct, intelligent resume parsing, and MySQL.",
  },
  {
    id: 'codebase',
    keywords: ['codebase', 'code assistant', 'code analysis', 'repository'],
    answer:
      "His Intelligent Codebase Assistant lets developers query a code repository in natural language. It uses Django REST Framework with a Pinecone vector database, a dual-provider setup (OpenAI and Ollama), semantic code search with BGE-Large embeddings and LLaMA 3 8B, and a factory pattern with automatic fallback.",
  },
  {
    id: 'projects',
    keywords: ['project', 'projects', 'portfolio', 'built', 'work samples', 'show me'],
    answer:
      "He has 4 featured projects:\n1. TMS (Test Management System) — AI task management with LangChain and GPT-4o.\n2. AI-Powered Restaurant System — conversational ordering chatbot with LangGraph and RAG.\n3. TalentTorch — AI recruitment and candidate-job matching with NLP.\n4. Intelligent Codebase Assistant — query any codebase in natural language.\nAsk me about any of them by name for details.",
  },
  {
    id: 'skills',
    keywords: ['skill', 'skills', 'tech stack', 'stack', 'technology', 'technologies', 'tools', 'python', 'langchain', 'rag', 'llm', 'machine learning', 'deep learning', 'nlp', 'django', 'fastapi', 'what can he do', 'expertise'],
    answer:
      "His core stack is Python, LangChain, RAG pipelines, and LLMs (OpenAI GPT), with TensorFlow and PyTorch for deep learning, and Django, FastAPI, and PostgreSQL/MySQL for backends. He also works with Hugging Face Transformers, Pinecone, Whisper speech recognition, n8n workflow automation, Docker, Git, and React. Strongest areas: Python (95%), LangChain (90%), and Django (90%).",
  },
  {
    id: 'certifications',
    keywords: ['certification', 'certifications', 'certificate', 'certificates', 'course', 'courses', 'credentials'],
    answer:
      "He holds 9 certifications, including Fine-Tuning for LLMs (LinkedIn Learning), Mastering Model Context Protocol (MCP), Microsoft Azure Machine Learning Fundamentals, Generative AI and LLMs (Coursera), Introduction to AI (Coursera), Introduction to SQL (DataCamp), Python for Beginners (SimpliLearn), the Python + AI Bootcamp at PureLogics, and the Google Soft Skills Program. The full list with verification links is in the Experience section of this site.",
  },
  {
    id: 'workflows',
    keywords: ['workflow', 'workflows', 'n8n', 'automation', 'automate', 'zapier', 'slack'],
    answer:
      "He builds automation workflows with n8n. Two are showcased here: a Deal Flow & Sales Pipeline Notifier (Google Sheets to Slack alerts when deal stages change) and an Upwork Job Scraper & AI Qualifier (scraping, AI lead filtering, and Slack notifications for high-quality jobs).",
  },
  {
    id: 'contact',
    keywords: ['contact', 'reach', 'email', 'mail', 'hire', 'hiring', 'whatsapp', 'linkedin', 'github', 'phone', 'message', 'talk to him', 'get in touch', 'social'],
    answer:
      "You can reach him by email at hamzaahsin786@gmail.com, on LinkedIn (linkedin.com/in/hamzaahsin), on GitHub (github.com/hamzaahsin786), or on WhatsApp at +92 313 7791392.",
  },
  {
    id: 'cv',
    keywords: ['cv', 'resume', 'download cv', 'download resume', 'download'],
    answer:
      "You can download his CV with the 'Download CV' button on this page (bottom-right corner). It is also listed as 'Muhammad Hamza — AI Engineer'.",
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
      "You're welcome! Anything else you'd like to know about Hamza — his projects, skills, or experience?",
  },
  {
    id: 'availability',
    keywords: ['available', 'availability', 'freelance', 'open to work', 'looking for', 'job opportunity', 'opportunity'],
    answer:
      "He is currently working as an Associate Software Engineer (AI) at PureLogics. For work inquiries or opportunities, the best way is to message him on LinkedIn or email hamzaahsin786@gmail.com.",
  },
]

const FALLBACK =
  "I can only answer from Hamza's profile — his work, projects, skills, education, certifications, and contact details. Try asking, for example: 'What are his skills?' or 'Show me his projects.'"

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
