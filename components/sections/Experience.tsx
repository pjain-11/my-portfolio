"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReveal } from "@/lib/hooks";
import { experience } from "@/lib/data";
import type { ExperienceEntry } from "@/types";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-border mx-auto max-w-6xl border-t px-6 py-20 md:py-28"
    >
      <SectionHeading
        index="05"
        title="Experience"
        subtitle="Where I've worked and what I shipped there."
      />

      <div className="border-border relative max-w-3xl space-y-10 border-l pl-8">
        {experience.map((entry, index) => (
          <TimelineEntry
            key={`${entry.company}-${entry.role}`}
            entry={entry}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

function TimelineEntry({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const reveal = useReveal(index * 0.1);

  return (
    <motion.div {...reveal} className="relative">
      <span className="bg-accent ring-background absolute top-1.5 -left-[calc(2rem+5px)] h-2.5 w-2.5 rounded-full ring-4" />

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-foreground text-lg font-semibold">
          {entry.role} <span className="text-muted-foreground">· {entry.company}</span>
        </h3>
        <p className="text-accent font-mono text-xs">{entry.duration}</p>
      </div>

      {entry.summary && (
        <p className="text-muted-foreground mt-2 text-sm italic">{entry.summary}</p>
      )}

      <ul className="mt-3 space-y-2">
        {entry.bullets.map((bullet) => (
          <li key={bullet} className="text-muted-foreground flex gap-2 text-sm">
            <span className="bg-accent mt-1.5 h-1 w-1 shrink-0 rounded-full" />
            {bullet}
          </li>
        ))}
      </ul>

      {entry.stack?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {entry.stack.map((tech) => (
            <span
              key={tech}
              className="border-border text-muted-foreground rounded border px-2 py-0.5 font-mono text-[11px]"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
