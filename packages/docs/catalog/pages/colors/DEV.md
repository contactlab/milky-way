Base, accent, black, white and everything in between. Use the Contactlab Marketing Cloud color palette across the platform to ensure consistency, readability and appropriate branding.

# Installation

For most projects (and to take advantage of Design Tokens's customization features), you'll want to install MILKY-WAY via npm.

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
@import '@contactlab/ds-tokens/lib/styles/colors/index.css';
```

After that, you can use the **CSS Custom Properties** (or CSS variables) listed in the [Specimens section](#specimens).

### Using with Webpack + Less.js

```hint
Use Less.js >=v3.5.0
```

If you're using Webpack and Less.js you can install [less-loader](https://github.com/webpack-contrib/less-loader). Webpack provides an advanced mechanism to resolve files from `node_modules` folder:

```code
lang: less
---
@import '~@contactlab/ds-tokens/lib/styles/colors/index.less';
```

After that, you can use the **Less variables** listed in the [Specimens section](#specimens).

---

### Using via CDN

To pull in Contactlab Design Tokens **for quick demos or prototyping**, grab the latest build via CDN:

```code
lang: html
---
<link
  rel="stylesheet"
  href="https://unpkg.com/@contactlab/ds-tokens@latest/lib/styles/colors/index.css"
/>
```

After that, you can use the CSS Custom Properties (or CSS variables) listed in the [Specimens section](#specimens).
If you wanna use CSS classes instead of variables, use the utility file (available in `css`, `scss` and `less` extension):

```code
lang: html
---
<link
  rel="stylesheet"
  href="https://unpkg.com/@contactlab/ds-tokens@latest/lib/styles/utils/colors/index.css"
/>
```

The classes for the foreground and background colors are listed below.

---

# Specimens

### Core Colors

```table|span-6
columns:
  - Preview
  - Type
  - Depth
  - CSS Custom Property
  - Less Variable
  - Foreground (CSS Class)
  - Background (CSS Class)
rows:
  - Preview: '![#f7fcff](https://via.placeholder.com/40x25/f7fcff/f7fcff)'
    Type: base
    Depth: 100
    CSS Custom Property: '`var(--color-base100)`'
    Less Variable: '`@colors[base100]`'
    Foreground (CSS Class): '`color-base100`'
    Background (CSS Class): '`bgcolor-base100`'
  - Preview: '![#deebf4](https://via.placeholder.com/40x25/deebf4/deebf4)'
    Type: base
    Depth: 200
    CSS Custom Property: '`var(--color-base200)`'
    Less Variable: '`@colors[base200]`'
    Foreground (CSS Class): '`color-base200`'
    Background (CSS Class): '`bgcolor-base200`'
  - Preview: '![#c3d4e0](https://via.placeholder.com/40x25/c3d4e0/c3d4e0)'
    Type: base
    Depth: 300
    CSS Custom Property: '`var(--color-base300)`'
    Less Variable: '`@colors[base300]`'
    Foreground (CSS Class): '`color-base300`'
    Background (CSS Class): '`bgcolor-base300`'
  - Preview: '![#9cb0bf](https://via.placeholder.com/40x25/9cb0bf/9cb0bf)'
    Type: base
    Depth: 400
    CSS Custom Property: '`var(--color-base400)`'
    Less Variable: '`@colors[base400]`'
    Foreground (CSS Class): '`color-base400`'
    Background (CSS Class): '`bgcolor-base400`'
  - Preview: '![#7e96a8](https://via.placeholder.com/40x25/7e96a8/7e96a8)'
    Type: base
    Depth: 500
    CSS Custom Property: '`var(--color-base500)`'
    Less Variable: '`@colors[base500]`'
    Foreground (CSS Class): '`color-base500`'
    Background (CSS Class): '`bgcolor-base500`'
  - Preview: '![#5b768c](https://via.placeholder.com/40x25/5b768c/5b768c)'
    Type: base
    Depth: 600
    CSS Custom Property: '`var(--color-base600)`'
    Less Variable: '`@colors[base600]`'
    Foreground (CSS Class): '`color-base600`'
    Background (CSS Class): '`bgcolor-base600`'
  - Preview: '![#36546d](https://via.placeholder.com/40x25/36546d/36546d)'
    Type: base
    Depth: 700
    CSS Custom Property: '`var(--color-base700)`'
    Less Variable: '`@colors[base700]`'
    Foreground (CSS Class): '`color-base700`'
    Background (CSS Class): '`bgcolor-base700`'
  - Preview: '![#1d3344](https://via.placeholder.com/40x25/1d3344/1d3344)'
    Type: base
    Depth: 800
    CSS Custom Property: '`var(--color-base800)`'
    Less Variable: '`@colors[base800]`'
    Foreground (CSS Class): '`color-base800`'
    Background (CSS Class): '`bgcolor-base800`'
  - Preview: '![#001420](https://via.placeholder.com/40x25/001420/001420)'
    Type: base
    Depth: 900
    CSS Custom Property: '`var(--color-base900)`'
    Less Variable: '`@colors[base900]`'
    Foreground (CSS Class): '`color-base900`'
    Background (CSS Class): '`bgcolor-base900`'
  - Preview: '![#bae1f9](https://via.placeholder.com/40x25/bae1f9/bae1f9)'
    Type: accent
    Depth: 100
    CSS Custom Property: '`var(--color-accent100)`'
    Less Variable: '`@colors[accent100]`'
    Foreground (CSS Class): '`color-accent100`'
    Background (CSS Class): '`bgcolor-accent100`'
  - Preview: '![#8ccdf6](https://via.placeholder.com/40x25/8ccdf6/8ccdf6)'
    Type: accent
    Depth: 200
    CSS Custom Property: '`var(--color-accent200)`'
    Less Variable: '`@colors[accent200]`'
    Foreground (CSS Class): '`color-accent200`'
    Background (CSS Class): '`bgcolor-accent200`'
  - Preview: '![#5eb9f2](https://via.placeholder.com/40x25/5eb9f2/5eb9f2)'
    Type: accent
    Depth: 300
    CSS Custom Property: '`var(--color-accent300)`'
    Less Variable: '`@colors[accent300]`'
    Foreground (CSS Class): '`color-accent300`'
    Background (CSS Class): '`bgcolor-accent300`'
  - Preview: '![#30a5ef](https://via.placeholder.com/40x25/30a5ef/30a5ef)'
    Type: accent
    Depth: 400
    CSS Custom Property: '`var(--color-accent400)`'
    Less Variable: '`@colors[accent400]`'
    Foreground (CSS Class): '`color-accent400`'
    Background (CSS Class): '`bgcolor-accent400`'
  - Preview: '![#0391ec](https://via.placeholder.com/40x25/0391ec/0391ec)'
    Type: accent
    Depth: 500
    CSS Custom Property: '`var(--color-accent500)`'
    Less Variable: '`@colors[accent500]`'
    Foreground (CSS Class): '`color-accent500`'
    Background (CSS Class): '`bgcolor-accent500`'
  - Preview: '![#0072bc](https://via.placeholder.com/40x25/0072bc/0072bc)'
    Type: accent
    Depth: 600
    CSS Custom Property: '`var(--color-accent600)`'
    Less Variable: '`@colors[accent600]`'
    Foreground (CSS Class): '`color-accent600`'
    Background (CSS Class): '`bgcolor-accent600`'
  - Preview: '![#025d97](https://via.placeholder.com/40x25/025d97/025d97)'
    Type: accent
    Depth: 700
    CSS Custom Property: '`var(--color-accent700)`'
    Less Variable: '`@colors[accent700]`'
    Foreground (CSS Class): '`color-accent700`'
    Background (CSS Class): '`bgcolor-accent700`'
  - Preview: '![#02426c](https://via.placeholder.com/40x25/02426c/02426c)'
    Type: accent
    Depth: 800
    CSS Custom Property: '`var(--color-accent800)`'
    Less Variable: '`@colors[accent800]`'
    Foreground (CSS Class): '`color-accent800`'
    Background (CSS Class): '`bgcolor-accent800`'
  - Preview: '![#012841](https://via.placeholder.com/40x25/012841/012841)'
    Type: accent
    Depth: 900
    CSS Custom Property: '`var(--color-accent900)`'
    Less Variable: '`@colors[accent900]`'
    Foreground (CSS Class): '`color-accent900`'
    Background (CSS Class): '`bgcolor-accent900`'
```

### Fluo Colors

```table|span-6
columns:
  - Preview
  - Type
  - Depth
  - CSS Custom Property
  - Less Variable
  - Foreground (CSS Class)
  - Background (CSS Class)
rows:
  - Preview: '![#e9e8ff](https://via.placeholder.com/40x25/e9e8ff/e9e8ff)'
    Type: fluo-base
    Depth: 300
    CSS Custom Property: '`var(--color-fluo-base300)`'
    Less Variable: '`@colors[fluo-base300]`'
    Foreground (CSS Class): '`color-fluo-base300`'
    Background (CSS Class): '`bgcolor-fluo-base300`'
  - Preview: '![#b4afff](https://via.placeholder.com/40x25/b4afff/b4afff)'
    Type: fluo-base
    Depth: 600
    CSS Custom Property: '`var(--color-fluo-base600)`'
    Less Variable: '`@colors[fluo-base600]`'
    Foreground (CSS Class): '`color-fluo-base600`'
    Background (CSS Class): '`bgcolor-fluo-base600`'
  - Preview: '![#7168ff](https://via.placeholder.com/40x25/7168ff/7168ff)'
    Type: fluo-base
    Depth: 900
    CSS Custom Property: '`var(--color-fluo-base900)`'
    Less Variable: '`@colors[fluo-base900]`'
    Foreground (CSS Class): '`color-fluo-base900`'
    Background (CSS Class): '`bgcolor-fluo-base900`'
  - Preview: '![#e1f9ef](https://via.placeholder.com/40x25/e1f9ef/e1f9ef)'
    Type: fluo-accent
    Depth: 300
    CSS Custom Property: '`var(--color-fluo-accent300)`'
    Less Variable: '`@colors[fluo-accent300]`'
    Foreground (CSS Class): '`color-fluo-accent300`'
    Background (CSS Class): '`bgcolor-fluo-accent300`'
  - Preview: '![#9bebd0](https://via.placeholder.com/40x25/9bebd0/9bebd0)'
    Type: fluo-accent
    Depth: 600
    CSS Custom Property: '`var(--color-fluo-accent600)`'
    Less Variable: '`@colors[fluo-accent600]`'
    Foreground (CSS Class): '`color-fluo-accent600`'
    Background (CSS Class): '`bgcolor-fluo-accent600`'
  - Preview: '![#00c9bd](https://via.placeholder.com/40x25/00c9bd/00c9bd)'
    Type: fluo-accent
    Depth: 900
    CSS Custom Property: '`var(--color-fluo-accent900)`'
    Less Variable: '`@colors[fluo-accent900]`'
    Foreground (CSS Class): '`color-fluo-accent900`'
    Background (CSS Class): '`bgcolor-fluo-accent900`'
```

### Feedback and Neutral Colors

```table|span-6
columns:
  - Preview
  - Type
  - CSS Custom Property
  - Less Variable
  - Foreground (CSS Class)
  - Background (CSS Class)
rows:
  - Preview: '![#0391ec](https://via.placeholder.com/40x25/0391ec/0391ec)'
    Type: info
    CSS Custom Property: '`var(--color-info)`'
    Less Variable: '`@colors[info]`'
    Foreground (CSS Class): '`color-info`'
    Background (CSS Class): '`bgcolor-info`'
  - Preview: '![#53c518](https://via.placeholder.com/40x25/53c518/53c518)'
    Type: success
    CSS Custom Property: '`var(--color-success)`'
    Less Variable: '`@colors[success]`'
    Foreground (CSS Class): '`color-success`'
    Background (CSS Class): '`bgcolor-success`'
  - Preview: '![#ffb200](https://via.placeholder.com/40x25/ffb200/ffb200)'
    Type: warning
    CSS Custom Property: '`var(--color-warning)`'
    Less Variable: '`@colors[warning]`'
    Foreground (CSS Class): '`color-warning`'
    Background (CSS Class): '`bgcolor-warning`'
  - Preview: '![#fc192f](https://via.placeholder.com/40x25/fc192f/fc192f)'
    Type: error
    CSS Custom Property: '`var(--color-error)`'
    Less Variable: '`@colors[error]`'
    Foreground (CSS Class): '`color-error`'
    Background (CSS Class): '`bgcolor-error`'
  - Preview: '![#000](https://via.placeholder.com/40x25/000/000)'
    Type: black
    CSS Custom Property: '`var(--color-black)`'
    Less Variable: '`@colors[black]`'
    Foreground (CSS Class): '`color-black`'
    Background (CSS Class): '`bgcolor-black`'
  - Preview: '![#fff](https://via.placeholder.com/40x25/fff/fff)'
    Type: white
    CSS Custom Property: '`var(--color-white)`'
    Less Variable: '`@colors[white]`'
    Foreground (CSS Class): '`color-white`'
    Background (CSS Class): '`bgcolor-white`'
```
