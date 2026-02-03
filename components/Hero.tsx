"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { DATA } from "@/lib/data";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-40"
                >
                    <source
                        src="https://assets.mixkit.co/videos/preview/mixkit-digital-circuit-elements-looping-animation-31620-large.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background z-1" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
                {/* Profile Image with Glowing Effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100
                    }}
                    className="relative mb-8"
                >
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl animate-pulse" />
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/20 p-1 bg-background shadow-2xl overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-blue-500/20 group-hover:opacity-60 transition-opacity" />
                        <Image
                            src={DATA.profilePicture}
                            alt={DATA.name}
                            fill
                            priority
                            className="object-cover rounded-full"
                        />
                    </div>
                    {/* Decorative Ring */}
                    <div className="absolute -inset-2 border-2 border-dashed border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-4 max-w-4xl"
                >
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
                        Available for Hire
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-blue-600 block mb-2 drop-shadow-sm">
                            {DATA.role}
                        </span>
                        <span className="block text-2xl sm:text-3xl md:text-4xl text-foreground font-bold mt-4 leading-tight">
                            {DATA.headline.split("Building")[1] ? `Building ${DATA.headline.split("Building")[1]}` : DATA.headline}
                        </span>
                    </h1>

                    <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-6 leading-relaxed bg-background/50 backdrop-blur-[2px] rounded-lg p-2">
                        {DATA.subheading}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mt-10"
                >
                    <Link
                        href="#contact"
                        className="group inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        {DATA.cta.primary}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="#projects"
                        className="inline-flex h-12 items-center justify-center rounded-full border border-primary/20 bg-background/50 backdrop-blur-md px-8 text-sm font-medium shadow-sm transition-all hover:scale-105 hover:bg-accent hover:text-accent-foreground"
                    >
                        {DATA.cta.secondary}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
