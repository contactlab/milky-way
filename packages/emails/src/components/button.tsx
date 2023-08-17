import {MjmlButton} from 'mjml-react';
import * as React from 'react';
import {BORDER_RADIUS, PRIMARY_COLOR, WHITE} from '../shared';

interface ButtonProps {
  align?: 'right' | 'center' | 'left';
  children: React.ReactNode;
  cssClass?: string;
  fontWeight?: 400 | 700;
  href: string;
}

export const Button: React.FC<ButtonProps> = ({
  align = 'center',
  children,
  cssClass,
  fontWeight = 400,
  href
}) => (
  <MjmlButton
    width={200}
    href={href}
    backgroundColor={PRIMARY_COLOR}
    borderRadius={BORDER_RADIUS}
    align={align}
    fontWeight={fontWeight}
    fontSize="14px"
    lineHeight="21px"
    color={WHITE}
    cssClass={cssClass}
  >
    {children}
  </MjmlButton>
);
