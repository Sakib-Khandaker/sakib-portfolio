import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-20">
      <SectionHeading
        eyebrow="Experience"
        title="Professional Experience"
      />

      <div className="mt-12 space-y-8">
        {experiences.map((experience) => (
          <article
            key={`${experience.organization}-${experience.role}`}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold text-blue-600">
              {experience.type}
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              {experience.role}
            </h2>

            <p className="mt-2 text-lg font-medium text-slate-700">
              {experience.organization}
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              {experience.description}
            </p>

            <h3 className="mt-7 font-semibold">Responsibilities</h3>

            <ul className="mt-4 space-y-3 text-slate-600">
              {experience.responsibilities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}