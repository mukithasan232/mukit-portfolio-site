"use client";

import { DATA } from "@/lib/data";

export function Skills() {
    return (
        <section
            id="skills"
            className="section-padding w-full relative overflow-hidden bg-slate-50 dark:bg-gradient-to-b dark:from-[#0a0f1e] dark:to-[#080d1a] transition-colors duration-300"
        >
            {/* Background glow - Only visible in dark mode */}
            <div className="absolute left-[-200px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[80px] pointer-events-none opacity-0 dark:opacity-10 bg-indigo-500/30 transition-opacity duration-300" />

            <div className="container-standard relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="text-[13px] font-semibold tracking-[3px] uppercase text-indigo-600 dark:text-indigo-400 mb-3 block">
                        What I Work With
                    </span>
                    <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold text-slate-900 dark:text-[#f0f4ff] mb-4 leading-[1.15] mx-auto">
                        Tech{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-500">
                            Stack
                        </span>
                    </h2>
                    <p className="text-[17px] text-slate-600 dark:text-[#94a3b8] max-w-[560px] leading-[1.7] mx-auto">
                        A curated set of technologies I use to architect and ship production-grade applications.
                    </p>
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-3 mb-20">
                    {DATA.techStack.map((tech, i) => (
                        <div
                            key={i}
                            className="group flex flex-col items-center gap-2.5 p-5 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-indigo-500/15 rounded-2xl hover:-translate-y-1.5 hover:border-indigo-400/40 dark:hover:border-indigo-400/40 hover:shadow-[0_16px_40px_rgba(99,102,241,0.08)] dark:hover:shadow-[0_16px_40px_rgba(99,102,241,0.15)] hover:bg-indigo-50/50 dark:hover:bg-indigo-500/[0.08] transition-all duration-300"
                        >
                            <span className="text-[28px] font-bold font-outfit leading-none drop-shadow-sm" style={{ color: tech.color }}>
                                {tech.icon}
                            </span>
                            <span className="text-[13px] font-semibold text-slate-600 dark:text-[#94a3b8] text-center leading-[1.3] transition-colors group-hover:text-slate-900 dark:group-hover:text-slate-200">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Skills with progress bars */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                    {/* Frontend */}
                    <div className="bg-white/60 dark:bg-slate-900/50 border border-slate-200 dark:border-indigo-500/10 p-6 sm:p-8 rounded-3xl shadow-sm dark:shadow-none">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center text-[18px] bg-indigo-50 dark:bg-gradient-to-br dark:from-indigo-500/20 dark:to-purple-500/20 border border-indigo-100 dark:border-indigo-500/30">
                                🎨
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-[#e2e8f0]">Frontend</h3>
                        </div>
                        <div className="flex flex-col gap-5">
                            {DATA.skills.frontend.map((skill, i) => (
                                <div key={i}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                            {skill.name}
                                        </span>
                                        <span className="text-[13px] font-bold text-indigo-600 dark:text-indigo-400">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="h-1.5 rounded-full overflow-hidden bg-slate-200 dark:bg-white/5">
                                        <div
                                            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000 ease-out"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="bg-white/60 dark:bg-slate-900/50 border border-slate-200 dark:border-indigo-500/10 p-6 sm:p-8 rounded-3xl shadow-sm dark:shadow-none">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center text-[18px] bg-cyan-50 dark:bg-gradient-to-br dark:from-cyan-500/15 dark:to-indigo-500/15 border border-cyan-100 dark:border-cyan-500/25">
                                ⚙️
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-[#e2e8f0]">Backend & AI</h3>
                        </div>
                        <div className="flex flex-col gap-5">
                            {DATA.skills.backend.map((skill, i) => (
                                <div key={i}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                            {skill.name}
                                        </span>
                                        <span className="text-[13px] font-bold text-purple-600 dark:text-purple-400">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="h-1.5 rounded-full overflow-hidden bg-slate-200 dark:bg-white/5">
                                        <div
                                            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-1000 ease-out"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
