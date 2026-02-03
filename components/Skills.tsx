"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";

export function Skills() {
    return (
        <section id="skills" className="py-20 bg-secondary/10 scroll-mt-20">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Technical Mastery</h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                        My expertise spans the entire development lifecycle, from high-performance frontends to secure backend integrations.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
                    {/* Frontend & UI */}
                    <div className="space-y-8 p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                <span className="text-blue-500 text-sm">01</span>
                            </div>
                            Frontend & UI
                        </h3>
                        <div className="space-y-6">
                            {DATA.skills.frontend.map((skill, index) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium text-sm">{skill.name}</span>
                                        <span className="text-muted-foreground text-xs">{skill.level}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                            className="h-full bg-blue-500 rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend & Logic */}
                    <div className="space-y-8 p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                                <span className="text-green-500 text-sm">02</span>
                            </div>
                            Backend & Logic
                        </h3>
                        <div className="space-y-6">
                            {DATA.skills.backend.map((skill, index) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium text-sm">{skill.name}</span>
                                        <span className="text-muted-foreground text-xs">{skill.level}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                            className="h-full bg-green-500 rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Power Moves */}
                    <div className="space-y-8 p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                                <span className="text-purple-500 text-sm">03</span>
                            </div>
                            Power Moves
                        </h3>
                        <div className="space-y-4">
                            {[
                                { name: "Problem Solving", tag: "Analytical" },
                                { name: "Rapid Prototyping", tag: "Fast" },
                                { name: "Technical SEO", tag: "Growth" },
                                { name: "Team Collaboration", tag: "Communicative" },
                                { name: "Continuous Learning", tag: "Modern" }
                            ].map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-border"
                                >
                                    <span className="font-medium text-sm">{skill.name}</span>
                                    <span className="px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 text-[10px] font-bold uppercase">{skill.tag}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
