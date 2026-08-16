"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { SystemStatusWidget } from "@/components/ui/SystemStatusWidget";
import { personalInfo } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-6xl flex-col items-center gap-14 px-6 pt-16 pb-20 md:flex-row md:pt-24 md:pb-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 text-center md:text-left"
      >
        <p className="border-border bg-card text-muted-foreground mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs">
          <span className="bg-accent h-1.5 w-1.5 rounded-full" />
          Open to backend roles
        </p>

        <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I&apos;m {personalInfo.displayName}
        </h1>
        <h2 className="text-accent mt-3 font-mono text-lg sm:text-xl">
          {personalInfo.role} · {personalInfo.experience} experience
        </h2>
        <p className="text-muted-foreground mx-auto mt-5 max-w-lg text-balance md:mx-0">
          {personalInfo.tagline}
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
          <a
            href="#projects"
            className="bg-accent text-accent-foreground inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
          >
            View Projects
            <ArrowRight size={16} />
          </a>
          <a
            href={personalInfo.resumeUrl}
            download
            className="border-border text-foreground hover:border-accent hover:text-accent inline-flex items-center gap-2 rounded-md border px-5 py-2.5 text-sm font-medium transition-colors"
          >
            Download Resume
            <Download size={16} />
          </a>
          <a
            href="#contact"
            className="text-muted-foreground hover:text-accent inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors"
          >
            Contact Me
            <Mail size={16} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex flex-1 flex-col items-center gap-4"
      >
        <TerminalWindow />
        <SystemStatusWidget />
      </motion.div>
    </section>
  );
}
