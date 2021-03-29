import {MjmlColumn, MjmlSection} from 'mjml-react';
import * as React from 'react';
import {i18nType} from '../../i18n/helpers';
import {cardBgColor, sectionPadding, borderRadius} from '../commons/attributes';
import {PasswordChanged} from '../contents/password-changed';
import {PasswordExpired} from '../contents/password-expired';
import {PasswordExpiring} from '../contents/password-expiring';
import {PasswordRecovery} from '../contents/password-recovery';
import {PasswordReset} from '../contents/password-reset';
import {Pin} from '../contents/pin';
import {Welcome} from '../contents/welcome';
import {Text} from './text';

export const ContentSuite = [
  'password-changed',
  'password-expired',
  'password-expiring',
  'password-recovery',
  'password-reset',
  'pin',
  'welcome'
] as const;

export type ContentTypes = typeof ContentSuite;

export type ContentType = ContentTypes[number];

export interface ContentData {
  username?: string;
  password?: string;
  firstName?: string;
  pin?: string | number;
  recoveryLink?: string;
}

export interface ContentProps {
  type: ContentType;
  data: ContentData;
  i18n: i18nType;
}

export function Content(props: ContentProps): JSX.Element {
  const {type, data, i18n} = props;
  return (
    <MjmlSection
      borderRadius={borderRadius}
      {...sectionPadding}
      backgroundColor={cardBgColor}>
      <MjmlColumn>
        {getContent(type, data, i18n)}
        <Text type="paragraph">{i18n.t('signature')}</Text>
      </MjmlColumn>
    </MjmlSection>
  );
}

function getContent(
  type: ContentType,
  data: ContentData,
  i18n: i18nType
): JSX.Element {
  const username: string =
    typeof data.username === 'undefined' ? 'n.d.' : data.username;

  const password: string =
    typeof data.password === 'undefined' ? 'n.d.' : data.password;

  const pin: string | number =
    typeof data.pin === 'undefined' ? 'n.d.' : data.pin;

  const recoveryLink: string =
    typeof data.recoveryLink === 'undefined' ? '' : data.recoveryLink;

  const firstName: string =
    typeof data.firstName === 'undefined' ? '' : data.firstName;

  switch (type) {
    case 'password-changed':
      return (
        <PasswordChanged
          firstName={firstName}
          username={username}
          i18n={i18n}
        />
      );

    case 'password-expired':
      return (
        <PasswordExpired
          firstName={firstName}
          username={username}
          i18n={i18n}
        />
      );

    case 'password-expiring':
      return (
        <PasswordExpiring
          firstName={firstName}
          username={username}
          i18n={i18n}
        />
      );

    case 'password-recovery':
      return (
        <PasswordRecovery
          firstName={firstName}
          recoveryLink={recoveryLink}
          i18n={i18n}
        />
      );

    case 'password-reset':
      return (
        <PasswordReset
          firstName={firstName}
          username={username}
          password={password}
          i18n={i18n}
        />
      );

    case 'pin':
      return (
        <Pin firstName={firstName} username={username} pin={pin} i18n={i18n} />
      );

    default:
    case 'welcome':
      return (
        <Welcome
          firstName={firstName}
          username={username}
          password={password}
          i18n={i18n}
        />
      );
  }
}
