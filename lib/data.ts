import type {
  ExperienceEntry,
  PersonalInfo,
  PortfolioContent,
  Principle,
  Project,
  SkillCategory,
  Stat,
  SystemStatusItem,
} from "@/types";
import contentJson from "@/content/content.json";

/**
 * All personal content lives in `content/content.json` — edit that file to
 * update the portfolio without touching any component code.
 *
 * The JSON is imported here once, lightly shape-checked at module load, and
 * re-exported as typed values so components get autocomplete and fail fast
 * if the content file drifts out of shape.
 */

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(`content/content.json: ${message}`);
  }
}

// Cast through `unknown`: the JSON's inferred literal types (e.g. `status:
// string`) aren't structurally assignable to the stricter content types.
const content = contentJson as unknown as PortfolioContent;

assert(content.personalInfo?.name, "missing personalInfo.name");
assert(content.personalInfo?.email, "missing personalInfo.email");
assert(
  Array.isArray(content.stats) && content.stats.length > 0,
  "stats must be a non-empty array",
);
assert(
  Array.isArray(content.skills) && content.skills.length > 0,
  "skills must be a non-empty array",
);
assert(
  Array.isArray(content.principles) && content.principles.length > 0,
  "principles must be a non-empty array",
);
assert(
  Array.isArray(content.projects) && content.projects.length > 0,
  "projects must be a non-empty array",
);
assert(
  Array.isArray(content.experience) && content.experience.length > 0,
  "experience must be a non-empty array",
);

export const personalInfo: PersonalInfo = content.personalInfo;
export const stats: Stat[] = content.stats;
export const skills: SkillCategory[] = content.skills;
export const principles: Principle[] = content.principles;
export const projects: Project[] = content.projects;
export const experience: ExperienceEntry[] = content.experience;
export const systemStatus: SystemStatusItem[] = content.systemStatus;
export const heroTerminalLines: string[] = content.heroTerminalLines;
