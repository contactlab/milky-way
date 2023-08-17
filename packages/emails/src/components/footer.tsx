import {MjmlSection, MjmlColumn} from 'mjml-react';
import * as React from 'react';
import {I18n} from '../i18n';
import {BG_COLOR, SECTION_PADDING} from '../shared';
import {Link} from './link';
import {Text} from './text';

interface FooterProps {
  i18n: I18n;
}

export const Footer: React.FC<FooterProps> = ({i18n}) => (
  <MjmlSection {...SECTION_PADDING} backgroundColor={BG_COLOR}>
    <MjmlColumn>
      <Text type="caption" paddingTop={0} align="center">{`${i18n.t(
        'noReply'
      )} `}</Text>

      <Text type="caption" paddingBottom={0} align="center">
        {`${i18n.t('questions')} `}
        <Link href={i18n.t('supportLink')} type="caption">
          {i18n.t('contactUs')}
        </Link>
      </Text>

      <Text type="caption" paddingTop={0} align="center">
        {`${i18n.t('doc')} `}
        <Link href={i18n.t('exploreLink')} type="caption">
          {i18n.t('explore')}
        </Link>
      </Text>

      <Text type="caption" paddingBottom={0} align="center">
        {`${i18n.t('footnote')} `}
        <Link href={i18n.t('contactlabLink')} type="caption">
          {i18n.t('contactlab')}
        </Link>
      </Text>

      <Text type="caption" paddingTop={0} align="center">
        {i18n.t('address')}
      </Text>
    </MjmlColumn>
  </MjmlSection>
);
