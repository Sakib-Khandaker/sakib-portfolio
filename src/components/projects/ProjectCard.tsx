import Link from "next/link";
import { ArrowUpRight, Database, Globe2, GraduationCap, LineChart } from "lucide-react";
import Badge from "@/components/ui/Badge";
import type { Project } from "@/data/projects";

const icons = { traffic: LineChart, student: GraduationCap, ecommerce: Globe2, news: Database };

function ProjectVisual({ project }: { project: Project }) {
  const Icon = project.slug.includes("traffic") ? icons.traffic : project.slug.includes("student") ? icons.student : project.slug.includes("ecommerce") ? icons.ecommerce : icons.news;
  return (
    <div className="project-visual">
      <div className="project-visual-grid" />
      <div className="project-visual-orb" />
      <div className="project-visual-icon"><Icon size={34} /></div>
      <span className="project-visual-label">{project.technologies[0]}</span>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10">
      <ProjectVisual project={project} />
      <div className="p-7">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Selected Project</p>
        <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950">{project.title}</h2>
        <p className="mt-3 leading-7 text-slate-600">{project.shortDescription}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((technology) => <Badge key={technology}>{technology}</Badge>)}</div>
        <Link href={`/projects/${project.slug}`} className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3 hover:text-blue-700">View project <ArrowUpRight size={17} /></Link>
      </div>
    </article>
  );
}
