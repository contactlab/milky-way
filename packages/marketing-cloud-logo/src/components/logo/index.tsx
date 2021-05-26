import {Component, Prop, h} from '@stencil/core';
import {Type, FillColor, FillStyle, Size} from '../../types/commonProps';

@Component({
  shadow: true,
  tag: 'clab-logo',
  styleUrl: './styles.css'
})
export class Logo {
  @Prop() compact = false;
  @Prop() fillStyle: FillStyle = 'positive';
  @Prop() fillColor: FillColor = 'black';
  @Prop() size: Size = '100%';
  @Prop() type: Type = 'mc';

  render(): Element {
    const width = this.size;
    const [signColor, typoColor] = this.getFillStyle(this.fillStyle);

    return (
      <div
        class={`logo logo--${this.type} logo--${
          this.compact ? 'compact' : 'extended'
        }`}
        style={{width}}
        data-e2e-width={width}>
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
