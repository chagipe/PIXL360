"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    document.body.classList.add("cursor-hidden");

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 4,
        y: e.clientY - 4,
        duration: 0,
      });
      gsap.to(follower, {
        x: e.clientX - 16,
        y: e.clientY - 16,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("input, textarea, select, [contenteditable]")) return;

      const interactive = target.closest(
        "a, button, .service-card, .service-detail-card, .nav-link, .primary-button, .secondary-button, .light-button, .outline-light-button, .nav-cta, .mobile-nav-link"
      );
      if (interactive) {
        gsap.to(follower, {
          scale: 3,
          borderColor: "rgba(0, 67, 200, 0.3)",
          backgroundColor: "rgba(0, 67, 200, 0.06)",
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(follower, {
          scale: 1,
          borderColor: "rgba(0, 67, 200, 0.25)",
          backgroundColor: "transparent",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);

    return () => {
      document.body.classList.remove("cursor-hidden");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor-dot" />
      <div ref={followerRef} className="custom-cursor-ring" />
    </>
  );
}
