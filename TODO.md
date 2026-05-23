# TODO — Portfolio IA8 (M0615)

Checklist para cumplir el [enunciado IA8](https://astrodaw.vercel.app/moduls/daw2/m0615/instruments/ia8/) y los criterios de [S14](https://astrodaw.vercel.app/moduls/daw2/m0615/sessions/s14-ocupabilitat-i-portfolio/) / [S21](https://astrodaw.vercel.app/moduls/daw2/m0616/sessions/s21-readme-projectes-portfolio/).

**Última revisión:** 23 may 2026  
**Repo:** [Frank20060/portfolio](https://github.com/Frank20060/portfolio)  
**Producción:** [frank-villar-redondo.vercel.app](https://frank-villar-redondo.vercel.app/)

---

## Progreso general

| Área                                     | Estado        |
| ---------------------------------------- | ------------- |
| Estructura y diseño                      | 🟢 Hecho      |
| Enlaces sociales (home)                  | 🟢 Hecho      |
| Proyectos en el sitio (≥3)               | 🟢 3+ fichas  |
| Publicación (URL estable)                | 🟢 Vercel     |
| README del portfolio                     | 🟢 Hecho      |
| Portadas y animaciones                   | 🟢 Hecho      |
| Sección «Sobre mí» (S14)                 | 🟢 Hecho      |
| Repos + README S21 (proyectos enlazados) | 🔴 Pendiente  |
| Accesibilidad IA8                        | 🟡 Casi listo |
| Coherencia global                        | 🟡 Parcial    |

---

## Lo que ya tienes

### Sitio y entrega

- [x] **URL en producción:** [https://frank-villar-redondo.vercel.app/](https://frank-villar-redondo.vercel.app/)
- [x] **README.md** del repositorio (stack, scripts, deploy, enlaces, IA)
- [x] Stack: Astro 6, Tailwind 4, Content Collections, sitio estático
- [x] Diseño responsive (menú móvil, hero, stack, proyectos, experiencia, formación, **sobre mí**, contacto)
- [x] Página `/projects` + fichas `/projects/[slug]`
- [x] Estilo oscuro + ámbar, animaciones al scroll, fondo con glow
- [x] Portadas en cards (`m-automocion.png`, `shopify-mastery.png`, `furgonetascamper.svg`)
- [x] Botón **Ver proyecto** en cards (CTA unificado)
- [x] Ficha de proyecto: panel lateral con imagen, barra de acento animada
- [x] `npm run build` sin errores

### Contenido y enlaces

- [x] Proyectos en `src/content/projects/` (mín. 3 destacados en home)
- [x] GitHub → [Frank20060](https://github.com/Frank20060)
- [x] LinkedIn → [frank-villar-redondo](https://www.linkedin.com/in/frank-villar-redondo/)
- [x] Contacto vía Gmail compose + LinkedIn
- [x] Perfil GitHub con bio alineada

### Sobre mí (S14) — hecho 23 may 2026

- [x] Sección `#sobre-mi` en home (entre formación y contacto)
- [x] Texto plano con énfasis (negritas, cursivas, términos técnicos en ámbar/mono)
- [x] Enlace **`/sobre_mi`** en navegación + scroll spy en `SiteHeader.astro`
- [x] Narrativa alineada con perfil BPA/RPA y backend (Python, Django, Quiter, PostgreSQL)

### Ficha M-Automoción — hecho 23 may 2026

- [x] Contenido ampliado y tono profesional (trabajo interno, sin demo pública)
- [x] Sin `links` placeholder (`example.com`, `tu-repo`)
- [x] Portada: `/covers/m-automocion.png` en `src/assets/covers/`

### Accesibilidad (parcial)

- [x] Skip link «Saltar al contenido»
- [x] `<nav aria-label="Principal">`
- [x] Menú móvil: ARIA + Escape + foco
- [x] `focus-visible` global (anillo ámbar)
- [x] `prefers-reduced-motion`
- [x] Meta description personalizada
- [x] Logo con `href="/"`, `id="inicio"` en hero
- [x] `rel="noopener noreferrer"` en enlaces externos (home, fichas)

---

## Crítico — pendiente para cerrar la IA8

### 1. Repositorio y despliegue

- [x] URL pública estable (Vercel)
- [x] README del portfolio
- [ ] Confirmar repo **público** en GitHub y que Vercel esté al día (push + redeploy con cambios recientes: sobre mí, M-Automoción, Shopify Mastery)

### 2. Proyectos — enlaces honestos

| Proyecto              | Slug                   | Ficha web | Repo / demo                                                                 |
| --------------------- | ---------------------- | --------- | --------------------------------------------------------------------------- |
| M-Automoción          | `m-automocion-backend` | ✅        | 🟢 Sin enlaces (interno; documentado en ficha)                              |
| Shopify Mastery       | `shopify-mastery`      | ✅        | 🟢 [Demo Render](https://shopify-web-0i9q.onrender.com/) + repo `shopify-web` |
| FurgoCamper           | `furgonetascamper`     | ✅        | 🟢 [Demo Render](https://furgonetascamper.onrender.com/) + repo               |
| `shopify-learning-portal` | (legacy?)          | —         | ⚠️ Revisar si el fichero sigue en el repo; unificar o borrar duplicado      |

Tareas:

- [x] **`m-automocion-backend.md`**: sin enlaces rotos; honestidad como trabajo interno
- [x] **FurgoCamper**: ficha en portfolio; demo [Render](https://furgonetascamper.onrender.com/) + [repo](https://github.com/Frank20060/furgonetascamper)
- [x] **Shopify Mastery**: comprobar README S21 en `shopify-web` y que la demo en Render esté activa
- [x] Limpiar ficheros de proyecto obsoletos si quedan duplicados (`shopify-learning-portal`, etc.)
- [ ] Opcional: sustituir o añadir proyectos del ciclo (M0612, M0613, M0616)

### 3. README S21 (cada repo enlazado desde el portfolio)

- [ ] README en la raíz alineado con la ficha (problema, stack, instalación, demo)
- [ ] Sin secretos; `.env.example` si aplica
- [ ] Apartado **IA y fuentes** en proyectos hechos con asistencia de IA

### 4. Perfil GitHub

- [x] Cuenta y README de perfil
- [ ] **Pinear** `portfolio` y repos que coincidan con el sitio
- [ ] Añadir URL del portfolio en bio/README de perfil: `frank-villar-redondo.vercel.app`

---

## Estructura y mensaje (S14)

| Sección IA8 / S14 | Estado | Acción                                       |
| ----------------- | ------ | -------------------------------------------- |
| **Inicio**        | 🟡     | Mencionar perfil **DAW** y dónde ver pruebas |
| **Proyectos**     | 🟢     | ≥3 fichas; cerrar verificación repos/demos   |
| **Sobre mí**      | 🟢     | Hecho (`#sobre-mi` + nav)                    |
| **Contacto**      | 🟢     | Gmail + LinkedIn                             |

- [x] Enlace **Sobre mí** en navegación (`/sobre_mi`)
- [ ] Coherencia portfolio ↔ GitHub ↔ README de cada proyecto

---

## Accesibilidad — pulido final

- [ ] Subir **`public/frank-villar.png`** (foto real; hoy hay fallback SVG)
- [ ] Página **`404.astro`**
- [ ] Open Graph / Twitter cards (título, descripción, imagen al compartir en LinkedIn)
- [ ] Auditoría Lighthouse accesibilidad + contraste WCAG en textos secundarios
- [ ] Prueba navegación solo con teclado en móvil real

---

## Usabilidad y rendimiento

- [x] Covers en cards
- [ ] OG / meta social
- [ ] Optimizar foto con `astro:assets` si subes PNG grande
- [ ] Favicon personal (opcional)

---

## Inventario de proyectos

| Slug                   | En home destacados | Repo / demo                                      | Notas                          |
| ---------------------- | ------------------ | ------------------------------------------------ | ------------------------------ |
| `m-automocion-backend` | ✅                 | 🟢 N/A (interno)                                 | Ficha sin `links`; portada PNG |
| `shopify-mastery`      | ✅                 | 🟢 GitHub + Render                               | Sustituye nombre antiguo portal |
| `furgonetascamper`     | ✅                 | 🟢 Render + GitHub                               | Sustituye Vinoteca             |
| `portfolio` (este repo)| —                  | 🟢 [Vercel](https://frank-villar-redondo.vercel.app/) |                            |

---

## Checklist antes de entregar al profesorado

- [x] Portfolio en **producción** con URL estable
- [x] README del repositorio del portfolio
- [ ] Perfil **GitHub** con enlace al portfolio en bio
- [x] **≥ 3** proyectos con fichas en el sitio
- [x] Sección **Sobre mí** (S14)
- [ ] Cada **repo enlazado** desde el portfolio: README S21
- [x] Sin placeholders en M-Automoción (`example.com`, `tu-repo`)
- [x] Sin placeholders en fichas destacadas (FurgoCamper con enlaces reales)
- [ ] Último código **desplegado** en Vercel (push + redeploy)
- [ ] Prueba S21: un compañero reproduce un proyecto solo con su README
- [x] `npm run build` OK

---

## Prioridad sugerida

1. **Push + redeploy** en Vercel (sobre mí, fichas actualizadas)
2. **Verificar demos/repos** de FurgoCamper y Shopify Mastery + README S21
3. **Perfil GitHub**: URL del portfolio + pinear repos
4. **Hero**: mención DAW y enlace claro a proyectos
5. **Foto real**, `404.astro`, Open Graph

---

## Notas

- Producción: [frank-villar-redondo.vercel.app](https://frank-villar-redondo.vercel.app/) — comprobar que coincide con el último `git push`.
- Contacto: el botón de correo abre **Gmail** en el navegador (no envía mail automáticamente).
- Estilo y animaciones: respetan `prefers-reduced-motion`.
- **23 may 2026:** añadida sección `#sobre-mi`; reescrita ficha M-Automoción; `shopify-mastery` con demo y repo reales.
