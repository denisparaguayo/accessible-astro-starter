// src/content/config.js
import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
  }),
})

const escuderias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/escuderias' }),
  schema: z.object({
    nombre: z.string(),
    pilotos: z.array(z.string()).optional(),
    descripcion: z.string().optional(),
    logo: z.string().optional(),
  }),
})

const pilotos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pilotos' }),
  schema: z.object({
    nombre: z.string(),
    apellido: z.string(),
    escuderia: z.string(),
    foto: z.string().optional(),
    descripcion: z.string().optional(),
  }),
})

export const collections = { projects, escuderias, pilotos }
