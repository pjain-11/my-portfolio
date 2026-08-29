"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReveal } from "@/lib/hooks";
import { personalInfo } from "@/lib/data";

const quickFacts = [
  { icon: Briefcase, label: "Role", value: personalInfo.role },
  { icon: MapPin, label: "Location", value: personalInfo.location },
  { icon: GraduationCap, label: "Experience", value: personalInfo.experience },
];

export function About() {
  const bio = useReveal();
  const facts = useReveal(0.1);
  const edu = useReveal();
  const achievements = useReveal(0.1);

  return (
    <section
      id="about"
      className="border-border mx-auto max-w-6xl border-t px-6 py-20 md:py-28"
    >
      <SectionHeading index="01" title="About Me" subtitle="A little more context." />

      <div className="grid gap-10 md:grid-cols-3">
        <motion.div {...bio} className="md:col-span-2">
          <p className="text-muted-foreground leading-relaxed text-balance">
            {personalInfo.bio}
          </p>
          <p className="border-accent/50 text-foreground/90 mt-5 border-l-2 pl-3 text-sm">
            <span className="text-accent font-mono">Currently — </span>
            {personalInfo.now}
          </p>
        </motion.div>

        <motion.div {...facts} className="flex flex-col gap-3">
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="border-border bg-card flex items-center gap-3 rounded-lg border px-4 py-3"
            >
              <fact.icon size={18} className="text-accent shrink-0" />
              <div>
                <p className="text-muted-foreground font-mono text-[11px] tracking-wide uppercase">
                  {fact.label}
                </p>
                <p className="text-foreground text-sm">{fact.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <motion.div {...edu} className="border-border bg-card rounded-lg border p-6">
          <div className="text-accent mb-4 flex items-center gap-2 font-mono text-sm">
            <GraduationCap size={16} />
            education
          </div>
          <p className="text-foreground font-semibold">{personalInfo.education.degree}</p>
          <p className="text-muted-foreground mt-1 text-sm">
            {personalInfo.education.institution}
          </p>
          <p className="text-muted-foreground mt-1 text-sm">
            {personalInfo.education.duration} · {personalInfo.education.detail}
          </p>
        </motion.div>

        <motion.div
          {...achievements}
          className="border-border bg-card rounded-lg border p-6"
        >
          <div className="text-accent mb-4 flex items-center gap-2 font-mono text-sm">
            <Award size={16} />
            achievements
          </div>
          <ul className="space-y-2">
            {personalInfo.achievements.map((achievement) => (
              <li key={achievement} className="text-muted-foreground flex gap-2 text-sm">
                <span className="bg-accent mt-1.5 h-1 w-1 shrink-0 rounded-full" />
                {achievement}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
