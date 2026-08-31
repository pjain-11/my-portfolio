/** Core content types for the portfolio. All data conforming to these
 * interfaces lives in `content/content.json` and is loaded (and shape-checked)
 * by `lib/data.ts`, so content can be edited without touching component code. */

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  detail: string;
}

export interface PersonalInfo {
  name: string;
  displayName: string;
  role: string;
  experience: string;
  tagline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  /** Short availability line shown as the hero status pill. */
  availability: string;
  bio: string;
  /** What you're currently focused on / learning — shown in About. */
  now: string;
  education: Education;
  achievements: string[];
}

/** Headline metric shown in the hero / about strip. */
export interface Stat {
  label: string;
  value: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

/** A single "how I work" engineering principle. */
export interface Principle {
  title: string;
  body: string;
}

/** A compact metric badge rendered on a project card. */
export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  name: string;
  description: string;
  contribution?: string;
  /** Bullet points of notable engineering decisions / scope. */
  highlights: string[];
  /** Small quantified badges (scale, count, latency, …). */
  metrics: ProjectMetric[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  isPrivate: boolean;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  duration: string;
  /** One-line framing of the role, shown above the bullets. */
  summary: string;
  bullets: string[];
  /** Tech worked with in this role, shown as tags. */
  stack: string[];
}

/** Snapshot values for the hero's "system status" widget — meant to look
 * like an uptime/health check panel rather than literal live data. */
export interface SystemStatusItem {
  label: string;
  value: string;
  status: "ok" | "warn";
}

/** Full shape of `content/content.json`. */
export interface PortfolioContent {
  personalInfo: PersonalInfo;
  stats: Stat[];
  skills: SkillCategory[];
  principles: Principle[];
  projects: Project[];
  experience: ExperienceEntry[];
  systemStatus: SystemStatusItem[];
  heroTerminalLines: string[];
}
