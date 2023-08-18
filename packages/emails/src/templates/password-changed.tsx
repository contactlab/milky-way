import type {FC} from 'react';
import {Text} from '../components/text';
import type {I18n} from '../i18n';

interface PasswordChangedProps {
  firstName: string;
  username: string;
  i18n: I18n;
}

export const PasswordChanged: FC<PasswordChangedProps> = ({
  firstName,
  username,
  i18n
}) => (
  <>
    <Text type="title">{i18n.t('passwordChanged.title')}</Text>

    <Text type="paragraph">
      {firstName === '' ? i18n.t('hello') : i18n.t('helloUser', {firstName})}
    </Text>

    <Text type="paragraph">
      {`${i18n.t('passwordChanged.opening')} `}
      <strong>{`${username} `}</strong>
      {`${i18n.t('passwordChanged.isChanged')} `}
    </Text>
  </>
);
