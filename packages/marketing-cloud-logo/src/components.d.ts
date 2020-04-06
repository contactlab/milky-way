/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import {HTMLStencilElement, JSXBase} from '@stencil/core/internal';
import {LogoSize, LogoStyle} from './typings/props';
export namespace Components {
  interface GiotramuLogo {
    column: boolean;
    fillColor: LogoStyle;
    size: LogoSize;
  }
  interface GiotramuLogotype {
    fillColor: LogoStyle;
    size: LogoSize;
  }
  interface GiotramuMonogram {
    fillColor: LogoStyle;
    size: LogoSize;
  }
}
declare global {
  interface HTMLGiotramuLogoElement
    extends Components.GiotramuLogo,
      HTMLStencilElement {}
  var HTMLGiotramuLogoElement: {
    prototype: HTMLGiotramuLogoElement;
    new (): HTMLGiotramuLogoElement;
  };
  interface HTMLGiotramuLogotypeElement
    extends Components.GiotramuLogotype,
      HTMLStencilElement {}
  var HTMLGiotramuLogotypeElement: {
    prototype: HTMLGiotramuLogotypeElement;
    new (): HTMLGiotramuLogotypeElement;
  };
  interface HTMLGiotramuMonogramElement
    extends Components.GiotramuMonogram,
      HTMLStencilElement {}
  var HTMLGiotramuMonogramElement: {
    prototype: HTMLGiotramuMonogramElement;
    new (): HTMLGiotramuMonogramElement;
  };
  interface HTMLElementTagNameMap {
    'giotramu-logo': HTMLGiotramuLogoElement;
    'giotramu-logotype': HTMLGiotramuLogotypeElement;
    'giotramu-monogram': HTMLGiotramuMonogramElement;
  }
}
declare namespace LocalJSX {
  interface GiotramuLogo {
    column?: boolean;
    fillColor?: LogoStyle;
    size?: LogoSize;
  }
  interface GiotramuLogotype {
    fillColor?: LogoStyle;
    size?: LogoSize;
  }
  interface GiotramuMonogram {
    fillColor?: LogoStyle;
    size?: LogoSize;
  }
  interface IntrinsicElements {
    'giotramu-logo': GiotramuLogo;
    'giotramu-logotype': GiotramuLogotype;
    'giotramu-monogram': GiotramuMonogram;
  }
}
export {LocalJSX as JSX};
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'giotramu-logo': LocalJSX.GiotramuLogo &
        JSXBase.HTMLAttributes<HTMLGiotramuLogoElement>;
      'giotramu-logotype': LocalJSX.GiotramuLogotype &
        JSXBase.HTMLAttributes<HTMLGiotramuLogotypeElement>;
      'giotramu-monogram': LocalJSX.GiotramuMonogram &
        JSXBase.HTMLAttributes<HTMLGiotramuMonogramElement>;
    }
  }
}