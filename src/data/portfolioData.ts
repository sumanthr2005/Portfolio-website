export interface Project {
  id: string;
  title: string;
  badge: string;
  category: 'AI / ML' | 'Full Stack' | 'Systems / Backend' | 'Research';
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  caseStudy: {
    systemArchitecture: string[];
    coreChallenges: string[];
    technicalDecisions: string[];
    keyTakeaway: string;
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; highlight?: boolean }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'Internship' | 'Fellowship' | 'Research';
  bullets: string[];
  technologies: string[];
}

export interface PublicationItem {
  title: string;
  conference: string;
  year: string;
  status: string;
  dataset: string;
  keyMetrics: { label: string; value: string }[];
  abstract: string;
  contributions: string[];
  paperLink?: string;
}

export interface AchievementItem {
  title: string;
  organization: string;
  date: string;
  description: string;
  category: 'Hackathon' | 'Fellowship' | 'Research';
}

export const PERSONAL_INFO = {
  name: "Sumanth R",
  eyebrow: "AI ENGINEER IN THE MAKING / SOFTWARE DEVELOPER",
  headline: "Building intelligent systems. Engineering useful products.",
  supportingText: "I'm a Computer Science and Engineering student specializing in AI & ML at SRM Institute of Science and Technology. I explore the intersection of multimodal intelligence, high-throughput backend systems, and thoughtful product engineering.",
  availability: "OPEN TO INTERNSHIPS & SDE ROLES",
  status: "Available 2026/2027",
  location: "Chennai, Tamil Nadu, India",
  email: "rsumanth2005@gmail.com",
  phone: "+91-9344249005",
  github: "https://github.com/sumanthr2005",
  linkedin: "https://www.linkedin.com/in/sumanthrajesh/",
  resumePdf: "/Sumanth_R_Resume.pdf",
  educationSummary: "B.Tech. in Computer Science and Engineering (AIML), SRM IST (2023–2027)",
  cgpa: "8.98 / 10",
  metrics: [
    { value: "8.98", label: "CGPA at SRM IST (CSE AI/ML)" },
    { value: "16K+", label: "MRI Scans Analyzed in IEEE Research" },
    { value: "97%", label: "mAP@50 in Marine Sentinel Vision AI" },
    { value: "5K+", label: "Req/Day APIs at Works Applications" },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "multishield-ai",
    title: "MultiShield-AI",
    badge: "FLAGSHIP MULTIMODAL SYSTEM",
    category: "AI / ML",
    tagline: "Multimodal Multi-Agent Hate Speech Moderation Platform with Explainable AI",
    description: "A production-oriented multimodal moderation framework that ingests text, images/memes, and audio streams to detect harmful content. Employs LangGraph multi-agent orchestration paired with SHAP and Grad-CAM for transparent, interpretable decisions.",
    problem: "Conventional content moderation systems are either single-modality (text only) or black-box classifiers that fail on subtle memes, multi-turn harassment, or voice toxicity, providing zero reasoning to moderators.",
    solution: "Architected a multi-agent routing topology where dedicated specialized agents (Text, Image, Audio) process inputs concurrently, feed a unified Fusion Agent, and pass predictions through an Explainability Agent for token attribution and heatmap generation.",
    features: [
      "Router Agent distributing workloads across specialized modalities",
      "Fusion Agent synthesizing multi-source representations into unified risk scores",
      "Explainability Agent outputting token-level attributions and visual heatmaps",
      "Moderator dashboard with human-in-the-loop review queues and audit logs",
      "Containerized microservices ready for cloud deployment with Docker"
    ],
    techStack: ["Python", "FastAPI", "React", "TypeScript", "LangGraph", "PyTorch", "Hugging Face", "SHAP", "OpenCV", "PostgreSQL", "Docker"],
    metrics: [
      { label: "Modality Agents", value: "4 Specialized" },
      { label: "Explainability", value: "SHAP & Grad-CAM" },
      { label: "Decision Latency", value: "<180ms Target" },
      { label: "Deployment", value: "Docker / Compose" }
    ],
    githubUrl: "https://github.com/sumanthr2005/MultiShield-AI",
    featured: true,
    caseStudy: {
      systemArchitecture: [
        "1. API Gateway receives incoming message payloads (text + media URLs)",
        "2. Router Agent classifies content types and dispatches to Text, Vision, or Audio workers",
        "3. Text Agent evaluates toxicity via fine-tuned Transformer models (BERT/RoBERTa)",
        "4. Image Agent inspects memes and hate symbols using CLIP and visual embeddings",
        "5. Fusion Agent combines confidence vectors via calibrated multi-agent voting",
        "6. Explainability Agent generates token attribution scores and visual attention heatmaps",
        "7. Final structured report sent to Moderator Dashboard with suggested actions (Allow, Flag, Review, Remove)"
      ],
      coreChallenges: [
        "Resolving context mismatch between innocent text and hateful meme imagery",
        "Maintaining low sub-200ms inference latency during multi-agent orchestration",
        "Producing human-interpretable explanations rather than opaque confidence numbers"
      ],
      technicalDecisions: [
        "Adopted LangGraph for deterministic state transitions and cycle-safe agent routing",
        "Utilized FastAPI with asynchronous handlers to prevent blocking on multimodal inference",
        "Implemented token-level attribution masks directly in the React reviewer UI"
      ],
      keyTakeaway: "Explainability transforms AI moderation from an untrusted black-box into an effective collaborator for human moderation teams."
    }
  },
  {
    id: "interviewverse-ai",
    title: "InterviewVerse AI",
    badge: "FULL-STACK AI PLATFORM",
    category: "Full Stack",
    tagline: "Adaptive AI Technical & Behavioral Interview Simulation System",
    description: "An end-to-end interview simulation platform featuring real-time code evaluation, adaptive behavioral follow-ups, and provider-agnostic LLM integration with OpenAI and Gemini.",
    problem: "Engineering students and junior developers struggle to practice realistic, high-pressure technical interviews with actionable, rubric-based feedback across both coding and system design.",
    solution: "Engineered a Next.js App Router client connected to a high-performance FastAPI backend with PostgreSQL, providing simulated interviewers, deterministic code validation, and multi-dimensional scoring.",
    features: [
      "Provider-agnostic LLM abstraction layer supporting OpenAI and Google Gemini",
      "Real-time code editor with live syntax checking and simulated runtime tests",
      "Dynamic follow-up questioning based on user's architectural trade-offs",
      "Comprehensive performance breakdown across algorithmic correctness, time complexity, and communication",
      "JWT-based secure authentication and state management via Zustand & TanStack Query"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Pydantic", "OpenAI API", "Gemini API"],
    metrics: [
      { label: "Architecture", value: "Decoupled Next.js + FastAPI" },
      { label: "AI Routing", value: "Multi-Provider Abstraction" },
      { label: "Auth & DB", value: "JWT + PostgreSQL" },
      { label: "State Layer", value: "Zustand & TanStack" }
    ],
    githubUrl: "https://github.com/sumanthr2005",
    featured: true,
    caseStudy: {
      systemArchitecture: [
        "1. Next.js App Router interface with responsive coding and interview stages",
        "2. Client state managed via Zustand; server caching powered by TanStack Query",
        "3. FastAPI backend handles business logic, session state, and LLM orchestration",
        "4. Provider abstraction layer switches between OpenAI and Gemini seamlessly",
        "5. PostgreSQL stores interview transcripts, rubric evaluations, and user progression"
      ],
      coreChallenges: [
        "Preventing hallucinated interview feedback by constraining LLM evaluation rubrics",
        "Managing low-latency conversational audio/text simulation during coding rounds",
        "Designing an extensible provider abstraction so models can be swapped effortlessly"
      ],
      technicalDecisions: [
        "Structured Pydantic schemas enforce deterministic evaluation JSON from LLMs",
        "Alembic database migrations ensure reproducible schema evolution in PostgreSQL",
        "Decoupled frontend-backend separation facilitates independent scaling"
      ],
      keyTakeaway: "Clear rubric constraints and schema enforcement make generative AI reliable for rigorous technical assessments."
    }
  },
  {
    id: "marine-sentinel",
    title: "Marine Sentinel",
    badge: "COMPUTER VISION SYSTEM",
    category: "AI / ML",
    tagline: "Real-Time UAV Oil Spill Analytics & Localization System",
    description: "An aerial computer vision pipeline using YOLOv6 for real-time oil spill detection, surface area estimation, and severity heatmapping across 5,300+ UAV video frames.",
    problem: "Marine environmental disasters require immediate aerial surveillance to contain chemical dispersion, but manual video inspection is slow, subjective, and prone to severe operator fatigue.",
    solution: "Trained and benchmarked a YOLOv6 object detection model on aerial maritime datasets, deploying an asynchronous FastAPI and Streamlit pipeline for automated spill localization and severity quantification.",
    features: [
      "YOLOv6 backbone fine-tuned for high-altitude UAV aerial imagery",
      "Achieved 97% mAP@50 and 86% mAP@50-95, outperforming 4+ comparative baseline models",
      "Streamlit dashboard displaying live bounding boxes, confidence intervals, and area estimates",
      "FastAPI endpoint for batch video frame processing and alert dispatching"
    ],
    techStack: ["Python", "YOLOv6", "PyTorch", "FastAPI", "Streamlit", "OpenCV", "NumPy"],
    metrics: [
      { label: "mAP@50", value: "97.0%" },
      { label: "mAP@50-95", value: "86.0%" },
      { label: "Dataset Scale", value: "5,300+ UAV Frames" },
      { label: "Baselines Beaten", value: "4+ Models" }
    ],
    githubUrl: "https://github.com/sumanthr2005",
    featured: true,
    caseStudy: {
      systemArchitecture: [
        "1. Drone camera stream ingested and divided into high-resolution keyframes",
        "2. Image preprocessing with OpenCV (contrast equalization, glint attenuation)",
        "3. YOLOv6 deep learning inference identifies oil slick contours and boundary coordinates",
        "4. Severity calculation engine computes surface area coverage and dispersion rate",
        "5. Streamlit telemetry UI renders real-time tracking metrics and geospatial heatmaps"
      ],
      coreChallenges: [
        "Overcoming ocean sun glare and wave reflections that trigger false positives",
        "Balancing high detection accuracy with lightweight inference for field deployment",
        "Calibrating spill severity estimation from perspective-distorted aerial angles"
      ],
      technicalDecisions: [
        "Selected YOLOv6 for superior speed-accuracy frontier on embedded edge hardware",
        "Applied extensive data augmentation including glint simulation and wave textures",
        "Benchmarked against Faster R-CNN, YOLOv5, and SSD baselines to validate performance"
      ],
      keyTakeaway: "Targeted data augmentation and modern one-stage detectors enable industrial-grade environmental monitoring."
    }
  },
  {
    id: "enterprise-rag",
    title: "Enterprise RAG & Agentic Assistant",
    badge: "AGENTIC RETRIEVAL SYSTEM",
    category: "AI / ML",
    tagline: "Multi-Agent Knowledge Assistant with Context Optimization & Evaluation",
    description: "An enterprise knowledge retrieval architecture combining recursive document chunking, FAISS vector indexing, and LangGraph multi-agent routing for grounded, citation-backed intelligence.",
    problem: "Standard RAG implementations suffer from retrieval hallucination, lost-in-the-middle context degradation, and inability to handle multi-step investigative questions.",
    solution: "Designed a multi-agent workflow featuring planner, retrieval, and synthesis agents with FAISS semantic indexing, metadata filtering, and automated answer relevance evaluation.",
    features: [
      "Recursive chunking and dense vector embeddings with Hugging Face transformers",
      "FAISS vector search with similarity re-ranking and metadata filtering",
      "Multi-agent task decomposition (planning, query routing, tool calling, synthesis)",
      "Evaluation pipeline measuring answer relevance, context recall, and hallucination rate"
    ],
    techStack: ["Python", "FastAPI", "LangChain", "LangGraph", "FAISS", "Hugging Face", "PostgreSQL", "Streamlit"],
    metrics: [
      { label: "Vector Search", value: "FAISS Dense Index" },
      { label: "Orchestration", value: "LangGraph Multi-Agent" },
      { label: "Evaluation", value: "Relevance & Faithfulness" },
      { label: "Interface", value: "FastAPI + Streamlit" }
    ],
    githubUrl: "https://github.com/sumanthr2005",
    featured: false,
    caseStudy: {
      systemArchitecture: [
        "1. Document ingestion engine parses PDFs, markdown, and structured tabular data",
        "2. Chunking with recursive text splitters and metadata tagging",
        "3. High-dimensional vector indexing stored in memory via FAISS",
        "4. Query Planner agent decomposes complex questions into targeted sub-searches",
        "5. Synthesis Agent crafts verified answers with explicit inline source citations"
      ],
      coreChallenges: [
        "Handling heterogeneous document formats without losing semantic hierarchy",
        "Minimizing vector retrieval latency on multi-page technical manuals"
      ],
      technicalDecisions: [
        "Implemented metadata pre-filtering to narrow vector candidate pools",
        "Integrated automated evaluation endpoints to monitor retrieval drift"
      ],
      keyTakeaway: "Multi-agent task decomposition substantially outperforms single-pass RAG on complex informational tasks."
    }
  },
  {
    id: "distributed-job-scheduler",
    title: "Distributed Job Scheduler",
    badge: "DISTRIBUTED BACKEND SYSTEM",
    category: "Systems / Backend",
    tagline: "High-Throughput Task Queue with Worker Coordination & Idempotency",
    description: "A fault-tolerant distributed job scheduling service engineered in Python and FastAPI, featuring persistent task queues, worker heartbeat coordination, retry policies, and Redis/PostgreSQL persistence.",
    problem: "Background asynchronous processing in distributed applications often fails silently, causes duplicate execution, or loses state when worker processes crash unexpectedly.",
    solution: "Engineered a persistent distributed job coordinator with Redis-backed queues, PostgreSQL job state ledger, worker health heartbeats, distributed locking, and AI-assisted failure triage.",
    features: [
      "REST API for dynamic job submission, status polling, and priority cancellation",
      "Worker pool coordination with automatic heartbeat monitoring and orphan recovery",
      "Idempotent task execution guarantees via distributed Redis locks and unique task tokens",
      "Configurable exponential backoff retries and dead-letter queue (DLQ) isolation",
      "AI-assisted log analyzer summarizing recurring error patterns and failure causes"
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "AWS", "Linux"],
    metrics: [
      { label: "Concurrency", value: "Non-blocking AsyncIO" },
      { label: "State Store", value: "PostgreSQL + Redis" },
      { label: "Fault Recovery", value: "Automated Heartbeats" },
      { label: "Reliability", value: "Strict Idempotency" }
    ],
    githubUrl: "https://github.com/sumanthr2005",
    featured: false,
    caseStudy: {
      systemArchitecture: [
        "1. FastAPI REST endpoints accept job payloads and validate schema with Pydantic",
        "2. Task metadata persisted in PostgreSQL; execution token enqueued to Redis",
        "3. Worker daemons lease tasks using distributed Redis locks to prevent duplicate execution",
        "4. Continuous heartbeats notify coordinator of worker health; stale tasks auto-reclaimed",
        "5. Dead-letter queue captures exhausted retries; AI layer summarizes root causes"
      ],
      coreChallenges: [
        "Preventing duplicate execution during worker crashes midway through task runs",
        "Ensuring zero data loss during Redis server restarts using persistent snapshots"
      ],
      technicalDecisions: [
        "Used PostgreSQL as the durable source of truth with Redis acting as fast transit queue",
        "Structured JSON logging for automated telemetry and diagnosis"
      ],
      keyTakeaway: "Idempotency and explicit state machines are essential for resilient backend architecture."
    }
  },
  {
    id: "sql-learning-platform",
    title: "AI-Powered SQL Learning Platform",
    badge: "INTERACTIVE EDUCATION ENGINE",
    category: "Full Stack",
    tagline: "Browser SQL Sandbox with Real-Time AST Validation & Contextual AI Hints",
    description: "A full-stack progressive SQL training platform where users solve database challenges, receive deterministic execution feedback, and access intelligent contextual hints without giving away answers.",
    problem: "Learners often hit dead ends when writing SQL queries because generic error messages fail to explain why a query produced incorrect rows, while generic AI chatbots give away the exact code solution.",
    solution: "Created a pedagogical SQL sandbox with dual evaluation: deterministic result-set matching against an isolated database engine, and a guided LLM tutor configured with strict hinting heuristics.",
    features: [
      "In-browser SQL editor with syntax highlighting, schema inspector, and execution sandbox",
      "Deterministic query evaluation comparing result tables, column types, and row orders",
      "AI Tutor persona providing conceptual hints, SQL dialect advice, and edge-case reminders",
      "User progress tracking, skill leveling, and competitive leaderboards"
    ],
    techStack: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "REST APIs", "LLMs"],
    metrics: [
      { label: "Validation", value: "Deterministic AST & Data" },
      { label: "Frontend", value: "React + TypeScript" },
      { label: "Database", value: "PostgreSQL & Mongo" },
      { label: "AI Layer", value: "Constrained LLM Hints" }
    ],
    githubUrl: "https://github.com/sumanthr2005",
    featured: false,
    caseStudy: {
      systemArchitecture: [
        "1. Interactive React frontend provides multi-tab query runner and table viewer",
        "2. Node.js backend runs user queries in isolated read-only transactions",
        "3. Result sets compared against ground truth with strict sorting and null validation",
        "4. LLM assistant prompted with problem context and user syntax errors to offer targeted hints",
        "5. MongoDB tracks granular attempt histories, execution speeds, and user progression"
      ],
      coreChallenges: [
        "Preventing destructive SQL injection commands (DROP, ALTER, UPDATE) in sandboxes",
        "Ensuring the AI tutor nudges students conceptually rather than providing copy-paste answers"
      ],
      technicalDecisions: [
        "Enforced read-only transaction isolation and AST keyword blacklisting",
        "Crafted prompt engineering guardrails to enforce Socratic teaching behavior"
      ],
      keyTakeaway: "Combining deterministic code validation with guarded LLM explanations creates an engaging learning experience."
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for systems, machine learning, and application engineering.",
    skills: [
      { name: "Python", highlight: true },
      { name: "Java", highlight: true },
      { name: "C++", highlight: false },
      { name: "C", highlight: false },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "SQL", highlight: true },
      { name: "Bash / Shell", highlight: false }
    ]
  },
  {
    title: "AI & Machine Learning",
    description: "Multimodal modeling, deep learning architectures, and agentic workflows.",
    skills: [
      { name: "PyTorch", highlight: true },
      { name: "TensorFlow", highlight: false },
      { name: "Transformers (Hugging Face)", highlight: true },
      { name: "LangChain & LangGraph", highlight: true },
      { name: "Computer Vision (YOLOv6, OpenCV)", highlight: true },
      { name: "Explainable AI (SHAP, Grad-CAM)", highlight: true },
      { name: "LoRA / PEFT Fine-Tuning", highlight: true },
      { name: "Scikit-Learn & NumPy", highlight: false }
    ]
  },
  {
    title: "Backend & Systems",
    description: "Designing robust, low-latency APIs and distributed services.",
    skills: [
      { name: "FastAPI", highlight: true },
      { name: "Spring Boot", highlight: true },
      { name: "Node.js & Express", highlight: false },
      { name: "REST API Design", highlight: true },
      { name: "Microservices Architecture", highlight: false },
      { name: "Authentication (JWT, OAuth)", highlight: true },
      { name: "AsyncIO & Concurrency", highlight: true },
      { name: "Pydantic & SQLAlchemy", highlight: false }
    ]
  },
  {
    title: "Databases & Storage",
    description: "Relational modeling, distributed caching, and vector indexing.",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "MySQL", highlight: true },
      { name: "MongoDB", highlight: false },
      { name: "Redis (Caching & Queues)", highlight: true },
      { name: "FAISS Vector Search", highlight: true },
      { name: "Data Modeling & Indexing", highlight: true },
      { name: "Query Optimization & CTEs", highlight: true }
    ]
  },
  {
    title: "Cloud & Developer Tools",
    description: "Containerization, cloud infrastructure, and modern engineering workflows.",
    skills: [
      { name: "Docker & Docker Compose", highlight: true },
      { name: "AWS (S3, EC2)", highlight: true },
      { name: "Git & GitHub", highlight: true },
      { name: "Linux Administration", highlight: true },
      { name: "Postman API Testing", highlight: false },
      { name: "CI / CD Pipelines", highlight: false },
      { name: "Streamlit UI", highlight: false }
    ]
  },
  {
    title: "Core Computer Science",
    description: "Theoretical depth guiding architectural choices and software reliability.",
    skills: [
      { name: "Data Structures & Algorithms", highlight: true },
      { name: "Object-Oriented Design (OOP)", highlight: true },
      { name: "Database Management Systems (DBMS)", highlight: true },
      { name: "Operating Systems & Concurrency", highlight: false },
      { name: "Computer Networks & Protocols", highlight: false },
      { name: "System Design Principles", highlight: true }
    ]
  }
];

