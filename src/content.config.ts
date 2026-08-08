import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

/**
 * One folder per work: src/content/works/<slug>/index.md
 * The folder name becomes the URL. Images live beside the markdown.
 */
const works = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/works' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.number().int().min(1990).max(2100),
      type: z.enum(['composition', 'performance', 'installation', 'research', 'film']),
      /** Channel format or medium, e.g. "8.1.4", "Stereo", "Live electronics" */
      format: z.string().optional(),
      duration: z.string().optional(),
      venue: z.string().optional(),
      summary: z.string().max(280),
      featured: z.boolean().default(false),
      status: z.enum(['published', 'draft']).default('published'),
      order: z.number().default(0),
      cover: image().optional(),
      /** Required whenever there is a cover — enforced below. */
      coverAlt: z.string().optional(),
      credits: z.array(z.object({ role: z.string(), who: z.string() })).default([]),
      links: z
        .object({
          bandcamp: z.string().url().optional(),
          youtube: z.string().url().optional(),
          soundcloud: z.string().url().optional(),
          score: z.string().optional(),
          text: z.string().optional(),
        })
        .default({}),
    })
    .refine((d) => !d.cover || (d.coverAlt && d.coverAlt.length > 0), {
      message: 'coverAlt is required when a cover image is set (accessibility).',
      path: ['coverAlt'],
    }),
});

/** All 25 already-live browser pieces, in one editable file. */
const interactive = defineCollection({
  loader: file('./src/content/interactive.json'),
  schema: z.object({
    id: z.string(),
    kind: z.enum(['instrument', 'generative']),
    title: z.string(),
    blurb: z.string().optional(),
    url: z.string().url(),
    repo: z.string().url().optional(),
    tech: z.array(z.string()).default([]),
    year: z.number().int().optional(),
    featured: z.boolean().default(false),
  }),
});

const field = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/field' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    place: z.string().optional(),
    summary: z.string().max(280).optional(),
    status: z.enum(['published', 'draft']).default('published'),
  }),
});

const events = defineCollection({
  loader: file('./src/content/events.json'),
  schema: z.object({
    id: z.string(),
    date: z.string(),
    title: z.string(),
    venue: z.string(),
    city: z.string().optional(),
    url: z.string().url().optional(),
  }),
});

/** Albums and EPs, newest first. */
const releases = defineCollection({
  loader: file('./src/content/releases.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    year: z.number().int().optional(),
    label: z.string().optional(),
    blurb: z.string().optional(),
    url: z.string().url(),
  }),
});

export const collections = { works, interactive, field, events, releases };
