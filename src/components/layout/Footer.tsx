import Link from "next/link";
import { Mail } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <div>
            <p className="font-semibold text-white">Sakib Khandakar</p>
            <p className="mt-1 text-sm">
              Software Developer · Machine Learning Researcher
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://www.facebook.com/mdsakib.khandaker"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white"
            >
              <FaFacebookF size={16} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/sakib-khandaker-72b168252/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white"
            >
              <FaLinkedinIn size={16} />
            </Link>

            <Link
              href="https://github.com/Sakib-Khandaker"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 transition hover:border-slate-500 hover:bg-slate-800 hover:text-white"
            >
              <FaGithub size={17} />
            </Link>

            <Link
              href="mailto:sakibkhandaker21@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white"
            >
              <Mail size={18} />
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Sakib Khandakar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}