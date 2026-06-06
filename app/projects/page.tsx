import { Metadata } from "next";
import { Projects } from "@/components/Projects";

export function generateMetadata(): Metadata {
    return {
        title: "Projects | MD Mukit Hasan - Full Stack & AI Developer",
        description: "Explore the high-impact products built with modern stacks by MD Mukit Hasan, including MedOS Hospital SaaS and SMM Elite.",
    };
}

export default function ProjectsPage() {
    return (
        <main className="flex flex-col min-h-screen pt-20 pb-12 w-full overflow-x-hidden">
            <Projects asH1={true} />
        </main>
    );
}
