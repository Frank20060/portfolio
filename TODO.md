# TODO — Portfolio IA8

**Enlaces:** [Producción](https://frank-villar-redondo.vercel.app/) · [Repo](https://github.com/Frank20060/portfolio) · [Enunciado IA8](https://astrodaw.vercel.app/moduls/daw2/m0615/instruments/ia8/)

**Revisión:** 23 may 2026

---

## Estado rápido

| Área | Estado |
|------|--------|
| Sitio (diseño, 3 proyectos, sobre mí, contacto) | 🟢 |
| Publicación Vercel + README portfolio | 🟢 |
| Repos README S21 (Shopify, FurgoCamper) | 🔴 |
| Accesibilidad WCAG 2 AA | 🟡 |
| Perfil GitHub (URL + pin) | 🔴 |

**Proyectos en home:** M-Automoción · Shopify Mastery · FurgoCamper (sustituye Vinoteca).

---

## Hecho (no repetir)

- Astro 6 + Tailwind, `/projects` + fichas, build OK
- Sobre mí (`#sobre-mi`), nav, FurgoCamper con demo y portada PNG
- M-Automoción sin enlaces falsos; Shopify/Furgo con repo + Render
- A11y base: `lang="es"`, skip link, `nav` con ARIA, menú móvil, `focus-visible`, `prefers-reduced-motion`
- Contraste: `text-slate-500` → `text-slate-400` en formación, contacto y footer *(local; falta deploy)*

---

## Pendiente

### Entrega IA8

- [ ] **Push + redeploy** en Vercel (últimos cambios en producción)
- [ ] **README S21** en [shopify-web](https://github.com/Frank20060/shopify-web) y [furgonetascamper](https://github.com/Frank20060/furgonetascamper) (instalación, demo, IA)
- [ ] **GitHub:** URL del portfolio en bio + pinear `portfolio` y repos del sitio
- [ ] **Hero:** mención breve DAW y dónde ver proyectos
- [ ] Comprobar que demos Render siguen activas

### Accesibilidad (objetivo AA)

*Auditorías: axe (contraste) + TAW/manual (23 may). Nivel actual: ~A sólido, AA a medias.*

**Código (prioridad)**

- [ ] Enlaces con nombre claro: `ver_detalles()` → «Ver proyecto …» o `aria-label`
- [ ] Nav: texto legible (p. ej. «Proyectos») en lugar de solo `/proyectos`
- [ ] `aria-label` en enlace LinkedIn (Gmail ya lo tiene)
- [ ] Contenido visible **sin JS** (`data-animate` no debe empezar en `opacity: 0` por defecto)
- [ ] Cards: evitar doble tabulación (imagen + título + botón al mismo sitio)

**Revisión manual tras deploy**

- [ ] Teclado: orden de foco, menú móvil
- [ ] Repetir **axe** + herramienta del centro (TAW) en producción
- [ ] Revisar `h3` dentro de enlaces y `alt` de portadas (TAW 1.1.1 / 2.4.6 — suele ser OK)

**Opcional A11y / SEO**

- [ ] `404.astro`
- [ ] Open Graph (LinkedIn)
- [ ] Foto real en perfil (`public/frank-villar.png`)

---

## Antes de entregar

- [ ] Producción = último `git push`
- [ ] ≥ 3 fichas con enlaces honestos
- [ ] Un compañero reproduce un proyecto solo con su README (prueba S21)

---

## Notas

- El correo abre **Gmail** en el navegador (no envía solo).
- TAW marca muchos ítems como «sin revisar»: requieren comprobación manual, no son fallos automáticos.
