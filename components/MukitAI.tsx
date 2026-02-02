"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, X, Send, BarChart2, ChevronRight, Sparkles, Briefcase, UserCheck, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Configuration & Data ---

const SKILL_DATA = [
    { name: "HTML", value: 90, color: "bg-orange-500" },
    { name: "CSS", value: 85, color: "bg-blue-500" },
    { name: "JavaScript", value: 80, color: "bg-yellow-400" },
    { name: "React", value: 75, color: "bg-cyan-400" },
    { name: "Next.js", value: 70, color: "bg-black dark:bg-white" },
    { name: "Firebase", value: 65, color: "bg-yellow-600" },
];

const PREDEFINED_QUESTIONS = [
    "What are Mukit's top skills?",
    "Show React and Next.js proficiency",
    "Which projects use Firebase?",
    "Is Mukit suitable for frontend development?",
    "Explain the skill growth chart",
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
    data?: any;
    action?: Action; // Keeping backward compatibility if single action
    actions?: Action[]; // New: Multiple actions
}

// --- Helper Components ---

const ChatButton = ({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) => (
    <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={cn(
            "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-all duration-300",
            isOpen
                ? "bg-red-500 text-white rotate-90"
                : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white animate-pulse-subtle"
        )}
        aria-label={isOpen ? "Close Chat" : "Open Mukit AI"}
    >
        {isOpen ? <X size={24} /> : <Bot size={28} />}
    </motion.button>
);

const SkillChart = ({ data }: { data: typeof SKILL_DATA }) => (
    <div className="mt-3 space-y-3 rounded-lg bg-card/50 p-3 backdrop-blur-sm border border-border/50 w-full shadow-sm">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
            <BarChart2 size={12} /> Skill Proficiency
        </h4>
        {data.map((skill) => (
            <div key={skill.name} className="space-y-1">
                <div className="flex justify-between text-xs font-medium text-foreground">
                    <span>{skill.name}</span>
                    <span className="text-muted-foreground">{skill.value}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
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
    <div className="mt-3 rounded-lg bg-card/50 p-4 backdrop-blur-sm border border-border/50 w-full shadow-sm">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
            <Sparkles size={12} /> Learning Trajectory
        </h4>
        <div className="h-32 flex items-end justify-between gap-2 px-1">
            {[40, 55, 65, 75, 85, 90].map((h, i) => (
                <div key={i} className="flex flex-col items-center gap-1 w-full">
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
                    />
                </div>
            ))}
        </div>
        <div className="flex justify-between text-[10px] text-muted-foreground mt-2 px-1">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
        </div>
    </div>
);

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
        const userMsg: Message = { id: Date.now().toString(), type: "user", content: text };
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
        const timestamp = Date.now().toString();

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
                        className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-[380px] overflow-hidden rounded-2xl border border-border/50 bg-background/80 shadow-2xl backdrop-blur-xl flex flex-col h-[600px] max-h-[80vh]"
                    >
                        {/* Header */}
                        <div className={cn("flex items-center justify-between border-b border-border/50 p-4 backdrop-blur-md transition-colors",
                            mode === 'recruiter' ? "bg-purple-500/10" :
                                mode === 'client' ? "bg-green-500/10" :
                                    mode === 'interview' ? "bg-orange-500/10" :
                                        "bg-muted/40"
                        )}>
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className={cn("flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-colors",
                                        mode === 'recruiter' ? "bg-gradient-to-tr from-purple-500 to-indigo-600" :
                                            mode === 'client' ? "bg-gradient-to-tr from-green-500 to-teal-600" :
                                                mode === 'interview' ? "bg-gradient-to-tr from-orange-500 to-red-600" :
                                                    "bg-gradient-to-tr from-blue-500 to-purple-600"
                                    )}>
                                        {mode === 'recruiter' ? <Briefcase className="text-white" size={20} /> :
                                            mode === 'client' ? <UserCheck className="text-white" size={20} /> :
                                                mode === 'interview' ? <MessageSquare className="text-white" size={20} /> :
                                                    <Bot className="text-white" size={20} />
                                        }
                                    </div>
                                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground">
                                        {mode === 'recruiter' ? 'Mukit AI (Recruiter)' :
                                            mode === 'client' ? 'Mukit AI (Sales)' :
                                                mode === 'interview' ? 'Mukit AI (Interview)' :
                                                    'Mukit AI'}
                                    </h3>
                                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                        Online & Ready
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="rounded-full p-2 text-muted-foreground hover:bg-muted transition-colors"
                                aria-label="Close"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={cn("flex w-full", msg.type === "user" ? "justify-end" : "justify-start")}
                                >
                                    <div className={cn(
                                        "relative max-w-[85%] rounded-2xl p-3 text-sm shadow-sm",
                                        msg.type === "user"
                                            ? "bg-blue-600 text-white rounded-br-none"
                                            : "bg-muted/80 text-foreground rounded-bl-none border border-border/50"
                                    )}>
                                        {msg.content && <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p>}
                                        {msg.type === "chart-skills" && msg.data && <SkillChart data={msg.data} />}
                                        {msg.type === "chart-growth" && <GrowthChart />}

                                        {/* Support multiple actions */}
                                        {msg.actions && (
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {msg.actions.map((action, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={() => handleAction(action)}
                                                        className="flex items-center gap-1 text-xs font-semibold text-blue-500 hover:text-blue-600 transition-colors bg-blue-50/50 dark:bg-blue-950/20 px-2 py-1 rounded-md border border-blue-100 dark:border-blue-900"
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
                                                className="mt-3 flex items-center gap-1 text-xs font-semibold text-blue-500 hover:text-blue-600 transition-colors"
                                            >
                                                {msg.action.label} <ChevronRight size={14} />
                                            </button>
                                        )}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-muted/80 text-foreground rounded-2xl rounded-bl-none border border-border/50 p-4 flex gap-1">
                                        <span className="w-2 h-2 bg-foreground/60 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-2 h-2 bg-foreground/60 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-2 h-2 bg-foreground/60 rounded-full animate-bounce"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggestions */}
                        {messages.length < 3 && !isTyping && (
                            <div className="px-4 pb-2">
                                <p className="mb-2 text-xs font-medium text-muted-foreground ml-1">Suggested:</p>
                                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                    {getSuggestions().map((q, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleSendMessage(q)}
                                            className="whitespace-nowrap rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs text-primary hover:bg-primary/10 transition-colors"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input Area */}
                        <div className="border-t border-border/50 bg-muted/30 p-4 backdrop-blur-md">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSendMessage(input);
                                }}
                                className="flex items-center gap-2"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder={mode === 'recruiter' ? "Ask about role fit..." :
                                        mode === 'interview' ? "Ask an interview question..." :
                                            "Ask me anything..."}
                                    className="flex-1 rounded-full border border-border/50 bg-background/50 px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder:text-muted-foreground transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim()}
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                                >
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
