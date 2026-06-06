"use client";

import { DATA } from "@/lib/data";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

export function Blog() {
    return (
        <section
            id="blog"
            className="section-padding w-full relative overflow-hidden bg-slate-50 dark:bg-gradient-to-b dark:from-[#0a0f1e] dark:to-[#080d1a] transition-colors duration-300"
        >
            {/* Ambient glow - Only visible in dark mode */}
            <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none opacity-0 dark:opacity-[0.08] bg-purple-500/30 transition-opacity duration-300" />

            <div className="container-standard relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="text-[13px] font-semibold tracking-[3px] uppercase text-indigo-600 dark:text-indigo-400 mb-3 block">
                        Insights & Writing
                    </span>
                    <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold text-slate-900 dark:text-[#f0f4ff] mb-4 leading-[1.15] mx-auto">
                        Latest{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-500">
                            Articles
                        </span>
                    </h2>
                    <p className="text-[17px] text-slate-600 dark:text-[#94a3b8] max-w-[560px] leading-[1.7] mx-auto">
                        Thoughts on full-stack development, AI integration, and building products that matter.
                    </p>
                </div>

                {/* Blog grid */}
                <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
                    {DATA.blog.map((post, i) => (
                        <article
                            key={i}
                            className="group flex flex-col bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-indigo-500/15 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 dark:hover:border-indigo-400/40 hover:shadow-[0_16px_40px_rgba(99,102,241,0.08)] dark:hover:shadow-[0_16px_40px_rgba(99,102,241,0.12)]"
                        >
                            {/* Image */}
                            <div className="relative h-[180px] overflow-hidden bg-slate-100 dark:bg-slate-800">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105 filter dark:brightness-90"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/10 dark:to-slate-900/70 pointer-events-none" />
                                
                                {/* Category badge */}
                                <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/40 backdrop-blur-md">
                                    {post.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-5 md:p-6 flex flex-col flex-1">
                                <div className="flex items-center gap-1.5 text-[12px] font-medium text-slate-500 dark:text-[#475569] mb-3">
                                    <Calendar size={12} />
                                    {post.date}
                                </div>
                                <h3 className="text-[16px] font-bold text-slate-900 dark:text-[#f0f4ff] mb-2 leading-[1.4] font-outfit group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-[13px] text-slate-600 dark:text-[#64748b] leading-[1.6] mb-5 flex-1">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-1.5 text-[13px] font-bold text-indigo-600 dark:text-indigo-400 group-hover:gap-2 transition-all">
                                    Read more <ArrowRight size={13} />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
