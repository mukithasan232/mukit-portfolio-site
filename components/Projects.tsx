"use client";

import { ExternalLink, Github, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { DATA } from "@/lib/data";

interface Project {
    title: string;
    tagline: string;
    problem: string;
    solution: string;
    result: string;
    tech: string[];
    live: string;
    github: string;
    aiPowered: boolean;
    featured: boolean;
    images: string[];
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    return (
        <>
            <div
                style={{
                    background: "rgba(15, 23, 42, 0.7)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(99, 102, 241, 0.15)",
                    borderRadius: 20,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    height: "100%",
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(99, 102, 241, 0.4)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 60px rgba(99, 102, 241, 0.15)";
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(99, 102, 241, 0.15)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
            >
                {/* Image area */}
                <div
                    style={{
                        position: "relative",
                        height: 200,
                        overflow: "hidden",
                        cursor: project.images?.length > 0 ? "pointer" : "default",
                        background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.05))",
                        flexShrink: 0,
                    }}
                    onClick={() => project.images?.length > 0 && setIsLightboxOpen(true)}
                >
                    {project.images?.length > 0 ? (
                        <img
                            src={project.images[currentImage]}
                            alt={project.title}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transition: "transform 0.5s ease",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                            }}
                        />
                    ) : (
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 48,
                            }}
                        >
                            🔷
                        </div>
                    )}

                    {/* Gradient overlay on image */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(180deg, transparent 50%, rgba(15,23,42,0.8) 100%)",
                            pointerEvents: "none",
                        }}
                    />

                    {/* Badges */}
                    <div
                        style={{
                            position: "absolute",
                            top: 12,
                            left: 12,
                            display: "flex",
                            gap: 6,
                        }}
                    >
                        {project.aiPowered && (
                            <span className="badge-ai">
                                <Sparkles size={10} />
                                Built with AI
                            </span>
                        )}
                        {project.featured && (
                            <span
                                style={{
                                    background: "rgba(16, 185, 129, 0.2)",
                                    border: "1px solid rgba(16, 185, 129, 0.4)",
                                    color: "#6ee7b7",
                                    fontSize: 11,
                                    fontWeight: 600,
                                    padding: "3px 10px",
                                    borderRadius: 20,
                                }}
                            >
                                ⭐ Featured
                            </span>
                        )}
                    </div>

                    {/* Image dots */}
                    {project.images?.length > 1 && (
                        <div
                            style={{
                                position: "absolute",
                                bottom: 10,
                                right: 12,
                                display: "flex",
                                gap: 4,
                            }}
                        >
                            {project.images.map((_: string, idx: number) => (
                                <button
                                    key={idx}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentImage(idx);
                                    }}
                                    style={{
                                        width: idx === currentImage ? 18 : 6,
                                        height: 6,
                                        background: idx === currentImage
                                            ? "linear-gradient(90deg, #6366f1, #8b5cf6)"
                                            : "rgba(255,255,255,0.3)",
                                        border: "none",
                                        borderRadius: 3,
                                        padding: 0,
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                    }}
                                    aria-label={`Image ${idx + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Content */}
                <div style={{ padding: "22px 22px 20px", flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
                    {/* Title & tagline */}
                    <div>
                        <h3
                            style={{
                                fontSize: 20,
                                fontWeight: 800,
                                color: "#f0f4ff",
                                marginBottom: 4,
                                fontFamily: "'Outfit', sans-serif",
                            }}
                        >
                            {project.title}
                        </h3>
                        <p style={{ fontSize: 13, color: "#6366f1", fontWeight: 600 }}>
                            {project.tagline}
                        </p>
                    </div>

                    {/* Description */}
                    <p
                        style={{
                            fontSize: 14,
                            color: "#64748b",
                            lineHeight: 1.65,
                            flex: 1,
                        }}
                    >
                        {project.solution}
                    </p>

                    {/* Result */}
                    <div
                        style={{
                            background: "rgba(99, 102, 241, 0.06)",
                            border: "1px solid rgba(99, 102, 241, 0.12)",
                            borderRadius: 8,
                            padding: "8px 12px",
                            fontSize: 13,
                            color: "#a5b4fc",
                        }}
                    >
                        <span style={{ fontWeight: 600, color: "#6366f1" }}>Impact: </span>
                        {project.result}
                    </div>

                    {/* Tech tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {project.tech.map((t: string) => (
                            <span key={t} className="badge-tech">
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Action buttons */}
                    <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
                        <Link
                            href={project.live || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                padding: "10px 16px",
                                fontSize: 13,
                                textDecoration: "none",
                                opacity: project.live ? 1 : 0.5,
                                pointerEvents: project.live ? "auto" : "none",
                            }}
                        >
                            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                <ExternalLink size={13} />
                                Live Demo
                            </span>
                        </Link>
                        <Link
                            href={project.github || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                            style={{
                                padding: "10px 16px",
                                fontSize: 13,
                                textDecoration: "none",
                            }}
                        >
                            <Github size={14} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {isLightboxOpen && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 9999,
                        background: "rgba(0,0,0,0.92)",
                        backdropFilter: "blur(8px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 20,
                    }}
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <div
                        style={{
                            background: "rgba(15, 23, 42, 0.95)",
                            border: "1px solid rgba(99,102,241,0.3)",
                            borderRadius: 20,
                            overflow: "hidden",
                            maxWidth: "90vw",
                            maxHeight: "90vh",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Lightbox header */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "16px 20px",
                                borderBottom: "1px solid rgba(99,102,241,0.15)",
                            }}
                        >
                            <span style={{ fontWeight: 700, color: "#f0f4ff" }}>
                                {project.title}
                            </span>
                            <button
                                onClick={() => setIsLightboxOpen(false)}
                                style={{
                                    background: "rgba(99,102,241,0.1)",
                                    border: "1px solid rgba(99,102,241,0.2)",
                                    borderRadius: 8,
                                    padding: "4px 10px",
                                    cursor: "pointer",
                                    color: "#a5b4fc",
                                    fontSize: 18,
                                }}
                            >
                                ×
                            </button>
                        </div>
                        <div style={{ padding: 8 }}>
                            <img
                                src={project.images[currentImage]}
                                alt={project.title}
                                style={{ maxWidth: "80vw", maxHeight: "70vh", display: "block", borderRadius: 12 }}
                            />
                        </div>
                        {/* Image navigation */}
                        {project.images?.length > 1 && (
                            <div
                                style={{
                                    padding: "12px 20px",
                                    display: "flex",
                                    gap: 6,
                                    justifyContent: "center",
                                    borderTop: "1px solid rgba(99,102,241,0.1)",
                                }}
                            >
                                {project.images.map((_: string, idx: number) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImage(idx)}
                                        style={{
                                            width: idx === currentImage ? 24 : 8,
                                            height: 8,
                                            background: idx === currentImage
                                                ? "linear-gradient(90deg, #6366f1, #8b5cf6)"
                                                : "rgba(255,255,255,0.15)",
                                            border: "none",
                                            borderRadius: 4,
                                            padding: 0,
                                            cursor: "pointer",
                                            transition: "all 0.3s ease",
                                        }}
                                        aria-label={`Image ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export function Projects() {
    const [filter, setFilter] = useState<"all" | "featured" | "ai">("all");

    const filteredProjects = DATA.projects.filter((p) => {
        if (filter === "featured") return p.featured;
        if (filter === "ai") return p.aiPowered;
        return true;
    });

    return (
        <section
            id="projects"
            className="section-padding"
            style={{
                background: "linear-gradient(180deg, #080d1a 0%, #0a0f1e 100%)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background blobs */}
            <div
                className="glow-blob glow-blob-violet"
                style={{ width: 500, height: 500, right: "10%", top: 0, opacity: 0.1 }}
            />
            <div
                className="glow-blob glow-blob-blue"
                style={{ width: 400, height: 400, left: "5%", bottom: "20%", opacity: 0.08 }}
            />

            <div className="container-standard" style={{ position: "relative", zIndex: 1 }}>
                {/* Section header */}
                <div style={{ textAlign: "center", marginBottom: 56 }}>
                    <span className="section-label">What I&apos;ve Built</span>
                    <h2 className="section-title" style={{ margin: "0 auto 16px" }}>
                        Featured{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Projects
                        </span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: "0 auto 36px" }}>
                        High-impact products built with modern stacks — from Hospital SaaS to AI-powered tools.
                    </p>

                    {/* Filter buttons */}
                    <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                        {[
                            { key: "all", label: "All Projects" },
                            { key: "featured", label: "⭐ Featured" },
                            { key: "ai", label: "✦ AI-Powered" },
                        ].map((f) => (
                            <button
                                key={f.key}
                                onClick={() => setFilter(f.key as typeof filter)}
                                style={{
                                    padding: "8px 20px",
                                    borderRadius: 24,
                                    fontSize: 13,
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                    border: filter === f.key
                                        ? "1px solid rgba(99,102,241,0.6)"
                                        : "1px solid rgba(99,102,241,0.2)",
                                    background: filter === f.key
                                        ? "rgba(99,102,241,0.15)"
                                        : "transparent",
                                    color: filter === f.key ? "#a5b4fc" : "#475569",
                                }}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                        gap: 24,
                        marginBottom: 48,
                    }}
                    className="projects-grid"
                >
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>

                {/* GitHub CTA */}
                <div style={{ textAlign: "center" }}>
                    <Link
                        href="https://github.com/mukithasan232"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                        style={{ display: "inline-flex" }}
                    >
                        <Github size={16} />
                        View All on GitHub
                    </Link>
                </div>
            </div>

            <style jsx global>{`
                @media (max-width: 768px) {
                    .projects-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}
