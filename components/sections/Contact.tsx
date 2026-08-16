"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { personalInfo } from "@/lib/data";

const socialLinks = [
  { label: "GitHub", url: personalInfo.github, icon: GithubIcon },
  { label: "LinkedIn", url: personalInfo.linkedin, icon: LinkedinIcon },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // No backend for the contact form — submitting builds a pre-filled
  // mailto: link and hands off to the user's email client.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="border-border mx-auto max-w-6xl border-t px-6 py-20 md:py-28"
    >
      <SectionHeading
        index="05"
        title="Contact"
        subtitle="Have a role, project, or question in mind? Reach out."
      />

      <div className="grid gap-10 md:grid-cols-5">
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 md:col-span-3"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-muted-foreground font-mono text-xs">
              name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-border bg-card text-foreground focus:border-accent rounded-md border px-3 py-2 text-sm outline-none"
              placeholder="Jane Doe"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-muted-foreground font-mono text-xs">
              email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-border bg-card text-foreground focus:border-accent rounded-md border px-3 py-2 text-sm outline-none"
              placeholder="jane@example.com"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-muted-foreground font-mono text-xs">
              message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border-border bg-card text-foreground focus:border-accent resize-none rounded-md border px-3 py-2 text-sm outline-none"
              placeholder="Let's talk about..."
            />
          </div>

          <button
            type="submit"
            className="bg-accent text-accent-foreground mt-2 inline-flex w-fit items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
          >
            Send Message
            <Send size={16} />
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col gap-3 md:col-span-2"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="border-border bg-card hover:border-accent flex items-center gap-3 rounded-lg border px-4 py-3 transition-colors"
          >
            <Mail size={18} className="text-accent shrink-0" />
            <span className="text-foreground truncate text-sm">{personalInfo.email}</span>
          </a>

          <div className="border-border bg-card flex items-center gap-3 rounded-lg border px-4 py-3">
            <MapPin size={18} className="text-accent shrink-0" />
            <span className="text-foreground text-sm">{personalInfo.location}</span>
          </div>

          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="border-border bg-card hover:border-accent flex items-center gap-3 rounded-lg border px-4 py-3 transition-colors"
            >
              <social.icon size={18} className="text-accent shrink-0" />
              <span className="text-foreground text-sm">{social.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
