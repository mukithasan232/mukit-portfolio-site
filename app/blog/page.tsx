import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { DATA } from "@/lib/data";

export function generateMetadata(): Metadata {
    return {
        title: "Blog | MD Mukit Hasan - Full Stack & AI Developer",
        description: "Technical articles on Next.js, React, SaaS architecture, and AI integration.",
    };
}

export default function BlogPage() {
    return (
        <main className="flex flex-col min-h-screen pt-32 pb-24 w-full" style={{ background: "linear-gradient(180deg, #080d1a 0%, #060a14 100%)" }}>
            <div className="container-standard" style={{ position: "relative", zIndex: 1 }}>
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 font-outfit" style={{ background: "linear-gradient(135deg, #f0f4ff, #a5b4fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                        Technical Blog
                    </h1>
                    <p className="text-xl text-slate-400 font-medium tracking-wide">
                        Insights on scalable architecture, AI, and performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {DATA.blog.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group relative bg-slate-900/60 backdrop-blur-sm border border-indigo-500/10 rounded-2xl p-6 hover:border-indigo-500/40 transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] flex flex-col h-full">
                            <div className="text-xs font-semibold text-indigo-400 mb-4 flex gap-4">
                                <span>{post.date}</span>
                                <span>{post.category}</span>
                            </div>
                            <h2 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-indigo-300 transition-colors">
                                {post.title}
                            </h2>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center gap-2 text-sm font-semibold text-indigo-400 mt-auto">
                                Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
