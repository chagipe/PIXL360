"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { IconlyIcon } from "@/components/site/Icon";
import { Navbar } from "@/components/site/Navbar";
import { cameraImage, droneImage, fieldImage, whatsappQuoteUrl } from "@/config/site";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Entrance Animations
    const heroTl = gsap.timeline();
    heroTl.from(".services-hero .eyebrow", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power3.out"
    })
    .from(".services-hero .display-title", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power4.out"
    }, "-=0.4")
    .from(".services-hero .body-large", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.5");

    // Parallax for media panel images
    gsap.fromTo(".media-panel img",
      { y: -20 },
      {
        y: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      }
    );

    // Parallax for half-media image
    gsap.fromTo(".half-media img",
      { y: -30 },
      {
        y: 30,
        ease: "none",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      }
    );

    // Technical grid background animate subtle opacity pulse
    gsap.fromTo(".technical-grid", 
      { opacity: 0.1 },
      { opacity: 0.3, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" }
    );

    // Service Detail Cards scroll reveals
    gsap.from(".service-detail-card", {
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 85%"
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out"
    });

    // CTA Section entrance
    gsap.from(".blue-cta .section-inner > *", {
      scrollTrigger: {
        trigger: ".blue-cta",
        start: "top 85%"
      },
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out"
    });

    // Contact Section entrance
    gsap.from(".contact-grid > *", {
      scrollTrigger: {
        trigger: ".services-main .contact-section",
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
      <Navbar active="services" />
      <main className="services-main">
        <header className="services-hero">
          <div className="technical-grid" />
          <div className="section-inner">
            <div className="services-hero-content">
              <span className="eyebrow">DJI Mini 3 — Precisión Aeroespacial</span>
              <h1 className="display-title">Soluciones Profesionales con DJI Mini 3.</h1>
              <p className="body-large">
                Datos de precisión e imágenes cinematográficas con el DJI Mini 3 y análisis avanzados.
              </p>
            </div>
          </div>
        </header>

        <section className="section">
          <div className="section-inner services-grid">
            <article className="service-detail-card span-7">
              <div className="detail-card-top">
                <IconlyIcon className="card-icon large" name="movie" set="two-tone" primaryColor="var(--primary)" size="large" />
                <span className="service-badge">Servicio 01</span>
              </div>
              <h2 className="detail-title">Cinematografía Aérea</h2>
              <p className="body-large">
                Video HDR 4K con estabilización de 3 ejes para bienes raíces, eventos y producción ligera.
              </p>
              <div className="detail-split">
                <div>
                  <h3 className="detail-list-title">Especificaciones</h3>
                  <ul className="bullet-list">
                    <li>Captura HDR 4K — DJI Mini 3</li>
                    <li>Disparo vertical nativo</li>
                    <li>Estabilización de 3 ejes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="detail-list-title">Beneficios</h3>
                  <ul className="bullet-list">
                    <li>Agilidad en espacios reducidos</li>
                    <li>Despliegue ultra rápido</li>
                    <li>Calidad cinematográfica premium</li>
                  </ul>
                </div>
              </div>
              <div className="media-panel">
                <img alt="DJI Mini 3 drone en estudio" src={droneImage} />
              </div>
            </article>

            <article className="service-detail-card span-5">
              <div className="detail-card-top">
                <IconlyIcon className="card-icon large" name="biotech" set="two-tone" primaryColor="var(--primary)" size="large" />
                <span className="service-badge">Servicio 02</span>
              </div>
              <h2 className="detail-title">Inspección de Infraestructura</h2>
              <p className="body-text">
                Evaluaciones visuales con sensor CMOS 4K para detectar fallos estructurales en infraestructura crítica.
              </p>
              <div className="info-stack">
                <div className="info-strip">
                  <strong>Sensor CMOS 4K DJI Mini 3</strong>
                  <p>Detalle microscópico con píxeles de 2.4 µm para inspecciones precisas.</p>
                </div>
                <div className="info-strip">
                  <strong>Estabilización 3 Ejes</strong>
                  <p>Tomas nítidas incluso en estructuras altas con viento gracias al gimbal mecánico.</p>
                </div>
              </div>
              <div className="media-panel small">
                <img alt="Detalle de cámara y gimbal DJI Mini 3" src={cameraImage} />
              </div>
            </article>

            <article className="service-detail-card span-5">
              <div className="detail-card-top">
                <IconlyIcon className="card-icon large" name="map" set="two-tone" primaryColor="var(--primary)" size="large" />
                <span className="service-badge">Servicio 03</span>
              </div>
              <h2 className="detail-title">Topografía y Mapeo</h2>
              <p className="body-text">
                Ortomosaicos 2D y modelos 3D con el DJI Mini 3 para construcción, minería y planificación urbana.
              </p>
              <div className="metric-grid">
                <div className="metric-box">
                  <strong>1cm</strong>
                  <span>Precisión GSD</span>
                </div>
                <div className="metric-box">
                  <strong>LiDAR</strong>
                  <span>Nubes de Puntos</span>
                </div>
              </div>
              <p className="quote-note">
                “Datos de grado topográfico entregados en formatos CAD y GIS en menos de 24 horas.”
              </p>
            </article>

            <article className="service-detail-card span-7 flex-card">
              <div className="half-copy">
                <div className="detail-card-top">
                  <IconlyIcon className="card-icon large" name="agriculture" set="two-tone" primaryColor="var(--primary)" size="large" />
                  <span className="service-badge">Servicio 04</span>
                </div>
              <h2 className="detail-title">Agricultura de Precisión</h2>
              <p className="body-text">
                Análisis multiespectral de cultivos con DJI Mini 3 para optimizar rendimientos y monitorear salud vegetal.
              </p>
                <ul className="check-list">
                  <li>
                    <IconlyIcon name="check_circle" set="bold" primaryColor="var(--primary)" size="small" /> Mapeo de Índice NDVI
                  </li>
                  <li>
                    <IconlyIcon name="check_circle" set="bold" primaryColor="var(--primary)" size="small" /> Prescripción de Tasa Variable
                  </li>
                  <li>
                    <IconlyIcon name="check_circle" set="bold" primaryColor="var(--primary)" size="small" /> Detección de Plagas e Irrigación
                  </li>
                </ul>
              </div>
              <div className="half-media">
                <img alt="Vista aérea de campo agrícola con overlay técnico" src={fieldImage} />
              </div>
            </article>
          </div>
        </section>

        <section className="blue-cta">
          <div className="section-inner">
            <h2 className="headline-title">¿Listo para elevar tus operaciones?</h2>
            <p className="body-large">
              Nuestro equipo técnico está listo para asesorarte sobre tus requisitos específicos de datos e imágenes.
              Discutamos cómo la tecnología de drones puede resolver tus desafíos.
            </p>
            <div className="cta-actions">
              <a className="light-button" href={whatsappQuoteUrl} rel="noopener noreferrer" target="_blank">
                Programar Consulta
              </a>
              <a className="outline-light-button" href="#">
                Descargar Media Kit
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
