import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20">
      <SectionHeading
        eyebrow="About"
        title="About Me"
        description="A closer look at my academic background, technical interests and professional direction."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6 text-lg leading-8 text-slate-600">
          <p>
            I am a Computer Science and Engineering student at Jashore
            University of Science and Technology (JUST), Bangladesh.
          </p>

          <p>
            My primary interests include Machine Learning, Deep Learning,
            Natural Language Processing, Spatio-Temporal Modeling, Intelligent
            Systems, and data-driven problem solving.
          </p>

          <p>
            Alongside academic work, I have developed experience in software
            development, IT support, research activities, competitive
            programming, student leadership, and community initiatives.
          </p>

          <p>
            I am particularly interested in applying computational methods to
            real-world problems where structured data, prediction, automation,
            and intelligent decision support can be combined.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-7">
          <h3 className="text-xl font-bold">Research Interests</h3>

          <div className="mt-5 flex flex-wrap gap-2">
            <Badge>Machine Learning</Badge>
            <Badge>Deep Learning</Badge>
            <Badge>NLP</Badge>
            <Badge>Spatio-Temporal Modeling</Badge>
            <Badge>Intelligent Systems</Badge>
            <Badge>Compute Vision</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}