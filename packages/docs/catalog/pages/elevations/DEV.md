Elevation is the relative distance between two surfaces along the z-axis. In the Contactlab Marketing Cloud environment, virtual lights illuminate the UI and create sharper, directional shadows, called key shadows. Because shadows express the degree of elevation between surfaces, they must be used consistently throughout your product.

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
@import '@contactlab/ds-tokens/lib/styles/elevations/index.pcss';
```

After that, you can use the **CSS Custom Properties** (or CSS variables) listed in the [Specimens section](#specimens).

### Using with Webpack + Less.js

```hint
Use Webpack >= v4 and Less.js >=v3.5.0
```

If you're using Webpack and Less.js you can install [**less-loader**](https://github.com/webpack-contrib/less-loader). Webpack provides an advanced mechanism to resolve files from `node_modules` folder:

```code
lang: less
---
@import '~@contactlab/ds-tokens/lib/styles/elevations/index.less';
```

After that, you can use the **Less variables** listed in the [Specimens section](#specimens).

---

### Using via CDN

To pull in Contactlab Design Tokens for quick demos or prototyping, grab the latest build via CDN:

```code
lang: html
---
<link
  rel="stylesheet"
  href="https://unpkg.com/@contactlab/ds-tokens@latest/lib/styles/elevations/index.css"
/>
```

After that, you can use the CSS Custom Properties (or CSS variables) listed in the [Specimens section](#specimens).
If you wanna use CSS classes instead of variables, use the utility file (available in `css`, `pcss` and `less` extension):

```code
lang: html
---
<link
  rel="stylesheet"
  href="https://unpkg.com/@contactlab/ds-tokens@latest/lib/styles/utils/elevations/index.css"
/>
```

The classes for the elevations are listed below.

---

# Specimens

```table|span-6
columns:
  - Type
  - Depth
  - CSS Custom Property
  - Less Variable
  - CSS Class
rows:
  - Type: base
    Depth: z1
    CSS Custom Property: '`var(--elevation-z1)`'
    Less Variable: '`@elevations[z1]`'
    CSS Class: '`elevation-z1`'
  - Type: base
    Depth: z2
    CSS Custom Property: '`var(--elevation-z2)`'
    Less Variable: '`@elevations[z2]`'
    CSS Class: '`elevation-z2`'
  - Type: base
    Depth: z3
    CSS Custom Property: '`var(--elevation-z3)`'
    Less Variable: '`@elevations[z3]`'
    CSS Class: '`elevation-z3`'
  - Type: base
    Depth: z4
    CSS Custom Property: '`var(--elevation-z4)`'
    Less Variable: '`@elevations[z4]`'
    CSS Class: '`elevation-z4`'
  - Type: base
    Depth: z5
    CSS Custom Property: '`var(--elevation-z5)`'
    Less Variable: '`@elevations[z5]`'
    CSS Class: '`elevation-z5`'
  - Type: accent
    Depth: z1
    CSS Custom Property: '`var(--elevation-accent-z1)`'
    Less Variable: '`@elevations[accent-z1]`'
    CSS Class: '`elevation-accent-z1`'
  - Type: accent
    Depth: z2
    CSS Custom Property: '`var(--elevation-accent-z2)`'
    Less Variable: '`@elevations[accent-z2]`'
    CSS Class: '`elevation-accent-z2`'
  - Type: accent
    Depth: z3
    CSS Custom Property: '`var(--elevation-accent-z3)`'
    Less Variable: '`@elevations[accent-z3]`'
    CSS Class: '`elevation-accent-z3`'
  - Type: accent
    Depth: z4
    CSS Custom Property: '`var(--elevation-accent-z4)`'
    Less Variable: '`@elevations[accent-z4]`'
    CSS Class: '`elevation-accent-z4`'
  - Type: accent
    Depth: z5
    CSS Custom Property: '`var(--elevation-accent-z5)`'
    Less Variable: '`@elevations[accent-z5]`'
    CSS Class: '`elevation-accent-z5`'
```

To smooth the elevation's transition from one stage to another, you can use the CSS Custom Property **`--elevation-transition`**, the Less variable **`@elevations[transition]`** or the CSS class **`elevation-transition`**.
An example:

```code
lang: css
---
.my-fancy-box {
  box-shadow: var(--elevation-accent-z1);
  transition: var(--elevation-transition);
}

.my-fancy-box:hover {
  box-shadow: var(--elevation-accent-z2);
}
```
