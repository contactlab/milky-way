import {ColorHex, FillColor} from '../typings/props';

// --- handle component color
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

// --- hack svg padding for scaling
interface CalcPercentageProps {
  base?: number;
  width: number;
  height: number;
}

export function calcPercentage({
  base = 100,
  width,
  height
}: CalcPercentageProps): string {
  const formula = Math.round((base * height) / width);
  return isNaN(formula) ? 'none' : `${formula}%`;
}
