import {
  captionColor,
  labelColor,
  titleColor,
  textColor
} from '../commons/attributes';
import {MjmlText} from 'mjml-react';
import * as React from 'react';

type Categories = 'caption' | 'label' | 'paragraph' | 'title';
type Padding = string | number;

interface TextProps {
  align?: 'right' | 'center' | 'left';
  children: React.ReactNode;
  cssClass?: string;
  fontWeight?: 400 | 700;
  type: Categories;
  padding?: Padding;
  paddingTop?: Padding;
  paddingRight?: Padding;
  paddingBottom?: Padding;
  paddingLeft?: Padding;
}

export function Text(props: TextProps): JSX.Element {
  const {
    align,
    children,
    cssClass,
    fontWeight = 400,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    type
  } = props;

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
          color={captionColor}
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
          color={labelColor}
        >
          {children}
        </MjmlText>
      );

    case 'title':
      return (
        <MjmlText
          {...commonProps}
          fontWeight={700}
          fontSize="30px"
          lineHeight="36px"
          color={titleColor}
        >
          {children}
        </MjmlText>
      );

    case 'paragraph':
    default:
      return (
        <MjmlText
          {...commonProps}
          fontWeight={fontWeight}
          fontSize="14px"
          lineHeight="21px"
          color={textColor}
        >
          {children}
        </MjmlText>
      );
  }
}
