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
    const [signColor, typoColor] = colors(this.fillStyle, this.fillColor);

    return (
      <div
        class={`legacy legacy--${this.type} legacy--${
          this.compact ? 'compact' : 'extended'
        }`}
        style={{width}}
        data-e2e-width={width}
      >
        <clab-sign class="sign" fill-color={signColor} />
        <clab-typo
          class="typo"
          type={this.type}
          compact={this.compact}
          fill-color={typoColor}
        />
      </div>
    );
  }

  @Prop() compact = false;
  @Prop() fillStyle: FillStyle = 'positive';
  @Prop() fillColor: FillColor = 'black';
  @Prop() size: Size = '100%';
  @Prop() type: Exclude<LogoType, 'mc'> = 'developer';
}

// --- Helpers
const colors = (
  style: FillStyle,
  fillColor: FillColor
): [FillColor, FillColor] => {
  switch (style) {
    case 'mono':
      return [fillColor, fillColor];

    case 'negative':
      return ['light', 'light'];

    case 'positive':
    default:
      return ['base', 'base'];
  }
};
