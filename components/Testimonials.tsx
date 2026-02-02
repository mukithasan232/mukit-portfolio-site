"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import { Quote } from "lucide-react";

export function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-secondary/10">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-16">
                    What People Say
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
                    {DATA.testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card border border-border p-8 rounded-xl relative shadow-sm"
                        >
                            <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
                            <p className="text-lg text-muted-foreground italic mb-6">
                                "{testimonial.content}"
                            </p>
                            <div>
                                <div className="font-bold">{testimonial.name}</div>
                                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
