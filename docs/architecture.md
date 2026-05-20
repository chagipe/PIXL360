# Arquitectura

## Decision principal

La aplicacion usa Next.js como full stack porque permite construir el sitio publico, formularios, panel administrativo y backend en una sola base de codigo. Para este producto conviene evitar un API Express separado hasta que existan necesidades claras de despliegue independiente, workers o integraciones pesadas.

## Capas

- `app/api`: adaptadores HTTP. Parsean JSON y devuelven respuestas normalizadas.
- `server/schemas`: contratos de entrada con Zod.
- `server/services`: casos de uso de negocio.
- `server/repositories`: acceso a Supabase.
- `lib`: utilidades transversales de entorno, errores, HTTP y clientes externos.
- `types`: tipos compartidos.

## Modelo inicial

- `service_catalog`: servicios visibles en la web.
- `quote_requests`: leads de cotizacion con tipo de servicio, tipo de proyecto, ubicacion, fecha tentativa y estado comercial.
- `contact_messages`: mensajes generales que no necesariamente son cotizaciones.

## Seguridad

El backend usa `SUPABASE_SERVICE_ROLE_KEY` solo del lado servidor. Las tablas tienen RLS activo. Las politicas iniciales permiten insercion publica y lectura publica solo del catalogo activo.

Para un panel administrativo se debe agregar Supabase Auth y politicas de lectura/escritura restringidas por rol.

