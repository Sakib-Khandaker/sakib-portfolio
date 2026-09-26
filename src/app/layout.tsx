import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sakib-portfolio-jtkesjgc9-sakib-khandakar.vercel.app"),
  title: "Sakib Khandakar | Software Developer & ML Researcher",
  description: "Portfolio of Sakib Khandakar, Computer Science and Engineering graduate working across software development, machine learning, NLP and spatio-temporal modeling.",
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sakib Khandakar | Software Developer & ML Researcher",
    description: "Software development, machine learning research, NLP and spatio-temporal modeling.",
    type: "website",
    url: "/",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Sakib Khandakar portfolio" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-white text-slate-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
