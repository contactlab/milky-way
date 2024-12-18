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
          <div class="wrapper" data-e2e-size="100%" style="width: 100%; height: 100%;">
            <svg class="vector" fill="#464646" preserveAspectRatio="xMidYMin slice" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <g data-name="clab-sign-base" fill="#141414">
                <path clip-rule="evenodd" d="M65 84c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16-16 7.1634-16 16 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13-13 5.8203-13 13 5.8203 13 13 13zM32 66c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16-16 7.1634-16 16 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13-13 5.8203-13 13 5.8203 13 13 13zM64 48c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16-16 7.1634-16 16 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13-13 5.8203-13 13 5.8203 13 13 13z" fill-rule="evenodd"></path>
              </g>
            </svg>
          </div>
        </mock:shadow-root>
      </clab-sign>
    `);
  });

  it('renders contactlab sign with a custom size and custom color', async () => {
    const {root} = await newSpecPage({
      components: [Sign],
      html: '<clab-sign size="160px" fill-color="light"></clab-sign>'
    });

    expect(root).toEqualHtml(`
      <clab-sign fill-color="light" size="160px">
        <mock:shadow-root>
          <div class="wrapper" data-e2e-size="160px" style="width: 160px; height: 160px;">
            <svg class="vector" fill="#fff" preserveAspectRatio="xMidYMin slice" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <g data-name="clab-sign-base" fill="#141414">
                <path clip-rule="evenodd" d="M65 84c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16-16 7.1634-16 16 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13-13 5.8203-13 13 5.8203 13 13 13zM32 66c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16-16 7.1634-16 16 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13-13 5.8203-13 13 5.8203 13 13 13zM64 48c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16-16 7.1634-16 16 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13-13 5.8203-13 13 5.8203 13 13 13z" fill-rule="evenodd"></path>
              </g>
            </svg>
          </div>
        </mock:shadow-root>
      </clab-sign>
    `);
  });
});
