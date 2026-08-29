"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { useReveal } from "@/lib/hooks";
import { projects } from "@/lib/data";
import type { Project } from "@/types";

export function Projects() {
  return (
    <section
      id="projects"
      className="border-border mx-auto max-w-6xl border-t px-6 py-20 md:py-28"
    >
      <SectionHeading
        index="04"
        title="Projects"
        subtitle="Backend systems I've built and shipped. Client work, so repositories stay private — the engineering detail is below."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <RevealCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function RevealCard({ project, index }: { project: Project; index: number }) {
  const reveal = useReveal(index * 0.08);

  return (
    <motion.div {...reveal}>
      <ProjectCard project={project} />
    </motion.div>
  );
}
