import {newE2EPage} from '@stencil/core/testing';

describe('clab-typo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-typo></clab-typo>');

    const element = await page.find('clab-typo');

    expect(element).toHaveClass('hydrated');
  });

  it('renders type attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-typo></clab-typo>');

    const component = await page.find('clab-typo');
    const svg = await page.find('clab-typo >>> .vector');
    const svgContent = await svg.find('g');

    expect(svg.getAttribute('viewBox')).toBe('0 0 590 45');
    expect(svgContent.getAttribute('data-e2e-key')).toBe(
      'contactlab-marketing-cloud'
    );

    component.setProperty('type', 'explore');
    await page.waitForChanges();

    expect(svg.getAttribute('viewBox')).toBe('0 0 236 45');
    expect(svgContent.getAttribute('data-e2e-key')).toBe('mc-explore');

    component.setProperty('type', 'developer');
    await page.waitForChanges();

    expect(svg.getAttribute('viewBox')).toBe('0 0 295 45');
    expect(svgContent.getAttribute('data-e2e-key')).toBe('mc-developer');

    component.setProperty('type', 'unknown');
    await page.waitForChanges();

    expect(svg.getAttribute('viewBox')).toBe('0 0 590 45');
    expect(svgContent.getAttribute('data-e2e-key')).toBe(
      'contactlab-marketing-cloud'
    );
  });

  it('renders fill-color attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-typo></clab-typo>');

    const component = await page.find('clab-typo');
    const svg = await page.find('clab-typo >>> .vector');

    expect(svg.getAttribute('fill')).toBe('#141414');

    component.setProperty('fillColor', 'accent');
    await page.waitForChanges();

    expect(svg.getAttribute('fill')).toBe('#1890ff');

    component.setProperty('fillColor', 'unknown');
    await page.waitForChanges();

    expect(svg.getAttribute('fill')).toBe('#000');
  });

  it('renders compact attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-typo></clab-typo>');

    const component = await page.find('clab-typo');
    const svg = await page.find('clab-typo >>> .vector');
    const svgContent = await svg.find('g');

    expect(svg.getAttribute('viewBox')).toBe('0 0 590 45');
    expect(svgContent.getAttribute('data-e2e-key')).toBe(
      'contactlab-marketing-cloud'
    );

    component.setProperty('compact', true);
    await page.waitForChanges();

    expect(svg.getAttribute('viewBox')).toBe('0 0 346 45');
    expect(svgContent.getAttribute('data-e2e-key')).toBe('marketing-cloud');
  });

  it('renders size attribute changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<clab-typo></clab-typo>');

    const component = await page.find('clab-typo');
    const wrapper = await page.find('clab-typo >>> .wrapper');

    expect(wrapper.getAttribute('data-e2e-width')).toBe('100%');

    component.setProperty('size', '480px');
    await page.waitForChanges();

    expect(wrapper.getAttribute('data-e2e-width')).toBe('480px');
  });
});
