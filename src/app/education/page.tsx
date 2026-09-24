import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-20">
      <SectionHeading
        eyebrow="Education"
        title="Academic Background"
      />

      <div className="mt-12 border-l-2 border-blue-200 pl-8">
        <div className="relative">
          <div className="absolute -left-[47px] top-0 rounded-full bg-blue-600 p-2 text-white">
            <GraduationCap size={18} />
          </div>

          <p className="text-sm font-semibold text-blue-600">
            Undergraduate Degree
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            B.Sc. in Computer Science & Engineering
          </h2>

          <p className="mt-2 text-lg font-medium text-slate-700">
            Jashore University of Science and Technology (JUST)
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            Academic focus includes programming, algorithms, software
            engineering, databases, machine learning, artificial intelligence,
            and data-driven computing.
          </p>
        </div>
      </div>
    </div>
  );
}