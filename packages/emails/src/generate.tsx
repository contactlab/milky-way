import {copyFile, existsSync, mkdirSync, writeFile} from 'fs';
import {resolve} from 'path';
import {getData} from './data/helpers';
import {i18nBehaviour, LangType} from './i18n/helpers';
import {Mail, MailData, MailSuite, MailType, MailTypes} from './templates';
import {render, Mjml2HtmlOptions} from 'mjml-react';
import * as React from 'react';

const root = resolve(__dirname, '..');

const mjmlOptions: Mjml2HtmlOptions = {
  beautify: false,
  minify: true,
  validationLevel: 'soft'
};

run(MailSuite, getData());

function run(templates: MailTypes, data: MailData): void {
  const target = resolve(root, 'dist');

  createDistFolder();
  copyIndex(resolve(target));

  for (const template of templates) {
    writeHtml({filename: template, data, lang: 'it', target});
    writeHtml({filename: template, data, lang: 'en', target});
  }

  // eslint-disable-next-line no-console
  console.log('✔︎ dist folder ready!');
}

function createDistFolder(): void {
  const dir = resolve(root, 'dist');

  if (existsSync(dir)) return;

  mkdirSync(dir);

  // eslint-disable-next-line no-console
  console.log('✔︎ dist folder created!');
}

function copyIndex(target: string): void {
  const source = resolve(root, 'public', 'index.html');
  const destination = resolve(target, 'index.html');

  copyFile(source, destination, err => {
    if (err) throw err;

    // eslint-disable-next-line no-console
    console.log('✔︎ index.html file copied!');
  });
}

interface WriteHtmlProps {
  filename: MailType;
  data: MailData;
  lang: LangType;
  target: string;
}

function writeHtml(props: WriteHtmlProps): void {
  const {filename, data, lang, target} = props;
  const file: string = resolve(target, `${filename}-${lang}.html`);
  const layout = grabLayout({template: filename, data, lang});

  writeFile(file, layout, err => {
    if (err) throw err;
  });
}

interface GrabLayoutProps {
  template: MailType;
  data: MailData;
  lang: LangType;
}

function grabLayout(props: GrabLayoutProps): string {
  const {template, data, lang} = props;
  const {html} = render(
    <Mail type={template} data={data} i18n={i18nBehaviour(lang)} />,
    mjmlOptions
  );

  return html;
}
