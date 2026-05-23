---
title: "M-Automoción · Backend y automatización"
description: "Backend con Python y Django, APIs REST, PostgreSQL y flujos de automatización (RPA). Incluye el diseño de un ecosistema de autenticación centralizada (SSO Microsoft) e integraciones con el ERP Quiter."
date: 2026-03-01
role: "Desarrollador Backend & Automatización"
company: "M-Automoción · Experiencia profesional"
tech: ["Python", "Django", "Django REST Framework", "PostgreSQL", "SQL", "Microsoft Graph API", "Selenium", "Linux", "Docker"]
featured: true
cover: "/covers/m-automocion.png"
coverFit: "contain"
coverBg: "#0f172a"
---

## Resumen

En el departamento de TI de **M-Automoción** trabajé en el núcleo del backend y en la automatización de procesos de negocio (**BPA/RPA**): desarrollo de scripts en **Python**, APIs REST con **Django**, consultas y modelado en **PostgreSQL**, y flujos críticos que conectan el ERP **Quiter** con herramientas web y servicios de identidad de **Microsoft** del grupo.

Es trabajo **interno y en producción** (sin demo pública por confidencialidad): integraciones y automatizaciones que el equipo de operaciones y administración usa a diario.

## El reto

Un grupo con decenas de concesionarios acumula datos e identidades repartidos entre portales web, informes y un ERP cerrado como **Quiter**. El desafío consistía en unificar flujos logísticos y administrativos, reducir tareas manuales repetitivas (logins, descargas, validación de datos), mantener consistencia y rendimiento en **PostgreSQL** y asegurar que el acceso a las nuevas aplicaciones web fuera unificado, seguro y centralizado para todos los empleados del grupo.

## Lo que aporté

**Automatización y Procesos (RPA)**
- Scripts en Python para **sincronizar y extraer datos logísticos** desde el entorno del ERP Quiter.
- Bots que **monitorizan directorios**, validan datos de negocio antes de persistirlos y encadenan pasos repetitivos.

**APIs y backend (Django)**
- Endpoints **REST con Django y DRF** como puente entre frontends internos y microservicios.
- Validadores en serializadores para que cada payload cumpla las **reglas de negocio** del grupo.
- **Ecosistema de Autenticación Unificada (SSO Microsoft):** Diseñé e implementé el flujo de login centralizado conectando el servidor de comunicaciones de la empresa con múltiples frontends independientes (React). Desarrollé un sistema seguro de intercambio de tokens temporales de un solo uso gestionados en caché para mitigar problemas de concurrencia y mitigar ataques de repetición.

**Base de datos**
- Optimización de consultas en **PostgreSQL** vía ORM (`select_related`, `prefetch_related`, agregaciones) para acelerar paneles de reporte.
- Modelado de históricos logísticos y operativos sin degradar tiempos de respuesta en producción.

**Entorno y despliegue**
- Scripts **bash** y contenedores **Docker** para levantar servicios en **Linux**.
- Flujo con **Git** y revisiones de código antes de integrar cambios en automatizaciones y backend.

## Qué demuestra para un equipo

- **Automatización con impacto real**: Python aplicado a ERPs, portales corporativos y flujos desatendidos, no solo CRUD web básicos.
- **Arquitectura e Integración**: Capacidad para conectar sistemas externos complejos (Microsoft Azure/Entra ID) y coordinar la seguridad de múltiples aplicaciones front-end desde un único backend.
- **Backend sólido**: Django, DRF y PostgreSQL optimizado para cargas de reporte y datos operativos.
- **Cercanía al negocio**: traducir necesidades de logística, seguridad y administración en software fiable y mantenible.

## Stack

Python · Django · Django REST Framework · PostgreSQL · SQL · Microsoft Graph / Entra ID · Selenium · Docker · Linux · Git