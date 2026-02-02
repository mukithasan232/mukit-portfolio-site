"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { DATA } from "@/lib/data";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-background">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
                        Available for Hire
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 block mb-2">
                            Modern Web Developer
                        </span>
                        <span className="block text-2xl sm:text-3xl md:text-4xl text-foreground font-bold mt-4 leading-tight">
                            Building Fast, SEO-Optimized & Scalable Websites
                        </span>
                    </h1>

                    <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl mt-6 leading-relaxed">
                        {DATA.subheading}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mt-8"
                >
                    <Link
                        href="#contact"
                        className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-transform hover:scale-105 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        {DATA.cta.primary}
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                        href="#projects"
                        className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-transform hover:scale-105 hover:bg-accent hover:text-accent-foreground"
                    >
                        {DATA.cta.secondary}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
