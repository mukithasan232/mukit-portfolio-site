"use client";

import { DATA } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export function Blog() {
    return (
        <section
            id="blog"
            className="section-padding"
            style={{
                background: "linear-gradient(180deg, #0a0f1e 0%, #080d1a 100%)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Ambient glow */}
            <div
                className="glow-blob glow-blob-violet"
                style={{ width: 400, height: 400, left: 0, bottom: 0, opacity: 0.08 }}
            />

            <div className="container-standard" style={{ position: "relative", zIndex: 1 }}>
                {/* Section header */}
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <span className="section-label">Insights & Writing</span>
                    <h2 className="section-title" style={{ margin: "0 auto 16px" }}>
                        Latest{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Articles
                        </span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: "0 auto" }}>
                        Thoughts on full-stack development, AI integration, and building products that matter.
                    </p>
                </div>

                {/* Blog grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                        gap: 20,
                    }}
                    className="blog-grid"
                >
                    {DATA.blog.map((post, i) => (
                        <article
                            key={i}
                            style={{
                                background: "rgba(15, 23, 42, 0.7)",
                                backdropFilter: "blur(16px)",
                                border: "1px solid rgba(99, 102, 241, 0.15)",
                                borderRadius: 16,
                                overflow: "hidden",
                                transition: "all 0.3s ease",
                                cursor: "pointer",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(99, 102, 241, 0.4)";
                                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(99, 102, 241, 0.12)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(99, 102, 241, 0.15)";
                                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                            }}
                        >
                            {/* Image */}
                            <div style={{ height: 180, overflow: "hidden", position: "relative" }}>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                    style={{ transition: "transform 0.5s ease" }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: "linear-gradient(180deg, transparent 50%, rgba(15,23,42,0.7) 100%)",
                                    }}
                                />
                                {/* Category badge */}
                                <span
                                    className="badge-ai"
                                    style={{
                                        position: "absolute",
                                        top: 12,
                                        left: 12,
                                        background: "rgba(99,102,241,0.2)",
                                        borderColor: "rgba(99,102,241,0.4)",
                                        color: "#a5b4fc",
                                    }}
                                >
                                    {post.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div style={{ padding: "20px 22px" }}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 6,
                                        color: "#475569",
                                        fontSize: 12,
                                        marginBottom: 10,
                                    }}
                                >
                                    <Calendar size={12} />
                                    {post.date}
                                </div>
                                <h3
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 700,
                                        color: "#f0f4ff",
                                        marginBottom: 8,
                                        lineHeight: 1.4,
                                        fontFamily: "'Outfit', sans-serif",
                                    }}
                                >
                                    {post.title}
                                </h3>
                                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, marginBottom: 16 }}>
                                    {post.excerpt}
                                </p>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 4,
                                        fontSize: 13,
                                        fontWeight: 600,
                                        color: "#6366f1",
                                    }}
                                >
                                    Read more <ArrowRight size={13} />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                @media (max-width: 640px) {
                    .blog-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}
