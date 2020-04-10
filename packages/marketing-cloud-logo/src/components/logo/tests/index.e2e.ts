import {newE2EPage} from '@stencil/core/testing';

describe('clab-logo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-logo></clab-logo>');

    const element = await page.find('clab-logo');
    expect(element).toHaveClass('hydrated');
  });

  it('renders type attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-logo></clab-logo>');

    const component = await page.find('clab-logo');
    const element = await page.find('clab-logo >>> .logo');

    expect(element).toHaveClass('logo--mc');

    component.setProperty('type', 'developer');
    await page.waitForChanges();

    expect(element).toHaveClass('logo--developer');

    component.setProperty('type', 'explore');
    await page.waitForChanges();

    expect(element).toHaveClass('logo--explore');
  });

  it('renders fill-style attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-logo></clab-logo>');

    const component = await page.find('clab-logo');
    const sign = await page.find('clab-logo >>> .sign');
    const typo = await page.find('clab-logo >>> .typo');
    expect(sign.getAttribute('fill-color')).toBe('accent');
    expect(typo.getAttribute('fill-color')).toBe('base');

    component.setProperty('fillStyle', 'mono');
    await page.waitForChanges();

    expect(sign.getAttribute('fill-color')).toBe('black');
    expect(typo.getAttribute('fill-color')).toBe('black');

    component.setProperty('fillStyle', 'negative');
    await page.waitForChanges();

    expect(sign.getAttribute('fill-color')).toBe('accent');
    expect(typo.getAttribute('fill-color')).toBe('light');

    component.setProperty('fillStyle', 'positive');
    await page.waitForChanges();

    expect(sign.getAttribute('fill-color')).toBe('accent');
    expect(typo.getAttribute('fill-color')).toBe('base');
  });

  it('renders compact attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-logo></clab-logo>');

    const component = await page.find('clab-logo');
    const wrapper = await page.find('clab-logo >>> .logo');
    expect(wrapper).toHaveClass('logo--full');

    component.setProperty('compact', true);
    await page.waitForChanges();

    expect(wrapper).toHaveClass('logo--compact');
  });

  it('renders size attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-logo></clab-logo>');

    const component = await page.find('clab-logo');
    const element = await page.find('clab-logo >>> .logo');
    expect(element.getAttribute('e2e-width')).toBe('100%');

    component.setProperty('size', '480px');
    await page.waitForChanges();

    expect(element.getAttribute('e2e-width')).toBe('480px');
  });
});
