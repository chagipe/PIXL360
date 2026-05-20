import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";

export const metadata: Metadata = {
  title: "Política de Privacidad | PIXL 360",
};

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <div className="page-container">
          <h1>Política de Privacidad</h1>
          <p className="last-updated">Última actualización: 20 de mayo de 2026</p>

          <p>
            En PIXL 360, nos tomamos muy en serio la privacidad de nuestros usuarios y clientes.
            Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos
            tu información personal cuando utilizas nuestros servicios, visitas nuestro sitio web o
            te comunicas con nosotros.
          </p>

          <h2>1. Información que recopilamos</h2>
          <p>
            Podemos recopilar la siguiente información cuando utilizas nuestros servicios:
          </p>
          <ul>
            <li><strong>Datos de contacto:</strong> nombre, correo electrónico, número de teléfono y dirección.</li>
            <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas y duración de la visita.</li>
            <li><strong>Datos del servicio:</strong> imágenes, videos, coordenadas y metadatos relacionados con las operaciones de drone que realizamos para ti.</li>
            <li><strong>Comunicaciones:</strong> cualquier mensaje que nos envíes a través de formularios de contacto, correo electrónico o redes sociales.</li>
          </ul>

          <h2>2. Cómo usamos tu información</h2>
          <p>Utilizamos la información recopilada para los siguientes fines:</p>
          <ul>
            <li>Prestar y mejorar nuestros servicios de filmación aérea, inspección, mapeo y análisis.</li>
            <li>Comunicarnos contigo sobre tu solicitud, cotización o proyecto.</li>
            <li>Enviar información promocional solo si has dado tu consentimiento explícito.</li>
            <li>Cumplir con obligaciones legales y regulatorias aplicables.</li>
            <li>Mejorar la experiencia de navegación en nuestro sitio web.</li>
          </ul>

          <h2>3. Almacenamiento y seguridad</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas para proteger tu información
            contra acceso no autorizado, pérdida, alteración o divulgación. Tus datos se almacenan
            en servidores seguros y solo están accesibles para personal autorizado.
          </p>

          <h2>4. Compartición de datos</h2>
          <p>
            No vendemos tu información personal a terceros. Podemos compartir datos limitados con:
          </p>
          <ul>
            <li>Proveedores de servicios que nos ayudan a operar (hosting, plataformas de pago, herramientas de análisis).</li>
            <li>Autoridades gubernamentales cuando sea requerido por ley.</li>
          </ul>

          <h2>5. Retención de datos</h2>
          <p>
            Conservamos tu información personal solo durante el tiempo necesario para cumplir con los
            fines descritos en esta política, a menos que la ley exija un período de retención más largo.
            Los datos de operaciones (imágenes, videos, metadata) se retienen de acuerdo con los
            términos acordados en cada proyecto.
          </p>

          <h2>6. Tus derechos</h2>
          <p>De acuerdo con la legislación aplicable, tienes derecho a:</p>
          <ul>
            <li>Acceder a tu información personal.</li>
            <li>Solicitar la corrección de datos inexactos.</li>
            <li>Solicitar la eliminación de tus datos.</li>
            <li>Oponerte al procesamiento de tus datos.</li>
            <li>Solicitar la portabilidad de tus datos.</li>
          </ul>
          <p>
            Para ejercer cualquiera de estos derechos, contáctanos a través de nuestro formulario
            de contacto o enviando un correo a sebastianbegazo@hotmail.com o llamando al +51 994 248 626.
          </p>

          <h2>7. Cambios a esta política</h2>
          <p>
            Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos sobre
            cambios significativos a través de nuestro sitio web o por correo electrónico.
          </p>

          <h2>8. Contacto</h2>
          <p>
            Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos al
            correo sebastianbegazo@hotmail.com o al teléfono +51 994 248 626.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
