import Link from "next/link";
import { ArrowRight, BrainCircuit, Database, Map, Workflow } from "lucide-react";
import ResearchPipeline from "@/components/research/ResearchPipeline";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";

const interests = [
  ["Natural Language Processing", "Bangla text processing, information extraction and language-aware systems.", BrainCircuit],
  ["Machine Learning", "Interpretable predictive models, ensembles and evaluation on structured datasets.", Workflow],
  ["Deep Learning", "Neural architectures for sequence, text and spatio-temporal learning.", Database],
  ["Spatio-Temporal Modeling", "Combining geographic structure and temporal patterns for real-world forecasting.", Map],
];

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20">
      <SectionHeading eyebrow="Research" title="Research & Academic Work" description="Applied machine learning research with an emphasis on interpretable models, structured data and real-world problems." />

      <Reveal className="mt-12">
        <article className="research-hero overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-400">Undergraduate thesis</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">Spatio-Temporal Traffic Accident Risk Modeling in Bangladesh</h2>
              <p className="mt-6 max-w-3xl leading-8 text-slate-300">The study investigates division-wise and monthly road accident indicators using machine learning and time-series forecasting, followed by risk-oriented analysis.</p>
              <div className="mt-7 flex flex-wrap gap-2"><Badge>XGBoost</Badge><Badge>LightGBM</Badge><Badge>CatBoost</Badge><Badge>ARIMA</Badge><Badge>SARIMA</Badge></div>
              <Link href="/projects/traffic-accident-forecasting" className="mt-8 inline-flex items-center gap-2 font-bold text-white hover:text-blue-300">View case study <ArrowRight size={17} /></Link>
            </div>
            <div className="research-metrics">
              <div><strong>3,120</strong><span>processed records</span></div>
              <div><strong>8</strong><span>divisions</span></div>
              <div><strong>3</strong><span>forecast targets</span></div>
              <div><strong>0.819</strong><span>vehicle-count R²</span></div>
            </div>
          </div>
        </article>
      </Reveal>

      <Reveal className="mt-10">
        <section className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 md:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Methodology at a glance</p>
          <h2 className="mt-2 text-2xl font-black">A reproducible research pipeline</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">The thesis workflow separates data preparation, feature engineering, model comparison and risk interpretation so that each stage can be evaluated independently.</p>
          <div className="mt-8"><ResearchPipeline /></div>
        </section>
      </Reveal>

      <div className="mt-10 rounded-3xl border border-blue-100 bg-blue-50/70 p-6 md:flex md:items-center md:justify-between md:gap-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">For academic applications</p>
          <h2 className="mt-2 text-xl font-black text-slate-950">Research CV</h2>
          <p className="mt-2 max-w-2xl leading-7 text-slate-600">Research interests, thesis work, machine learning, NLP, deep learning and related academic activities.</p>
        </div>
        <Link href="/documents/Sakib_Khandakar_Research_CV.pdf" target="_blank" rel="noreferrer" className="mt-5 inline-flex shrink-0 items-center justify-center rounded-full bg-slate-950 px-5 py-3 font-bold text-white hover:bg-blue-700 md:mt-0">Open Research CV</Link>
      </div>

      <div className="mt-14"><SectionHeading eyebrow="Research interests" title="Areas I want to explore further" /></div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {interests.map(([title, text, Icon]) => {
          const InterestIcon = Icon as LucideIcon;
          return <Reveal key={title as string}><article className="glass-card h-full p-7"><div className="icon-box"><InterestIcon size={22} /></div><h3 className="mt-5 text-xl font-black">{title as string}</h3><p className="mt-3 leading-7 text-slate-600">{text as string}</p></article></Reveal>;
        })}
      </div>
    </div>
  );
}
