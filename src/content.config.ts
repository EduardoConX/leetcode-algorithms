import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const problems = defineCollection({
  loader: glob({ base: "./src/content/problems", pattern: "**/*.mdx" }),
  schema: z.object({
    number: z.number().min(1),
    title: z.string(),
    difficulty: z.enum(["Easy", "Medium", "Hard"]),
    categories: z.array(z.string()),
    slug: z.string(),
  }),
});

export const collections = {
  problems,
};
