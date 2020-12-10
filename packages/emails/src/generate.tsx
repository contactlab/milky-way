import {copyFile, existsSync, mkdirSync, writeFile} from 'fs';
import {join} from 'path';
import consola from 'consola';
import {render} from 'mjml-react';
import * as React from 'react';
import {ROOT_DIR, PUBLIC_DIR, MJML_OPTIONS} from './config';
import {getData} from './data/helpers';
import {i18nBehaviour, LangType} from './i18n/helpers';
import {Mail, MailData, MailSuite, MailType, MailTypes} from './templates';

(function run(templates: MailTypes, data: MailData): void {
  const target = join(ROOT_DIR, 'dist');

  createDistFolder();
  copyIndex(join(target));

  for (const template of templates) {
    writeHtml({filename: template, data, lang: 'it', target});
    writeHtml({filename: template, data, lang: 'en', target});
  }

  consola.success('Dist folder ready!');
})(MailSuite, getData());

function createDistFolder(): void {
  const dir = join(ROOT_DIR, 'dist');

  if (existsSync(dir)) {
    return;
  }

  mkdirSync(dir);
  consola.success('Dist folder created!');
}

function copyIndex(target: string): void {
  const source = join(PUBLIC_DIR, 'index.html');
  const destination = join(target, 'index.html');

  copyFile(source, destination, err => {
    if (err) {
      throw err;
    }

    consola.success('"index.html" file copied!');
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
  const file = join(target, `${filename}-${lang}.html`);
  const layout = grabLayout({template: filename, data, lang});

  writeFile(file, layout, err => {
    if (err) {
      throw err;
    }
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
    MJML_OPTIONS
  );

  return html;
}
