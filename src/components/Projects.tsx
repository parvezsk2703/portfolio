"use client";

import { motion } from "framer-motion";
import { Github, Target, Database, Wrench, Lightbulb, TrendingUp } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <SectionHeading
        eyebrow="03 — Projects"
        title="Featured Projects"
        subtitle="End-to-end analyses — from problem and data to insight and business impact."
      />

      <div className="space-y-6">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.05 }}
            className="glass glass-hover group p-6 sm:p-8"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-accent-cyan">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{p.blurb}</p>
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
              >
                <Github className="h-4 w-4" /> View Code
              </a>
            </div>

            {/* tool chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-accent-cyan/10 px-2.5 py-1 font-mono text-[11px] text-accent-cyan"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Detail icon={Target} label="Problem" text={p.problem} />
              <Detail icon={Database} label="Dataset" text={p.dataset} />
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent-violet">
                <Lightbulb className="h-4 w-4" /> Key Insights
              </div>
              <ul className="space-y-1.5">
                {p.insights.map((ins) => (
                  <li key={ins} className="flex gap-2 text-sm text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                    {ins}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 rounded-xl border border-accent-cyan/20 bg-accent-cyan/[0.06] p-4">
              <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent-cyan">
                <TrendingUp className="h-4 w-4" /> Business Impact
              </div>
              <p className="text-sm text-slate-200">{p.impact}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Detail({
  icon: Icon,
  label,
  text,
}: {
  icon: typeof Target;
  label: string;
  text: string;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
        <Icon className="h-4 w-4" /> {label}
      </div>
      <p className="text-sm text-slate-300">{text}</p>
    </div>
  );
}
