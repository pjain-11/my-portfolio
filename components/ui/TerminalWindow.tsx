"use client";

import { motion } from "framer-motion";
import { heroTerminalLines } from "@/lib/data";

/** Decorative terminal-style panel for the hero section. Lines stagger in
 * once on mount — a nod to backend/CLI work without looping distractingly. */
export function TerminalWindow() {
  return (
    <div className="border-border bg-card w-full max-w-md overflow-hidden rounded-lg border shadow-xl">
      <div className="border-border flex items-center gap-1.5 border-b px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
        <span className="text-muted-foreground ml-2 font-mono text-xs">bash — 80x24</span>
      </div>
      <div className="space-y-1.5 px-4 py-4 font-mono text-[13px] leading-relaxed">
        {heroTerminalLines.map((line, index) => (
          <motion.p
            key={`${index}-${line}`}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 * index + 0.3, duration: 0.35 }}
            className={line.startsWith("$") ? "text-foreground" : "text-accent"}
          >
            {line}
          </motion.p>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 * heroTerminalLines.length + 0.3 }}
          className="bg-accent inline-block h-3.5 w-2 animate-pulse align-middle"
        />
      </div>
    </div>
  );
}
