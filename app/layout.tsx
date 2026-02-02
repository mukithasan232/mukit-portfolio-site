import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as a safe, modern default replacing "Geist"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { DATA } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { Analytics } from "@vercel/analytics/react";
import { ParticlesBackground } from "@/components/ParticlesBackground";

import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${DATA.name} | ${DATA.role}`, // Used pipe for cleaner look
  description: DATA.headline, // Used headline which is better for SEO than tagline
  keywords: [
    "Junior Web Developer",
    "Frontend Web Developer",
    "React Developer",
    "Next.js Developer",
    "SEO Friendly Website",
    "Responsive Web Design",
    "Firebase Web App",
    "Modern Web Development"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <ParticlesBackground />
        </ThemeProvider>
      </body>
    </html>
  );
}
