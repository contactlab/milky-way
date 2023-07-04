import {MjmlSection, MjmlColumn, MjmlImage} from 'mjml-react';
import * as React from 'react';
import {LOGO_HREF, LOGO_SRC} from '../../config';
import {bgColor, logoSize, logoPadding} from '../commons/attributes';

export function Logo(): JSX.Element {
  return (
    <MjmlSection {...logoPadding} backgroundColor={bgColor}>
      <MjmlColumn>
        <MjmlImage
          align="center"
          alt="MailUp CDP logo"
          title="MailUp CDP"
          width={logoSize}
          href={LOGO_HREF}
          src={LOGO_SRC}
          fluid-on-mobile
        />
      </MjmlColumn>
    </MjmlSection>
  );
}
