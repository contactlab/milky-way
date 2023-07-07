import * as React from 'react';
import {i18nType} from '../../i18n/helpers';
import {Button} from '../components/button';
import {Text} from '../components/text';

interface NewsletterSubscription {
  confirmationLink: string;
  i18n: i18nType;
}

export function NewsletterSubscription(
  props: NewsletterSubscription
): JSX.Element {
  const {i18n} = props;

  return (
    <React.Fragment>
      <Text type="title">{i18n.t('newsletterSubscription.title')}</Text>

      <Text type="paragraph">
        {i18n.t('newsletterSubscription.greetingMessage')}
      </Text>

      <Text type="paragraph">
        {i18n.t('newsletterSubscription.confirmSubscription')}
      </Text>

      <Button href={props.confirmationLink}>
        {i18n.t('newsletterSubscription.activateSubscription')}
      </Button>

      <Text type="paragraph">
        {i18n.t('newsletterSubscription.wrongMessage')}
      </Text>
    </React.Fragment>
  );
}