export const RESEARCH_PUBLICATION: PublicationItem = {
  title: "Deep Learning Based Brain Tumor Classification using Orange Data Analytics",
  conference: "IEEE International Conference (SCEECS 2026)",
  year: "2026",
  status: "Published / Presented",
  dataset: "16,000+ MRI scans aggregated from Kaggle, BRISC, and FigShare",
  keyMetrics: [
    { label: "Classification Accuracy", value: "96%+" },
    { label: "ROC-AUC", value: "0.997" },
    { label: "PCA Dimensionality Reduction", value: "75%" },
    { label: "Variance Retained", value: "95%" },
    { label: "Over Baseline Methods", value: "+7%" },
    { label: "MCC Improvement", value: "+8%" }
  ],
  abstract: "Engineered an end-to-end deep learning classification pipeline operating on a multimodal dataset of 16,000+ MRI brain scans. Applied Principal Component Analysis (PCA) to condense feature dimensionality by 75% while preserving 95% total variance, accelerating model convergence. Utilizing stratified 10-fold cross-validation and targeted data augmentation, the neural network attained 96%+ classification accuracy and an AUC of 0.997, demonstrating strong diagnostic discrimination across multiple tumor pathologies.",
  contributions: [
    "Aggregated and curated a 16,000+ MRI image dataset across Kaggle, BRISC, and FigShare repositories",
    "Constructed an automated preprocessing, noise attenuation, and PCA feature reduction pipeline",
    "Trained multi-layer neural networks evaluated rigorously via stratified 10-fold cross-validation",
    "Demonstrated +7% accuracy enhancement and +8% Matthews Correlation Coefficient (MCC) gain over baselines"
  ]
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Works Applications India Pvt. Ltd.",
    role: "Software Engineering Intern",
    period: "Dec 2025 – Jan 2026",
    location: "Chennai, Tamil Nadu (On-site)",
    type: "Internship",
    bullets: [
      "Built and deployed full-stack business workflows using Java, Spring Boot, MySQL, and React, authoring 5+ REST APIs handling 5,000+ simulated requests/day.",
      "Optimized relational database queries, execution plans, and table indexing, reducing backend response times by 25% during performance load tests.",
      "Integrated Explainable AI insight widgets into the React interface, enhancing decision-making transparency and model interpretability by 20% for business users."
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "React", "REST APIs", "Explainable AI"]
  },
  {
    company: "Hyphiin",
    role: "Software Development Engineering Intern",
    period: "Apr 2026 – Jun 2026",
    location: "Remote",
    type: "Internship",
    bullets: [
      "Engineered 5+ production-ready REST APIs integrating token authentication, input validation, core business logic, and transactional database persistence.",
      "Contributed to 3+ full-stack functional modules spanning backend services, frontend user components, and asynchronous data workflows.",
      "Systematically investigated and resolved 15+ complex integration bugs and edge-case exceptions, enhancing overall application stability and delivery velocity."
    ],
    technologies: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "REST APIs"]
  },
  {
    company: "All India Council for Technical Education (AICTE)",
    role: "Google AI/ML Virtual Intern",
    period: "Jul 2024 – Sep 2024",
    location: "Remote",
    type: "Internship",
    bullets: [
      "Trained and benchmarked 8+ machine learning models across supervised and unsupervised tasks using 5+ real-world datasets, reaching up to 92% classification accuracy.",
      "Completed 10+ rigorous hands-on technical labs focusing on exploratory data analysis (EDA), feature engineering, and hyperparameter tuning, elevating baseline performance by 25%.",
      "Analyzed practical enterprise AI deployments and implemented 3 bias mitigation techniques to uphold model fairness and responsible AI standards."
    ],
    technologies: ["Python", "Scikit-Learn", "TensorFlow", "Pandas", "EDA", "Model Evaluation"]
  },
  {
    company: "Headstarter AI",
    role: "Software Engineering Fellow",
    period: "2024 – 2025",
    location: "Remote",
    type: "Fellowship",
    bullets: [
      "Selected as an engineering fellow among competitive global applicants to collaborate on high-velocity software engineering and AI projects.",
      "Practiced agile sprints, peer code reviews, full-stack prototyping, and engineering mentorship with industry practitioners."
    ],
    technologies: ["Full-Stack Engineering", "AI Integration", "Agile", "System Prototyping"]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "3rd Place Winner — CodeMavens 2025 Hackathon",
    organization: "ACM-W SRM Student Chapter",
    date: "2025",
    description: "Competed against top engineering teams to design, architect, and ship a functional technology prototype under intense time constraints, judged on technical complexity, UX, and practical viability.",
    category: "Hackathon"
  },
  {
    title: "IEEE Research Publication",
    organization: "IEEE SCEECS 2026",
    date: "2026",
    description: "Authored and presented original deep learning research on brain tumor classification utilizing PCA feature compression and cross-validated neural networks on 16,000+ MRI scans.",
    category: "Research"
  },
  {
    title: "Software Engineering Fellow",
    organization: "Headstarter AI",
    date: "2024–2025",
    description: "Selected for intensive fellowship focused on shipping real-world software applications and collaborating with engineering leaders.",
    category: "Fellowship"
  }
];

export const WORK_PROCESS = [
  {
    step: "01",
    title: "DISCOVER",
    subtitle: "Understanding Constraints & Data",
    description: "Deconstruct the core problem, user workflow, latency requirements, and data availability. Establish benchmark baselines before writing a single line of code."
  },
  {
    step: "02",
    title: "DESIGN",
    subtitle: "Architecture & Data Contracts",
    description: "Map out system topologies, API schemas (Pydantic/TypeScript), database entity relationships, and AI model routing before implementation."
  },
  {
    step: "03",
    title: "BUILD",
    subtitle: "Type-Safe Modular Engineering",
    description: "Implement clean, testable code across frontend interfaces, resilient backend services, and robust AI inference pipelines with Docker containerization."
  },
  {
    step: "04",
    title: "VALIDATE",
    subtitle: "Rigorous Benchmarking & Edge Cases",
    description: "Perform ablation studies, cross-validation, stress-testing under simulated traffic, and systematic error triage to prove reliability."
  },
  {
    step: "05",
    title: "ITERATE",
    subtitle: "Telemetry & Continuous Polish",
    description: "Profile latency bottlenecks, tune queries, integrate user feedback, and refine explainability to deliver a genuinely polished product."
  }
];
