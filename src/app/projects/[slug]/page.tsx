import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

import Badge from "@/components/ui/Badge";
import { projects } from "@/data/projects";

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-20">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
      >
        <ArrowLeft size={16} />
        Back to projects
      </Link>

      <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={700}
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="mt-10">
        <h1 className="text-4xl font-bold md:text-5xl">
          {project.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          {project.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white"
            >
              GitHub
              <ExternalLink size={16} />
            </Link>
          )}

          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white"
            >
              Live Demo
              <ExternalLink size={16} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}