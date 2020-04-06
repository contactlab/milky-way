import {handleColor, calcPercentage} from '../helpers';

describe('handleColor', () => {
  it(`returns a specific hex color for the "accent", "base" and "light" keywords`, () => {
    expect(handleColor('accent')).toBe('#0391EC');
    expect(handleColor('base')).toBe('#1D3344');
    expect(handleColor('light')).toBe('#F7FCFF');
  });

  it(`returns the black color for the the "none" and unknown keywords`, () => {
    expect(handleColor('none')).toBe('#000');
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    expect(handleColor('fake')).toBe('#000');
  });
});

describe('calcPercentage', () => {
  it(`returns percentage padding based on width and height of the svg viewbox`, () => {
    expect(calcPercentage({width: 568, height: 127})).toBe('22%');
    expect(calcPercentage({width: 386.5, height: 84.5})).toBe('22%');
    expect(calcPercentage({base: 80, width: 48, height: 16})).toBe('27%');
    expect(calcPercentage({width: 0, height: 0})).toBe('none');
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    expect(calcPercentage({width: 180, height: 'foo'})).toBe('none');
  });
});
