import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { JsonLd } from "@/components/JsonLd";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

import { LazyLoadedWidgets } from "@/components/LazyLoadedWidgets";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codernest.cloud"),
  title: {
    default: "MD Mukit Hasan | Full-Stack SaaS Developer & AI Architect",
    template: "%s | Full-Stack SaaS Developer & AI Architect",
  },
  description: "Founder @ CoderNest Digital Solutions. Elite Full Stack Web Developer specializing in high-performance SaaS, Next.js, TypeScript, and AI integrations (Gemini). Available for Remote SaaS development worldwide. Hire Next.js expert USA, AI Integration agency Europe.",
  keywords: [
    "MD Mukit Hasan",
    "CoderNest Digital Solutions",
    "Principal Frontend Engineer",
    "Full Stack Web Developer",
    "AI Architect",
    "Next.js Developer USA",
    "Remote SaaS development",
    "Hire Next.js expert USA",
    "AI Integration agency Europe",
    "SaaS Architecture",
    "Gemini API Integration",
  ],
  authors: [{ name: "MD Mukit Hasan", url: "https://www.codernest.cloud" }],
  creator: "MD Mukit Hasan",
  openGraph: {
    title: "MD Mukit Hasan | Full-Stack SaaS Developer & AI Architect",
    description: "Elite Full Stack Web Developer specializing in high-performance SaaS. Hire Next.js expert USA & Europe.",
    url: "https://www.codernest.cloud",
    siteName: "MD Mukit Hasan Portfolio",
    type: "website",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "MD Mukit Hasan Portfolio Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Mukit Hasan | Full-Stack SaaS Developer & AI Architect",
    description: "Elite Full Stack Web Developer specializing in high-performance SaaS. Hire Next.js expert USA.",
    creator: "@MukitHasan",
  },
  verification: {
    google: "DHTqBavAyRLQpo3M-EgwQ6T5S3IrhjnBbdXp-A7x604",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-P1HC1JZXVT"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-P1HC1JZXVT');
            `,
          }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4590020337376910"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased font-sans bg-background text-foreground overflow-x-hidden min-h-screen transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
          <LazyLoadedWidgets />
          <JsonLd />
          <Toaster position="bottom-right" toastOptions={{ style: { background: '#1e293b', color: '#f8fafc', border: '1px solid #334155' } }} />
        </ThemeProvider>
      </body>
    </html>
  );
}
