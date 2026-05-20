import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date().optional(),
    role: z.string().optional(),
    company: z.string().optional(),
    tech: z.array(z.string()).default([]),
    links: z
      .object({
        demo: z.string().url().optional(),
        github: z.string().url().optional(),
      })
      .optional(),
    featured: z.boolean().default(false),
    destacado: z.boolean().optional(),
    cover: z.string().optional(),
    coverFit: z.enum(["cover", "contain"]).optional(),
    coverBg: z.string().optional(),
  }),
});

export const collections = {
  projects,
};
