import Link from "next/link";
import { Download, ExternalLink, FileText, FlaskConical, BriefcaseBusiness } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const cvs = [
  {
    title: "Research CV",
    label: "Academic / Research",
    description:
      "Focused on machine learning, NLP, deep learning, spatio-temporal modeling, research projects, thesis work, technical training and academic activities.",
    file: "/documents/Sakib_Khandakar_Research_CV.pdf",
    icon: FlaskConical,
    accent: "blue",
  },
  {
    title: "Professional CV",
    label: "Industry / Jobs",
    description:
      "Focused on software development, IT support, projects, technical skills, internship experience, leadership, organizations and professional training.",
    file: "/documents/Sakib_Khandakar_Professional_CV.pdf",
    icon: BriefcaseBusiness,
    accent: "slate",
  },
];

export default function CVPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="Curriculum Vitae"
        title="Choose the CV for your purpose"
        description="I maintain separate versions for research applications and software or industry opportunities so that the most relevant experience is presented first."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {cvs.map(({ title, label, description, file, icon: Icon, accent }) => (
          <Reveal key={title}>
            <article className="glass-card h-full p-7 md:p-8">
              <div className={`icon-box ${accent === "slate" ? "bg-slate-950 text-white" : ""}`}>
                <Icon size={23} />
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">{label}</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">{title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{description}</p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href={file} download className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700">
                  <Download size={17} /> Download
                </a>
                <Link href={file} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 font-bold text-slate-700 transition hover:border-blue-600 hover:text-blue-600">
                  <ExternalLink size={17} /> Open PDF
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
        <div className="flex gap-4">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-slate-700 shadow-sm"><FileText size={20} /></div>
          <div>
            <h2 className="font-bold text-slate-950">For recruiters and supervisors</h2>
            <p className="mt-2 leading-7 text-slate-600">
              Research applications can start with the Research CV, while software, IT support and general professional applications can start with the Professional CV.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
