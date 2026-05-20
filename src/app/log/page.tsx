import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";

export const metadata: Metadata = {
  title: "Log de Operaciones | PIXL 360",
};

export default function LogPage() {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <div className="page-container">
          <h1>Log de Operaciones</h1>
          <p className="last-updated">Transparencia y registro de nuestras operaciones</p>

          <p>
            En PIXL 360 mantenemos un registro detallado de todas nuestras operaciones aéreas
            como parte de nuestro compromiso con la seguridad, la legalidad y la transparencia.
            Cada vuelo es documentado conforme a la normativa de la Agencia Federal de Aviación
            Civil (AFAC) y los estándares internacionales de seguridad aérea.
          </p>

          <h2>Información registrada por operación</h2>
          <ul>
            <li><strong>Fecha y hora:</strong> momento exacto del inicio y fin de cada vuelo.</li>
            <li><strong>Ubicación:</strong> coordenadas geográficas del área de operación.</li>
            <li><strong>Equipo utilizado:</strong> modelo y número de serie de la aeronave no tripulada.</li>
            <li><strong>Piloto a cargo:</strong> nombre y matrícula del operador responsable.</li>
            <li><strong>Tipo de operación:</strong> filmación, inspección, mapeo, monitoreo, etc.</li>
            <li><strong>Condiciones climáticas:</strong> viento, visibilidad, temperatura y precipitación.</li>
            <li><strong>Duración:</strong> tiempo total de vuelto en minutos.</li>
            <li><strong>Incidencias:</strong> cualquier evento anómalo durante la operación.</li>
          </ul>

          <h2>Política de acceso a registros</h2>
          <p>
            Los logs de operaciones detallados están disponibles para:
          </p>
          <ul>
            <li>Clientes que hayan contratado servicios específicos (solo datos de sus proyectos).</li>
            <li>Autoridades regulatorias que lo soliciten conforme a la ley.</li>
            <li>Auditorías internas de calidad y seguridad.</li>
          </ul>
          <p>
            Si requieres acceso a los registros de una operación en la que fuiste cliente,
            contáctanos al correo sebastianbegazo@hotmail.com o al teléfono +51 994 248 626
            con los detalles del proyecto.
          </p>

          <h2>Seguridad y custodia</h2>
          <p>
            Los logs de operaciones se almacenan de forma segura con respaldos cifrados y se
            conservan por un mínimo de 5 años conforme a los requisitos de la AFAC. El acceso
            a estos registros está restringido al personal autorizado de PIXL 360.
          </p>

          <h2>Compromiso</h2>
          <p>
            Cada operación que realizamos cumple con los más altos estándares de seguridad y
            legalidad. Este log de operaciones es parte de nuestro compromiso con la excelencia
            operativa y la tranquilidad de nuestros clientes.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
