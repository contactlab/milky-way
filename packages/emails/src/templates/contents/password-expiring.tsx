import {profilePageHref} from '../../config';
import {i18nType} from '../../i18n/helpers';
import {Button} from '../components/button';
import {Link} from '../components/link';
import {Text} from '../components/text';
import * as React from 'react';

interface PasswordExpiringProps {
  firstName: string;
  username: string;
  i18n: i18nType;
}

export function PasswordExpiring(props: PasswordExpiringProps): JSX.Element {
  const {firstName, username, i18n} = props;

  return (
    <React.Fragment>
      <Text type="title">{i18n.t('passwordExpiring.title')}</Text>

      <Text type="paragraph">
        {firstName === '' ? i18n.t('hello') : i18n.t('helloUser', {firstName})}
      </Text>

      <Text type="paragraph">
        {`${i18n.t('passwordExpiring.opening')} `}
        <strong>{`${username} `}</strong>
        {`${i18n.t('passwordExpiring.isExpiring')} `}
      </Text>

      <UpdatePassword i18n={i18n} />

      <Button href={profilePageHref}>{i18n.t('btnChangePassword')}</Button>
    </React.Fragment>
  );
}

interface UpdatePasswordProps {
  i18n: i18nType;
}

function UpdatePassword(props: UpdatePasswordProps): JSX.Element {
  const {i18n} = props;
  return (
    <Text type="paragraph">
      {`${i18n.t('passwordExpiring.updatePassword')} `}
      {`${i18n.t('passwordExpiring.userProfile')} `}
      {`${i18n.t('passwordExpiring.follow')} `}

      <Link href={i18n.t('passwordExpiring.passwordDocLink')} type="paragraph">
        {i18n.t('passwordExpiring.passwordDoc')}
      </Link>
    </Text>
  );
}
