import {Component, Prop, h, JSX} from '@stencil/core';
import type {FillColor, Size} from '../../types';
import {toHexColor} from '../../utils';

@Component({
  shadow: true,
  tag: 'clab-sign',
  styleUrl: './styles.css'
})
export class Sign {
  @Prop() size: Size = '100%';
  @Prop() fillColor: FillColor = 'accent';

  render(): JSX.Element {
    const fill = toHexColor(this.fillColor);
    const width = this.size;
    const height = this.size;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return (
      <div class="wrapper" style={{width, height}} data-e2e-size={this.size}>
        <svg
          class="vector"
          fill={fill}
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMin slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g data-name="clab-sign-base">
            <g data-name="clab-sign-base-cdp">
              <path
                class="st0"
                d="M74.8,17.4c-0.1-0.3-0.3-0.4-0.6-0.4c-0.3,0-0.5,0.1-0.7,0.2c-0.2,0.1-0.4,0.4-0.5,0.7 c-0.2,0.3-0.3,0.8-0.5,1.4c-0.2,0.6-0.3,1.3-0.5,2.2c-0.2,0.9-0.4,1.6-0.5,2.2c-0.1,0.6-0.2,1.1-0.2,1.4c0,0.3,0.1,0.6,0.2,0.7 s0.3,0.2,0.6,0.2c0.2,0,0.4-0.1,0.6-0.2c0.2-0.1,0.3-0.3,0.4-0.5c0.1-0.2,0.3-0.6,0.4-1c0.1-0.4,0.3-0.9,0.4-1.6h3.3l-0.2,1 c-0.2,0.9-0.5,1.7-0.9,2.3c-0.4,0.6-0.8,1.1-1.3,1.4c-0.5,0.3-1,0.6-1.6,0.7c-0.6,0.1-1.1,0.2-1.7,0.2c-1,0-1.7-0.1-2.3-0.4 c-0.6-0.2-1-0.6-1.2-1.2c-0.2-0.5-0.3-1.3-0.2-2.1c0.1-0.9,0.2-1.9,0.5-3.2c0.3-1.3,0.6-2.3,1-3.2c0.4-0.9,0.8-1.6,1.3-2.1 c0.5-0.5,1.1-0.9,1.7-1.2c0.7-0.2,1.4-0.4,2.3-0.4c0.8,0,1.4,0.1,1.9,0.3c0.5,0.2,0.9,0.5,1.1,0.8c0.3,0.4,0.4,0.8,0.4,1.3 c0,0.5,0,1.1-0.2,1.7l-0.2,0.8h-3.3l0.2-0.7C74.8,18.2,74.9,17.7,74.8,17.4z"
              />
              <path
                class="st0"
                d="M85.3,14.9c1,0,1.7,0.2,2.2,0.5s0.8,0.9,0.9,1.5c0.1,0.6,0.1,1.3,0,2.1c-0.1,0.8-0.3,1.6-0.5,2.5 c-0.2,0.9-0.4,1.7-0.7,2.5c-0.2,0.8-0.6,1.5-1,2.1c-0.4,0.6-0.9,1.1-1.6,1.5c-0.6,0.4-1.5,0.5-2.5,0.5h-5l3.1-13.2H85.3z M81.9,25.7c0.3,0,0.6,0,0.8-0.1s0.4-0.3,0.6-0.6c0.2-0.3,0.3-0.7,0.5-1.3c0.2-0.5,0.3-1.3,0.5-2.2c0.2-0.9,0.4-1.6,0.4-2.2 c0.1-0.5,0.1-1,0.1-1.3c0-0.3-0.1-0.5-0.3-0.6c-0.2-0.1-0.4-0.1-0.8-0.1h-0.7l-1.9,8.3H81.9z"
              />
              <path
                class="st0"
                d="M96,14.9c0.7,0,1.2,0.1,1.6,0.3c0.4,0.2,0.8,0.5,1,0.9c0.2,0.4,0.4,0.8,0.4,1.3c0,0.5,0,1-0.2,1.6 c-0.3,1.4-0.9,2.4-1.8,3.1c-0.9,0.7-2.1,1-3.5,1h-1.2l-1.2,5h-3.5l3.1-13.2H96z M93.6,20.6c0.4,0,0.8-0.1,1.1-0.4 c0.3-0.3,0.5-0.7,0.6-1.2c0.2-1.1-0.1-1.6-1-1.6h-0.6l-0.7,3.2H93.6z"
              />
            </g>
            <g data-name="clab-sign-base-sign">
              <path
                class="st0"
                d="M24.3,58.9l5.8-24.1c0.5-1.8,1.6-2.7,3.4-2.7c1.6,0,1.6,1.3,1.6,2.7l-5.8,24.1h9.6l5.8-24.1 c0.4-1.8,1.6-2.7,3.3-2.7c1.8-0.2,2.2,1.3,1.8,2.7l-5.6,24.1h9.6l6.7-27.7c1.1-4.5-2.4-7.1-6.9-7.1c-2.7,0-5.6,1.4-8.1,4.5h-0.2 c-0.4-2.9-2.9-4.7-6-4.5c-2.7,0.2-6,1.8-8.3,4.9l0.9-4h-9.1l-8.1,33.9H24.3z"
              />
              <path
                class="st0"
                d="M63.8,61.3c-0.4,1.8-2.1,3.1-3.9,3.1l-10.1-0.1c-1.6,0-3.2,0.6-4.5,1.7l0,0L33.3,77l2.2-9.2 c0.2-0.9,0-1.7-0.5-2.4c-0.5-0.7-1.3-1.1-2.2-1.1l-22.5,0.1c-1.4,0-2.7-0.6-3.6-1.7c-0.9-1.1-1.2-2.5-0.9-3.9l8.6-36 c0.5-2.1,2.3-3.5,4.4-3.5c0,0,38,0,46.5,0l1.1-4.7l-47.6,0c-4.3,0-8,2.9-9,7.1l-8.6,36c-0.7,2.7,0,5.6,1.7,7.8 c1.8,2.2,4.4,3.5,7.2,3.5L30.3,69l-3.1,12.9c-0.3,1.2,0.3,2.4,1.3,3.1c0.4,0.3,0.9,0.4,1.5,0.4c0.7,0,1.4-0.2,1.9-0.7l0,0 l16.4-15.2c0.4-0.3,0.9-0.5,1.4-0.5l10.1,0.1c4.1,0,7.6-2.7,8.5-6.7l7.4-31h-4.8L63.8,61.3z"
              />
            </g>
          </g>
        </svg>
      </div>
    );
  }
}
