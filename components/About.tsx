"use client";

import Image from "next/image";
import Link from "next/link";
import { DATA } from "@/lib/data";
import { GraduationCap, MapPin, Zap } from "lucide-react";

const highlights = [
    { icon: "🎓", title: "ICE Student", desc: "Daffodil International University" },
    { icon: "🚀", title: "Founder", desc: "CoderNest Digital Solutions" },
    { icon: "🤖", title: "AI Specialist", desc: "Gemini API & LLM Orchestration" },
    { icon: "⚡", title: "Full Stack Dev", desc: "Next.js · Node.js · PostgreSQL" },
];

export function About() {
    const paragraphs = DATA.about.description.split("\n\n");

    return (
        <section
            id="about"
            className="section-padding"
            style={{
                background: "linear-gradient(180deg, #080d1a 0%, #0a0f1e 100%)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background glow */}
            <div
                className="glow-blob glow-blob-violet"
                style={{ width: 500, height: 500, right: 0, top: "50%", transform: "translateY(-50%)", opacity: 0.12 }}
            />

            <div className="container-standard" style={{ position: "relative", zIndex: 1 }}>
                {/* Section header */}
                <div style={{ marginBottom: 64 }}>
                    <span className="section-label">Who I Am</span>
                    <h2 className="section-title">
                        About{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Me
                        </span>
                    </h2>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1.4fr",
                        gap: 64,
                        alignItems: "start",
                    }}
                    className="about-grid"
                >
                    {/* Left: Image + info card */}
                    <div>
                        {/* Photo */}
                        <div
                            style={{
                                position: "relative",
                                borderRadius: 20,
                                overflow: "hidden",
                                aspectRatio: "4/5",
                                background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.05))",
                                border: "1px solid rgba(99,102,241,0.2)",
                                marginBottom: 20,
                            }}
                        >
                            <Image
                                src={DATA.profilePicture}
                                alt={DATA.name}
                                fill
                                className="object-cover"
                                unoptimized
                                priority
                                style={{
                                    filter: "brightness(0.82) saturate(0.9)",
                                }}
                            />
                            {/* Dark tint overlay — tones down bright background */}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "rgba(8, 13, 26, 0.18)",
                                    zIndex: 1,
                                    pointerEvents: "none",
                                }}
                            />
                            {/* Bottom gradient for name card readability */}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(180deg, transparent 50%, rgba(8,13,26,0.82) 100%)",
                                    zIndex: 2,
                                    pointerEvents: "none",
                                }}
                            />
                            {/* Name card overlay */}
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: 20,
                                    left: 20,
                                    right: 20,
                                    zIndex: 3,
                                }}
                            >
                                <div
                                    style={{
                                        background: "rgba(8, 13, 26, 0.85)",
                                        backdropFilter: "blur(12px)",
                                        border: "1px solid rgba(99,102,241,0.2)",
                                        borderRadius: 12,
                                        padding: "12px 16px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10,
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 8,
                                            height: 8,
                                            borderRadius: "50%",
                                            background: "#10b981",
                                            boxShadow: "0 0 8px #10b981",
                                        }}
                                    />
                                    <div>
                                        <div style={{ fontSize: 13, fontWeight: 700, color: "#f0f4ff" }}>
                                            {DATA.name}
                                        </div>
                                        <div style={{ fontSize: 11, color: "#64748b" }}>
                                            Available for projects
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Info pills */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            {[
                                { icon: <MapPin size={14} />, label: "Bangladesh", sub: "Remote / Worldwide" },
                                { icon: <GraduationCap size={14} />, label: "ICE — Daffodil International University", sub: "2023 – Present" },
                                { icon: <Zap size={14} />, label: "CoderNest Digital Solutions", sub: "Founder & Lead Developer" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 12,
                                        padding: "10px 14px",
                                        background: "rgba(99, 102, 241, 0.06)",
                                        border: "1px solid rgba(99, 102, 241, 0.12)",
                                        borderRadius: 10,
                                    }}
                                >
                                    <span style={{ color: "#6366f1", flexShrink: 0 }}>{item.icon}</span>
                                    <div>
                                        <div style={{ fontSize: 13, fontWeight: 600, color: "#e2e8f0" }}>
                                            {item.label}
                                        </div>
                                        <div style={{ fontSize: 12, color: "#475569" }}>{item.sub}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Description + highlights */}
                    <div>
                        {/* Description */}
                        <div style={{ marginBottom: 40 }}>
                            {paragraphs.map((para, i) => (
                                <p
                                    key={i}
                                    style={{
                                        fontSize: 16,
                                        color: "#94a3b8",
                                        lineHeight: 1.8,
                                        marginBottom: 20,
                                    }}
                                >
                                    {para}
                                </p>
                            ))}
                        </div>

                        {/* Highlight cards */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: 14,
                                marginBottom: 36,
                            }}
                        >
                            {highlights.map((item, i) => (
                                <div
                                    key={i}
                                    className="glass-card"
                                    style={{ padding: "20px 22px" }}
                                >
                                    <div style={{ fontSize: 26, marginBottom: 10 }}>{item.icon}</div>
                                    <div
                                        style={{
                                            fontSize: 15,
                                            fontWeight: 700,
                                            color: "#e2e8f0",
                                            marginBottom: 4,
                                        }}
                                    >
                                        {item.title}
                                    </div>
                                    <div style={{ fontSize: 13, color: "#475569" }}>{item.desc}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                            <Link href="#contact" className="btn-primary">
                                <span>Let&apos;s Work Together</span>
                            </Link>
                            <Link href="#projects" className="btn-outline">
                                See My Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @media (max-width: 768px) {
                    .about-grid {
                        grid-template-columns: 1fr !important;
                        gap: 40px !important;
                    }
                }
            `}</style>
        </section>
    );
}
