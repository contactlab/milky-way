Montserrat is the standard typeface used on the Contactlab Marketing Cloud platform, providing consistent look and feel among all application.

# Installation

For most projects (and to take advantage of Design System's customization features), you'll want to install Contactlab Design Token via npm.

```code
lang: sh
---
# Using npm
npm install @contactlab/ds-tokens

# Using Yarn
yarn add @contactlab/ds-tokens
```

---

# Getting Started

### Using with PostCSS

If you're using [postcss-import](https://github.com/postcss/postcss-import) (or a tool that uses it under the hood), import colors source:

```code
lang: css
---
@import '@contactlab/ds-tokens/lib/styles/typography/index.pcss';
```

### Using with Webpack + Less.js

```hint
Use Less.js >=v3.5.0
```

If you're using Webpack and Less.js you can install [**less-loader**](https://github.com/webpack-contrib/less-loader). Webpack provides an advanced mechanism to resolve files from `node_modules` folder:

```code
lang: less
---
@import '~@contactlab/ds-tokens/lib/styles/typography/index.less';
```

---

### Using via CDN

To pull in Contactlab Design Tokens for quick demos or prototyping, grab the latest build via CDN:

```code
lang: html
---
<link
  rel="stylesheet"
  href="https://unpkg.com/@contactlab/ds-tokens@latest/lib/styles/typography/index.css"
/>
```

---

# Specimens

```hint
All the dimensions expressed in rem unit must be related to the font-size of the root element of 62.5%.
The magic formula: **1rem = 10px; 10px / 16px = 62.5%**. [More info on this topic](https://snook.ca/archives/html_and_css/font-size-with-rem).
```

### Heading

```table|span-6
columns:
  - Type
  - Font Family
  - Font Size
  - Line Height
  - Margin Bottom
  - Color
  - CSS Usage
rows:
  - Type: Hero Text
    Font Family: 'Montserrat, sans-serif'
    Font Size: 6.4rem
    Line Height: 1
    Margin Bottom: 2.6rem
    Color: '`#394e5c` (base800)'
    CSS Usage: '`.hero-text`'
  - Type: Heading 1
    Font Family: 'Montserrat, sans-serif'
    Font Size: 3.8rem
    Line Height: 1.2
    Margin Bottom: 2.4rem
    Color: '`#394e5c` (base800)'
    CSS Usage: global
  - Type: Heading 2
    Font Family: 'Montserrat, sans-serif'
    Font Size: 3.2rem
    Line Height: 1.2
    Margin Bottom: 2.2rem
    Color: '`#394e5c` (base800)'
    CSS Usage: global
  - Type: Heading 3
    Font Family: 'Montserrat, sans-serif'
    Font Size: 2.8rem
    Line Height: 1.2
    Margin Bottom: 2rem
    Color: '`#394e5c` (base800)'
    CSS Usage: global
  - Type: Heading 4
    Font Family: 'Montserrat, sans-serif'
    Font Size: 2.4rem
    Line Height: 1.4
    Margin Bottom: 1.8rem
    Color: '`#394e5c` (base800)'
    CSS Usage: global
  - Type: Heading 5
    Font Family: 'Montserrat, sans-serif'
    Font Size: 2.2rem
    Line Height: 1.4
    Margin Bottom: 1.6rem
    Color: '`#394e5c` (base800)'
    CSS Usage: global
  - Type: Heading 6
    Font Family: 'Montserrat, sans-serif'
    Font Size: 2rem
    Line Height: 1.4
    Margin Bottom: 1.4rem
    Color: '`#394e5c` (base800)'
    CSS Usage: global
```

### Sub-Heading

```table|span-6
columns:
  - Type
  - Font Family
  - Font Size
  - Line Height
  - Margin Bottom
  - Color
  - CSS Usage
rows:
  - Type: Sub-Heading 1
    Font Family: 'Montserrat, sans-serif'
    Font Size: 2.2rem
    Line Height: 1.3
    Margin Bottom: 1.6rem
    Color: '`#576e7d` (base700)'
    CSS Usage: '`.subheading-1`'
  - Type: Sub-Heading 2
    Font Family: 'Montserrat, sans-serif'
    Font Size: 2rem
    Line Height: 1.3
    Margin Bottom: 1.4rem
    Color: '`#576e7d` (base700)'
    CSS Usage: '`.subheading-2`'
  - Type: Sub-Heading 3
    Font Family: 'Montserrat, sans-serif'
    Font Size: 1.8rem
    Line Height: 1.3
    Margin Bottom: 1.2rem
    Color: '`#576e7d` (base700)'
    CSS Usage: '`.subheading-3`'
```

### Paragraphs

```table|span-6
columns:
  - Type
  - Font Family
  - Font Size
  - Line Height
  - Margin Bottom
  - Color
  - CSS Usage
rows:
  - Type: Body Copy
    Font Family: 'Montserrat, sans-serif'
    Font Size: 1.4rem
    Line Height: 1.5
    Margin Bottom: 1.4rem
    Color: '`#001420` (base900)'
    CSS Usage: global
  - Type: Small
    Font Family: 'Montserrat, sans-serif'
    Font Size: 1.2rem
    Line Height: 1.4
    Margin Bottom: '`none`'
    Color: '`#001420` (base900)'
    CSS Usage: global
```
