import Link from "next/link";
import { DATA } from "@/lib/data";
import { Github } from "lucide-react";
import { ProjectFilterableList } from "./ProjectsClientElements";

export function Projects({ asH1 = false }: { asH1?: boolean }) {
    return (
        <section
            id="projects"
            className="section-padding w-full relative overflow-hidden bg-slate-50 dark:bg-gradient-to-b dark:from-[#080d1a] dark:to-[#0a0f1e] transition-colors duration-300"
        >
            {/* Background blobs - Only visible in dark mode */}
            <div className="absolute right-[10%] top-0 w-[500px] h-[500px] rounded-full blur-[80px] pointer-events-none opacity-0 dark:opacity-10 bg-purple-500/30 transition-opacity duration-300" />
            <div className="absolute left-[5%] bottom-[20%] w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none opacity-0 dark:opacity-[0.08] bg-indigo-500/30 transition-opacity duration-300" />

            <div className="container-standard relative z-10">
                {/* Section header */}
                <div className="text-center mb-14">
                    <span className="text-[13px] font-semibold tracking-[3px] uppercase text-indigo-600 dark:text-indigo-400 mb-3 block">
                        What I&apos;ve Built
                    </span>
                    {asH1 ? (
                        <h1 className="text-[clamp(32px,5vw,48px)] font-extrabold text-slate-900 dark:text-[#f0f4ff] mb-4 leading-[1.15] mx-auto">
                            Featured{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-500">
                                Projects
                            </span>
                        </h1>
                    ) : (
                        <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold text-slate-900 dark:text-[#f0f4ff] mb-4 leading-[1.15] mx-auto">
                            Featured{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-500">
                                Projects
                            </span>
                        </h2>
                    )}
                    <p className="text-[17px] text-slate-600 dark:text-[#94a3b8] max-w-[560px] leading-[1.7] mx-auto mb-9">
                        High-impact products built with modern stacks — from Hospital SaaS to AI-powered tools.
                    </p>
                </div>

                {/* Projects grid with filtering (Client Component) */}
                <ProjectFilterableList initialProjects={DATA.projects} />

                {/* GitHub CTA */}
                <div className="text-center mt-6">
                    <Link
                        href="https://github.com/mukithasan232"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline inline-flex"
                    >
                        <Github size={16} />
                        View All on GitHub
                    </Link>
                </div>
            </div>
        </section>
    );
}
