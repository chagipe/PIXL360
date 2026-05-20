"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { droneImage, cameraImage, fieldImage, whatsappQuoteUrl } from "@/config/site";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const gallery = [
  { src: droneImage, alt: "DJI Mini 3 en vuelo", span: "wide", title: "Vista Aérea Urbana", tag: "Cinematografía" },
  { src: cameraImage, alt: "Detalle de cámara DJI Mini 3", span: "small", title: "Equipo de Precisión", tag: "Equipo" },
  { src: fieldImage, alt: "Campo agrícola visto desde dron", span: "small", title: "Monitoreo de Cultivos", tag: "Agricultura" },
  { src: droneImage, alt: "Inspección de infraestructura", span: "small", title: "Inspección Industrial", tag: "Inspección" },
  { src: fieldImage, alt: "Mapeo topográfico", span: "wide", title: "Topografía 3D", tag: "Mapeo" },
  { src: cameraImage, alt: "Gimbal DJI Mini 3", span: "small", title: "Estabilización Activa", tag: "Equipo" },
  { src: droneImage, alt: "Producción cinematográfica", span: "small", title: "Toma Cinematográfica", tag: "Cinematografía" },
  { src: fieldImage, alt: "Análisis NDVI", span: "small", title: "Análisis Multiespectral", tag: "Agricultura" },
];

const videos = [
  { title: "Recorrido Aéreo — Zona Industrial", duration: "2:30" },
  { title: "Inspección de Torre Eléctrica", duration: "1:45" },
  { title: "Mapeo de Cantera con DJI Mini 3", duration: "3:15" },
];

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const heroTl = gsap.timeline();
    heroTl.from(".portfolio-hero .eyebrow", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power3.out"
    })
    .from(".portfolio-hero .display-title", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power4.out"
    }, "-=0.4")
    .from(".portfolio-hero .body-large", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.5");

    gsap.from(".gallery-card", {
      scrollTrigger: {
        trigger: ".portfolio-gallery",
        start: "top 85%"
      },
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(".video-card", {
      scrollTrigger: {
        trigger: ".portfolio-videos",
        start: "top 85%"
      },
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(".portfolio-cta .section-inner > *", {
      scrollTrigger: {
        trigger: ".portfolio-cta",
        start: "top 85%"
      },
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(".contact-grid > *", {
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 85%"
      },
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <div className="page-shell" ref={containerRef}>
      <Navbar active="portfolio" />
      <main className="portfolio-main">
        <header className="portfolio-hero">
          <div className="technical-grid" />
          <div className="section-inner">
            <div className="portfolio-hero-content">
              <span className="eyebrow">Portafolio Visual</span>
              <h1 className="display-title">Trabajos Recientes con DJI Mini 3.</h1>
              <p className="body-large">
                Galería de proyectos de cinematografía, inspección, mapeo y agricultura capturados con
                el DJI Mini 3 en diversos escenarios.
              </p>
            </div>
          </div>
        </header>

        <section className="section portfolio-gallery">
          <div className="section-inner">
            <div className="section-header">
              <div>
                <h2 className="headline-title">Galería de Proyectos</h2>
                <p className="body-large">Capturas realizadas con DJI Mini 3 en operaciones reales.</p>
              </div>
            </div>
            <div className="gallery-grid">
              {gallery.map((item, idx) => (
                <article key={idx} className={`gallery-card ${item.span}`}>
                  <div className="gallery-media">
                    <img alt={item.alt} src={item.src} />
                    <div className="gallery-overlay">
                      <span className="gallery-tag">{item.tag}</span>
                      <h3 className="gallery-title">{item.title}</h3>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-large portfolio-videos">
          <div className="section-inner">
            <div className="section-header">
              <div>
                <h2 className="headline-title">Videoteca</h2>
                <p className="body-large">Muestras de video aéreo con el DJI Mini 3.</p>
              </div>
            </div>
            <div className="video-grid">
              {videos.map((video, idx) => (
                <article key={idx} className="video-card">
                  <div className="video-thumb">
                    <span className="video-icon">
                      <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                    <span className="video-duration">{video.duration}</span>
                  </div>
                  <h3 className="video-title">{video.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-large portfolio-cta">
          <div className="section-inner" style={{ maxWidth: "820px", textAlign: "center" }}>
            <h2 className="headline-title">¿Listo para tu Proyecto?</h2>
            <p className="body-large" style={{ margin: "24px auto 0", maxWidth: "680px" }}>
              Cada proyecto comienza con una conversación. Cuéntanos qué necesitas y te mostraremos
              cómo el DJI Mini 3 puede capturarlo.
            </p>
            <div className="cta-actions" style={{ justifyContent: "center", marginTop: "32px" }}>
              <a className="primary-button" href={whatsappQuoteUrl} rel="noopener noreferrer" target="_blank">
                Solicitar Cotización
              </a>
              <a className="secondary-button" href="/servicios">
                Ver Servicios
              </a>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
