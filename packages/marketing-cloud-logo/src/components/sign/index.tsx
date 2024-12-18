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
    // FIXME: `fill` has been maintained for backward compatibility but it is not clear if useful for MC logo
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
          <g data-name="clab-sign-base" fill="#141414">
            <path
              // eslint-disable-next-line react/no-unknown-property
              clip-rule="evenodd"
              // eslint-disable-next-line react/no-unknown-property
              fill-rule="evenodd"
              d="M65 84c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16-16 7.1634-16 16 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13-13 5.8203-13 13 5.8203 13 13 13zM32 66c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16-16 7.1634-16 16 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13-13 5.8203-13 13 5.8203 13 13 13zM64 48c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16-16 7.1634-16 16 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13-13 5.8203-13 13 5.8203 13 13 13z"
            />
          </g>
        </svg>
      </div>
    );
  }
}
