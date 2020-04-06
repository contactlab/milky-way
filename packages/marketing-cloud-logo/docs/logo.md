[← Back](../README.md)

# clab-mc-logo

## Install

- **Script tag**

Put a script tag in the head of your `index.html` document:

```html
<script src="https://unpkg.com/@contactlab/marketing-cloud-logo/dist/clab-mc-logo.js"></script>
```

- **Node Modules**

Run `npm install @contactlab/marketing-cloud-logo --save`.

Put a script tag in the head of your `index.html`:

```html
<script src="node_modules/@contactlab/marketing-cloud-logo/dist/clab-mc-logo.js"></script>
```

## Usage

You can use the element anywhere in your HTML template, JSX, Pug etc.

```html
<clab-mc-logo size="320px" fill-color="digital" column></clab-mc-logo>
```

> [Check the browsers support](./browsers-support.md).

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
      <td>column</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td>Place monogram and logotype on the horizontal or vertical axis</td>
    </tr>
    <tr>
      <td>fill-color</td>
      <td><code>'dark' | 'digital' | 'light' | 'silver'</code></td>
      <td><code>'none'</code></td>
      <td>The color of the component. The default is <code>'none'</code>, equal to <code>#000</code> (black). <a href="./color-schema.md" title="Color schema">Explore color schema</a></td>
    </tr>
    <tr>
      <td>size</td>
      <td><code>string</code></td>
      <td><code>'100%'</code></td>
      <td>The width of the component. Use a length in <code>px</code>, <code>rem</code>, <code>em</code>, <code>%</code> unit
      </td>
    <tr>
  </tbody>
</table>