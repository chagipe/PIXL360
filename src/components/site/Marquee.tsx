"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const WORDS = ["DRONEO", "PRECISIÓN", "TECNOLOGÍA", "LIDAR", "8K", "RTK", "NDVI", "IA"];

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const track = trackRef.current;
    if (!track) return;

    const content = track.querySelector(".marquee-content") as HTMLElement;
    const clone = content.cloneNode(true) as HTMLElement;
    track.appendChild(clone);

    const distance = content.offsetWidth / 2;

    gsap.to([content, clone], {
      xPercent: -50,
      duration: 40,
      repeat: -1,
      ease: "none",
    });
  }, { scope: trackRef });

  return (
    <div className="marquee-section">
      <div className="marquee-track" ref={trackRef}>
        <div className="marquee-content">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>
              {WORDS.map((word, j) => (
                <span key={j} className="marquee-word">
                  {word}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
