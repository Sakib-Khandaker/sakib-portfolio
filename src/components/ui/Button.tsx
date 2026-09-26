import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

export default function Button({ children, href, variant = "primary" }: ButtonProps) {
  const classes = variant === "primary"
    ? "inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 font-semibold text-white shadow-lg shadow-slate-950/10 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-blue-600/20"
    : "inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition duration-300 hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-500/10";

  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button type="button" className={classes}>{children}</button>;
}
