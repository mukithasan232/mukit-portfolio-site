import { DATA } from "@/lib/data";

export function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": DATA.name,
        "jobTitle": DATA.role,
        "url": "https://www.codernest.cloud",
        "sameAs": DATA.socials.map(social => social.url),
        "knowsAbout": [
            "Web Development",
            "React",
            "Next.js",
            "JavaScript",
            "TypeScript",
            "Tailwind CSS",
            "Firebase",
            "SEO"
        ],
        "image": "https://www.codernest.cloud/me.png",
        "description": DATA.headline,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dhaka",
            "addressCountry": "BD"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
