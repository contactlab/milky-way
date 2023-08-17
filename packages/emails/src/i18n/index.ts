import Polyglot from 'node-polyglot';
import {EN} from './en-EN';
import {IT} from './it-IT';

export type Lang = 'en' | 'it';
export type I18n = Polyglot;

export const i18n = (lang: Lang = 'it'): Polyglot =>
  new Polyglot({
    phrases: lang === 'it' ? IT : EN,
    locale: lang
  });
