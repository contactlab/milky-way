import {newE2EPage} from '@stencil/core/testing';

describe('clab-pictogram', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-pictogram></clab-pictogram>');

    const element = await page.find('clab-pictogram');
    expect(element).toHaveClass('hydrated');
  });

  it('renders fill-color attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-pictogram></clab-pictogram>');

    const component = await page.find('clab-pictogram');
    const svg = await page.find('clab-pictogram >>> .vector');

    expect(svg.getAttribute('fill')).toBe('#000');

    component.setProperty('fillColor', 'accent');
    await page.waitForChanges();

    expect(svg.getAttribute('fill')).toBe('#0391EC');

    component.setProperty('fillColor', 'unknown');
    await page.waitForChanges();

    expect(svg.getAttribute('fill')).toBe('#000');
  });

  it('renders size attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-pictogram></clab-pictogram>');

    const component = await page.find('clab-pictogram');
    const wrapper = await page.find('clab-pictogram >>> .wrapper');

    expect(wrapper.getAttribute('e2e-width')).toBe('100%');

    component.setProperty('size', '348px');
    await page.waitForChanges();

    expect(wrapper.getAttribute('e2e-width')).toBe('348px');
  });
});
