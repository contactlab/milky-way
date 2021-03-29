import {readFileSync} from 'fs';
import {join} from 'path';
import Polyglot from 'node-polyglot';
import {I18N_DIR} from '../config';

export type LangType = 'en' | 'it';
export type i18nType = Polyglot;

export function i18nBehaviour(lang?: LangType): i18nType {
  return new Polyglot({
    phrases: getDictionary(typeof lang === 'undefined' ? 'it' : lang),
    locale: lang
  });
}

function getDictionary(lang: LangType): {[key: string]: unknown} {
  const path = join(I18N_DIR, `${lang}-${lang.toUpperCase()}.json`);
  const dictionary = readFileSync(path, 'utf8');
  return JSON.parse(dictionary);
}
