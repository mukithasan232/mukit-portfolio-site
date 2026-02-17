"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { DATA } from "@/lib/data";

export function About() {
    return (
        <section id="about" className="section-padding bg-background scroll-mt-20">
            <div className="container-standard">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            {DATA.about.title}
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-wrap">
                            {DATA.about.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {[
                                { title: "SEO-First", desc: "Search Engine Optimization" },
                                { title: "Mobile-First", desc: "Fully Responsive" },
                                { title: "Scalable", desc: "Clean Architecture" },
                                { title: "Optimized", desc: "Fast Performance" }
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col p-3 rounded-lg bg-card border border-border shadow-sm">
                                    <div className="flex items-center space-x-2 text-primary mb-1">
                                        <CheckCircle2 className="h-4 w-4" />
                                        <span className="font-bold text-sm tracking-tight">{item.title}</span>
                                    </div>
                                    <span className="text-[10px] text-muted-foreground uppercase">{item.desc}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <p className="text-sm font-medium text-muted-foreground mb-4">Want to discuss a project?</p>
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform"
                            >
                                Let&apos;s Talk
                            </Link>
                        </div>
                    </motion.div>

                    {/* Visual: Nature & Pixel Perfect Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
                        viewport={{ once: true }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative group w-full max-w-[420px] aspect-[4/5] sm:aspect-square">
                            {/* Refined Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-3xl blur-xl opacity-70" />

                            {/* Main Card Container */}
                            <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-border/50 shadow-2xl bg-card z-10 transition-all duration-500 group-hover:border-primary/50">
                                <Image
                                    src={DATA.profilePicture}
                                    alt={DATA.name}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                    unoptimized
                                    priority
                                />

                                {/* Subtle vignette for depth without tinting the person */}
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent z-20" />

                                <div className="absolute bottom-6 left-6 z-30">
                                    <div className="backdrop-blur-md bg-black/40 px-4 py-2 rounded-xl border border-white/10 shadow-lg">
                                        <p className="text-white text-xs font-semibold tracking-wide uppercase">
                                            Creative Developer
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Background Elements */}
                            <div className="absolute -z-0 -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-[60px] animate-pulse" />
                            <div className="absolute -z-0 -bottom-8 -right-8 w-32 h-32 bg-blue-500/10 rounded-full blur-[60px] animate-pulse delay-700" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
