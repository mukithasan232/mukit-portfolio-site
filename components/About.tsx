"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { DATA } from "@/lib/data";

export function About() {
    return (
        <section id="about" className="py-20 bg-background">
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

                    {/* Visual: Profile Image Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
                        viewport={{ once: true }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative group w-full max-w-[400px] aspect-[4/5] sm:aspect-square md:aspect-[4/5] lg:aspect-square">
                            {/* Multi-layered Light Effects */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/40 to-blue-500/40 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-blue-500/20 rounded-2xl z-10 pointer-events-none" />

                            {/* Main Card Container */}
                            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-muted/30 backdrop-blur-sm z-0">
                                <Image
                                    src={DATA.profilePicture}
                                    alt={DATA.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />

                                {/* Bottom Overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent z-10 hidden sm:block" />
                                <div className="absolute bottom-4 left-4 z-20 hidden sm:block">
                                    <p className="text-white/90 text-sm font-medium backdrop-blur-md bg-white/10 px-3 py-1 rounded-full border border-white/10">
                                        Creative Developer
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 rounded-full blur-xl z-[-1]"
                            />
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-500/20 rounded-full blur-xl z-[-1]"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
