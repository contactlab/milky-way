# Design Tokens

Named entities that store visual-design info, in order to maintain a scalable, consistent system for user interface development.

[![NPM Package][npm-img]][npm-url]
![Bundle Size][bundle-size-img]

## Table of contents

- [Design Tokens](#design-tokens)
  - [CDN Usage](#cdn-usage)
  - [Install](#install)
  - [Webpack usage](#webpack-usage)
  - [CSS Custom Properties](./docs/custom-properties.md)
  - [CSS Custom Media](./docs/custom-media.md)
  - [Browsers support](#browsers-support)

## CDN Usage

Put the link tags in the head of your `index.html` document:

```html
<!-- CSS Sanitizer -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@contactlab/ds-tokens/styles/reset.css"
/>

<!-- Common Contactlab Marketing Cloud Styles -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@contactlab/ds-tokens/styles/common.css"
/>
```

#### What does it do?

- Normalizes styles for a wide range of elements.
- Corrects bugs and common browser inconsistencies.
- A separate stylesheet (`common.css`) provides useful and **personal** defaults to plain HTML documents. This file includes some [CSS Custom Properties (aka CSS variables)](./docs/custom-properties.md).

## Install

Install CSS-Kit and save them to your **package.json** `dependencies`:

```sh
npm install @contactlab/ds-tokens --save
```

## [Webpack][webpack-url] usage

Import css-kit in CSS:

```css
/* CSS Sanitizer */
@import '~@contactlab/ds-tokens/styles/reset.css';

/* Common Contactlab Marketing Cloud Styles */
@import '~@contactlab/ds-tokens/styles/common.css';
```

Alternatively, import css-kit in JS:

```js
// CSS Sanitizer
import '@contactlab/ds-tokens/styles/reset.css';

// Common Contactlab Marketing Cloud Styles
import '@contactlab/ds-tokens/styles/common.css';
```

In `webpack.config.js`, be sure to use the appropriate loaders:

```js
module.exports = {
  //--- other webpack configuration stuffs...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.woff(2)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
};
```

#### CSS Custom Media Queries

You can consume the predefined [CSS Custom Media Queries](./docs/custom-media.md). In Webpack bundler, import the `custom-media.css` as dependency.

Import Custom Media in CSS:

```css
/* Custom Media Queries */
@import '~@contactlab/ds-tokens/styles/custom-media.css';
```

Import Custom Media in JavaScript:

```js
// Custom Media Queries
import '@contactlab/ds-tokens/styles/custom-media.css';
```

In `webpack.config.js`, be sure to use the appropriate loaders and the [postcss-custom-media][postcss-custom-media-url] plugin:

```js
module.exports = {
  //--- other webpack configuration stuffs...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}},
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [postcssCustomMedia(/* pluginOptions */)]
            }
          }
        ]
      }
    ]
  }
};
```

Alternatively, you can use the following [postcss-config][postcss-config-url] in conjunction with postcss-loader or postcss-cli.

## Browsers support

- Chrome & Chromium based browsers (last 3)
- Firefox (last 3)
- Firefox ESR
- Opera (last 3)
- Safari (last 3)
- iOS Safari (last 2)
- Edge (last 3)

<!---
  B A D G E S
-->

[bundle-size-img]: https://badgen.net/badge/unpacked%20size/138kb/blue
[npm-img]: https://badgen.net/npm/v/@contactlab/ds-tokens?icon=npm&label=npm%20package

<!---
  L I N K S
-->

[npm-url]: https://www.npmjs.com/package/@contactlab/ds-tokens
[postcss-config-url]: https://github.com/giotramu/postcss-config
[postcss-custom-media-url]: https://github.com/postcss/postcss-custom-media
[webpack-url]: https://webpack.js.org
