Elevation is the relative distance between two surfaces along the z-axis. In the Contactlab Marketing Cloud environment, virtual lights illuminate the UI and create sharper, directional shadows, called key shadows. Because shadows express the degree of elevation between surfaces, they must be used consistently throughout your product.

# Base Elevations

```html|span-3,no-source,plain,light
<style>
  :root {
    --elevation-transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --elevation-z1: 0 1px 3px 0 rgba(0, 20, 32, 0.12);
    --elevation-z2: 0 3px 6px 0 rgba(0, 20, 32, 0.04), 0 3px 6px 0 rgba(0, 20, 32, 0.12);
    --elevation-z3: 0 6px 6px 0 rgba(0, 20, 32, 0.09), 0 10px 20px 0 rgba(0, 20, 32, 0.13);
    --elevation-z4: 0 10px 10px 0 rgba(0, 20, 32, 0.05), 0 14px 28px 0 rgba(0, 20, 32, 0.16);
    --elevation-z5: 0 19px 38px 0 rgba(0, 20, 32, 0.16), 0 15px 12px 0 rgba(0, 20, 32, 0.12);
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 95px;
    overflow: hidden;
    padding: 25px;
    font: bold 28px/1.4 Montserrat, sans-serif;
    color: #394e5c;
    background: #fff;
    transition: var(--elevation-transition);
  }
  .card__spec {
    display: flex;
    align-items: baseline;
    margin-bottom: 5px;
  }
  .card__code {
    display: flex;
    min-height: 35px;
    color: #adbdc8;
    font: normal 12px/1.4 'Fira Code', monospace;
  }
  .card__code > strong {
    margin-right: 5px;
  }
</style>
<div class="card">
  <p class="card__spec">z0</p>
  <code class="card__code"
    ><strong>box-shadow:</strong> <span>none;</span></code
  >
</div>
```

```html|span-3,no-source,plain,light
<style>
  .z1 {
    box-shadow: var(--elevation-z1);
  }
</style>
<div class="card z1">
  <p class="card__spec">z1</p>
  <code class="card__code"
    ><strong>box-shadow:</strong>
    <span>0 1px 3px 0 rgba(0, 20, 32, 0.12);</span></code
  >
</div>
```

```html|span-3,no-source,plain,light
<style>
  .z2 {
    box-shadow: var(--elevation-z2);
  }
</style>
<div class="card z2">
  <p class="card__spec">z2</p>
  <code class="card__code"
    ><strong>box-shadow:</strong>
    <span
      >0 3px 6px 0 rgba(0, 20, 32, 0.04),<br />0 3px 6px 0 rgba(0, 20, 32,
      0.12);</span
    ></code
  >
</div>
```

```html|span-3,no-source,plain,light
<style>
  .z3 {
    box-shadow: var(--elevation-z3);
  }
</style>
<div class="card z3">
  <p class="card__spec">z3</p>
  <code class="card__code"
    ><strong>box-shadow:</strong>
    <span
      >0 6px 6px 0 rgba(0, 20, 32, 0.09),<br />0 10px 20px 0 rgba(0, 20, 32,
      0.13);</span
    ></code
  >
</div>
```

```html|span-3,no-source,plain,light
<style>
  .z4 {
    box-shadow: var(--elevation-z4);
  }
</style>
<div class="card z4">
  <p class="card__spec">z4</p>
  <code class="card__code"
    ><strong>box-shadow:</strong>
    <span
      >0 10px 10px 0 rgba(0, 20, 32, 0.05),<br />0 14px 28px 0 rgba(0, 20, 32,
      0.16);</span
    ></code
  >
</div>
```

```html|span-3,no-source,plain,light
<style>
  .z5 {
    box-shadow: var(--elevation-z5);
  }
</style>
<div class="card z5">
  <p class="card__spec">z5</p>
  <code class="card__code"
    ><strong>box-shadow:</strong>
    <span
      >0 19px 38px 0 rgba(0, 20, 32, 0.16),<br />0 15px 12px 0 rgba(0, 20, 32,
      0.12);</span
    ></code
  >
</div>
```

