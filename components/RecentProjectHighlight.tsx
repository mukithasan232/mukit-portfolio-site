"use client";

import { DATA } from "@/lib/data";
import { ExternalLink, Github, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export const RecentProjectHighlight = () => {
    const recentProjects = DATA.projects.filter((p) => p.featured).slice(0, 2);

    return (
        <section
            style={{
                background: "linear-gradient(180deg, #0a0f1e 0%, #080d1a 100%)",
                padding: "80px 0",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Ambient glow */}
            <div
                className="glow-blob glow-blob-blue"
                style={{ width: 600, height: 600, right: 0, top: "50%", transform: "translateY(-50%)", opacity: 0.07 }}
            />

            <div className="container-standard" style={{ position: "relative", zIndex: 1 }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 40,
                        flexWrap: "wrap",
                        gap: 12,
                    }}
                >
                    <div>
                        <span className="section-label">Showcase</span>
                        <h2
                            style={{
                                fontSize: 32,
                                fontWeight: 800,
                                color: "#f0f4ff",
                                fontFamily: "'Outfit', sans-serif",
                                marginTop: 8,
                            }}
                        >
                            Recent Highlights
                        </h2>
                    </div>
                    <Link
                        href="#projects"
                        className="btn-outline"
                        style={{ display: "inline-flex", fontSize: 13 }}
                    >
                        View All <ArrowRight size={14} />
                    </Link>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    {recentProjects.map((project, index) => (
                        <div
                            key={index}
                            style={{
                                background: "rgba(15, 23, 42, 0.7)",
                                backdropFilter: "blur(16px)",
                                border: "1px solid rgba(99, 102, 241, 0.15)",
                                borderRadius: 20,
                                overflow: "hidden",
                                display: "grid",
                                gridTemplateColumns: "280px 1fr",
                                transition: "all 0.3s ease",
                            }}
                            className="highlight-card"
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.4)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(99,102,241,0.12)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.15)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                            }}
                        >
                            {/* Image */}
                            <div style={{ overflow: "hidden", position: "relative", height: 220 }}>
                                {project.images?.length > 0 ? (
                                    <img
                                        src={project.images[0]}
                                        alt={project.title}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            objectPosition: "top",
                                            display: "block",
                                            transition: "transform 0.5s ease",
                                        }}
                                    />
                                ) : (
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: 48,
                                        }}
                                    >
                                        🔷
                                    </div>
                                )}
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: "linear-gradient(90deg, transparent, rgba(15,23,42,0.3))",
                                    }}
                                />
                            </div>

                            {/* Details */}
                            <div style={{ padding: "28px 28px", display: "flex", flexDirection: "column", gap: 14 }}>
                                {/* Badges */}
                                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                                    {project.aiPowered && (
                                        <span className="badge-ai">
                                            <Sparkles size={10} />
                                            Built with AI
                                        </span>
                                    )}
                                    <span
                                        style={{
                                            background: "rgba(16,185,129,0.1)",
                                            border: "1px solid rgba(16,185,129,0.3)",
                                            color: "#6ee7b7",
                                            fontSize: 11,
                                            fontWeight: 600,
                                            padding: "3px 10px",
                                            borderRadius: 20,
                                        }}
                                    >
                                        ⭐ Featured
                                    </span>
                                </div>

                                <div>
                                    <h3
                                        style={{
                                            fontSize: 22,
                                            fontWeight: 800,
                                            color: "#f0f4ff",
                                            fontFamily: "'Outfit', sans-serif",
                                            marginBottom: 4,
                                        }}
                                    >
                                        {project.title}
                                    </h3>
                                    <div style={{ fontSize: 13, color: "#6366f1", fontWeight: 600 }}>
                                        {project.tagline}
                                    </div>
                                </div>

                                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.65 }}>
                                    {project.solution}
                                </p>

                                {/* Tech tags */}
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                                    {project.tech.slice(0, 5).map((t: string) => (
                                        <span key={t} className="badge-tech">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
                                    <Link
                                        href={project.live || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary"
                                        style={{ padding: "10px 18px", fontSize: 13, textDecoration: "none" }}
                                    >
                                        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                            <ExternalLink size={13} /> Live Demo
                                        </span>
                                    </Link>
                                    <Link
                                        href={project.github || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-outline"
                                        style={{ padding: "10px 16px", fontSize: 13, textDecoration: "none" }}
                                    >
                                        <Github size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                @media (max-width: 768px) {
                    .highlight-card {
                        grid-template-columns: 1fr !important;
                    }
                    .highlight-card > div:first-child {
                        height: 200px !important;
                    }
                }
            `}</style>
        </section>
    );
};
