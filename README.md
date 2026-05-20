# Hiroshi Dron

Backend y estructura full stack para una aplicacion web de servicios profesionales de drones.

## Stack elegido

- Next.js App Router como base full stack.
- API routes para el backend HTTP.
- Supabase/PostgreSQL como base de datos.
- Zod para validacion de payloads.
- TypeScript estricto.

## Estructura

```txt
src/
  app/
    api/
      contact/route.ts
      quotes/route.ts
      services/route.ts
  lib/
    env.ts
    http.ts
    supabase/server.ts
  server/
    repositories/
    schemas/
    services/
  types/
supabase/
  migrations/
```

## Endpoints iniciales

- `GET /api/services`: lista servicios activos del catalogo.
- `POST /api/quotes`: crea una solicitud de cotizacion.
- `POST /api/contact`: guarda un mensaje de contacto.

Ejemplo para `POST /api/quotes`:

```json
{
  "fullName": "Ana Ramirez",
  "email": "ana@example.com",
  "phone": "+57 300 123 4567",
  "company": "Inmobiliaria Norte",
  "serviceType": "aerial_video",
  "projectType": "real_estate",
  "location": "Bogota, Colombia",
  "shootDate": "2026-06-15",
  "budgetRange": "2M-4M COP",
  "message": "Necesitamos video para una propiedad campestre."
}
```

## Configuracion local

1. Instala dependencias:

```bash
npm install
```

2. Copia `.env.example` a `.env.local` y completa las credenciales de Supabase.

3. Ejecuta la migracion `supabase/migrations/0001_initial_schema.sql` en Supabase.

4. Levanta el servidor:

```bash
npm run dev
```

## Siguiente crecimiento recomendado

- Panel admin protegido para gestionar leads, estados y agenda.
- Autenticacion con Supabase Auth para operadores internos.
- Integracion de email o CRM al recibir cotizaciones.
- Storage de Supabase para subir referencias, brief y entregables.
- Tablas de proyectos, clientes, paquetes, disponibilidad y facturacion.

