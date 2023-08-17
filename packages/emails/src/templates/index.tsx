import {Mjml, MjmlBody, MjmlColumn, MjmlSection, MjmlWrapper} from 'mjml-react';
import * as React from 'react';
import {Footer} from '../components/footer';
import {Head} from '../components/head';
import {Logo} from '../components/logo';
import {Text} from '../components/text';
import {I18n} from '../i18n';
import {BG_COLOR, BORDER_RADIUS, SECTION_PADDING, WHITE} from '../shared';
import {NewsletterSubscription} from './newsletter-subscription';
import {PasswordChanged} from './password-changed';
import {PasswordExpired} from './password-expired';
import {PasswordExpiring} from './password-expiring';
import {PasswordRecovery} from './password-recovery';
import {PasswordReset} from './password-reset';
import {Pin} from './pin';
import {Welcome} from './welcome';

const ND = 'n.d.';

export type Suite = typeof Suite;
export const Suite = [
  'newsletter-subscription',
  'password-changed',
  'password-expired',
  'password-expiring',
  'password-recovery',
  'password-reset',
  'pin',
  'welcome'
] as const;

interface Data {
  username?: string;
  password?: string;
  firstName?: string;
  pin?: string | number;
  recoveryLink?: string;
  confirmationLink?: string;
}

export type Type = Suite[number];

interface MailProps {
  type: Type;
  data: Data;
  i18n: I18n;
}

export const Mail: React.FC<MailProps> = (props: MailProps) => {
  const {type, data, i18n} = props;

  return (
    <Mjml>
      <Head i18n={i18n} />

      <MjmlBody width={460} backgroundColor={BG_COLOR}>
        <MjmlWrapper paddingBottom={0}>
          <Logo />
        </MjmlWrapper>

        <MjmlWrapper padding={0} cssClass="body-section">
          <Content type={type} data={data} i18n={i18n} />

          <MjmlSection
            borderRadius={BORDER_RADIUS}
            {...SECTION_PADDING}
            backgroundColor={WHITE}
          >
            <MjmlColumn>
              <Content {...props} />

              <Text type="paragraph">{i18n.t('signature')}</Text>
            </MjmlColumn>
          </MjmlSection>
        </MjmlWrapper>

        <MjmlWrapper paddingTop={8}>
          <Footer i18n={i18n} />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};

interface ContentProps extends MailProps {}

const Content: React.FC<ContentProps> = ({type, data, i18n}) => {
  const username = data.username ?? ND;
  const password: string = data.password ?? ND;
  const firstName: string = data.firstName ?? '';

  switch (type) {
    case 'newsletter-subscription':
      return (
        <NewsletterSubscription
          i18n={i18n}
          confirmationLink={data.confirmationLink ?? ''}
        />
      );

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
          recoveryLink={data.recoveryLink ?? ''}
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
        <Pin
          firstName={firstName}
          username={username}
          pin={data.pin ?? ND}
          i18n={i18n}
        />
      );

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
};
