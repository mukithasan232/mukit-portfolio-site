"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { DATA } from "@/lib/data";

export function Hero() {
    return (
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-12 md:pt-0">
            {/* Background Decorative Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl -z-10 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl space-y-6"
            >
                <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm text-primary text-xs font-semibold tracking-wider uppercase mb-4">
                    <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Available for New Projects
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1]">
                    <span className="block text-foreground">
                        {DATA.name.split(" ")[1]} {DATA.name.split(" ")[2]}
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient-x">
                        {DATA.role}
                    </span>
                </h1>

                <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed">
                    {DATA.headline.split("Building")[1] ? `Specializing in building ${DATA.headline.split("Building")[1]}` : DATA.headline}
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-8">
                    <Link
                        href="#contact"
                        className="group relative inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                    >
                        Start a Project
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="#projects"
                        className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-border bg-background/50 backdrop-blur-sm text-sm font-semibold transition-all hover:bg-accent hover:border-primary/30"
                    >
                        View My Work
                    </Link>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-muted-foreground/50"
                >
                    <ChevronDown className="h-6 w-6" />
                </motion.div>
            </motion.div>
        </section>
    );
}
