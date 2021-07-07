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
}
