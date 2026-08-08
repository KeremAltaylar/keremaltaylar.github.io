export const SITE = {
  name: 'Kerem Altaylar',
  role: 'Sound artist, researcher & performer',
  url: 'https://keremaltaylar.github.io',
  email: 'keremaltaylar@gmail.com',
  description:
    'Kerem Altaylar is a sound artist, researcher and performer working with generative systems, live electronics, creative coding and immersive audio. PhD candidate in Sonic Arts at ITU MIAM, Istanbul.',
  follow: [
    { label: 'Bandcamp', href: 'https://keremaltaylar.bandcamp.com' },
    { label: 'Instagram', href: 'https://instagram.com/keremaltaylar' },
    { label: 'GitHub', href: 'https://github.com/KeremAltaylar' },
  ],
  sameAs: [
    'https://keremaltaylar.bandcamp.com',
    'https://instagram.com/keremaltaylar',
    'https://github.com/KeremAltaylar',
    'https://www.fxhash.xyz/u/Kerem%20Altaylar',
  ],
} as const;

export const NAV = [
  { label: 'Works', href: '/works/' },
  { label: 'Interactive', href: '/interactive/' },
  { label: 'Field Log', href: '/field/' },
  { label: 'CV', href: '/cv/' },
  { label: 'About', href: '/about/' },
] as const;
