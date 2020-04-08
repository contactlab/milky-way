import {Component, Prop, h} from '@stencil/core';
import {Type, FillColor, FillStyle, Size} from '../../typings/props';

@Component({
  shadow: true,
  tag: 'clab-logo',
  styleUrl: './styles.css'
})
export class Logo {
  @Prop() compact = false;
  @Prop() fillColor: FillColor = 'none';
  @Prop() fillStyle: FillStyle = 'positive';
  @Prop() size: Size = '100%';
  @Prop() type: Type = 'mc';

  render(): Element {
    const width = this.size;
    const [signColor, typoColor] = this.getFillStyle(this.fillStyle);

    return (
      <div
        class={`logo logo--${this.type} logo--${
          this.compact ? 'compact' : 'full'
        }`}
        style={{width}}
        e2e-width={width}
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

  private getFillStyle(style: FillStyle): [FillColor, FillColor] {
    switch (style) {
      case 'mono':
        return [this.fillColor, this.fillColor];

      case 'negative':
        return ['accent', 'light'];

      case 'positive':
      default:
        return ['accent', 'base'];
    }
  }
}
