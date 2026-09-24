import Link from "next/link";
import Badge from "@/components/ui/Badge";

type ResearchCardProps = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

export default function ResearchCard({
  title,
  description,
  tags,
  href = "/research",
}: ResearchCardProps) {
  return (
    <Link
      href={href}
      className="block rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>

      <p className="mt-3 leading-7 text-slate-600">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </Link>
  );
}