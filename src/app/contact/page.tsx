import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
const contactItems = [
  { label: "Email", value: "sakibkhandaker21@gmail.com", href: "mailto:sakibkhandaker21@gmail.com", icon: Mail },
  { label: "Phone", value: "+880 1915-608340", href: "tel:+8801915608340", icon: Phone },
  { label: "Location", value: "Dhaka, Bangladesh", href: undefined, icon: MapPin },
];
export default function ContactPage() {
  return <div className="mx-auto max-w-6xl px-5 py-20"><SectionHeading eyebrow="Contact" title="Let's discuss a project or research idea" description="For research collaboration, software development, internship and professional opportunities." /><div className="mt-12 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
    <div className="rounded-3xl bg-slate-950 p-8 text-white md:p-9"><p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">Available for</p><h2 className="mt-4 text-3xl font-black tracking-tight">Research, software and data-driven work.</h2><div className="mt-9 space-y-6">
      {contactItems.map(({ label, value, href, icon: Icon }) => <div key={label} className="flex gap-4"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-blue-300"><Icon size={18} /></div><div><p className="text-sm font-semibold text-slate-400">{label}</p>{href ? <a href={href} className="mt-1 block text-sm hover:text-blue-300">{value}</a> : <p className="mt-1 text-sm text-slate-200">{value}</p>}</div></div>)}
      <div className="flex gap-4"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-blue-300"><FaLinkedinIn size={17} /></div><div><p className="text-sm font-semibold text-slate-400">LinkedIn</p><a href="https://www.linkedin.com/in/sakib-khandaker-72b168252/" target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm hover:text-blue-300">sakib-khandaker-72b168252</a></div></div>
      <div className="flex gap-4"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-blue-300"><FaFacebookF size={16} /></div><div><p className="text-sm font-semibold text-slate-400">Facebook</p><a href="https://www.facebook.com/mdsakib.khandakar" target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm hover:text-blue-300">mdsakib.khandakar</a></div></div>
    </div></div><ContactForm /></div></div>;
}
