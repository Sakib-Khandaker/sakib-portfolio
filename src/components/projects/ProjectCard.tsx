import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={450}
        className="h-56 w-full object-cover"
      />

      <div className="p-7">
        <h2 className="text-2xl font-bold">{project.title}</h2>

        <p className="mt-3 leading-7 text-slate-600">
          {project.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
        >
          View project
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}