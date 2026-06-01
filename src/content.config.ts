import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blog',
    generateId: ({ entry }) => entry.replace(/\.mdx?$/, ''),
  }),
  schema: z.object({
    baslik: z.string(),
    ozet: z.string(),
    tarih: z.coerce.date(),
    guncelleme: z.coerce.date().optional(),
    yazar: z.string().default('Admin'),
    etiketler: z.array(z.string()).default([]),
    kapakGorseli: z.string().optional(),
    yayinda: z.boolean().default(true),
  }),
});

export const collections = { blog };
