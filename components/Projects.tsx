"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { DATA } from "@/lib/data";
// Inline Badge style for speed

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImage((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden flex flex-col"
            >
                <div
                    className="aspect-video w-full bg-muted/50 relative overflow-hidden flex items-center justify-center cursor-pointer"
                    onClick={() => project.images && project.images.length > 0 && setIsLightboxOpen(true)}
                >
                    {project.images && project.images.length > 0 ? (
                        <>
                            <motion.img
                                key={currentImage}
                                src={project.images[currentImage]}
                                alt={project.title}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            {project.images.length > 1 && (
                                <div className="absolute bottom-2 right-2 flex gap-1 z-10" onClick={(e) => e.stopPropagation()}>
                                    {project.images.map((_: any, idx: number) => (
                                        <button
                                            key={idx}
                                            onClick={(e) => { e.preventDefault(); setCurrentImage(idx); }}
                                            className={`h-2 w-2 rounded-full transition-all ${currentImage === idx ? "bg-primary w-4" : "bg-primary/30 hover:bg-primary/50"}`}
                                        />
                                    ))}
                                </div>
                            )}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="bg-background/80 text-foreground text-xs px-2 py-1 rounded backdrop-blur-sm">Click to View</span>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 group-hover:scale-105 transition-transform duration-500" />
                            <span className="z-10 text-muted-foreground font-semibold px-4 text-center">{project.title} Preview</span>
                        </>
                    )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>

                    <div className="space-y-3 mb-6 flex-1 text-sm">
                        <div>
                            <span className="font-semibold text-foreground">Problem:</span> <span className="text-muted-foreground">{project.problem}</span>
                        </div>
                        <div>
                            <span className="font-semibold text-foreground">Solution:</span> <span className="text-muted-foreground">{project.solution}</span>
                        </div>
                        <div>
                            <span className="font-semibold text-foreground">Result:</span> <span className="text-muted-foreground">{project.result}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t: string) => (
                            <span key={t} className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80">
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4 mt-auto">
                        <Link
                            href={project.live}
                            target="_blank"
                            className="flex-1 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
                        >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                        </Link>
                        <Link
                            href={project.github}
                            target="_blank"
                            className="flex-1 inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* Lightbox / Modal */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <button
                        className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <ExternalLink className="h-8 w-8 rotate-45" /> {/* Using rotate-45 ExternalLink as a makeshift X or I should import X */}
                    </button>

                    <div
                        className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {project.images.length > 1 && (
                            <button
                                className="absolute left-2 md:-left-12 text-white/70 hover:text-white bg-black/50 p-2 rounded-full md:bg-transparent"
                                onClick={prevImage}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                            </button>
                        )}

                        <motion.img
                            key={currentImage}
                            src={project.images[currentImage]}
                            alt={project.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-full max-h-[85vh] object-contain rounded-md"
                        />

                        {project.images.length > 1 && (
                            <button
                                className="absolute right-2 md:-right-12 text-white/70 hover:text-white bg-black/50 p-2 rounded-full md:bg-transparent"
                                onClick={nextImage}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </button>
                        )}

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
                            {currentImage + 1} / {project.images.length}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export function Projects() {
    return (
        <section id="projects" className="section-padding bg-background scroll-mt-20">
            <div className="container-standard">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary uppercase font-black tracking-tight">Featured Projects</h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                        A selection of projects that demonstrate my ability to solve complex problems and deliver high-quality web applications.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {DATA.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="https://github.com/mukithasan232" className="text-primary hover:underline font-medium inline-flex items-center">
                        View more projects on GitHub <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
