import type {FillColor} from './types';

interface WidthAndHight {
  width: number;
  height: number;
}

/**
 * Returns padding bottom in percentage unit.
 *
 * Scaling the SVG by using the padding-bottom hack.
 * More info on the CSS-Tricks blog: https://css-tricks.com/scale-svg/#option-5-use-the-padding-bottom-hack-on-an-inline-svg-element
 */
export const svgPadding = ({width, height}: WidthAndHight): string => {
  const percentage = Math.round((100 * height) / width);

  return isNaN(percentage) ? 'none' : `${percentage}%`;
};

const HEX_COLOR = {
  accent: '#464646',
  base: '#464646',
  light: '#fff',
  white: '#fff',
  black: '#000'
} as const;

type HexColor = (typeof HEX_COLOR)[keyof typeof HEX_COLOR];

/**
 * Maps a specific input to color in Hex code format.
 */
export const toHexColor = (color: FillColor): HexColor =>
  HEX_COLOR[color] ?? HEX_COLOR.black;
