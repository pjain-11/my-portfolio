"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  index: string; // e.g. "02" — printed as a monospace section number
  title: string;
  subtitle?: string;
}

export function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className="mb-10"
    >
      <p className="text-accent font-mono text-sm">{`// ${index}`}</p>
      <h2 className="text-foreground mt-1 text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="text-muted-foreground mt-2 max-w-xl">{subtitle}</p>}
    </motion.div>
  );
}
