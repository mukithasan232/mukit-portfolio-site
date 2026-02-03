"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import { Code, Layout, Smartphone, Zap } from "lucide-react";

const icons = [Code, Layout, Smartphone, Zap];

export function Services() {
    return (
        <section id="services" className="py-20 bg-secondary/10 scroll-mt-20">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Expert Services</h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        I specialize in building high-conversion, performance-driven web solutions tailored to your unique business needs.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-20">
                    {DATA.services.map((service, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
                            >
                                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Icon className="h-7 w-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Development Process */}
                <div className="pt-20 border-t border-border/50">
                    <h3 className="text-2xl font-bold text-center mb-12">How I Work</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Strategy", desc: "Understanding goals & planning the architecture." },
                            { step: "02", title: "Design", desc: "Crafting pixel-perfect, modern UI/UX components." },
                            { step: "03", title: "Develop", desc: "Building with clean code and high performance." },
                            { step: "04", title: "Launch", desc: "Thorough testing and seamless deployment." }
                        ].map((item, idx) => (
                            <div key={idx} className="relative group">
                                <span className="text-5xl font-black text-primary/5 absolute -top-4 -left-2 group-hover:text-primary/10 transition-colors uppercase italic">{item.step}</span>
                                <div className="relative z-10">
                                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
