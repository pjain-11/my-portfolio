import type {
  ExperienceEntry,
  PersonalInfo,
  Project,
  SkillCategory,
  SystemStatusItem,
} from "@/types";

/**
 * All personal content lives here — edit this file to update the portfolio
 * without touching any component code.
 */

export const personalInfo: PersonalInfo = {
  name: "Prince Jain",
  displayName: "Prince J",
  role: "Backend Developer",
  experience: "2.5 years",
  tagline: "I build APIs and backend systems that don't fall over at 3am.",
  location: "Mumbai, Maharashtra",
  email: "prince.jain.1103@gmail.com",
  github: "https://github.com/pjain-11",
  linkedin: "https://www.linkedin.com/in/princejain11/",
  resumeUrl: "/resume.pdf", // place your resume PDF in the /public folder with this name
  bio: `I'm a backend developer with 2.5 years of experience building systems for the insurance and BFSI space. My work sits at the intersection of secure API design and messy real-world data — from integrating insurance provider APIs for real-time quote generation, to building multi-tenant platforms with role-based access for admins, corporates, and POS users. I care about backend systems that stay fast and predictable under load, not just ones that work in a demo. Currently based in Mumbai, and always looking to sharpen how I think about database performance and system design.`,
  education: {
    degree: "B.E. in Computer Engineering",
    institution: "Mumbai University",
    duration: "2019 – 2023",
    detail: "CGPA: 8.76 / 10",
  },
  achievements: [
    "KAITO Star Award — outstanding backend development performance",
    "Experience with Docker & CI/CD pipelines",
    "Member of Leo Club of Dombivli",
  ],
};

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "NestJS", "REST API"],
  },
  {
    category: "Databases & ORM",
    skills: ["MySQL", "PostgreSQL", "Sequelize", "TypeORM"],
  },
  {
    category: "Frontend",
    skills: ["Next.js"],
  },
  {
    category: "Security & Tools",
    skills: [
      "JWT",
      "RBAC",
      "Git",
      "Postman",
      "Swagger",
      "AWS (EC2/S3)",
      "Docker",
      "CI/CD",
      "VAPT-aligned secure coding",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Insurance Policy Management Platform",
    description:
      "Backend services powering corporate & retail insurance journeys — from quote comparison to policy issuance, admin operations, and POS onboarding.",
    contribution:
      "Built a multi-tenant architecture with tenant-specific configs, RBAC-secured APIs, and integrations with multiple insurer APIs for quote comparison and policy sync.",
    techStack: ["Node.js", "NestJS", "PostgreSQL", "TypeORM", "JWT", "REST API"],
    isPrivate: true,
  },
  {
    name: "Bulk Insurance Data Migration Utility",
    description:
      "A Node.js tool built to migrate large-scale legacy insurance data into a structured MySQL database.",
    contribution:
      "Processes 100,000+ Excel records in under 30 seconds, cutting manual migration time by ~90%.",
    techStack: ["Node.js", "MySQL", "Sequelize"],
    isPrivate: true,
  },
  {
    name: "POS Onboarding & Reporting Module",
    description:
      "Onboarding workflow for POS partners including KYC verification, certification tracking, and dynamic reporting.",
    contribution:
      "Built reporting APIs with filtering/pagination and dynamic PDF/Excel exports, following VAPT-aligned security practices.",
    techStack: ["Express.js", "MySQL", "PostgreSQL", "REST API"],
    isPrivate: true,
  },
];

export const experience: ExperienceEntry[] = [
  {
    company: "KIS Tech Solutions Pvt. Ltd.",
    role: "Software Developer",
    duration: "March 2024 – Present",
    bullets: [
      "Developed and maintained 20+ production-grade REST APIs powering insurance workflows — quotes, policy issuance, payments, claims, and endorsements.",
      "Integrated 5+ insurance provider APIs for real-time quote generation and policy synchronization.",
      "Implemented JWT-based authentication and RBAC across Admin, Corporate, Manager, and POS user roles.",
      "Cut bulk data migration time by ~90% by building a Node.js utility processing 100,000+ Excel records into MySQL in under 30 seconds.",
      "Optimized high-traffic endpoints through indexing, query tuning, and Sequelize scopes.",
    ],
  },
];

/** Decorative "system status" widget content for the hero section — styled
 * like a health check panel, not literal live monitoring data. */
export const systemStatus: SystemStatusItem[] = [
  { label: "API", value: "Operational", status: "ok" },
  { label: "Database", value: "Operational", status: "ok" },
  { label: "Uptime", value: "99.98%", status: "ok" },
  { label: "Avg. Response", value: "84ms", status: "ok" },
];

/** Terminal-style hero snippet — purely decorative. */
export const heroTerminalLines: string[] = [
  "$ whoami",
  "prince_jain — backend developer",
  "$ cat skills.json | jq '.experience'",
  '"2.5 years"',
  "$ node server.js",
  "Server listening on port 4000 ✓",
];
