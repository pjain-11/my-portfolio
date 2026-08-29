"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { useReveal } from "@/lib/hooks";
import { skills } from "@/lib/data";
import type { SkillCategory } from "@/types";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-border mx-auto max-w-6xl border-t px-6 py-20 md:py-28"
    >
      <SectionHeading
        index="02"
        title="Skills"
        subtitle="Tools and technologies I reach for most."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => (
          <SkillGroupCard key={group.category} group={group} index={index} />
        ))}
      </div>
    </section>
  );
}

function SkillGroupCard({ group, index }: { group: SkillCategory; index: number }) {
  const reveal = useReveal(index * 0.05);

  return (
    <motion.div {...reveal} className="border-border bg-card rounded-lg border p-5">
      <p className="text-muted-foreground mb-4 font-mono text-xs tracking-wide uppercase">
        {group.category}
      </p>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <SkillBadge key={skill} name={skill} />
        ))}
      </div>
    </motion.div>
  );
}
