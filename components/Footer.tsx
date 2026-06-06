"use client";

import { DATA } from "@/lib/data";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

export function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="relative overflow-hidden bg-slate-50 dark:bg-gradient-to-b dark:from-[#060a14] dark:to-[#040710] border-t border-slate-200 dark:border-indigo-500/12 transition-colors duration-300">
            {/* Ambient glow - Dark mode only */}
            <div className="absolute left-[20%] top-[-100px] w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none opacity-0 dark:opacity-5 bg-purple-500/20 transition-opacity duration-300" />

            <div className="container-standard relative z-10">
                {/* Main footer grid */}
                <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1fr] gap-9 md:gap-12 pt-10 md:pt-16 pb-12">
                    {/* Brand column */}
                    <div>
                        <Link
                            href="/"
                            style={{ fontFamily: "'Outfit', sans-serif" }}
                            className="font-black text-[28px] tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-500 block mb-3.5"
                        >
                            Mukit.
                        </Link>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-[1.75] max-w-[300px] mb-6">
                            Full Stack Developer & AI Specialist. Founder @ CoderNest Digital Solutions. Building the future, one line of code at a time.
                        </p>

                        {/* Social icons */}
                        <div className="flex gap-2.5">
                            {DATA.socials.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200 bg-slate-100 dark:bg-indigo-500/10 border border-slate-200 dark:border-indigo-500/20 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:border-indigo-300 dark:hover:border-indigo-400/40 hover:bg-indigo-50 dark:hover:bg-indigo-500/15 hover:-translate-y-0.5"
                                    >
                                        <Icon size={16} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-5">
                            Navigation
                        </div>
                        <div className="flex flex-col gap-3">
                            {[
                                { href: "#about", label: "About" },
                                { href: "#skills", label: "Tech Stack" },
                                { href: "#projects", label: "Projects" },
                                { href: "#services", label: "Services" },
                                { href: "#contact", label: "Contact" },
                            ].map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors duration-200"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact info */}
                    <div>
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-5">
                            Contact
                        </div>
                        <div className="flex flex-col gap-3.5 text-sm">
                            <div>
                                <div className="text-slate-800 dark:text-slate-300 font-semibold text-xs mb-1">BUSINESS</div>
                                <a
                                    href={`mailto:${DATA.contact.email}`}
                                    className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                                >
                                    {DATA.contact.email}
                                </a>
                            </div>
                            <div>
                                <div className="text-slate-800 dark:text-slate-300 font-semibold text-xs mb-1">PERSONAL</div>
                                <a
                                    href={`mailto:${DATA.contact.personalEmail}`}
                                    className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                                >
                                    {DATA.contact.personalEmail}
                                </a>
                            </div>
                            <div>
                                <div className="text-slate-800 dark:text-slate-300 font-semibold text-xs mb-1">LOCATION</div>
                                <span className="text-slate-500 dark:text-slate-400">Bangladesh · Remote Worldwide</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-indigo-500/30 to-transparent m-0" />

                {/* Bottom bar */}
                <div className="flex justify-between items-center py-6 flex-wrap gap-3">
                    <p className="text-[13px] text-slate-500 dark:text-slate-400 font-medium">
                        © {new Date().getFullYear()} <span className="text-indigo-600 dark:text-indigo-400">{DATA.name}</span>. All rights reserved.
                    </p>
                    <p className="text-[13px] text-slate-500 dark:text-slate-400 font-medium">
                        Built with{" "}
                        <span className="text-indigo-600 dark:text-indigo-400">Next.js</span> ·{" "}
                        <span className="text-purple-600 dark:text-purple-400">TypeScript</span> ·{" "}
                        <span className="text-purple-500 dark:text-purple-400">Tailwind</span>
                    </p>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-indigo-500/5 px-2.5 py-1 rounded-full border border-slate-200 dark:border-indigo-500/10">
                        Available for Remote Work Worldwide | Overlapping with EST & CET timezones
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="w-9 h-9 flex items-center justify-center bg-slate-100 dark:bg-indigo-500/10 border border-slate-200 dark:border-indigo-500/20 rounded-lg text-indigo-600 dark:text-indigo-400 cursor-pointer transition-all duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-500/20 hover:-translate-y-0.5"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={16} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
