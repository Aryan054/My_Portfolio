export const profile = {
  name: 'Aryan Rathod',
  role: 'Python Full Stack Developer',
  specialization: 'Django & REST APIs | FastAPI | PostgreSQL | React',
  tagline: 'Building Scalable SaaS Architectures & Intelligent AI Systems',
  subtitle:
    'Python Full Stack Developer with 6+ months of internship experience building live software for a B2B SaaS utility platform (SMART360) and an invoice-discounting fintech platform (Monytics). Built end-to-end meter selection workflows, delivered 10+ scalable REST APIs, and resolved 50+ bugs.',
  location: 'Pune, Maharashtra, India',
  email: 'aryanrathod791@gmail.com',
  phone: '+91 8767514749',
  phoneHref: '+918767514749',
  availability: 'Available Immediately',
  experienceMonths: '6+',
  github: 'https://github.com/aryan054',
  githubLabel: 'github.com/aryan054',
  linkedin: 'https://www.linkedin.com/in/aryan-rathod054/',
  linkedinLabel: 'linkedin.com/in/aryan-rathod054',
  portfolio: 'https://aryan054.vercel.app/',
  portfolioLabel: 'aryan054.vercel.app',
  photoUrl: '/My_picture.png',
  resumeUrl: '/Aryan-Rathod-Resume.pdf',
}

export const routes = [
  { id: 'about', method: 'GET', label: '/about' },
  { id: 'skills', method: 'GET', label: '/skills' },
  { id: 'experience', method: 'GET', label: '/experience' },
  { id: 'projects', method: 'GET', label: '/projects' },
  { id: 'education', method: 'GET', label: '/education' },
  { id: 'contact', method: 'POST', label: '/contact' },
]

export const summary =
  'Python Full Stack Developer with 6+ months of internship experience building live software for a B2B SaaS utility platform and an invoice-discounting fintech platform. Strong in Django, Django REST Framework, FastAPI and PostgreSQL, with frontends in React, HTML5, CSS3 and JavaScript. Built the end-to-end meter selection workflow for SMART360, resolved 50+ bugs, and shipped two live full-stack applications. B.E. in AI & ML; available immediately.'

export const recruiterHighlights = [
  {
    title: 'Immediate Availability',
    metric: 'Available Now',
    description: 'Ready to join immediately in Pune, hybrid, or remote positions.',
    tag: 'Ready to Deploy',
    icon: '⚡',
  },
  {
    title: 'Production SaaS & Fintech',
    metric: '6+ Months',
    description: 'Internships at Bynry Inc. (SMART360 utility SaaS) & Monytics (fintech invoice discounting).',
    tag: 'Live Experience',
    icon: '🏢',
  },
  {
    title: 'Scalable REST APIs',
    metric: '10+ APIs Built',
    description: 'Production DRF endpoints, Django ORM optimization, PostgreSQL schema modeling, and JWT/OAuth.',
    tag: 'Backend Excellence',
    icon: '🚀',
  },
  {
    title: 'Production Bug Resolution',
    metric: '50+ Fixed',
    description: 'Traced root causes across frontend, data processing, and backend pipelines to ship clean fixes.',
    tag: 'Problem Solver',
    icon: '🛠️',
  },
  {
    title: 'AI & Vector Search',
    metric: 'pgvector & NLP',
    description: 'Sentence-Transformers, PyTorch neural networks, semantic search, and automated resume parsing.',
    tag: 'AI/ML Engineering',
    icon: '🧠',
  },
  {
    title: 'B.E. in AI & ML',
    metric: '7.24 / 10 CGPA',
    description: 'Savitribai Phule Pune University (SPPU, 2021–2025) graduate in AI and Machine Learning.',
    tag: 'Strong Foundation',
    icon: '🎓',
  },
]

export const strengths = [
  'Built end-to-end meter selection and assignment workflow for SMART360 SaaS from month 2 of internship',
  'Engineered 10+ production REST APIs with Django REST Framework, Django ORM, and PostgreSQL',
  'Diagnosed and resolved 50+ production bugs across live frontend, backend, and data workflows',
  'Integrated vector semantic search using pgvector, Sentence-Transformers, and spaCy in full-stack apps',
  'Graduated with B.E. in Artificial Intelligence & Machine Learning from SPPU (7.24 CGPA)',
  'Immediately available for full-time Full Stack / Backend / Python Developer roles',
]

