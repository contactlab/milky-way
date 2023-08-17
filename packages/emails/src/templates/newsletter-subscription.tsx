import * as React from 'react';
import {Button} from '../components/button';
import {Text} from '../components/text';
import {I18n} from '../i18n';

interface NewsletterSubscriptionProps {
  confirmationLink: string;
  i18n: I18n;
}

export const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = ({
  confirmationLink,
  i18n
}) => (
  <>
    <Text type="title">{i18n.t('newsletterSubscription.title')}</Text>

    <Text type="paragraph">
      {i18n.t('newsletterSubscription.greetingMessage')}
    </Text>

    <Text type="paragraph">
      {i18n.t('newsletterSubscription.confirmSubscription')}
    </Text>

    <Button href={confirmationLink}>
      {i18n.t('newsletterSubscription.activateSubscription')}
    </Button>

    <Text type="paragraph">
      {i18n.t('newsletterSubscription.wrongMessage')}
    </Text>
  </>
);
