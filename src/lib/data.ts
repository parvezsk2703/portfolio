/**
 * ============================================================================
 *  SINGLE SOURCE OF TRUTH  —  edit ONLY this file to update your portfolio.
 *  Every section reads from here, so changing text/links never breaks layout.
 * ============================================================================
 */

import type { LucideIcon } from "lucide-react";
import {
  Database,
  BarChart3,
  Code2,
  Sigma,
  Brush,
  Table2,
  LineChart,
  GitBranch,
} from "lucide-react";

/* ----------------------------------- META ----------------------------------- */
export const SITE = {
  // TODO: replace with your real deployed URL after you go live (used for SEO).
  url: "https://parvezsk2703.vercel.app",
  ogImage: "/og.png", // optional — add public/og.png later for rich link previews
};

/* ----------------------------------- HERO ----------------------------------- */
export const PROFILE = {
  name: "Shaik Parvez",
  title: "Data Analyst",
  // Short, punchy value proposition — the first thing a recruiter reads.
  tagline:
    "Turning raw data into clear, decision-ready insight with SQL, Python & Power BI.",
  summary:
    "Detail-oriented Data Analyst skilled in Python, SQL, Power BI, and Excel with hands-on experience in EDA, DAX, Power Query, KPI Reporting, and Data Modeling. I build interactive dashboards and analytical reports that deliver actionable insights and support data-driven decision-making.",
  location: "Hyderabad, Telangana, India",
  email: "parvezsk2703@gmail.com",
  phone: "+91 9492918540",
  linkedin: "https://www.linkedin.com/in/parvezshaik2703/",
  github: "https://github.com/parvezsk2703",
  resume: "/Shaik_Parvez_Resume.pdf",
  // Career goal shown in the About section.
  goal:
    "Seeking a Data Analyst internship or entry-level role where I can apply my analytics, dashboarding, and problem-solving skills to drive measurable business impact while growing into an end-to-end analytics professional.",
};

/* --------------------------- HEADLINE STAT COUNTERS -------------------------- */
export const STATS: { label: string; value: number; suffix: string }[] = [
  { label: "Records Analyzed", value: 7000, suffix: "+" },
  { label: "SQL Queries Written", value: 20, suffix: "+" },
  { label: "Dashboards Built", value: 2, suffix: "" },
  { label: "Hackathon Rank", value: 8, suffix: "th" },
];

/* ---------------------------------- SKILLS ---------------------------------- */
export type Skill = { name: string; level: number; icon: LucideIcon };

export const SKILLS: { group: string; items: Skill[] }[] = [
  {
    group: "Core Analytics",
    items: [
      { name: "SQL (MySQL)", level: 88, icon: Database },
      { name: "Python", level: 85, icon: Code2 },
      { name: "Power BI / DAX", level: 87, icon: BarChart3 },
      { name: "Excel (Pivot, VLOOKUP)", level: 90, icon: Table2 },
    ],
  },
  {
    group: "Methods & Concepts",
    items: [
      { name: "Statistics", level: 78, icon: Sigma },
      { name: "Data Cleaning", level: 90, icon: Brush },
      { name: "Data Visualization", level: 86, icon: LineChart },
      { name: "Data Modeling / Git", level: 80, icon: GitBranch },
    ],
  },
];

// Flat keyword cloud (also good for ATS / quick scanning).
export const SKILL_TAGS = [
  "Python", "SQL", "MySQL", "Power BI", "DAX", "Power Query", "Excel",
  "EDA", "KPI Reporting", "Statistics", "Pandas", "NumPy", "Matplotlib",
  "Seaborn", "BeautifulSoup", "Requests", "Data Cleaning", "Feature Engineering",
  "Data Visualization", "Business Intelligence", "Jupyter Notebook", "Git", "GitHub",
];

