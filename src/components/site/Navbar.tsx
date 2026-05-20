"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { logoImage, whatsappQuoteUrl } from "@/config/site";

// Register the hook safely on the client
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

type NavbarProps = {
  active?: "home" | "services" | "portfolio";
};

const links = [
  { href: "/", label: "Inicio", key: "home" },
  { href: "/servicios", label: "Servicios", key: "services" },
  { href: "/portafolio", label: "Portafolio", key: "portfolio" },
  { href: "#contacto", label: "Contacto", key: "contact" }
] as const;

export function Navbar({ active }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useGSAP(() => {
    if (!drawerRef.current) return;

    if (isMenuOpen) {
      // Toggle body overflow to prevent scrolling when menu is open
      document.body.style.overflow = "hidden";

      // Open drawer animation with a smooth circular clip path reveal
      gsap.to(drawerRef.current, {
        clipPath: "circle(150% at 92% 5%)",
        duration: 0.6,
        ease: "power4.out",
      });

      // Staggered fade and slide up of links
      gsap.fromTo(
        ".mobile-nav-link, .mobile-nav-cta",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.4, ease: "power2.out", delay: 0.2, overwrite: "auto" }
      );
    } else {
      document.body.style.overflow = "";

      // Close drawer animation
      gsap.to(drawerRef.current, {
        clipPath: "circle(0% at 92% 5%)",
        duration: 0.5,
        ease: "power4.inOut",
        overwrite: "auto"
      });
    }

    // Cleanup overflow on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, { dependencies: [isMenuOpen], scope: drawerRef });

  return (
    <nav className={`top-nav ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="nav-inner">
        <Link className="brand" href="/" onClick={() => setIsMenuOpen(false)}>
          <img alt="PIXL 360" className="brand-logo" src={logoImage} />
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="nav-links">
          {links.map((link) => (
            <Link
              className={active === link.key ? "nav-link active" : "nav-link"}
              href={link.href}
              key={link.key}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <a className="nav-cta" href={whatsappQuoteUrl} rel="noopener noreferrer" target="_blank">
          Solicitar Cotización
        </a>

        {/* Mobile Hamburger Button */}
        <button
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Drawer Navigation (using GSAP scope) */}
      <div className="mobile-drawer" ref={drawerRef}>
        <div className="mobile-drawer-inner">
          <div className="mobile-drawer-links">
            {links.map((link) => (
              <Link
                className={active === link.key ? "mobile-nav-link active" : "mobile-nav-link"}
                href={link.href}
                key={link.key}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              className="mobile-nav-cta"
              href={whatsappQuoteUrl}
              rel="noopener noreferrer"
              target="_blank"
              onClick={() => setIsMenuOpen(false)}
            >
              Solicitar Cotización
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

