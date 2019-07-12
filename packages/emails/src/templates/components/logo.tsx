import {logoHref, logoSrc} from '../../config';
import {bgColor, logoSize, logoPadding} from '../commons/attributes';
import {MjmlSection, MjmlColumn, MjmlImage} from 'mjml-react';
import * as React from 'react';

export function Logo(): JSX.Element {
  return (
    <MjmlSection {...logoPadding} backgroundColor={bgColor}>
      <MjmlColumn>
        <MjmlImage
          align="center"
          alt="Contactlab Marketing Cloud logo"
          title="Contactlab Marketing Cloud"
          width={logoSize}
          href={logoHref}
          src={logoSrc}
          fluid-on-mobile
        />
      </MjmlColumn>
    </MjmlSection>
  );
}
