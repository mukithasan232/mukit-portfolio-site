"use client";

import Link from "next/link";
import { DATA } from "@/lib/data";
import { useState } from "react";

function WinWindow({
    title,
    icon,
    children,
    style,
    defaultPos,
}: {
    title: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    style?: React.CSSProperties;
    defaultPos?: { x: number; y: number };
}) {
    const [minimized, setMinimized] = useState(false);

    return (
        <div
            className="win-panel font-sans"
            style={{
                minWidth: 280,
                ...style,
            }}
        >
            {/* Title bar */}
            <div className="win-titlebar font-sans">
                <div style={{ display: "flex", alignItems: "center", gap: 5, flex: 1 }}>
                    {icon && <span style={{ fontSize: 12 }}>{icon}</span>}
                    <span style={{ fontSize: 11, fontWeight: "bold" }}>{title}</span>
                </div>
                <div style={{ display: "flex", gap: 2 }}>
                    <button
                        className="win-titlebar-btn"
                        onClick={() => setMinimized(!minimized)}
                        title="Minimize"
                        aria-label="Minimize"
                    >
                        _
                    </button>
                    <button className="win-titlebar-btn" title="Maximize" aria-label="Maximize">
                        □
                    </button>
                    <button className="win-titlebar-btn" title="Close" aria-label="Close" style={{ fontWeight: "bold" }}>
                        ✕
                    </button>
                </div>
            </div>

            {/* Menu bar */}
            <div className="win-menubar font-sans">
                {["File", "Edit", "View", "Help"].map((m) => (
                    <span key={m} className="win-menubar-item" tabIndex={0}>
                        <u>{m[0]}</u>
                        {m.slice(1)}
                    </span>
                ))}
            </div>

            {/* Content */}
            {!minimized && (
                <div style={{ padding: "10px 12px" }}>{children}</div>
            )}
        </div>
    );
}

function DesktopIcon({ label, icon, href }: { label: string; icon: string; href: string }) {
    return (
        <Link href={href} className="flex flex-col items-center gap-1 cursor-pointer group" style={{ width: 64 }}>
            <div
                style={{
                    width: 32,
                    height: 32,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    filter: "drop-shadow(1px 1px 0 #000)",
                }}
                className="group-hover:opacity-80"
            >
                {icon}
            </div>
            <span
                style={{
                    fontSize: 11,
                    color: "#fff",
                    textShadow: "1px 1px 2px #000, 0 0 4px #000",
                    textAlign: "center",
                    lineHeight: 1.2,
                    wordBreak: "break-word",
                    padding: "1px 2px",
                }}
                className="group-hover:bg-primary group-hover:text-white"
            >
                {label}
            </span>
        </Link>
    );
}

