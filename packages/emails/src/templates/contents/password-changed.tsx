import * as React from 'react';
import {i18nType} from '../../i18n/helpers';
import {Text} from '../components/text';

interface PasswordChangedProps {
  firstName: string;
  username: string;
  i18n: i18nType;
}

export function PasswordChanged(props: PasswordChangedProps): JSX.Element {
  const {firstName, username, i18n} = props;

  return (
    <React.Fragment>
      <Text type="title">{i18n.t('passwordChanged.title')}</Text>

      <Text type="paragraph">
        {firstName === '' ? i18n.t('hello') : i18n.t('helloUser', {firstName})}
      </Text>

      <Text type="paragraph">
        {`${i18n.t('passwordChanged.opening')} `}
        <strong>{`${username} `}</strong>
        {`${i18n.t('passwordChanged.isChanged')} `}
      </Text>
    </React.Fragment>
  );
}
