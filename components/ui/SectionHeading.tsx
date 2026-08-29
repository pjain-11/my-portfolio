"use client";

import { motion } from "framer-motion";
import { useReveal } from "@/lib/hooks";

interface SectionHeadingProps {
  index: string; // e.g. "02" — printed as a monospace section number
  title: string;
  subtitle?: string;
}

export function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  const reveal = useReveal();

  return (
    <motion.div {...reveal} className="mb-10">
      <p className="text-accent font-mono text-sm">{`// ${index}`}</p>
      <h2 className="text-foreground mt-1 text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="text-muted-foreground mt-2 max-w-xl">{subtitle}</p>}
    </motion.div>
  );
}
