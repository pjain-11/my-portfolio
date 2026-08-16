import { ExternalLink, Lock } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border-border bg-card hover:border-accent/50 flex h-full flex-col rounded-lg border p-6 transition-colors">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-foreground text-lg font-semibold">{project.name}</h3>
        {project.isPrivate && (
          <span className="border-border text-muted-foreground inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[11px]">
            <Lock size={11} />
            Private
          </span>
        )}
      </div>

      <p className="text-muted-foreground text-sm">{project.description}</p>

      <p className="border-accent/50 text-foreground/90 mt-3 border-l-2 pl-3 text-sm">
        {project.contribution}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="border-border text-muted-foreground rounded border px-2 py-0.5 font-mono text-[11px]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="border-border mt-5 flex items-center gap-4 border-t pt-4 font-mono text-sm">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-accent inline-flex items-center gap-1.5 transition-colors"
          >
            <GithubIcon size={15} />
            Code
          </a>
        ) : (
          <span className="text-muted-foreground/50 inline-flex items-center gap-1.5">
            <GithubIcon size={15} />
            Proprietary
          </span>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-accent inline-flex items-center gap-1.5 transition-colors"
          >
            <ExternalLink size={15} />
            Live
          </a>
        )}
      </div>
    </div>
  );
}
