# TODO — Portfolio IA8 (M0615)

Checklist para cumplir el [enunciado IA8](https://astrodaw.vercel.app/moduls/daw2/m0615/instruments/ia8/) y los criterios de [S14](https://astrodaw.vercel.app/moduls/daw2/m0615/sessions/s14-ocupabilitat-i-portfolio/) / [S21](https://astrodaw.vercel.app/moduls/daw2/m0616/sessions/s21-readme-projectes-portfolio/).

**Última revisión:** 20 may 2026  
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
| Repos + README S21 (proyectos enlazados) | 🔴 Pendiente  |
| Accesibilidad IA8                        | 🟡 Casi listo |
| Coherencia global                        | 🟡 Parcial    |
| Sección «Sobre mí» (S14)                 | 🔴 Pendiente  |

---

## Lo que ya tienes

### Sitio y entrega

- [x] **URL en producción:** [https://frank-villar-redondo.vercel.app/](https://frank-villar-redondo.vercel.app/)
- [x] **README.md** del repositorio (stack, scripts, deploy, enlaces, IA)
- [x] Stack: Astro 6, Tailwind 4, Content Collections, sitio estático
- [x] Diseño responsive (menú móvil, hero, stack, proyectos, experiencia, formación, contacto)
- [x] Página `/projects` + fichas `/projects/[slug]`
- [x] Estilo oscuro + ámbar, animaciones al scroll, fondo con glow
- [x] Portadas en cards (SVG + logo M-Automoción)
- [x] Botón **Ver proyecto** en cards (CTA unificado)
- [x] Ficha de proyecto: panel lateral con imagen, barra de acento animada
- [x] `npm run build` sin errores

### Contenido y enlaces

- [x] Proyectos en `src/content/projects/` (mín. 3 destacados en home)
- [x] GitHub → [Frank20060](https://github.com/Frank20060)
- [x] LinkedIn → [frank-villar-redondo](https://www.linkedin.com/in/frank-villar-redondo/)
- [x] Contacto vía Gmail compose + LinkedIn
- [x] Perfil GitHub con bio alineada

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
- [ ] Confirmar repo **público** en GitHub y que Vercel esté al día (último commit desplegado — p. ej. botón «Ver proyecto» si en producción aún sale `ver_detalles()`)

### 2. Proyectos — enlaces honestos

| Proyecto           | Ficha web      | Repo / demo                                                                 |
| ------------------ | -------------- | --------------------------------------------------------------------------- |
| M-Automoción       | ✅ + logo      | 🔴 Quitar `example.com` y `tuusuario/tu-repo` o documentar sin repo público |
| Vinoteca Online    | ✅             | ⚠️ Crear repo/demo real o quitar `links`                                    |
| Portal Shopify     | ✅             | ⚠️ Igual                                                                    |
| plataforma-shopify | En `/projects` | Revisar si debe mostrarse en home / enlaces                                 |

Tareas:

- [ ] **`m-automocion-backend.md`**: sin enlaces rotos; honestidad si es trabajo interno
- [ ] **Demos ficticias**: repos en GitHub o eliminar URLs hasta que existan
- [ ] Opcional: sustituir demos por proyectos reales del ciclo (M0612, M0613, M0616)

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
| **Proyectos**     | 🟢     | ≥3 fichas; cerrar repos/demos                |
| **Sobre mí**      | 🔴     | Sección `#sobre-mi` + nav (narrativa breve)  |
| **Contacto**      | 🟢     | Gmail + LinkedIn                             |

- [ ] Enlace **Sobre mí** en navegación
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

| Slug                      | En home destacados | Repo           | Demo                                                  |
| ------------------------- | ------------------ | -------------- | ----------------------------------------------------- |
| `m-automocion-backend`    | ✅                 | 🔴 placeholder | 🔴                                                    |
| `vinoteca-web`            | ✅                 | ⚠️             | ⚠️                                                    |
| `shopify-learning-portal` | ✅                 | ⚠️             | ⚠️                                                    |
| `plataforma-shopify`      | ❓                 | ⚠️             | ⚠️                                                    |
| `portfolio` (este repo)   | —                  | ✅             | 🟢 [Vercel](https://frank-villar-redondo.vercel.app/) |

---

## Checklist antes de entregar al profesorado

- [x] Portfolio en **producción** con URL estable
- [x] README del repositorio del portfolio
- [ ] Perfil **GitHub** con enlace al portfolio en bio
- [x] **≥ 3** proyectos con fichas en el sitio
- [ ] Cada **repo enlazado** desde el portfolio: README S21
- [ ] Sin placeholders (`example.com`, `tu-repo`, `TU_USUARIO`)
- [ ] Último código **desplegado** en Vercel (push + redeploy si hace falta)
- [ ] Prueba S21: un compañero reproduce un proyecto solo con su README
- [x] `npm run build` OK

---

## Prioridad sugerida

1. **Push + redeploy** en Vercel (sincronizar producción con el repo local)
2. **Arreglar enlaces** de M-Automoción y demos (o quitarlos)
3. **README S21** en repos de proyectos que enlaces
4. **Sección Sobre mí** + mención DAW en hero
5. **Foto real**, 404, Open Graph

---

## Notas

- Producción: [frank-villar-redondo.vercel.app](https://frank-villar-redondo.vercel.app/) — comprobar que coincide con el último `git push`.
- Contacto: el botón de correo abre **Gmail** en el navegador (no envía mail automáticamente).
- Estilo y animaciones: respetan `prefers-reduced-motion`.
