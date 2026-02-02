"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { DATA } from "@/lib/data";

export function Blog() {
    return (
        <section id="blog" className="py-20 bg-background border-t border-border/50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latest Articles</h2>
                        <p className="mt-2 text-muted-foreground text-lg">Insights on development, design, and growth.</p>
                    </div>
                    <Link href="#" className="hidden md:inline-flex items-center text-primary hover:underline font-medium">
                        View All Posts <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {DATA.blog.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[1.6] rounded-xl bg-muted/50 mb-4 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-50 group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur px-2 py-1 rounded text-xs font-semibold">
                                    {post.category}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-xs text-muted-foreground">{post.date}</div>
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-muted-foreground text-sm line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <div className="inline-flex items-center text-primary text-sm font-medium mt-2">
                                    Read Article <ArrowRight className="ml-1 h-3 w-3" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="#" className="inline-flex items-center text-primary hover:underline font-medium">
                        View All Posts <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
