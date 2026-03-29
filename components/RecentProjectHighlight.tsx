"use client";

import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";

export const RecentProjectHighlight = () => {
    // Get the last 2 projects as the most recent ones
    const recentProjects = [...DATA.projects].reverse().slice(0, 2);

    return (
        <section className="py-24 bg-gradient-to-b from-background to-accent/20 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-standard relative z-10">
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <motion.span 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block"
                        >
                            Showcase
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-black tracking-tight text-foreground"
                        >
                            Recent Highlights
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href="#projects" className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium">
                            View All Projects 
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="space-y-24 md:space-y-32">
                    {recentProjects.map((project, index) => (
                        <div key={index} className={`flex flex-col gap-10 lg:gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
                            
                            {/* Image Section */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="w-full lg:w-3/5"
                            >
                                <div className="group relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-muted/30 border border-white/5 shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    {project.images && project.images.length > 0 ? (
                                        <img 
                                            src={project.images[0]} 
                                            alt={project.title} 
                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-accent/20">
                                            <span className="text-muted-foreground font-semibold">No Image Available</span>
                                        </div>
                                    )}
                                    <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <Link 
                                            href={project.live} 
                                            target="_blank"
                                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 shadow-xl backdrop-blur-md"
                                        >
                                            View Live Demo <ExternalLink className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Content Section */}
                            <motion.div 
                                initial={{ opacity: 0, x: index % 2 !== 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="w-full lg:w-2/5 flex flex-col justify-center"
                            >
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.slice(0, 4).map((t) => (
                                        <span key={t} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wide">
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 4 && (
                                        <span className="px-3 py-1 rounded-full bg-muted border border-border text-muted-foreground text-xs font-bold tracking-wide">
                                            +{project.tech.length - 4}
                                        </span>
                                    )}
                                </div>
                                
                                <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight">
                                    {project.title.split(' - ')[0]}
                                </h3>
                                
                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                    {project.solution}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-card/50 p-4 rounded-xl border border-border/50">
                                        <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-red-500" /> Challenge
                                        </h4>
                                        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                                            {project.problem}
                                        </p>
                                    </div>
                                    <div className="bg-card/50 p-4 rounded-xl border border-border/50">
                                        <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500" /> Result
                                        </h4>
                                        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                                            {project.result}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                                    <Link 
                                        href={project.github}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <Github className="h-5 w-5" /> Source Code
                                    </Link>
                                    <div className="w-px h-4 bg-border" />
                                    <Link 
                                        href={project.live}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <ExternalLink className="h-5 w-5" /> Live Site
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
