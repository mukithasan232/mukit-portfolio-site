"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import { Code, Layout, Smartphone, Zap } from "lucide-react";

const icons = [Code, Layout, Smartphone, Zap];

export function Services() {
    return (
        <section id="services" className="py-20 bg-secondary/10">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Services</h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                        I help businesses grow by building modern, fast, and reliable web applications.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {DATA.services.map((service, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <Icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
