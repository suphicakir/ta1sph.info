// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
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