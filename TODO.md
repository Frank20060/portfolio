# TODO — Portfolio IA8 (M0615)

Checklist para cumplir el [enunciado IA8](https://astrodaw.vercel.app/moduls/daw2/m0615/instruments/ia8/) y los criterios de [S14](https://astrodaw.vercel.app/moduls/daw2/m0615/sessions/s14-ocupabilitat-i-portfolio/) / [S21](https://astrodaw.vercel.app/moduls/daw2/m0616/sessions/s21-readme-projectes-portfolio/).

**Última revisión:** 20 may 2026 · Repo [`Frank20060/portfolio`](https://github.com/Frank20060/portfolio) · Astro 6 + Tailwind 4.

---

## Progreso general

| Área | Estado |
|------|--------|
| Estructura y diseño | 🟢 Avanzado |
| Enlaces sociales (home) | 🟢 Hecho |
| Proyectos en el sitio (≥3) | 🟢 3 fichas |
| Repos + README S21 | 🔴 Pendiente |
| Publicación (URL estable) | 🔴 Pendiente |
| Accesibilidad IA8 | 🟡 Parcial |
| Coherencia global | 🟡 Parcial |

---

## Lo que ya tienes

- [x] Stack: Astro, HTML semántico, Tailwind, sitio estático.
- [x] Diseño responsive (menú móvil, una página: hero, stack, proyectos, experiencia, formación, contacto).
- [x] Content Collections + páginas de detalle `/projects/[slug]`.
- [x] Estilo visual coherente (oscuro + ámbar).
- [x] `lang="es"`, estructura de headings razonable en la home.
- [x] Historial Git legible en el repo del portfolio.
- [x] **3 proyectos** en `src/content/projects/`:
  - `m-automocion-backend.md` — trabajo / interno
  - `vinoteca-web.md` — demo personal (ficha S14 completa)
  - `shopify-learning-portal.md` — demo académica (ficha S14 completa)
- [x] Enlaces reales en `index.astro`:
  - GitHub → [Frank20060](https://github.com/Frank20060)
  - LinkedIn → [frank-villar-redondo](https://www.linkedin.com/in/frank-villar-redondo/)
  - Email → Gmail compose (`frankvillarredondo@gmail.com`, asunto predefinido)
- [x] `rel="noopener noreferrer"` en enlaces externos del hero y contacto.
- [x] Perfil GitHub existente con README de perfil y bio alineada (backend / DAW) — revisar pins vs portfolio.

---

## Crítico — sin esto no cumples la IA8

### 1. Publicación y entregables

- [ ] **URL pública estable** (Vercel / Netlify / GitHub Pages). Conectar `Frank20060/portfolio` y anotar la URL en el README.
- [ ] Confirmar que el repo del portfolio es **público** y accesible para el profesorado.
- [ ] **README del portfolio** (`README.md`): sustituir plantilla Astro por README profesional (IA8, scripts, URL producción, stack, enlaces a [GitHub](https://github.com/Frank20060), [LinkedIn](https://www.linkedin.com/in/frank-villar-redondo/), portfolio en vivo).

### 2. Proyectos — contenido y honestidad

**En el sitio:** 3 proyectos ✅ · **Repos y demos reales:** pendiente.

| Proyecto | Ficha S14 en portfolio | Demo / repo |
|----------|------------------------|-------------|
| Vinoteca Online | ✅ | ⚠️ URLs de ejemplo; crear repo o quitar enlaces |
| Portal Shopify | ✅ | ⚠️ Igual |
| M-Automoción | ⚠️ Básica | 🔴 `example.com` + `tuusuario/tu-repo` |

Tareas:

- [ ] **`m-automocion-backend.md`**: eliminar `example.com` y `tuusuario/tu-repo`. Si no hay repo público, quitar `links` y documentar trabajo interno / sin código público.
- [ ] **Vinoteca y Shopify**: crear repos públicos (`Frank20060/vinoteca-web`, `Frank20060/shopify-learning-portal`) **o** quitar `demo`/`github` hasta que existan (evitar demos muertas).
- [ ] Desplegar demos reales en Vercel **o** indicar en ficha que son proyectos de portfolio sin demo pública aún.
- [ ] Opcional S14: sustituir demos ficticias por proyectos reales del ciclo (M0612 React, M0613 API/SaaS, M0616…) cuando tengas repo + README.

### 3. Repositorios GitHub + README S21

Para **cada** proyecto que enlace a GitHub desde el portfolio:

- [ ] Repo público bajo [Frank20060](https://github.com/Frank20060).
- [ ] `README.md` en la raíz alineado con la ficha (problema, stack, demo, instalación local).
- [ ] Estructura S21: resumen, demo/capturas, reproducción local, `.env.example` si aplica, sin secretos, apartado **IA y fuentes** si usaste IA.
- [ ] Commits con historia creíble (no repo vacío de un solo commit si la ficha promete producto acabado).

### 4. Perfil GitHub (S14 §2.3)

- [x] Cuenta y README de perfil ([Frank20060](https://github.com/Frank20060)).
- [ ] **Pinear** repos que coincidan con el portfolio (p. ej. `portfolio`, vinoteca, shopify, M0612/M0615 cuando existan).
- [ ] Revisar que ningún repo enlazado tenga `.env` ni secretos commiteados.

---

## Estructura y mensaje (criterio S14)

### Secciones mínimas del enunciado

| Sección IA8 / S14 | Estado | Acción |
|-------------------|--------|--------|
| **Inicio** | 🟡 | Refinar hero: perfil **DAW**, dónde ver pruebas (proyectos, GitHub). |
| **Proyectos** | 🟢 | 3 fichas; cerrar enlaces y repos. |
| **Sobre mí** | 🔴 | Añadir `#sobre-mi` + nav (narrativa, objetivo profesional). Hoy: experiencia + formación sin sección dedicada. |
| **Contacto** | 🟢 | Gmail + LinkedIn. Opcional: formulario con labels. |

### Navegación

- [ ] Enlace **Sobre mí** en el nav.
- [ ] Logo `<frank />`: `href="/"` o `#inicio` con `id` en el hero (ahora `href="#"`).
- [ ] `rel="noopener noreferrer"` en **todas** las páginas con `target="_blank"` (p. ej. `projects/[...slug].astro`).

### Coherencia global

- [ ] Portfolio ↔ GitHub ↔ README: mismo stack y madurez.
- [ ] Sin `example.com` ni repos inventados.
- [ ] Proyectos demo/académicos etiquetados igual en portfolio y README.

---

## Accesibilidad (M0615 / S13) — mantener el estilo

### Semántica y navegación

- [ ] Skip link “Saltar al contenido principal”.
- [ ] `<nav aria-label="Principal">`.
- [ ] Menú móvil: `aria-label`, `aria-expanded`, `aria-controls`; cerrar con **Escape** y devolver foco.
- [ ] Revisar `<h1>` en página de proyecto (contraste del título con gradiente).

### Focus y teclado

- [ ] Estilos **`focus-visible`** globales (anillo ámbar).
- [ ] Foco visible en cards de proyecto (`<a>` completas).

### Contraste y contenido

- [ ] Auditoría contraste WCAG AA (`slate-400` sobre `neutral-950`, botones ámbar).
- [ ] Emoji “Disponible…”: `aria-hidden="true"` en el icono.
- [ ] **`frank-villar.png`**: referenciada en `index.astro` pero **no está en `public/`** — subir imagen o usar `astro:assets` / `<Image />`.

### Otros

- [ ] `prefers-reduced-motion` para animaciones (`translate`, `scale`, glow).
- [ ] Página **`404.astro`**.
- [ ] Meta description personalizada en `Layout.astro`.

---

## Usabilidad y rendimiento

- [ ] Foto en `public/` (o asset optimizado).
- [ ] Campo `cover` en cards de proyecto.
- [ ] Open Graph / Twitter cards (LinkedIn al compartir).
- [ ] Favicon personal (opcional).
- [ ] Prueba en móvil real (menú, fichas largas, área táctil ≥44px).

---

## README del propio portfolio

- [ ] Sustituir plantilla Astro por README con:
  - Descripción IA8
  - `npm install` / `dev` / `build` / `preview`
  - URL de producción
  - Stack (Astro, Tailwind)
  - [GitHub](https://github.com/Frank20060) · [LinkedIn](https://www.linkedin.com/in/frank-villar-redondo/) · email
  - Uso de IA (Cursor, etc.) si aplica

---

## Inventario de proyectos

| Slug | Tipo | En portfolio | Repo GitHub | Demo |
|------|------|--------------|-------------|------|
| `m-automocion-backend` | Trabajo | ✅ | 🔴 placeholder | 🔴 `example.com` |
| `vinoteca-web` | Demo personal | ✅ ficha completa | ⚠️ enlace sin repo aún | ⚠️ |
| `shopify-learning-portal` | Demo académica | ✅ ficha completa | ⚠️ enlace sin repo aún | ⚠️ |
| `portfolio` | Este sitio | — | ✅ repo local | 🔴 sin deploy |

Candidatos futuros (repos reales del ciclo): M0612 React, M0613 API/SaaS, M0616 gestión/minijocs, M0615 diseño.

---

## Checklist antes de entregar

- [ ] Portfolio en **producción** (URL estable).
- [ ] Perfil **GitHub** enlazado desde la web y coherente con el contenido.
- [ ] **≥ 3** proyectos con fichas honestas en el sitio.
- [ ] Cada **repo enlazado**: README S21 en la raíz.
- [ ] Sin placeholders (`example.com`, `tu-repo`, `TU_USUARIO`).
- [ ] Navegación por teclado + Lighthouse accessibility.
- [x] `npm run build` sin errores.
- [ ] Compañero reproduce un proyecto solo con su README (prueba S21).

---

## Prioridad sugerida

1. **Despliegue Vercel** + README del portfolio + foto en `public/`.
2. **Arreglar enlaces de proyectos** (M-Automoción honesto; crear repos o quitar demos falsas).
3. **README S21** en cada repo que enlace el portfolio.
4. **Sección Sobre mí** + afinar hero (mensaje DAW).
5. **Accesibilidad** (skip link, ARIA menú, focus-visible, contraste, 404, OG).

---

## Notas

- El estilo oscuro/ámbar puede mantenerse; la accesibilidad es incremental (focus, ARIA, contraste).
- El botón **enviar_email()** abre **Gmail en el navegador** (requiere sesión Gmail del visitante); no es un formulario que envía correo automáticamente. Para envío sin Gmail del usuario, haría falta Formspree/Netlify Forms u otro backend.
