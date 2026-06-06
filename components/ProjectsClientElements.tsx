"use client";

import { ExternalLink, Github, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Project {
    title: string;
    tagline: string;
    problem: string;
    solution: string;
    result: string;
    tech: string[];
    live: string;
    github: string;
    aiPowered: boolean;
    featured: boolean;
    images: string[];
}

function ProjectCard({ project }: { project: Project }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    return (
        <>
            <div className="group relative bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-indigo-500/15 rounded-[20px] overflow-hidden flex flex-col transition-all duration-300 h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(99,102,241,0.1)] hover:-translate-y-1">
                <div className="absolute inset-0 bg-transparent group-hover:bg-indigo-50/50 dark:group-hover:bg-indigo-500/5 transition-colors pointer-events-none" />
                
                {/* Image area */}
                <div
                    className="relative h-[200px] overflow-hidden bg-slate-100 dark:bg-gradient-to-br dark:from-indigo-500/10 dark:to-purple-500/5 shrink-0"
                    style={{ cursor: project.images?.length > 0 ? "pointer" : "default" }}
                    onClick={() => project.images?.length > 0 && setIsLightboxOpen(true)}
                >
                    {project.images?.length > 0 ? (
                        <img
                            src={project.images[currentImage]}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-[48px]">
                            🔷
                        </div>
                    )}

                    {/* Gradient overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/10 dark:to-slate-900/80 pointer-events-none" />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-1.5">
                        {project.aiPowered && (
                            <span className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 backdrop-blur-md">
                                <Sparkles size={10} />
                                Built with AI
                            </span>
                        )}
                        {project.featured && (
                            <span className="px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 backdrop-blur-md">
                                ⭐ Featured
                            </span>
                        )}
                    </div>

                    {/* Image dots */}
                    {project.images?.length > 1 && (
                        <div className="absolute bottom-2.5 right-3 flex gap-1">
                            {project.images.map((_: string, idx: number) => (
                                <button
                                    key={idx}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentImage(idx);
                                    }}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${
                                        idx === currentImage 
                                            ? "w-4.5 bg-indigo-500 dark:bg-gradient-to-r dark:from-indigo-400 dark:to-purple-400" 
                                            : "w-1.5 bg-white/60 dark:bg-white/30 hover:bg-white/90"
                                    }`}
                                    aria-label={`Image ${idx + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 flex-1 flex flex-col gap-3.5 relative z-10">
                    {/* Title & tagline */}
                    <div>
                        <h3 className="text-[20px] font-extrabold text-slate-900 dark:text-[#f0f4ff] mb-1 font-outfit">
                            {project.title}
                        </h3>
                        <p className="text-[13px] font-semibold text-indigo-600 dark:text-indigo-400">
                            {project.tagline}
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-[14px] text-slate-600 dark:text-[#64748b] leading-[1.65] flex-1">
                        {project.solution}
                    </p>

                    {/* Result */}
                    <div className="bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 rounded-lg px-3 py-2 text-[13px] text-slate-700 dark:text-indigo-200">
                        <span className="font-semibold text-indigo-700 dark:text-indigo-400">Impact: </span>
                        {project.result}
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mt-1">
                        {project.tech.map((t: string) => (
                            <span key={t} className="px-2 py-1 text-[11px] font-medium rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2.5 mt-2">
                        <Link
                            href={project.live || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-[13px] font-semibold transition-all duration-200 bg-indigo-600 text-white hover:bg-indigo-500 shadow-sm ${!project.live ? 'opacity-50 pointer-events-none' : ''}`}
                        >
                            <ExternalLink size={13} />
                            Live Demo
                        </Link>
                        <Link
                            href={project.github || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center py-2.5 px-4 rounded-xl text-[13px] font-semibold transition-all duration-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-white"
                        >
                            <Github size={16} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-[9999] bg-slate-900/80 dark:bg-black/90 backdrop-blur-md flex items-center justify-center p-5"
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <div
                        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-indigo-500/30 rounded-[20px] overflow-hidden max-w-[90vw] max-h-[90vh] shadow-2xl flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Lightbox header */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-indigo-500/15">
                            <span className="font-bold text-slate-900 dark:text-[#f0f4ff]">
                                {project.title}
                            </span>
                            <button
                                onClick={() => setIsLightboxOpen(false)}
                                className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-indigo-500/10 border border-slate-200 dark:border-indigo-500/20 text-slate-500 dark:text-indigo-300 hover:bg-slate-200 dark:hover:bg-indigo-500/20 transition-colors"
                            >
                                ×
                            </button>
                        </div>
                        <div className="p-2 overflow-auto flex-1 flex justify-center items-center bg-slate-50 dark:bg-black/50">
                            <img
                                src={project.images[currentImage]}
                                alt={project.title}
                                className="max-w-full max-h-[70vh] block rounded-xl shadow-sm"
                            />
                        </div>
                        {/* Image navigation */}
                        {project.images?.length > 1 && (
                            <div className="p-4 flex gap-1.5 justify-center border-t border-slate-100 dark:border-indigo-500/10 bg-white dark:bg-slate-900 shrink-0">
                                {project.images.map((_: string, idx: number) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImage(idx)}
                                        className={`h-2 rounded-full transition-all duration-300 ${
                                            idx === currentImage 
                                                ? "w-6 bg-indigo-500 dark:bg-gradient-to-r dark:from-indigo-400 dark:to-purple-400" 
                                                : "w-2 bg-slate-200 dark:bg-white/15 hover:bg-slate-300 dark:hover:bg-white/30"
                                        }`}
                                        aria-label={`Image ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export function ProjectFilterableList({ initialProjects }: { initialProjects: Project[] }) {
    const [filter, setFilter] = useState<"all" | "featured" | "ai">("all");

    const filteredProjects = initialProjects.filter((p) => {
        if (filter === "featured") return p.featured;
        if (filter === "ai") return p.aiPowered;
        return true;
    });

    return (
        <>
            {/* Filter buttons */}
            <div className="flex gap-2.5 justify-center flex-wrap mb-9">
                {[
                    { key: "all", label: "All Projects" },
                    { key: "featured", label: "⭐ Featured" },
                    { key: "ai", label: "✦ AI-Powered" },
                ].map((f) => (
                    <button
                        key={f.key}
                        onClick={() => setFilter(f.key as typeof filter)}
                        className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 ${
                            filter === f.key
                                ? "border border-indigo-600 dark:border-indigo-500/60 bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300"
                                : "border border-slate-200 dark:border-indigo-500/20 bg-white dark:bg-transparent text-slate-600 dark:text-slate-400 hover:border-indigo-300 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-300 shadow-sm dark:shadow-none"
                        }`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {/* Projects grid */}
            <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-6 mb-12">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </>
    );
}
