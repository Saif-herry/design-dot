"use client";

import { useEffect } from "react";

/**
 * Attaches an IntersectionObserver to all `.fade-in` elements
 * and adds the `.visible` class when they enter the viewport.
 * Rendered once in the root layout — zero DOM markup.
 */
export default function ScrollObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
