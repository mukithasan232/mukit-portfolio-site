"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, X, Send, BarChart2, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Configuration & Data ---

const SKILL_DATA = [
    { name: "HTML", value: 90, color: "bg-orange-500" },
    { name: "CSS", value: 85, color: "bg-blue-500" },
    { name: "JavaScript", value: 80, color: "bg-yellow-400" },
    { name: "React", value: 75, color: "bg-cyan-400" },
    { name: "Next.js", value: 70, color: "bg-slate-900 dark:bg-white" },
    { name: "Firebase", value: 65, color: "bg-yellow-600" },
];

type MessageType = "user" | "bot" | "chart-skills" | "chart-growth";

interface Action {
    label: string;
    targetId?: string;
    type?: 'scroll' | 'link' | 'copy';
    value?: string;
}

interface Message {
    id: string;
    type: MessageType;
    content: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any;
    action?: Action; // Keeping backward compatibility if single action
    actions?: Action[]; // New: Multiple actions
}

// --- Helper Components ---

const ChatButton = ({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) => (
    <button
        onClick={onClick}
        className={`fixed bottom-6 right-6 z-[9999] flex items-center gap-2 text-[14px] font-semibold px-5 py-3 rounded-full transition-all duration-300 backdrop-blur-md shadow-lg ${
            isOpen
                ? "bg-indigo-100 dark:bg-indigo-500/15 text-indigo-600 dark:text-white border border-indigo-200 dark:border-indigo-500/40"
                : "bg-indigo-600 text-white border-none shadow-[0_8px_32px_rgba(99,102,241,0.4)]"
        }`}
        aria-label={isOpen ? "Close Chat" : "Open Mukit AI"}
    >
        {isOpen ? <X size={18} /> : <Bot size={18} />}
        {isOpen ? "Close" : "Mukit AI"}
    </button>
);

const SkillChart = ({ data }: { data: typeof SKILL_DATA }) => (
    <div className="mt-3 space-y-3 rounded-xl bg-white/50 dark:bg-slate-800/50 p-3.5 backdrop-blur-sm border border-slate-200 dark:border-indigo-500/20 w-full shadow-sm">
        <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-2">
            <BarChart2 size={12} /> Skill Proficiency
        </h4>
        {data.map((skill) => (
            <div key={skill.name} className="space-y-1.5">
                <div className="flex justify-between text-[12px] font-semibold text-slate-700 dark:text-slate-300">
                    <span>{skill.name}</span>
                    <span className="text-indigo-600 dark:text-indigo-400">{skill.value}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700/50">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.value}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={cn("h-full rounded-full", skill.color)}
                    />
                </div>
            </div>
        ))}
    </div>
);

const GrowthChart = () => (
    <div className="mt-3 rounded-xl bg-white/50 dark:bg-slate-800/50 p-4 backdrop-blur-sm border border-slate-200 dark:border-indigo-500/20 w-full shadow-sm">
        <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
            <Sparkles size={12} /> Learning Trajectory
        </h4>
        <div className="h-32 flex items-end justify-between gap-2 px-1">
            {[40, 55, 65, 75, 85, 90].map((h, i) => (
                <div key={i} className="flex flex-col items-center gap-1 w-full">
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="w-full bg-gradient-to-t from-indigo-500 to-purple-400 dark:from-indigo-600 dark:to-cyan-400 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
                    />
                </div>
            ))}
        </div>
        <div className="flex justify-between text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-2 px-1">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
        </div>
    </div>
);

// --- Helpers ---
const generateId = () => Date.now().toString();

// --- Main Component ---

export function MukitAI() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [mode, setMode] = useState<'normal' | 'recruiter' | 'client' | 'interview'>('normal');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome",
            type: "bot",
            content: "👋 Hi, I’m Mukit AI. I can help recruiters & clients understand skills, projects, and fit—fast.",
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isOpen]);

    const handleAction = (action: Action) => {
        if (action.type === 'scroll' && action.targetId) {
            const element = document.getElementById(action.targetId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else if (action.type === 'link' && action.value) {
            window.open(action.value, '_blank');
        } else if (action.type === 'copy' && action.value) {
            navigator.clipboard.writeText(action.value);
            alert("Copied to clipboard!");
        }
    };

    const handleSendMessage = async (text: string) => {
        if (!text.trim()) return;

        // Add user message
        const userMsg: Message = { id: generateId(), type: "user", content: text };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Simulate AI delay
        setTimeout(() => {
            const response = generateResponse(text);
            setMessages((prev) => [...prev, ...response]);
            setIsTyping(false);
        }, 1000);
    };

    const generateResponse = (text: string): Message[] => {
        const lowerText = text.toLowerCase();
        const responses: Message[] = [];
        const timestamp = generateId();

        // 0. INTERVIEW MODE DETECTION
        if (["interview", "questions", "technical round", "frontend questions", "mock interview"].some(k => lowerText.includes(k))) {
            if (mode !== 'interview') {
                setMode('interview');
                responses.push({
                    id: timestamp + "-interview-welcome",
                    type: "bot",
                    content: "👋 You’re now in Interview Mode.\nAsk me frontend, React, project, or behavior questions.\nI’ll answer as Mukit would—in a clear, honest, junior-level way."
                });
            }
        }

        // INTERVIEW MODE LOGIC
        if (mode === 'interview' || lowerText.includes("interview")) {
            let interviewResponse = null;

            if (lowerText.includes("tell me about yourself") || lowerText.includes("intro")) {
                interviewResponse = "I’m MD Mukit Hasan, a Junior Web Developer focused on frontend development using React, Next.js, and Tailwind CSS.\nI enjoy building responsive, SEO-friendly interfaces and learning through real projects.\nI’m continuously improving my skills and looking for opportunities where I can grow and contribute.";
            } else if (lowerText.includes("technologies") || lowerText.includes("tech stack")) {
                interviewResponse = "My main focus is HTML, CSS, JavaScript, React, and Next.js for frontend development.\nI also use Firebase for authentication and basic backend features, and Git/GitHub for version control.";
            } else if (lowerText.includes("projects") || lowerText.includes("built")) {
                interviewResponse = "I’ve built a personal portfolio website, a School Management System using Firebase, and a Job Search Dashboard.\nThese projects helped me practice component-based design, responsive layouts, and real data handling.";
            } else if (lowerText.includes("react") && lowerText.includes("strong")) {
                interviewResponse = "I have solid junior-level experience in React.\nI’m comfortable with components, props, state management, and basic hooks, and I apply these in real projects while continuously learning best practices.";
            } else if (lowerText.includes("responsive") || lowerText.includes("mobile")) {
                interviewResponse = "I use a mobile-first approach and tools like Tailwind CSS to ensure layouts work smoothly across all devices.\nI test designs on different screen sizes and focus on usability and performance.";
            } else if (lowerText.includes("weakness") || lowerText.includes("improving")) {
                interviewResponse = "I’m improving my advanced React patterns, better state management, and deeper understanding of backend workflows using Firebase.";
            } else if (lowerText.includes("strength")) {
                interviewResponse = "My strengths are clean UI implementation, responsiveness, consistency in learning, and attention to detail.\nI focus on writing readable code and improving performance step by step.";
            } else if (lowerText.includes("suitable") || lowerText.includes("junior")) {
                interviewResponse = "Yes. I’m well-suited for a junior frontend role where I can work with React, build responsive UIs, and grow under mentorship while contributing to real projects.";
            }

            if (interviewResponse) {
                responses.push({
                    id: timestamp + "-interview-ans",
                    type: "bot",
                    content: interviewResponse,
                    actions: [
                        { label: "Download CV", type: "link", value: "/resume.pdf" },
                        { label: "View Projects", type: "scroll", targetId: "projects" }
                    ]
                });
                return responses;
            }
        }

        // 0.5 RESUME SUMMARY GENERATOR (New Phase 3)
        if (["resume", "cv", "summary", "profile", "intro", "hr"].some(k => lowerText.includes(k)) && mode !== 'interview') {
            // Determine context based on mode or keywords
            const isRecruiterContext = mode === 'recruiter' || lowerText.includes("hr") || lowerText.includes("recruiter");
            const isClientContext = mode === 'client' || lowerText.includes("client") || lowerText.includes("project");

            if (isRecruiterContext) {
                setMode('recruiter');
                responses.push({
                    id: timestamp + "-resume-recruiter",
                    type: "bot",
                    content: "Resume Summary (Junior Frontend Developer)\n\nMD Mukit Hasan is a Junior Web Developer specializing in React, Next.js, and responsive UI development.\nHe has hands-on experience building SEO-friendly, modern web applications and using Firebase for authentication and data handling.\nMukit is growth-oriented, detail-focused, and suitable for junior frontend or web developer roles.",
                    actions: [
                        { label: "Download CV", type: "link", value: "/resume.pdf" },
                        { label: "Contact Mukit", type: "scroll", targetId: "contact" }
                    ]
                });
            } else if (isClientContext) {
                setMode('client');
                responses.push({
                    id: timestamp + "-resume-client",
                    type: "bot",
                    content: "Mukit helps businesses build fast, modern, and responsive websites using React and Next.js.\nHe focuses on clean UI, performance, and SEO—ideal for landing pages, dashboards, and MVPs.",
                    actions: [
                        { label: "Hire Me", type: "scroll", targetId: "contact" },
                        { label: "View Projects", type: "scroll", targetId: "projects" }
                    ]
                });
            } else {
                // Default / Mixed
                responses.push({
                    id: timestamp + "-resume-general",
                    type: "bot",
                    content: "I can provide a summary tailored for recruiters or clients. Which one are you?",
                    actions: [
                        { label: "For Recruiters", type: "copy", value: "Summarize for recruiter" }, // Little hack to prompt user
                        { label: "For Clients", type: "copy", value: "Summarize for client" }
                    ]
                });
                // Or just default to recruiter one if 'resume' is asked directly
                responses.push({
                    id: timestamp + "-resume-fallback",
                    type: "bot",
                    content: "Here is a professional summary:\n\nMD Mukit Hasan is a Junior Web Developer specializing in React, Next.js, and responsive UI development. He builds SEO-friendly, modern web applications.",
                    actions: [{ label: "Download CV", type: "link", value: "/resume.pdf" }]
                });
            }
            return responses;
        }

        // 1. RECRUITER MODE DETECTION (Updated)
        if (["hire", "recruit", "experience", "fit for role", "junior position"].some(k => lowerText.includes(k)) && mode !== 'interview') {
            if (mode !== 'recruiter') {
                setMode('recruiter');
                responses.push({
                    id: timestamp + "-recruiter-welcome",
                    type: "bot",
                    content: "Hello 👋 I’m Mukit AI (Recruiter Mode). I can quickly summarize Mukit’s skills, role-fit, and projects."
                });
            }

            // Recruiter Logic
            if (lowerText.includes("suitable") || lowerText.includes("junior")) {
                responses.push({
                    id: timestamp + "-suitability",
                    type: "bot",
                    content: "Yes. Mukit is a Junior Frontend Developer with hands-on experience in React, Next.js, and Tailwind CSS. He builds responsive, SEO-friendly UIs and has real project experience, making him a good fit for junior roles.",
                    action: { label: "Download CV", type: "link", value: "/resume.pdf" }
                });
            } else if (lowerText.includes("projects") || lowerText.includes("readiness") || lowerText.includes("recommend") || lowerText.includes("see")) {
                // Role-Based Project Recommender (Recruiter)
                responses.push({
                    id: timestamp + "-projects-recruiter",
                    type: "bot",
                    content: "For recruiters, I recommend reviewing:\n1️⃣ Portfolio Website – UI, responsiveness, SEO\n2️⃣ School Management System – Firebase & real-world logic",
                    actions: [
                        { label: "View Portfolio", type: "link", value: "https://www.codernest.cloud/" }, // Assuming live link
                        { label: "View All Projects", type: "scroll", targetId: "projects" }
                    ]
                });
            } else if (lowerText.includes("strengths") || lowerText.includes("skills")) {
                responses.push({
                    id: timestamp + "-strengths",
                    type: "bot",
                    content: "Clean UI implementation, responsive design, React component architecture, and consistent learning."
                });
            } else {
                responses.push({
                    id: timestamp + "-recruiter-default",
                    type: "bot",
                    content: "Would you like to download the CV or contact Mukit?",
                    action: { label: "Contact Mukit", type: "scroll", targetId: "contact" }
                });
            }
            return responses;
        }

        // 2. CLIENT MODE DETECTION (Updated)
        if (["website", "landing page", "react app", "fix bug", "seo", "full-stack", "client", "work with"].some(k => lowerText.includes(k)) && mode !== 'interview') {
            if (mode !== 'client') {
                setMode('client');
            }

            if (lowerText.includes("landing page") || lowerText.includes("fast")) {
                responses.push({
                    id: timestamp + "-landing",
                    type: "bot",
                    content: "Mukit is a good match. He builds fast, SEO-optimized, responsive landing pages using React/Tailwind. Best next step: View Landing Page Project or Send Requirements.",
                    action: { label: "Contact for Estimate", type: "scroll", targetId: "contact" }
                });
            } else if (lowerText.includes("recommend") || lowerText.includes("project") || lowerText.includes("start")) {
                // Role-Based Project Recommender (Client)
                responses.push({
                    id: timestamp + "-projects-client",
                    type: "bot",
                    content: "For clients, the best project to start with is the Portfolio Website, which demonstrates design quality and performance.\nIf you need data handling, check the School Management System.",
                    actions: [
                        { label: "View Portfolio", type: "link", value: "https://www.codernest.cloud/" },
                        { label: "Contact Me", type: "scroll", targetId: "contact" }
                    ]
                });
            } else if (lowerText.includes("full-stack") || lowerText.includes("app")) {
                responses.push({
                    id: timestamp + "-fullstack",
                    type: "bot",
                    content: "Mukit focuses on frontend-first apps with Firebase backend. Ideal for MVPs, dashboards, and internal tools.",
                    action: { label: "View Firebase Project", type: "scroll", targetId: "projects" }
                });
            } else {
                responses.push({
                    id: timestamp + "-client-default",
                    type: "bot",
                    content: "Mukit can help with that. Start with the Portfolio Website for UI/UX quality, or message him directly.",
                    action: { label: "Message Mukit", type: "scroll", targetId: "contact" }
                });
            }
            return responses;
        }


        // 3. NORMAL / OTHER LOGIC
        if (lowerText.includes("react")) {
            // Specific React Recommendation
            responses.push({
                id: timestamp + "-react-rec",
                type: "bot",
                content: "To evaluate Mukit’s React skills, start with the Job Search Dashboard project, which uses component-based architecture and API integration.",
                actions: [{ label: "View Tech Stack", type: "scroll", targetId: "skills" }]
            });
            return responses; // Return early or let it fall through? Better return early to be specific.
        }

        if (lowerText.includes("top skill") || lowerText.includes("strength") || lowerText.includes("best at")) {
            const topSkills = [...SKILL_DATA].sort((a, b) => b.value - a.value).slice(0, 3);
            const skillNames = topSkills.map(s => s.name).join(", ");
            responses.push({
                id: timestamp + "-1",
                type: "bot",
                content: `Mukit's strongest skills are ${skillNames}. Here is the full breakdown:`,
                action: { label: "View All Skills", type: "scroll", targetId: "skills" }
            });
            responses.push({
                id: timestamp + "-2",
                type: "chart-skills",
                content: "",
                data: SKILL_DATA
            });
        } else if (lowerText.includes("firebase") && lowerText.includes("project")) {
            responses.push({
                id: timestamp,
                type: "bot",
                content: "The 'School Management System' is a key project powered by Firebase (Auth & Firestore), demonstrating real-time data handling capabilities.",
                action: { label: "Go to Projects", type: "scroll", targetId: "projects" }
            });
        } else if (lowerText.includes("frontend") || lowerText.includes("suitable")) {
            responses.push({
                id: timestamp,
                type: "bot",
                content: "Absolutely! With 90% in HTML/CSS and strong React (75%) skills, Mukit is well-suited for frontend roles focusing on modern, responsive UI."
            });
            responses.push({
                id: timestamp + "-chart",
                type: "chart-skills",
                content: "",
                data: SKILL_DATA.filter(s => ["HTML", "CSS", "React", "JavaScript"].includes(s.name))
            });
        } else if (lowerText.includes("growth") || lowerText.includes("trend")) {
            responses.push({
                id: timestamp,
                type: "bot",
                content: "Mukit has shown consistent technical growth over the last 6 months. Here is the trajectory:"
            });
            responses.push({
                id: timestamp + "-growth",
                type: "chart-growth",
                content: ""
            });
        } else {
            // Default / Fallback matching prompt Smart CTA Flow
            if (lowerText.includes("skills") || lowerText.includes("projects")) {
                responses.push({
                    id: timestamp,
                    type: "bot",
                    content: "I can show you all projects or skills. What would you like to see?",
                    action: { label: "View Projects", type: "scroll", targetId: "projects" }
                });
            } else if (lowerText.includes("work") || lowerText.includes("service")) {
                responses.push({
                    id: timestamp,
                    type: "bot",
                    content: "Mukit is available for freelance work and full-time roles.",
                    action: { label: "Hire Me", type: "scroll", targetId: "contact" }
                });
            } else {
                responses.push({
                    id: timestamp,
                    type: "bot",
                    content: "I can help with that! Try asking about 'Skills', 'Projects' or 'Expertise'."
                });
            }
        }

        return responses;
    };

    // Determine suggestions based on mode
    const getSuggestions = () => {
        if (mode === 'interview') {
            return ["Tell me about yourself", "What are your strengths?", "How do you handle responsive design?"];
        }
        if (mode === 'recruiter') {
            return ["Summarize Resume", "Is Mukit suitable?", "Show job-ready projects"];
        }
        if (mode === 'client') {
            return ["Project Recommendation", "I need a landing page", "Get an estimate"];
        }
        return ["Summarize Profile", "What are Mukit's top skills?", "Show React proficiency"];
    };

    return (
        <>
            <ChatButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-[85px] right-4 md:right-6 z-[9999] w-[calc(100vw-32px)] md:w-[400px] overflow-hidden flex flex-col h-[520px] max-h-[calc(100vh-120px)] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-indigo-500/25 rounded-2xl shadow-2xl dark:shadow-[0_24px_80px_rgba(99,102,241,0.2)]"
                    >
                        {/* Header */}
                        <div className="px-5 py-4 border-b border-slate-200 dark:border-indigo-500/15 shrink-0 flex items-center justify-between bg-slate-50 dark:bg-gradient-to-r dark:from-indigo-500/10 dark:to-transparent">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-indigo-600 dark:bg-gradient-to-br dark:from-indigo-500 dark:to-purple-500 flex items-center justify-center text-white shadow-sm">
                                    <Bot size={16} />
                                </div>
                                <div>
                                    <div className="text-[14px] font-bold text-slate-900 dark:text-[#f0f4ff]">Mukit AI</div>
                                    <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                                        Online
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1.5 rounded-lg bg-slate-200 dark:bg-indigo-500/10 border border-slate-300 dark:border-indigo-500/20 text-slate-500 dark:text-indigo-300 hover:bg-slate-300 dark:hover:bg-indigo-500/20 transition-colors"
                                aria-label="Close"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 text-[13px] flex flex-col gap-3">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex w-full ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3.5 leading-[1.6] ${
                                            msg.type === "user" 
                                                ? "rounded-[16px_16px_4px_16px] bg-indigo-600 text-white shadow-sm" 
                                                : "rounded-[16px_16px_16px_4px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-indigo-500/15 text-slate-700 dark:text-slate-300"
                                        }`}
                                    >
                                        {msg.content && <p className="m-0 whitespace-pre-wrap">{msg.content}</p>}
                                        {msg.type === "chart-skills" && msg.data && <SkillChart data={msg.data} />}
                                        {msg.type === "chart-growth" && <GrowthChart />}

                                        {/* Support multiple actions */}
                                        {msg.actions && (
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {msg.actions.map((action, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={() => handleAction(action)}
                                                        className="flex items-center gap-1 text-[12px] font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/25 rounded-lg px-2.5 py-1.5 transition-colors hover:bg-indigo-200 dark:hover:bg-indigo-500/20"
                                                    >
                                                        {action.label} <ChevronRight size={12} />
                                                    </button>
                                                ))}
                                            </div>
                                        )}

                                        {/* Backward compatibility for single action */}
                                        {msg.action && !msg.actions && (
                                            <button
                                                onClick={() => handleAction(msg.action!)}
                                                className="mt-2 flex items-center gap-1 text-[12px] font-bold text-indigo-700 dark:text-indigo-300 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors"
                                            >
                                                {msg.action.label} <ChevronRight size={12} />
                                            </button>
                                        )}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-indigo-500/15 rounded-[16px_16px_16px_4px] px-4 py-3 flex gap-1.5 items-center">
                                        {[0, 1, 2].map((i) => (
                                            <span
                                                key={i}
                                                className="w-1.5 h-1.5 rounded-full bg-indigo-500"
                                                style={{ animation: `bounce 1s ease-in-out ${i * 0.15}s infinite` }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggestions */}
                        {messages.length < 3 && !isTyping && (
                            <div className="px-4 py-2 border-t border-slate-200 dark:border-indigo-500/10 bg-slate-50 dark:bg-transparent">
                                <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2">Suggested:</p>
                                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                                    {getSuggestions().map((q, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleSendMessage(q)}
                                            className="whitespace-nowrap rounded-full border border-slate-300 dark:border-indigo-500/25 bg-white dark:bg-indigo-500/5 px-3 py-1.5 text-[12px] font-semibold text-slate-700 dark:text-indigo-300 transition-colors hover:bg-slate-100 dark:hover:bg-indigo-500/15"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input Area */}
                        <div className="border-t border-slate-200 dark:border-indigo-500/15 p-3.5 bg-white dark:bg-slate-900/50">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSendMessage(input);
                                }}
                                className="flex gap-2 items-center"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask Mukit AI..."
                                    className="flex-1 px-3.5 py-2.5 text-[13px] rounded-xl border border-slate-300 dark:border-indigo-500/20 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim()}
                                    className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 transition-all duration-200 ${
                                        !input.trim()
                                            ? "bg-slate-200 dark:bg-indigo-500/10 text-slate-400 dark:text-indigo-500/50 cursor-not-allowed"
                                            : "bg-indigo-600 text-white shadow-md hover:bg-indigo-500"
                                    }`}
                                >
                                    <Send size={16} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
