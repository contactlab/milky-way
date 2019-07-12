import {bgColor, bodyWidth} from './commons/attributes';
import {
  Content,
  ContentProps,
  ContentSuite,
  ContentData,
  ContentType,
  ContentTypes
} from './components/content';
import {Footer} from './components/footer';
import {Head} from './components/head';
import {Logo} from './components/logo';

import {Mjml, MjmlBody, MjmlWrapper} from 'mjml-react';
import * as React from 'react';

export const MailSuite = ContentSuite;

export type MailData = ContentData;
export type MailTypes = ContentTypes;
export type MailType = ContentType;

export function Mail(props: ContentProps): JSX.Element {
  const {type, data, i18n} = props;

  return (
    <Mjml>
      <Head i18n={i18n} />

      <MjmlBody width={bodyWidth} backgroundColor={bgColor}>
        <MjmlWrapper paddingBottom={0}>
          <Logo />
        </MjmlWrapper>

        <MjmlWrapper padding={0} cssClass="body-section">
          <Content type={type} data={data} i18n={i18n} />
        </MjmlWrapper>

        <MjmlWrapper paddingTop={8}>
          <Footer i18n={i18n} />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
}
