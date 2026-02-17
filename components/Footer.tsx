"use client";

import { DATA } from "@/lib/data";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border py-16 md:py-24">
            <div className="container-standard">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <span className="font-bold text-2xl tracking-tighter text-primary">Mukit.</span>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                            {DATA.subheading}
                        </p>
                        <div className="flex space-x-4 pt-2">
                            {DATA.socials.map((social) => (
                                <Link key={social.name} href={social.url} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors border border-border/50">
                                    <social.icon className="h-4 w-4" />
                                    <span className="sr-only">{social.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="md:pl-8">
                        <h3 className="font-bold text-sm uppercase tracking-widest mb-6 border-b border-border pb-2 inline-block">Navigation</h3>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-muted-foreground">
                            <Link href="#about" className="hover:text-primary transition-colors flex items-center gap-2">About</Link>
                            <Link href="#skills" className="hover:text-primary transition-colors flex items-center gap-2">Skills</Link>
                            <Link href="#projects" className="hover:text-primary transition-colors flex items-center gap-2">Projects</Link>
                            <Link href="#services" className="hover:text-primary transition-colors flex items-center gap-2">Services</Link>
                            <Link href="#experience" className="hover:text-primary transition-colors flex items-center gap-2">Experience</Link>
                            <Link href="#blog" className="hover:text-primary transition-colors flex items-center gap-2">Articles</Link>
                            <Link href="#testimonials" className="hover:text-primary transition-colors flex items-center gap-2">Testimonials</Link>
                            <Link href="#contact" className="hover:text-primary transition-colors flex items-center gap-2 font-bold text-foreground">Hire Me</Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-sm uppercase tracking-widest mb-6 border-b border-border pb-2 inline-block">Contact Info</h3>
                        <div className="space-y-4 text-sm text-muted-foreground">
                            <p className="flex items-center gap-2 italic">Ready to start a new project? Let&apos;s build something amazing together.</p>
                            <div>
                                <span className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1">Business</span>
                                <a href={`mailto:${DATA.contact.email}`} className="block hover:text-primary transition-colors underline underline-offset-4">{DATA.contact.email}</a>
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1">Personal</span>
                                <a href={`mailto:${DATA.contact.personalEmail}`} className="block hover:text-primary transition-colors underline underline-offset-4">{DATA.contact.personalEmail}</a>
                            </div>
                        </div>
                    </div>

                    {/* Map Integration */}
                    <div className="lg:col-span-1 border border-border/50 rounded-xl overflow-hidden bg-card h-[200px] shadow-sm">
                        <iframe
                            src={DATA.mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} {DATA.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
