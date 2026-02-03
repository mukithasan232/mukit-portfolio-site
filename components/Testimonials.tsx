"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import { Quote } from "lucide-react";

export function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-secondary/10 scroll-mt-20">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                        Kind Words from Clients
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                        Trusted by founders and companies for delivering high-quality, professional-grade web solutions.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:max-w-5xl lg:mx-auto">
                    {DATA.testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card border border-border p-8 rounded-2xl relative shadow-sm hover:shadow-md transition-shadow group"
                        >
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <Quote className="absolute top-6 right-8 h-12 w-12 text-primary/5 group-hover:text-primary/10 transition-colors" />
                            <p className="text-lg text-muted-foreground italic mb-8 relative z-10 leading-relaxed">
                                &quot;{testimonial.content}&quot;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm uppercase">
                                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <div className="font-bold text-sm tracking-tight flex items-center gap-2">
                                        {testimonial.name}
                                        <span className="flex items-center gap-1 bg-green-500/10 text-green-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase">
                                            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                            Verified
                                        </span>
                                    </div>
                                    <div className="text-xs text-muted-foreground uppercase">{testimonial.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
