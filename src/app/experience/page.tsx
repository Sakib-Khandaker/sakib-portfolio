import { BriefcaseBusiness } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="Experience" title="Professional Experience" description="Practical experience across IT support, operations and software-oriented work." />

      <div className="mb-10 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Professional profile</p>
          <p className="mt-2 leading-7 text-slate-600">For software, IT support and industry opportunities, see the Professional CV.</p>
        </div>
        <a href="/documents/Sakib_Khandakar_Professional_CV.pdf" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-950 px-5 py-3 font-bold text-white hover:bg-blue-700">Open Professional CV</a>
      </div>

      <div className="relative mt-14 border-l-2 border-slate-200 pl-8 md:pl-10">
        {experiences.map((experience, index) => (
          <Reveal key={`${experience.organization}-${experience.role}`} className={index ? "mt-10" : ""}>
            <article className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl md:p-9">
              <div className="absolute -left-[50px] top-7 grid h-10 w-10 place-items-center rounded-full border-4 border-white bg-blue-600 text-white shadow-md md:-left-[54px]">
                <BriefcaseBusiness size={17} />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">{experience.type}</span>
                <span className="text-sm text-slate-400">Experience</span>
              </div>
              <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950">{experience.role}</h2>
              <p className="mt-2 text-lg font-semibold text-slate-700">{experience.organization}</p>
              <p className="mt-5 leading-8 text-slate-600">{experience.description}</p>
              <ul className="mt-6 grid gap-3 text-slate-600 md:grid-cols-2">
                {experience.responsibilities.map((item) => <li key={item} className="rounded-xl bg-slate-50 px-4 py-3 leading-6">{item}</li>)}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
