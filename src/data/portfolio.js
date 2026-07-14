export const profile = {
  name: 'Aryan S. Rathod',
  role: 'Backend Engineer & AI Systems Builder',
  subtitle: 'I build scalable backend architectures and intelligent autonomous systems powered by Agentic AI.',
  location: 'Pune, India',
  email: 'aryanrathod791@gmail.com',
  phone: '+91 8767514749',
  phoneHref: '+918767514749',
  github: 'https://github.com/aryan054',
  githubLabel: 'github.com/aryan054',
  linkedin: 'https://www.linkedin.com/in/aryan-rathod054/',
  linkedinLabel: 'in/aryan-rathod054',
  portfolio: 'https://aryan054.vercel.app/',
  portfolioLabel: 'aryan054.vercel.app',
  x: 'https://twitter.com',
  calendly: 'https://calendly.com',
  photoUrl: '/My_picture.png',
  resumeUrl: '/Aryan_Rathod.pdf',
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
  "Software Developer with hands-on experience in developing scalable full-stack web applications and intelligent RESTful APIs using Python, Django, DRF, and React.js. Proficient in integrating Agentic AI capabilities and LLMs to create autonomous workflows. Holds a B.E. in Artificial Intelligence & Machine Learning (SPPU, 2025). Built real-world projects combining frontend UI/UX, robust backend architectures, and AI pipelines. Strong problem-solving skills and a passion for building efficient, high-quality software solutions."

export const strengths = [
  'Ships full-stack web applications with clean, documented, and production-ready code',
  'Bridges web development with Agentic AI — building intelligent, autonomous systems',
  'Owns features end-to-end: UI design, backend business logic, and database modeling',
  'Adapts fast to new codebases, scalable architectures, and agile sprint-driven teams',
]

export const skillGroups = [
  {
    title: 'Programming & Frameworks',
    skills: ['Python', 'Django', 'Django REST Framework', 'Flask', 'ReactJS', 'JavaScript'],
  },
  {
    title: 'Agentic AI & ML',
    skills: [
      'Agentic AI',
      'LLM Integration',
      'NLP',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Autonomous Workflows',
    ],
  },
  {
    title: 'Web & Databases',
    skills: ['HTML', 'CSS', 'Bootstrap', 'PostgreSQL', 'MySQL', 'SQLite'],
  },
  {
    title: 'Tools & Practices',
    skills: ['Git', 'Postman', 'Power BI', 'CI/CD', 'Vercel', 'Microservices'],
  },
]

export const experience = [
  {
    verb: 'POST',
    dates: 'Apr 2026 – Jun 2026',
    title: 'Backend Engineer Intern',
    org: 'Bynry Inc. · Pune',
    logo: 'https://logo.clearbit.com/bynry.com',
    description: 'Production Django development for scalable enterprise applications',
    bullets: [
      'Developed scalable backend services and RESTful APIs using Python, Django, and DRF for production-grade enterprise applications',
      'Designed backend business logic, database models, and API endpoints supporting utility service workflows',
      'Optimized PostgreSQL queries, ensuring efficient data processing and improving application performance',
      'Debugged production issues and collaborated with cross-functional Agile teams using Git',
    ],
  },
  {
    verb: 'POST',
    dates: 'Oct 2025 – Apr 2026',
    title: 'Python Developer Intern',
    org: 'Monytics',
    logo: 'https://logo.clearbit.com/monytics.com',
    description: 'Full-stack development bridging Python backend and React frontend',
    bullets: [
      'Developed Python-based backend modules and automation workflows for production applications',
      'Collaborated with the frontend team to develop responsive user interfaces using React.js, improving UI/UX',
      'Wrote clean, reusable Python code while adhering to coding standards and sprint deadlines',
      'Assisted in database design, query optimization, and data validation to enhance application reliability',
    ],
  },
  {
    verb: 'PUT',
    dates: 'Feb 2024 – Mar 2024',
    title: 'Machine Learning with Python',
    org: 'YHills',
    logo: 'https://logo.clearbit.com/yhills.in',
    description: 'Built a Music Recommendation System end-to-end using Python and collaborative filtering.',
    bullets: [
      'Engineered full ML pipeline: data ingestion → preprocessing → feature extraction → model deployment',
      'Improved recommendation accuracy through iterative hyperparameter tuning',
      'Delivered a working ML product independently within a 2-month timeline',
    ],
  },
]

export const projects = [
  {
    path: '/doctor-appointment-system',
    title: 'Doctor Appointment Management System',
    image: '/doctor_appointment.png',
    description: 'Full-stack healthcare platform for booking, managing, and canceling appointments',
    problem: 'Manual appointment scheduling is inefficient, error-prone, and creates poor patient experience',
    solution: 'Built a full-stack system with secure web interfaces, real-time availability, and automated workflows',
    overview: 'Production-grade full-stack system handling role-based access, real-time scheduling, and seamless booking experience across multiple devices.',
    bullets: [
      'Developed a full-stack healthcare application enabling patients to manage appointments via a secure web interface',
      'Built backend in Python and Django; designed responsive frontend UI with HTML, CSS, and Bootstrap',
      'Ensured a seamless booking experience across multiple devices with user-friendly interfaces',
      'Engineered DRF REST API with authentication and PostgreSQL schema for patient history',
    ],
    features: [
      'Full-Stack Architecture',
      'Role-based access control',
      'Responsive UI (HTML/CSS/Bootstrap)',
      'Real-time availability',
      'PostgreSQL Database',
    ],
    architecture: 'Django + HTML/CSS/Bootstrap + PostgreSQL',
    impact: 'Seamless booking across devices | Production-ready full-stack app',
    stack: ['Python', 'Django', 'HTML', 'CSS', 'Bootstrap'],
    github: 'https://github.com/Aryan054/Healthcare-Management',
    demo: 'https://healthcare-management-app-iota.vercel.app/',
  },
  {
    path: '/college-admission-chatbot',
    title: 'College Admission Enquiry Agentic Chatbot',
    image: '/college_chatbot.png',
    description: 'Agentic AI-powered chatbot automating college admission enquiries and query resolution',
    problem: 'Manual admission enquiries overload staff and responses to complex user flows are inconsistent',
    solution: 'Developed an Agentic NLP pipeline that autonomously classifies intent and generates responses',
    overview: 'Agentic AI system reducing manual workload by automating admission enquiries using NLP and intent classification algorithms.',
    bullets: [
      'Built an AI-powered chatbot to autonomously handle college admission enquiries and provide instant responses',
      'Applied NLP techniques and machine learning algorithms for intent classification and response generation',
      'Integrated Agentic workflow concepts for context-aware conversational flows and autonomous query resolution',
      'Significantly reduced manual support efforts by automating common admission-related queries',
    ],
    features: [
      'Agentic AI workflows',
      'Intent classification (NLP)',
      'Autonomous query resolution',
      'Context-aware responses',
      'REST API integration',
    ],
    architecture: 'Python + NLP + Machine Learning + Django REST',
    impact: 'Automated common queries | Drastically reduced manual support efforts',
    stack: ['Python', 'NLP', 'Agentic AI', 'Machine Learning'],
    github: 'https://github.com/Aryan054/college-chatbot',
    demo: '#',
  },
  {
    path: '/personal-portfolio-website',
    title: 'Personal Portfolio Website',
    image: '/portfolio_website.png',
    description: 'Responsive React.js portfolio showcasing technical skills and professional experience',
    problem: 'Need a modern, interactive way to present full-stack capabilities to potential employers',
    solution: 'Built a modular, responsive frontend application using React components and modern styling',
    overview: 'A full-stack developer portfolio built with React, emphasizing component reusability and interactive UI/UX.',
    bullets: [
      'Developed a responsive personal portfolio website showcasing projects, skills, and certifications',
      'Built reusable React components to create a modern, interactive, and mobile-friendly user interface',
      'Integrated seamless access to GitHub, LinkedIn, and project repositories',
      'Showcased frontend development skills emphasizing clean UI/UX and state management',
    ],
    features: [
      'React Components',
      'Interactive UI/UX',
      'Mobile-responsive design',
      'Vercel Deployment',
    ],
    architecture: 'React.js + JavaScript + CSS',
    impact: 'High-performance interactive portfolio | Demonstrates frontend expertise',
    stack: ['ReactJS', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/aryan054',
    demo: 'https://aryan054.vercel.app',
  },
  {
    path: '/music-recommendation-engine',
    title: 'Music Recommendation System',
    image: '/music_recommendation.png',
    description: 'Machine learning engine delivering personalized music suggestions using collaborative filtering',
    problem: 'Generic recommendations don\'t reflect individual taste limiting the user experience',
    solution: 'Designed a machine learning pipeline using collaborative filtering for personalized recommendations',
    overview: 'End-to-end recommendation system demonstrating practical machine learning implementation and data preprocessing.',
    bullets: [
      'Designed and implemented a recommendation engine using collaborative filtering techniques',
      'Developed the complete ML pipeline: data preprocessing, feature engineering, training, and evaluation',
      'Delivered an end-to-end recommendation system demonstrating practical AI/ML implementation',
      'Provided highly personalized music suggestions to improve user engagement',
    ],
    features: [
      'Collaborative filtering',
      'Data preprocessing',
      'Feature engineering',
      'Model evaluation',
    ],
    architecture: 'Python + Machine Learning + Data Science tools',
    impact: 'End-to-end ML pipeline | Personalized recommendations',
    stack: ['Python', 'Machine Learning', 'Data Analysis'],
    github: 'https://github.com/Aryan054/Music-Recommendation-system',
    demo: '#',
  },
]

export const education = {
  degree: 'Bachelor of Engineering | Artificial Intelligence & Machine Learning',
  school: 'Alard College of Engineering & Management, Pune',
  dates: 'Graduating 2025 | Percent: 64.90',
}

export const certifications = [
  'Johnson & Johnson – Robotics and Controls Job Simulation',
  'Machine Learning with Python',
  'Python Programming',
  'Data Analytics',
  'Full Stack Development',
]

export const commands = [
  { id: 'about', label: 'Go to About', hint: 'GET /about' },
  { id: 'skills', label: 'Go to Skills', hint: 'GET /skills' },
  { id: 'experience', label: 'Go to Experience', hint: 'GET /experience' },
  { id: 'projects', label: 'Go to Projects', hint: 'GET /projects' },
  { id: 'education', label: 'Go to Education', hint: 'GET /education' },
  { id: 'contact', label: 'Go to Contact', hint: 'POST /contact' },
  { id: 'email', label: 'Copy email address', hint: 'aryanrathod791@gmail.com' },
  { id: 'mail', label: 'Email Aryan', hint: 'opens mail client' },
  { id: 'linkedin', label: 'Open LinkedIn', hint: 'new tab' },
  { id: 'github', label: 'Open GitHub', hint: 'new tab' },
  { id: 'resume', label: 'Download Resume', hint: '.pdf' },
]

export const socialProof = {
  github: {
    contributions: '500+',
    repos: '15+',
    stars: '50+',
    followers: '20+',
  },
  projects: {
    completed: 4,
    production: 3,
    impact: 'Full-Stack & AI',
  },
  experience: {
    internships: 2,
    months: 9,
    companies: '["Bynry", "Monytics"]',
  },
}

export const aboutStory = {
  intro: 'I\'m a Full-Stack Software Engineer and AI enthusiast from Pune, specializing in Agentic AI and scalable web applications.',
  journey: [
    {
      year: '2024',
      title: 'ML & Full-Stack Fundamentals',
      description: 'Dove deep into machine learning, built my first full-stack projects, and completed an ML training program.',
    },
    {
      year: '2025-2026',
      title: 'Production Full-Stack Experience',
      description: 'Shipped REST APIs, full-stack applications with React, and backend workflows at Monytics and Bynry.',
    },
    {
      year: 'Present',
      title: 'Agentic AI & Autonomous Systems',
      description: 'Specializing in integrating LLMs and Agentic AI into full-stack applications to create intelligent, autonomous user experiences.',
    },
  ],
  motivation: 'I love building software because it empowers businesses to solve complex problems. I am particularly excited about the intersection of Full-Stack web development and Agentic AI—where robust applications meet autonomous, intelligent agents to create entirely new paradigms of user interaction.',
  values: [
    'Shipping production full-stack code',
    'Building autonomous AI workflows',
    'Clean architecture and UI/UX',
    'Continuous learning',
  ],
}

export const techStackByCategory = [
  {
    category: 'Frontend & Web',
    icon: '🎨',
    level: 'Advanced',
    skills: [
      { name: 'ReactJS', proficiency: 85, years: 1 },
      { name: 'JavaScript', proficiency: 85, years: 1.5 },
      { name: 'HTML/CSS/Bootstrap', proficiency: 90, years: 2 },
    ],
  },
  {
    category: 'Backend & APIs',
    icon: '⚙️',
    level: 'Expert',
    skills: [
      { name: 'Python', proficiency: 95, years: 2 },
      { name: 'Django / DRF', proficiency: 90, years: 1.5 },
      { name: 'RESTful APIs', proficiency: 88, years: 1.5 },
      { name: 'PostgreSQL/MySQL', proficiency: 85, years: 1 },
    ],
  },
  {
    category: 'Agentic AI & Machine Learning',
    icon: '🧠',
    level: 'Intermediate',
    skills: [
      { name: 'Agentic AI Systems', proficiency: 80, years: 1 },
      { name: 'LLM Integration', proficiency: 85, years: 1 },
      { name: 'NLP', proficiency: 78, years: 1 },
      { name: 'Scikit-learn', proficiency: 80, years: 1 },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: '🚀',
    level: 'Intermediate',
    skills: [
      { name: 'Git', proficiency: 90, years: 2 },
      { name: 'CI/CD', proficiency: 75, years: 1 },
      { name: 'Vercel', proficiency: 85, years: 1 },
      { name: 'Postman', proficiency: 88, years: 1.5 },
    ],
  },
]
