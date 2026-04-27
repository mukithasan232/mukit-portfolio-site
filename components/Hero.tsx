"use client";

import Link from "next/link";
import { DATA } from "@/lib/data";
import { ArrowRight, Download, Sparkles, Code2, Cpu, Globe, Zap, Star, GitBranch } from "lucide-react";
import { useEffect, useState } from "react";

const TYPING_PHRASES = [
    "Full Stack Web Developer",
    "AI Integration Specialist",
    "SaaS Architect",
    "Next.js Engineer",
];

function TypingText() {
    const [text, setText] = useState("");
    const [phraseIdx, setPhraseIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const phrase = TYPING_PHRASES[phraseIdx];
        const delay = deleting ? 40 : charIdx === phrase.length ? 2000 : 70;
        const timeout = setTimeout(() => {
            if (!deleting && charIdx < phrase.length) {
                setText(phrase.slice(0, charIdx + 1));
                setCharIdx((c) => c + 1);
            } else if (!deleting && charIdx === phrase.length) {
                setDeleting(true);
            } else if (deleting && charIdx > 0) {
                setText(phrase.slice(0, charIdx - 1));
                setCharIdx((c) => c - 1);
            } else {
                setDeleting(false);
                setPhraseIdx((i) => (i + 1) % TYPING_PHRASES.length);
            }
        }, delay);
        return () => clearTimeout(timeout);
    }, [charIdx, deleting, phraseIdx]);

    return (
        <span style={{ color: "#a5b4fc" }}>
            {text}
            <span
                style={{
                    display: "inline-block",
                    width: "2px",
                    height: "1em",
                    background: "#6366f1",
                    marginLeft: "2px",
                    verticalAlign: "middle",
                    animation: "blink 1s step-end infinite",
                }}
            />
        </span>
    );
}

/* ── Right-side floating panel ─────────────────────────── */

const CODE_LINES = [
    { token: "const", color: "#8b5cf6" },
    { token: "  mukit", color: "#e2e8f0" },
    { token: "  stack:", color: "#94a3b8" },
    { token: "    nextjs", color: "#6366f1" },
    { token: "    nodejs", color: "#10b981" },
    { token: "    prisma", color: "#f59e0b" },
    { token: "    gemini", color: "#06b6d4" },
    { token: "  type: 'fullstack'", color: "#a5b4fc" },
    { token: "  ai: true", color: "#10b981" },
];

