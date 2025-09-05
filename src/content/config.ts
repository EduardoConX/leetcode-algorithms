import { defineCollection, z } from "astro:content";

const problems = defineCollection({
  type: "content",
  schema: z.object({
    number: z.number().min(1),
    title: z.string(),
    difficulty: z.enum(["Easy", "Medium", "Hard"]),
    categories: z.array(z.string()),
  }),
});

export const collections = {
  problems,
};
