import {handleColor} from '../handleColor';

describe('handleColor', () => {
  it(`returns a specific hex color for the "accent", "base" and "light" keywords`, () => {
    expect(handleColor('accent')).toBe('#0391ec');
    expect(handleColor('base')).toBe('#1d3344');
    expect(handleColor('light')).toBe('#f7fcff');
    expect(handleColor('white')).toBe('#fff');
  });

  it(`returns the black color for the the "none" and unknown keywords`, () => {
    expect(handleColor('black')).toBe('#000');
    // @ts-expect-error
    expect(handleColor('fake')).toBe('#000');
  });
});
