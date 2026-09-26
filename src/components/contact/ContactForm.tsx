"use client";
import { FormEvent, useState } from "react";
const email = "sakibkhandaker21@gmail.com";
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const sender = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    const subject = name ? `Portfolio inquiry from ${name}` : "Portfolio inquiry";
    const body = `Name: ${name}\nEmail: ${sender}\n\n${message}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  return <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-9"><div className="space-y-5">
    <div><label htmlFor="name" className="mb-2 block text-sm font-semibold">Name</label><input id="name" name="name" required placeholder="Your name" className="contact-input" /></div>
    <div><label htmlFor="email" className="mb-2 block text-sm font-semibold">Email</label><input id="email" name="email" type="email" required placeholder="your@email.com" className="contact-input" /></div>
    <div><label htmlFor="message" className="mb-2 block text-sm font-semibold">Message</label><textarea id="message" name="message" required rows={6} placeholder="Tell me what you would like to discuss..." className="contact-input resize-y" /></div>
    <button type="submit" className="w-full rounded-xl bg-slate-950 px-5 py-3.5 font-bold text-white transition hover:bg-blue-600">Open email to send</button>
    {sent && <p className="text-sm text-slate-500">Your email app should now open with the message prepared.</p>}
  </div></form>;
}
