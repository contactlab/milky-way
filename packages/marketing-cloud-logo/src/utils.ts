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

type HexColor = '#1890ff' | '#141414' | '#fafafa' | '#fff' | '#000';

/**
 * Maps a specific input to color in Hex code format.
 */
export const toHexColor = (color: FillColor): HexColor => {
  switch (color) {
    case 'accent':
      return '#1890ff';
    case 'base':
      return '#141414';
    case 'light':
      return '#fafafa';
    case 'white':
      return '#fff';
    case 'black':
    default:
      return '#000';
  }
};
