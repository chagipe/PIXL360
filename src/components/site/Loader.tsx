"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => setIsVisible(false),
        });
      },
    });

    tl.fromTo(
      textRef.current,
      { y: 60, opacity: 0, rotateX: -30 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1.2, ease: "power4.out" }
    );

    if (ringRef.current) {
      gsap.fromTo(
        ringRef.current,
        { scale: 0, opacity: 0.5 },
        {
          scale: 2.5,
          opacity: 0,
          duration: 1.6,
          ease: "power2.out",
          repeat: 2,
          repeatDelay: 0.3,
        }
      );
    }

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        scale: 1.6,
        opacity: 0,
        duration: 1.8,
        ease: "power2.out",
        delay: 0.3,
      });
    }

    tl.to(textRef.current, { scale: 0.92, duration: 0.5, ease: "power2.in" }, "+=0.4");
    tl.to(textRef.current, { opacity: 0, y: -20, duration: 0.5 }, "-=0.1");

    return () => {
      tl.kill();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div ref={containerRef} className="loader-overlay">
      <div ref={glowRef} className="loader-glow" />
      <div className="loader-content">
        <div ref={ringRef} className="loader-ring" />
        <h1 ref={textRef} className="loader-text">
          PIXL 360
        </h1>
      </div>
    </div>
  );
}
