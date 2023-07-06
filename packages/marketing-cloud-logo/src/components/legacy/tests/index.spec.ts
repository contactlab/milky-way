import {newSpecPage} from '@stencil/core/testing';
import {Legacy} from '../index';

describe('clab-legacy', () => {
  it('renders "Developer" logo with standard color palette', async () => {
    const {root} = await newSpecPage({
      components: [Legacy],
      html: '<clab-legacy></clab-legacy>'
    });

    expect(root).toEqualHtml(`
      <clab-legacy>
        <mock:shadow-root>
          <div
            class="legacy legacy--developer legacy--extended"
            style="width: 100%;"
            data-e2e-width="100%"
          >
            <clab-sign class="sign" fill-color="base"></clab-sign>
            <clab-typo class="typo" type="developer" fill-color="base"></clab-typo>
          </div>
        </mock:shadow-root>
      </clab-legacy>
    `);
  });

  it('renders "Explore" logo with standard color palette', async () => {
    const {root} = await newSpecPage({
      components: [Legacy],
      html: '<clab-legacy type="explore"></clab-legacy>'
    });

    expect(root).toEqualHtml(`
      <clab-legacy type="explore">
        <mock:shadow-root>
          <div
            class="legacy legacy--explore legacy--extended"
            style="width: 100%;"
            data-e2e-width="100%"
          >
            <clab-sign class="sign" fill-color="base"></clab-sign>
            <clab-typo class="typo" type="explore" fill-color="base"></clab-typo>
          </div>
        </mock:shadow-root>
      </clab-legacy>
    `);
  });

  it('renders "Developer" logo with positive color palette', async () => {
    const {root} = await newSpecPage({
      components: [Legacy],
      html: '<clab-legacy fill-style="positive"></clab-legacy>'
    });

    expect(root).toEqualHtml(`
      <clab-legacy fill-style="positive">
        <mock:shadow-root>
          <div
            class="legacy legacy--developer legacy--extended"
            style="width: 100%;"
            data-e2e-width="100%"
          >
            <clab-sign class="sign" fill-color="base"></clab-sign>
            <clab-typo class="typo" type="developer" fill-color="base"></clab-typo>
          </div>
        </mock:shadow-root>
      </clab-legacy>
    `);
  });

  it('renders "Developer" with negative color palette', async () => {
    const {root} = await newSpecPage({
      components: [Legacy],
      html: '<clab-legacy fill-style="negative"></clab-legacy>'
    });

    expect(root).toEqualHtml(`
      <clab-legacy fill-style="negative">
        <mock:shadow-root>
          <div
            class="legacy legacy--developer legacy--extended"
            style="width: 100%;"
            data-e2e-width="100%"
          >
            <clab-sign class="sign" fill-color="light"></clab-sign>
            <clab-typo class="typo" type="developer" fill-color="light"></clab-typo>
          </div>
        </mock:shadow-root>
      </clab-legacy>
    `);
  });

  it('renders "developer" with custom color palette', async () => {
    const {root} = await newSpecPage({
      components: [Legacy],
      html: '<clab-legacy fill-style="mono" fill-color="tomato"></clab-legacy>'
    });

    expect(root).toEqualHtml(`
      <clab-legacy fill-style="mono" fill-color="tomato">
        <mock:shadow-root>
          <div
            class="legacy legacy--developer legacy--extended"
            style="width: 100%;"
            data-e2e-width="100%"
          >
            <clab-sign class="sign" fill-color="tomato"></clab-sign>
            <clab-typo class="typo" type="developer" fill-color="tomato"></clab-typo>
          </div>
        </mock:shadow-root>
      </clab-legacy>
    `);
  });

  it('renders "developer" with standard color palette', async () => {
    const {root} = await newSpecPage({
      components: [Legacy],
      html: '<clab-legacy compact></clab-legacy>'
    });

    expect(root).toEqualHtml(`
      <clab-legacy compact>
        <mock:shadow-root>
          <div
            class="legacy legacy--developer legacy--compact"
            style="width: 100%;"
            data-e2e-width="100%"
          >
            <clab-sign class="sign" fill-color="base"></clab-sign>
            <clab-typo class="typo" type="developer" compact fill-color="base"></clab-typo>
          </div>
        </mock:shadow-root>
      </clab-legacy>
    `);
  });

  it('renders "developer" with a custom size', async () => {
    const {root} = await newSpecPage({
      components: [Legacy],
      html: '<clab-legacy size="320px" compact></clab-legacy>'
    });

    expect(root).toEqualHtml(`
      <clab-legacy size="320px" compact>
        <mock:shadow-root>
          <div
            class="legacy legacy--developer legacy--compact"
            style="width: 320px;"
            data-e2e-width="320px"
          >
            <clab-sign class="sign" fill-color="base"></clab-sign>
            <clab-typo class="typo" type="developer" compact fill-color="base"></clab-typo>
          </div>
        </mock:shadow-root>
      </clab-legacy>
    `);
  });
});
