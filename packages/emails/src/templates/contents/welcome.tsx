import {loginHref} from '../../config';
import {i18nType} from '../../i18n/helpers';
import {Button} from '../components/button';
import {Panel} from '../components/panel';
import {Text} from '../components/text';
import * as React from 'react';

export interface WelcomeProps {
  firstName: string;
  username: string;
  password: string;
  i18n: i18nType;
}

export function Welcome(props: WelcomeProps): JSX.Element {
  const {firstName, username, password, i18n} = props;
  const userInfo: Map<string, string> = new Map([
    [i18n.t('username'), username],
    [i18n.t('tempPassword'), password]
  ]);

  return (
    <React.Fragment>
      <Text type="title">
        {firstName === '' ? i18n.t('hello') : i18n.t('helloUser', {firstName})}
      </Text>

      <Text type="paragraph">{i18n.t('welcome.opening')}</Text>

      <Text type="paragraph">{i18n.t('welcome.suggestions')}</Text>

      <InfoPanel collection={userInfo} />

      <Button href={loginHref}>{i18n.t('btnLogin')}</Button>

      <Text type="paragraph">{i18n.t('securityAdvice')}</Text>
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
