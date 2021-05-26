import {handleColor, calcSvgPadding} from '../helpers';

describe('handleColor', () => {
  it(`returns a specific hex color for the "accent", "base" and "light" keywords`, () => {
    expect(handleColor('accent')).toBe('#0391ec');
    expect(handleColor('base')).toBe('#1d3344');
    expect(handleColor('light')).toBe('#f7fcff');
    expect(handleColor('white')).toBe('#fff');
  });

  it(`returns the black color for the the "none" and unknown keywords`, () => {
    expect(handleColor('black')).toBe('#000');
    // @ts-ignore
    expect(handleColor('fake')).toBe('#000');
  });
});

describe('calcSvgPadding', () => {
  it(`returns percentage padding based on width and height of the svg viewbox`, () => {
    expect(calcSvgPadding({width: 568, height: 127})).toBe('22%');
    expect(calcSvgPadding({width: 386.5, height: 84.5})).toBe('22%');
    expect(calcSvgPadding({base: 80, width: 48, height: 16})).toBe('27%');
    expect(calcSvgPadding({width: 0, height: 0})).toBe('none');
    // @ts-ignore
    expect(calcSvgPadding({width: 180, height: 'foo'})).toBe('none');
  });
});
