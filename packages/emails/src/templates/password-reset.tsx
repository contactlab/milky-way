import type {FC} from 'react';
import {Button} from '../components/button';
import {Panel} from '../components/panel';
import {Text} from '../components/text';
import type {I18n} from '../i18n';
import {LOGIN_HREF} from '../shared';

interface PasswordResetProps {
  firstName: string;
  username: string;
  password: string;
  i18n: I18n;
}

export const PasswordReset: FC<PasswordResetProps> = ({
  firstName,
  username,
  password,
  i18n
}) => {
  const unameKey = i18n.t('username');
  const tmpPwdKey = i18n.t('tempPassword');

  return (
    <>
      <Text type="title">{i18n.t('passwordReset.title')}</Text>

      <Text type="paragraph">
        {firstName === '' ? i18n.t('hello') : i18n.t('helloUser', {firstName})}
      </Text>

      <Text type="paragraph">
        {i18n.t('passwordReset.opening')}
        <strong>{` ${username}`}</strong>.
      </Text>

      <Text type="paragraph">{i18n.t('passwordReset.suggestions')}</Text>

      <Panel key={unameKey} source={{key: unameKey, value: username}} />
      <Panel key={tmpPwdKey} source={{key: tmpPwdKey, value: password}} />

      <Button href={LOGIN_HREF}>{i18n.t('btnLogin')}</Button>

      <Text type="paragraph">{i18n.t('securityAdvice')}</Text>
    </>
  );
};
