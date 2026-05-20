"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconlyIcon } from "./Icon";
import { whatsappQuoteUrl } from "@/config/site";

export function BottomDock() {
  const pathname = usePathname();

  return (
    <nav className="bottom-dock">
      <div className="bottom-dock-inner">
        <Link 
          href="/" 
          className={`dock-item ${pathname === "/" ? "active" : ""}`}
          aria-label="Inicio"
        >
          <IconlyIcon name="home" set={pathname === "/" ? "bold" : "light"} />
          <span>Inicio</span>
        </Link>

        <Link 
          href="/servicios" 
          className={`dock-item ${pathname === "/servicios" ? "active" : ""}`}
          aria-label="Servicios"
        >
          <IconlyIcon name="services" set={pathname === "/servicios" ? "bold" : "light"} />
          <span>Servicios</span>
        </Link>

        <div className="dock-fab-wrapper">
          <a 
            href={whatsappQuoteUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="dock-fab"
            aria-label="Cotizar"
          >
            <IconlyIcon name="plus" set="light" primaryColor="#ffffff" size={28} />
          </a>
          <span className="fab-label">Cotizar</span>
        </div>

        <Link 
          href="/#flota" 
          className="dock-item"
          aria-label="Flota"
        >
          <IconlyIcon name="shield" set="light" />
          <span>Flota</span>
        </Link>

        <a 
          href="#contacto" 
          className="dock-item"
          aria-label="Contacto"
        >
          <IconlyIcon name="contact" set="light" />
          <span>Contacto</span>
        </a>
      </div>
    </nav>
  );
}
