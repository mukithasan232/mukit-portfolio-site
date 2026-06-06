import Image from "next/image";
import Link from "next/link";
import { DATA } from "@/lib/data";
import { GraduationCap, MapPin, Zap } from "lucide-react";

const highlights = [
    { icon: "🎓", title: "ICE Student", desc: "Daffodil International University" },
    { icon: "🚀", title: "Founder", desc: "CoderNest Digital Solutions" },
    { icon: "🤖", title: "AI Specialist", desc: "Gemini API & LLM Orchestration" },
    { icon: "⚡", title: "Full Stack Dev", desc: "Next.js · Node.js · PostgreSQL" },
];

const skills = [
    { name: "Next.js & React", progress: 95, color: "#6366f1" },
    { name: "Tailwind CSS", progress: 98, color: "#06b6d4" },
    { name: "PostgreSQL & Prisma", progress: 90, color: "#3b82f6" },
    { name: "Gemini API & AI Integration", progress: 85, color: "#8b5cf6" },
];

export function About({ asH1 = false }: { asH1?: boolean }) {
    const paragraphs = DATA.about.description.split("\n\n");

    return (
        <section
            id="about"
            className="section-padding w-full relative overflow-hidden bg-slate-50 dark:bg-gradient-to-b dark:from-[#080d1a] dark:to-[#0a0f1e] transition-colors duration-300"
        >
            {/* Background glow - Only visible in dark mode */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[80px] pointer-events-none opacity-0 dark:opacity-10 bg-purple-500/30 transition-opacity duration-300" />

            <div className="container-standard relative z-10">
                {/* Section header */}
                <div className="mb-16">
                    <span className="text-[13px] font-semibold tracking-[3px] uppercase text-indigo-600 dark:text-indigo-400 mb-3 block">
                        Who I Am
                    </span>
                    {asH1 ? (
                        <h1 className="text-[clamp(32px,5vw,48px)] font-extrabold text-slate-900 dark:text-[#f0f4ff] mb-4 leading-[1.15]">
                            About{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-500">
                                Me
                            </span>
                        </h1>
                    ) : (
                        <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold text-slate-900 dark:text-[#f0f4ff] mb-4 leading-[1.15]">
                            About{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-500">
                                Me
                            </span>
                        </h2>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-start">
                    {/* Left: Image + info card */}
                    <div>
                        {/* Photo */}
                        <div className="relative rounded-[20px] overflow-hidden aspect-[4/5] bg-gradient-to-br from-indigo-100/50 to-purple-50/50 dark:from-indigo-500/10 dark:to-purple-500/5 border border-indigo-200 dark:border-indigo-500/20 mb-5">
                            <Image
                                src={DATA.profilePicture}
                                alt={DATA.name}
                                fill
                                className="object-cover transition-all duration-300 filter dark:brightness-90 dark:saturate-90"
                                unoptimized
                            />
                            {/* Dark tint overlay — tones down bright background */}
                            <div className="absolute inset-0 bg-transparent dark:bg-[#080d1a]/10 z-[1] pointer-events-none transition-colors duration-300" />
                            {/* Bottom gradient for name card readability */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/40 dark:to-[#080d1a]/80 z-[2] pointer-events-none transition-colors duration-300" />
                            
                            {/* Name card overlay */}
                            <div className="absolute bottom-5 left-5 right-5 z-[3]">
                                <div className="bg-white/90 dark:bg-[#080d1a]/85 backdrop-blur-md border border-slate-200 dark:border-indigo-500/20 rounded-xl px-4 py-3 flex items-center gap-2.5 shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                                    <div>
                                        <div className="text-[13px] font-bold text-slate-900 dark:text-[#f0f4ff]">{DATA.name}</div>
                                        <div className="text-[11px] text-slate-500 dark:text-slate-400">Available for projects</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Info pills */}
                        <div className="flex flex-col gap-2.5">
                            {[
                                { icon: <MapPin size={14} />, label: "Bangladesh", sub: "Remote / Worldwide" },
                                { icon: <GraduationCap size={14} />, label: "ICE — Daffodil International University", sub: "2023 – Present" },
                                { icon: <Zap size={14} />, label: "CoderNest Digital Solutions", sub: "Founder & Lead Developer" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 px-3.5 py-2.5 bg-indigo-50/80 dark:bg-indigo-500/5 border border-indigo-100 dark:border-indigo-500/10 rounded-xl"
                                >
                                    <span className="text-indigo-600 dark:text-indigo-400 shrink-0">{item.icon}</span>
                                    <div>
                                        <div className="text-[13px] font-semibold text-slate-800 dark:text-slate-200">{item.label}</div>
                                        <div className="text-xs text-slate-500 dark:text-slate-400">{item.sub}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Description + highlights */}
                    <div>
                        {/* Description */}
                        <div className="mb-10">
                            {paragraphs.map((para, i) => (
                                <p key={i} className="text-base text-slate-600 dark:text-slate-400 leading-[1.8] mb-5">
                                    {para}
                                </p>
                            ))}
                        </div>

                        {/* Highlight cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
                            {highlights.map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-indigo-500/15 rounded-[16px] p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="text-[26px] mb-2.5">{item.icon}</div>
                                    <div className="text-[15px] font-bold text-slate-900 dark:text-slate-200 mb-1">{item.title}</div>
                                    <div className="text-[13px] text-slate-500 dark:text-slate-400">{item.desc}</div>
                                </div>
                            ))}
                        </div>

                        {/* Skills Bars */}
                        <div className="mb-10">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-[#f0f4ff] mb-5">Core Expertise</h3>
                            <div className="flex flex-col gap-5">
                                {skills.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{skill.name}</span>
                                            <span className="text-[13px] font-medium" style={{ color: skill.color }}>{skill.progress}%</span>
                                        </div>
                                        <div className="h-1.5 rounded-full overflow-hidden bg-slate-200 dark:bg-white/5">
                                            <div
                                                className="h-full rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: `${skill.progress}%`, background: skill.color }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-3.5">
                            <Link href="#contact" className="btn-primary">
                                <span>Let&apos;s Work Together</span>
                            </Link>
                            <Link href="#projects" className="btn-outline">
                                See My Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
