"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, MapPin } from "lucide-react";
import { PROFILE } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // No backend needed: compose a prefilled email via the user's mail client.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="section-pad">
      <SectionHeading
        eyebrow="08 — Contact"
        title="Let's Work Together"
        subtitle="Open to Data Analyst internships and entry-level roles. I usually reply within a day."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* contact cards */}
        <div className="space-y-4">
          <ContactRow icon={Mail} label="Email" value={PROFILE.email} href={`mailto:${PROFILE.email}`} />
          <ContactRow icon={Phone} label="Phone" value={PROFILE.phone} href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} />
          <ContactRow icon={Linkedin} label="LinkedIn" value="linkedin.com/in/parvezshaik2703" href={PROFILE.linkedin} />
          <ContactRow icon={Github} label="GitHub" value="github.com/parvezsk2703" href={PROFILE.github} />
          <div className="glass flex items-center gap-4 p-5">
            <span className="rounded-xl bg-accent-cyan/10 p-3 text-accent-cyan">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">Location</p>
              <p className="text-sm font-medium text-white">{PROFILE.location}</p>
            </div>
          </div>
        </div>

        {/* form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="glass space-y-4 p-6"
        >
          <Field label="Name" name="name" placeholder="Recruiter / Hiring Manager" />
          <Field label="Email" name="email" type="email" placeholder="you@company.com" />
          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Tell me about the role…"
              className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-accent-cyan/50"
            />
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-violet px-6 py-3 text-sm font-semibold text-base-900 transition-transform hover:scale-[1.02]"
          >
            <Send className="h-4 w-4" /> {sent ? "Opening your email…" : "Send Message"}
          </button>
          <p className="text-center text-[11px] text-slate-500">
            This opens your email app with the message pre-filled.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="glass glass-hover flex items-center gap-4 p-5"
    >
      <span className="rounded-xl bg-accent-violet/10 p-3 text-accent-violet">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
        <p className="text-sm font-medium text-white">{value}</p>
      </div>
    </a>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-medium text-slate-300">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-accent-cyan/50"
      />
    </div>
  );
}
