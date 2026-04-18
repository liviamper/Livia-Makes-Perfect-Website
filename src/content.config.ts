import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: z.string().optional(),
    icon: z.string().optional(), // Replaced by image but kept for backward compatibility
    author: z.string().default('Livia Team'),
    tag: z.string().default('Insights'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
