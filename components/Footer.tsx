"use client";

import { DATA } from "@/lib/data";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const socialIconMap: Record<string, React.ComponentType<{ size?: number }>> = {
    GitHub: Github,
    LinkedIn: Linkedin,
    Twitter: Twitter,
    "Business Email": Mail,
};

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Tech Stack" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
];

export function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer
            style={{
                background: "linear-gradient(180deg, #060a14 0%, #040710 100%)",
                borderTop: "1px solid rgba(99, 102, 241, 0.12)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Ambient glow */}
            <div
                className="glow-blob glow-blob-violet"
                style={{ width: 400, height: 400, left: "20%", top: "-100px", opacity: 0.05 }}
            />

            <div className="container-standard" style={{ position: "relative", zIndex: 1 }}>
                {/* Main footer grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1.8fr 1fr 1fr",
                        gap: 48,
                        paddingTop: 64,
                        paddingBottom: 48,
                    }}
                    className="footer-grid"
                >
                    {/* Brand column */}
                    <div>
                        <Link
                            href="/"
                            style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: 900,
                                fontSize: 28,
                                textDecoration: "none",
                                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                letterSpacing: "-0.5px",
                                display: "block",
                                marginBottom: 14,
                            }}
                        >
                            Mukit.
                        </Link>
                        <p
                            style={{
                                fontSize: 14,
                                color: "#475569",
                                lineHeight: 1.75,
                                maxWidth: 300,
                                marginBottom: 24,
                            }}
                        >
                            Full Stack Developer & AI Specialist. Founder @ CoderNest Digital Solutions. Building the future, one line of code at a time.
                        </p>

                        {/* Social icons */}
                        <div style={{ display: "flex", gap: 10 }}>
                            {DATA.socials.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        style={{
                                            width: 38,
                                            height: 38,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            background: "rgba(99,102,241,0.08)",
                                            border: "1px solid rgba(99,102,241,0.15)",
                                            borderRadius: 10,
                                            color: "#64748b",
                                            textDecoration: "none",
                                            transition: "all 0.2s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.15)";
                                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.4)";
                                            (e.currentTarget as HTMLElement).style.color = "#a5b4fc";
                                            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.08)";
                                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.15)";
                                            (e.currentTarget as HTMLElement).style.color = "#64748b";
                                            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                        }}
                                    >
                                        <Icon size={16} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <div
                            style={{
                                fontSize: 12,
                                fontWeight: 700,
                                color: "#374151",
                                textTransform: "uppercase",
                                letterSpacing: 2,
                                marginBottom: 20,
                            }}
                        >
                            Navigation
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                            {navLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    style={{
                                        color: "#475569",
                                        textDecoration: "none",
                                        fontSize: 14,
                                        fontWeight: 500,
                                        transition: "color 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.target as HTMLElement).style.color = "#a5b4fc";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.target as HTMLElement).style.color = "#475569";
                                    }}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact info */}
                    <div>
                        <div
                            style={{
                                fontSize: 12,
                                fontWeight: 700,
                                color: "#374151",
                                textTransform: "uppercase",
                                letterSpacing: 2,
                                marginBottom: 20,
                            }}
                        >
                            Contact
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 14 }}>
                            <div>
                                <div style={{ color: "#374151", fontWeight: 600, fontSize: 12, marginBottom: 3 }}>BUSINESS</div>
                                <a
                                    href={`mailto:${DATA.contact.email}`}
                                    style={{ color: "#475569", textDecoration: "none" }}
                                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#a5b4fc"}
                                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = "#475569"}
                                >
                                    {DATA.contact.email}
                                </a>
                            </div>
                            <div>
                                <div style={{ color: "#374151", fontWeight: 600, fontSize: 12, marginBottom: 3 }}>PERSONAL</div>
                                <a
                                    href={`mailto:${DATA.contact.personalEmail}`}
                                    style={{ color: "#475569", textDecoration: "none" }}
                                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#a5b4fc"}
                                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = "#475569"}
                                >
                                    {DATA.contact.personalEmail}
                                </a>
                            </div>
                            <div>
                                <div style={{ color: "#374151", fontWeight: 600, fontSize: 12, marginBottom: 3 }}>LOCATION</div>
                                <span style={{ color: "#475569" }}>Bangladesh · Remote Worldwide</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="divider" />

                {/* Bottom bar */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "24px 0",
                        flexWrap: "wrap",
                        gap: 12,
                    }}
                >
                    <p style={{ fontSize: 13, color: "#374151" }}>
                        © {new Date().getFullYear()} <span style={{ color: "#6366f1" }}>{DATA.name}</span>. All rights reserved.
                    </p>
                    <p style={{ fontSize: 13, color: "#374151" }}>
                        Built with{" "}
                        <span style={{ color: "#6366f1" }}>Next.js</span> ·{" "}
                        <span style={{ color: "#8b5cf6" }}>TypeScript</span> ·{" "}
                        <span style={{ color: "#a855f7" }}>Tailwind</span>
                    </p>
                    <button
                        onClick={scrollToTop}
                        style={{
                            width: 36,
                            height: 36,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "rgba(99,102,241,0.1)",
                            border: "1px solid rgba(99,102,241,0.2)",
                            borderRadius: 8,
                            cursor: "pointer",
                            color: "#6366f1",
                            transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.2)";
                            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.1)";
                            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                        }}
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={16} />
                    </button>
                </div>
            </div>

            <style jsx global>{`
                @media (max-width: 768px) {
                    .footer-grid {
                        grid-template-columns: 1fr !important;
                        gap: 36px !important;
                        padding-top: 40px !important;
                    }
                }
            `}</style>
        </footer>
    );
}
