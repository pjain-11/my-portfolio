"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-border mx-auto max-w-6xl border-t px-6 py-20 md:py-28"
    >
      <SectionHeading index="04" title="Experience" subtitle="Where I've worked." />

      <div className="border-border relative space-y-10 border-l pl-8">
        {experience.map((entry, index) => (
          <motion.div
            key={`${entry.company}-${entry.role}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative"
          >
            <span className="bg-accent ring-background absolute top-1.5 -left-[calc(2rem+5px)] h-2.5 w-2.5 rounded-full ring-4" />

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-foreground text-lg font-semibold">
                {entry.role}{" "}
                <span className="text-muted-foreground">· {entry.company}</span>
              </h3>
              <p className="text-accent font-mono text-xs">{entry.duration}</p>
            </div>

            <ul className="mt-3 space-y-2">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="text-muted-foreground flex gap-2 text-sm">
                  <span className="bg-accent mt-1.5 h-1 w-1 shrink-0 rounded-full" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
