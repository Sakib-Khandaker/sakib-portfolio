import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Brain, FolderGit2, Mail, MapPin, Sparkles } from "lucide-react";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import HeroScene from "@/components/home/HeroScene";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

const focusAreas = [
  { title: "Machine Learning", text: "Predictive modeling, ensemble methods and practical data-driven systems.", icon: Brain },
  { title: "Research", text: "NLP, deep learning and spatio-temporal modeling for real-world problems.", icon: Sparkles },
  { title: "Software", text: "Web, desktop and backend applications with maintainable engineering practices.", icon: FolderGit2 },
];

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="overflow-hidden">
      <section className="hero-section">
        <div className="hero-noise" />
        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div className="relative z-10 animate-fade-up">
            <Badge>Computer Science & Engineering</Badge>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Software • Machine Learning • Research</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-[-0.045em] text-slate-950 md:text-7xl">
              Sakib <span className="text-gradient">Khandakar</span>
            </h1>
            <h2 className="mt-6 max-w-2xl text-2xl font-bold leading-tight text-slate-800 md:text-3xl">
              Software Developer & Machine Learning Researcher
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Computer Science and Engineering graduate from Jashore University of Science and Technology, working across software development, machine learning, NLP and spatio-temporal modeling.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/projects">View Projects <ArrowRight className="ml-2" size={17} /></Button>
              <Button href="/research" variant="secondary">Explore Research</Button>
              <Button href="/cv" variant="secondary">View CVs</Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2"><MapPin size={16} /> Bangladesh</span>
              <Link href="/contact" className="inline-flex items-center gap-2 font-semibold text-slate-700 hover:text-blue-600"><Mail size={16} /> Let's connect</Link>
            </div>
          </div>

          <div className="relative z-10 animate-fade-up animation-delay-150">
            <HeroScene />
            <div className="mx-auto mt-5 flex max-w-md items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              <span className="h-px flex-1 bg-slate-200" /> Move your cursor
              <span className="h-px flex-1 bg-slate-200" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Profile" title="What I work on" description="A focused mix of software engineering, machine learning research and applied data work." />
          <Reveal className="mt-10"><div className="grid gap-5 md:grid-cols-3">
            {focusAreas.map(({ title, text, icon: Icon }, index) => (
              <Link key={title} href={index === 0 ? "/skills" : index === 1 ? "/research" : "/projects"} className="glass-card group p-7">
                <div className="icon-box"><Icon size={22} /></div>
                <h3 className="mt-6 text-xl font-bold text-slate-950">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition group-hover:gap-3">Explore <ArrowRight size={15} /></span>
              </Link>
            ))}
          </div></Reveal>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <SectionHeading eyebrow="Selected Work" title="Featured Projects" />
            <Link href="/projects" className="font-semibold text-blue-400 transition hover:text-blue-300">View all projects →</Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Link href={`/projects/${project.slug}`} key={project.slug} className={`dark-project-card group animate-fade-up animation-delay-${Math.min(index * 100, 200)}`}>
                <div className="project-number">0{index + 1}</div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">Project</p>
                <h3 className="mt-3 text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{project.shortDescription}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((technology) => <span key={technology} className="dark-tag">{technology}</span>)}
                </div>
                <span className="mt-8 inline-flex items-center gap-2 font-semibold text-white transition group-hover:gap-3">View project <ArrowRight size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 p-3 shadow-2xl">
            <Image src="/images/profile/profile.jpg" alt="Sakib Khandakar" width={700} height={850} className="h-[460px] w-full rounded-2xl object-cover opacity-95" />
            <div className="absolute inset-x-7 bottom-7 rounded-2xl border border-white/15 bg-slate-950/75 p-5 text-white backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Currently focused on</p>
              <p className="mt-2 text-lg font-bold">Machine Learning · NLP · Spatio-Temporal Modeling</p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="About" title="Building with data and software" />
            <p className="mt-7 text-lg leading-8 text-slate-600">My academic and project work combines software development with machine learning and data analysis. My recent research focuses on forecasting road accident indicators across Bangladesh and translating model outputs into interpretable risk analysis.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="stat-card"><strong>8</strong><span>Bangladesh divisions studied</span></div>
              <div className="stat-card"><strong>3,120</strong><span>processed records in the core dataset</span></div>
            </div>
            <div className="mt-8"><Button href="/about" variant="secondary">More about me <ArrowRight className="ml-2" size={17} /></Button></div>
          </div>
        </div>
      </section>
    </div>
  );
}
