# Design Tokens

Named entities that store visual-design info, in order to maintain a scalable, consistent system for user interface development.

[![NPM Package][npm-img]][npm-url]

### Table of Contents

- [Design Tokens](#design-tokens)
    - [Table of Contents](#table-of-contents)
    - [CDN Usage](#cdn-usage)
      - [What does it do?](#what-does-it-do)
    - [Install](#install)
    - [Webpack usage](#webpack-usage)
      - [Custom Media Queries](#custom-media-queries)
    - [Browsers support](#browsers-support)

### CDN Usage

Put the link tags in the head of your `index.html` document:

```html
<!-- The Montserrat Font (optional, you can import it from the Google Font CDN) -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@contactlab/ds-tokens@latest/css/montserrat.css"
/>

<!-- The CSS Custom Properties -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@contactlab/ds-tokens@latest/css/vars.css"
/>

<!-- The Common Contactlab Marketing Cloud Styles -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@contactlab/ds-tokens@latest/css/common.css"
/>
```

#### What does it do?

- Corrects bugs and common browser inconsistencies.
- The `montserrat.css` stylesheet provides the official font of the Contactlab products. If you like, you can import it from the Google Font CDN.
- The `common.css` stylesheet provides useful defaults to plain HTML documents.
- The `vars.css` stylesheet dispatches the Contactlab Marketing Cloud's [CSS Custom Properties (aka CSS variables)][custom-properties-url]. The SCSS, LESS and JavaScript version are provided.
- The `custom-media.css` stylesheet injects the Contactlab Marketing Cloud's [CSS Custom Media Queries][custom-mq-url]. The SCSS, LESS and JavaScript version are provided.

### Install

Install CSS-Kit and save them to your **package.json** `dependencies`:

```sh
npm install @contactlab/ds-tokens --save
```

### [Webpack][webpack-url] usage

Import the Design Tokens in CSS:

```css
/* The Montserrat Font (optional, you can import it from the Google Font CDN) */
@import '~@contactlab/ds-tokens/css/montserrat.css';

/* The CSS Custom Properties */
@import '~@contactlab/ds-tokens/css/vars.css';

/* The Common Contactlab Marketing Cloud Styles */
@import '~@contactlab/ds-tokens/css/common.css';
```

Import the Design Tokens in JavaScript:

```js
// The Montserrat Font (optional, you can import it from the Google Font CDN)
import '@contactlab/ds-tokens/css/montserrat.css';

// The CSS Custom Properties
import '@contactlab/ds-tokens/css/vars.css';

// The Common Contactlab Marketing Cloud Styles
import '@contactlab/ds-tokens/css/common.css';
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
      }
    ]
  }
};
```

#### Custom Media Queries

> **Caution:** The Custom Media Queries are a native feature of the CSS in the process of becoming a web standard. [Read the official specification draft][custom-mq-specification-url].

[![Custom Media Queries Status][cssdb-img]][cssdb-url]

You can consume the predefined [Custom Media Queries][custom-mq-url]. In Webpack bundler, import the `custom-media.css` as dependency.

Import Custom Media Queries in CSS:

```css
/* The Custom Media Queries */
@import '~@contactlab/ds-tokens/css/custom-media.css';
```

Import Custom Media Queries in JavaScript:

```js
// The Custom Media Queries
import '@contactlab/ds-tokens/css/custom-media.css';
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

### Browsers support

- Chrome & Chromium based browsers (last 3)
- Firefox (last 3)
- Firefox ESR
- Opera (last 3)
- Safari (last 3)
- iOS Safari (last 2)
- Edge (last 3)

<!--
  I M A G E S
-->
[cssdb-img]: https://cssdb.org/badge/custom-media-queries.svg
[npm-img]: https://img.shields.io/npm/v/@contactlab/ds-tokens?style=flat-square&colorA=001420&colorB=0391ec

<!--
  L I N K S
-->
[cssdb-url]: https://cssdb.org/#custom-media-queries
[custom-mq-url]: ./styles/custom-media.css
[custom-mq-specification-url]: http://drafts.csswg.org/mediaqueries-5/#custom-mq
[custom-properties-url]: ./styles/vars.css
[npm-url]: https://www.npmjs.com/package/@contactlab/ds-tokens
[postcss-config-url]: https://github.com/giotramu/postcss-config
[postcss-custom-media-url]: https://github.com/postcss/postcss-custom-media
[webpack-url]: https://webpack.js.org
