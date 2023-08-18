import {
  MjmlHead,
  MjmlTitle,
  MjmlAttributes,
  MjmlPreview,
  MjmlFont,
  MjmlStyle,
  MjmlAll,
  MjmlBreakpoint
} from '@faire/mjml-react';
import type {FC} from 'react';
import type {I18n} from '../i18n';

interface HeadProps {
  i18n: I18n;
}

export const Head: FC<HeadProps> = ({i18n}) => (
  <MjmlHead>
    <MjmlTitle>MailUp CDP</MjmlTitle>
    <MjmlPreview>{i18n.t('previewText')}</MjmlPreview>
    <MjmlFont
      name="Montserrat"
      href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
    />
    <MjmlAttributes>
      <MjmlAll font-family="Montserrat, Helvetica, Arial, sans-serif" />
    </MjmlAttributes>

    <MjmlBreakpoint width="400" />

    <MjmlStyle inline>{`
        .body-section {
          -webkit-box-shadow: 0 1px 3px 0 rgba(0, 20, 32, 0.12);
          -moz-box-shadow: 0 1px 3px 0 rgba(0, 20, 32, 0.12);
          box-shadow: 0 1px 3px 0 rgba(0, 20, 32, 0.12);
        }
      `}</MjmlStyle>
  </MjmlHead>
);
