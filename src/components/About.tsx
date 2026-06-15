"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, User } from "lucide-react";
import { PROFILE } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <SectionHeading eyebrow="01 — About" title="Who I Am" />

      <div className="grid gap-6 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="glass glass-hover p-6 md:col-span-2"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-xl bg-accent-cyan/10 p-2 text-accent-cyan">
              <User className="h-5 w-5" />
            </span>
            <h3 className="text-lg font-semibold text-white">Professional Summary</h3>
          </div>
          <p className="text-sm leading-relaxed text-slate-300">{PROFILE.summary}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.1 }}
          className="glass glass-hover p-6"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-xl bg-accent-violet/10 p-2 text-accent-violet">
              <GraduationCap className="h-5 w-5" />
            </span>
            <h3 className="text-lg font-semibold text-white">Education</h3>
          </div>
          <p className="text-sm font-medium text-white">
            B.Tech, Computer Science & Engineering
          </p>
          <p className="mt-1 text-sm text-slate-400">
            Sri Chaitanya Institute of Technology and Research
          </p>
          <p className="mt-1 text-xs text-slate-500">Khammam, Telangana · Oct 2021 – Jul 2025</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.15 }}
          className="glass glass-hover p-6 md:col-span-3"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-xl bg-accent-blue/10 p-2 text-accent-blue">
              <Target className="h-5 w-5" />
            </span>
            <h3 className="text-lg font-semibold text-white">Career Goal</h3>
          </div>
          <p className="text-sm leading-relaxed text-slate-300">{PROFILE.goal}</p>
        </motion.div>
      </div>
    </section>
  );
}
