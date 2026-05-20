---
title: "Portal de aprendizaje Shopify"
description: "Plataforma de cursos y rutas guiadas para aprender Shopify (temas, Liquid, apps). Proyecto académico frontend con React."
date: 2025-01-20
role: "Frontend Developer"
company: "Proyecto académico · Demo"
tech: ["React", "TypeScript", "React Router", "Tailwind CSS", "JSON Server", "Vite"]
links:
  demo: "https://shopify-learning-portal.vercel.app"
  github: "https://github.com/Frank20060/shopify-learning-portal"
featured: true
---

## Contexto

Proyecto **académico de demostración** inspirado en plataformas tipo LMS, orientado a quien empieza con **Shopify**: temas, Liquid, configuración de tienda y nociones de ecosistema de apps. No está afiliado a Shopify Inc.; usa contenido educativo propio y enlaces a documentación oficial.

## Problema

Quien aprende Shopify suele dispersarse entre documentación, vídeos y pruebas en tiendas de desarrollo sin una **ruta ordenada** ni seguimiento del progreso. Hacía falta un portal que agrupe módulos, ejercicios cortos y estado de avance en una sola interfaz clara.

## Solución

Single Page Application con:

- **Dashboard** de progreso por módulo (Introducción, Temas, Liquid, Apps y APIs).
- **Lecciones** en formato markdown renderizado con ejemplos de código Liquid resaltados.
- **Quiz rápidos** al final de cada bloque (corrección en cliente con feedback accesible).
- **Marcadores** de lección completada persistidos en `localStorage` (demo sin backend de usuarios).

API mock con **JSON Server** para listar cursos, lecciones y recursos enlazados.

## Arquitectura

```text
Navegador → React (Vite) + React Router
         → Tailwind CSS (layout responsive)
         → JSON Server (REST mock en desarrollo)
         → localStorage (progreso del alumno en demo)
         → Build estático desplegado en Vercel
```

En producción demo, los datos de cursos se empaquetan como JSON estático; JSON Server se usa en local para simular un backend realista durante el desarrollo.

## Decisiones relevantes

| Decisión | Motivo |
| -------- | ------ |
| **React + Vite** | Encaje con el módulo M0612 y arranque rápido sin SSR obligatorio. |
| **JSON Server** | Practicar consumo REST y desacoplar UI de datos sin montar un backend completo. |
| **Progreso en localStorage** | Suficiente para la demo; un siguiente paso sería auth y API real. |
| **Enfoque Shopify** | Demuestra interés en e-commerce y temas, sector donde muchas PYME buscan perfiles web. |

## Calidad

- Componentes reutilizables (`CourseCard`, `LessonLayout`, `ProgressBar`).
- Rutas protegidas por layout con breadcrumbs y título de página coherente.
- Pruebas manuales de checklist: navegación por teclado, contraste en bloques de código y lectura en móvil.

## Seguridad básica

- Sin credenciales de tiendas Shopify reales en el repositorio.
- Enlaces externos a documentación con `rel="noopener noreferrer"`.
- Sin API keys en el frontend; la demo no llama a la Admin API de Shopify.

## Despliegue

- **Demo:** build estático en Vercel.
- **Local:** `npm run dev` (frontend) + `npm run api` (JSON Server en otro puerto), documentado en el README.

## Resultado

Recorrido guiado de principiante a intermedio en conceptos Shopify, con UI legible, progreso visible y contenido reproducible clonando el repositorio.

## Limitaciones (honestidad)

- Contenido **educativo propio**, no certificación oficial Shopify.
- Progreso no sincronizado entre dispositivos (solo `localStorage`).
- Integración con tienda real de desarrollo descrita en README como ejercicio opcional, no automatizada en la demo.
