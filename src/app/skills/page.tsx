import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { skillGroups } from "@/data/skills";

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20">
      <SectionHeading
        eyebrow="Skills"
        title="Technical Skills"
        description="Programming, machine learning, research, software development and professional capabilities."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-2xl border border-slate-200 p-7"
          >
            <h2 className="text-xl font-bold">{group.title}</h2>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}