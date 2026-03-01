"use client";

import { useEffect, useRef } from "react";

export default function AnimatedLines() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let time = 0;

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
        };

        window.addEventListener("resize", resize);
        resize();

        const render = () => {
            time += 0.002;

            const width = window.innerWidth;
            const height = window.innerHeight;

            ctx.clearRect(0, 0, width, height);

            // We want the lines to glow beautifully
            ctx.globalCompositeOperation = "screen";

            // Create a linear gradient that spans the width of the screen
            const gradient = ctx.createLinearGradient(0, 0, width, 0);
            gradient.addColorStop(0, "rgba(139, 46, 60, 0)"); // Fade out left edge (Crimson)
            gradient.addColorStop(0.2, "rgba(139, 46, 60, 0.4)"); // Crimson
            gradient.addColorStop(0.5, "rgba(201, 96, 112, 0.6)"); // Lighter Crimson
            gradient.addColorStop(0.8, "rgba(255, 75, 105, 0.4)"); // Bright Crimson
            gradient.addColorStop(1, "rgba(255, 75, 105, 0)"); // Fade out right edge

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.2;

            const numLines = 80;

            for (let i = 0; i < numLines; i++) {
                ctx.beginPath();
                const norm = i / numLines;
                const phase = norm * Math.PI * 2;

                // Calculate path smoothly
                for (let x = 0; x <= width; x += 15) {
                    const nx = x / width;

                    // Envelope to make lines still gather slightly, but spread much wider
                    const distFromCenter = Math.abs(nx - 0.45);
                    const env = 0.2 + Math.pow(distFromCenter * 1.5, 2) * 1.5;

                    // Two intersecting waves that swirl together - increased amplitude
                    const wave1 = Math.sin(nx * Math.PI * 1.5 + time + phase) * height * 0.45;
                    const wave2 = Math.cos(nx * Math.PI * 2.5 - time * 0.8 + phase * 2) * height * 0.3;

                    // Additional slow drift to make the whole bundle move slightly up/down
                    const drift = Math.sin(time * 0.5 + nx * Math.PI) * height * 0.15;

                    const y = height / 2 + (wave1 + wave2) * env + drift;

                    if (x === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.stroke();
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="animated-lines-canvas"
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 0,
            }}
        />
    );
}
