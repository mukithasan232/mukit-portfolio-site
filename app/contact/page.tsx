import { Metadata } from "next";
import { Contact } from "@/components/Contact";

export function generateMetadata(): Metadata {
    return {
        title: "Contact | MD Mukit Hasan - Full Stack & AI Developer",
        description: "Get in touch with MD Mukit Hasan. Reach out to discuss MVP development, SaaS architecture, and AI integrations.",
    };
}

export default function ContactPage() {
    return (
        <main className="flex flex-col min-h-screen pt-20 pb-12 w-full overflow-x-hidden">
            <Contact asH1={true} />
        </main>
    );
}
