/* eslint-disable no-console */

import {writeFileSync} from 'fs';
import {join} from 'path';
import {render} from 'mjml-react';
import * as React from 'react';
import {i18n, Lang} from './i18n';
import {Mail, Suite, Type} from './templates';

const run = (templates: Suite): void => {
  for (const template of templates) {
    writeHtml(template, 'it');

    writeHtml(template, 'en');
  }

  console.log('> Emails generated');
};

const writeHtml = (template: Type, lang: Lang): void => {
  const file = join('public', 'emails', `${template}-${lang}.html`);

  const {html} = render(
    <Mail
      type={template}
      data={{
        firstName: '${firstName}',
        username: '${username}',
        password: '${password}',
        pin: '${pin}',
        recoveryLink: '${changePasswordUrl}',
        confirmationLink: '${confirmationLink}'
      }}
      i18n={i18n(lang)}
    />,
    {
      minify: false,
      validationLevel: 'soft'
    }
  );

  writeFileSync(file, html);
};

// --- Execute
run(Suite);
