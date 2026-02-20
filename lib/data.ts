import { Github, Linkedin, Mail, Search, Twitter, User } from "lucide-react";

export const DATA = {
    name: "MD Mukit Hasan",
    profilePicture: "/me.png",
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
            name: "Business Email",
            url: "mailto:codernestwebsolution@gmail.com",
            icon: Mail,
        },
        {
            name: "Personal Email",
            url: "mailto:mdmukithasan689@gmail.com",
            icon: Mail,
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/md-mukit-hasan-bd",
            icon: Linkedin,
        },
        {
            name: "Upwork",
            url: "https://www.upwork.com/freelancers/~01467066421f1d7887?mp_source=share",
            icon: Search,
        }
    ],
    contact: {
        email: "codernestwebsolution@gmail.com",
        personalEmail: "mdmukithasan689@gmail.com",
    },
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
            live: "https://www.codernest.cloud/",
            github: "https://mukithasan232.github.io/mukit-portfolio-site/",
            images: [
                "/project1-screenshot1.png",
                "/project1-screenshot2.png",
                "/project1-screenshot3.png",
                "/project1-screenshot5.png",
                "/project1-screenshot6.png",
                "/project1-screenshot7.png",
                "/project1-screenshot8.png",
            ],
        },
        {
            title: "School Management System",
            problem: "Manual data handling in schools caused errors and inefficiency.",
            solution: "Developed a comprehensive Firebase-based management system for real-time tracking.",
            tech: ["React", "Firebase", "Firestore"],
            result: "Faster data access, improved organization, and reduced manual workload.",
            live: "",
            github: "#",
            images: [
                "/project2-screenshot1.png",
                "/project2-screenshot2.png",
                "/project2-screenshot3.png",
                "/project2-screenshot4.png",
                "/project2-screenshot5.png",
                "/project2-screenshot6.png",
                "/project2-screenshot7.png",
                "/project2-screenshot8.png",
            ],
        },
        {
            title: "AI Web Builder",
            problem: "Manually building websites is time-consuming and requires technical expertise.",
            solution: "Developed an AI-powered web builder that generates fully functional websites with customizable themes, AI chatbots, and automated SEO optimization.",
            tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "OpenAI API", "Vercel"],
            result: "Users can launch modern, responsive websites in minutes without coding, increasing efficiency and accessibility.",
            live: "https://ai-powerd-website-builder.netlify.app/",
            github: "https://github.com/mukithasan232/ai-powerd-website-builder",
            images: [
                "/project3-screenshot1.png",
                "/project3-screenshot2.png",
                "/project3-screenshot3.png",
            ],
        },
        {
            title: "AffiliatePro - Amazon Affiliate Platform",
            problem: "Amazon affiliate marketers often struggle with slow, unoptimized websites that are hard to manage and lack real-time product data syncing.",
            solution: "Built a premium Affiliate Marketing platform that automates product discovery and management. Features high-performance SSR for SEO and a robust admin dashboard.",
            tech: ["Next.js", "Tailwind CSS", "Neon DB", "PostgreSQL", "Redis"],
            result: "A scalable, SEO-friendly platform that helps founders launch affiliate sites quickly with minimal maintenance.",
            live: "https://simple-affilliate-site.vercel.app/", // Placeholder based on common naming
            github: "https://mukithasan232.github.io/simple-affilliate-site/", // Placeholder
            images: [
                "/project4-screenshot1.png",
                "/project4-screenshot2.png",
                "/project4-screenshot3.png ",
            ],
        },
        {
    title: "MedOS - Comprehensive Hospital Management System",
    problem: "Healthcare facilities often struggle with fragmented, outdated systems that make scheduling, patient tracking, and billing inefficient and error-prone.",
    solution: "Developed a modern, full-stack SaaS platform featuring secure role-based authentication, an intuitive real-time analytics dashboard, and seamless appointment and patient management.",
    tech: ["Next.js", "Tailwind CSS", "Prisma ORM", "NextAuth.js", "PostgreSQL"],
    result: "A highly secure, responsive, and scalable portal that optimizes daily hospital workflows, enhances patient care tracking, and provides clear financial analytics.",
    live: "https://hospital-management-portal-nu.vercel.app/", 
    github: "https://mukithasan232.github.io/hospital_management_portal/", // Placeholder based on your username
    images: [
        "/project5-screenshot1.png",
        "/project5-screenshot2.png",
        "/project5-screenshot3.png",
        "/project5-screenshot4.png",
        "/project5-screenshot5.png",
        "/project5-screenshot6.png",
        "/project5-screenshot7.png",
        "/project5-screenshot8.png",
        "/project5-screenshot9.png",
        "/project5-screenshot10.png",
        "/project5-screenshot11.png",
        "/project5-screenshot12.png",
    ],
    },
    {
    title: "SMM Elite - Automated Digital Service Marketplace",
    problem: "Managing and reselling thousands of social media marketing services manually is inefficient, and connecting local users to global providers requires seamless API bridging and localized payment processing.",
    solution: "Developed a premium, fully automated SMM Reseller Panel that integrates with the SMMGen API. The system handles automated service imports, instant background order routing, and localized payment verification for the local market.",
    tech: ["Core PHP", "RESTful APIs", "MySQL", "JavaScript", "Payment Gateways (bKash, Nagad, Rocket)"],
    result: "A highly scalable, dark-themed platform that bridges users to over 6,000 digital services. It features a custom algorithm for automated profit margins and ensures seamless asynchronous data handling.",
    live: "https://smm-panel-liart.vercel.app/", // Based on the URL from your screenshot
    github: "https://mukithasan232.github.io/smm_panel/", // Placeholder using your GitHub username
    images: [
        "/project6-screenshot1.png",
        "/project6-screenshot2.png",
        "/project6-screenshot3.png",
        "/project6-screenshot4.png",
        "/project6-screenshot5.png",
    ]
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
            category: "React",
            image: "/blog-react-tailwind.png"
        },
        {
            title: "Beginner Guide to Firebase for Web Developers",
            excerpt: "Understanding Authentication and Firestore for your first full-stack app.",
            date: "Jan 28, 2026",
            category: "Firebase",
            image: "/blog-firebase.png"
        },
        {
            title: "Common Mistakes Junior Developers Make",
            excerpt: "Lessons learned from my early coding journey and how to avoid them.",
            date: "Jan 15, 2026",
            category: "Career",
            image: "/blog-career-mistakes.png"
        },
        {
            title: "How SEO-Friendly Code Improves Website Traffic",
            excerpt: "Why semantic HTML and performance matter for Google ranking.",
            date: "Jan 10, 2026",
            category: "SEO",
            image: "/blog-seo.png"
        }
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.73352!2d88.7767625!3d25.6473352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb55eb718e02d9%3A0x32fd0be634d9111c!2sCoderNest!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
};
