"use client";

import { DATA } from "@/lib/data";
import { ExternalLink, Github, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export const RecentProjectHighlight = () => {
    const recentProjects = DATA.projects.filter((p) => p.featured).slice(0, 2);

    return (
        <section
            className="w-full relative overflow-hidden bg-slate-50 dark:bg-gradient-to-b dark:from-[#0a0f1e] dark:to-[#080d1a] py-20 transition-colors duration-300"
        >
            {/* Ambient glow - Only visible in dark mode */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[80px] pointer-events-none opacity-0 dark:opacity-[0.07] bg-indigo-500/30 transition-opacity duration-300" />

            <div className="container-standard relative z-10">
                <div className="flex justify-between items-center mb-10 flex-wrap gap-3">
                    <div>
                        <span className="text-[13px] font-semibold tracking-[3px] uppercase text-indigo-600 dark:text-indigo-400 mb-2 block">
                            Showcase
                        </span>
                        <h2 className="text-[32px] font-extrabold text-slate-900 dark:text-[#f0f4ff] font-outfit">
                            Recent Highlights
                        </h2>
                    </div>
                    <Link
                        href="#projects"
                        className="btn-outline inline-flex text-[13px]"
                    >
                        View All <ArrowRight size={14} />
                    </Link>
                </div>

                <div className="flex flex-col gap-5">
                    {recentProjects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-indigo-500/15 rounded-[20px] overflow-hidden grid grid-cols-1 md:grid-cols-[280px_1fr] transition-all duration-300 hover:border-indigo-400/40 dark:hover:border-indigo-400/40 hover:shadow-[0_16px_40px_rgba(99,102,241,0.08)] dark:hover:shadow-[0_16px_40px_rgba(99,102,241,0.12)]"
                        >
                            {/* Image */}
                            <div className="relative h-[200px] md:h-full overflow-hidden bg-slate-100 dark:bg-gradient-to-br dark:from-indigo-500/15 dark:to-purple-500/10">
                                {project.images?.length > 0 ? (
                                    <img
                                        src={project.images[0]}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top block transition-transform duration-500 group-hover:scale-105 filter dark:brightness-90"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-[48px]">
                                        🔷
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/5 dark:to-slate-900/30" />
                            </div>

                            {/* Details */}
                            <div className="p-6 md:p-7 flex flex-col gap-3.5">
                                {/* Badges */}
                                <div className="flex gap-1.5 flex-wrap">
                                    {project.aiPowered && (
                                        <span className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
                                            <Sparkles size={10} />
                                            Built with AI
                                        </span>
                                    )}
                                    <span className="px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30">
                                        ⭐ Featured
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-[22px] font-extrabold text-slate-900 dark:text-[#f0f4ff] font-outfit mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="text-[13px] font-semibold text-indigo-600 dark:text-indigo-400">
                                        {project.tagline}
                                    </div>
                                </div>

                                <p className="text-[14px] text-slate-600 dark:text-[#64748b] leading-[1.65]">
                                    {project.solution}
                                </p>

                                {/* Tech tags */}
                                <div className="flex flex-wrap gap-1.5 mt-1">
                                    {project.tech.slice(0, 5).map((t: string) => (
                                        <span key={t} className="px-2 py-1 text-[11px] font-medium rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-2.5 mt-2">
                                    <Link
                                        href={project.live || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary py-2.5 px-4 text-[13px] inline-flex"
                                    >
                                        <span className="flex items-center gap-1.5">
                                            <ExternalLink size={13} /> Live Demo
                                        </span>
                                    </Link>
                                    <Link
                                        href={project.github || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-outline py-2.5 px-4 text-[13px] inline-flex"
                                    >
                                        <Github size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
