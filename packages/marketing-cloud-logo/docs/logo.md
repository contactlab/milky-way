[← Back](../README.md)

# \<clab-logo>

## Install

You can use the Web Component in your HTML template, JSX, Pug etc. [Check the browsers support](./browsers-support.md).

Put the following scripts tag in the head of your document:

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@contactlab/marketing-cloud-logo/dist/esm/clab-logo.js"
></script>
```

## Usage

Drop this lines into your HTML document:

---

<img width="380px" src="../resources/svg/logo-mc-full.svg" />

```html
<clab-logo size="380px"></clab-logo>
```

---

<img width="240px" src="../resources/svg/logo-mc-compact.svg" />

```html
<clab-logo size="240px" compact></clab-logo>
```

---

<img width="190px" src="../resources/svg/logo-explore.svg" />

```html
<clab-logo size="190px" type="explore"></clab-logo>
```

---

<img width="210px" src="../resources/svg/logo-developer.svg" />

```html
<clab-logo size="210px" type="developer"></clab-logo>
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
      <td>fill-style</td>
      <td><code>'positive' | 'mono' | 'negative'</code></td>
      <td><code>'positive'</code></td>
      <td>The logo colors combination for usage with light or dark backgrounds.</td>
    </tr>
    <tr>
      <td>fill-color</td>
      <td><code>'accent' | 'base' | 'light' | 'white' | 'black'</code></td>
      <td><code>'black'</code></td>
      <td>The color of the logo. <u>This attribute has effect only if you set <code>fill-style</code> attribute to <code>'mono'</code></u>. The default is <code>'black'</code>, equal to <code>#000</code>. <a href="./color-schema.md" title="Color schema">Check the color schema</a>.</td>
    </tr>
  </tbody>
</table>
