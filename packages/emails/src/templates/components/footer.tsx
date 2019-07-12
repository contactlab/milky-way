import {i18nType} from '../../i18n/helpers';
import {bgColor, sectionPadding} from '../commons/attributes';
import {Link} from '../components/link';
import {Text} from '../components/text';
import {MjmlSection, MjmlColumn} from 'mjml-react';
import * as React from 'react';

interface FooterProps {
  i18n: i18nType;
}

export function Footer(props: FooterProps): JSX.Element {
  const {i18n} = props;

  return (
    <MjmlSection {...sectionPadding} backgroundColor={bgColor}>
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
          <Link href={i18n.t('exploreLink')} type="caption">
            {i18n.t('contactlab')}
          </Link>
        </Text>

        <Text type="caption" paddingTop={0} align="center">
          {i18n.t('address')}
        </Text>
      </MjmlColumn>
    </MjmlSection>
  );
}