export const technicalSkills = {
  backend: {
    category: 'Backend & APIs',
    description: 'Scalable server architecture, RESTful API design, authentication, and database modeling',
    icon: '⚙️',
    skills: [
      { name: 'Python', level: 'Expert', hot: true },
      { name: 'Django', level: 'Expert', hot: true },
      { name: 'Django REST Framework', level: 'Expert', hot: true },
      { name: 'FastAPI', level: 'Advanced', hot: true },
      { name: 'RESTful API Design', level: 'Expert', hot: true },
      { name: 'Django ORM', level: 'Expert', hot: false },
      { name: 'SQLAlchemy', level: 'Advanced', hot: false },
      { name: 'Celery', level: 'Intermediate', hot: false },
      { name: 'JWT & Google OAuth', level: 'Advanced', hot: false },
      { name: 'Role-Based Access Control (RBAC)', level: 'Advanced', hot: false },
      { name: 'Third-Party API Integration', level: 'Advanced', hot: false },
    ],
  },
  frontend: {
    category: 'Frontend & UI',
    description: 'Responsive, accessible, component-driven user interfaces and asynchronous data fetching',
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 'Advanced', hot: true },
      { name: 'TypeScript', level: 'Intermediate', hot: true },
      { name: 'JavaScript (ES6+)', level: 'Advanced', hot: true },
      { name: 'HTML5', level: 'Expert', hot: false },
      { name: 'CSS3 / TailwindCSS', level: 'Advanced', hot: false },
      { name: 'Bootstrap', level: 'Advanced', hot: false },
      { name: 'Fetch API / AJAX', level: 'Expert', hot: false },
      { name: 'Responsive Design', level: 'Expert', hot: false },
    ],
  },
  databases: {
    category: 'Databases & Storage',
    description: 'Relational data modeling, vector embeddings, caching, and query optimization',
    icon: '🗄️',
    skills: [
      { name: 'SQL', level: 'Expert', hot: true },
      { name: 'PostgreSQL', level: 'Expert', hot: true },
      { name: 'pgvector (Vector Search)', level: 'Advanced', hot: true },
      { name: 'Redis', level: 'Intermediate', hot: false },
      { name: 'MySQL', level: 'Advanced', hot: false },
      { name: 'SQLite', level: 'Advanced', hot: false },
    ],
  },
  aiMl: {
    category: 'AI / ML & NLP',
    description: 'Neural networks, vector embeddings, semantic search, intent classification, and audio NLP',
    icon: '🧠',
    skills: [
      { name: 'PyTorch', level: 'Advanced', hot: true },
      { name: 'Sentence-Transformers', level: 'Advanced', hot: true },
      { name: 'pgvector Embeddings', level: 'Advanced', hot: true },
      { name: 'Semantic Search & Cosine Similarity', level: 'Advanced', hot: true },
      { name: 'spaCy', level: 'Advanced', hot: false },
      { name: 'NLTK', level: 'Advanced', hot: false },
      { name: 'Resume Parsing & Skill Extraction', level: 'Advanced', hot: true },
      { name: 'Scikit-learn', level: 'Advanced', hot: false },
      { name: 'Pandas & NumPy', level: 'Expert', hot: false },
      { name: 'Feature Engineering', level: 'Advanced', hot: false },
      { name: 'SpeechRecognition & gTTS', level: 'Intermediate', hot: false },
      { name: 'Neural Networks', level: 'Advanced', hot: false },
    ],
  },
  tools: {
    category: 'Tools & DevOps',
    description: 'Version control, containerization, deployment pipelines, and API testing',
    icon: '🚀',
    skills: [
      { name: 'Git & GitHub', level: 'Expert', hot: true },
      { name: 'Docker', level: 'Intermediate', hot: true },
      { name: 'Postman', level: 'Expert', hot: false },
      { name: 'Linux / Bash', level: 'Advanced', hot: false },
      { name: 'CI/CD Pipelines', level: 'Intermediate', hot: false },
      { name: 'Vercel & Render', level: 'Advanced', hot: false },
      { name: 'Neon Serverless Postgres', level: 'Advanced', hot: false },
      { name: 'Agile & Code Reviews', level: 'Advanced', hot: false },
      { name: 'API Testing & Debugging', level: 'Expert', hot: false },
    ],
  },
  familiar: {
    category: 'Familiar Technologies',
    description: 'Secondary frameworks and tools utilized across projects and research',
    icon: '💡',
    skills: [
      { name: 'Flask', level: 'Familiar', hot: false },
      { name: 'MongoDB', level: 'Familiar', hot: false },
      { name: 'Oracle SQL', level: 'Familiar', hot: false },
      { name: 'Jenkins', level: 'Familiar', hot: false },
      { name: 'AWS Cloud', level: 'Familiar', hot: false },
    ],
  },
}

