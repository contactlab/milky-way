import {
  MjmlHead,
  MjmlTitle,
  MjmlAttributes,
  MjmlPreview,
  MjmlFont,
  MjmlStyle,
  MjmlAll,
  MjmlBreakpoint
} from 'mjml-react';
import * as React from 'react';
import {i18nType} from '../../i18n/helpers';

interface HeadProps {
  i18n: i18nType;
}

export function Head(props: HeadProps): JSX.Element {
  const {i18n} = props;

  return (
    <MjmlHead>
      <MjmlTitle>Contactlab Marketing Cloud</MjmlTitle>
      <MjmlPreview>{i18n.t('previewText')}</MjmlPreview>
      <MjmlFont
        name="Montserrat"
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
      />
      <MjmlAttributes>
        <MjmlAll font-family="Montserrat, Helvetica, Arial, sans-serif" />
      </MjmlAttributes>

      <MjmlBreakpoint width={400} />

      <MjmlStyle inline>{`
        .body-section {
          -webkit-box-shadow: 0 1px 3px 0 rgba(0, 20, 32, 0.12);
          -moz-box-shadow: 0 1px 3px 0 rgba(0, 20, 32, 0.12);
          box-shadow: 0 1px 3px 0 rgba(0, 20, 32, 0.12);
        }
      `}</MjmlStyle>
    </MjmlHead>
  );
}
