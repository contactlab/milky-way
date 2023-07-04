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
            fill="#1890ff"
            preserveAspectRatio="xMidYMin slice"
            viewBox="0 0 65 68"
            style="padding-bottom: 150%; margin-left: -27%;"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g data-name="clab-sign-base">
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M65 84c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16-16 7.1634-16 16 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13-13 5.8203-13 13 5.8203 13 13 13zM32 66c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16-16 7.1634-16 16 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13-13 5.8203-13 13 5.8203 13 13 13zM64 48c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16-16 7.1634-16 16 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13-13 5.8203-13 13 5.8203 13 13 13z"
              />
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
      html: '<clab-sign size="160px" fill-color="base"></clab-sign>'
    });

    expect(root).toEqualHtml(`
      <clab-sign size="160px" fill-color="base">
        <mock:shadow-root>
          <div class="wrapper" style="width: 160px;" data-e2e-width="160px">
          <svg
            class="vector"
            fill="#141414"
            preserveAspectRatio="xMidYMin slice"
            viewBox="0 0 65 68"
            style="padding-bottom: 150%; margin-left: -27%;"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g data-name="clab-sign-base">
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M65 84c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16-16 7.1634-16 16 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13-13 5.8203-13 13 5.8203 13 13 13zM32 66c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16-16 7.1634-16 16 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13-13 5.8203-13 13 5.8203 13 13 13zM64 48c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16-16 7.1634-16 16 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13-13 5.8203-13 13 5.8203 13 13 13z"
              />
            </g>
          </svg>
          </div>
        </mock:shadow-root>
      </clab-sign>
    `);
  });
});
