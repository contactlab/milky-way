/* eslint-disable no-console */

import {writeFileSync} from 'fs';
import {join} from 'path';
import {renderToMjml} from '@faire/mjml-react/utils/renderToMjml';
import mjml2html from 'mjml';
import {type Lang, i18n} from './i18n';
import {type Type, Mail, Suite} from './templates';

const run = (templates: Suite): void => {
  for (const template of templates) {
    writeHtml(template, 'it');

    writeHtml(template, 'en');
  }

  console.log('> Emails generated');
};

const writeHtml = (template: Type, lang: Lang): void => {
  const file = join('public', 'emails', `${template}-${lang}.html`);

  const {html} = mjml2html(
    renderToMjml(
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
      />
    ),
    {
      minify: false,
      validationLevel: 'soft'
    }
  );

  writeFileSync(file, html);
};

// --- Execute
run(Suite);
