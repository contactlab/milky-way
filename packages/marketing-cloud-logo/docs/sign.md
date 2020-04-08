[← Back](../README.md)

# \<clab-sign>

## Install

- **Script tag**

Put a script tag in the head of your `index.html` document:

```html
<script src="https://unpkg.com/@contactlab/marketing-cloud-logo/dist/clab-logo.js"></script>
```

- **Node Modules**

Run `npm install @contactlab/marketing-cloud-logo --save`.

Put a script tag in the head of your `index.html`:

```html
<script src="node_modules/@contactlab/marketing-cloud-logo/dist/clab-logo.js"></script>
```

## Usage

You can use the element anywhere in your HTML template, JSX, Pug etc.

[Check the browsers support](./browsers-support.md).

---

<img style="display:block;width:50px;margin-bottom:32px" src="../resources/svg/clab-sign.svg" />

```html
<clab-sign size="50px"></clab-sign>
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
      <td><code>'accent' | 'base' | 'light' | 'none'</code></td>
      <td><code>'accent'</code></td>
      <td>The color of the sign. The default is <code>'accent'</code>, equal to <code>#0391ec</code>. <a href="./color-schema.md" title="Color schema">Check the color schema</a>.</td>
    </tr>
  </tbody>
</table>
