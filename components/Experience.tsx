"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";

export function Experience() {
    return (
        <section id="experience" className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-16">
                    My Journey
                </h2>

                <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                    {DATA.experience.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform" />
                            </div>

                            <div className="hidden md:block w-5/12" /> {/* Spacer */}

                            <div className="w-[calc(100%-4rem)] md:w-5/12 p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col sm:flex-row justify-between mb-1">
                                    <h3 className="font-bold text-lg">{item.role}</h3>
                                    <time className="text-xs font-medium text-muted-foreground uppercase">{item.year}</time>
                                </div>
                                <div className="text-primary text-sm font-medium mb-2">{item.company}</div>
                                <p className="text-muted-foreground text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
