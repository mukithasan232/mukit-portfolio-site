import { Metadata } from "next";
import { Services } from "@/components/Services";

export function generateMetadata(): Metadata {
    return {
        title: "Services | MD Mukit Hasan - Full Stack & AI Developer",
        description: "Explore the end-to-end development solutions I offer, including MVP development, AI integrations, Full-Stack web apps, and SaaS consulting.",
    };
}

export default function ServicesPage() {
    return (
        <main className="flex flex-col min-h-screen pt-20 pb-12 w-full overflow-x-hidden">
            <Services asH1={true} />
        </main>
    );
}
