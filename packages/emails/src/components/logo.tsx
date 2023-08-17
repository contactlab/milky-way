import {MjmlSection, MjmlColumn, MjmlImage} from 'mjml-react';
import * as React from 'react';
import {BG_COLOR} from '../shared';

export const Logo: React.FC = () => (
  <MjmlSection
    paddingTop={0}
    paddingRight={10}
    paddingBottom={25}
    paddingLeft={10}
    backgroundColor={BG_COLOR}
  >
    <MjmlColumn>
      <MjmlImage
        align="center"
        alt="MailUp CDP logo"
        title="MailUp CDP"
        width={300}
        href="http://mc.contactlab.it"
        src="https://cdn.jsdelivr.net/npm/@contactlab/marketing-cloud-logo/resources/png/logo-mc-full-positive-593x60.png"
        fluid-on-mobile
      />
    </MjmlColumn>
  </MjmlSection>
);
