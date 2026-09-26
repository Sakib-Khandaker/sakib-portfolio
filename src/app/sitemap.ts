import type { MetadataRoute } from "next";

const baseUrl = "https://sakib-portfolio-jtkesjgc9-sakib-khandakar.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/research", "/projects", "/experience", "/education", "/skills", "/achievements", "/Organizations", "/robotics", "/cv", "/contact"];
  const projectRoutes = [
    "/projects/traffic-accident-forecasting",
    "/projects/student-management-system",
    "/projects/ecommerce-website",
    "/projects/bangla-road-accident-news-dataset",
  ];

  return [...routes, ...projectRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : route === "/research" || route === "/projects" ? 0.9 : 0.7,
  }));
}
