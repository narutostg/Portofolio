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
    context: 'Capstone project',
    description: 'A full-stack customer portal involving application development, APIs, authentication, service integration, databases, and deployment.',
    technologies: ['Go', 'Gin', 'Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Linux', 'MinIO', 'Reverse Proxy'],
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
    context: 'Application security · Academic project',
    description: 'White-box testing and static source-code analysis to identify web application vulnerabilities, followed by security log analysis and structured reporting.',
    technologies: ['Web Security', 'White-box Testing', 'Static Analysis', 'Security Log Analysis'],
  },
];

export const skillGroups = [
  { title: 'Software development', items: ['Go', 'Python', 'Java', 'C/C++', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
  { title: 'Backend', items: ['Gin', 'REST API', 'PostgreSQL', 'SQL', 'Redis'] },
  { title: 'Frontend', items: ['Next.js', 'React', 'HTML', 'CSS', 'JavaScript'] },
  { title: 'DevOps & systems', items: ['Docker', 'Docker Compose', 'Linux', 'Git', 'CI/CD', 'Reverse Proxy'] },
  { title: 'AI & data', items: ['Machine Learning', 'Data Mining', 'RAG', 'LLM', 'Qdrant'] },
  { title: 'Cybersecurity', items: ['Web Application Security', 'White-box Testing', 'Vulnerability Analysis', 'Wazuh'] },
];

export const coursework = ['Data Structures', 'Database Systems', 'Object-Oriented Programming', 'Operating Systems', 'Computer Networks', 'Web Programming', 'Software Design', 'Machine Learning', 'Data Mining', 'Information Security'];

export const achievements = [
  { title: '2nd Place — Data Mining Competition', detail: 'Quadrathlon, Informatics Engineering ITS' },
  { title: 'Best Algorithm Award', detail: 'Intelligent Computing and Vision Lab Final Project' },
];

export const certifications = [
  { provider: 'AWS Academy', items: ['Machine Learning', 'AI Foundations', 'Data Engineering', 'Security Foundations'] },
  { provider: 'Palo Alto Networks', items: ['CyberOps', 'Security Foundations'] },
];