export const skillGroups = Object.values(technicalSkills).map((grp) => ({
  title: grp.category,
  skills: grp.skills.map((s) => s.name),
}))

export const experience = [
  {
    verb: 'POST',
    role: 'Backend Engineer Intern',
    title: 'Backend Engineer Intern',
    company: 'Bynry Inc.',
    org: 'Bynry Inc. · Pune, Maharashtra',
    productName: 'SMART360',
    productDesc: 'AI-enabled, cloud-native utility management SaaS (water, electric, gas)',
    badge: 'B2B SaaS Utility',
    dates: 'April 2026 – June 2026',
    location: 'Pune, Maharashtra',
    summary:
      'Designed and shipped the end-to-end meter selection and assignment workflow for SMART360, built 10+ production REST APIs, and diagnosed production bugs.',
    bullets: [
      'Designed and built the end-to-end meter selection and assignment workflow in SMART360 (customer request, detail capture, meter selection, meter assignment), delivered from the second month of the internship.',
      'Built 10+ scalable REST APIs with Django REST Framework, Django ORM and PostgreSQL for the live platform.',
      'Diagnosed and fixed production bugs across new and existing APIs by tracing root causes and shipping clean fixes.',
    ],
    highlights: [
      'End-to-end meter workflow deployed to production',
      '10+ scalable RESTful APIs shipped',
      'High reliability Django ORM & PostgreSQL schema',
    ],
    stack: [
      'Python',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'Django ORM',
      'Git',
      'Agile',
      'API Testing',
    ],
  },
  {
    verb: 'POST',
    role: 'Python Developer Intern',
    title: 'Python Developer Intern',
    company: 'Monytics',
    org: 'Monytics · Pune, Maharashtra',
    productName: 'Monytics Platform',
    productDesc: 'Alternate investment platform for invoice discounting, connecting SMEs with investors',
    badge: 'Fintech SaaS',
    dates: 'January 2026 – April 2026',
    location: 'Pune, Maharashtra',
    summary:
      'Developed full-stack features across React frontend and Python backend, resolved 50+ bugs, and automated data processing workflows.',
    bullets: [
      'Built new features across frontend and backend of the live platform based on business requirements.',
      'Resolved 50+ bugs across website, data-processing and backend workflows by tracing root causes and validating fixes.',
      'Built Python automation and integration workflows that streamlined data handling and improved performance.',
    ],
    highlights: [
      '50+ production bugs resolved with root-cause analysis',
      'Full-stack delivery bridging Python backend and React frontend',
      'Automated data workflows streamlining SME invoice handling',
    ],
    stack: [
      'Python',
      'React.js',
      'REST APIs',
      'PostgreSQL',
      'Data Processing',
      'Automation',
      'Git',
    ],
  },
]

