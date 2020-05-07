[← Back](../README.md)

# \<clab-typo>

## Install

You can use the Web Component in your HTML template, JSX, Pug etc. [Check the browsers support](./browsers-support.md).

Put the following scripts tag in the head of your document:

```html
<!-- for browsers where JavaScript Modules run natively  -->
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@contactlab/marketing-cloud-logo@1.4/dist/giotramu-logo/giotramu-logo.esm.js"
></script>

<!-- for the legacy browsers -->
<script
  nomodule
  src="https://cdn.jsdelivr.net/npm/@contactlab/marketing-cloud-logo@1.4/dist/giotramu-logo/giotramu-logo.js"
></script>
```

## Usage

Drop this lines into your HTML document:

---

<img width="300px" src="../resources/svg/typo-mc-full.svg" />

```html
<clab-typo size="300px"></clab-typo>
```

---

<img width="180px" src="../resources/svg/typo-mc-compact.svg" />

```html
<clab-typo size="180px" compact></clab-typo>
```

---

<img width="120px" src="../resources/svg/typo-mc-explore.svg" />

```html
<clab-typo type="explore" size="120px"></clab-typo>
```

---

<img width="150px" src="../resources/svg/typo-mc-developer.svg" />

```html
<clab-typo type="developer" size="150px"></clab-typo>
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
      <td>type</td>
      <td><code>'mc' | 'explore' | 'developer'</code></td>
      <td><code>'mc'</code></td>
      <td>Change the logo content. Choose between <code>Contactactlab Marketing Cloud</code>, <code>MC Explore</code> and <code>MC Developer</code>.
      </td>
    </tr>
    <tr>
      <td>compact</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td>Use the compact version of the Contactlab Marketing Cloud logo. <u>This attribute has effect only if you set the <code>type</code> attribute to <code>'mc'</code> (the default)</u>.</td>
    </tr>
    <tr>
      <td>fill-color</td>
      <td><code>'accent' | 'base' | 'light' | 'white' | 'black'</code></td>
      <td><code>'base'</code></td>
      <td>The color of the typography. The default is <code>'base'</code>, equal to <code>#1d3344</code>. <a href="./color-schema.md" title="Color schema">Check the color schema</a>.</td>
    </tr>
  </tbody>
</table>
