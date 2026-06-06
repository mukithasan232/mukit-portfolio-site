import { DATA } from "@/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export function generateStaticParams() {
    return DATA.projects.map((p) => ({
        slug: p.slug,
    }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const project = DATA.projects.find((p) => p.slug === params.slug);
    if (!project) {
        return {
            title: "Project Not Found | MD Mukit Hasan",
        };
    }
    return {
        title: `${project.title} | MD Mukit Hasan - Full Stack & AI Developer`,
        description: project.problem.substring(0, 160),
    };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
    const project = DATA.projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.problem,
        applicationCategory: "WebApplication",
        operatingSystem: "All",
        author: {
            "@type": "Person",
            name: DATA.name,
            url: "https://www.codernest.cloud",
        },
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
    };

    return (
        <>
            <SchemaMarkup schema={softwareSchema} />
            <main
                className="flex flex-col min-h-screen pt-32 pb-24 w-full"
                style={{ background: "linear-gradient(180deg, #080d1a 0%, #060a14 100%)" }}
            >
                <div className="container-standard" style={{ position: "relative", zIndex: 1 }}>
                    <div className="mb-12">
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors mb-8 text-sm font-medium"
                        >
                            <ArrowLeft size={16} />
                            Back to Projects
                        </Link>
                        <h1
                            className="text-4xl md:text-5xl font-bold mb-4"
                            style={{
                                background: "linear-gradient(135deg, #f0f4ff, #a5b4fc)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                fontFamily: "var(--font-outfit), sans-serif",
                            }}
                        >
                            {project.title}
                        </h1>
                        <p className="text-xl text-indigo-300 font-medium tracking-wide">
                            {project.tagline}
                        </p>
                    </div>

                    {/* Main Image Banner */}
                    <div
                        className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-indigo-500/20 shadow-[0_0_40px_rgba(99,102,241,0.1)] mb-16"
                    >
                        <Image
                            src={project.images[0] || "/placeholder.jpg"}
                            alt={`${project.title} - Main Interface`}
                            fill
                            className="object-cover"
                            priority
                            unoptimized
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-24 items-start">
                        {/* Left Column: Content */}
                        <div className="flex flex-col gap-16">
                            <section>
                                <h2 className="text-2xl font-bold text-slate-100 mb-6 font-outfit border-b border-indigo-500/20 pb-4">
                                    Problem Solved
                                </h2>
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    {project.problem}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-100 mb-6 font-outfit border-b border-indigo-500/20 pb-4">
                                    System Architecture & Solution
                                </h2>
                                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                    {project.solution}
                                </p>
                                <div className="bg-slate-900/60 border border-indigo-500/10 rounded-xl p-6 backdrop-blur-md">
                                    <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-4">
                                        Key Results
                                    </h3>
                                    <p className="text-slate-200">
                                        {project.result}
                                    </p>
                                </div>
                            </section>

                            {/* Additional Images Grid */}
                            {project.images.length > 1 && (
                                <section>
                                    <h2 className="text-2xl font-bold text-slate-100 mb-6 font-outfit border-b border-indigo-500/20 pb-4">
                                        Gallery
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {project.images.slice(1, 5).map((img, idx) => (
                                            <div
                                                key={idx}
                                                className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500/50 transition-colors"
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`${project.title} screenshot ${idx + 2}`}
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>

                        {/* Right Column: Sidebar */}
                        <aside className="flex flex-col gap-8 sticky top-32">
                            <div className="bg-slate-900/80 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-8">
                                <h3 className="text-lg font-bold text-slate-100 mb-6 font-outfit">
                                    Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium rounded-lg"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-10 flex flex-col gap-4">
                                    {project.live && project.live !== "#" && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                                        >
                                            <ExternalLink size={18} />
                                            Live Demo
                                        </a>
                                    )}
                                    {project.github && project.github !== "#" && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 rounded-xl transition-colors"
                                        >
                                            <Github size={18} />
                                            Source Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </>
    );
}
