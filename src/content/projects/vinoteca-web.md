---
title: "Vinoteca Online"
description: "E-commerce de vinos con catálogo, filtros y panel de gestión. Proyecto demo fullstack con Next.js y PostgreSQL."
date: 2025-03-15
role: "Fullstack Developer"
company: "Proyecto personal · Demo"
tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Zod", "Vercel"]
links:
  demo: "https://vinoteca-demo.vercel.app"
  github: "https://github.com/Frank20060/vinoteca-web"
featured: true
---

## Contexto

Proyecto **personal y de demostración** para practicar un flujo e-commerce real: catálogo de productos, experiencia de compra y backoffice ligero. No es un producto en producción con clientes reales; el objetivo fue demostrar criterio de producto, maquetación y backend en un dominio concreto (vinos y bodegas).

## Problema

Una vinoteca pequeña necesita mostrar su catálogo online, filtrar por tipo de vino, denominación y precio, y gestionar stock y pedidos sin depender solo de redes sociales o hojas de cálculo. El reto de diseño: información rica por producto (maridajes, graduación, origen) sin saturar la interfaz móvil.

## Solución

Aplicación web multipágina con:

- **Catálogo público** con búsqueda, filtros y ficha de producto.
- **Carrito y checkout simulado** (sin pasarela de pago real en la demo).
- **Panel de administración** para CRUD de vinos, categorías y pedidos de prueba.
- **Seed de datos** con bodegas y referencias ficticias pero realistas.

## Arquitectura

```text
Navegador → Next.js (App Router, Server Components + Server Actions)
         → Prisma → PostgreSQL
         → Validación Zod en formularios y mutaciones
         → Despliegue en Vercel
```

- Lecturas públicas optimizadas con consultas paginadas.
- Mutaciones del panel solo tras comprobar rol de administrador (sesión simulada en demo).

## Decisiones relevantes

| Decisión | Motivo |
| -------- | ------ |
| **Next.js + Prisma** | Alineado con stack del ciclo DAW y despliegue sencillo en Vercel. |
| **PostgreSQL** | Relaciones claras entre bodega, categoría y producto. |
| **Tailwind** | Consistencia visual con el resto de mi portfolio y diseño responsive rápido. |
| **Checkout simulado** | Evitar integrar pagos reales en una demo; el foco es UX y modelo de datos. |

## Calidad

- Validación de formularios con **Zod** (tipos compartidos cliente/servidor).
- Estructura de carpetas por dominio (`products`, `orders`, `admin`).
- Scripts `lint` y `build` en CI antes de desplegar.

## Seguridad básica

- Variables en `.env` (nunca en el repositorio); plantilla `.env.example` documentada.
- Rutas de administración protegidas por middleware de sesión.
- Sin datos de tarjetas ni PII real en el seed.

## Despliegue

- **Producción (demo):** Vercel, con base de datos gestionada (Neon / Supabase Postgres).
- Migraciones con `prisma migrate deploy` en el pipeline de despliegue.

## Resultado

Catálogo navegable en móvil y escritorio, panel usable para dar de alta productos en menos de un minuto y flujo de pedido de prueba reproducible en local siguiendo el README del repositorio.

## Limitaciones (honestidad)

- Proyecto **demo**: inventario y pedidos son ficticios.
- Pasarela de pago y envíos no implementados.
- Imágenes de producto con placeholders o assets libres de uso.
