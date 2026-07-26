# CSS Typography: Font Style

> *"The **`font-style`** property controls the appearance of text by applying styles such as italics. It is commonly used to emphasize words, titles, quotations, and the names of authors or creators."*

---

# What is `font-style`?

The **`font-style`** property specifies whether text is displayed in its **normal** form or in **italics**.

Unlike **`font-weight`**, which changes the thickness of text, **`font-style`** changes the **shape** of the characters.

### Syntax

```css
selector {
    font-style: value;
}
```

---

# Common Values

| Value     | Description                                                    |
| --------- | -------------------------------------------------------------- |
| `normal`  | Displays text normally (default)                               |
| `italic`  | Displays text in italics                                       |
| `oblique` | Slants the text (similar to italics, if supported by the font) |

---

# Default Value

If no `font-style` is specified, browsers automatically use:

```css
font-style: normal;
```

This displays text using the font's regular style.

---

# Using Italics

The **`italic`** value displays text using the font's italic version.

### Example

```css
h3 {
    font-style: italic;
}
```

### Result

```text
Normal Text

Italic Text
```

Italic text is commonly used for:

* Book titles
* Movie titles
* Foreign words
* Scientific names
* Author or creator names
* Emphasized words

---

# Example

```css
.author {
    font-style: italic;
}
```

```html
<p class="author">Claude Garamond</p>
```

**Output**

*Claude Garamond*

---

# Course Exercise

The webpage contains three font cards:

* Garamond
* Helvetica
* Space Mono

Each card displays the creator's name.

To italicize every creator's name, apply the following CSS:

```css
.font-card .creator {
    font-style: italic;
}
```

### Result

Before

```text
Claude Garamond
Max Miedinger
Colophon Foundry
```

After

```text
Claude Garamond
Max Miedinger
Colophon Foundry
```

*(Displayed in italics.)*

---

# How `font-style` Works

```text
HTML Element
      │
      ▼
font-style
      │
      ├── normal
      ├── italic
      └── oblique
      │
      ▼
Rendered Text
```

---

# `italic` vs `oblique`

Although they appear similar, they are not identical.

### `italic`

Uses the font's **designed italic typeface**.

```css
font-style: italic;
```

---

### `oblique`

Artificially slants the regular font if a true italic version isn't available.

```css
font-style: oblique;
```

Many fonts support `italic`, while some browsers simulate the appearance using `oblique`.

---

# Real-World Examples

### Italicize an Author

```css
.author {
    font-style: italic;
}
```

---

### Italicize a Quote

```css
blockquote {
    font-style: italic;
}
```

---

### Reset Text to Normal

```css
span {
    font-style: normal;
}
```

---

# Best Practices

✅ Use italics sparingly to emphasize important information.

✅ Italicize names of authors, artists, and font creators when appropriate.

✅ Use italics for titles of books, films, and publications.

✅ Maintain consistency throughout your website.

---

# Common Mistakes

### ❌ Confusing `font-style` with `font-weight`

```css
font-style: italic;
```

Changes the **shape** of the text.

---

```css
font-weight: bold;
```

Changes the **thickness** of the text.

These properties control different aspects of typography.

---

### ❌ Overusing Italics

Applying italics to large blocks of text can reduce readability.

Instead, reserve italics for:

* Emphasis
* Titles
* Names
* Citations
* Creator information

---

# Quick Reference

| Property     | Purpose                        |
| ------------ | ------------------------------ |
| `font-style` | Controls the style of the text |
| `normal`     | Default text appearance        |
| `italic`     | Uses the font's italic version |
| `oblique`    | Slants the regular font        |

---

# Comparison

| Property      | Changes                  |
| ------------- | ------------------------ |
| `font-family` | Typeface                 |
| `font-size`   | Text size                |
| `font-weight` | Thickness                |
| `font-style`  | Shape (normal or italic) |

---

# Key Takeaways

* The **`font-style`** property controls whether text appears in its normal form or in italics.
* The default value is **`normal`**.
* The **`italic`** value uses the font's italic typeface when available.
* The **`oblique`** value slants the text and serves as an alternative when italic isn't supported.
* `font-style` is commonly used for emphasis, quotations, titles, and creator or author names.
* Use italics thoughtfully to improve readability and create visual emphasis without overwhelming the page.

---

> **Remember:** `font-style` changes **how** text looks (its shape), while `font-weight` changes **how thick** it appears. Combining these properties effectively helps create clear emphasis and professional typography.

