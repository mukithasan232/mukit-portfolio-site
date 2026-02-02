import { Github, Linkedin, Mail, Search, Twitter, User } from "lucide-react";

export const DATA = {
    name: "MD Mukit Hasan",
    role: "Modern Web Developer",
    headline: "Modern Web Developer Building Fast, SEO-Optimized & Scalable Websites",
    subheading: "I help startups, small businesses, and founders grow online with clean code, modern UI, and performance-driven web applications using React, Next.js, and Firebase.",
    cta: {
        primary: "Hire Me",
        secondary: "View Projects",
    },
    socials: [
        {
            name: "GitHub",
            url: "https://github.com/mukithasan232",
            icon: Github,
        },
        {
            name: "LinkedIn",
            url: "#", // User to add
            icon: Linkedin,
        },
        {
            name: "Email",
            url: "mailto:mukithasan232@gmail.com",
            icon: Mail,
        },
        {
            name: "Upwork",
            url: "#", // User to add
            icon: Search, // Using Search icon as placeholder for Upwork if specific icon not available, or just generic User
        }
    ],
    stats: [
        { label: "Projects Completed", value: "10+" },
        { label: "Technologies Mastered", value: "8+" },
        { label: "Commitment", value: "100%" },
    ],
    about: {
        title: "About Me",
        description: "I’m MD Mukit Hasan, a Junior Web Developer passionate about building modern, responsive, and SEO-optimized web applications. I focus on creating clean UI, smooth user experience, and scalable code that helps businesses grow online. I enjoy solving real-world problems using React, Next.js, Tailwind CSS, and Firebase, and I’m continuously improving my skills through real projects and hands-on practice. My goal is to work with clients and teams who value performance, usability, and long-term growth."
    },
    skills: {
        frontend: [
            { name: "HTML5", level: 95 },
            { name: "CSS3", level: 90 },
            { name: "JavaScript (ES6+)", level: 85 },
            { name: "React.js", level: 80 },
            { name: "Next.js", level: 75 },
            { name: "Tailwind CSS", level: 90 },
        ],
        backend: [
            { name: "Firebase (Auth, Firestore)", level: 75 },
            { name: "REST API Integration", level: 80 },
            { name: "Git & GitHub", level: 85 },
        ],
    },
    projects: [
        {
            title: "Personal Portfolio Website",
            problem: "Needed a professional online presence to attract clients and recruiters.",
            solution: "Built a modern, responsive, SEO-optimized portfolio using Next.js and Tailwind CSS.",
            tech: ["React", "Tailwind CSS", "Next.js"],
            result: "Improved visibility, professional branding, and client trust.",
            live: "#",
            github: "#",
        },
        {
            title: "School Management System",
            problem: "Manual data handling in schools caused errors and inefficiency.",
            solution: "Developed a comprehensive Firebase-based management system for real-time tracking.",
            tech: ["React", "Firebase", "Firestore"],
            result: "Faster data access, improved organization, and reduced manual workload.",
            live: "#",
            github: "#",
        },
        {
            title: "Job Search Dashboard",
            problem: "Scattered job tracking made the application process chaotic.",
            solution: "Created a centralized dashboard for tracking job applications and status.",
            tech: ["Next.js", "REST API", "Tailwind CSS"],
            result: "Improved productivity, clarity, and tracking efficiency.",
            live: "#",
            github: "#",
        },
    ],
    services: [
        {
            title: "Frontend Web Development",
            description: "Pixel-perfect, fast, and fully responsive websites converted from Figma or sketches.",
        },
        {
            title: "React / Next.js Applications",
            description: "Scalable and modern web apps built for high performance and smooth user experience.",
        },
        {
            title: "Landing Pages",
            description: "High-conversion landing pages optimized for SEO to help you sell more.",
        },
        {
            title: "Bug Fixing & Optimization",
            description: "Improve site speed, fix UI issues, and ensure code quality for better ranking.",
        },
    ],
    experience: [
        {
            year: "2025 - Present",
            role: "Junior Web Developer",
            company: "Freelance",
            description: "Building custom web solutions for clients on Upwork and Fiverr. Focusing on React and Next.js projects.",
        },
        {
            year: "2024",
            role: "Frontend Developer Trainee",
            company: "Self-Learning / Bootcamps",
            description: "Intensive learning of HTML, CSS, JS, and React. Built over 10 practice projects.",
        },
    ],
    testimonials: [ // Placeholder for future
        {
            name: "Startup Founder",
            role: "Client",
            content: "Mukit delivered a clean and fast website. Highly recommended for React projects.",
        },
        {
            name: "HR Manager",
            role: "Recruiter",
            content: "Impressive portfolio and code quality. A developer with great potential.",
        },
    ],
    blog: [
        {
            title: "How I Built My Portfolio Using React & Tailwind",
            excerpt: "A behind-the-scenes look at the design and code decisions for this personal site.",
            date: "Feb 2, 2026",
            category: "React"
        },
        {
            title: "Beginner Guide to Firebase for Web Developers",
            excerpt: "Understanding Authentication and Firestore for your first full-stack app.",
            date: "Jan 28, 2026",
            category: "Firebase"
        },
        {
            title: "Common Mistakes Junior Developers Make",
            excerpt: "Lessons learned from my early coding journey and how to avoid them.",
            date: "Jan 15, 2026",
            category: "Career"
        },
        {
            title: "How SEO-Friendly Code Improves Website Traffic",
            excerpt: "Why semantic HTML and performance matter for Google ranking.",
            date: "Jan 10, 2026",
            category: "SEO"
        }
    ]
};
