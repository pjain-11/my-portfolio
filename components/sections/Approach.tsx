"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReveal } from "@/lib/hooks";
import { principles } from "@/lib/data";

export function Approach() {
  return (
    <section
      id="approach"
      className="border-border mx-auto max-w-6xl border-t px-6 py-20 md:py-28"
    >
      <SectionHeading
        index="03"
        title="How I Work"
        subtitle="The principles I bring to backend work, learned the hard way on production systems."
      />

      <ol className="border-border bg-border grid gap-px overflow-hidden rounded-lg border sm:grid-cols-2">
        {principles.map((principle, index) => (
          <ApproachCard key={principle.title} index={index} {...principle} />
        ))}
      </ol>
    </section>
  );
}

function ApproachCard({
  index,
  title,
  body,
}: {
  index: number;
  title: string;
  body: string;
}) {
  const reveal = useReveal(index * 0.06);

  return (
    <motion.li {...reveal} className="bg-card flex flex-col gap-2 p-6">
      <span className="text-accent font-mono text-xs">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="text-foreground font-semibold">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
    </motion.li>
  );
}
