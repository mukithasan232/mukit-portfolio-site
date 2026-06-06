"use client";

import { DATA } from "@/lib/data";

export function Testimonials() {
    return (
        <section
            id="testimonials"
            className="section-padding w-full relative overflow-hidden bg-slate-50 dark:bg-gradient-to-b dark:from-[#080d1a] dark:to-[#0a0f1e] transition-colors duration-300"
        >
            {/* Ambient glow - Only visible in dark mode */}
            <div className="absolute top-1/2 -right-[100px] -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[80px] pointer-events-none opacity-0 dark:opacity-[0.06] bg-indigo-500/30 transition-opacity duration-300" />

            <div className="container-standard relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="text-[13px] font-semibold tracking-[3px] uppercase text-indigo-600 dark:text-indigo-400 mb-3 block">
                        Client Feedback
                    </span>
                    <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold text-slate-900 dark:text-[#f0f4ff] mb-4 leading-[1.15] mx-auto">
                        What Clients{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-500">
                            Say
                        </span>
                    </h2>
                </div>

                {/* Testimonials grid */}
                <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
                    {DATA.testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="group relative bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-indigo-500/15 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 dark:hover:border-indigo-400/40 hover:shadow-[0_16px_40px_rgba(99,102,241,0.08)] dark:hover:shadow-[0_16px_40px_rgba(99,102,241,0.12)] hover:bg-indigo-50/50 dark:hover:bg-indigo-500/[0.05] overflow-hidden"
                        >
                            {/* Quote mark */}
                            <div className="absolute top-2.5 right-5 text-[72px] leading-none font-serif text-slate-100 dark:text-indigo-500/10 select-none transition-colors group-hover:text-indigo-50 dark:group-hover:text-indigo-500/15">
                                &ldquo;
                            </div>

                            {/* Stars */}
                            <div className="text-amber-400 text-[14px] mb-4 tracking-[2px]">
                                ★★★★★
                            </div>

                            {/* Content */}
                            <p className="text-[15px] text-slate-600 dark:text-[#94a3b8] leading-[1.75] mb-6 italic relative z-10">
                                &ldquo;{t.content}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 relative z-10">
                                <div className="w-[44px] h-[44px] shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-[14px] font-extrabold text-white font-outfit shadow-sm">
                                    {t.avatar || t.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                                </div>
                                <div>
                                    <div className="text-[15px] font-bold text-slate-900 dark:text-[#e2e8f0]">{t.name}</div>
                                    <div className="text-[12px] text-slate-500 dark:text-[#475569]">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
