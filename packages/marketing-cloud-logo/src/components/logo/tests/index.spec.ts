import {newSpecPage} from '@stencil/core/testing';
import {Logo} from '../index';

describe('clab-logo', () => {
  it('renders "Contactlab Marketing Cloud" logo with standard color palette', async () => {
    const {root} = await newSpecPage({
      components: [Logo],
      html: '<clab-logo></clab-logo>'
    });

    expect(root).toEqualHtml(`
      <clab-logo>
        <mock:shadow-root>
          <div
            class="logo logo--mc logo--extended"
            style="width: 100%;"
            data-e2e-width="100%"
          >
            <clab-sign class="sign" fill-color="accent"></clab-sign>
            <clab-typo class="typo" type="mc" fill-color="base"></clab-typo>
          </div>
        </mock:shadow-root>
      </clab-logo>
    `);
  });

  it('renders "Contactlab Marketing Cloud" logo with positive color palette', async () => {
    const {root} = await newSpecPage({
      components: [Logo],
      html: '<clab-logo fill-style="positive"></clab-logo>'
    });

    expect(root).toEqualHtml(`
      <clab-logo fill-style="positive">
        <mock:shadow-root>
          <div
            class="logo logo--mc logo--extended"
            style="width: 100%;"
            data-e2e-width="100%"
          >
            <clab-sign class="sign" fill-color="accent"></clab-sign>
            <clab-typo class="typo" type="mc" fill-color="base"></clab-typo>
          </div>
        </mock:shadow-root>
      </clab-logo>
    `);
  });

  it('renders "Contactlab Marketing Cloud" with negative color palette', async () => {
    const {root} = await newSpecPage({
      components: [Logo],
      html: '<clab-logo fill-style="negative"></clab-logo>'
    });

    expect(root).toEqualHtml(`
      <clab-logo fill-style="negative">
        <mock:shadow-root>
          <div
            class="logo logo--mc logo--extended"
            style="width: 100%;"
            data-e2e-width="100%"
          >
            <clab-sign class="sign" fill-color="accent"></clab-sign>
            <clab-typo class="typo" type="mc" fill-color="light"></clab-typo>
          </div>
        </mock:shadow-root>
      </clab-logo>
    `);
  });

  it('renders "Contactlab Marketing Cloud" with custom color palette', async () => {
    const {root} = await newSpecPage({
      components: [Logo],
      html: '<clab-logo fill-style="mono" fill-color="tomato"></clab-logo>'
    });

    expect(root).toEqualHtml(`
      <clab-logo fill-style="mono" fill-color="tomato">
        <mock:shadow-root>
          <div
            class="logo logo--mc logo--extended"
            style="width: 100%;"
            data-e2e-width="100%"
          >
            <clab-sign class="sign" fill-color="tomato"></clab-sign>
            <clab-typo class="typo" type="mc" fill-color="tomato"></clab-typo>
          </div>
        </mock:shadow-root>
      </clab-logo>
    `);
  });

  it('renders "Marketing Cloud" with standard color palette', async () => {
    const {root} = await newSpecPage({
      components: [Logo],
      html: '<clab-logo compact></clab-logo>'
    });

    expect(root).toEqualHtml(`
      <clab-logo compact>
        <mock:shadow-root>
          <div
            class="logo logo--mc logo--compact"
            style="width: 100%;"
            data-e2e-width="100%"
          >
            <clab-sign class="sign" fill-color="accent"></clab-sign>
            <clab-typo class="typo" type="mc" compact fill-color="base"></clab-typo>
          </div>
        </mock:shadow-root>
      </clab-logo>
    `);
  });

  it('renders "Marketing Cloud" with a custom size', async () => {
    const {root} = await newSpecPage({
      components: [Logo],
      html: '<clab-logo size="320px" compact></clab-logo>'
    });

    expect(root).toEqualHtml(`
      <clab-logo size="320px" compact>
        <mock:shadow-root>
          <div
            class="logo logo--mc logo--compact"
            style="width: 320px;"
            data-e2e-width="320px"
          >
            <clab-sign class="sign" fill-color="accent"></clab-sign>
            <clab-typo class="typo" type="mc" compact fill-color="base"></clab-typo>
          </div>
        </mock:shadow-root>
      </clab-logo>
    `);
  });
});
