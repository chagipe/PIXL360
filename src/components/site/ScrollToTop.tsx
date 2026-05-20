"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function ScrollToTop() {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const onScroll = () => {
      if (window.scrollY > 500) {
        gsap.to(btn, { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out", overwrite: "auto" });
      } else {
        gsap.to(btn, { opacity: 0, scale: 0.8, duration: 0.3, ease: "power2.out", overwrite: "auto" });
      }
    };

    const onClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    btn.addEventListener("click", onClick);

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      btn.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <button ref={btnRef} className="scroll-to-top" aria-label="Volver arriba">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 4l-8 8h5v8h6v-8h5z" />
      </svg>
    </button>
  );
}
