import {
  Code2,
  Trophy,
  Users,
  Brain,
  Award,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";

const achievements = [
  {
    icon: Trophy,
    title: "ICPC Participation",
    description:
      "Participated in ICPC programming contests multiple times.",
  },
  {
    icon: Code2,
    title: "Competitive Programming",
    description:
      "Regularly engaged in competitive programming and problem solving.",
  },
  {
    icon: Users,
    title: "50+ Seminars",
    description:
      "Participated in more than 50 seminars and technical or academic events.",
  },
  {
    icon: Award,
    title: "National Conferences",
    description:
      "Participated in national academic and professional conferences.",
  },
  {
    icon: Brain,
    title: "Robotics Activities",
    description:
      "Participated multiple times in national robotics activities.",
  },
  {
    icon: Users,
    title: "Event Management",
    description:
      "Contributed to the organization of university technical and student activities.",
  },
];

export default function AchievementsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20">
      <SectionHeading
        eyebrow="Achievements"
        title="Activities & Achievements"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-md"
            >
              <Icon className="text-blue-600" size={28} />

              <h2 className="mt-5 text-xl font-bold">
                {item.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}