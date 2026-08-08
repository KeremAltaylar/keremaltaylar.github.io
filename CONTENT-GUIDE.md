# Content guide

Everything on the site comes from plain text files in `src/content/`.
You never need to touch page code to add, change or remove work.

After any change: `git add -A && git commit -m "Add X" && git push`.
The site rebuilds and goes live automatically in about a minute.

---

## Where things live

| What | Where | Shows up on |
|---|---|---|
| Works, installations, film music | `src/content/works/<slug>/index.md` | Music & Sound |
| Releases | `src/content/releases.json` | Music & Sound |
| Instruments and generative pieces | `src/content/interactive.json` | Digital Instruments / Digital Art |
| Photographs | `src/assets/img/` + `src/data/galleries.ts` | everywhere |
| Past performances list | `src/pages/performances.astro` | Performances |
| Upcoming events | `src/content/events.json` | Home, Performances |
| Field log entries | `src/content/field/<date>-<slug>.md` | Field Log |
| Bio, CV, contact details | `src/pages/about.astro`, `src/pages/cv.astro` | About, CV |
| Name, email, social links, nav | `src/data/site.ts` | everywhere |

---

## Add a work

1. Copy an existing folder in `src/content/works/` and rename it.
   **The folder name becomes the URL**: `inside-the-tribe` → `/music/inside-the-tribe/`.
   Use lowercase and hyphens, no spaces.
2. Edit `index.md`.
3. Put the cover image in the same folder as `index.md`.

`type` decides which section of the Music & Sound page it lands in:
`installation` goes under Installations, `film` under Film music, and everything
else under Works.

```yaml
---
title: "Inside the Tribe"        # required
year: 2025                       # required, a number (no quotes)
type: performance                # required: composition | performance | installation | research | film
format: "8.1.4"                  # optional
duration: "8:00"                 # optional
venue: "Sonified III, Arter"     # optional
summary: "One or two sentences." # required, max 280 characters
featured: true                   # true = shows on the home page
status: published                # published | draft
order: 1                         # lower numbers sort first within a year
cover: "./cover.jpg"             # optional
coverAlt: "Description of image" # REQUIRED if cover is set
credits:                         # optional
  - { role: "Mastering", who: "Name" }
links:                           # optional, all optional
  bandcamp: "https://..."
  youtube: "https://..."
---

The main text goes here, in Markdown.
```

### Adding a cover image later

Drop the file next to `index.md`, then add both lines:

```yaml
cover: "./cover.jpg"
coverAlt: "Eight speakers arranged around a darkened room"
```

`coverAlt` is deliberately required — the build **fails** if you add a cover without
it. That is a feature: it keeps the site accessible and readable by search engines.

---

## Remove or hide a work

- **Hide it, keep the file:** set `status: draft`. It disappears from the site
  immediately and nothing is lost. This is the reversible option — prefer it.
- **Delete it for good:** delete the whole folder.

Nothing else in the codebase refers to individual works, so neither can break the site.

---

## Add an interactive piece

Add one object to `src/content/interactive.json`:

```json
{
  "id": "my-piece",
  "kind": "instrument",
  "title": "My Piece",
  "blurb": "One sentence describing it.",
  "url": "https://keremaltaylar.github.io/My-Piece/",
  "repo": "https://github.com/KeremAltaylar/My-Piece",
  "tech": ["Web Audio", "JavaScript"],
  "year": 2026,
  "featured": false
}
```

`kind` is either `instrument` — a full card on the **Digital Instruments** page — or
`generative`, which goes in the compact grid under Interactive visuals on **Digital
Art**. `id` must be unique. Watch the commas between objects.

---

## Add a release

Add one object to `src/content/releases.json`. It appears in the Releases section of
Music & Sound, in file order.

```json
{
  "id": "album-slug",
  "title": "Album Title",
  "year": 2026,
  "label": "Bandcamp",
  "url": "https://keremaltaylar.bandcamp.com/album/album-slug"
}
```

`year` and `label` are optional; `label` defaults to "Bandcamp".

---

## Add photographs

1. Put the file in `src/assets/img/`. JPEG or PNG, up to about 1600px on the long
   edge — Astro resizes and converts to WebP at build time, so do not pre-optimise.
2. Open `src/data/galleries.ts`, add an `import` at the top, and add an entry to the
   right array.

```ts
import myPhoto from '../assets/img/my-photo.jpg';

export const LIVE_CODING: Photo[] = [
  { src: myPhoto, alt: 'What is actually in the picture.', caption: 'Optional label' },
  // ...
];
```

`alt` is required on every photo — it is the only description a screen reader or a
search engine gets. Describe the picture, do not repeat the caption.

The arrays map to the site like this:

| Array | Appears on |
|---|---|
| `CIRCUS` | Digital Art → Video mapping |
| `LIVE_CODING` | Music & Sound → Live coding |
| `PERFORMANCE_PHOTOS` | Performances → Selected nights |
| `COLONY`, `TRIBE` | the matching work page, under "From the work" |

The first photo in each array is shown large, so put the strongest image first.

---

## Add a past performance

Edit the `past` list near the top of `src/pages/performances.astro`:

```ts
['2026', 'Piece title', 'Venue, City'],
```

---

## Add a field log entry

Create `src/content/field/2026-09-01-some-title.md`:

```yaml
---
title: "Recording at dawn"
date: 2026-09-01      # no quotes
place: "Istanbul"     # optional
summary: "Optional one-liner shown in the list."
status: published
---

Write freely here.
```

---

## Add an upcoming event

Add to `src/content/events.json`. Past dates disappear from the home page
automatically, so you can leave old ones in place.

```json
{
  "id": "sonified-2026",
  "date": "2026-05-10",
  "title": "Piece title",
  "venue": "Arter",
  "city": "Istanbul",
  "url": "https://..."
}
```

---

## If the build fails

The error message names the file and the field. Common causes:

- `coverAlt is required when a cover image is set` — add the `coverAlt` line.
- `Expected number, received string` — `year: 2025` not `year: "2025"`.
- A missing or extra comma in a `.json` file.
- An image path that does not match the actual filename (case-sensitive).

A failed build never takes the live site down — the previous version stays up
until a successful build replaces it.

---

## Preview locally

```
npm install     # first time only
npm run dev     # then open the printed localhost address
```

---

## What must never go in this repo

Audio masters, WAV/AIFF files and Ableton sessions. They belong in `../_source/`,
which is outside the repo. `.gitignore` blocks the common formats as a safety net.
Finished audio should live on Bandcamp or YouTube and be linked via `links:`.
