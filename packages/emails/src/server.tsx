import {readFileSync} from 'fs';
import {join} from 'path';
import consola from 'consola';
import express from 'express';
import {render} from 'mjml-react';
import * as React from 'react';
import {PUBLIC_DIR, APP_PORT, MJML_OPTIONS} from './config';
import {getData} from './data/helpers';
import {i18nBehaviour, LangType} from './i18n/helpers';
import {Mail, MailSuite, MailData, MailType, MailTypes} from './templates';

const app = express();

(function run(templates: MailTypes, data: MailData): void {
  for (const template of templates) {
    bindEmail({template, data, lang: 'it'});
    bindEmail({template, data, lang: 'en'});
  }

  bindIndex();

  app.listen(APP_PORT, () => consola.info(`Listening on port ${APP_PORT}!`));
})(MailSuite, getData());

interface BindEmailProps {
  template: MailType;
  data: MailData;
  lang: LangType;
}

function bindEmail({template, data, lang}: BindEmailProps): void {
  const layout = (
    <Mail type={template} data={data} i18n={i18nBehaviour(lang)} />
  );

  const route = `/${template}-${lang}`;

  app.get(route, (_, res) => {
    const {html} = render(layout, MJML_OPTIONS);
    res.send(html);
  });
}

function bindIndex(): void {
  app.get('/', (_, res) => {
    const index: string = readFileSync(
      join(PUBLIC_DIR, 'index.html')
    ).toString();
    res.send(index);
  });
}
