export type ProjectLinkFrom = "home" | "projects"

export const projectDetailHref = (slug: string, from: ProjectLinkFrom) =>
  `/projects/${slug}?from=${from}`

export const projectBackFromParam = (searchParams: URLSearchParams): ProjectLinkFrom =>
  searchParams.get("from") === "home" ? "home" : "projects"

const HOME_PROJECTS_HREF = "/#proyectos"

export const backLinkFor = (from: ProjectLinkFrom) => ({
  href: from === "home" ? HOME_PROJECTS_HREF : "/projects",
  label: from === "home" ? "Volver al inicio" : "Volver a proyectos",
  ariaLabel: from === "home" ? "Volver a la sección de proyectos en el inicio" : "Volver a la lista de proyectos",
})
