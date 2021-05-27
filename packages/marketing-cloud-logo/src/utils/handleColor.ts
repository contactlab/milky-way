import {HexColorCode, FillColor} from '../types/commonProps';

/**
 * Map a specific input to color in Hex code format.
 *
 * @private
 * @param color - One of the following types: 'accent', 'base', 'light', 'white', 'black'
 * @returns Hex color code
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
