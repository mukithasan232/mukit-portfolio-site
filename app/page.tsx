import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { GitHubInsights } from "@/components/GitHubInsights";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { GlobalTrustSignals } from "@/components/GlobalTrustSignals";
import { Metadata } from "next";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { DATA } from "@/lib/data";

export function generateMetadata(): Metadata {
    return {
        title: "Home | MD Mukit Hasan - Full Stack & AI Developer",
        description: "MD Mukit Hasan is a Principal Frontend Engineer and AI Specialist. Discover full-stack SaaS projects, AI integrations, and high-performance web applications.",
        alternates: {
            canonical: "https://www.codernest.cloud",
        },
    };
}

export default function Home() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: DATA.name,
        url: "https://www.codernest.cloud",
        jobTitle: "Principal Frontend Engineer & AI Specialist",
        worksFor: {
            "@type": "Organization",
            name: "CoderNest Digital Solutions",
        },
        sameAs: DATA.socials.map((s) => s.url),
    };

    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "CoderNest Digital Solutions",
        url: "https://www.codernest.cloud",
        logo: "https://www.codernest.cloud/logo.png",
        founder: {
            "@type": "Person",
            name: DATA.name,
        },
        contactPoint: {
            "@type": "ContactPoint",
            email: DATA.contact.email,
            contactType: "Customer Support",
        },
    };

    return (
        <>
            <SchemaMarkup schema={personSchema} />
            <SchemaMarkup schema={orgSchema} />
            <main className="flex min-h-screen flex-col w-full overflow-x-hidden" style={{ paddingBottom: 32 }}>
                {/* 
                    Section 1: Hero
                    Strict Aspect Ratio / Min Height for Hero to prevent CLS
                */}
                <section className="min-h-[100vh] lg:min-h-[85vh] flex items-center w-full">
                    <Hero />
                </section>

                <GlobalTrustSignals />

                {/* 
                    Section 2: About & Stats
                */}
                <section className="w-full">
                    <About />
                </section>

                {/* 
                    Section 3: Featured Projects (The SaaS Showcase)
                */}
                <section className="w-full">
                    <Projects />
                </section>

                {/* 
                    Section 4: GitHub Activity (Server-Side Rendered)
                    Reserve space for the GitHub graph to ensure ZERO CLS
                */}
                <section className="w-full min-h-[600px] flex items-center justify-center">
                    <GitHubInsights />
                </section>

                {/* 
                    Section 5: Services & Workflow
                */}
                <section className="w-full">
                    <Services />
                </section>

                {/* 
                    Section 6: Contact & Let's Collaborate
                */}
                <section className="w-full">
                    <Contact />
                </section>
            </main>
        </>
    );
}
