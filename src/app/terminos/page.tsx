import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";

export const metadata: Metadata = {
  title: "Términos de Servicio | PIXL 360",
};

export default function TerminosPage() {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <div className="page-container">
          <h1>Términos de Servicio</h1>
          <p className="last-updated">Última actualización: 20 de mayo de 2026</p>

          <p>
            Al acceder y utilizar los servicios de PIXL 360, aceptas cumplir con los siguientes
            Términos de Servicio. Si no estás de acuerdo con alguno de estos términos, te
            recomendamos no utilizar nuestros servicios.
          </p>

          <h2>1. Descripción de los servicios</h2>
          <p>
            PIXL 360 ofrece servicios profesionales de operación de drones que incluyen, pero no se
            limitan a: filmación aérea, fotografía, inspección de infraestructura, mapeo topográfico,
            monitoreo agrícola y análisis de datos geoespaciales.
          </p>

          <h2>2. Solicitud y cotización</h2>
          <p>
            Los servicios se prestan previa solicitud y aceptación de una cotización. Cada cotización
            incluye el alcance del proyecto, duración, entregables y costo. La aceptación de la
            cotización constituye un acuerdo vinculante entre el cliente y PIXL 360.
          </p>

          <h2>3. Responsabilidades del cliente</h2>
          <ul>
            <li>Proporcionar información precisa y completa sobre el proyecto.</li>
            <li>Garantizar el acceso seguro al lugar de las operaciones.</li>
            <li>Obtener los permisos necesarios para la realización del trabajo.</li>
            <li>Notificar sobre cualquier condición de riesgo o peligro en el área de operación.</li>
          </ul>

          <h2>4. Propiedad intelectual</h2>
          <p>
            Todos los materiales entregados (imágenes, videos, mapas, informes) son propiedad
            intelectual de PIXL 360 hasta que se haya realizado el pago completo de los servicios.
            Una vez pagados, el cliente recibe una licencia de uso para los fines acordados.
            PIXL 360 se reserva el derecho de utilizar muestras del trabajo en su portafolio, salvo
            acuerdo contrario por escrito.
          </p>

          <h2>5. Pagos y facturación</h2>
          <p>
            Los términos de pago se especifican en cada cotización. Los pagos atrasados pueden
            generar cargos adicionales. PIXL 360 se reserva el derecho de suspender los servicios
            en caso de falta de pago.
          </p>

          <h2>6. Cancelaciones y reembolsos</h2>
          <p>
            Las cancelaciones con menos de 48 horas de anticipación pueden estar sujetas a cargos.
            Los reembolsos se evalúan caso por caso y están sujetos al trabajo ya realizado.
          </p>

          <h2>7. Limitación de responsabilidad</h2>
          <p>
            PIXL 360 no se hace responsable por daños indirectos, pérdida de datos o interrupción
            del negocio derivados del uso de nuestros servicios. Nuestra responsabilidad máxima se
            limita al monto total pagado por el servicio en cuestión.
          </p>

          <h2>8. Condiciones climáticas</h2>
          <p>
            Las operaciones con drones están sujetas a condiciones climáticas favorables. PIXL 360
            se reserva el derecho de reprogramar las operaciones si las condiciones no son seguras
            para el vuelo, sin costo adicional para el cliente.
          </p>

          <h2>9. Legislación aplicable</h2>
          <p>
            Estos Términos de Servicio se rigen por las leyes de los Estados Unidos Mexicanos.
            Cualquier disputa será resuelta en los tribunales competentes de la Ciudad de México.
          </p>

          <h2>10. Modificaciones</h2>
          <p>
            PIXL 360 se reserva el derecho de modificar estos términos en cualquier momento. Los
            cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
          </p>

          <h2>11. Contacto</h2>
          <p>
            Para cualquier pregunta sobre estos Términos de Servicio, contáctanos al
            correo sebastianbegazo@hotmail.com o al teléfono +51 994 248 626.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
