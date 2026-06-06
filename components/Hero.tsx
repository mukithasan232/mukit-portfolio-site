import Link from "next/link";
import Image from "next/image";
import { DATA } from "@/lib/data";
import { ArrowRight, Download, Sparkles, Code2, Cpu, Star, GitBranch } from "lucide-react";
import { TypingText, HeroCodeCard } from "./HeroClientElements";

const TECH_BADGES = [
    { label: "Next.js", color: "text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900/50 bg-indigo-50 dark:bg-indigo-900/20", icon: "⚡" },
    { label: "Node.js", color: "text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/50 bg-emerald-50 dark:bg-emerald-900/20", icon: "🟢" },
    { label: "Gemini AI", color: "text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-900/50 bg-cyan-50 dark:bg-cyan-900/20", icon: "🤖" },
    { label: "PostgreSQL", color: "text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/50 bg-blue-50 dark:bg-blue-900/20", icon: "🐘" },
    { label: "Prisma", color: "text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900/50 bg-purple-50 dark:bg-purple-900/20", icon: "🔷" },
    { label: "TypeScript", color: "text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/50 bg-amber-50 dark:bg-amber-900/20", icon: "📘" },
];

const STAT_CARDS = [
    { icon: <Code2 size={16} />, value: "10+", label: "Projects Shipped", color: "text-indigo-600 dark:text-indigo-400" },
    { icon: <Star size={16} />, value: "100%", label: "Client Satisfaction", color: "text-amber-500 dark:text-amber-500" },
    { icon: <GitBranch size={16} />, value: "2+", label: "Years Building", color: "text-emerald-600 dark:text-emerald-400" },
    { icon: <Cpu size={16} />, value: "AI", label: "Powered Solutions", color: "text-cyan-600 dark:text-cyan-400" },
];

export function Hero() {
    return (
        <div
            id="home"
            className="relative w-full flex items-center overflow-hidden bg-slate-50 dark:bg-[#0B0F19] min-h-[100vh] lg:min-h-[85vh] transition-colors duration-300"
        >
            {/* Ambient glow blobs - Adjusted for Light/Dark */}
            <div className="absolute rounded-full blur-[80px] pointer-events-none z-0 w-[600px] h-[600px] -top-[200px] -left-[150px] bg-indigo-400/20 dark:bg-indigo-600/30" />
            <div className="absolute rounded-full blur-[80px] pointer-events-none z-0 w-[500px] h-[500px] -bottom-[100px] -right-[100px] bg-purple-400/20 dark:bg-purple-600/20" />
            
            {/* Grid */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(theme(colors.slate.300)_1px,transparent_1px)] dark:bg-[radial-gradient(theme(colors.indigo.500/0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Abstract Decorative Background Image */}
            <div className="absolute top-0 right-0 opacity-5 dark:opacity-[0.03] pointer-events-none z-[1]">
                <Image 
                    src="/logo.png" 
                    alt="CoderNest Background Asset" 
                    width={800} 
                    height={800} 
                    priority 
                    className="object-cover"
                />
            </div>

            <div className="container-standard w-full relative z-[2] pt-[110px] pb-[80px]">
                {/* ── Strict CSS Grid Layout ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* ── LEFT: Text content ── */}
                    <div>
                        {/* Status badge */}
                        <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/25 rounded-full py-1.5 pl-2.5 pr-4 mb-8 text-sm font-medium text-indigo-700 dark:text-indigo-300">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
                            <Sparkles size={14} className="text-indigo-600 dark:text-indigo-400" />
                            Available for new projects · Founder @ CoderNest
                        </div>

                        {/* Main headline */}
                        <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white mb-6">
                            {DATA.name}
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500">
                                Engineering the Future
                            </span>
                            <br />
                            <span className="text-slate-700 dark:text-slate-300">with Code &amp; AI.</span>
                        </h1>

                        {/* Typing subheadline */}
                        <div className="text-lg sm:text-xl font-semibold mb-6 text-slate-600 dark:text-slate-400 min-h-[36px] flex items-center">
                            <TypingText />
                        </div>

                        {/* Description */}
                        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-[560px]">
                            Founder @ CoderNest | Full Stack Web Developer & AI Specialist. Building world-class SaaS solutions and intelligent AI integrations.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4 mb-12">
                            <Link href="#projects" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5">
                                View My Work <ArrowRight size={18} />
                            </Link>
                            <a 
                                href="https://calendly.com/your-link" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center justify-center font-semibold py-3 px-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all hover:-translate-y-0.5"
                            >
                                Book a Free AI Strategy Call
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 font-semibold py-3 px-6 rounded-xl border-2 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all hover:-translate-y-0.5"
                            >
                                <Download size={16} />
                                Resume
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8 border-t border-slate-200 dark:border-slate-800">
                            {DATA.stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className={`pr-8 ${i < DATA.stats.length - 1 ? "border-r border-slate-200 dark:border-slate-800" : ""}`}
                                >
                                    <div className="font-outfit text-3xl font-black bg-clip-text text-transparent bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm font-medium text-slate-600 dark:text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT: Visuals ── */}
                    <div className="hidden lg:flex flex-col gap-6 relative">
                        {/* Floating stat mini-cards — top row */}
                        <div className="grid grid-cols-2 gap-4">
                            {STAT_CARDS.map((card, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col gap-2 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:hover:border-slate-700"
                                    style={{ animation: `float ${4.5 + i * 0.5}s ease-in-out infinite` }}
                                >
                                    <div className={`flex ${card.color}`}>{card.icon}</div>
                                    <div className={`font-outfit text-2xl font-black leading-none ${card.color}`}>
                                        {card.value}
                                    </div>
                                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">{card.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Code card Client Component */}
                        <div className="w-full relative z-10">
                            <HeroCodeCard />
                        </div>

                        {/* Tech badge row */}
                        <div className="flex flex-wrap gap-2 mt-2">
                            {TECH_BADGES.map((badge) => (
                                <div
                                    key={badge.label}
                                    className={`inline-flex items-center gap-1.5 text-xs font-semibold border rounded-full px-3 py-1.5 transition-all hover:-translate-y-0.5 cursor-default ${badge.color}`}
                                >
                                    <span>{badge.icon}</span>
                                    {badge.label}
                                </div>
                            ))}
                        </div>

                        {/* Ambient glow behind the panel */}
                        <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,theme(colors.indigo.500/0.08)_0%,transparent_65%)] dark:bg-[radial-gradient(ellipse_at_center,theme(colors.indigo.500/0.15)_0%,transparent_65%)] z-[-1] pointer-events-none" />
                    </div>

                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[2] opacity-50">
                <div className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase">Scroll</div>
                <div className="w-[1px] h-9 bg-gradient-to-b from-indigo-500 to-transparent" />
            </div>
            
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50%       { transform: translateY(-8px); }
                }
            `}</style>
        </div>
    );
}