---

# Accent Elevations

```html|span-3,no-source,plain,light
<style>
  :root {
    --elevation-accent-z1: 0 1px 3px 0 rgba(3, 145, 236, 0.12);
    --elevation-accent-z2: 0 3px 6px 0 rgba(3, 145, 236, 0.04), 0 3px 6px 0 rgba(3, 145, 236, 0.12);
    --elevation-accent-z3: 0 6px 6px 0 rgba(3, 145, 236, 0.09), 0 10px 20px 0
        rgba(3, 145, 236, 0.13);
    --elevation-accent-z4: 0 10px 10px 0 rgba(3, 145, 236, 0.05), 0 14px 28px 0
        rgba(3, 145, 236, 0.16);
    --elevation-accent-z5: 0 19px 38px 0 rgba(3, 145, 236, 0.16), 0 15px 12px 0
        rgba(3, 145, 236, 0.12);
  }
  div[class*='card--accent'] {
    color: #f7fcff;
    background-image: radial-gradient(
      ellipse at top center,
      #5eb9f2 -10%,
      #0391ec
    );
  }
  div[class*='card--accent'] .card__code {
    color: #bae1f9;
  }
</style>
<div class="card card--accent-z0">
  <p class="card__spec">z0</p>
  <code class="card__code"
    ><strong>box-shadow:</strong> <span>none;</span></code
  >
</div>
```

```html|span-3,no-source,plain,light
<style>
  .card--accent-z1 {
    box-shadow: var(--elevation-accent-z1);
  }
</style>
<div class="card card--accent-z1">
  <p class="card__spec">z1</p>
  <code class="card__code"
    ><strong>box-shadow:</strong>
    <span>0 1px 3px 0 rgba(3, 145, 236, 0.12);</span></code
  >
</div>
```

```html|span-3,no-source,plain,light
<style>
  .card--accent-z2 {
    box-shadow: var(--elevation-accent-z2);
  }
</style>
<div class="card card--accent-z2">
  <p class="card__spec">z2</p>
  <code class="card__code"
    ><strong>box-shadow:</strong>
    <span
      >0 3px 6px 0 rgba(3, 145, 236, 0.04),<br />0 3px 6px 0 rgba(3, 145, 236,
      0.12);</span
    ></code
  >
</div>
```

```html|span-3,no-source,plain,light
<style>
  .card--accent-z3 {
    box-shadow: var(--elevation-accent-z3);
  }
</style>
<div class="card card--accent-z3">
  <p class="card__spec">z3</p>
  <code class="card__code"
    ><strong>box-shadow:</strong>
    <span
      >0 6px 6px 0 rgba(3, 145, 236, 0.09),<br />0 10px 20px 0 rgba(3, 145, 236,
      0.13);</span
    ></code
  >
</div>
```

```html|span-3,no-source,plain,light
<style>
  .card--accent-z4 {
    box-shadow: var(--elevation-accent-z4);
  }
</style>
<div class="card card--accent-z4">
  <p class="card__spec">z4</p>
  <code class="card__code"
    ><strong>box-shadow:</strong>
    <span
      >0 10px 10px 0 rgba(3, 145, 236, 0.05),<br />0 14px 28px 0 rgba(3, 145,
      236, 0.16);</span
    ></code
  >
</div>
```

```html|span-3,no-source,plain,light
<style>
  .card--accent-z5 {
    box-shadow: var(--elevation-accent-z5);
  }
</style>
<div class="card card--accent-z5">
  <p class="card__spec">z5</p>
  <code class="card__code"
    ><strong>box-shadow:</strong>
    <span
      >0 19px 38px 0 rgba(3, 145, 236, 0.16),<br />0 15px 12px 0 rgba(3, 145,
      236, 0.12);</span
    ></code
  >
</div>
```

---

# Resources

```download
span: 2
title: Elevations Token
subtitle: .sketch
url: /lib/resources/elevations/token.sketch
```
