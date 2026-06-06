"use client";

import { useEffect, useState } from "react";

const TYPING_PHRASES = [
    "Full Stack Web Developer",
    "AI Specialist",
    "SaaS Architect",
    "Next.js Engineer",
];

export function TypingText() {
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
        <span className="text-indigo-600 dark:text-indigo-300">
            {text}
            <span
                className="inline-block w-[2px] h-[1em] bg-indigo-600 dark:bg-indigo-500 ml-[2px] align-middle"
                style={{
                    animation: "blink 1s step-end infinite",
                }}
            />
        </span>
    );
}

const CODE_LINES_DARK = [
    { token: "import { NextConfig } from 'next';", color: "#8b5cf6" }, // Purple
    { token: "", color: "" },
    { token: "const config: NextConfig = {", color: "#6366f1" }, // Indigo
    { token: "  reactStrictMode: true,", color: "#e2e8f0" }, // Slate-200
    { token: "  experimental: {", color: "#e2e8f0" },
    { token: "    serverActions: true,", color: "#10b981" }, // Emerald-500
    { token: "    typedRoutes: true,", color: "#10b981" },
    { token: "  },", color: "#e2e8f0" },
    { token: "  // Powered by Gemini AI", color: "#64748b" }, // Slate-500
    { token: "};", color: "#6366f1" },
    { token: "", color: "" },
    { token: "export default config;", color: "#8b5cf6" },
];

const CODE_LINES_LIGHT = [
    { token: "import { NextConfig } from 'next';", color: "#7c3aed" }, // Purple-600
    { token: "", color: "" },
    { token: "const config: NextConfig = {", color: "#4f46e5" }, // Indigo-600
    { token: "  reactStrictMode: true,", color: "#334155" }, // Slate-700
    { token: "  experimental: {", color: "#334155" },
    { token: "    serverActions: true,", color: "#059669" }, // Emerald-600
    { token: "    typedRoutes: true,", color: "#059669" },
    { token: "  },", color: "#334155" },
    { token: "  // Powered by Gemini AI", color: "#94a3b8" }, // Slate-400
    { token: "};", color: "#4f46e5" },
    { token: "", color: "" },
    { token: "export default config;", color: "#7c3aed" },
];


export function HeroCodeCard() {
    const [visible, setVisible] = useState(0);

    useEffect(() => {
        if (visible >= CODE_LINES_DARK.length) return;
        const t = setTimeout(() => setVisible((v) => v + 1), 180);
        return () => clearTimeout(t);
    }, [visible]);

    return (
        <div className="w-full max-w-[400px] rounded-2xl overflow-hidden bg-white/80 dark:bg-slate-900/85 backdrop-blur-xl border border-slate-200 dark:border-indigo-500/25 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04)_inset]">
            <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/5">
                {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                    <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                ))}
                <span className="ml-2 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    next.config.ts
                </span>
            </div>

            <div className="px-5 py-4 font-mono text-[13px] leading-loose">
                {CODE_LINES_DARK.slice(0, visible).map((line, i) => (
                    <div key={i} className="opacity-0 animate-[fade-in_0.3s_ease_forwards] relative">
                        {/* Light Mode Line */}
                        <span className="block dark:hidden" style={{ color: CODE_LINES_LIGHT[i].color }}>
                            {line.token || " "}
                        </span>
                        {/* Dark Mode Line */}
                        <span className="hidden dark:block" style={{ color: line.color }}>
                            {line.token || " "}
                        </span>
                        
                        {i === visible - 1 && (
                            <span
                                className="inline-block w-[2px] h-[13px] bg-indigo-600 dark:bg-indigo-500 ml-px align-middle absolute right-0 top-1/2 -translate-y-1/2"
                                style={{
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
