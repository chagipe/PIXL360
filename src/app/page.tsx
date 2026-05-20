"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { IconlyIcon } from "@/components/site/Icon";
import { Navbar } from "@/components/site/Navbar";
import { Marquee } from "@/components/site/Marquee";
import { cameraImage, droneImage, whatsappQuoteUrl } from "@/config/site";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const homeServices = [
  {
    icon: "precision_manufacturing",
    number: "01",
    title: "Inspección Industrial",
    description:
      "Imágenes térmicas y RGB de alta resolución para infraestructura crítica, turbinas eólicas y torres de telecomunicaciones. Rutas de vuelo automatizadas que aseguran la recolección de datos repetible con precisión milimétrica.",
    tags: ["Imagen Térmica", "Mapeo LiDAR", "Pruebas NDT"],
    wide: true
  },
  {
    icon: "movie_filter",
    number: "02",
    title: "Cinematografía",
    description:
      "Visuales aéreos 8K galardonados para largometrajes, bienes raíces de lujo y campañas de marcas globales."
  },
  {
    icon: "agriculture",
    number: "03",
    title: "Agricultura de Precisión",
    description:
      "Análisis multiespectral de cultivos y mapeo NDVI para optimizar rendimientos y monitorear la salud de las plantas en tiempo real."
  },
  {
    icon: "analytics",
    number: "04",
    title: "Análisis de Datos",
    description:
      "Conversión de imágenes aéreas en bruto en informes de ingeniería procesables y gemelos digitales 3D con detección de anomalías mediante IA.",
    wide: true
  }
];

