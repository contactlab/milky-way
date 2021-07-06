/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { FillColor, FillStyle, LogoType, Size } from "./types";
export namespace Components {
    interface ClabLogo {
        "compact": boolean;
        "fillColor": FillColor;
        "fillStyle": FillStyle;
        "size": Size;
        "type": LogoType;
    }
    interface ClabSign {
        "fillColor": FillColor;
        "size": Size;
    }
    interface ClabTypo {
        "compact": boolean;
        "fillColor": FillColor;
        "size": Size;
        "type": LogoType;
    }
}
declare global {
    interface HTMLClabLogoElement extends Components.ClabLogo, HTMLStencilElement {
    }
    var HTMLClabLogoElement: {
        prototype: HTMLClabLogoElement;
        new (): HTMLClabLogoElement;
    };
    interface HTMLClabSignElement extends Components.ClabSign, HTMLStencilElement {
    }
    var HTMLClabSignElement: {
        prototype: HTMLClabSignElement;
        new (): HTMLClabSignElement;
    };
    interface HTMLClabTypoElement extends Components.ClabTypo, HTMLStencilElement {
    }
    var HTMLClabTypoElement: {
        prototype: HTMLClabTypoElement;
        new (): HTMLClabTypoElement;
    };
    interface HTMLElementTagNameMap {
        "clab-logo": HTMLClabLogoElement;
        "clab-sign": HTMLClabSignElement;
        "clab-typo": HTMLClabTypoElement;
    }
}
declare namespace LocalJSX {
    interface ClabLogo {
        "compact"?: boolean;
        "fillColor"?: FillColor;
        "fillStyle"?: FillStyle;
        "size"?: Size;
        "type"?: LogoType;
    }
    interface ClabSign {
        "fillColor"?: FillColor;
        "size"?: Size;
    }
    interface ClabTypo {
        "compact"?: boolean;
        "fillColor"?: FillColor;
        "size"?: Size;
        "type"?: LogoType;
    }
    interface IntrinsicElements {
        "clab-logo": ClabLogo;
        "clab-sign": ClabSign;
        "clab-typo": ClabTypo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "clab-logo": LocalJSX.ClabLogo & JSXBase.HTMLAttributes<HTMLClabLogoElement>;
            "clab-sign": LocalJSX.ClabSign & JSXBase.HTMLAttributes<HTMLClabSignElement>;
            "clab-typo": LocalJSX.ClabTypo & JSXBase.HTMLAttributes<HTMLClabTypoElement>;
        }
    }
}
