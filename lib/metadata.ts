import type { Metadata } from "next";
import { personalInfo } from "@/lib/data";

/** Base URL used to build absolute OG/canonical URLs. Set this to your
 * production domain once deployed (also used as NEXT_PUBLIC_SITE_URL on Vercel). */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://princejain-portfolio.example.com";

const title = `${personalInfo.name} — ${personalInfo.role}`;
const description = personalInfo.tagline;

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${personalInfo.name}`,
  },
  description,
  keywords: [
    "Backend Developer",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MySQL",
    "Next.js",
    "TypeScript",
    personalInfo.name,
  ],
  authors: [{ name: personalInfo.name, url: siteUrl }],
  creator: personalInfo.name,
  // Static files in /public (not the app/icon or app/opengraph-image code-gen
  // conventions) — those emit extensionless routes that aren't guaranteed to
  // get the right Content-Type on a plain static host.
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: `${personalInfo.name} — Portfolio`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
