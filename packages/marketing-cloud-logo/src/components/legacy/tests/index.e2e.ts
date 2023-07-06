import {newE2EPage} from '@stencil/core/testing';

describe('clab-legacy', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-legacy></clab-legacy>');

    const element = await page.find('clab-legacy');
    expect(element).toHaveClass('hydrated');
  });

  it('renders type attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-legacy></clab-legacy>');

    const component = await page.find('clab-legacy');
    const element = await page.find('clab-legacy >>> .legacy');

    expect(element).toHaveClass('legacy--developer');

    component.setProperty('type', 'explore');
    await page.waitForChanges();

    expect(element).toHaveClass('legacy--explore');
  });

  it('renders fill-style attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-legacy></clab-legacy>');

    const component = await page.find('clab-legacy');
    const sign = await page.find('clab-legacy >>> .sign');
    const typo = await page.find('clab-legacy >>> .typo');
    expect(sign.getAttribute('fill-color')).toBe('base');
    expect(typo.getAttribute('fill-color')).toBe('base');

    component.setProperty('fillStyle', 'mono');
    await page.waitForChanges();

    expect(sign.getAttribute('fill-color')).toBe('black');
    expect(typo.getAttribute('fill-color')).toBe('black');

    component.setProperty('fillStyle', 'negative');
    await page.waitForChanges();

    expect(sign.getAttribute('fill-color')).toBe('light');
    expect(typo.getAttribute('fill-color')).toBe('light');

    component.setProperty('fillStyle', 'positive');
    await page.waitForChanges();

    expect(sign.getAttribute('fill-color')).toBe('base');
    expect(typo.getAttribute('fill-color')).toBe('base');
  });

  it('renders compact attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-legacy></clab-legacy>');

    const component = await page.find('clab-legacy');
    const wrapper = await page.find('clab-legacy >>> .legacy');
    expect(wrapper).toHaveClass('legacy--extended');

    component.setProperty('compact', true);
    await page.waitForChanges();

    expect(wrapper).toHaveClass('legacy--compact');
  });

  it('renders size attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-legacy></clab-legacy>');

    const component = await page.find('clab-legacy');
    const element = await page.find('clab-legacy >>> .legacy');
    expect(element.getAttribute('data-e2e-width')).toBe('100%');

    component.setProperty('size', '480px');
    await page.waitForChanges();

    expect(element.getAttribute('data-e2e-width')).toBe('480px');
  });
});