function CodeCard() {
    const [visible, setVisible] = useState(0);

    useEffect(() => {
        if (visible >= CODE_LINES.length) return;
        const t = setTimeout(() => setVisible((v) => v + 1), 220);
        return () => clearTimeout(t);
    }, [visible]);

    return (
        <div
            style={{
                background: "rgba(8, 13, 26, 0.85)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(99,102,241,0.25)",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04) inset",
            }}
        >
            {/* Window chrome */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "10px 14px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(255,255,255,0.03)",
                }}
            >
                {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                ))}
                <span style={{ marginLeft: 8, fontSize: 11, color: "#475569", fontFamily: "monospace" }}>
                    mukit.config.ts
                </span>
            </div>

            {/* Code content */}
            <div style={{ padding: "16px 20px", fontFamily: "monospace", fontSize: 13, lineHeight: 2 }}>
                {CODE_LINES.slice(0, visible).map((line, i) => (
                    <div key={i} style={{ color: line.color, opacity: 0, animation: "fade-in 0.3s ease forwards" }}>
                        {line.token}
                        {i === visible - 1 && (
                            <span
                                style={{
                                    display: "inline-block",
                                    width: "2px",
                                    height: "13px",
                                    background: "#6366f1",
                                    marginLeft: "1px",
                                    verticalAlign: "middle",
                                    animation: "blink 1s step-end infinite",
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

const TECH_BADGES = [
    { label: "Next.js", color: "#6366f1", icon: "⚡" },
    { label: "Node.js", color: "#10b981", icon: "🟢" },
    { label: "Gemini AI", color: "#06b6d4", icon: "🤖" },
    { label: "PostgreSQL", color: "#3b82f6", icon: "🐘" },
    { label: "Prisma", color: "#8b5cf6", icon: "🔷" },
    { label: "TypeScript", color: "#f59e0b", icon: "📘" },
];

const STAT_CARDS = [
    { icon: <Code2 size={16} />, value: "10+", label: "Projects Shipped", color: "#6366f1" },
    { icon: <Star size={16} />, value: "100%", label: "Client Satisfaction", color: "#f59e0b" },
    { icon: <GitBranch size={16} />, value: "2+", label: "Years Building", color: "#10b981" },
    { icon: <Cpu size={16} />, value: "AI", label: "Powered Solutions", color: "#06b6d4" },
];

/* ── Main component ────────────────────────────────────── */

export function Hero() {
    return (
        <section
            id="home"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                background: "linear-gradient(135deg, #080d1a 0%, #0d1229 50%, #080d1a 100%)",
            }}
        >
            {/* Ambient glow blobs */}
            <div className="glow-blob glow-blob-blue" style={{ width: 600, height: 600, top: "-200px", left: "-150px", opacity: 0.5 }} />
            <div className="glow-blob glow-blob-violet" style={{ width: 500, height: 500, bottom: "-100px", right: "-100px", opacity: 0.4 }} />
            <div className="glow-blob glow-blob-cyan" style={{ width: 300, height: 300, top: "60%", left: "55%", opacity: 0.18 }} />

            {/* Grid */}
            <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.3, zIndex: 0 }} />

            <div
                className="container-standard"
                style={{ position: "relative", zIndex: 2, paddingTop: "110px", paddingBottom: "80px" }}
            >
                {/* Two-column layout */}
                <div
                    className="hero-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: 48,
                        alignItems: "center",
                    }}
                >
                    {/* ── LEFT: Text content ── */}
                    <div>
                        {/* Status badge */}
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                background: "rgba(99, 102, 241, 0.1)",
                                border: "1px solid rgba(99, 102, 241, 0.25)",
                                borderRadius: 24,
                                padding: "6px 16px 6px 10px",
                                marginBottom: 28,
                                fontSize: 13,
                                color: "#a5b4fc",
                                fontWeight: 500,
                            }}
                        >
                            <span
                                style={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    background: "#10b981",
                                    display: "inline-block",
                                    boxShadow: "0 0 8px #10b981",
                                    animation: "glow-pulse 2s ease-in-out infinite",
                                }}
                            />
                            <Sparkles size={13} />
                            Available for new projects · Founder @ CoderNest
                        </div>

                        {/* Main headline */}
                        <h1
                            style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: "clamp(34px, 5vw, 64px)",
                                fontWeight: 900,
                                lineHeight: 1.08,
                                marginBottom: 20,
                                letterSpacing: "-1.5px",
                                color: "#f0f4ff",
                            }}
                        >
                            {DATA.name}
                            <br />
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Engineering the Future
                            </span>
                            <br />
                            <span style={{ color: "#e2e8f0" }}>with Code &amp; AI.</span>
                        </h1>

                        {/* Typing subheadline */}
                        <div
                            style={{
                                fontSize: "clamp(15px, 2vw, 19px)",
                                fontWeight: 600,
                                marginBottom: 14,
                                color: "#64748b",
                                minHeight: "36px",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <TypingText />
                        </div>

                        {/* Description */}
                        <p
                            style={{
                                fontSize: 16,
                                color: "#64748b",
                                lineHeight: 1.8,
                                marginBottom: 36,
                                maxWidth: 560,
                            }}
                        >
                            Founder @ CoderNest Digital Solutions. I build high-performance SaaS, AI-powered
                            tools, and scalable web applications with Next.js, Node.js, and the Gemini API.
                        </p>

                        {/* CTA Buttons */}
                        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 }}>
                            <Link href="#projects" className="btn-primary">
                                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                    View My Work <ArrowRight size={16} />
                                </span>
                            </Link>
                            <Link href="#contact" className="btn-outline">
                                Let&apos;s Collaborate
                            </Link>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline"
                                style={{ borderColor: "rgba(255,255,255,0.1)", color: "#64748b" }}
                            >
                                <Download size={15} />
                                Resume
                            </a>
                        </div>

                        {/* Stats */}
                        <div
                            style={{
                                display: "flex",
                                gap: 0,
                                flexWrap: "wrap",
                                borderTop: "1px solid rgba(255,255,255,0.06)",
                                paddingTop: 28,
                            }}
                        >
                            {DATA.stats.map((stat, i) => (
                                <div
                                    key={i}
                                    style={{
                                        padding: "0 28px 0 0",
                                        marginRight: 28,
                                        borderRight: i < DATA.stats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                                        marginBottom: 12,
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: "clamp(22px, 3.5vw, 32px)",
                                            fontWeight: 800,
                                            fontFamily: "'Outfit', sans-serif",
                                            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text",
                                            lineHeight: 1,
                                            marginBottom: 4,
                                        }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div style={{ fontSize: 12, color: "#475569", fontWeight: 500 }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT: Floating panel (desktop only) ── */}
                    <div className="hero-right-panel" style={{ display: "none" }}>
                        <div style={{ position: "relative" }}>

                            {/* Floating stat mini-cards — top row */}
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                                {STAT_CARDS.map((card, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            background: "rgba(15, 23, 42, 0.7)",
                                            backdropFilter: "blur(16px)",
                                            WebkitBackdropFilter: "blur(16px)",
                                            border: "1px solid rgba(255,255,255,0.07)",
                                            borderRadius: 14,
                                            padding: "16px 18px",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 8,
                                            transition: "border-color 0.2s, transform 0.2s",
                                            cursor: "default",
                                            animation: `float-card ${4.5 + i * 0.5}s ease-in-out infinite`,
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLElement).style.borderColor = `${card.color}55`;
                                            (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                                            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                        }}
                                    >
                                        <div style={{ color: card.color, display: "flex" }}>{card.icon}</div>
                                        <div
                                            style={{
                                                fontWeight: 800,
                                                fontSize: 22,
                                                fontFamily: "'Outfit', sans-serif",
                                                color: card.color,
                                                lineHeight: 1,
                                            }}
                                        >
                                            {card.value}
                                        </div>
                                        <div style={{ fontSize: 11, color: "#475569", fontWeight: 600 }}>{card.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Code card */}
                            <CodeCard />

                            {/* Tech badge row */}
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 8,
                                    marginTop: 12,
                                }}
                            >
                                {TECH_BADGES.map((badge) => (
                                    <div
                                        key={badge.label}
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 5,
                                            fontSize: 12,
                                            fontWeight: 600,
                                            color: badge.color,
                                            background: `${badge.color}15`,
                                            border: `1px solid ${badge.color}35`,
                                            borderRadius: 20,
                                            padding: "4px 12px",
                                            cursor: "default",
                                            transition: "background 0.2s, transform 0.2s",
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLElement).style.background = `${badge.color}25`;
                                            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLElement).style.background = `${badge.color}15`;
                                            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                        }}
                                    >
                                        <span>{badge.icon}</span>
                                        {badge.label}
                                    </div>
                                ))}
                            </div>

                            {/* Ambient glow behind the panel */}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: -40,
                                    background: "radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.12) 0%, transparent 65%)",
                                    zIndex: -1,
                                    pointerEvents: "none",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                style={{
                    position: "absolute",
                    bottom: 32,
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    zIndex: 2,
                    opacity: 0.45,
                }}
            >
                <div style={{ fontSize: 10, color: "#475569", letterSpacing: 2, textTransform: "uppercase" }}>Scroll</div>
                <div style={{ width: 1, height: 36, background: "linear-gradient(180deg, #6366f1, transparent)" }} />
            </div>

            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateX(-6px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes float-card {
                    0%, 100% { transform: translateY(0px); }
                    50%       { transform: translateY(-8px); }
                }
                @media (min-width: 1024px) {
                    .hero-grid {
                        grid-template-columns: 1fr 1fr !important;
                    }
                    .hero-right-panel {
                        display: block !important;
                    }
                }
                @media (min-width: 768px) and (max-width: 1023px) {
                    .hero-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}
