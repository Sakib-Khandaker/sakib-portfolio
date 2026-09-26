import SectionHeading from "@/components/ui/SectionHeading";
import ProjectFilter from "@/components/projects/ProjectFilter";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20">
      <SectionHeading eyebrow="Portfolio" title="Selected Projects" description="A mix of research, machine learning, NLP and software development work." />
      <div className="mt-10"><ProjectFilter projects={projects} /></div>
      <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">For jobs and internships</p>
          <h2 className="mt-2 text-xl font-black text-slate-950">Professional CV</h2>
          <p className="mt-2 max-w-2xl leading-7 text-slate-600">Software projects, IT support experience, technical skills, leadership and professional activities.</p>
        </div>
        <a href="/documents/Sakib_Khandakar_Professional_CV.pdf" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center rounded-full bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700">Open Professional CV</a>
      </div>
    </div>
  );
}
