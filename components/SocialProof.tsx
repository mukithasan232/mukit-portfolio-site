"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";

export function SocialProof() {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="container-standard">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 lg:gap-24">
                    {DATA.stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group text-center"
                        >
                            <div className="flex flex-col items-center">
                                <motion.span
                                    className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary/80 to-primary/40 group-hover:from-primary transition-all duration-500"
                                >
                                    {stat.value}
                                </motion.span>
                                <span className="mt-2 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/60 transition-colors group-hover:text-primary/80">
                                    {stat.label}
                                </span>
                            </div>

                            {/* Decorative line below on mobile */}
                            {index < DATA.stats.length - 1 && (
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-px bg-border sm:hidden" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Subtle background element */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-px w-full top-0" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        </section>
    );
}
