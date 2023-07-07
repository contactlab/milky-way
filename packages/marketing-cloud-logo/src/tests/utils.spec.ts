import {svgPadding, toHexColor} from '../utils';

describe('svgPadding', () => {
  it(`returns percentage padding based on width and height of the svg viewbox`, () => {
    expect(svgPadding({width: 568, height: 127})).toBe('22%');
    expect(svgPadding({width: 386.5, height: 84.5})).toBe('22%');
    expect(svgPadding({width: 0, height: 0})).toBe('none');
    // @ts-expect-error
    expect(svgPadding({width: 180, height: 'foo'})).toBe('none');
  });
});

describe('toHexColor', () => {
  it(`returns a specific hex color for the "accent", "base" and "light" keywords`, () => {
    expect(toHexColor('accent')).toBe('#464646');
    expect(toHexColor('base')).toBe('#464646');
    expect(toHexColor('light')).toBe('#fff');
    expect(toHexColor('white')).toBe('#fff');
  });

  it(`returns the black color for the the "none" and unknown keywords`, () => {
    expect(toHexColor('black')).toBe('#000');
    // @ts-expect-error
    expect(toHexColor('fake')).toBe('#000');
  });
});
