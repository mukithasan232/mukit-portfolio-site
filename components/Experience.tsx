"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Experience() {
    return (
        <section id="experience" className="section-padding bg-background scroll-mt-20">
            <div className="container-standard">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                        Career Journey
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                        My evolution from an enthusiastic learner to a professional developer shipping real-world applications.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative px-4 md:px-0">
                    {/* Central Vertical Line */}
                    <div className="absolute left-9 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/0 via-border to-blue-500/0 hidden md:block" />

                    <div className="space-y-12">
                        {DATA.experience.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={cn(
                                    "relative flex flex-col md:flex-row items-start md:items-center gap-8",
                                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                )}
                            >
                                {/* Year Marker for Desktop */}
                                <div className={cn(
                                    "flex-1 hidden md:flex items-center",
                                    index % 2 === 0 ? "justify-end text-right" : "justify-start text-left"
                                )}>
                                    <div className="space-y-1">
                                        <time className="text-sm font-bold text-primary tracking-widest uppercase">{item.year}</time>
                                        <h4 className="text-muted-foreground text-xs font-medium uppercase tracking-tighter">{item.company}</h4>
                                    </div>
                                </div>

                                {/* Icon / Node */}
                                <div className="absolute md:relative left-0 md:left-auto w-10 h-10 rounded-full border border-border bg-card shadow-lg flex items-center justify-center z-10 shrink-0">
                                    <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 w-full pl-14 md:pl-0">
                                    <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow relative group">
                                        <div className="md:hidden mb-2">
                                            <time className="text-[10px] font-bold text-primary tracking-widest uppercase">{item.year}</time>
                                            <div className="text-xs text-muted-foreground">{item.company}</div>
                                        </div>
                                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{item.role}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>

                                        {/* Decorative Corner */}
                                        <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden rounded-tr-2xl">
                                            <div className="absolute top-0 right-0 w-16 h-1 w-full bg-primary/5 rotate-45 transform origin-top-right" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
