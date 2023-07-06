import {Component, Prop, h} from '@stencil/core';
import type {FillColor, FillStyle, LogoType, Size} from '../../types';

@Component({
  shadow: true,
  tag: 'clab-legacy',
  styleUrl: './styles.css'
})
export class Legacy {
  render(): Element {
    const width = this.size;
    const fill = color(this.fillStyle, this.fillColor);

    return (
      <div
        class={`legacy legacy--${this.type}`}
        style={{width}}
        data-e2e-width={width}
      >
        <clab-sign class="sign" fill-color={fill} />
        <clab-typo class="typo" type={this.type} fill-color={fill} />
      </div>
    );
  }

  @Prop() fillStyle: FillStyle = 'positive';
  @Prop() fillColor: FillColor = 'black';
  @Prop() size: Size = '100%';
  @Prop() type: Exclude<LogoType, 'mc'> = 'developer';
}

// --- Helpers
const color = (style: FillStyle, fillColor: FillColor): FillColor => {
  switch (style) {
    case 'mono':
      return fillColor;

    case 'negative':
      return 'light';

    case 'positive':
    default:
      return 'base';
  }
};
