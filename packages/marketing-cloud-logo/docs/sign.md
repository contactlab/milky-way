[← Back](../README.md)

# \<clab-sign>

## Install

You can use the Web Component in your HTML template, JSX, Pug etc. [Check the browsers support](./browsers-support.md).

Put the following scripts tag in the head of your document:

```html
<!-- for browsers where JavaScript Modules run natively  -->
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@contactlab/marketing-cloud-logo@2/dist/giotramu-logo/giotramu-logo.esm.js"
></script>

<!-- for the legacy browsers -->
<script
  nomodule
  src="https://cdn.jsdelivr.net/npm/@contactlab/marketing-cloud-logo@2/dist/giotramu-logo/giotramu-logo.js"
></script>
```

## Usage

Drop this lines into your HTML document:

---

<img width="80px" src="../resources/svg/clab-sign-accent.svg" />

```html
<clab-sign size="60px"></clab-sign>
```

---

<img width="80px" src="../resources/svg/clab-sign-base.svg" />

```html
<clab-sign size="60px" fill-color="base"></clab-sign>
```

---

## Attributes

<table>
  <thead>
    <tr>
      <th>Attribute</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  <tbody>
    <tr>
      <td>size</td>
      <td><code>string</code></td>
      <td><code>'100%'</code></td>
      <td>The width of the component. Use a length in <code>px</code>, <code>rem</code>, <code>em</code>, <code>%</code> unit.</td>
    </tr>
    <tr>
      <td>fill-color</td>
      <td><code>'accent' | 'base' | 'light' | 'white' | 'black'</code></td>
      <td><code>'accent'</code></td>
      <td>The color of the sign. The default is <code>'accent'</code>, equal to <code>#0391ec</code>. <a href="./color-schema.md" title="Color schema">Check the color schema</a>.</td>
    </tr>
  </tbody>
</table>
