import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { personalInfo } from "@/lib/data";

const socialLinks = [
  { label: "GitHub", url: personalInfo.github, icon: GithubIcon },
  { label: "LinkedIn", url: personalInfo.linkedin, icon: LinkedinIcon },
  { label: "Email", url: `mailto:${personalInfo.email}`, icon: Mail },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border border-t">
      <div className="text-muted-foreground mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-sm sm:flex-row sm:justify-between">
        <p className="font-mono text-xs">
          © {year} {personalInfo.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target={social.url.startsWith("http") ? "_blank" : undefined}
              rel={social.url.startsWith("http") ? "noreferrer" : undefined}
              aria-label={social.label}
              className="hover:text-accent transition-colors"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
