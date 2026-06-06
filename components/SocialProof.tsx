import { DATA } from "@/lib/data";

export function SocialProof() {
    return (
        <section
            className="py-16 w-full overflow-hidden bg-slate-50 dark:bg-[#080d1a] border-y border-slate-200 dark:border-indigo-500/10 transition-colors duration-300"
        >
            <div className="container-standard">
                <p className="text-center text-[12px] font-bold tracking-[2px] uppercase text-slate-500 dark:text-indigo-400/80 mb-10">
                    Trusted by modern teams & startups
                </p>

                <div className="relative">
                    {/* Gradient masks for smooth scrolling edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-[60px] md:w-[100px] bg-gradient-to-r from-slate-50 to-transparent dark:from-[#080d1a] z-10 pointer-events-none transition-colors duration-300" />
                    <div className="absolute right-0 top-0 bottom-0 w-[60px] md:w-[100px] bg-gradient-to-l from-slate-50 to-transparent dark:from-[#080d1a] z-10 pointer-events-none transition-colors duration-300" />

                    <div className="flex overflow-hidden">
                        {/* Duplicate the items to create a seamless loop */}
                        <div className="flex animate-[scroll_30s_linear_infinite] whitespace-nowrap">
                            {[...DATA.techStack, ...DATA.techStack].map((tech, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 px-8 mx-4 group cursor-pointer transition-all duration-300"
                                >
                                    <div className="w-[40px] h-[40px] rounded-[10px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-indigo-500/20 flex items-center justify-center text-[18px] group-hover:border-indigo-400/50 dark:group-hover:border-indigo-400/50 group-hover:scale-110 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 transition-all duration-300 shadow-sm dark:shadow-none">
                                        {tech.icon}
                                    </div>
                                    <span className="text-[18px] font-bold text-slate-600 dark:text-slate-400 font-outfit group-hover:text-indigo-600 dark:group-hover:text-[#f0f4ff] transition-colors">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </section>
    );
}
