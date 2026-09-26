import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

export default function RoboticsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20">
      <SectionHeading eyebrow="Robotics" title="Robotics & Technical Activities" description="A concise record of robotics-related activities, workshops, competitions and technical collaboration." />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <article className="glass-card p-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Leadership</p>
          <h2 className="mt-3 text-2xl font-black">JUST Robo Society</h2>
          <p className="mt-4 leading-8 text-slate-600">Former President with experience in organizing robotics activities, technical events, workshops and member coordination.</p>
          <div className="mt-6 flex flex-wrap gap-2"><Badge>Robotics</Badge><Badge>Event Management</Badge><Badge>Technical Collaboration</Badge></div>
        </article>
        <article className="glass-card p-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Activities</p>
          <ul className="mt-5 space-y-3 leading-7 text-slate-600">
            <li>• Robotics and automation activities</li>
            <li>• Technical workshop organization</li>
            <li>• Regional International Robot Olympiad activities</li>
            <li>• Competition and member coordination</li>
          </ul>
        </article>
      </div>
    </div>
  );
}
