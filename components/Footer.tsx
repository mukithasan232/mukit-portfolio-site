"use client";

import { DATA } from "@/lib/data";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="font-sans" style={{ background: "#d4d0c8", borderTop: "2px solid #808080", paddingBottom: 40 }}>
            <div className="container-standard" style={{ paddingTop: 20 }}>
                <div className="win-panel font-sans" style={{ maxWidth: 860, margin: "0 auto" }}>
                    <div className="win-titlebar font-sans">
                        <span style={{ fontSize: 11, fontWeight: "bold" }}>📌 Mukit Hasan — Site Map</span>
                        <div style={{ display: "flex", gap: 2 }}>
                            <button className="win-titlebar-btn" aria-label="Minimize">_</button>
                            <button className="win-titlebar-btn" aria-label="Maximize">□</button>
                            <button className="win-titlebar-btn" aria-label="Close">✕</button>
                        </div>
                    </div>

                    <div style={{ padding: 16, background: "#d4d0c8", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 16 }}>
                        {/* Brand */}
                        <div>
                            <p style={{ fontWeight: "bold", fontSize: 16, color: "#000080", marginBottom: 6 }}>Mukit.</p>
                            <p style={{ fontSize: 11, color: "#444", lineHeight: 1.6, marginBottom: 8 }}>
                                {DATA.subheading}
                            </p>
                            <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                                {DATA.socials.map((social) => (
                                    <Link
                                        key={social.name}
                                        href={social.url}
                                        className="win-btn font-sans"
                                        style={{ minWidth: 26, padding: "2px 5px", display: "flex", alignItems: "center", justifyContent: "center" }}
                                        aria-label={social.name}
                                    >
                                        <social.icon size={12} />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Navigation */}
                        <div>
                            <p style={{ fontWeight: "bold", fontSize: 11, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8, borderBottom: "1px solid #808080", paddingBottom: 4 }}>Navigation</p>
                            <div style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 11 }}>
                                {[
                                    { href: "#about", label: "About" },
                                    { href: "#skills", label: "Skills" },
                                    { href: "#projects", label: "Projects" },
                                    { href: "#services", label: "Services" },
                                    { href: "#experience", label: "Experience" },
                                    { href: "#blog", label: "Articles" },
                                    { href: "#contact", label: "Hire Me" },
                                ].map(({ href, label }) => (
                                    <Link key={href} href={href} style={{ color: "#0000ff", textDecoration: "underline", fontSize: 11 }}>
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Contact info */}
                        <div>
                            <p style={{ fontWeight: "bold", fontSize: 11, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8, borderBottom: "1px solid #808080", paddingBottom: 4 }}>Contact Info</p>
                            <div style={{ fontSize: 11, color: "#444", display: "flex", flexDirection: "column", gap: 6 }}>
                                <p style={{ fontStyle: "italic" }}>Ready to start a new project? Let&apos;s build something amazing together.</p>
                                <div>
                                    <p style={{ fontWeight: "bold", fontSize: 10, textTransform: "uppercase" }}>Business</p>
                                    <a href={`mailto:${DATA.contact.email}`} style={{ color: "#0000ff", textDecoration: "underline", fontSize: 11 }}>
                                        {DATA.contact.email}
                                    </a>
                                </div>
                                <div>
                                    <p style={{ fontWeight: "bold", fontSize: 10, textTransform: "uppercase" }}>Personal</p>
                                    <a href={`mailto:${DATA.contact.personalEmail}`} style={{ color: "#0000ff", textDecoration: "underline", fontSize: 11 }}>
                                        {DATA.contact.personalEmail}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Map / iframe */}
                        <div>
                            <p style={{ fontWeight: "bold", fontSize: 11, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8, borderBottom: "1px solid #808080", paddingBottom: 4 }}>Location</p>
                            <div className="win-inset font-sans" style={{ height: 140, overflow: "hidden", padding: 2 }}>
                                <iframe
                                    src={DATA.mapUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Location map"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Footer bar */}
                    <div
                        style={{
                            borderTop: "1px solid #808080",
                            padding: "6px 12px",
                            textAlign: "center",
                            fontSize: 10,
                            color: "#444",
                            background: "#d4d0c8",
                        }}
                    >
                        &copy; {new Date().getFullYear()} {DATA.name}. All rights reserved.&nbsp;&nbsp;|&nbsp;&nbsp;
                        Windows 2000 Theme
                    </div>
                </div>
            </div>
        </footer>
    );
}
