"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skills } from "@/lib/data";

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
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="border-border bg-card rounded-lg border p-5"
          >
            <p className="text-muted-foreground mb-4 font-mono text-xs tracking-wide uppercase">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
