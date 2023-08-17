import * as React from 'react';
import {Button} from '../components/button';
import {Link} from '../components/link';
import {Text} from '../components/text';
import {I18n} from '../i18n';

interface PasswordExpiringProps {
  firstName: string;
  username: string;
  i18n: I18n;
}

export const PasswordExpiring: React.FC<PasswordExpiringProps> = ({
  firstName,
  username,
  i18n
}) => (
  <>
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

    <Button href="https://mc.contactlab.it/#/profile">
      {i18n.t('btnChangePassword')}
    </Button>
  </>
);

interface UpdatePasswordProps {
  i18n: I18n;
}

const UpdatePassword: React.FC<UpdatePasswordProps> = ({i18n}) => (
  <Text type="paragraph">
    {`${i18n.t('passwordExpiring.updatePassword')} `}
    {`${i18n.t('passwordExpiring.userProfile')} `}
    {`${i18n.t('passwordExpiring.follow')} `}

    <Link href={i18n.t('passwordExpiring.passwordDocLink')} type="paragraph">
      {i18n.t('passwordExpiring.passwordDoc')}
    </Link>
  </Text>
);
