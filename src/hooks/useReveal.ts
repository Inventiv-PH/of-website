"use client";

import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function useBarReveal() {
  useEffect(() => {
    const bars = document.querySelectorAll<HTMLElement>(".bar-fill");
    const barIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const w = el.dataset.width ?? el.style.width;
            el.style.width = "0";
            setTimeout(() => {
              el.style.width = w;
            }, 100);
            barIO.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    bars.forEach((b) => {
      const w = b.style.width;
      b.dataset.width = w;
      b.style.width = "0";
      barIO.observe(b);
    });
    return () => barIO.disconnect();
  }, []);
}
