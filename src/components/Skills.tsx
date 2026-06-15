"use client";

import { motion } from "framer-motion";
import { SKILLS, SKILL_TAGS } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBar from "@/components/ui/SkillBar";

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <SectionHeading
        eyebrow="02 — Skills"
        title="Skills Dashboard"
        subtitle="The analytics toolkit I use to take data from raw to decision-ready."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {SKILLS.map((grp, gi) => (
          <motion.div
            key={grp.group}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: gi * 0.1 }}
            className="glass p-6"
          >
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-accent-cyan">
              {grp.group}
            </h3>
            <div className="space-y-5">
              {grp.items.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} icon={s.icon} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Keyword cloud */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {SKILL_TAGS.map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.02 }}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300 transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
