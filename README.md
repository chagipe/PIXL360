<picture>
  <source media="(prefers-color-scheme: dark)" srcset="/banner.svg">
  <img src="/banner.svg" alt="PIXL360 Banner" width="100%">
</picture>

<p align="center">
  <a href="#-stack"><img src="https://img.shields.io/badge/Stack-Next.js%20%7C%20TypeScript%20%7C%20Supabase-3b82f6?style=for-the-badge&labelColor=0f172a" alt="Stack"></a>
  <a href="#-endpoints"><img src="https://img.shields.io/badge/API-REST-8b5cf6?style=for-the-badge&labelColor=0f172a" alt="API"></a>
  <a href="#-configuracion-local"><img src="https://img.shields.io/badge/Status-Active-06b6d4?style=for-the-badge&labelColor=0f172a" alt="Status"></a>
</p>

---

Backend y estructura full stack para una plataforma de **servicios profesionales con drones**. 🚁

## ✨ Stack

| Tecnología | Uso |
|---|---|
| ⚡ **Next.js** (App Router) | Base full stack |
| 🌐 **API Routes** | Backend HTTP |
| 🗄️ **Supabase / PostgreSQL** | Base de datos |
| ✅ **Zod** | Validación de payloads |
| 🔒 **TypeScript** | Tipado estricto |

## 📁 Estructura

```txt
src/
├── app/
│   └── api/
│       ├── contact/route.ts   # 📩 Mensajes de contacto
│       ├── quotes/route.ts    # 💰 Solicitudes de cotización
│       └── services/route.ts  # 🛠️ Catálogo de servicios
├── lib/
│   ├── env.ts                 # 🔐 Variables de entorno
│   ├── http.ts                # 🌍 Cliente HTTP
│   └── supabase/server.ts     # 🗄️ Cliente Supabase
├── server/
│   ├── repositories/          # 📦 Acceso a datos
│   ├── schemas/               # 📋 Validación con Zod
│   └── services/              # ⚙️ Lógica de negocio
└── types/                     # 🏷️ Tipos compartidos
supabase/
└── migrations/                # 📜 Migraciones SQL
```

## 🌍 Endpoints

| Método | Ruta | Descripción |
|---|---|---|
| `GET` | `/api/services` | 📋 Lista servicios activos del catálogo |
| `POST` | `/api/quotes` | 💰 Crea una solicitud de cotización |
| `POST` | `/api/contact` | 📩 Guarda un mensaje de contacto |

### Ejemplo `POST /api/quotes`

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
  "message": "Necesitamos video aéreo para una propiedad campestre."
}
```

## 🚀 Configuración local

1. **Instala dependencias**

   ```bash
   npm install
   ```

2. **Configura entorno**

   ```bash
   cp .env.example .env.local
   ```
   Completa las credenciales de Supabase.

3. **Ejecuta migraciones**

   Corre `supabase/migrations/0001_initial_schema.sql` en tu proyecto de Supabase.

4. **Inicia el servidor**

   ```bash
   npm run dev
   ```

## 📈 Próximos pasos

- [ ] 🔐 Panel admin protegido (gestionar leads, estados y agenda)
- [ ] 👤 Autenticación con Supabase Auth para operadores
- [ ] 📧 Integración de email / CRM al recibir cotizaciones
- [ ] 🗄️ Supabase Storage para referencias, briefs y entregables
- [ ] 📊 Tablas de proyectos, clientes, paquetes, disponibilidad y facturación

---

<p align="center">
  Hecho con ❤️ por <a href="https://github.com/chagipe">@chagipe</a>
</p>
