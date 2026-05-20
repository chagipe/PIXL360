"use client";

import { FormEvent, useState } from "react";
import { contactEmail, contactPhone, whatsappPhone, whatsappQuoteUrl } from "@/config/site";

const serviceOptions = [
  "Cinematografía aérea",
  "Fotografía inmobiliaria",
  "Inspección de infraestructura",
  "Topografía y mapeo",
  "Agricultura de precisión",
  "Otro servicio"
];

export function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(serviceOptions[0]);
  const [details, setDetails] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Hola, quiero solicitar una cotización para un servicio profesional de drones.",
      "",
      `Nombre: ${name || "No indicado"}`,
      `Teléfono: ${phone || "No indicado"}`,
      `Servicio: ${service}`,
      `Detalle: ${details || "Quiero recibir más información."}`
    ].join("\n");

    window.open(`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="contact-section" id="contacto">
      <div className="section-inner contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">Contacto Directo</span>
          <h2 className="headline-title">Cuéntanos qué necesitas grabar, inspeccionar o mapear.</h2>
          <p className="body-large">
            Completa estos datos y abriremos WhatsApp con el mensaje listo. Si prefieres ir directo, también puedes
            escribirnos sin llenar el formulario.
          </p>
          <div className="contact-info">
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <a href={`tel:${contactPhone.replace(/\s/g, "")}`}>{contactPhone}</a>
          </div>
          <a className="secondary-button" href={whatsappQuoteUrl} rel="noopener noreferrer" target="_blank">
            Contactar por WhatsApp
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>Nombre</span>
            <input
              autoComplete="name"
              onChange={(event) => setName(event.target.value)}
              placeholder="Tu nombre"
              type="text"
              value={name}
            />
          </label>
          <label>
            <span>Teléfono</span>
            <input
              autoComplete="tel"
              onChange={(event) => setPhone(event.target.value)}
              placeholder="+51 999 999 999"
              type="tel"
              value={phone}
            />
          </label>
          <label>
            <span>Servicio</span>
            <select onChange={(event) => setService(event.target.value)} value={service}>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Detalle del proyecto</span>
            <textarea
              onChange={(event) => setDetails(event.target.value)}
              placeholder="Ubicación, fecha tentativa, tipo de proyecto o idea general."
              rows={4}
              value={details}
            />
          </label>
          <button className="primary-button" type="submit">
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

