---
title: "Vinoteca"
description: "E-commerce full stack para una vinoteca en línea: catálogo de vinos y cervezas, JWT con roles, cesta, pedidos y panel de administración. Proyecto M0612 (DAW)."
date: 2025-10-15
role: "Full Stack Developer"
company: "Proyecto académico · M0612"
tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Tailwind CSS", "Cloudinary", "Vercel"]
links:
  demo: "https://m0612-vinoteca-front-frank.vercel.app/"
  github: "https://github.com/Frank20060/M0612-DAW2/tree/main/vinoteca"
featured: true
cover: "/covers/vinoteca.png"
coverFit: "cover"
coverBg: "#0a0506"
---

## Resumen

**Vinoteca** es una aplicación web **full stack** para gestionar una vinoteca en línea: catálogo público de vinos y cervezas artesanales, registro e inicio de sesión con **JWT**, cesta de compra, confirmación de pedidos y **panel de administración** con roles.

Proyecto del módulo **M0612 — Desarrollo web en entorno cliente** (DAW), con arquitectura desacoplada: **API REST** (Node.js + Express) y **cliente SPA** (React + Vite). La demo está en [Vercel](https://m0612-vinoteca-front-frank.vercel.app/) y el código en el [repositorio del curso](https://github.com/Frank20060/M0612-DAW2/tree/main/vinoteca) (monorepo de trabajos de clase).

## El reto

Montar un e-commerce creíble con catálogo filtrable, flujo de compra completo y backoffice para editores y administradores, manteniendo **frontend y backend separados**, subida de imágenes a la nube y notificaciones por correo al confirmar un pedido — todo desplegable en producción.

## Lo que aporté

**Catálogo y experiencia de compra**

- Consulta pública de vinos y cervezas, ficha de producto y filtrado por tipo.
- Cesta persistente en sesión, confirmación de pedido e historial personal.

**Autenticación y roles**

- Registro, login **JWT** (caducidad 7 días), perfil de usuario e imagen de perfil (**Cloudinary**).
- Roles `usuario`, `editor` y `admin` con permisos diferenciados en rutas protegidas.

**Gestión y administración**

- CRUD de productos para editores y administradores.
- Listado de usuarios y asignación de roles (solo admin).
- Correo automático al propietario al crear una comanda (**Nodemailer**).

**Arquitectura**

- API REST con **Express 5**, **MongoDB** y **Mongoose**.
- Cliente **React 18** con **React Router**, **Axios** (interceptors JWT) y **Tailwind CSS**.
- En desarrollo, proxy de Vite de `/api` al backend para evitar CORS; despliegue en **Vercel** (frontend y API).

## Qué demuestra para un equipo

- **Full stack JavaScript**: SPA moderna + API REST documentada con roles y permisos.
- **Integraciones reales**: Cloudinary, SMTP y MongoDB Atlas en un flujo de pedido completo.
- **UI cuidada**: landing con identidad visual de vinoteca (tipografía serif, paleta burdeos y dorado).

## Míralo en 2 minutos

1. Abre la [demo](https://m0612-vinoteca-front-frank.vercel.app/): hero, catálogo y registro.
2. Explora el catálogo, añade productos a la cesta e inicia sesión para completar un pedido.
3. Revisa el [código en GitHub](https://github.com/Frank20060/M0612-DAW2/tree/main/vinoteca): estructura `back/` + `vinoteca-frontend/`, variables de entorno y README con la API REST.

## Stack

React 18 · Vite · Node.js · Express 5 · MongoDB · Mongoose · JWT · Tailwind CSS · Axios · Cloudinary · Nodemailer · Vercel