/* --------------------------------- PROJECTS --------------------------------- */
export type Project = {
  title: string;
  blurb: string;
  problem: string;
  dataset: string;
  tools: string[];
  insights: string[];
  impact: string;
  github: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Customer Churn Analysis",
    blurb: "Identified what drives customers to leave and how much it costs.",
    problem:
      "A subscription business was losing customers without understanding which segments or behaviors were driving churn.",
    dataset: "7,000+ customer records (contracts, tenure, services, billing).",
    tools: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    insights: [
      "Uncovered key churn drivers — contract type, tenure, and service usage — via segmentation analysis.",
      "Quantified a 26.54% churn rate and its INR 139K revenue-loss impact through KPI and churn analysis.",
      "Pinpointed high-risk customer segments most likely to leave.",
    ],
    impact:
      "Delivered targeted retention recommendations enabling stakeholders to focus efforts on the segments with the highest revenue at risk.",
    github: "https://github.com/parvezsk2703/Customer-Churn-Analysis-Power-BI-Project",
  },
  {
    title: "World Wide Energy Consumption Analysis",
    blurb: "Connected energy, GDP, population & emissions to reveal global trends.",
    problem:
      "Global energy and economic indicators lived in separate datasets, making cross-country trend analysis impossible at a glance.",
    dataset:
      "6 interconnected datasets spanning energy consumption, GDP, population, and emissions.",
    tools: ["SQL", "MySQL", "Data Modeling", "Data Analysis"],
    insights: [
      "Integrated 6 datasets into one queryable model to uncover global energy trends.",
      "Wrote 20+ SQL queries using JOINs, CTEs, and aggregate functions for trend & emissions analysis.",
      "Identified energy-consumption patterns across 5 major economies by correlating GDP and emissions.",
    ],
    impact:
      "Produced a reusable analytical model that turns scattered global indicators into comparable, decision-ready trends.",
    github: "https://github.com/parvezsk2703/World-Wide-Energy-Consumption-Analysis",
  },
  {
    title: "Google Pixel Mobile Data Analysis",
    blurb: "Automated web scraping + EDA to decode smartphone pricing trends.",
    problem:
      "Smartphone pricing, specs, and ratings were scattered across e-commerce listings with no structured dataset to analyze.",
    dataset: "550+ smartphone records scraped from Flipkart.",
    tools: ["Python", "Pandas", "NumPy", "BeautifulSoup", "Requests", "EDA"],
    insights: [
      "Built an automated scraping pipeline extracting and structuring 550+ records.",
      "Performed cleaning, preprocessing, and feature engineering to create analysis-ready data.",
      "Analyzed pricing, ratings, RAM, and storage trends for actionable comparisons.",
    ],
    impact:
      "Generated business insights on price-vs-spec trade-offs to inform product comparison and buying decisions.",
    github: "https://github.com/parvezsk2703/Google-Pixel-Mobile-Data-Scraping-Analysis",
  },
];

/* -------------------------------- EXPERIENCE -------------------------------- */
export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Data Analyst Intern",
    company: "UnlockDiscounts",
    location: "Remote",
    period: "Mar 2026 – Jul 2026",
    points: [
      "Analyzed business and customer datasets using Excel (Pivot Tables) and Power BI to identify trends, track KPIs, and support data-driven decision-making.",
      "Performed data cleaning, transformation, and validation to improve data quality and ensure accurate reporting.",
      "Built 2 interactive dashboards independently within a 5-member analyst team, tracking KPIs and business-performance metrics for stakeholders.",
      "Created analytical reports helping stakeholders evaluate key metrics, identify trends, and support business decisions.",
    ],
  },
];

/* ------------------------------- CERTIFICATIONS ------------------------------ */
export type Cert = { name: string; issuer: string; date: string };

export const CERTS: Cert[] = [
  { name: "Certification in Data Analysis", issuer: "Innomatics Research Labs", date: "Mar 2026" },
  { name: "McKinsey Academy Forward Program", issuer: "McKinsey & Company", date: "Dec 2025" },
  { name: "SQL Certification", issuer: "HackerRank", date: "Mar 2026" },
  { name: "Power BI Certification", issuer: "Innomatics Research Labs", date: "Mar 2026" },
];

/* -------------------------------- ACHIEVEMENTS ------------------------------- */
export const ACHIEVEMENTS = [
  "Secured 8th Rank (Top 10) in the AMD Slingshot Hackathon — a national-level AI & innovation challenge by AMD.",
];

/* ----------------------- ANALYTICS SHOWCASE (KPI cards) --------------------- */
export const KPIS: { label: string; value: string; delta: string; positive: boolean }[] = [
  { label: "Churn Rate", value: "26.54%", delta: "identified", positive: false },
  { label: "Revenue at Risk", value: "₹139K", delta: "quantified", positive: false },
  { label: "Records Modeled", value: "7,000+", delta: "analyzed", positive: true },
  { label: "Economies Compared", value: "5", delta: "benchmarked", positive: true },
];

// A real SQL snippet shown in the analytics showcase (purely illustrative).
export const SQL_SAMPLE = `-- Churn rate & revenue at risk by contract type
SELECT
    contract_type,
    COUNT(*)                                   AS customers,
    SUM(churned)                               AS churned,
    ROUND(100.0 * SUM(churned) / COUNT(*), 2)  AS churn_rate_pct,
    SUM(CASE WHEN churned = 1 THEN monthly_charges END) AS revenue_at_risk
FROM customers
GROUP BY contract_type
ORDER BY churn_rate_pct DESC;`;
