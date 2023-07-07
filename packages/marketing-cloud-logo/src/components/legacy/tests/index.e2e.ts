import {newE2EPage} from '@stencil/core/testing';

describe('clab-legacy', () => {
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
    const svg = await page.find('clab-legacy >>> .vector');
    const sign = await page.find('clab-legacy >>> [data-name="clab-sign"]');
    expect(svg.getAttribute('fill')).toBe('#464646');
    expect(sign.getAttribute('fill')).toBe('#1890ff');

    component.setProperty('fillStyle', 'mono');
    await page.waitForChanges();

    expect(svg.getAttribute('fill')).toBe('#000');
    expect(sign.getAttribute('fill')).toBe('#1890ff');

    component.setProperty('fillStyle', 'negative');
    await page.waitForChanges();

    expect(svg.getAttribute('fill')).toBe('#fff');
    expect(sign.getAttribute('fill')).toBe('#1890ff');

    component.setProperty('fillStyle', 'positive');
    await page.waitForChanges();

    expect(svg.getAttribute('fill')).toBe('#464646');
    expect(sign.getAttribute('fill')).toBe('#1890ff');
  });

  it('renders size attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-legacy></clab-legacy>');

    const component = await page.find('clab-legacy');
    const element = await page.find('clab-legacy >>> .legacy');
    expect(element.getAttribute('data-e2e-size')).toBe('100%');

    component.setProperty('size', '480px');
    await page.waitForChanges();

    expect(element.getAttribute('data-e2e-size')).toBe('480px');
  });
});
