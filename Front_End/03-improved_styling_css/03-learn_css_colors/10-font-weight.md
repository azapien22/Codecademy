# CSS Typography: Font Weight

> *"The **`font-weight`** property controls the thickness (boldness) of text. It allows you to emphasize important content, create visual hierarchy, and improve readability."*

---

# What is `font-weight`?

The **`font-weight`** property specifies how **bold** or **light** text appears.

It can be assigned using either:

* **Keyword values**
* **Numeric values**

### Syntax

```css
selector {
    font-weight: value;
}
```

---

# Keyword Values

CSS provides several predefined keyword values for `font-weight`.

| Value     | Description                                |
| --------- | ------------------------------------------ |
| `normal`  | Default font weight (equivalent to `400`)  |
| `bold`    | Bold text (equivalent to `700`)            |
| `lighter` | One weight lighter than the parent element |
| `bolder`  | One weight bolder than the parent element  |

### Example

```css
h1 {
    font-weight: bold;
}

p {
    font-weight: normal;
}
```

---

# Numeric Values

Instead of keywords, you can specify an exact numeric weight.

### Range

```text
1 ───────────────────────────────► 1000
Lightest                     Boldest
```

However, developers typically use **increments of 100**.

| Value | Common Name   |
| ----- | ------------- |
| `100` | Thin          |
| `200` | Extra Light   |
| `300` | Light         |
| `400` | Normal        |
| `500` | Medium        |
| `600` | Semi Bold     |
| `700` | Bold          |
| `800` | Extra Bold    |
| `900` | Black / Heavy |

---

# Example

```css
.left-section {
    font-weight: 700;
}

.right-section {
    font-weight: bold;
}
```

### Result

Both elements display **bold text** because:

```text
700 = bold
```

---

# Keyword vs Numeric Values

The following declarations produce the same result:

```css
font-weight: bold;
```

```css
font-weight: 700;
```

Likewise,

```css
font-weight: normal;
```

is equivalent to

```css
font-weight: 400;
```

---

# How Browsers Apply Font Weight

```text
HTML Text
      │
      ▼
font-weight
      │
      ├── normal (400)
      ├── bold (700)
      ├── lighter
      ├── bolder
      └── numeric value
      │
      ▼
Rendered Text
```

---

# Parent Inheritance

The values **`lighter`** and **`bolder`** are **relative** to the parent element.

### Example

```css
body {
    font-weight: 400;
}

h1 {
    font-weight: bolder;
}
```

The browser increases the heading's weight relative to its parent.

Likewise,

```css
p {
    font-weight: lighter;
}
```

renders lighter than the inherited font weight.

---

# Font Support

Not every font includes every font weight.

Some fonts only provide:

```text
400
700
```

Others may include:

```text
100
200
300
400
500
600
700
800
900
```

If a requested weight isn't available, the browser automatically selects the **closest supported weight**.

---

# Example Comparison

```css
h1 {
    font-weight: 300;
}

h2 {
    font-weight: 500;
}

h3 {
    font-weight: 700;
}

h4 {
    font-weight: 900;
}
```

### Visual Hierarchy

```text
300  → Light
500  → Medium
700  → Bold
900  → Black
```

As the numeric value increases, the text appears thicker and more prominent.

---

# Best Practices

✅ Use **`400`** (or `normal`) for standard body text.

✅ Use **`700`** (or `bold`) for headings and emphasis.

✅ Use numeric values when you need precise control.

✅ Verify which font weights your chosen font supports.

✅ Avoid making every element bold—reserve heavier weights for emphasis and hierarchy.

---

# Common Mistakes

### ❌ Assuming every font supports all weights

```css
font-weight: 200;
```

Some fonts don't include `200`, so the browser substitutes the closest available weight.

---

### ❌ Using bold everywhere

Too much bold text reduces emphasis and weakens the page's visual hierarchy.

Instead, reserve bold weights for:

* Headings
* Important information
* Calls to action

---

# Real-World Example

```css
body {
    font-weight: 400;
}

h1 {
    font-weight: 700;
}

strong {
    font-weight: 700;
}

small {
    font-weight: 300;
}
```

This creates a clear distinction between normal text, headings, emphasized text, and secondary information.

---

# Quick Reference

| Property      | Purpose                 |
| ------------- | ----------------------- |
| `font-weight` | Controls text thickness |
| `normal`      | Default weight (`400`)  |
| `bold`        | Bold text (`700`)       |
| `lighter`     | Lighter than parent     |
| `bolder`      | Bolder than parent      |
| `100–900`     | Numeric font weights    |

---

# Weight Scale

```text
100 ─ Thin
200 ─ Extra Light
300 ─ Light
400 ─ Normal
500 ─ Medium
600 ─ Semi Bold
700 ─ Bold
800 ─ Extra Bold
900 ─ Black
```

---

# Key Takeaways

* The **`font-weight`** property controls how thick or thin text appears.
* Font weight can be specified using **keywords** or **numeric values**.
* `normal` is equivalent to **`400`**.
* `bold` is equivalent to **`700`**.
* Numeric values generally range from **100** to **900**, in increments of **100**.
* Not all fonts support every weight, so always verify the available weights for the font you're using.
* Use font weight strategically to establish emphasis and visual hierarchy.

---

> **Remember:** Typography isn't just about choosing a font—it's also about choosing the **right weight**. Thoughtful use of `font-weight` helps users quickly identify important information and creates a polished, professional interface.

