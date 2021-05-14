import {newE2EPage} from '@stencil/core/testing';

describe('clab-sign', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-sign></clab-sign>');

    const element = await page.find('clab-sign');
    expect(element).toHaveClass('hydrated');
  });

  it('renders fill-color attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-sign></clab-sign>');

    const component = await page.find('clab-sign');
    const svg = await page.find('clab-sign >>> .vector');

    expect(svg.getAttribute('fill')).toBe('#0391ec');

    component.setProperty('fillColor', 'base');
    await page.waitForChanges();

    expect(svg.getAttribute('fill')).toBe('#1d3344');

    component.setProperty('fillColor', 'unknown');
    await page.waitForChanges();

    expect(svg.getAttribute('fill')).toBe('#000');
  });

  it('renders size attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-sign></clab-sign>');

    const component = await page.find('clab-sign');
    const wrapper = await page.find('clab-sign >>> .wrapper');

    expect(wrapper.getAttribute('data-e2e-width')).toBe('100%');

    component.setProperty('size', '348px');
    await page.waitForChanges();

    expect(wrapper.getAttribute('data-e2e-width')).toBe('348px');
  });
});
