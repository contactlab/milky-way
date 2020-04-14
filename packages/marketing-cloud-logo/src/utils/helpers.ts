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
 * hack the svg padding for scaling
 * more info on the css-tricks blog: https://css-tricks.com/scale-svg/
 */
export function calcPercentage({
  base = 100,
  width,
  height
}: CalcPercentageProps): string {
  const formula = Math.round((base * height) / width);
  return isNaN(formula) ? 'none' : `${formula}%`;
}
