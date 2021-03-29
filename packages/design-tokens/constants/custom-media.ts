/**
 * The Contactlab Marketing Cloud custom media queries.
 */

// --- Mobile first
export const fromXSmall = '(min-width: 30em)'; // 480px
export const fromSmall = '(min-width: 48em)'; // 768px
export const fromMedium = '(min-width: 60em)'; // 960px
export const fromLarge = '(min-width: 80em)'; // 1280px
export const fromXLarge = '(min-width: 100em)'; // 1600px

// --- Desktop first
export const toXSmall = '(max-width: 30em)'; // 480px
export const toSmall = '(max-width: 48em)'; // 768px
export const toMedium = '(max-width: 60em)'; // 960px
export const toLarge = '(max-width: 80em)'; // 1280px
export const toXLarge = '(max-width: 100em)'; // 1600px

// --- Orientation
export const landscape = '(orientation: landscape)';
export const portrait = '(orientation: portrait)';

// --- a11y
export const reducedMotion = '(prefers-reduced-motion: reduce)';
export const lightScheme = '(prefers-color-scheme: light)';
export const darkScheme = '(prefers-color-scheme: dark)';

// --- Misc
export const finePointer = '(hover: hover) and (pointer: fine)';
export const highDensity =
  '(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-device-pixel-ratio: 1.5)';
