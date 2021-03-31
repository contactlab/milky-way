import {resolve} from 'path';
import {Mjml2HtmlOptions} from 'mjml-react';

// --- Environments
export const APP_PORT = 3333;
export const ROOT_DIR = resolve(__dirname, '..', '..');
export const DATA_DIR = resolve(ROOT_DIR, 'src', 'data');
export const I18N_DIR = resolve(ROOT_DIR, 'src', 'i18n');
export const PUBLIC_DIR = resolve(ROOT_DIR, 'public');

// --- Resources
export const LOGO_SRC =
  'https://cdn.jsdelivr.net/npm/@contactlab/marketing-cloud-logo@2/resources/png/logo-mc-full-positive-593x60.png';

// --- Links
export const LOGO_HREF = 'http://mc.contactlab.it';
export const LOGIN_HREF = 'https://login.contactlab.it';
export const PROFILE_PAGE_HREF = 'https://mc.contactlab.it/#/ac/profile';

// --- MJML
export const MJML_OPTIONS: Mjml2HtmlOptions = {
  beautify: true,
  minify: false,
  validationLevel: 'soft'
};
