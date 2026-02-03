"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { DATA } from "@/lib/data";

export function About() {
    return (
        <section id="about" className="py-24 bg-background scroll-mt-20">
            <div className="container px-4 md:px-6">
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

                        <div className="space-y-2">
                            {[
                                "SEO-First Development",
                                "Responsive & Mobile-First",
                                "Clean & Scalable Architecture",
                                "Performance Optimized"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
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
