import * as React from 'react';
import {Link} from '../components/link';
import {Panel} from '../components/panel';
import {Text} from '../components/text';
import {I18n} from '../i18n';

interface PinProps {
  firstName: string;
  pin: string | number;
  username: string;
  i18n: I18n;
}

export const Pin: React.FC<PinProps> = ({firstName, pin, username, i18n}) => {
  const key = i18n.t('pin.pin');
  const value = String(pin);

  return (
    <>
      <Text type="title">{i18n.t('pin.title')}</Text>

      <Text type="paragraph">
        {firstName === '' ? i18n.t('hello') : i18n.t('helloUser', {firstName})}
      </Text>

      <Text type="paragraph">
        {i18n.t('pin.opening')} <strong>{username}</strong>.
      </Text>

      <Text type="paragraph">{i18n.t('pin.advice')}</Text>

      <Panel key={key} source={{key, value}} />

      <Text type="paragraph">
        {`${i18n.t('pin.guidelines')} `}

        <Link href={i18n.t('pin.docLink')} type="paragraph">
          {i18n.t('pin.doc')}
        </Link>
      </Text>
    </>
  );
};
