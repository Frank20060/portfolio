# Portfolio — Frank Villar

[![Sitio en vivo](https://img.shields.io/badge/demo-frank--villar--redondo.vercel.app-amber?style=for-the-badge)](https://frank-villar-redondo.vercel.app/)
[![Astro](https://img.shields.io/badge/Astro-6-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

Portfolio personal desarrollado como **Proyecto 4 — IA8** del módulo **M0615 (Disseny d'interfícies web)**. Presenta mi perfil como desarrollador backend y automatización, con proyectos destacados, experiencia y contacto directo.

**En vivo:** [https://frank-villar-redondo.vercel.app/](https://frank-villar-redondo.vercel.app/)

---

## Sobre el proyecto

Sitio estático, rápido y accesible, pensado para reclutadores y para la entrega académica ([enunciado IA8](https://astrodaw.vercel.app/moduls/daw2/m0615/instruments/ia8/)). El contenido de proyectos vive en **Markdown** (Content Collections) y cada ficha tiene su página de detalle.

### Secciones

- **Inicio** — propuesta de valor, stack y CTAs (contacto, GitHub)
- **Proyectos** — fichas con portada, stack y enlace a detalle
- **Experiencia** — timeline laboral
- **Formación** — estudios y certificaciones
- **Contacto** — Gmail y LinkedIn

---

## Stack

| Capa | Tecnología |
|------|------------|
| Framework | [Astro](https://astro.build) 6 |
| Estilos | [Tailwind CSS](https://tailwindcss.com) 4 + Typography |
| Contenido | Content Collections (Markdown) |
| Tipografías | Inter, JetBrains Mono |
| Deploy | [Vercel](https://vercel.com) |

---

## Estructura del repositorio

```text
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/          # Imágenes optimizadas con astro:assets
│   ├── components/      # Cards, foto de perfil, animaciones…
│   ├── content/projects/  # Fichas .md de cada proyecto
│   ├── layouts/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   └── projects/[...slug].astro
│   └── styles/global.css
├── astro.config.mjs
└── package.json
```

---

## Requisitos

- **Node.js** ≥ 22.12.0 (ver `engines` en `package.json`)

---

## Instalación y uso

```bash
git clone https://github.com/Frank20060/portfolio.git
cd portfolio
npm install
```

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo en `http://localhost:4321` |
| `npm run build` | Build de producción en `./dist/` |
| `npm run preview` | Previsualizar el build localmente |

---

## Despliegue

El sitio está desplegado en **Vercel** desde el repositorio de GitHub:

1. Conectar el repo en Vercel
2. Framework preset: **Astro**
3. Build: `npm run build` · Output: `dist`

Tras cada push a la rama principal, Vercel publica en la URL de producción.

---

## Proyectos destacados (en el sitio)

| Proyecto | Tipo |
|----------|------|
| Backend M-Automoción | Trabajo / interno |
| Vinoteca Online | Demo personal |
| Portal de aprendizaje Shopify | Demo académica |

Añadir o editar proyectos en `src/content/projects/*.md`.

---

## Autor y enlaces

**Frank Villar Redondo**

- Portfolio: [frank-villar-redondo.vercel.app](https://frank-villar-redondo.vercel.app/)
- GitHub: [@Frank20060](https://github.com/Frank20060)
- LinkedIn: [frank-villar-redondo](https://www.linkedin.com/in/frank-villar-redondo/)
- Email: [frankvillarredondo@gmail.com](mailto:frankvillarredondo@gmail.com)

---

## IA y fuentes

Parte del diseño, contenido de fichas de ejemplo y refactors se han elaborado con asistencia de **IA** (Cursor). El código se ha revisado manualmente antes de publicar. Referencias del módulo: [S14 — Ocupabilitat i portfolio](https://astrodaw.vercel.app/moduls/daw2/m0615/sessions/s14-ocupabilitat-i-portfolio/), [S21 — README projectes](https://astrodaw.vercel.app/moduls/daw2/m0616/sessions/s21-readme-projectes-portfolio/).

---

## Licencia

Proyecto académico y portfolio personal. Código disponible para consulta en este repositorio.
