import {readFileSync} from 'fs';
import {resolve} from 'path';
import express from 'express';
import {render, Mjml2HtmlOptions} from 'mjml-react';
import * as React from 'react';
import {getData} from './data/helpers';
import {i18nBehaviour, LangType} from './i18n/helpers';
import {Mail, MailSuite, MailData, MailType, MailTypes} from './templates';

const root = resolve(__dirname, '..');

const port = 3333;
const app = express();

const mjmlOptions: Mjml2HtmlOptions = {
  beautify: true,
  minify: false,
  validationLevel: 'soft'
};

run(MailSuite, getData());

function run(templates: MailTypes, data: MailData): void {
  for (const template of templates) {
    bindEmail({template, data, lang: 'it'});
    bindEmail({template, data, lang: 'en'});
  }

  bindIndex();

  // eslint-disable-next-line no-console
  app.listen(port, () => console.log(`Listening on port ${port}!`));
}

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
    const {html} = render(layout, mjmlOptions);
    res.send(html);
  });
}

function bindIndex(): void {
  app.get('/', (_, res) => {
    const index: string = readFileSync(
      resolve(root, 'public', 'index.html')
    ).toString();
    res.send(index);
  });
}
