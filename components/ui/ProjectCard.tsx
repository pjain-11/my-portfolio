import { Check, ExternalLink, Lock } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border-border bg-card hover:border-accent/50 flex h-full flex-col rounded-lg border p-5 transition-colors">
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

      {project.contribution && (
        <p className="border-accent/50 text-foreground/90 mt-3 border-l-2 pl-3 text-sm">
          {project.contribution}
        </p>
      )}

      {project.metrics?.length > 0 && (
        <dl className="border-border mt-3 flex flex-wrap gap-x-6 gap-y-2 border-t pt-3">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <dd className="text-foreground font-mono text-sm font-semibold">
                {metric.value}
              </dd>
              <dt className="text-muted-foreground text-[11px]">{metric.label}</dt>
            </div>
          ))}
        </dl>
      )}

      {project.highlights?.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="text-muted-foreground flex gap-2 text-sm">
              <Check size={14} className="text-accent mt-0.5 shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>
      )}

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

      {(project.githubUrl || project.liveUrl || project.isPrivate) && (
        <div className="border-border mt-4 flex items-center gap-4 border-t pt-3 font-mono text-sm">
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
            project.isPrivate && (
              <span className="text-muted-foreground/50 inline-flex items-center gap-1.5">
                <GithubIcon size={15} />
                Proprietary
              </span>
            )
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
      )}
    </div>
  );
}
