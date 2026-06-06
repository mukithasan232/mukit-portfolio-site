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
        <main className="flex flex-col min-h-screen pt-32 pb-24 w-full bg-slate-50 dark:bg-[#080d1a] transition-colors duration-300">
            <div className="container-standard relative z-10">
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 font-outfit text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-[#f0f4ff] dark:to-[#a5b4fc] transition-colors">
                        Technical Blog
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-medium tracking-wide transition-colors">
                        Insights on scalable architecture, AI, and performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {DATA.blog.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200 dark:border-indigo-500/10 rounded-2xl p-6 hover:border-indigo-400/50 dark:hover:border-indigo-500/40 transition-all shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] flex flex-col h-full">
                            <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-4 flex gap-4 transition-colors">
                                <span>{post.date}</span>
                                <span>{post.category}</span>
                            </div>
                            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                                {post.title}
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow transition-colors">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-auto transition-colors">
                                Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