export const projects = [
  {
    id: 'ai-career-intelligence',
    path: '/ai-career-intelligence',
    title: 'AI Career Intelligence Platform',
    tagline: 'AI Recruitment Platform with Semantic Matching & Resume Parsing',
    badge: 'AI & Full Stack',
    featured: true,
    category: 'Full Stack & AI',
    image: '/ai_career_intelligence.png',
    description:
      'AI-powered recruitment platform with dual candidate & recruiter workflows. Features automatic PDF/DOCX resume skill extraction, personalized job recommendations with match percentages, and 384-dimensional vector semantic matching.',
    problem:
      'Traditional job boards rely on rigid keyword searches, leading to poor candidate-job matching and tedious manual resume screening for recruiters.',
    solution:
      'Engineered an intelligent semantic matching engine using spaCy and Sentence-Transformers (all-MiniLM-L6-v2) stored in PostgreSQL with pgvector, combining skill overlap with cosine similarity to rank candidates accurately.',
    overview:
      'Full-stack SaaS platform with candidate and recruiter portals, automated resume parsing, AI match explanations with gap analysis, and recruiter candidate ranking.',
    bullets: [
      'Built an AI-powered recruitment platform with two roles: candidates upload PDF/DOCX resumes, get automatic skill extraction, personalized job recommendations with match percentages and AI explanations of matched skills and gaps; recruiters post jobs, view ranked candidate matches and parsed resumes, and download resumes.',
      'Implemented semantic matching with spaCy and Sentence-Transformers (all-MiniLM-L6-v2, 384-dimensional embeddings stored in pgvector), combining skill overlap with cosine similarity to score matches beyond keyword search.',
      'Added JWT auth, role-based authorization and Celery/Redis background jobs; hosted on Vercel, Render and Neon.',
    ],
    features: [
      'Automated PDF/DOCX resume parsing',
      '384-d embeddings stored in pgvector',
      'Candidate & recruiter role-based workflows',
      'AI skill match % & gap analysis',
      'Celery & Redis background worker tasks',
      'JWT authentication & RBAC authorization',
    ],
    architecture: 'FastAPI + React.js + TypeScript + PostgreSQL (pgvector) + Celery/Redis',
    impact: 'Semantic match scoring beyond keywords | Instant resume parsing & candidate ranking',
    stack: [
      'React.js',
      'TypeScript',
      'FastAPI',
      'PostgreSQL',
      'pgvector',
      'spaCy',
      'Sentence-Transformers',
      'Celery',
      'Redis',
    ],
    techStack: [
      'FastAPI',
      'React.js',
      'TypeScript',
      'PostgreSQL',
      'pgvector',
      'spaCy',
      'Sentence-Transformers',
    ],
    github: 'https://github.com/Aryan054/AI-Career-Intelligence',
    demo: 'https://ai-career-intelligence-6acbhjbxg-aryan054s-projects.vercel.app/login',
    hasLiveDemo: true,
  },
  {
    id: 'healthcare-appointment',
    path: '/healthcare-appointment',
    title: 'Healthcare Appointment Booking System',
    tagline: 'Full-Stack Clinic Platform with Role-Based Access & DRF REST APIs',
    badge: 'Full Stack Web',
    featured: true,
    category: 'Full Stack',
    image: '/doctor_appointment.png',
    description:
      'A comprehensive full-stack healthcare platform connecting patients, doctors, and clinic admins. Features real-time availability scheduling, medical record generation, ticket-style appointment passes, and simulated payment flow.',
    problem:
      'Manual clinic bookings cause double-booking, scheduling conflicts, patient delays, and fragmented medical record keeping.',
    solution:
      'Built a robust Django REST Framework backend with PostgreSQL and secure role-based access control, coupled with a responsive UI, appointment passes, and live clinic map directions.',
    overview:
      'Production-grade healthcare portal deployed on Vercel with automated status notifications and patient history management.',
    bullets: [
      'Built a full-stack platform for patients, doctors and admins with role-based access control and DRF REST APIs.',
      'Implemented patient profiles, availability-based appointment booking and rescheduling, a ticket-style appointment pass, and map integration that guides patients to the doctor’s clinic address.',
      'Enabled doctors to create medical records that patients can view and download; added status-based notifications (booking, confirmation, completion, new record) and a simulated payment flow. Deployed on Vercel.',
    ],
    features: [
      'Role-based access control (Patient / Doctor / Admin)',
      'Ticket-style downloadable appointment pass',
      'Clinic map integration for navigation',
      'Doctor medical records management & download',
      'Status-based notification lifecycle',
      'Google OAuth & simulated checkout flow',
    ],
    architecture: 'Django + DRF + PostgreSQL + JavaScript + Google OAuth',
    impact: 'Live full-stack deployment on Vercel | End-to-end appointment lifecycle',
    stack: ['Django', 'DRF', 'PostgreSQL', 'JavaScript', 'Google OAuth', 'HTML5', 'Bootstrap'],
    techStack: ['Django', 'DRF', 'PostgreSQL', 'JavaScript', 'Google OAuth'],
    github: 'https://github.com/Aryan054/Healthcare-Management',
    demo: 'https://healthcare-management-app-iota.vercel.app/',
    hasLiveDemo: true,
  },
  {
    id: 'multimodal-chatbot',
    path: '/multimodal-chatbot',
    title: 'Multimodal College Enquiry Chatbot',
    tagline: 'PyTorch Neural Network Chatbot with English/Hindi Voice & Text',
    badge: 'Final Year Project',
    featured: false,
    category: 'AI & NLP',
    image: '/college_chatbot.png',
    description:
      'Final year project built for ALARD University, Pune. Answers queries on programs, admissions, fees, scholarships, and placements using English text, English voice, and Hindi voice with speech recognition and translation.',
    problem:
      'Admissions offices face thousands of repetitive phone calls and emails during admission season, creating long wait times for students.',
    solution:
      'Trained a PyTorch feed-forward neural network on NLTK Bag-of-Words features to classify 53 intents, deployed in a 7-tier hybrid response pipeline with multi-lingual voice support.',
    overview:
      'Web-based multimodal conversational agent equipped with SpeechRecognition, Google Translate, gTTS, user authentication, and interactive session chat history.',
    bullets: [
      'Built a web chatbot for ALARD University, Pune, answering enquiries on programs, admissions, fees, scholarships and placements through English text, English voice and Hindi voice (SpeechRecognition, Google Translate, gTTS).',
      'Trained a PyTorch feed-forward network on NLTK Bag-of-Words features to classify 53 intents, combined with phrase and keyword matching in a seven-tier hybrid response pipeline; added login, session chat history and a personalized dashboard.',
    ],
    features: [
      'PyTorch feed-forward neural network for 53 intents',
      '7-tier hybrid fallback & keyword response pipeline',
      'Multimodal input: English text, English voice & Hindi voice',
      'SpeechRecognition, Google Translate & gTTS integration',
      'Session chat history & analytics dashboard',
    ],
    architecture: 'Python + Django + PyTorch + NLTK + SpeechRecognition + gTTS',
    impact: 'Automated 53 university enquiry categories | Multi-lingual voice & text handling',
    stack: ['Python', 'Django', 'PyTorch', 'NLTK', 'SpeechRecognition', 'gTTS'],
    techStack: ['Python', 'PyTorch', 'NLTK', 'Django', 'SpeechRecognition'],
    github: 'https://github.com/Aryan054/college-chatbot',
    demo: '#',
    hasLiveDemo: false,
  },
  {
    id: 'music-recommendation',
    path: '/music-recommendation',
    title: 'Music Recommendation System',
    tagline: 'Collaborative Filtering Engine with Data Preprocessing & Tuning',
    badge: 'Third-Year ML Project',
    featured: false,
    category: 'Machine Learning',
    image: '/music_recommendation.png',
    description:
      'Machine learning recommendation system delivering personalized song recommendations based on user listening history and collaborative filtering techniques.',
    problem:
      'Users struggle to discover new songs matching their preferences without effective personal recommendation algorithms.',
    solution:
      'Engineered a complete machine learning pipeline covering data ingestion, preprocessing, feature engineering, model training, evaluation, and hyperparameter tuning.',
    overview:
      'End-to-end machine learning project demonstrating data science workflows with Pandas, NumPy, and Scikit-learn.',
    bullets: [
      'Built a recommender covering preprocessing, feature engineering, model training, evaluation and hyperparameter tuning.',
      'Implemented collaborative filtering algorithms to score user-song affinity and generate personalized suggestions.',
      'Conducted iterative hyperparameter tuning to optimize recommendation accuracy and reduce recommendation latency.',
    ],
    features: [
      'Collaborative filtering algorithm',
      'End-to-end data preprocessing & feature extraction',
      'Hyperparameter tuning & validation',
      'Personalized top-N recommendation generation',
    ],
    architecture: 'Python + Pandas + NumPy + Scikit-learn',
    impact: 'Accurate personalized recommendations | Full ML lifecycle engineering',
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    techStack: ['Python', 'Pandas', 'Scikit-learn', 'Collaborative Filtering'],
    github: 'https://github.com/Aryan054/Music-Recommendation-system',
    demo: '#',
    hasLiveDemo: false,
  },
]

