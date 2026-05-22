---
title: "Shopify Mastery"
description: "Plataforma full stack pensada para docentes: subir guías en Markdown, crear retos y que el alumnado complete el recorrido con progreso guardado."
date: 2025-11-01
role: "Full Stack Developer"
company: "Proyecto propio · Demo en producción"
tech: ["PHP", "PostgreSQL", "Docker", "Apache", "RedBeanPHP", "Markdown", "HTML/CSS"]
links:
  demo: "https://shopify-web-0i9q.onrender.com/"
  github: "https://github.com/Frank20060/shopify-web"
featured: true
cover: "/covers/shopify-mastery.png"
coverFit: "contain"
coverBg: "#0d1117"
---

## Resumen

Diseñé **Shopify Mastery** como **herramienta para profesores**: un entorno donde el docente **sube su propia documentación en Markdown**, se renderiza como páginas navegables, **crea retos** (módulos Liquid y Shopify Functions) y el alumnado los **completa con cuenta propia**, con el progreso registrado en base de datos.

No es solo un curso cerrado: es un **mini-LMS autogestionable** — el profesor amplía contenido desde el panel admin sin tocar código ni redeploy. La demo está **en producción** en [Render](https://shopify-web-0i9q.onrender.com/).

## El reto

En clase, repartir PDFs, enlaces y ejercicios sueltos no escala. Quería que un profesor pudiera **montar su ruta de Shopify** en un solo sitio: material teórico en `.md`, prácticas por retos y visibilidad de quién avanza — sin depender de un desarrollador cada vez que cambia un tema o añade un documento.

## Lo que aporté

**Para el profesor (rol admin)**

- **Subir documentación propia** en Markdown desde el panel; cada archivo se convierte en una **página de documentación** lista para leer (tipografía y estilos pensados para contenido largo).
- **Gestionar la biblioteca**: listar, ocultar o eliminar docs; separación entre guías de ejemplo (repo) y **subidas del profesor** (persisten en producción sin pisarse en deploy).
- **Crear y editar retos** — enunciado, nivel, categoría y enlace a guía `.md` si hace falta.
- **Ver usuarios y progreso** del alumnado en un mismo panel.

**Para el alumno**

- Registro e inicio de sesión.
- **Completar retos** de la ruta (Liquid y Functions) desde el hub principal.
- Consultar la **documentación** que el profesor ha publicado.
- Progreso asociado a su usuario (no solo localStorage).

**Bajo el capó**

- PostgreSQL, auth con roles, CSRF y Markdown seguro.
- Docker para desarrollo; despliegue en cloud con `DATABASE_URL` y rutas limpias (`/docs`, `/module/{slug}`, `/admin`).

## Qué demuestra para un equipo

- **Visión de producto educativo**: no solo código de retos, sino flujo **docente → contenido → alumno → seguimiento**.
- **Full stack**: PHP + PostgreSQL + CMS ligero + renderizado de Markdown en servidor.
- **Pensado para mantenimiento real**: el profesor opera la plataforma; yo construí la base técnica para que no necesite programar.

## Míralo en 2 minutos

1. Entra en la demo como alumno: hub de **retos** y sección **Documentación** (páginas generadas desde `.md`).
2. Abre un reto y recorre el flujo de práctica.
3. Con cuenta **admin** (documentada en el repo): sube un `.md`, créalo como página, crea o edita un reto y revisa usuarios/progreso.

## Stack

PHP · Apache · PostgreSQL · RedBeanPHP · Docker · Markdown · CSS (layout + docs renderizados)
