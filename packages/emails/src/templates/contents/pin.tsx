import {i18nType} from '../../i18n/helpers';
import {Link} from '../components/link';
import {Panel} from '../components/panel';
import {Text} from '../components/text';
import * as React from 'react';

interface DispatchPinProps {
  firstName: string;
  pin: string | number;
  username: string;
  i18n: i18nType;
}

export function Pin(props: DispatchPinProps): JSX.Element {
  const {firstName, pin, username, i18n} = props;
  const PIN = typeof pin === 'number' ? pin.toString() : pin;

  return (
    <React.Fragment>
      <Text type="title">{i18n.t('pin.title')}</Text>

      <Text type="paragraph">
        {firstName === '' ? i18n.t('hello') : i18n.t('helloUser', {firstName})}
      </Text>

      <Text type="paragraph">
        {i18n.t('pin.opening')} <strong>{username}</strong>.
      </Text>

      <Text type="paragraph">{i18n.t('pin.advice')}</Text>

      <InfoPanel collection={new Map([[i18n.t('pin.pin'), PIN]])} />

      <Text type="paragraph">
        {`${i18n.t('pin.guidelines')} `}
        <Link href={i18n.t('pin.docLink')} type="paragraph">
          {i18n.t('pin.doc')}
        </Link>
      </Text>
    </React.Fragment>
  );
}

interface InfoPanelProps {
  collection: Map<string, string>;
}

function InfoPanel(props: InfoPanelProps): JSX.Element {
  const {collection} = props;

  const items = Array.from(collection).map((item: string[]) => {
    const [key, value] = item;
    return <Panel key={key} source={{key, value}} />;
  });

  return <React.Fragment>{items}</React.Fragment>;
}
