import SectionHeading from "@/components/ui/SectionHeading";

const organizations = [
  {
    name: "JUST Robo Society",
    role: "President",
    description:
      "Leading robotics-related activities, competitions, technical events and organizational initiatives.",
  },
  {
    name: "Narsingdi Student Association, JUST",
    role: "President",
    description:
      "Supporting student coordination, organizational activities and community engagement.",
  },
  {
    name: "JUST Research Society",
    role: "Office & Operations",
    description:
      "Contributing to research-related organizational activities and official operations.",
  },
  {
    name: "UNNOTO MOMO SHIR",
    role: "Founding Member",
    description:
      "Contributed to science festivals, flood relief, student support, blood donation, awareness programs and community initiatives.",
  },
  {
    name: "JUST CSE Club",
    role: "General Member",
    description:
      "Participated in programming, technical and departmental activities.",
  },
  {
    name: "JUST Blood Bank",
    role: "Member / Volunteer",
    description:
      "Participated in blood donation and community support activities.",
  },
];

export default function OrganizationsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20">
      <SectionHeading
        eyebrow="Leadership"
        title="Organizations & Activities"
        description="Leadership, teamwork and community involvement beyond academic work."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {organizations.map((organization) => (
          <article
            key={organization.name}
            className="rounded-2xl border border-slate-200 bg-white p-8"
          >
            <p className="text-sm font-semibold text-blue-600">
              {organization.role}
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              {organization.name}
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              {organization.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}