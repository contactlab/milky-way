import * as React from 'react';
import {Button} from '../components/button';
import {Link} from '../components/link';
import {Text} from '../components/text';
import {I18n} from '../i18n';

interface PasswordRecoveryProps {
  firstName: string;
  recoveryLink: string;
  i18n: I18n;
}

export const PasswordRecovery: React.FC<PasswordRecoveryProps> = ({
  firstName,
  recoveryLink,
  i18n
}) => (
  <>
    <Text type="title">{i18n.t('passwordRecovery.title')}</Text>

    <Text type="paragraph">
      {firstName === '' ? i18n.t('hello') : i18n.t('helloUser', {firstName})}
    </Text>

    <Text type="paragraph" paddingBottom={0}>
      {i18n.t('passwordRecovery.advice')}
    </Text>

    <Text type="paragraph" paddingTop={0}>
      {i18n.t('passwordRecovery.expireDate')}
    </Text>

    <Button href={recoveryLink}>
      {i18n.t('passwordRecovery.btnRecovery')}
    </Button>

    <Text type="paragraph">
      <Link href={i18n.t('supportLink')} type="paragraph">
        {i18n.t('support')}
      </Link>
      {` ${i18n.t('passwordRecovery.securityAdvice')}`}
    </Text>
  </>
);
