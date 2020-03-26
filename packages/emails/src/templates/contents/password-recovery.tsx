import * as React from 'react';
import {i18nType} from '../../i18n/helpers';
import {Button} from '../components/button';
import {Link} from '../components/link';
import {Text} from '../components/text';

interface PasswordRecovery {
  firstName: string;
  recoveryLink: string;
  i18n: i18nType;
}

export function PasswordRecovery(props: PasswordRecovery): JSX.Element {
  const {firstName, recoveryLink, i18n} = props;

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
