import {readFileSync} from 'fs';
import {resolve} from 'path';
import Polyglot from 'node-polyglot';

const root = resolve(__dirname, '..', '..');
const i18nDir = resolve(root, 'src', 'i18n');

export type LangType = 'en' | 'it';
export type i18nType = Polyglot;

export function i18nBehaviour(lang?: LangType): Polyglot {
  return new Polyglot({
    phrases: getDictionary(typeof lang === 'undefined' ? 'it' : lang),
    locale: lang
  });
}

function getDictionary(lang: LangType): {} {
  switch (lang) {
    case 'it':
      const itDictionary = readFileSync(
        resolve(i18nDir, 'it-IT.json')
      ).toString();
      return JSON.parse(itDictionary);

    case 'en':
      const enDictionary = readFileSync(
        resolve(i18nDir, 'en-EN.json')
      ).toString();
      return JSON.parse(enDictionary);
  }
}
