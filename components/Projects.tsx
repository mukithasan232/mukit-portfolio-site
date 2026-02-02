"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { DATA } from "@/lib/data";
// Inline Badge style for speed

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden flex flex-col"
        >
            <div className="aspect-video w-full bg-muted/50 relative overflow-hidden flex items-center justify-center">
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
                            <div className="absolute bottom-2 right-2 flex gap-1 z-10">
                                {project.images.map((_: any, idx: number) => (
                                    <button
                                        key={idx}
                                        onClick={(e) => { e.preventDefault(); setCurrentImage(idx); }}
                                        className={`h-2 w-2 rounded-full transition-all ${currentImage === idx ? "bg-primary w-4" : "bg-primary/30 hover:bg-primary/50"}`}
                                    />
                                ))}
                            </div>
                        )}
                        {/* Auto-play or hover effect could be added here, but simple click dots are safe */}
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
                        <span className="font-semibold text-foreground">Problem:</span> <span className="text-muted-foreground">{/* @ts-ignore */}{project.problem}</span>
                    </div>
                    <div>
                        <span className="font-semibold text-foreground">Solution:</span> <span className="text-muted-foreground">{/* @ts-ignore */}{project.solution}</span>
                    </div>
                    <div>
                        <span className="font-semibold text-foreground">Result:</span> <span className="text-muted-foreground">{/* @ts-ignore */}{project.result}</span>
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
    );
};

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Featured Projects</h2>
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
