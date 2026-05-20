import type { ImageMetadata } from "astro";

const coverModules = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/covers/*.{png,svg,jpg,jpeg,webp,avif}",
  { eager: true }
);

/** Resuelve rutas del frontmatter (`/covers/foo.png`) a metadata de Astro Image */
export const resolveCover = (path?: string): ImageMetadata | undefined => {
  if (!path) return undefined;

  const file = path.replace(/^\/covers\//, "").replace(/^\//, "");
  const entry = Object.entries(coverModules).find(([key]) => key.endsWith(`/${file}`));
  return entry?.[1].default;
};
