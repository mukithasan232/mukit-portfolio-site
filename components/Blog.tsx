"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { DATA } from "@/lib/data";

export function Blog() {
    return (
        <section id="blog" className="section-padding font-sans scroll-mt-20" style={{ background: "#d4d0c8" }}>
            <div className="container-standard">
                <div className="win-panel font-sans" style={{ maxWidth: 860, margin: "0 auto" }}>
                    <div className="win-titlebar font-sans">
                        <span style={{ fontSize: 11, fontWeight: "bold" }}>📰 Internet Explorer — Latest Articles</span>
                        <div style={{ display: "flex", gap: 2 }}>
                            <button className="win-titlebar-btn" aria-label="Minimize">_</button>
                            <button className="win-titlebar-btn" aria-label="Maximize">□</button>
                            <button className="win-titlebar-btn" aria-label="Close">✕</button>
                        </div>
                    </div>
                    <div className="win-menubar font-sans">
                        {["File", "Edit", "View", "Favorites", "Tools", "Help"].map((m) => (
                            <span key={m} className="win-menubar-item">{m}</span>
                        ))}
                    </div>

                    <div style={{ padding: 16, background: "#d4d0c8" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                            <div>
                                <p style={{ fontWeight: "bold", fontSize: 13 }}>Latest Articles</p>
                                <p style={{ fontSize: 11, color: "#444" }}>Insights on development, design, and growth.</p>
                            </div>
                            <Link href="#" className="win-btn font-sans" style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, textDecoration: "none" }}>
                                View All <ArrowRight size={10} />
                            </Link>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
                            {DATA.blog.map((post, index) => (
                                <div key={index} className="win-panel font-sans" style={{ cursor: "pointer" }}>
                                    <div className="win-inset font-sans" style={{ height: 90, overflow: "hidden", margin: 6 }}>
                                        {post.image ? (
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                width={300}
                                                height={90}
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                            />
                                        ) : (
                                            <div style={{ width: "100%", height: "100%", background: "#808080", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff" }}>
                                                No Image
                                            </div>
                                        )}
                                    </div>
                                    <div style={{ padding: "4px 8px 8px", fontSize: 11 }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                                            <span style={{ fontSize: 9, background: "#000080", color: "#fff", padding: "1px 5px", textTransform: "uppercase" }}>{post.category}</span>
                                            <span style={{ fontSize: 9, color: "#808080" }}>{post.date}</span>
                                        </div>
                                        <p style={{ fontWeight: "bold", marginBottom: 3, lineHeight: 1.3 }}>{post.title}</p>
                                        <p style={{ fontSize: 10, color: "#444", lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                            {post.excerpt}
                                        </p>
                                        <div style={{ marginTop: 5, color: "#0000ff", textDecoration: "underline", fontSize: 10, display: "flex", alignItems: "center", gap: 2, cursor: "pointer" }}>
                                            Read Article <ArrowRight size={8} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Newsletter */}
                        <div className="win-groupbox font-sans" style={{ marginTop: 16 }}>
                            <span className="win-groupbox-label">Newsletter — Stay in the Loop</span>
                            <p style={{ fontSize: 11, color: "#444", marginBottom: 8 }}>
                                Subscribe for the latest insights on web development, modern UI trends, and SEO strategies.
                            </p>
                            <form style={{ display: "flex", gap: 6 }} onSubmit={(e) => e.preventDefault()}>
                                <input type="email" placeholder="Enter your email" className="win-input font-sans" style={{ maxWidth: 220 }} required />
                                <button type="submit" className="win-btn-primary font-sans" style={{ fontSize: 11, padding: "3px 14px" }}>
                                    Subscribe
                                </button>
                            </form>
                            <p style={{ fontSize: 9, color: "#808080", marginTop: 4, textTransform: "uppercase", letterSpacing: 1 }}>
                                No spam. Only high-quality dev content.
                            </p>
                        </div>
                    </div>

                    <div className="win-statusbar font-sans">
                        <div className="win-inset font-sans" style={{ flex: 1, padding: "1px 6px", fontSize: 10 }}>
                            {DATA.blog.length} article(s)
                        </div>
                        <div className="win-inset font-sans" style={{ padding: "1px 6px", fontSize: 10 }}>
                            Done
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
