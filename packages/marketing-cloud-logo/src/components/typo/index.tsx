import {Component, Prop, h} from '@stencil/core';
import {Type, FillColor, Size} from '../../typings/props';
import {calcPercentage, handleColor} from '../../utils/helpers';
import {DeveloperType} from './developer';
import {ExploreType} from './explore';
import {McTypeFull, McTypeCompact} from './marketing-cloud';

@Component({
  shadow: true,
  tag: 'clab-typo',
  styleUrl: './styles.css'
})
export class Typo {
  @Prop() type: Type = 'mc';
  @Prop() fillColor: FillColor = 'base';
  @Prop() compact = false;
  @Prop() size: Size = '100%';

  render(): SVGElement {
    const fill = this.getFillColor();
    const width = this.size;
    const viewboxWidth = this.getViewboxWidth(this.type, this.compact);
    const paddingBottom = calcPercentage({
      width: viewboxWidth,
      height: 45
    });

    return (
      <div class="wrapper" style={{width}} e2e-width={width}>
        <svg
          class="vector"
          fill={fill}
          style={{
            paddingBottom
          }}
          viewBox={`0 0 ${viewboxWidth} 45`}
          preserveAspectRatio="xMidYMin slice"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          {this.getSvgContent(this.type, this.compact)}
        </svg>
      </div>
    );
  }

  private getViewboxWidth(type: Type, compact: boolean): number {
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

  private getSvgContent(type: Type, compact: boolean): JSX.Element {
    switch (type) {
      case 'explore':
        return ExploreType;

      case 'developer':
        return DeveloperType;

      case 'mc':
      default:
        return compact ? McTypeCompact : McTypeFull;
    }
  }

  private getFillColor(): string {
    return handleColor(this.fillColor);
  }
}
