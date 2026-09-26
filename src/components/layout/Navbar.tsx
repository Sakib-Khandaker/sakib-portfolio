"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== "/about" && pathname.startsWith(`${href}/`));

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" onClick={() => setOpen(false)} className="text-2xl font-black tracking-tight text-slate-950">
          Sakib<span className="text-blue-600">.</span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-slate-950 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <Link href="/cv" className="ml-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700">
            View CVs
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-xl p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-3 py-3 font-medium transition ${active ? "bg-slate-950 text-white" : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"}`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link href="/cv" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white">
              View CVs
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
