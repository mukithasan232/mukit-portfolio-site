"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

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
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 9999,
                    transition: "all 0.3s ease",
                    padding: scrolled ? "12px 0" : "20px 0",
                    background: scrolled
                        ? "rgba(8, 13, 26, 0.85)"
                        : "transparent",
                    backdropFilter: scrolled ? "blur(24px)" : "none",
                    WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
                    borderBottom: scrolled
                        ? "1px solid rgba(99, 102, 241, 0.15)"
                        : "1px solid transparent",
                }}
            >
                <div className="container-standard" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    {/* Logo */}
                    <Link
                        href="/"
                        style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: 800,
                            fontSize: 22,
                            textDecoration: "none",
                            background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.5px",
                        }}
                    >
                        Mukit<span style={{ color: "#6366f1" }}>.</span>
                    </Link>

                    {/* Desktop nav */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                        }}
                        className="hidden-mobile"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                style={{
                                    color: "#94a3b8",
                                    textDecoration: "none",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    padding: "8px 16px",
                                    borderRadius: 8,
                                    transition: "all 0.2s ease",
                                    letterSpacing: "0.2px",
                                }}
                                onMouseEnter={(e) => {
                                    (e.target as HTMLElement).style.color = "#fff";
                                    (e.target as HTMLElement).style.background = "rgba(99, 102, 241, 0.1)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.target as HTMLElement).style.color = "#94a3b8";
                                    (e.target as HTMLElement).style.background = "transparent";
                                }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <Link
                            href="#contact"
                            className="btn-primary hidden-mobile"
                            style={{ padding: "10px 22px", fontSize: 14 }}
                        >
                            <span>Let&apos;s Talk</span>
                        </Link>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            style={{
                                background: "rgba(99, 102, 241, 0.1)",
                                border: "1px solid rgba(99, 102, 241, 0.2)",
                                borderRadius: 8,
                                padding: "8px",
                                cursor: "pointer",
                                color: "#a5b4fc",
                                display: "none",
                            }}
                            className="mobile-menu-btn"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div
                        style={{
                            background: "rgba(8, 13, 26, 0.97)",
                            backdropFilter: "blur(24px)",
                            borderTop: "1px solid rgba(99, 102, 241, 0.15)",
                            padding: "16px 24px 24px",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    style={{
                                        color: "#94a3b8",
                                        textDecoration: "none",
                                        fontSize: 16,
                                        fontWeight: 500,
                                        padding: "12px 16px",
                                        borderRadius: 10,
                                        transition: "all 0.2s ease",
                                        display: "block",
                                    }}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="btn-primary"
                                style={{ marginTop: 12, justifyContent: "center", textAlign: "center" }}
                            >
                                <span>Let&apos;s Talk</span>
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            <style jsx global>{`
                @media (max-width: 768px) {
                    .hidden-mobile {
                        display: none !important;
                    }
                    .mobile-menu-btn {
                        display: flex !important;
                        align-items: center;
                        justify-content: center;
                    }
                }
            `}</style>
        </>
    );
}
