import {MjmlButton} from 'mjml-react';
import * as React from 'react';
import {
  borderRadius,
  btnSize,
  primaryColor,
  whiteColor
} from '../commons/attributes';

interface ButtonProps {
  align?: 'right' | 'center' | 'left';
  children: React.ReactNode;
  cssClass?: string;
  fontWeight?: 400 | 700;
  href: string;
}

export function Button(props: ButtonProps): JSX.Element {
  const {align = 'center', children, cssClass, fontWeight = 400, href} = props;

  return (
    <MjmlButton
      width={btnSize}
      href={href}
      backgroundColor={primaryColor}
      borderRadius={borderRadius}
      align={align}
      fontWeight={fontWeight}
      fontSize="14px"
      lineHeight="21px"
      color={whiteColor}
      cssClass={cssClass}
    >
      {children}
    </MjmlButton>
  );
}
