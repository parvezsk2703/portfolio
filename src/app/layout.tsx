import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PROFILE, SITE } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const viewport: Viewport = {
  themeColor: "#05060a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${PROFILE.name} | ${PROFILE.title}`,
  description: PROFILE.summary,
  keywords: [
    "Shaik Parvez", "Data Analyst", "Data Analyst Portfolio", "SQL", "Python",
    "Power BI", "Excel", "Data Visualization", "Business Intelligence", "Hyderabad",
  ],
  authors: [{ name: PROFILE.name }],
  creator: PROFILE.name,
  openGraph: {
    type: "website",
    url: SITE.url,
    title: `${PROFILE.name} | ${PROFILE.title}`,
    description: PROFILE.tagline,
    siteName: `${PROFILE.name} — Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} | ${PROFILE.title}`,
    description: PROFILE.tagline,
  },
  robots: { index: true, follow: true },
};

// JSON-LD structured data helps Google understand this is a person/portfolio.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  jobTitle: PROFILE.title,
  email: `mailto:${PROFILE.email}`,
  url: SITE.url,
  sameAs: [PROFILE.linkedin, PROFILE.github],
  address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
