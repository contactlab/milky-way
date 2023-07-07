import {newE2EPage} from '@stencil/core/testing';

describe('clab-logo', () => {
  it('renders MC logo', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-logo></clab-logo>');

    const element = await page.find('clab-logo >>> .logo');
    expect(element).toHaveClass('logo--mc');
  });

  it('renders legacy component', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-logo></clab-logo>');

    const component = await page.find('clab-logo');
    const element = await page.find('clab-logo >>> .logo');

    expect(element).toHaveClass('logo--mc');

    component.setProperty('type', 'developer');
    await page.waitForChanges();

    const element2 = await page.find('clab-logo >>> clab-legacy >>> .legacy');

    expect(element2).toBeDefined();
  });

  it('renders fill-style attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-logo></clab-logo>');

    const component = await page.find('clab-logo');
    const sign = await page.find('clab-logo >>> svg');

    expect(sign.getAttribute('fill')).toBe('#464646');

    component.setProperty('fillStyle', 'mono');
    await page.waitForChanges();

    expect(sign.getAttribute('fill')).toBe('#000');

    component.setProperty('fillStyle', 'negative');
    await page.waitForChanges();

    expect(sign.getAttribute('fill')).toBe('#fff');

    component.setProperty('fillStyle', 'positive');
    await page.waitForChanges();

    expect(sign.getAttribute('fill')).toBe('#464646');
  });

  it('renders compact attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-logo></clab-logo>');

    const component = await page.find('clab-logo');
    const wrapper = await page.find('clab-logo >>> .logo');
    expect(wrapper).toHaveClass('logo--extended');

    component.setProperty('compact', true);
    await page.waitForChanges();

    expect(wrapper).toHaveClass('logo--compact');
  });

  it('renders size attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-logo></clab-logo>');

    const component = await page.find('clab-logo');
    const element = await page.find('clab-logo >>> .logo');
    expect(element.getAttribute('data-e2e-width')).toBe('100%');

    component.setProperty('size', '480px');
    await page.waitForChanges();

    expect(element.getAttribute('data-e2e-width')).toBe('480px');
  });
});
