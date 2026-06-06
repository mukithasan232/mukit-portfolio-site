import { Metadata } from "next";
import { About } from "@/components/About";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { DATA } from "@/lib/data";

export function generateMetadata(): Metadata {
    return {
        title: "About | MD Mukit Hasan - Full Stack & AI Developer",
        description: "Professional biography, tech stack, and educational background of MD Mukit Hasan.",
    };
}

export default function AboutPage() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: DATA.name,
        url: "https://www.codernest.cloud/about",
        jobTitle: "Principal Frontend Engineer",
        worksFor: {
            "@type": "Organization",
            name: "CoderNest Digital Solutions"
        },
        description: DATA.about.description,
        sameAs: DATA.socials.map((s) => s.url)
    };

    return (
        <>
            <SchemaMarkup schema={personSchema} />
            <main className="flex flex-col min-h-screen pt-20 pb-12 w-full overflow-x-hidden">
                <About asH1={true} />
            </main>
        </>
    );
}
