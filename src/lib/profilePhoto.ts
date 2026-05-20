import type { ImageMetadata } from "astro";
import fallback from "../assets/frank-villar-fallback.svg";

const photoModules = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/frank-villar.{png,jpg,jpeg,webp}",
  { eager: true }
);

export const profilePhotoSrc: ImageMetadata =
  photoModules["../assets/frank-villar.png"]?.default ??
  photoModules["../assets/frank-villar.jpg"]?.default ??
  fallback;
