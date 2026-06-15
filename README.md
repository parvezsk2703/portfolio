# Shaik Parvez — Data Analyst Portfolio

A premium, recruiter-focused 3D portfolio built with **Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Three.js (React Three Fiber)** and **Lucide** icons. Dark theme, glassmorphism, animated 3D hero, scroll animations, and a fully responsive, SEO-optimized, accessible layout.

---

## ✨ Features

- Animated **3D hero** (floating data-cubes + particle field + mouse parallax)
- Branded **loading screen**
- **Skills dashboard** with animated proficiency bars + keyword cloud
- **Projects** with Problem → Dataset → Tools → Insights → Business Impact
- **Experience timeline** with scroll animation
- **Analytics showcase**: KPI cards, a sample SQL query, and an animated mini bar chart
- **Certifications** badges + **Achievements** section
- **Contact** form (opens email client — no backend needed) + social links
- Animated **stat counters**, smooth scrolling, micro-interactions
- **SEO**: metadata, Open Graph, JSON-LD, sitemap.xml, robots.txt
- **Accessibility**: semantic HTML, ARIA labels, `prefers-reduced-motion` support
- Performance: 3D is lazy-loaded client-side and capped DPR; no heavy effects on mobile critical path

---

## 🗂 Folder Structure

```
portfolio/
├── public/
│   └── Shaik_Parvez_Resume.pdf      # your downloadable résumé (replace anytime)
├── src/
│   ├── app/
│   │   ├── layout.tsx               # fonts, SEO metadata, JSON-LD
│   │   ├── page.tsx                 # assembles all sections in order
│   │   ├── globals.css              # theme, glassmorphism, scrollbar
│   │   ├── sitemap.ts               # /sitemap.xml
│   │   └── robots.ts                # /robots.txt
│   ├── components/
│   │   ├── Scene3D.tsx              # Three.js / R3F 3D background
│   │   ├── Loader.tsx  Navbar.tsx  Hero.tsx
│   │   ├── About.tsx   Skills.tsx  Projects.tsx  Experience.tsx
│   │   ├── AnalyticsShowcase.tsx  Certifications.tsx  Achievements.tsx
│   │   ├── Contact.tsx  Footer.tsx
│   │   └── ui/                      # SectionHeading, Counter, SkillBar
│   └── lib/
│       ├── data.ts                  # ⭐ ALL your content lives here
│       └── utils.ts                 # cn() class helper
├── package.json  tsconfig.json  tailwind.config.ts  next.config.mjs
└── README.md
```

---

## 🚀 Run Locally

```bash
cd portfolio
npm install        # first time only
npm run dev        # start dev server
```

Open **http://localhost:3000**. Edits hot-reload instantly.

To preview the production build:

```bash
npm run build && npm start
```

---

## ✏️ Update Content Later (without breaking anything)

**Everything you'd want to change lives in one file: `src/lib/data.ts`.**

- Change your **summary, title, tagline, links** → `PROFILE`
- Add/edit **projects** → `PROJECTS`
- Edit **skills + levels** → `SKILLS` / `SKILL_TAGS`
- **Experience, certifications, achievements** → their respective arrays
- **Replace your résumé** → drop a new PDF in `public/` and update `PROFILE.resume`

You never need to touch the components. After editing, just `git push` — your host redeploys automatically.

> After you go live, set your real URL in `SITE.url` (in `data.ts`) so SEO/sitemap point to the correct domain.

---

## 🌍 Deploy & Make It Public Worldwide

### Option A — Vercel (recommended, free, 2 minutes)

1. Push this project to GitHub (see below).
2. Go to **https://vercel.com** → sign in with GitHub.
3. **Add New → Project** → import your `portfolio` repo.
4. Vercel auto-detects Next.js. Click **Deploy**.
5. You get a public URL like `https://shaik-parvez.vercel.app` — live worldwide, HTTPS included.

Every future `git push` auto-deploys.

### Push to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Portfolio: initial commit"
git branch -M main
git remote add origin https://github.com/shaikparvez/portfolio.git
git push -u origin main
```

(Create the empty `portfolio` repo first at github.com/new.)

### Option B — Netlify

1. Push to GitHub (above).
2. **https://netlify.com** → **Add new site → Import from Git** → pick the repo.
3. Build command: `npm run build` · Publish directory: `.next` (Netlify's Next.js plugin handles the rest).
4. Deploy → you get a public `*.netlify.app` URL.

### Option C — GitHub Pages (static export)

GitHub Pages only serves static files, so enable static export first:

1. In `next.config.mjs` add: `output: "export"` and (if repo isn't `username.github.io`) `basePath: "/portfolio"`.
2. `npm run build` → produces an `out/` folder.
3. Push `out/` to a `gh-pages` branch, or use the official `actions/deploy-pages` workflow.
4. Repo **Settings → Pages** → set source to GitHub Actions.

> Note: the 3D hero works on static export (it's client-side). Vercel is still the smoothest path.

### 🌐 Custom Domain (e.g. shaikparvez.com)

1. Buy a domain (Namecheap, GoDaddy, Google Domains, etc.).
2. **Vercel**: Project → **Settings → Domains → Add** → enter your domain.
3. In your registrar's DNS, add the records Vercel shows (usually an `A` record to `76.76.21.21` and/or a `CNAME` to `cname.vercel-dns.com`).
4. Wait for DNS to propagate (minutes–hours). HTTPS is automatic.

---

## 🔍 SEO Checklist (already wired)

- ✅ Title, description, keywords, author (`layout.tsx`)
- ✅ Open Graph + Twitter cards
- ✅ JSON-LD `Person` structured data
- ✅ `sitemap.xml` + `robots.txt`
- ⬜ Add `public/og.png` (1200×630) for rich link previews, then it's auto-used
- ⬜ Submit your live URL to [Google Search Console](https://search.google.com/search-console)

---

## 💡 Ideas to Boost Recruiter Attraction (optional)

1. **Add a real OG image** so your link looks premium when shared on LinkedIn/WhatsApp.
2. **Embed live dashboards** — replace the illustrative bar chart with a real Power BI "publish to web" iframe.
3. **Link each project** to its actual GitHub repo + a short Loom video walkthrough.
4. **Add a blog / case-study page** for one project (great for SEO and credibility).
5. **Plausible/GA analytics** to see which recruiters view what.
6. **A short intro video** in the hero — recruiters love a 30-second pitch.

---

Built for Shaik Parvez · Hyderabad, India.
