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

                    {/* Visual: Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-border shadow-2xl bg-muted">
                            <Image
                                src="/me.png"
                                alt={DATA.name}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-[-20%] right-[-20%] h-[300px] w-[300px] bg-primary/20 rounded-full blur-[100px]" />
                        <div className="absolute -z-10 bottom-[-20%] left-[-20%] h-[300px] w-[300px] bg-secondary/20 rounded-full blur-[100px]" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
