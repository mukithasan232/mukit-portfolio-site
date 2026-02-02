"use client";

import { DATA } from "@/lib/data";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border py-12">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <span className="font-bold text-xl tracking-tight">Mukit</span>
                        <p className="mt-2 text-sm text-muted-foreground">
                            {DATA.headline}
                        </p>
                    </div>

                    <div className="col-span-1 md:col-span-2 md:pl-10">
                        <h3 className="font-semibold mb-3">Links</h3>
                        <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                            <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
                            <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
                            <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
                            <Link href="#experience" className="hover:text-primary transition-colors">Experience</Link>
                            <Link href="#blog" className="hover:text-primary transition-colors">Blog</Link>
                            <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h3 className="font-semibold mb-3">Connect</h3>
                        <div className="flex space-x-4">
                            {DATA.socials.map((social) => (
                                <Link key={social.name} href={social.url} className="text-muted-foreground hover:text-primary transition-colors">
                                    <social.icon className="h-5 w-5" />
                                    <span className="sr-only">{social.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} {DATA.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
