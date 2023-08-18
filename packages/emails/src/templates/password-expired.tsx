import type {FC} from 'react';
import {Button} from '../components/button';
import {Link} from '../components/link';
import {Text} from '../components/text';
import type {I18n} from '../i18n';
import {LOGIN_HREF} from '../shared';

interface PasswordExpiredProps {
  firstName: string;
  username: string;
  i18n: I18n;
}

export const PasswordExpired: FC<PasswordExpiredProps> = ({
  firstName,
  username,
  i18n
}) => (
  <>
    <Text type="title">{i18n.t('passwordExpired.title')}</Text>

    <Text type="paragraph">
      {firstName === '' ? i18n.t('hello') : i18n.t('helloUser', {firstName})}
    </Text>

    <Text type="paragraph">
      {`${i18n.t('passwordExpired.opening')} `}
      <strong>{`${username} `}</strong>
      {`${i18n.t('passwordExpired.isExpired')} `}
    </Text>

    <Text type="paragraph">
      {`${i18n.t('passwordExpired.updatePassword')} `}
    </Text>

    <Button href={LOGIN_HREF}>{i18n.t('btnLogin')}</Button>

    <Text type="paragraph" fontWeight="700">
      {i18n.t('redemptionPeriod', {days: 30})}
    </Text>

    <Text type="paragraph">
      {`${i18n.t('passwordExpired.security')} `}
      <Link href={i18n.t('supportLink')} type="paragraph">
        {i18n.t('passwordExpired.support')}
      </Link>
      {i18n.locale() === 'en' ? ` ${i18n.t('passwordExpired.action')}` : null}
    </Text>
  </>
);
