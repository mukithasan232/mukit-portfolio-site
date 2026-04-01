"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Activity", href: "#activity" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [time, setTime] = useState("");
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    useEffect(() => {
        const tick = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                })
            );
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <>
            {/* Taskbar pinned to bottom */}
            <div className="win-taskbar font-sans" style={{ zIndex: 9999 }}>
                {/* Start button */}
                <button
                    className="win-start-btn font-sans"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Start menu"
                >
                    <span
                        style={{
                            display: "inline-block",
                            width: 14,
                            height: 14,
                            background: "linear-gradient(135deg, #ff0000 0%, #ffff00 25%, #00ff00 50%, #0000ff 75%)",
                            borderRadius: 2,
                            marginRight: 3,
                        }}
                    />
                    <strong>Start</strong>
                </button>

                {/* Separator */}
                <div style={{ width: 2, height: 22, background: "#808080", borderRight: "1px solid #fff", margin: "0 4px" }} />

                {/* Active window pill */}
                <button
                    className="win-btn font-sans"
                    style={{ height: 22, minWidth: 140, textAlign: "left", fontSize: 11 }}
                >
                    <span style={{ marginRight: 4 }}>🖥</span>
                    Mukit Hasan — Portfolio
                </button>

                {/* Spacer */}
                <div style={{ flex: 1 }} />

                {/* System tray */}
                <div
                    className="win-inset font-sans"
                    style={{
                        height: 22,
                        display: "flex",
                        alignItems: "center",
                        padding: "0 8px",
                        gap: 6,
                        fontSize: 11,
                        minWidth: 70,
                        justifyContent: "center",
                    }}
                >
                    <span title="Network connected" style={{ fontSize: 10 }}>🌐</span>
                    <span title="Volume" style={{ fontSize: 10 }}>🔊</span>
                    <span style={{ fontSize: 11 }}>{time}</span>
                </div>
            </div>

            {/* Start Menu popup */}
            {isOpen && (
                <div
                    className="win-panel font-sans"
                    style={{
                        position: "fixed",
                        bottom: 32,
                        left: 0,
                        width: 200,
                        zIndex: 9998,
                        fontSize: 11,
                    }}
                >
                    {/* Header strip */}
                    <div
                        style={{
                            background: "linear-gradient(to bottom, #1c3e7e, #000080)",
                            color: "#fff",
                            padding: "8px 10px",
                            fontWeight: "bold",
                            fontSize: 13,
                            letterSpacing: 0.5,
                        }}
                    >
                        Mukit Hasan
                    </div>

                    <div style={{ borderBottom: "1px solid #808080", margin: "2px 0" }} />

                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="win-menubar-item font-sans"
                            style={{ display: "block", padding: "5px 16px", width: "100%", fontSize: 11 }}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}

                    <div style={{ borderTop: "1px solid #808080", margin: "2px 0" }} />

                    <button
                        className="win-menubar-item font-sans"
                        style={{ display: "block", padding: "5px 16px", width: "100%", textAlign: "left", fontSize: 11, background: "none", border: "none", cursor: "pointer" }}
                        onClick={() => setIsOpen(false)}
                    >
                        Shut Down...
                    </button>
                </div>
            )}

            {/* Overlay to close start menu */}
            {isOpen && (
                <div
                    style={{ position: "fixed", inset: 0, zIndex: 9997 }}
                    onClick={() => setIsOpen(false)}
                    aria-hidden
                />
            )}
        </>
    );
}