export function Hero() {
    const [showDialog, setShowDialog] = useState(false);

    return (
        <section
            className="relative min-h-screen font-sans"
            style={{
                background: "#008080",
                padding: "24px 24px 60px 24px",
            }}
        >
            {/* Desktop Icons (left column) */}
            <div
                style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    zIndex: 10,
                }}
            >
                <DesktopIcon label="My Portfolio" icon="💼" href="#projects" />
                <DesktopIcon label="My Documents" icon="📁" href="#about" />
                <DesktopIcon label="Internet Explorer" icon="🌐" href="#contact" />
                <DesktopIcon label="Recycle Bin" icon="🗑️" href="#" />
            </div>

            {/* Main window — centered hero */}
            <div
                style={{
                    maxWidth: 520,
                    margin: "0 auto",
                    position: "relative",
                    zIndex: 20,
                    marginTop: 16,
                }}
            >
                <WinWindow title="Welcome to Mukit Hasan's Portfolio — Internet Explorer" icon="🌐">
                    {/* Address bar */}
                    <div
                        className="win-inset font-sans"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            marginBottom: 10,
                            padding: "2px 6px",
                        }}
                    >
                        <span style={{ fontSize: 11, color: "#808080", whiteSpace: "nowrap" }}>Address:</span>
                        <span style={{ fontSize: 11, flex: 1 }}>
                            http://mukithasan.dev/portfolio/index.html
                        </span>
                    </div>

                    {/* Page content */}
                    <div
                        style={{
                            background: "#fff",
                            border: "2px inset #d4d0c8",
                            padding: 16,
                            minHeight: 220,
                            fontFamily: "Times New Roman, serif",
                        }}
                    >
                        {/* IE-style header */}
                        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 12 }}>
                            <tbody>
                                <tr>
                                    <td
                                        style={{
                                            background: "linear-gradient(to right, #000080, #1084d0)",
                                            color: "#fff",
                                            padding: "8px 14px",
                                            fontFamily: "Arial, sans-serif",
                                            fontSize: 22,
                                            fontWeight: "bold",
                                            letterSpacing: 1,
                                        }}
                                    >
                                        {DATA.name}
                                    </td>
                                    <td
                                        style={{
                                            background: "linear-gradient(to right, #000080, #1084d0)",
                                            textAlign: "right",
                                            padding: "8px 14px",
                                        }}
                                    >
                                        <span style={{ fontSize: 24 }}>🖥</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <p style={{ fontFamily: "Arial, sans-serif", fontSize: 13, color: "#000080", fontWeight: "bold", marginBottom: 6 }}>
                            {DATA.role}
                        </p>

                        <hr style={{ border: "none", borderTop: "1px solid #000080", marginBottom: 10 }} />

                        <p style={{ fontFamily: "Arial, sans-serif", fontSize: 11, lineHeight: 1.6, marginBottom: 12, color: "#000" }}>
                            {DATA.headline}
                        </p>

                        {/* Availability badge */}
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 5,
                                background: "#00ff00",
                                border: "1px solid #008000",
                                padding: "2px 8px",
                                fontSize: 11,
                                marginBottom: 12,
                                fontFamily: "Arial, sans-serif",
                            }}
                        >
                            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#008000", display: "inline-block" }} />
                            Available for New Projects
                        </div>

                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                            <Link href="#contact" className="win-btn-primary font-sans" style={{ textDecoration: "none", padding: "4px 14px", fontSize: 11 }}>
                                Start a Project
                            </Link>
                            <Link href="#projects" className="win-btn font-sans" style={{ textDecoration: "none", padding: "4px 14px", fontSize: 11 }}>
                                View My Work
                            </Link>
                            <button
                                className="win-btn font-sans"
                                onClick={() => setShowDialog(true)}
                            >
                                About Me
                            </button>
                        </div>
                    </div>

                    {/* Status bar */}
                    <div className="win-statusbar font-sans" style={{ marginTop: 8 }}>
                        <div className="win-inset font-sans" style={{ flex: 1, padding: "1px 4px", fontSize: 10 }}>
                            Done
                        </div>
                        <div className="win-inset font-sans" style={{ padding: "1px 8px", fontSize: 10 }}>
                            Local intranet
                        </div>
                        <div className="win-inset font-sans" style={{ padding: "1px 8px", fontSize: 10 }}>
                            🌐 Internet
                        </div>
                    </div>
                </WinWindow>
            </div>

            {/* Secondary floating window */}
            <div
                style={{
                    maxWidth: 260,
                    position: "relative",
                    marginTop: 16,
                    marginLeft: "auto",
                    marginRight: 80,
                    zIndex: 15,
                }}
            >
                <WinWindow title="Notepad — skills.txt" icon="📝">
                    <div
                        style={{
                            background: "#fff",
                            border: "2px inset #d4d0c8",
                            padding: 8,
                            fontFamily: "Courier New, monospace",
                            fontSize: 11,
                            lineHeight: 1.7,
                            minHeight: 100,
                            whiteSpace: "pre",
                        }}
                    >
                        {`> React / Next.js
> TypeScript
> Firebase / Node.js
> Tailwind CSS
> REST APIs
> SEO & Performance
> Git & Version Control`}
                    </div>
                </WinWindow>
            </div>

            {/* "About Me" dialog */}
            {showDialog && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,0.5)",
                        zIndex: 1000,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onClick={() => setShowDialog(false)}
                >
                    <div
                        className="win-panel font-sans"
                        style={{ width: 340, maxWidth: "90vw" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="win-titlebar font-sans">
                            <span style={{ fontSize: 11, fontWeight: "bold" }}>About Mukit Hasan</span>
                            <button className="win-titlebar-btn" onClick={() => setShowDialog(false)} aria-label="Close dialog">✕</button>
                        </div>
                        <div style={{ padding: 16, display: "flex", gap: 14, alignItems: "flex-start" }}>
                            <div style={{ fontSize: 40, lineHeight: 1 }}>🧑‍💻</div>
                            <div style={{ fontSize: 11, lineHeight: 1.6 }}>
                                <p style={{ fontWeight: "bold", marginBottom: 4 }}>{DATA.name}</p>
                                <p style={{ color: "#000080", marginBottom: 4 }}>{DATA.role}</p>
                                <p>{DATA.subheading}</p>
                            </div>
                        </div>
                        <div style={{ borderTop: "1px solid #808080", padding: "8px 16px", display: "flex", justifyContent: "center" }}>
                            <button className="win-btn font-sans" onClick={() => setShowDialog(false)}>
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
