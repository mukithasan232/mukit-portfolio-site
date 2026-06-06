import { Zap, Database, Server, Component, Palette, Cloud, Code2, ShieldPlus, TrendingUp, BriefcaseBusiness } from "lucide-react";

const TECH_STACK = [
    { name: "Next.js", icon: Zap, color: "text-black dark:text-white" },
    { name: "React", icon: Component, color: "text-[#61DAFB]" },
    { name: "Node.js", icon: Server, color: "text-[#339933]" },
    { name: "PostgreSQL", icon: Database, color: "text-[#336791]" },
    { name: "MongoDB Atlas", icon: Database, color: "text-[#47A248]" },
    { name: "Tailwind CSS", icon: Palette, color: "text-[#06B6D4]" },
    { name: "Vercel", icon: Cloud, color: "text-black dark:text-white" },
];

const PRODUCTS = [
    { name: "MedOS", description: "Hospital Management", icon: ShieldPlus, color: "text-rose-500" },
    { name: "SMM Elite", description: "Reseller Panel", icon: TrendingUp, color: "text-emerald-500" },
    { name: "CoderNest", description: "Digital Solutions", icon: BriefcaseBusiness, color: "text-indigo-500" },
];

export function GlobalTrustSignals() {
    return (
        <section className="py-20 border-t border-slate-200 dark:border-indigo-500/10 bg-slate-50 dark:bg-gradient-to-b dark:from-[#060a14] dark:to-[#080d1a] transition-colors duration-300">
            <div className="container-standard">
                
                {/* Tech Stack Marquee */}
                <div className="mb-16">
                    <p className="text-sm font-bold text-slate-500 dark:text-indigo-400 uppercase tracking-[0.2em] mb-10 text-center">
                        Powered By Enterprise-Grade Technologies
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
                        {TECH_STACK.map((tech, idx) => {
                            const Icon = tech.icon;
                            return (
                                <div 
                                    key={idx} 
                                    className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
                                >
                                    <Icon size={24} className={tech.color} />
                                    <span className="text-slate-800 dark:text-slate-200 font-bold font-outfit text-xl tracking-wide">
                                        {tech.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Products Marquee */}
                <div className="pt-16 border-t border-slate-200 dark:border-white/5">
                    <p className="text-sm font-bold text-slate-500 dark:text-purple-400 uppercase tracking-[0.2em] mb-10 text-center">
                        Proudly Built & Founded
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
                        {PRODUCTS.map((product, idx) => {
                            const Icon = product.icon;
                            return (
                                <div 
                                    key={idx} 
                                    className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default bg-white dark:bg-slate-900/40 px-6 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
                                >
                                    <div className={`p-3 rounded-full bg-slate-100 dark:bg-slate-800/80 mb-3 sm:mb-0 ${product.color}`}>
                                        <Icon size={24} />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <div className="text-slate-900 dark:text-white font-black font-outfit text-xl tracking-tight">
                                            {product.name}
                                        </div>
                                        <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                            {product.description}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
