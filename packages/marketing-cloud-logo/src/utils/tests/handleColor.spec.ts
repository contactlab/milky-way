import {handleColor} from '../handleColor';

describe('handleColor', () => {
  it(`returns a specific hex color for the "accent", "base" and "light" keywords`, () => {
    expect(handleColor('accent')).toBe('#1890ff');
    expect(handleColor('base')).toBe('#141414');
    expect(handleColor('light')).toBe('#fafafa');
    expect(handleColor('white')).toBe('#fff');
  });

  it(`returns the black color for the the "none" and unknown keywords`, () => {
    expect(handleColor('black')).toBe('#000');
    // @ts-expect-error
    expect(handleColor('fake')).toBe('#000');
  });
});
