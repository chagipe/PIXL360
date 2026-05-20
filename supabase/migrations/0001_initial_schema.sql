create extension if not exists pgcrypto;

create type public.service_type as enum (
  'aerial_video',
  'aerial_photo',
  'fpv_tour',
  'mapping',
  'inspection',
  'editing_package'
);

create type public.project_type as enum (
  'real_estate',
  'construction',
  'corporate',
  'tourism',
  'event',
  'inspection',
  'other'
);

create type public.request_status as enum (
  'new',
  'qualified',
  'quoted',
  'scheduled',
  'won',
  'lost'
);

create table public.service_catalog (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text not null,
  active boolean not null default true,
  sort_order integer not null default 0
);

create table public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  company text,
  service_type public.service_type not null,
  project_type public.project_type not null,
  location text not null,
  shoot_date date,
  budget_range text,
  message text,
  status public.request_status not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  company text,
  message text not null,
  source text,
  created_at timestamptz not null default now()
);

create index quote_requests_created_at_idx on public.quote_requests (created_at desc);
create index quote_requests_status_idx on public.quote_requests (status);
create index quote_requests_service_type_idx on public.quote_requests (service_type);
create index contact_messages_created_at_idx on public.contact_messages (created_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger quote_requests_set_updated_at
before update on public.quote_requests
for each row
execute function public.set_updated_at();

alter table public.service_catalog enable row level security;
alter table public.quote_requests enable row level security;
alter table public.contact_messages enable row level security;

create policy "Public can read active services"
on public.service_catalog
for select
using (active = true);

create policy "Public can create quote requests"
on public.quote_requests
for insert
with check (true);

create policy "Public can create contact messages"
on public.contact_messages
for insert
with check (true);

insert into public.service_catalog (slug, name, description, sort_order)
values
  ('aerial-video', 'Video aereo cinematografico', 'Filmacion profesional para proyectos inmobiliarios, corporativos, turisticos y eventos.', 10),
  ('aerial-photo', 'Fotografia aerea', 'Fotografia de alta resolucion para propiedades, avances de obra y material comercial.', 20),
  ('fpv-tour', 'Recorridos FPV', 'Tomas dinamicas de interiores y exteriores para mostrar espacios con energia y continuidad.', 30),
  ('mapping', 'Mapeo y seguimiento de obra', 'Captura recurrente para documentar avance, comparar estados y respaldar reportes.', 40),
  ('inspection', 'Inspeccion visual', 'Revision aerea de cubiertas, fachadas, terrenos o zonas de acceso complejo.', 50),
  ('editing-package', 'Edicion y entrega final', 'Postproduccion, color, musica, versiones para redes y entregables comerciales.', 60);

