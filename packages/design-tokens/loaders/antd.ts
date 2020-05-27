import * as colors from './colors';

/**
 * Customize the Ant UI Framework with Contactlab Marketing Cloud styles.
 * Use Webpack, less-loader and pass the following object literal
 * as a value of the `modifyVars` option.
 * More info: https://ant.design/docs/react/customize-theme#Customize-in-less-file
 */
export = {
  white: colors.white,
  black: colors.black,
  'heading-color': colors.base800,
  'highlight-color': colors.accent500,
  'info-color': colors.accent500,
  'item-hover-bg': colors.base100,
  'label-color': colors.base500,
  'link-color': colors.accent500,
  'normal-color': colors.base100,
  'primary-color': colors.accent500,
  'processing-color': colors.accent500,
  'success-color': colors.success,
  'text-color': colors.base900,
  'text-color-secondary': colors.base700,
  'disabled-color': colors.base300,
  'warning-color': colors.warning,
  'error-color': colors.error,
  'border-color-base': colors.base200,
  'border-radius-base': '4px',
  'select-item-selected-font-weight': 700,
  'select-item-selected-bg': colors.base200,
  'select-item-active-bg': colors.base100,
  'form-vertical-label-margin': '0',
  'form-vertical-label-padding': '0'
};
