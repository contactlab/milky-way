import {ColorHex, FillColor} from '../typings/props';

export function handleColor(color: FillColor): ColorHex {
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

interface CalcPercentageProps {
  base?: number;
  width: number;
  height: number;
}

/**
 * Hack the SVG padding for scaling.
 * More info on the CSS-Tricks blog: https://css-tricks.com/scale-svg/
 */
export function calcPercentage({
  base = 100,
  width,
  height
}: CalcPercentageProps): string {
  const formula = Math.round((base * height) / width);
  return isNaN(formula) ? 'none' : `${formula}%`;
}
