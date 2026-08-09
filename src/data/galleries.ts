/**
 * Photograph sets used across the site. Images live in src/assets/img so Astro
 * can resize and re-encode them at build time; every entry carries alt text
 * because these are the only description a screen reader gets.
 *
 * To add a photo: drop the file in src/assets/img, import it here, and add it
 * to the right array with an `alt`.
 */
import type { ImageMetadata } from 'astro';

import circus1 from '../assets/img/circus-1.jpg';
import circus2 from '../assets/img/circus-2.jpg';
import circus3 from '../assets/img/circus-3.jpg';
import circus4 from '../assets/img/circus-4.jpg';
import circus5 from '../assets/img/circus-5.jpg';

import colonyNest from '../assets/img/colony-nest.jpg';
import colonyRig from '../assets/img/colony-rig.jpg';
import colonyQueen from '../assets/img/colony-queen.jpg';
import colonyCluster from '../assets/img/colony-cluster.jpg';

import tribePond from '../assets/img/tribe-pond.jpg';
import tribeBarkMic from '../assets/img/tribe-bark-mic.jpg';
import tribeTrunk from '../assets/img/tribe-trunk.jpg';
import tribeCanopy from '../assets/img/tribe-canopy.jpg';
import tribeLog from '../assets/img/tribe-log.jpg';
import tribeClearing from '../assets/img/tribe-clearing.jpg';
import tribeValley from '../assets/img/tribe-valley.jpg';
import tribeRockMic from '../assets/img/tribe-rock-mic.jpg';

import lcAtolye from '../assets/img/livecoding-atolye.jpg';
import lcRed from '../assets/img/livecoding-red.jpg';
import lcScreen from '../assets/img/livecoding-screen.jpg';
import lcGenerate from '../assets/img/livecoding-generate.jpg';
import lcBabylon from '../assets/img/livecoding-babylon.jpg';
import lcAlan from '../assets/img/livecoding-alan.jpg';

import sonar1 from '../assets/img/perf-sonar-1.jpg';
import sonar2 from '../assets/img/perf-sonar-2.jpg';
import sonar3 from '../assets/img/perf-sonar-3.jpg';
import sonar4 from '../assets/img/perf-sonar-4.jpg';
import podiumHall from '../assets/img/perf-podium-hall.jpg';
import podiumPoster from '../assets/img/perf-podium-poster.jpg';
import podiumGlass from '../assets/img/perf-podium-glass.jpg';
import miamCrypts from '../assets/img/perf-miam-crypts.jpg';

export interface Photo {
  src: ImageMetadata;
  alt: string;
  caption?: string;
}

export const CIRCUS: Photo[] = [
  {
    src: circus4,
    alt: 'A performer stands with arms outstretched, a wide fabric cape spread behind her, with a projected forest image mapped across the cloth.',
    caption: 'Projection mapped onto the moving costume',
  },
  {
    src: circus1,
    alt: 'A performer under a fan-shaped fabric wing lit in green, projected foliage rippling across the surface.',
  },
  {
    src: circus2,
    alt: 'The fabric wing sweeping across the stage floor, projected texture stretching with the movement.',
  },
  {
    src: circus3,
    alt: 'The cloth folded into a wave, saturated green light and projected foliage filling the frame.',
  },
  {
    src: circus5,
    alt: 'The venue during the performance: an audience silhouetted against a green-lit hall.',
    caption: 'The room during the piece',
  },
];

export const COLONY: Photo[] = [
  {
    src: colonyNest,
    alt: 'A white nesting box holding two piezo discs pressed against moss and substrate, wired out to a recording chain.',
    caption: 'Piezo pickups seated against the nest substrate',
  },
  {
    src: colonyRig,
    alt: 'The recording desk: the formicarium, a portable recorder, a shotgun microphone on a stand and a preamp with headphones.',
    caption: 'The recording chain',
  },
  /* Two frames of the colony itself is enough — the rest of the set was the
     same tube shot over and over. */
  { src: colonyQueen, alt: 'A large black queen ant on cotton wool inside a glass tube.' },
  { src: colonyCluster, alt: 'The colony clustered along the length of the tube.' },
];

export const TRIBE: Photo[] = [
  {
    src: tribeBarkMic,
    alt: 'A small microphone pressed into a crevice in deeply furrowed tree bark.',
    caption: 'Listening into the bark',
  },
  {
    src: tribeTrunk,
    alt: 'A microphone strapped to a tree trunk in full leaf, cabled down out of frame.',
  },
  {
    src: tribeRockMic,
    alt: 'A windshielded microphone set on a mossy rock face above a river gorge.',
  },
  {
    src: tribePond,
    alt: 'A furry windshield on a boom over still water, treeline and open sky behind.',
  },
  { src: tribeLog, alt: 'A fallen trunk thick with moss and lichen in bright sun.' },
  { src: tribeClearing, alt: 'A cleared patch of forest with cut stumps and standing saplings.' },
  { src: tribeValley, alt: 'A steep wooded valley filling with haze.' },
  { src: tribeCanopy, alt: 'A narrow vertical view up a sunlit trunk into the canopy.' },
];

export const LIVE_CODING: Photo[] = [
  {
    src: lcAtolye,
    alt: 'A performer in headphones in front of a wall-sized projection of running p5.js source code over shifting colour.',
    caption: 'Atölye #10',
  },
  {
    src: lcBabylon,
    alt: 'A stage flanked by blue light, three columns of live-coded source projected across the back wall.',
    caption: 'Generate İstanbul, Babylon',
  },
  {
    src: lcAlan,
    alt: 'A performer at a laptop below a projection of code and text about the Heideggerian concept of the thing.',
    caption: 'Alan Kadıköy',
  },
  {
    src: lcRed,
    alt: 'A performer behind a laptop in a red-lit room, code projected on the wall beside a stack of monitors.',
  },
  {
    src: lcScreen,
    alt: 'A large screen of live-coded source above a PA stack in a dark hall.',
  },
  {
    src: lcGenerate,
    alt: 'A magenta-lit stage with GENERATE ISTANBUL repeated across the projection behind the performer.',
  },
];

export const PERFORMANCE_PHOTOS: Photo[] = [
  {
    src: sonar2,
    alt: 'A performer silhouetted at a table in front of a full-height LED wall of dense magenta texture.',
    caption: 'Sónar İstanbul',
  },
  {
    src: sonar4,
    alt: 'A tall LED column running the height of an atrium, an audience gathered below.',
    caption: 'Sónar İstanbul',
  },
  {
    src: sonar1,
    alt: 'The same wall in green, the performer small against the scale of the screen.',
    caption: 'Sónar İstanbul',
  },
  {
    src: sonar3,
    alt: 'The performer leaning over a mixer and controllers, pale projection breaking across the stage.',
    caption: 'Sónar İstanbul',
  },
  {
    src: podiumHall,
    alt: 'A hall with rows of red chairs facing a low stage flanked by two large loudspeakers.',
    caption: 'Podium für MIAM, Hannover',
  },
  {
    src: podiumPoster,
    alt: 'A Podium für MIAM poster pinned to a dark wooden door frame.',
    caption: 'Podium für MIAM, Hannover',
  },
  {
    src: podiumGlass,
    alt: 'A tall leaded window of pale coloured glass in the venue.',
    caption: 'Podium für MIAM, Hannover',
  },
  {
    src: miamCrypts,
    alt: 'A dark multi-level concrete space lit red, a figure standing at the far end.',
    caption: 'Crypts, MIAM',
  },
];
