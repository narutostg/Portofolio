export type Project = {
  number: string;
  title: string;
  context: string;
  description: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    number: '01',
    title: 'Customer Portal — PT Semen Indonesia Logistik',
    context: 'DevOps & Fullstack Developer · Capstone · 2026',
    description: 'Built and integrated application features across frontend, backend, database, and infrastructure for a customer portal capstone. My DevOps work included deployment and environment configuration with Docker on Linux servers, reverse proxy, debugging, service integration, and CI/CD-oriented workflows. I also developed and integrated REST APIs, authentication flows, backend and database services, and dynamic frontend features.',
    technologies: ['Go', 'Gin', 'Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Linux', 'MinIO', 'Reverse Proxy', 'CI/CD'],
  },
  {
    number: '02',
    title: 'Course Recommendation System',
    context: 'Knowledge-Based System · Academic project',
    description: 'A recommendation system using RAG and LLM components, with transcript handling, curriculum data, vector search, retrieval, and system integration.',
    technologies: ['RAG', 'LLM', 'Python', 'PostgreSQL', 'Qdrant'],
  },
  {
    number: '03',
    title: 'Hotel Booking Web Application',
    context: 'Full-stack web application',
    description: 'A hotel booking application with authentication, role-based access, admin and user workflows, booking management, and relational data.',
    technologies: ['Full-Stack Web', 'Authentication', 'RBAC', 'SQL', 'Database Design'],
  },
  {
    number: '04',
    title: 'Web Application Penetration Testing',
    context: 'Final project · NETICS 2025',
    description: 'Conducted white-box analysis of web application source code to identify common vulnerabilities. Analyzed application security logs and documented findings with impact assessments and mitigation recommendations.',
    technologies: ['Web Security', 'White-box Testing', 'Vulnerability Analysis', 'Security Log Analysis'],
  },
];

export const skillGroups = [
  { title: 'Software development', items: ['Go', 'Python', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
  { title: 'Backend', items: ['Gin', 'REST API', 'PostgreSQL', 'SQL', 'Redis'] },
  { title: 'Frontend', items: ['Next.js', 'React', 'HTML', 'CSS', 'JavaScript'] },
  { title: 'DevOps & systems', items: ['Docker', 'Docker Compose', 'Linux', 'Git', 'CI/CD', 'Reverse Proxy'] },
  { title: 'AI & data', items: ['Machine Learning', 'Data Mining', 'RAG', 'LLM', 'Qdrant'] },
  { title: 'Cybersecurity', items: ['Web Application Security', 'White-box Testing', 'Vulnerability Analysis', 'Wazuh'] },
];

export const coursework = ['Data Structures', 'Object-Oriented Programming', 'Database Systems', 'Web Programming', 'Software Design', 'Operating Systems', 'Machine Learning', 'Data Mining'];

export const achievements = [
  { title: '2nd Place — Data Mining Competition', detail: 'Quadrathlon, Informatics Engineering ITS' },
  { title: 'Best Algorithm Award', detail: 'Intelligent Computing and Vision Lab Final Project' },
];

export const certifications = [
  { provider: 'AWS Academy', items: ['Machine Learning', 'AI Foundations', 'Data Engineering', 'Security Foundations'] },
  { provider: 'Palo Alto Networks', items: ['CyberOps', 'Security Foundations'] },
];
