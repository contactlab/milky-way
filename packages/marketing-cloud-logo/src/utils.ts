import type {HexColorCode, FillColor} from './types';

interface CalcSvgPaddingProps {
  base?: number;
  width: number;
  height: number;
}

/**
 * Scaling the SVG by using the padding-bottom hack.
 * More info on the CSS-Tricks blog: https://css-tricks.com/scale-svg/#option-5-use-the-padding-bottom-hack-on-an-inline-svg-element
 *
 * @private
 * @param options - SVG properties
 * @param options.base - Scaling percentange (optional)
 * @param options.width - SVG viewbox width
 * @param options.height - SVG viewbox height
 * @returns Padding bottom in percentage unit, related to `options.base`
 */
export const calcSvgPadding = ({
  base = 100,
  width,
  height
}: CalcSvgPaddingProps): string => {
  const percentage = Math.round((base * height) / width);

  return isNaN(percentage) ? 'none' : `${percentage}%`;
};

/**
 * Map a specific input to color in Hex code format.
 *
 * @private
 * @param color - One of the following types: 'accent', 'base', 'light', 'white', 'black'
 * @returns Hex color code
 */
export const handleColor = (color: FillColor): HexColorCode => {
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
