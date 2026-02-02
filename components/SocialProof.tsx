"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";

export function SocialProof() {
    return (
        <section className="py-12 border-y border-border/50 bg-secondary/20">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
                    {DATA.stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center space-y-2"
                        >
                            <h3 className="text-4xl font-bold tracking-tighter text-primary">
                                {stat.value}
                            </h3>
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
