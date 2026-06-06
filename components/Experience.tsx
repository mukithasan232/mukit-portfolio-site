"use client";

import { DATA } from "@/lib/data";

export function Experience() {
    return (
        <section
            id="experience"
            className="section-padding w-full relative overflow-hidden bg-slate-50 dark:bg-gradient-to-b dark:from-[#080d1a] dark:to-[#0a0f1e] transition-colors duration-300"
        >
            {/* Ambient glow - Only visible in dark mode */}
            <div className="absolute right-[10%] top-[20%] w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none opacity-0 dark:opacity-[0.08] bg-cyan-500/30 transition-opacity duration-300" />

            <div className="container-standard relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="text-[13px] font-semibold tracking-[3px] uppercase text-indigo-600 dark:text-indigo-400 mb-3 block">
                        My Journey
                    </span>
                    <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold text-slate-900 dark:text-[#f0f4ff] mb-4 leading-[1.15] mx-auto">
                        Experience &{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-500">
                            Education
                        </span>
                    </h2>
                    <p className="text-[17px] text-slate-600 dark:text-[#94a3b8] max-w-[560px] leading-[1.7] mx-auto">
                        From student to founder — building real products that solve real problems.
                    </p>
                </div>

                {/* Timeline */}
                <div className="max-w-[720px] mx-auto relative">
                    {/* Vertical line */}
                    <div className="absolute left-[20px] top-0 bottom-0 w-px bg-slate-200 dark:bg-gradient-to-b dark:from-indigo-500 dark:to-indigo-500/10" />

                    <div className="flex flex-col gap-9">
                        {DATA.experience.map((item, i) => (
                            <div
                                key={i}
                                className="flex gap-7 items-start relative"
                            >
                                {/* Timeline dot */}
                                <div className="w-[40px] h-[40px] rounded-full bg-white dark:bg-gradient-to-br dark:from-indigo-500/30 dark:to-purple-500/20 border-2 border-indigo-200 dark:border-indigo-500/50 flex items-center justify-center shrink-0 text-[14px] shadow-sm dark:shadow-[0_0_20px_rgba(99,102,241,0.2)] z-10">
                                    {i === 0 ? "🚀" : i === 1 ? "🎓" : "💼"}
                                </div>

                                {/* Content */}
                                <div className="flex-1 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-indigo-500/15 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:border-indigo-400/40 dark:hover:border-indigo-400/40 hover:bg-indigo-50/50 dark:hover:bg-indigo-500/[0.06] shadow-sm dark:shadow-none">
                                    <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                        <div>
                                            <h3 className="text-[17px] font-bold text-slate-900 dark:text-[#f0f4ff] font-outfit mb-0.5">
                                                {item.role}
                                            </h3>
                                            <div className="text-[14px] font-semibold text-indigo-600 dark:text-indigo-400">
                                                {item.company}
                                            </div>
                                        </div>
                                        <span className="text-[12px] font-semibold px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 rounded-full text-indigo-700 dark:text-indigo-300 whitespace-nowrap">
                                            {item.year}
                                        </span>
                                    </div>
                                    <p className="text-[14px] text-slate-600 dark:text-[#64748b] leading-[1.65]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
