"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;

    constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = Math.random() * 0.5 - 0.25; // Slower velocity
        this.vy = Math.random() * 0.5 - 0.25;
        this.size = Math.random() * 2 + 1;
    }

    update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
    }

    draw(ctx: CanvasRenderingContext2D, resolvedTheme: string | undefined) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)";
        ctx.fill();
    }
}

export function ParticlesBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);
        const particles: Particle[] = [];
        const particleCount = 50; // Total number of particles
        const connectionDistance = 150; // Distance to connect particles
        let animationFrameId: number;
        const resizeReset = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };

        const init = () => {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(w, h));
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, w, h);

            particles.forEach((particle) => {
                particle.update(w, h);
                particle.draw(ctx, resolvedTheme);
            });

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = resolvedTheme === "dark"
                            ? `rgba(255, 255, 255, ${0.1 - distance / connectionDistance * 0.1})`
                            : `rgba(0, 0, 0, ${0.05 - distance / connectionDistance * 0.05})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        window.addEventListener("resize", resizeReset);
        return () => {
            window.removeEventListener("resize", resizeReset);
            cancelAnimationFrame(animationFrameId);
        };
    }, [resolvedTheme]);

    // Fixed position, low z-index so it's behind everything
    return <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" />;
}
