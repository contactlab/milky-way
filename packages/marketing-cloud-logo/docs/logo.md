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

| Attribute  | Type                                                  | Default      | Description                                                                                                                                                                                      |
| ---------- | ----------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| size       | `string`                                              | `'100%'`     | The width of the component. Use a length in `px`, `rem`, `em`, `%` unit.                                                                                                                         |
| type       | `'mc' \| 'explore' \| 'developer'`                    | `'mc'`       | Change the logo content. Choose between `MailUp CDP`, `Explore` and `Developer`.                                                                                                                 |
| compact    | `boolean`                                             | `false`      | Use the compact version of the MailUp CDP logo. **This attribute has effect only if you set the `type` attribute to `'mc'` (the default)**.                                                      |
| fill-style | `'positive' \| 'mono' \| 'negative'`                  | `'positive'` | The logo colors combination for usage with light or dark backgrounds.                                                                                                                            |
| fill-color | `'accent' \| 'base' \| 'light' \| 'white' \| 'black'` | `'black'`    | The color of the logo. **This attribute has effect only if you set `fill-style` attribute to `'mono'`**. The default is `'black'`, equal to `#000`. [Check the color schema](./color-schema.md). |
