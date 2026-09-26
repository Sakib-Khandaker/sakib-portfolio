import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Code2, LineChart, Database, BrainCircuit, Map, BarChart3 } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"><ArrowLeft size={16} /> Back to projects</Link>

      <section className="mt-8 overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-400">Project case study</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">{project.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{project.description}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[.04] p-6 backdrop-blur">
            <LineChart className="text-blue-400" size={30} />
            <p className="mt-5 text-sm text-slate-400">Technology stack</p>
            <div className="mt-4 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="dark-tag">{technology}</span>)}</div>
          </div>
        </div>
      </section>

      {slug === "traffic-accident-forecasting" && (
        <section className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="stat-card"><strong>3,120</strong><span>core processed records</span></div>
          <div className="stat-card"><strong>8</strong><span>Bangladesh divisions</span></div>
          <div className="stat-card"><strong>0.819</strong><span>R² of the reported vehicle-count ensemble</span></div>
        </section>
      )}

      {slug === "traffic-accident-forecasting" && (
        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-7 md:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Research evidence</p>
          <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div><h2 className="text-2xl font-black">Model comparison</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Reported test-set results for the main forecasting approaches. Metrics are shown for transparency rather than as a universal benchmark.</p></div>
          </div>
          <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-slate-100 text-xs uppercase tracking-wider text-slate-500"><tr><th className="px-5 py-4">Target</th><th className="px-5 py-4">Method</th><th className="px-5 py-4">RMSE</th><th className="px-5 py-4">MAE</th><th className="px-5 py-4">R²</th></tr></thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr><td className="px-5 py-4 font-semibold">Vehicle count</td><td className="px-5 py-4">Ensemble</td><td className="px-5 py-4">4.043</td><td className="px-5 py-4">2.380</td><td className="px-5 py-4 font-bold text-blue-700">0.819</td></tr>
                <tr><td className="px-5 py-4 font-semibold">Death count</td><td className="px-5 py-4">CatBoost</td><td className="px-5 py-4">2.876</td><td className="px-5 py-4">1.445</td><td className="px-5 py-4 font-bold text-blue-700">0.828</td></tr>
                <tr><td className="px-5 py-4 font-semibold">Injured count</td><td className="px-5 py-4">CatBoost</td><td className="px-5 py-4">6.553</td><td className="px-5 py-4">2.648</td><td className="px-5 py-4 font-bold text-blue-700">0.639</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500">These values describe the project’s reported experiments and should be interpreted within the dataset, split strategy and forecasting setup used in the thesis.</p>
        </section>
      )}

      <section className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_.6fr]">
        <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
          <h2 className="text-2xl font-black">Overview</h2>
          <p className="mt-5 leading-8 text-slate-600">This project combines practical implementation with structured experimentation. The detailed case study can be expanded with architecture diagrams, screenshots, datasets, evaluation tables and links as those artifacts are added to the repository.</p>
          <h3 className="mt-9 text-xl font-bold">What I worked on</h3>
          <ul className="mt-4 space-y-3 text-slate-600">
            <li>• Problem definition and project scope</li>
            <li>• Data preparation and feature engineering</li>
            <li>• Model implementation and evaluation</li>
            <li>• Results analysis and documentation</li>
          </ul>
        </article>

        <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-7 md:p-9">
          <h2 className="text-xl font-black">Links</h2>
          <div className="mt-6 space-y-3">
            {project.github ? <Button href={project.github}> <Code2 className="mr-2" size={17} /> GitHub <ExternalLink className="ml-2" size={15} /></Button> : <p className="text-sm leading-6 text-slate-500">GitHub link will be added when the project repository is ready.</p>}
            {project.demo && <Button href={project.demo} variant="secondary">Live Demo <ExternalLink className="ml-2" size={15} /></Button>}
          </div>
        </aside>
      </section>
    </div>
  );
}