export const education = {
  degree: 'Bachelor of Engineering in Artificial Intelligence & Machine Learning',
  degreeShort: 'B.E. in AI & ML',
  school: 'Savitribai Phule Pune University, Pune',
  college: 'Alard College of Engineering & Management, Pune',
  dates: 'December 2021 – June 2025',
  cgpa: '7.24 / 10',
  status: 'Completed',
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Artificial Intelligence',
    'Machine Learning & Deep Learning',
    'Natural Language Processing',
    'Web Technologies',
    'Operating Systems',
  ],
}

export const certifications = [
  {
    title: 'Full Stack Development',
    issuer: 'QSpiders',
    category: 'Full Stack Web',
    badge: 'Verified',
  },
  {
    title: 'Python Programming',
    issuer: 'GUVI Geek Networks',
    category: 'Programming',
    badge: 'Certified',
  },
  {
    title: 'SQL (Relational Databases)',
    issuer: 'Infosys Springboard',
    category: 'Databases',
    badge: 'Certified',
  },
  {
    title: 'Machine Learning with Python',
    issuer: 'YHills',
    category: 'AI / ML',
    badge: 'Certified',
  },
  {
    title: 'Python Coder',
    issuer: 'Kaggle',
    category: 'Data Science',
    badge: 'Ranked',
  },
]

