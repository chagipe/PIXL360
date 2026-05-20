<div align="center">

<svg width="800" height="200" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="50%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="50%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.15"/>
      <stop offset="50%" stop-color="#8b5cf6" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="800" height="200" fill="url(#bg)" rx="12"/>
  <rect width="800" height="4" fill="url(#accent)"/>
  <rect x="40" y="120" width="720" height="1" fill="url(#glow)"/>
  <g transform="translate(60, 55)" stroke="#3b82f6" stroke-width="2" fill="none">
    <line x1="0" y1="40" x2="120" y2="40"/>
    <line x1="60" y1="10" x2="60" y2="70"/>
    <circle cx="60" cy="40" r="8" stroke="#8b5cf6" stroke-width="2.5"/>
    <ellipse cx="30" cy="20" rx="8" ry="4" transform="rotate(-30 30 20)"/>
    <ellipse cx="90" cy="20" rx="8" ry="4" transform="rotate(30 90 20)"/>
    <ellipse cx="30" cy="60" rx="8" ry="4" transform="rotate(30 30 60)"/>
    <ellipse cx="90" cy="60" rx="8" ry="4" transform="rotate(-30 90 60)"/>
  </g>
  <text x="200" y="80" font-family="'Segoe UI', Arial, sans-serif" font-size="48" font-weight="800" fill="url(#accent)" letter-spacing="4">PIXL360</text>
  <text x="200" y="115" font-family="'Segoe UI', Arial, sans-serif" font-size="16" fill="#94a3b8" letter-spacing="8" font-weight="300">SERVICIOS PROFESIONALES CON DRONES</text>
  <g transform="translate(200, 145)">
    <rect x="0" y="0" width="78" height="24" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1"/>
    <text x="39" y="16" font-family="'Segoe UI', Arial, sans-serif" font-size="11" fill="#3b82f6" text-anchor="middle" font-weight="600">Next.js</text>
    <rect x="88" y="0" width="92" height="24" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1"/>
    <text x="134" y="16" font-family="'Segoe UI', Arial, sans-serif" font-size="11" fill="#8b5cf6" text-anchor="middle" font-weight="600">TypeScript</text>
    <rect x="190" y="0" width="96" height="24" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1"/>
    <text x="238" y="16" font-family="'Segoe UI', Arial, sans-serif" font-size="11" fill="#06b6d4" text-anchor="middle" font-weight="600">Supabase</text>
  </g>
</svg>

</div>

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
