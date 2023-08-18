import type {ReactNode, FC} from 'react';
import {PRIMARY_COLOR} from '../shared';

type Categories = 'caption' | 'paragraph';

interface LinkProps {
  children: ReactNode;
  cssClass?: string;
  fontWeight?: 400 | 700;
  href: string;
  type: Categories;
}

export const Link: FC<LinkProps> = ({
  children,
  cssClass,
  fontWeight = 400,
  href,
  type
}) => {
  const commonProps = {
    fontWeight,
    color: PRIMARY_COLOR,
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
};
