"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, FileCode2 } from "lucide-react";
import { KPIS, DAX_SAMPLE } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

// Illustrative churn rate by contract type (Power BI churn project).
const BARS = [
  { label: "Month-to-month", v: 88, color: "from-rose-500 to-rose-400" },
  { label: "One year", v: 42, color: "from-amber-500 to-amber-400" },
  { label: "Two year", v: 18, color: "from-emerald-500 to-emerald-400" },
];

export default function AnalyticsShowcase() {
  return (
    <section id="showcase" className="section-pad">
      <SectionHeading
        eyebrow="07 — In Action"
        title="Analytics Showcase"
        subtitle="A glimpse of the metrics I surface and the logic behind them."
      />

      {/* KPI cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {KPIS.map((k, i) => (
          <motion.div
            key={k.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08 }}
            className="glass relative overflow-hidden p-5"
          >
            <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-accent-cyan/10 blur-2xl" />
            <p className="text-xs uppercase tracking-wide text-slate-400">{k.label}</p>
            <p className="mt-2 text-3xl font-bold text-white">{k.value}</p>
            <span
              className={`mt-2 inline-flex items-center gap-1 text-xs font-medium ${
                k.positive ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {k.positive ? (
                <ArrowUpRight className="h-3.5 w-3.5" />
              ) : (
                <ArrowDownRight className="h-3.5 w-3.5" />
              )}
              {k.delta}
            </span>
          </motion.div>
        ))}
      </div>

      {/* DAX sample + mini bar chart */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="glass overflow-hidden"
        >
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <FileCode2 className="h-4 w-4 text-accent-cyan" />
            <span className="font-mono text-xs text-slate-400">churn_measures.dax</span>
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-relaxed text-slate-300">
            <code>{DAX_SAMPLE}</code>
          </pre>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="glass flex flex-col p-6"
        >
          <p className="mb-6 text-sm font-semibold text-white">
            Churn Rate by Contract Type{" "}
            <span className="text-slate-500">(illustrative)</span>
          </p>
          {/* Fixed-height plot area so the percentage bar heights resolve correctly. */}
          <div className="flex h-52 items-end justify-around gap-4">
            {BARS.map((bar) => (
              <div
                key={bar.label}
                className="flex h-full w-full max-w-[72px] flex-col items-center justify-end"
              >
                <span className="mb-2 text-xs font-semibold text-white">{bar.v}%</span>
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${bar.v}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`w-full rounded-t-lg bg-gradient-to-t ${bar.color}`}
                />
              </div>
            ))}
          </div>
          {/* x-axis labels */}
          <div className="mt-3 flex justify-around gap-4">
            {BARS.map((bar) => (
              <span
                key={bar.label}
                className="w-full max-w-[72px] text-center text-[10px] leading-tight text-slate-400"
              >
                {bar.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
