"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { DATA } from "@/lib/data";

export function Blog() {
    return (
        <section id="blog" className="py-20 bg-background border-t border-border/50 scroll-mt-20">
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
                                {post.image && (
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-30 group-hover:opacity-10 transition-opacity duration-500" />
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

                {/* Newsletter Signup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-blue-500/5 border border-primary/10 relative overflow-hidden"
                >
                    <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Stay ahead of the curve.</h3>
                        <p className="text-muted-foreground">Subscribe to my newsletter for the latest insights on web development, modern UI trends, and SEO strategies.</p>
                        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 h-12 rounded-full border border-border bg-background px-6 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                                required
                            />
                            <button className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform">
                                Subscribe
                            </button>
                        </form>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">No spam. Only high-quality dev content.</p>
                    </div>
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                </motion.div>
            </div>
        </section>
    );
}
