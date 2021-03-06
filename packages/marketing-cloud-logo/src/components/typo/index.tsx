import {Component, Prop, h, JSX} from '@stencil/core';
import type {FillColor, LogoType, Size} from '../../types';
import {calcSvgPadding, handleColor} from '../../utils';
import {DeveloperShape} from './developer';
import {ExploreShape} from './explore';
import {McShape} from './marketing-cloud';

@Component({
  shadow: true,
  tag: 'clab-typo',
  styleUrl: './styles.css'
})
export class Typo {
  @Prop() type: LogoType = 'mc';
  @Prop() fillColor: FillColor = 'base';
  @Prop() compact = false;
  @Prop() size: Size = '100%';

  render(): SVGElement {
    const fill = this.getFillColor();
    const width = this.size;
    const viewboxWidth = this.getViewboxWidth(this.type, this.compact);
    const paddingBottom = calcSvgPadding({
      width: viewboxWidth, // Viewbox width
      height: 45 // Viewbox height
    });

    return (
      <div class="wrapper" style={{width}} data-e2e-width={width}>
        <svg
          class="vector"
          fill={fill}
          style={{
            paddingBottom
          }}
          viewBox={`0 0 ${viewboxWidth} 45`}
          preserveAspectRatio="xMidYMin slice"
          xmlns="http://www.w3.org/2000/svg">
          {this.getSvgContent(this.type, this.compact)}
        </svg>
      </div>
    );
  }

  private getFillColor(): string {
    return handleColor(this.fillColor);
  }

  private getViewboxWidth(type: LogoType, compact: boolean): number {
    switch (type) {
      case 'explore':
        return 236;

      case 'developer':
        return 295;

      case 'mc':
      default:
        return compact ? 346 : 590;
    }
  }

  private getSvgContent(type: LogoType, compact: boolean): JSX.Element {
    switch (type) {
      case 'explore':
        return <ExploreShape />;

      case 'developer':
        return <DeveloperShape />;

      case 'mc':
      default:
        return <McShape compact={compact} />;
    }
  }
}
