"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`sticky top-0 z-50 w-full bg-white/80 dark:bg-[#0B0F19]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 ${
                    scrolled ? "shadow-sm" : ""
                }`}
            >
                <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-6 py-4">
                    {/* Logo */}
                    <Link
                        href="/"
                        style={{
                            fontFamily: "'Outfit', sans-serif",
                            textDecoration: "none",
                            background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.5px",
                        }}
                        className="text-2xl font-bold"
                    >
                        Mukit<span className="text-indigo-500">.</span>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 tracking-wide text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-indigo-500/10"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-3 md:gap-4">
                        <ThemeToggle />
                        <div className="hidden md:block">
                            <Link
                                href="/contact"
                                className="btn-primary px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base"
                            >
                                <span>Let&apos;s Talk</span>
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center justify-center md:hidden p-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="bg-white/95 dark:bg-[#080d1a]/95 backdrop-blur-xl border-t border-slate-200 dark:border-indigo-500/15 px-6 pt-4 pb-6 absolute w-full left-0 right-0">
                        <div className="flex flex-col gap-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 text-base font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="btn-primary mt-3 flex justify-center text-center px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base"
                            >
                                <span>Let&apos;s Talk</span>
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