export const languages = [
  { language: 'English', proficiency: 'Professional Working Proficiency' },
  { language: 'Hindi', proficiency: 'Fluent / Full Professional' },
  { language: 'Marathi', proficiency: 'Native / Bilingual' },
]

export const commands = [
  { id: 'resume', label: 'Preview Resume (PDF)', hint: 'Open resume viewer' },
  { id: 'download-resume', label: 'Download Resume (PDF)', hint: 'aryan-rathod-resume.pdf' },
  { id: 'about', label: 'Go to About Me', hint: 'GET /about' },
  { id: 'skills', label: 'Go to Skills & Tech Stack', hint: 'GET /skills' },
  { id: 'experience', label: 'Go to Experience (Bynry & Monytics)', hint: 'GET /experience' },
  { id: 'projects', label: 'Go to Featured Projects', hint: 'GET /projects' },
  { id: 'education', label: 'Go to Education & Certifications', hint: 'GET /education' },
  { id: 'contact', label: 'Contact & Hire Aryan', hint: 'POST /contact' },
  { id: 'email', label: 'Copy Email Address', hint: 'aryanrathod791@gmail.com' },
  { id: 'mail', label: 'Send an Email', hint: 'mailto:aryanrathod791@gmail.com' },
  { id: 'call', label: 'Call Aryan', hint: '+91 8767514749' },
  { id: 'linkedin', label: 'Open LinkedIn Profile', hint: 'new tab' },
  { id: 'github', label: 'Open GitHub Profile', hint: 'new tab' },
]

export const aboutStory = {
  intro: 'Python Full Stack Developer specializing in Django, FastAPI, PostgreSQL, and AI Systems.',
  summary:
    'With 6+ months of live software internship experience at Bynry Inc. (B2B SaaS utility platform) and Monytics (fintech invoice discounting), I build robust backend APIs, optimized database architectures, and clean React frontends. I have delivered production meter selection workflows, built 10+ REST APIs, and resolved 50+ production bugs.',
  values: [
    'Building reliable, scalable backend APIs with clean documentation',
    'Root-cause debugging and shipping clean production bug fixes',
    'Bridging full-stack development with vector search and AI pipelines',
    'Owning features end-to-end: DB modeling, API logic, and UI integration',
  ],
}
