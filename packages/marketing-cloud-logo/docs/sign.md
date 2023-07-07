[← Back](../README.md)

# \<clab-sign>

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

| Attribute  | Type                                                  | Default    | Description                                                                                                        |
| ---------- | ----------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------ |
| size       | `string`                                              | `'100%'`   | The width of the component. Use a length in `px`, `rem`, `em`, `%` unit.                                           |
| fill-color | `'accent' \| 'base' \| 'light' \| 'white' \| 'black'` | `'accent'` | The color of the sign. The default is `'accent'`, equal to `#1890ff`. [Check the color schema](./color-schema.md). |
