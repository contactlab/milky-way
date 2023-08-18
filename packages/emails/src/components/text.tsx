import {MjmlText} from '@faire/mjml-react';
import type {ReactNode, FC} from 'react';

type Categories = 'caption' | 'label' | 'paragraph' | 'title';
type Padding = string | number;

interface TextProps {
  align?: 'right' | 'center' | 'left';
  children: ReactNode;
  cssClass?: string;
  fontWeight?: '400' | '700';
  type: Categories;
  padding?: Padding;
  paddingTop?: Padding;
  paddingRight?: Padding;
  paddingBottom?: Padding;
  paddingLeft?: Padding;
}

export const Text: FC<TextProps> = ({
  align,
  children,
  cssClass,
  fontWeight = '400',
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  type
}) => {
  const commonProps = {
    align,
    cssClass,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft
  };

  switch (type) {
    case 'caption':
      return (
        <MjmlText
          {...commonProps}
          fontWeight={fontWeight}
          fontSize="12px"
          lineHeight="16px"
          color="#5B768C"
        >
          {children}
        </MjmlText>
      );

    case 'label':
      return (
        <MjmlText
          {...commonProps}
          fontWeight={fontWeight}
          fontSize="14px"
          lineHeight="21px"
          color="#5B768C"
        >
          {children}
        </MjmlText>
      );

    case 'title':
      return (
        <MjmlText
          {...commonProps}
          fontWeight="700"
          fontSize="30px"
          lineHeight="36px"
          color="#1D3344"
        >
          {children}
        </MjmlText>
      );

    case 'paragraph':
      return (
        <MjmlText
          {...commonProps}
          fontWeight={fontWeight}
          fontSize="14px"
          lineHeight="21px"
          color="#001420"
        >
          {children}
        </MjmlText>
      );
  }
};
