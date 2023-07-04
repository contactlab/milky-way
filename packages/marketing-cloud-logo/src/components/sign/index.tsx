import {Component, Prop, h} from '@stencil/core';
import type {FillColor, Size} from '../../types';
import {toHexColor} from '../../utils';

@Component({
  shadow: true,
  tag: 'clab-sign',
  styleUrl: './styles.css'
})
export class Sign {
  render(): SVGElement {
    const fill = toHexColor(this.fillColor);
    const width = this.size;

    return (
      <div class="wrapper" style={{width}} data-e2e-width={width}>
        <svg
          class="vector"
          fill={fill}
          style={{
            paddingBottom: '150%',
            marginLeft: '-27%'
          }}
          viewBox="0 0 65 68"
          preserveAspectRatio="xMidYMin slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g data-name="clab-sign-base">
            <path
              {...{'clip-rule': 'evenodd', 'fill-rule': 'evenodd'}}
              d="M65 84c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16-16 7.1634-16 16 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13-13 5.8203-13 13 5.8203 13 13 13zM32 66c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16-16 7.1634-16 16 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13-13 5.8203-13 13 5.8203 13 13 13zM64 48c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16-16 7.1634-16 16 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13-13 5.8203-13 13 5.8203 13 13 13z"
            />
          </g>
        </svg>
      </div>
    );
  }

  @Prop() size: Size = '100%';
  @Prop() fillColor: FillColor = 'accent';
}
