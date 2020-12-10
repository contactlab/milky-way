import * as React from 'react';
import {LOGIN_HREF} from '../../config';
import {i18nType} from '../../i18n/helpers';
import {Button} from '../components/button';
import {Link} from '../components/link';
import {Text} from '../components/text';

interface PasswordExpiredProps {
  firstName: string;
  username: string;
  i18n: i18nType;
}

export function PasswordExpired(props: PasswordExpiredProps): JSX.Element {
  const {firstName, username, i18n} = props;

  return (
    <React.Fragment>
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

      <Text type="paragraph" fontWeight={700}>
        {i18n.t('redemptionPeriod', {days: 30})}
      </Text>

      <Text type="paragraph">
        {`${i18n.t('passwordExpired.security')} `}
        <Link href={i18n.t('supportLink')} type="paragraph">
          {i18n.t('passwordExpired.support')}
        </Link>
        {i18n.locale() === 'en' ? ` ${i18n.t('passwordExpired.action')}` : null}
      </Text>
    </React.Fragment>
  );
}
