import {newSpecPage} from '@stencil/core/testing';
import {Sign} from '../index';

describe('clab-sign', () => {
  it('renders contactlab sign', async () => {
    const {root} = await newSpecPage({
      components: [Sign],
      html: '<clab-sign></clab-sign>'
    });

    expect(root).toEqualHtml(`
      <clab-sign>
        <mock:shadow-root>
          <div class="wrapper" style="width: 100%;" data-e2e-width="100%">
          <svg
            class="vector"
            fill="#0391ec"
            preserveAspectRatio="xMidYMin slice"
            viewBox="0 0 65 68"
            style="padding-bottom: 105%;"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M49 68C57.8366 68 65 60.8366 65 52C65 43.1634 57.8366 36 49 36C40.1634 36 33 43.1634 33 52C33 60.8366 40.1634 68 49 68ZM49 65C56.1797 65 62 59.1797 62 52C62 44.8203 56.1797 39 49 39C41.8203 39 36 44.8203 36 52C36 59.1797 41.8203 65 49 65Z"
            />
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M16 50C24.8366 50 32 42.8366 32 34C32 25.1634 24.8366 18 16 18C7.16344 18 0 25.1634 0 34C0 42.8366 7.16344 50 16 50ZM16 47C23.1797 47 29 41.1797 29 34C29 26.8203 23.1797 21 16 21C8.8203 21 3 26.8203 3 34C3 41.1797 8.8203 47 16 47Z"
            />
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M48 32C56.8366 32 64 24.8366 64 16C64 7.16344 56.8366 0 48 0C39.1634 0 32 7.16344 32 16C32 24.8366 39.1634 32 48 32ZM48 29C55.1797 29 61 23.1797 61 16C61 8.8203 55.1797 3 48 3C40.8203 3 35 8.8203 35 16C35 23.1797 40.8203 29 48 29Z"
            />
          </svg>
          </div>
        </mock:shadow-root>
      </clab-sign>
    `);
  });

  it('renders contactlab sign with a custom size and custom color', async () => {
    const {root} = await newSpecPage({
      components: [Sign],
      html: '<clab-sign size="160px" fill-color="base"></clab-sign>'
    });

    expect(root).toEqualHtml(`
      <clab-sign size="160px" fill-color="base">
        <mock:shadow-root>
          <div class="wrapper" style="width: 160px;" data-e2e-width="160px">
          <svg
            class="vector"
            fill="#1d3344"
            preserveAspectRatio="xMidYMin slice"
            viewBox="0 0 65 68"
            style="padding-bottom: 105%;"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M49 68C57.8366 68 65 60.8366 65 52C65 43.1634 57.8366 36 49 36C40.1634 36 33 43.1634 33 52C33 60.8366 40.1634 68 49 68ZM49 65C56.1797 65 62 59.1797 62 52C62 44.8203 56.1797 39 49 39C41.8203 39 36 44.8203 36 52C36 59.1797 41.8203 65 49 65Z"
            />
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M16 50C24.8366 50 32 42.8366 32 34C32 25.1634 24.8366 18 16 18C7.16344 18 0 25.1634 0 34C0 42.8366 7.16344 50 16 50ZM16 47C23.1797 47 29 41.1797 29 34C29 26.8203 23.1797 21 16 21C8.8203 21 3 26.8203 3 34C3 41.1797 8.8203 47 16 47Z"
            />
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M48 32C56.8366 32 64 24.8366 64 16C64 7.16344 56.8366 0 48 0C39.1634 0 32 7.16344 32 16C32 24.8366 39.1634 32 48 32ZM48 29C55.1797 29 61 23.1797 61 16C61 8.8203 55.1797 3 48 3C40.8203 3 35 8.8203 35 16C35 23.1797 40.8203 29 48 29Z"
            />
          </svg>
          </div>
        </mock:shadow-root>
      </clab-sign>
    `);
  });
});
