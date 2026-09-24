import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  FolderGit2,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Badge>Computer Science & Engineering</Badge>

            <h1 className="mt-5 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
              Sakib
              <span className="text-blue-600"> Khandakar</span>
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-slate-700">
              Software Developer & Machine Learning Researcher
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              CSE student at Jashore University of Science and Technology with
              interests in Machine Learning, Deep Learning, NLP,
              Spatio-Temporal Modeling, and Intelligent Systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/research">
                Research
                <ArrowRight className="ml-2" size={17} />
              </Button>

              <Button href="/projects" variant="secondary">
                View Projects
              </Button>
            </div>

            <div className="mt-7 flex items-center gap-2 text-sm text-slate-500">
              <MapPin size={16} />
              Bangladesh
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl">
              <Image
                src="/images/profile/profile.jpg"
                alt="Sakib Khandakar"
                width={400}
                height={500}
                className="h-[430px] w-[340px] rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Short Intro */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Profile"
            title="What I work on"
            description="My portfolio separates academic research, technical skills, projects, experience, and leadership activities so each area can be explored in detail."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Link
              href="/research"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <Brain className="text-blue-600" />
              <h3 className="mt-5 text-xl font-bold">Research</h3>
              <p className="mt-2 text-slate-600">
                ML, NLP, Deep Learning and spatio-temporal modeling.
              </p>
            </Link>

            <Link
              href="/projects"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <FolderGit2 className="text-blue-600" />
              <h3 className="mt-5 text-xl font-bold">Projects</h3>
              <p className="mt-2 text-slate-600">
                Software, web, data and machine learning projects.
              </p>
            </Link>

            <Link
              href="/contact"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <Mail className="text-blue-600" />
              <h3 className="mt-5 text-xl font-bold">Contact</h3>
              <p className="mt-2 text-slate-600">
                Research, collaboration and professional opportunities.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Selected Work"
              title="Featured Projects"
            />

            <Link
              href="/projects"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              View all projects →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-semibold text-blue-600">
                  Project
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {project.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}