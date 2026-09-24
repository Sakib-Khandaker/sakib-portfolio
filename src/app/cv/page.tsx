import Link from "next/link";
import { Download, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CVPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="Curriculum Vitae"
        title="My CV"
        description="View or download my current curriculum vitae."
      />

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="/documents/cv.pdf"
          download
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
        >
          <Download size={18} />
          Download CV
        </a>

        <Link
          href="/documents/cv.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
        >
          <ExternalLink size={18} />
          Open PDF
        </Link>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
        <iframe
          src="/documents/cv.pdf"
          title="Sakib Khandakar CV"
          className="h-[900px] w-full"
        />
      </div>
    </div>
  );
}