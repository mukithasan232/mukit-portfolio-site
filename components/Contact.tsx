"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { DATA } from "@/lib/data";

export function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Start mailto link construction
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        window.location.href = `mailto:${DATA.socials.find(s => s.name === "Email")?.url.replace("mailto:", "")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contact" className="py-20 bg-background scroll-mt-20">
            <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Let&apos;s build something great together 🚀</h2>
                            <p className="text-muted-foreground text-lg">
                                Have a project or idea? I’m always open to new opportunities.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Email Me</h4>
                                    <a href={DATA.socials.find(s => s.name === "Email")?.url} className="text-muted-foreground hover:text-primary transition-colors">
                                        {DATA.socials.find(s => s.name === "Email")?.url.replace("mailto:", "")}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Location</h4>
                                    <p className="text-muted-foreground text-sm">Available Remote / Worldwide</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse mr-0.5" />
                                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Availability</h4>
                                    <p className="text-muted-foreground text-sm">Open for new projects</p>
                                </div>
                            </div>

                            <div className="pt-4 p-4 rounded-xl bg-card border border-border/50 shadow-sm">
                                <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Usual Working Hours</h4>
                                <div className="grid grid-cols-2 gap-y-1 text-xs text-muted-foreground">
                                    <span>Mon - Fri:</span>
                                    <span className="text-right">9:00 AM - 6:00 PM</span>
                                    <span>Saturday:</span>
                                    <span className="text-right">10:00 AM - 2:00 PM</span>
                                    <span>Sunday:</span>
                                    <span className="text-right text-primary font-medium">Rest Day</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-semibold mb-4">Connect with me</h4>
                            <div className="flex space-x-4">
                                {DATA.socials.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1"
                                        aria-label={social.name}
                                    >
                                        <social.icon className="h-5 w-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-card border border-border rounded-xl p-8 shadow-sm"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    required
                                    placeholder="John Doe"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="john@example.com"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    placeholder="Tell me about your project..."
                                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center w-full h-11 rounded-md bg-primary text-primary-foreground font-medium shadow hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            >
                                Send Message
                                <Send className="ml-2 h-4 w-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
