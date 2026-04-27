"use client";

import { DATA } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Services() {
    return (
        <section
            id="services"
            className="section-padding"
            style={{
                background: "linear-gradient(180deg, #0a0f1e 0%, #080d1a 100%)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Ambient glows */}
            <div
                className="glow-blob glow-blob-blue"
                style={{ width: 500, height: 500, right: "-100px", top: "50%", transform: "translateY(-50%)", opacity: 0.1 }}
            />
            <div
                className="glow-blob glow-blob-violet"
                style={{ width: 400, height: 400, left: "-100px", bottom: 0, opacity: 0.08 }}
            />

            <div className="container-standard" style={{ position: "relative", zIndex: 1 }}>
                {/* Section header */}
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <span className="section-label">What I Offer</span>
                    <h2 className="section-title" style={{ margin: "0 auto 16px" }}>
                        My{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Services
                        </span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: "0 auto" }}>
                        End-to-end development solutions — from rapid MVPs to enterprise-grade SaaS with AI integration.
                    </p>
                </div>

                {/* Services grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                        gap: 20,
                        marginBottom: 72,
                    }}
                >
                    {DATA.services.map((service, index) => (
                        <div
                            key={index}
                            style={{
                                background: "rgba(15, 23, 42, 0.7)",
                                backdropFilter: "blur(16px)",
                                border: "1px solid rgba(99, 102, 241, 0.15)",
                                borderRadius: 20,
                                padding: "32px 28px",
                                display: "flex",
                                flexDirection: "column",
                                gap: 16,
                                cursor: "default",
                                transition: "all 0.3s ease",
                                position: "relative",
                                overflow: "hidden",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(99, 102, 241, 0.4)";
                                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(99, 102, 241, 0.15)";
                                (e.currentTarget as HTMLElement).style.background = "rgba(99, 102, 241, 0.07)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(99, 102, 241, 0.15)";
                                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                                (e.currentTarget as HTMLElement).style.background = "rgba(15, 23, 42, 0.7)";
                            }}
                        >
                            {/* Subtle glow at top */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: "2px",
                                    background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.6), transparent)",
                                    borderRadius: "20px 20px 0 0",
                                }}
                            />

                            {/* Icon */}
                            <div
                                style={{
                                    width: 52,
                                    height: 52,
                                    borderRadius: 14,
                                    background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.1))",
                                    border: "1px solid rgba(99,102,241,0.25)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 24,
                                }}
                            >
                                {service.icon}
                            </div>

                            {/* Title & desc */}
                            <div>
                                <h3
                                    style={{
                                        fontSize: 19,
                                        fontWeight: 700,
                                        color: "#f0f4ff",
                                        marginBottom: 8,
                                        fontFamily: "'Outfit', sans-serif",
                                    }}
                                >
                                    {service.title}
                                </h3>
                                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.65 }}>
                                    {service.description}
                                </p>
                            </div>

                            {/* Feature list */}
                            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
                                {service.features.map((feat, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8,
                                            fontSize: 13,
                                            color: "#94a3b8",
                                        }}
                                    >
                                        <span
                                            style={{
                                                width: 5,
                                                height: 5,
                                                borderRadius: "50%",
                                                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                                flexShrink: 0,
                                            }}
                                        />
                                        {feat}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* How I work */}
                <div
                    style={{
                        background: "rgba(15, 23, 42, 0.5)",
                        border: "1px solid rgba(99, 102, 241, 0.12)",
                        borderRadius: 24,
                        padding: "48px 40px",
                        textAlign: "center",
                    }}
                >
                    <h3
                        style={{
                            fontSize: 28,
                            fontWeight: 800,
                            color: "#f0f4ff",
                            marginBottom: 8,
                            fontFamily: "'Outfit', sans-serif",
                        }}
                    >
                        How I Work
                    </h3>
                    <p style={{ fontSize: 15, color: "#64748b", marginBottom: 48 }}>
                        A streamlined process to take your idea from concept to production.
                    </p>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                            gap: 0,
                            position: "relative",
                        }}
                        className="process-grid"
                    >
                        {[
                            { step: "01", title: "Discovery", desc: "Deep-dive into your goals, user needs, and technical requirements.", icon: "🔍" },
                            { step: "02", title: "Architecture", desc: "Design a scalable system architecture with the right tech stack.", icon: "🏗️" },
                            { step: "03", title: "Development", desc: "Build iteratively with clean code, regular demos, and your feedback.", icon: "⚡" },
                            { step: "04", title: "Launch & Scale", desc: "Deploy to production with CI/CD, monitoring, and ongoing support.", icon: "🚀" },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                style={{
                                    padding: "24px 20px",
                                    position: "relative",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: 12,
                                }}
                            >
                                {/* Connector line */}
                                {idx < 3 && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: 42,
                                            right: "-1px",
                                            width: "50%",
                                            height: 1,
                                            background: "linear-gradient(90deg, rgba(99,102,241,0.3), transparent)",
                                            zIndex: 0,
                                        }}
                                        className="connector-line"
                                    />
                                )}

                                <div
                                    style={{
                                        width: 56,
                                        height: 56,
                                        borderRadius: 16,
                                        background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))",
                                        border: "1px solid rgba(99,102,241,0.25)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: 24,
                                        position: "relative",
                                        zIndex: 1,
                                    }}
                                >
                                    {item.icon}
                                </div>

                                <div
                                    style={{
                                        fontSize: 12,
                                        fontWeight: 700,
                                        color: "#6366f1",
                                        letterSpacing: 1,
                                    }}
                                >
                                    STEP {item.step}
                                </div>
                                <div
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 700,
                                        color: "#e2e8f0",
                                        fontFamily: "'Outfit', sans-serif",
                                    }}
                                >
                                    {item.title}
                                </div>
                                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <Link href="#contact" className="btn-primary" style={{ marginTop: 40, display: "inline-flex" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            Start a Project <ArrowRight size={16} />
                        </span>
                    </Link>
                </div>
            </div>

            <style jsx global>{`
                @media (max-width: 768px) {
                    .connector-line {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    );
}
