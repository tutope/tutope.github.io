-- ============================================================
-- Plata del Mes · base de datos
-- Pega TODO esto en Supabase → SQL Editor → Run
-- ============================================================

create table if not exists public.presupuestos (
  user_id     uuid primary key references auth.users(id) on delete cascade,
  data        jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now()
);

alter table public.presupuestos enable row level security;

-- Cada persona solo puede ver y tocar SU propia fila.
drop policy if exists "leer lo propio"       on public.presupuestos;
drop policy if exists "crear lo propio"      on public.presupuestos;
drop policy if exists "actualizar lo propio" on public.presupuestos;

create policy "leer lo propio"
  on public.presupuestos for select
  using (auth.uid() = user_id);

create policy "crear lo propio"
  on public.presupuestos for insert
  with check (auth.uid() = user_id);

create policy "actualizar lo propio"
  on public.presupuestos for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
