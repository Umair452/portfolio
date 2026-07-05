export const profile = {
  name: "Muhammad Umair",
  role: "Full-Stack Web Developer",
  location: "Vitoria-Gasteiz, Spain",
  email: "mumairarshad452@gmail.com",
  phone: "+34 643 034 089",
  linkedin: "linkedin.com/in/umair452",
  linkedinUrl: "https://linkedin.com/in/umair452",
  bio: "I build production-ready web applications end to end — from React interfaces down to the Docker containers and CI/CD pipelines that ship them. I've spent the last few years freelancing across Fiverr and Upwork, turning client requirements into scalable, maintained systems.",
};

export const experience = [
  {
    range: "Sep 2025 — Present",
    role: "Freelance Web Developer",
    org: "Self-Employed — Fiverr & Upwork Inc.",
    points: [
      "Designed and built responsive, scalable web applications end to end: full-stack development, API integration, and performance optimization for seamless UX.",
      "Ran technical and business discussions directly with clients — gathering requirements, planning delivery, and shaping system architecture for scalability.",
      "Owned server setup, optimization, and maintenance, including code review, bug fixes, and performance improvements to keep systems reliable.",
    ],
  },
  {
    range: "May 2023 — Jul 2024",
    role: "Community Work Volunteer",
    org: "University of Gujrat, Pakistan",
    points: [
      "Worked with students to brainstorm, plan, and implement solutions for their own project requirements.",
      "Gave hands-on support debugging and optimizing web and machine learning projects.",
      "Shared practices around responsive design, API integration, and system architecture.",
    ],
  },
];

export const projects = [
  {
    name: "Smart Task Manager",
    date: "Feb 2026",
    type: "Personal Project",
    status: "deployed",
    description:
      "A production-ready full-stack task manager with real-time collaboration, AI-assisted task prioritization, and automated background jobs.",
    points: [
      "Secure JWT authentication and role-based access control across a React + Tailwind UI.",
      "Real-time collaboration via Socket.IO, plus AI-powered task prioritization and description generation using Groq (LLaMA 3), with multilingual support.",
      "Automated CRON background jobs; containerized with Docker and shipped through Jenkins CI/CD to AWS EC2, behind Nginx with SSL.",
    ],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Tailwind", "Socket.IO", "Docker", "Jenkins", "AWS EC2", "Nginx"],
  },
  {
    name: "Exact-Bid Estimates",
    date: "Aug 2025",
    type: "Personal Project",
    status: "shipped",
    description:
      "A full-stack construction estimation platform for managing client inquiries and quotes.",
    points: [
      "Built on the MERN stack with secure REST APIs and MongoDB for data.",
      "Automated email services to handle inquiry management and client notifications.",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "REST APIs"],
  },
  {
    name: "Institute of IELTS",
    date: "Dec 2023 — Jul 2024",
    type: "Portfolio for Educational Institute",
    status: "shipped",
    description:
      "A versatile web app streamlining digital tasks for an educational institute — signatures, audio, and PDFs.",
    points: [
      "Built with Next.js for digital signature creation, audio manipulation, and PDF management.",
      "Custom barcode and QR code generation to make sharing information and links easy.",
      "Tuned for performance and responsiveness across devices, leveraging Next.js caching.",
    ],
    stack: ["Next.js", "PDF tooling", "QR/Barcode"],
  },
  {
    name: "Smart Grocery Store Management System",
    date: "Sep 2025",
    type: "Academic Project",
    status: "shipped",
    description:
      "A full-stack platform aggregating products from multiple local stores for browsing, ordering, and home delivery.",
    points: [
      "Role-based dashboards for administrators and delivery personnel — order assignment, delivery tracking, inventory management, and access control.",
      "Admin tooling for product CRUD, stock management, sales analytics, and business reporting.",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js"],
  },
];

export const education = {
  institution: "University of Gujrat, Pakistan",
  degree: "Bachelor of Science in Computer Science",
  range: "Apr 2020 — Oct 2024",
  meta: "Graduated July 2024 · GPA 3.03/4.0",
  coursework: [
    "Data Structures",
    "Web Technologies",
    "Database Systems",
    "Cybersecurity Fundamentals",
    "Operating Systems",
    "AI",
  ],
};

export const skills = [
  {
    label: "Frontend",
    items: ["React", "Tailwind CSS", "TypeScript", "Next.js"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma", "Auth / JWT"],
  },
  {
    label: "Infra & Delivery",
    items: ["Docker", "Jenkins CI/CD", "AWS EC2", "Nginx", "Socket.IO"],
  },
];
