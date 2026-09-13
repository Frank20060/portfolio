---
title: "Grand Motors"
description: "Plataforma full stack para publicar y gestionar vehículos de ocasión, con catálogo público, panel privado, API JSON y almacenamiento de imágenes en Cloudinary."
date: 2026-09-01
role: "Full Stack Developer"
company: "Proyecto personal · Producto completo"
tech: ["Next.js 16", "React 19", "Django 5", "PostgreSQL", "Cloudinary", "Docker", "Vercel", "Render"]
links:
  demo: "https://grandmotors.vercel.app/"
  github: "https://github.com/Frank20060/proyecto-concesionario/tree/main"
featured: true
cover: "/covers/grand-motors.svg"
coverFit: "contain"
coverBg: "#1d1f22"
---

## Resumen

**Grand Motors** es una plataforma full stack para la publicación y gestión de vehículos de ocasión. El proyecto separa una experiencia pública de catálogo, pensada para SEO y conversión, de un panel privado desde el que un concesionario puede mantener su inventario real.

El frontend público está construido con **Next.js 16** y consume una API JSON propia desarrollada con **Django 5**. La solución incluye persistencia en PostgreSQL, galerías de imágenes optimizadas con Cloudinary y despliegue independiente en Vercel y Render.

## El reto

Convertir la operativa de un concesionario en un producto web completo: catálogo filtrable, fichas de vehículo, estados de disponibilidad, gestión de imágenes y una administración segura. Además de funcionar, la aplicación debía ser rápida, indexable y reproducible en local.

## Lo que aporté

**Experiencia pública**

- Catálogo de vehículos disponibles y vendidos.
- Filtros por marca, texto y estado.
- Fichas con rutas SEO-friendly, galería responsive y especificaciones técnicas.
- Metadatos dinámicos, Open Graph, Twitter Cards, sitemap, robots y datos estructurados JSON-LD.
- Acciones de contacto y acceso directo a WhatsApp.

**Panel y API**

- Autenticación de Django para el panel privado.
- Alta, edición y eliminación de vehículos.
- Gestión de disponibilidad, precio, kilometraje y descripción.
- Carga múltiple de imágenes y ordenación drag and drop de la galería.
- API JSON pública para desacoplar el catálogo de la gestión interna.

**Imágenes e infraestructura**

- Subidas firmadas a **Cloudinary** desde el backend, sin exponer credenciales privadas al navegador.
- Persistencia de `secure_url` y `public_id`, con eliminación coordinada de assets.
- Fallback local y script idempotente para migrar imágenes históricas.
- Docker Compose para desarrollo y configuración separada para Vercel, Render y PostgreSQL.

## Qué demuestra

- Capacidad para diseñar y entregar un producto full stack de extremo a extremo.
- Separación clara entre presentación, API, lógica de negocio y almacenamiento multimedia.
- Modelado de datos, autenticación, validación y operaciones CRUD en un contexto realista.
- Atención al rendimiento y al SEO sin sacrificar una administración práctica para el negocio.

## Stack

Next.js 16 · React 19 · TypeScript · Django 5 · PostgreSQL · Cloudinary · Docker · Vercel · Render · Gunicorn · WhiteNoise

## Código

El [frontend público](https://grandmotors.vercel.app/) está desplegado en Vercel y el [backend con panel de administración](https://intragrandmotors.onrender.com/) en Render. El proyecto está documentado y disponible en [GitHub](https://github.com/Frank20060/proyecto-concesionario/tree/main), con instrucciones para levantar frontend y backend, variables de entorno, despliegue y migración de imágenes.