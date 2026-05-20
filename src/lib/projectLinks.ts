export type ProjectLinkFrom = "home" | "projects"

export const projectDetailHref = (slug: string, from: ProjectLinkFrom) =>
  `/projects/${slug}?from=${from}`

export const projectBackFromParam = (searchParams: URLSearchParams): ProjectLinkFrom =>
  searchParams.get("from") === "home" ? "home" : "projects"

const HOME_PROJECTS_HREF = "/#proyectos"

export const backLinkFor = (from: ProjectLinkFrom) => ({
  href: from === "home" ? HOME_PROJECTS_HREF : "/projects",
  label: from === "home" ? "volver_a_inicio" : "volver_a_proyectos",
  ariaLabel: from === "home" ? "Volver a la sección de proyectos" : "Volver a proyectos",
})
