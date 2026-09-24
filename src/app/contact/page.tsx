import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Get in Touch"
        description="For research collaboration, software development, internship or professional opportunities."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        
        {/* Contact Information */}
        <div className="rounded-2xl bg-slate-50 p-8">
          <h2 className="text-2xl font-bold">
            Contact Information
          </h2>

          <div className="mt-8 space-y-6">

            {/* Email */}
            <div className="flex gap-4">
              <Mail className="mt-1 text-blue-600" size={20} />

              <div>
                <p className="font-semibold">Email</p>

                <a
                  href="mailto:sakibkhandaker21@gmail.com"
                  className="text-slate-600 hover:text-blue-600"
                >
                  sakibkhandaker21@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <Phone className="mt-1 text-blue-600" size={20} />

              <div>
                <p className="font-semibold">Phone</p>

                <a
                  href="tel:+8801915608340"
                  className="text-slate-600 hover:text-blue-600"
                >
                  +880 1915-608340
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <MapPin className="mt-1 text-blue-600" size={20} />

              <div>
                <p className="font-semibold">Location</p>
                <p className="text-slate-600">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>

            {/* Facebook */}
            <div className="flex gap-4">
              <FaFacebookF
                className="mt-1 text-blue-600"
                size={20}
              />

              <div>
                <p className="font-semibold">Facebook</p>

                <a
                  href="https://www.facebook.com/mdsakib.khandakar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600"
                >
                  facebook.com/mdsakib.khandakar
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex gap-4">
              <FaLinkedinIn
                className="mt-1 text-blue-600"
                size={20}
              />

              <div>
                <p className="font-semibold">LinkedIn</p>

                <a
                  href="https://www.linkedin.com/in/sakib-khandaker-72b168252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600"
                >
                  linkedin.com/in/sakib-khandaker-72b168252
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <form className="rounded-2xl border border-slate-200 p-8">
          <div className="space-y-5">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <button
              type="button"
              className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Message
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}