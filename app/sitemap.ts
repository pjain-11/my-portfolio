import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";

// Required for `output: "export"` — generated once at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
