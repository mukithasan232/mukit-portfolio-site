"use client";

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

                    {/* Visual: Code Editor Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative rounded-lg border border-border bg-card shadow-2xl overflow-hidden">
                            <div className="flex items-center px-4 py-2 border-b border-border bg-muted/50">
                                <div className="flex space-x-2">
                                    <div className="h-3 w-3 rounded-full bg-red-500" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                    <div className="h-3 w-3 rounded-full bg-green-500" />
                                </div>
                                <div className="ml-4 text-xs text-muted-foreground font-mono">portfolio.tsx</div>
                            </div>
                            <div className="p-6 overflow-x-auto">
                                <pre className="text-sm font-mono text-foreground">
                                    <code>
                                        <span className="text-pink-500">const</span> <span className="text-blue-500">Developer</span> = <span className="text-yellow-500">{"{"}</span>{"\n"}
                                        {"  "}name: <span className="text-green-500">"MD Mukit Hasan"</span>,{"\n"}
                                        {"  "}role: <span className="text-green-500">"Full Stack Developer"</span>,{"\n"}
                                        {"  "}skills: [<span className="text-green-500">"Next.js"</span>, <span className="text-green-500">"React"</span>, <span className="text-green-500">"Tailwind"</span>],{"\n"}
                                        {"  "}hardWorker: <span className="text-blue-500">true</span>,{"\n"}
                                        {"  "}problemSolver: <span className="text-blue-500">true</span>,{"\n"}
                                        {"  "}hireable: <span className="text-blue-500">function</span>() <span className="text-yellow-500">{"{"}</span>{"\n"}
                                        {"    "}return <span className="text-green-500">"Ready to work!"</span>;{"\n"}
                                        {"  "}<span className="text-yellow-500">{"}"}</span>{"\n"}
                                        <span className="text-yellow-500">{"}"}</span>
                                    </code>
                                </pre>
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-[-20%] right-[-20%] h-[300px] w-[300px] bg-primary/20 rounded-full blur-[100px]" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
