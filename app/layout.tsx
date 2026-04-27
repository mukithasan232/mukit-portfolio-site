import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { DATA } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MukitAI } from "@/components/MukitAI";
import { JsonLd } from "@/components/JsonLd";

import Script from "next/script";

export const metadata: Metadata = {
  title: "MD Mukit Hasan | Full Stack Developer & AI Specialist",
  description: "Founder @ CoderNest Digital Solutions. Full Stack Web Developer specializing in Next.js, Node.js, and AI Orchestration. Building high-performance SaaS, AI-powered apps, and scalable web solutions.",
  keywords: [
    "Full Stack Web Developer",
    "AI Specialist",
    "Next.js Developer",
    "Node.js Developer",
    "SaaS Developer",
    "AI Integration",
    "CoderNest Digital Solutions",
    "Mukit Hasan",
    "Gemini API",
    "PostgreSQL",
    "Prisma",
    "React Developer",
  ],
  verification: {
    google: "DHTqBavAyRLQpo3M-EgwQ6T5S3IrhjnBbdXp-A7x604",
  },
  openGraph: {
    title: "MD Mukit Hasan | Full Stack Developer & AI Specialist",
    description: "Engineering the Future with Code & AI. Founder @ CoderNest Digital Solutions.",
    type: "website",
    url: "https://www.codernest.cloud",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4590020337376910"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-P1HC1JZXVT"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P1HC1JZXVT');
          `}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
          <MukitAI />
          <JsonLd />
        </ThemeProvider>
      </body>
    </html>
  );
}
