export default function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600">{eyebrow}</p>}
      <h1 className="mt-2 text-4xl font-black tracking-[-0.035em] text-slate-950 md:text-5xl">{title}</h1>
      {description && <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>}
    </div>
  );
}
