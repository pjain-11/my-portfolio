/** Core content types for the portfolio. All data conforming to these
 * interfaces lives in `lib/data.ts` so it can be edited without touching
 * component code. */

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
  bio: string;
  education: Education;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  name: string;
  description: string;
  contribution: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  isPrivate: boolean;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  duration: string;
  bullets: string[];
}

/** Snapshot values for the hero's "system status" widget — meant to look
 * like an uptime/health check panel rather than literal live data. */
export interface SystemStatusItem {
  label: string;
  value: string;
  status: "ok" | "warn";
}
