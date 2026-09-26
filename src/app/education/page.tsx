import { BookOpen, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const focus = ["Programming & Algorithms", "Software Engineering", "Machine Learning & AI", "Databases", "Data-driven Computing"];

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="Education" title="Academic Background" description="Computer Science and Engineering education with a focus on software, intelligent systems and applied machine learning." />
      <div className="mt-14 relative border-l-2 border-blue-100 pl-8 md:pl-10">
        <Reveal>
          <article className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
            <div className="absolute -left-[50px] top-7 grid h-10 w-10 place-items-center rounded-full border-4 border-white bg-blue-600 text-white shadow-md md:-left-[54px]"><GraduationCap size={18} /></div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Bachelor&apos;s degree</p>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950">B.Sc. in Computer Science &amp; Engineering</h2>
            <p className="mt-2 text-lg font-semibold text-slate-700">Jashore University of Science and Technology (JUST)</p>
            <p className="mt-5 max-w-3xl leading-8 text-slate-600">Academic work spanning programming, algorithms, software engineering, databases, machine learning, artificial intelligence and data-driven computing.</p>
            <div className="mt-7 flex items-center gap-2 text-sm font-bold text-slate-700"><BookOpen size={17} className="text-blue-600" /> Core academic focus</div>
            <div className="mt-4 flex flex-wrap gap-2">{focus.map((item) => <span key={item} className="soft-tag">{item}</span>)}</div>
          </article>
        </Reveal>
      </div>
    </div>
  );
}
