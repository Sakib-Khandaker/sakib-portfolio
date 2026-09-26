"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

const categories = ["All", "Machine Learning", "NLP", "Software"];

function categoryOf(project: Project) {
  if (project.technologies.some((x) => ["NLP", "Web Scraping", "Regex", "Data Processing"].includes(x))) return "NLP";
  if (project.technologies.some((x) => ["Machine Learning", "XGBoost", "LightGBM", "CatBoost", "ARIMA", "SARIMA"].includes(x))) return "Machine Learning";
  return "Software";
}

export default function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => active === "All" ? projects : projects.filter((project) => categoryOf(project) === active), [active, projects]);

  return (
    <>
      <div className="flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
        {categories.map((category) => (
          <button key={category} onClick={() => setActive(category)} className={`filter-pill ${active === category ? "filter-pill-active" : ""}`}>
            {category}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filtered.map((project, index) => (
          <Link href={`/projects/${project.slug}`} key={project.slug} className="project-list-card group" style={{ animationDelay: `${index * 70}ms` }}>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">{categoryOf(project)}</span>
              <h2 className="mt-3 text-2xl font-black text-slate-950">{project.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{project.shortDescription}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.slice(0, 5).map((tech) => <span key={tech} className="soft-tag">{tech}</span>)}
              </div>
            </div>
            <span className="project-arrow"><ArrowUpRight size={19} /></span>
          </Link>
        ))}
      </div>
    </>
  );
}
