[← Back](../README.md)

# \<clab-typo>

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

| Attribute  | Type                                                  | Default  | Description                                                                                                                                    |
| ---------- | ----------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| size       | `string`                                              | `'100%'` | The width of the component. Use a length in `px`, `rem`, `em`, `%` unit.                                                                       |
| type       | `'mc' \| 'explore' \| 'developer'`                    | `'mc'`   | Change the logo content. Choose between `MailUp CDP`, `Explore` and `Developer`.                                                               |
| compact    | `boolean`                                             | `false`  | Use the compact version of the MailUp CDP logo. <u>This attribute has effect only if you set the `type` attribute to `'mc'` (the default)</u>. |
| fill-color | `'accent' \| 'base' \| 'light' \| 'white' \| 'black'` | `'base'` | The color of the typography. The default is `'base'`, equal to `#464646`. [Check the color schema](./color-schema.md).                         |
