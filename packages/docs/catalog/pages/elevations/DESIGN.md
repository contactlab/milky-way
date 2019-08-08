Elevation is the relative distance between two surfaces along the z-axis. In the Contactlab Marketing Cloud environment, virtual lights illuminate the UI and create sharper, directional shadows, called key shadows. Because shadows express the degree of elevation between surfaces, they must be used consistently throughout your product.

# Base Elevations

```html|span-3,no-source,plain,light
<div class="card">
  <p class="card__spec">z0</p>
  <code class="card__code">
    <strong>box-shadow:</strong>
    <span>none;</span>
  </code>
</div>
```

```html|span-3,no-source,plain,light
<div class="card card--z1">
  <p class="card__spec">z1</p>
  <code class="card__code">
    <strong>box-shadow:</strong>
    <span>0 1px 3px 0 rgba(0, 20, 32, 0.12);</span>
  </code>
</div>
```

```html|span-3,no-source,plain,light
<div class="card card--z2">
  <p class="card__spec">z2</p>
  <code class="card__code">
    <strong>box-shadow:</strong>
    <span>
      0 3px 6px 0 rgba(0, 20, 32, 0.04),
      <br />0 3px 6px 0 rgba(0, 20, 32, 0.12);
    </span>
  </code>
</div>
```

```html|span-3,no-source,plain,light
<div class="card card--z3">
  <p class="card__spec">z3</p>
  <code class="card__code">
    <strong>box-shadow:</strong>
    <span>
      0 6px 6px 0 rgba(0, 20, 32, 0.09),
      <br />0 10px 20px 0 rgba(0, 20, 32, 0.13);
    </span>
  </code>
</div>
```

```html|span-3,no-source,plain,light
<div class="card card--z4">
  <p class="card__spec">z4</p>
  <code class="card__code">
    <strong>box-shadow:</strong>
    <span>
      0 10px 10px 0 rgba(0, 20, 32, 0.05),
      <br />0 14px 28px 0 rgba(0, 20, 32, 0.16);
    </span>
  </code>
</div>
```

```html|span-3,no-source,plain,light
<div class="card card--z5">
  <p class="card__spec">z5</p>
  <code class="card__code">
    <strong>box-shadow:</strong>
    <span>
      0 19px 38px 0 rgba(0, 20, 32, 0.16),
      <br />0 15px 12px 0 rgba(0, 20, 32, 0.12);
    </span>
  </code>
</div>
```

---

# Accent Elevations

```html|span-3,no-source,plain,dark
<div class="card card--accent-z0">
  <p class="card__spec">z0</p>
  <code class="card__code">
    <strong>box-shadow:</strong>
    <span>none;</span>
  </code>
</div>
```

```html|span-3,no-source,plain,dark
<div class="card card--accent-z1">
  <p class="card__spec">z1</p>
  <code class="card__code">
    <strong>box-shadow:</strong>
    <span>0 1px 3px 0 rgba(3, 145, 236, 0.12);</span>
  </code>
</div>
```

```html|span-3,no-source,plain,dark
<div class="card card--accent-z2">
  <p class="card__spec">z2</p>
  <code class="card__code">
    <strong>box-shadow:</strong>
    <span>
      0 3px 6px 0 rgba(3, 145, 236, 0.04),
      <br />0 3px 6px 0 rgba(3, 145, 236, 0.12);
    </span>
  </code>
</div>
```

```html|span-3,no-source,plain,dark
<div class="card card--accent-z3">
  <p class="card__spec">z3</p>
  <code class="card__code">
    <strong>box-shadow:</strong>
    <span>
      0 6px 6px 0 rgba(3, 145, 236, 0.09),
      <br />0 10px 20px 0 rgba(3, 145, 236, 0.13);
    </span>
  </code>
</div>
```

```html|span-3,no-source,plain,dark
<div class="card card--accent-z4">
  <p class="card__spec">z4</p>
  <code class="card__code">
    <strong>box-shadow:</strong>
    <span>
      0 10px 10px 0 rgba(3, 145, 236, 0.05),
      <br />0 14px 28px 0 rgba(3, 145, 236, 0.16);
    </span>
  </code>
</div>
```

```html|span-3,no-source,plain,dark
<div class="card card--accent-z5">
  <p class="card__spec">z5</p>
  <code class="card__code">
    <strong>box-shadow:</strong>
    <span>
      0 19px 38px 0 rgba(3, 145, 236, 0.16),
      <br />0 15px 12px 0 rgba(3, 145, 236, 0.12);
    </span>
  </code>
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
