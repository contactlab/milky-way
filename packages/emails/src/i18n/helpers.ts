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

function getDictionary(lang: LangType): {[key: string]: unknown} {
  const path = resolve(i18nDir, `${lang}-${lang.toUpperCase()}.json`);
  const dictionary = readFileSync(path, 'utf8');
  return JSON.parse(dictionary);
}