const features = [
  {
    icon: "sensors",
    title: "Gimbal Mecánico 3 Ejes",
    text: "Estabilización activa para tomas cinematográficas sin vibraciones, incluso en condiciones de viento."
  },
  {
    icon: "shield",
    title: "Sensor CMOS 1/1.3″",
    text: "Captura HDR 4K con píxeles de 2.4 µm para calidad profesional en cada vuelo."
  },
  {
    icon: "cell_tower",
    title: "Ultraportátil — 249 g",
    text: "Menos de 249 gramos, no requiere registro en la mayoría de jurisdicciones. Despliegue inmediato."
  }
];

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Hero Animations (on load)
    const heroTl = gsap.timeline();
    
    // Animate copy elements
    heroTl.from(".hero-copy .eyebrow", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power3.out"
    })
    .from(".display-title", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power4.out"
    }, "-=0.4")
    .from(".hero-copy .body-large", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.5")
    .from(".hero-actions", {
      opacity: 0,
      y: 15,
      duration: 0.5,
      ease: "power3.out"
    }, "-=0.4")
    .from(".hero-media img", {
      opacity: 0,
      scale: 0.95,
      x: 30,
      duration: 1.0,
      ease: "power4.out"
    }, "-=0.7");

    // Luxury Drone Float
    gsap.fromTo(".hero-media img", 
      { y: 0 },
      {
        y: -15,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      }
    );

    // 2. Scroll Triggered animations

    // Services Cards stagger
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: ".home-services-grid",
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out"
    });

    // Split text for services section headline
    const servicesTitle = document.querySelector(".section-header .headline-title");
    if (servicesTitle) {
      const text = servicesTitle.textContent || "";
      servicesTitle.textContent = "";
      const words = text.split(/[ \t\n\r\f\v]+/);
      let i = 0;
      while (i < words.length) {
        const word = words[i];
        if (!word) { i++; continue; }
        if (word === "DJI" && words[i + 1] === "Mini" && words[i + 2] === "3") {
          const span = document.createElement("span");
          span.textContent = "DJI Mini 3";
          span.style.display = "inline-block";
          span.style.whiteSpace = "nowrap";
          servicesTitle.appendChild(span);
          i += 3;
        } else {
          const span = document.createElement("span");
          span.textContent = word;
          span.style.display = "inline-block";
          servicesTitle.appendChild(span);
          i++;
        }
      }
      gsap.from(servicesTitle.children, {
        scrollTrigger: {
          trigger: ".section-header",
          start: "top 85%"
        },
        opacity: 0,
        y: 20,
        rotateX: -90,
        stagger: 0.04,
        duration: 0.5,
        ease: "power3.out"
      });
    }

    // Technology Section entrance
    const techTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".technology-section",
        start: "top 80%"
      }
    });

    techTl.from(".tech-frame", {
      opacity: 0,
      x: -40,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(".stat-card", {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "back.out(1.7)"
    }, "-=0.4")
    .call(() => {
      const headline = document.querySelector(".tech-copy .headline-title");
      if (headline) {
        const text = headline.textContent || "";
        headline.textContent = "";
        const words = text.split(/[ \t\n\r\f\v]+/);
        let i = 0;
        while (i < words.length) {
          const word = words[i];
          if (!word) { i++; continue; }
          if (word === "DJI" && words[i + 1] === "Mini" && words[i + 2] === "3") {
            const span = document.createElement("span");
            span.textContent = "DJI Mini 3";
            span.style.display = "inline-block";
            span.style.whiteSpace = "nowrap";
            headline.appendChild(span);
            i += 3;
          } else {
            const span = document.createElement("span");
            span.textContent = word;
            span.style.display = "inline-block";
            headline.appendChild(span);
            i++;
          }
        }
        gsap.from(headline.children, {
          opacity: 0,
          y: 20,
          rotateX: -90,
          stagger: 0.04,
          duration: 0.5,
          ease: "power3.out"
        });
      }
    }, [], "-=0.6")
    .from(".tech-copy .body-large", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.5")
    .from(".feature-list li", {
      opacity: 0,
      y: 20,
      stagger: 0.12,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4");

    // Count-up stat card (reliable ScrollTrigger approach)
    ScrollTrigger.create({
      trigger: ".stat-card",
      start: "top 85%",
      once: true,
      onEnter: () => {
        const el = document.querySelector(".stat-number");
        if (!el) return;
        const proxy = { val: 0 };
        gsap.to(proxy, {
          val: 99.9,
          duration: 2.5,
          ease: "power2.out",
          onUpdate: () => { el.textContent = proxy.val.toFixed(1); }
        });
      }
    });

    // Parallax tech-frame image
    gsap.fromTo(".tech-frame img",
      { y: -24 },
      {
        y: 24,
        ease: "none",
        scrollTrigger: {
          trigger: ".technology-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      }
    );

    // Home CTA entrance
    gsap.from(".home-cta .section-inner > *", {
      scrollTrigger: {
        trigger: ".home-cta",
        start: "top 85%"
      },
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out"
    });

    // Split text for contact headline
    gsap.from(".contact-copy .headline-title", {
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 85%"
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "power3.out"
    });

    // Contact Section entrance
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
    <div className="page-shell home-reference" ref={containerRef}>
      <Navbar active="home" />
      <main className="home-main">
        <section className="home-hero">
          <div className="home-hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">DJI Mini 3 — Máxima Precisión</span>
              <h1 className="display-title">
                Mapeo de Precisión <br />
                desde la Nube.
              </h1>
              <p className="body-large">
                El DJI Mini 3 ofrece estabilización de 3 ejes y captura HDR 4K para mapeo, inspección
                y cinematografía aérea con precisión milimétrica.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href="/servicios">
                  Ver Operaciones
                </a>
                <a className="secondary-button" href="#flota">
                  Nuestra Flota
                </a>
              </div>
            </div>
            <div className="hero-media">
              <img alt="DJI Mini 3 Drone" src={droneImage} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <div className="section-header">
              <div>
                <h2 className="headline-title">Servicios Principales</h2>
                <p className="body-large">Diseñados para la precisión, construidos para la empresa.</p>
              </div>
              <a className="section-link" href="/servicios">
                Ver todas las capacidades <IconlyIcon name="arrow_forward" size="small" />
              </a>
            </div>
            <div className="home-services-grid">
              {homeServices.map((service) => (
                <article className={service.wide ? "service-card wide" : "service-card"} key={service.number}>
                  <div className="card-top">
                    <IconlyIcon className="card-icon" name={service.icon} set="two-tone" primaryColor="var(--primary)" />
                    <span className="card-number">{service.number}</span>
                  </div>
                  <h3 className="card-title">{service.title}</h3>
                  <p className="body-text">{service.description}</p>
                  {service.tags ? (
                    <div className="tag-row">
                      {service.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <Marquee />

        <section className="section-large technology-section" id="flota">
          <div className="section-inner technology-grid">
            <div className="tech-image-wrap">
              <div className="tech-frame">
                <img alt="Detalle de cámara DJI Mini 3" src={cameraImage} />
              </div>
              <div className="stat-card" data-count="99.9">
                <strong><span className="stat-number">0</span><span className="stat-unit">%</span></strong>
                <span>Estabilidad de Vuelo</span>
              </div>
            </div>
            <div className="tech-copy">
              <h2 className="headline-title">DJI Mini 3 — Precisión en Cada Vuelo.</h2>
              <p className="body-large">
                El DJI Mini 3 combina un gimbal mecánico de 3 ejes con un sensor CMOS de 1/1.3 pulgadas,
                ofreciendo calidad profesional en un formato ultraportátil de menos de 249 g.
              </p>
              <ul className="feature-list">
                {features.map((feature) => (
                  <li key={feature.title}>
                    <IconlyIcon name={feature.icon} set="bulk" primaryColor="var(--primary)" />
                    <div>
                      <strong>{feature.title}</strong>
                      <p>{feature.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-large home-cta">
          <div className="section-inner">
            <h2 className="headline-title">¿Listo para Elevar sus Operaciones?</h2>
            <p className="body-large">
               Únase a las principales firmas de energía, construcción y agricultura que utilizan PIXL 360 para
               inteligencia aérea de misión crítica.
            </p>
            <div className="cta-actions">
              <a className="primary-button" href={whatsappQuoteUrl} rel="noopener noreferrer" target="_blank">
                Programar una Consulta
              </a>
              <a className="secondary-button" href="#">
                Descargar PDF de Capacidades
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
