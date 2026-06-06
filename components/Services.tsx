import { DATA } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Services({ asH1 = false }: { asH1?: boolean }) {
    return (
        <section
            id="services"
            className="section-padding w-full relative overflow-hidden bg-slate-50 dark:bg-gradient-to-b dark:from-[#0a0f1e] dark:to-[#080d1a] transition-colors duration-300"
        >
            {/* Ambient glows - Only visible in dark mode */}
            <div className="absolute top-1/2 -right-[100px] -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[80px] pointer-events-none opacity-0 dark:opacity-10 bg-indigo-500/30 transition-opacity duration-300" />
            <div className="absolute bottom-0 -left-[100px] w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none opacity-0 dark:opacity-[0.08] bg-purple-500/30 transition-opacity duration-300" />

            <div className="container-standard relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="text-[13px] font-semibold tracking-[3px] uppercase text-indigo-600 dark:text-indigo-400 mb-3 block">
                        What I Offer
                    </span>
                    {asH1 ? (
                        <h1 className="text-[clamp(32px,5vw,48px)] font-extrabold text-slate-900 dark:text-[#f0f4ff] mb-4 leading-[1.15] mx-auto">
                            My{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-500">
                                Services
                            </span>
                        </h1>
                    ) : (
                        <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold text-slate-900 dark:text-[#f0f4ff] mb-4 leading-[1.15] mx-auto">
                            My{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-500">
                                Services
                            </span>
                        </h2>
                    )}
                    <p className="text-[17px] text-slate-600 dark:text-[#94a3b8] max-w-[560px] leading-[1.7] mx-auto">
                        End-to-end development solutions — from rapid MVPs to enterprise-grade SaaS with AI integration.
                    </p>
                </div>

                {/* Services grid */}
                <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-5 mb-20">
                    {DATA.services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col gap-4 p-8 rounded-2xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-indigo-500/15 hover:-translate-y-1.5 hover:border-indigo-400/40 dark:hover:border-indigo-400/40 hover:shadow-[0_20px_60px_rgba(99,102,241,0.08)] dark:hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)] hover:bg-indigo-50/50 dark:hover:bg-indigo-500/[0.07] transition-all duration-300 overflow-hidden"
                        >
                            {/* Subtle glow at top */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent rounded-t-[20px]" />

                            {/* Icon */}
                            <div className="w-[52px] h-[52px] shrink-0 rounded-xl flex items-center justify-center text-[24px] bg-indigo-50 dark:bg-gradient-to-br dark:from-indigo-500/20 dark:to-purple-500/10 border border-indigo-100 dark:border-indigo-500/25">
                                {service.icon}
                            </div>

                            {/* Title & desc */}
                            <div>
                                <h3 className="text-[19px] font-bold text-slate-900 dark:text-[#f0f4ff] mb-2 font-outfit">
                                    {service.title}
                                </h3>
                                <p className="text-[14px] text-slate-600 dark:text-[#64748b] leading-[1.65]">
                                    {service.description}
                                </p>
                            </div>

                            {/* Feature list */}
                            <div className="flex flex-col gap-1.5 mt-1">
                                {service.features.map((feat, i) => (
                                    <div key={i} className="flex items-center gap-2 text-[13px] text-slate-600 dark:text-[#94a3b8]">
                                        <span className="w-[5px] h-[5px] rounded-full shrink-0 bg-gradient-to-br from-indigo-500 to-purple-500" />
                                        {feat}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* How I work */}
                <div className="bg-white/60 dark:bg-slate-900/50 border border-slate-200 dark:border-indigo-500/12 rounded-[24px] px-6 py-12 md:px-10 md:py-12 text-center shadow-sm dark:shadow-none">
                    <h3 className="text-[28px] font-extrabold text-slate-900 dark:text-[#f0f4ff] mb-2 font-outfit">
                        How I Work
                    </h3>
                    <p className="text-[15px] text-slate-600 dark:text-[#64748b] mb-12">
                        A streamlined process to take your idea from concept to production.
                    </p>

                    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-0 relative">
                        {[
                            { step: "01", title: "Discovery", desc: "Deep-dive into your goals, user needs, and technical requirements.", icon: "🔍" },
                            { step: "02", title: "Architecture", desc: "Design a scalable system architecture with the right tech stack.", icon: "🏗️" },
                            { step: "03", title: "Development", desc: "Build iteratively with clean code, regular demos, and your feedback.", icon: "⚡" },
                            { step: "04", title: "Launch & Scale", desc: "Deploy to production with CI/CD, monitoring, and ongoing support.", icon: "🚀" },
                        ].map((item, idx) => (
                            <div key={idx} className="relative flex flex-col items-center gap-3 p-5 md:py-6 md:px-5">
                                {/* Connector line */}
                                {idx < 3 && (
                                    <div className="absolute top-[42px] -right-px w-1/2 h-px bg-gradient-to-r from-indigo-500/30 to-transparent z-0 hidden md:block" />
                                )}

                                <div className="relative z-10 w-[56px] h-[56px] shrink-0 rounded-xl flex items-center justify-center text-[24px] bg-indigo-50 dark:bg-gradient-to-br dark:from-indigo-500/15 dark:to-purple-500/10 border border-indigo-100 dark:border-indigo-500/25">
                                    {item.icon}
                                </div>

                                <div className="text-[12px] font-bold text-indigo-600 dark:text-indigo-400 tracking-[1px] uppercase">
                                    STEP {item.step}
                                </div>
                                <div className="text-[16px] font-bold text-slate-900 dark:text-[#e2e8f0] font-outfit">
                                    {item.title}
                                </div>
                                <p className="text-[13px] text-slate-600 dark:text-[#64748b] leading-[1.6]">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex justify-center">
                        <Link href="#contact" className="btn-primary inline-flex">
                            <span className="flex items-center gap-2">
                                Start a Project <ArrowRight size={16} />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
