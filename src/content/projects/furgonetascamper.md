---
title: "FurgoCamper"
description: "Landing y aplicación full stack para alquiler de furgonetas camper: catálogo dinámico, auth con roles, comentarios anidados y panel de administración. Proyecto IA6 (DAW2)."
date: 2025-12-01
role: "Full Stack Developer"
company: "Proyecto académico · IA6"
tech: ["Next.js", "React", "PostgreSQL", "Prisma", "Auth.js", "Tailwind CSS", "Docker"]
links:
  demo: "https://furgonetascamper.onrender.com/"
  github: "https://github.com/Frank20060/furgonetascamper"
featured: true
cover: "/covers/furgonetascamper.png"
coverFit: "cover"
coverBg: "#1a3d2e"
---

## Resumen

**FurgoCamper** es una landing corporativa y aplicación web para una empresa ficticia de **alquiler de furgonetas camper**, desarrollada en el marco de la evaluación **IA6** del ciclo DAW. Combina presentación pública de la flota, interacción social (comentarios) y un **panel de administración** con control de acceso por roles.

La demo está desplegada en [Render](https://furgonetascamper.onrender.com/) y el código en [GitHub](https://github.com/Frank20060/furgonetascamper), con README orientado a reproducir el proyecto en local (Docker, Prisma, seed y credenciales de prueba).

## El reto

Simular un producto real de una pyme del sector camper: catálogo actualizable desde base de datos, captación de leads por formulario de contacto, comunidad con comentarios (lectura pública, escritura autenticada) y backoffice para gestionar flota y usuarios — todo con **buenas prácticas de Next.js**, validación en cliente y servidor, y seguridad en rutas protegidas.

## Lo que aporté

**Parte pública**

- Landing con propuesta de valor, listado de campers destacadas consumidas desde **PostgreSQL**.
- Catálogo completo y fichas de vehículo.
- **Comentarios anidados** (respuestas en hilo) visibles para todos; publicación solo con sesión iniciada.
- Formulario de **contacto** con validación y persistencia de leads.

**Autenticación y roles**

- **Auth.js v5** con contraseñas hasheadas (bcrypt).
- Roles `USER`, `EDITOR` y `ADMIN` con permisos diferenciados.
- Protección de rutas mediante `proxy.js` y middleware del App Router.

**Panel de administración**

- CRUD de furgonetas, incluyendo **subida de imágenes**.
- Gestión de usuarios (solo administrador).
- Operaciones restringidas según rol.

**Infraestructura y calidad**

- **Prisma** como ORM; base de datos en **Neon** en producción y Docker en local.
- `docker compose` para PostgreSQL en desarrollo.
- Registro de uso de IA en `historial_prompts.md` y evidencia de sprints en el historial de commits.

## Qué demuestra para un equipo

- **Full stack moderno**: Next.js 16 (App Router), React, Tailwind CSS v4 y API/server actions con persistencia real.
- **Modelado y seguridad**: esquema relacional, auth, roles y validación en capas.
- **Entrega académica profesional**: README reproducible, demo en vivo y documentación de IA según el enunciado.

## Míralo en 2 minutos

1. Recorre la [demo](https://furgonetascamper.onrender.com/): landing, catálogo y comentarios públicos.
2. Inicia sesión con las credenciales del README (p. ej. `admin@demo.local` / `demo1234`) y entra al panel.
3. Revisa el [repositorio](https://github.com/Frank20060/furgonetascamper): instalación con Docker, migraciones Prisma y apartado de IA.

## Stack

Next.js 16 · React · PostgreSQL · Prisma · Auth.js · Tailwind CSS v4 · Docker · bcrypt · Render
