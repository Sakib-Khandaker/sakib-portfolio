import type { MetadataRoute } from "next";

const baseUrl = "https://sakib-portfolio-jtkesjgc9-sakib-khandakar.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
