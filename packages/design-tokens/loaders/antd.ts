import {
  black,
  white,
  accent500,
  base100,
  base200,
  base300,
  base500,
  base700,
  base800,
  base900,
  error,
  warning,
  success
} from './colors';

/**
 * Customize the Ant UI Framework with Contactlab Marketing Cloud styles.
 * Use Webpack, less-loader and pass the following object literal
 * as a value of the `modifyVars` option.
 * More info: https://ant.design/docs/react/customize-theme#Customize-in-less-file
 */
export = {
  white,
  black,
  'heading-color': base800,
  'highlight-color': accent500,
  'info-color': accent500,
  'item-hover-bg': base100,
  'label-color': base500,
  'link-color': accent500,
  'normal-color': base100,
  'primary-color': accent500,
  'processing-color': accent500,
  'success-color': success,
  'text-color': base900,
  'text-color-secondary': base700,
  'disabled-color': base300,
  'warning-color': warning,
  'error-color': error,
  'border-color-base': base200,
  'border-radius-base': '4px',
  'select-item-selected-font-weight': 700,
  'select-item-selected-bg': base200,
  'select-item-active-bg': base100,
  'form-vertical-label-margin': '0',
  'form-vertical-label-padding': '0'
};
