import * as React from 'react';
import {primaryColor} from '../commons/attributes';

type Categories = 'caption' | 'paragraph';

interface LinkProps {
  children: React.ReactNode;
  cssClass?: string;
  fontWeight?: 400 | 700;
  href: string;
  type: Categories;
}

export function Link(props: LinkProps): JSX.Element {
  const {children, cssClass, fontWeight = 400, href, type} = props;

  const commonProps = {
    fontWeight,
    color: primaryColor,
    textDecoration: 'none'
  };

  switch (type) {
    case 'caption':
      return (
        <a
          href={href}
          className={cssClass}
          style={{
            ...commonProps,
            fontSize: '12px',
            lineHeight: '16px'
          }}
        >
          {children}
        </a>
      );

    case 'paragraph':
    default:
      return (
        <a
          href={href}
          className={cssClass}
          style={{
            ...commonProps,
            fontSize: '14px',
            lineHeight: '21px'
          }}
        >
          {children}
        </a>
      );
  }
}
