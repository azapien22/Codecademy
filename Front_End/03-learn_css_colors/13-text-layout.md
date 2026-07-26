# CSS Typography: Text Layout

> *"Typography isn't just about choosing the right font—it's also about arranging text so that it is easy to read and visually appealing. CSS provides several properties that control the spacing, alignment, and overall layout of text."*

---

# Overview

After selecting a font, you can improve readability by controlling how text is spaced and positioned inside its container.

This lesson covers four important typography properties:

* `letter-spacing`
* `word-spacing`
* `line-height`
* `text-align`

Together, these properties help create clean, professional, and accessible web pages.

---

# 1. Letter Spacing

## What is `letter-spacing`?

The **`letter-spacing`** property controls the horizontal space **between individual characters**.

### Syntax

```css
selector {
    letter-spacing: value;
}
```

### Example

```css
p {
    letter-spacing: 2px;
}
```

### Result

```text
Normal
H e l l o

letter-spacing: 2px
H  e  l  l  o
```

Each character is separated by **2 pixels**.

---

## Common Units

| Unit  | Example  |
| ----- | -------- |
| `px`  | `2px`    |
| `em`  | `0.05em` |
| `rem` | `0.1rem` |

---

## When to Use

✅ Logos

✅ Headings

✅ Navigation menus

✅ Large uppercase text

Avoid using excessive letter spacing in long paragraphs because it can reduce readability.

---

# 2. Word Spacing

## What is `word-spacing`?

The **`word-spacing`** property controls the horizontal space **between words**.

### Syntax

```css
selector {
    word-spacing: value;
}
```

### Example

```css
h1 {
    word-spacing: 0.3em;
}
```

### Result

```text
Default
Hello World

word-spacing: 0.3em
Hello     World
```

The space between words increases while the spacing between individual letters remains unchanged.

---

## Why Use `em`?

Using **`em`** is recommended because it scales with the font size.

Example:

```css
word-spacing: 0.3em;
```

If the font size increases, the spacing automatically increases proportionally.

---

## Common Units

| Unit  | Recommended  |
| ----- | ------------ |
| `em`  | ✅ Yes        |
| `px`  | Sometimes    |
| `rem` | Occasionally |

---

# 3. Line Height

## What is `line-height`?

The **`line-height`** property controls the vertical spacing **between lines of text**.

This is one of the most important typography properties for readability.

### Syntax

```css
selector {
    line-height: value;
}
```

### Example

```css
p {
    line-height: 1.4;
}
```

---

## Visual Example

Without line-height

```text
This is line one.
This is line two.
This is line three.
```

With

```css
line-height: 1.8;
```

```text
This is line one.

This is line two.

This is line three.
```

The increased spacing makes paragraphs much easier to read.

---

## Unitless Values

Most developers prefer **unitless numbers**.

Example

```css
line-height: 1.4;
```

Why?

Because it automatically scales with the font size.

If

```css
font-size: 16px;
```

then

```css
line-height: 1.4;
```

produces

```text
16 × 1.4 = 22.4px
```

If the font size changes to **20px**, the line height automatically adjusts.

---

## Other Valid Values

```css
line-height: 24px;
line-height: 150%;
line-height: 2em;
```

Although these work, **unitless values are considered best practice** because they are responsive.

---

## Recommended Values

| Content   | Recommended |
| --------- | ----------- |
| Body text | `1.4 – 1.8` |
| Headings  | `1.1 – 1.3` |
| Captions  | `1.2 – 1.4` |

---

# 4. Text Alignment

## What is `text-align`?

The **`text-align`** property controls the horizontal alignment of text within its parent container.

### Syntax

```css
selector {
    text-align: value;
}
```

---

## Common Values

| Value     | Alignment                                |
| --------- | ---------------------------------------- |
| `left`    | Align left (default)                     |
| `right`   | Align right                              |
| `center`  | Center text                              |
| `justify` | Stretch text evenly across the container |

---

### Example

```css
h1 {
    text-align: right;
}
```

Output

```text
                     Welcome
```

---

### Center Alignment

```css
h1 {
    text-align: center;
}
```

```text
          Welcome
```

---

### Justified Paragraph

```css
p {
    text-align: justify;
}
```

The browser adjusts spacing so both the left and right edges of the paragraph align neatly.

---

# How Text Layout Works

```text
HTML Text
      │
      ▼
CSS Typography
      │
      ├── letter-spacing
      ├── word-spacing
      ├── line-height
      └── text-align
      │
      ▼
Readable Layout
```

---

# Complete Example

```css
body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.6;
}

h1 {
    text-align: center;
    letter-spacing: 2px;
    word-spacing: 0.2em;
}

p {
    line-height: 1.7;
}
```

---

# Best Practices

## Letter Spacing

✅ Use sparingly.

✅ Helpful for headings and logos.

❌ Avoid excessive spacing in paragraphs.

---

## Word Spacing

✅ Use small adjustments.

✅ Prefer **`em`** units.

❌ Large gaps make text harder to read.

---

## Line Height

✅ Use **unitless values** whenever possible.

✅ Keep body text between **1.4–1.8**.

✅ Increase spacing for long-form content.

---

## Text Alignment

✅ Left-align body text for readability.

✅ Center headings when appropriate.

✅ Use right alignment sparingly.

✅ Use `justify` carefully—it can create uneven spacing on narrow screens.

---

# Common Mistakes

## Too Much Letter Spacing

```css
letter-spacing: 12px;
```

Result

```text
H           e           l           l           o
```

This makes text difficult to read.

---

## Line Height Too Small

```css
line-height: 0.8;
```

Lines become crowded and uncomfortable to read.

---

## Line Height Too Large

```css
line-height: 3;
```

Large vertical gaps interrupt the reading flow.

---

# Quick Reference

| Property         | Purpose               | Recommended          |
| ---------------- | --------------------- | -------------------- |
| `letter-spacing` | Space between letters | Small values         |
| `word-spacing`   | Space between words   | `em` units           |
| `line-height`    | Space between lines   | Unitless (`1.4–1.8`) |
| `text-align`     | Horizontal alignment  | `left` for body text |

---

# Visual Summary

```text
Typography Layout
────────────────────────────────

Letters
H e l l o
↑
letter-spacing

Words
Hello     World
↑
word-spacing

Lines
Line One

Line Two

Line Three
↑
line-height

Alignment
Left
Center
Right
Justify
↑
text-align
```

---

# Key Takeaways

* **`letter-spacing`** adjusts the horizontal space between individual characters.
* **`word-spacing`** controls the space between words and is commonly measured in **`em`** units.
* **`line-height`** determines the vertical spacing between lines of text and is best specified as a **unitless value** for responsive typography.
* **`text-align`** controls how text is positioned horizontally inside its container.
* Proper text layout greatly improves readability, accessibility, and the overall user experience.
* Small, thoughtful adjustments to spacing often have a bigger impact than dramatic changes.

---

> **Remember:** Great typography is about more than choosing a beautiful font. Proper spacing and alignment make content easier to scan, more comfortable to read, and more enjoyable for users—turning good designs into exceptional ones.

