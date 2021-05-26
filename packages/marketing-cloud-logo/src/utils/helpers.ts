import {HexColorCode, FillColor} from '../types/commonProps';

/**
 * Map a specific input to color in Hex code format.
 *
 * @private
 * @param {string} color - One of the following types: 'accent', 'base', 'light', 'white', 'black'
 * @returns {string} - Hex color code
 */
export function handleColor(color: FillColor): HexColorCode {
  switch (color) {
    case 'accent':
      return '#0391ec';
    case 'base':
      return '#1d3344';
    case 'light':
      return '#f7fcff';
    case 'white':
      return '#fff';
    case 'black':
    default:
      return '#000';
  }
}

/**
 * Scaling the SVG by using the padding-bottom hack.
 * More info on the CSS-Tricks blog: https://css-tricks.com/scale-svg/#option-5-use-the-padding-bottom-hack-on-an-inline-svg-element
 *
 * @private
 * @param {Object} options - SVG properties
 * @param {number} options.base - Scaling percentange (optional)
 * @param {number} options.width - SVG viewbox width
 * @param {number} options.height - SVG viewbox height
 * @returns {string} - Padding bottom in percentage unit, related to `options.base`
 */
export function calcSvgPadding({
  base = 100,
  width,
  height
}: CalcSvgPaddingProps): string {
  const percentage = Math.round((base * height) / width);
  return isNaN(percentage) ? 'none' : `${percentage}%`;
}

interface CalcSvgPaddingProps {
  base?: number;
  width: number;
  height: number;
}
