"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";

export function Skills() {
    return (
        <section id="skills" className="py-20 bg-secondary/10">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Technical Proficiency</h2>
                    <p className="mt-4 text-muted-foreground text-lg">My go-to tech stack for building amazing products.</p>
                </div>

                <div className="grid gap-12 md:grid-cols-2 max-w-4xl mx-auto">
                    {/* Frontend */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold border-b pb-2">Frontend Development</h3>
                        <div className="space-y-6">
                            {DATA.skills.frontend.map((skill, index) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium">{skill.name}</span>
                                        <span className="text-muted-foreground">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                            className="h-full bg-primary rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend & Tools */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold border-b pb-2">Backend & Tools</h3>
                        <div className="space-y-6">
                            {DATA.skills.backend.map((skill, index) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium">{skill.name}</span>
                                        <span className="text-muted-foreground">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                            className="h-full bg-blue-600 rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
