# CSS Typography: Font Family

> *"Typography is one of the most important aspects of web design. Choosing the right font family improves readability, accessibility, and the overall user experience."*

---

# What is `font-family`?

The **`font-family`** property specifies the typeface (font) used to display text.

### Syntax

```css
selector {
    font-family: FontName;
}
```

### Example

```css
h1 {
    font-family: Arial;
}
```

**Result**

All `<h1>` elements will display using the **Arial** font.

---

# Multi-Word Font Names

Some fonts contain more than one word in their name.

When this happens, wrap the font name in **quotation marks**.

### Example

```css
h1 {
    font-family: 'Times New Roman';
}
```

### Why?

Without quotation marks, CSS treats each word as a separate value.

**Correct**

```css
font-family: 'Times New Roman';
```

**Incorrect**

```css
font-family: Times New Roman;
```

---

# Web Safe Fonts

## Definition

**Web Safe Fonts** are fonts that are installed on nearly every operating system and browser.

Using web safe fonts helps ensure your website looks consistent across different devices.

### Common Web Safe Fonts

| Serif | Sans-Serif | Monospace |
|--------|------------|-----------|
| Times New Roman | Arial | Courier New |
| Georgia | Helvetica | Consolas |
| Garamond | Verdana | Monaco |

---

# Fallback Fonts

Sometimes a visitor's computer **does not have your preferred font installed**.

CSS allows you to provide backup fonts called **fallback fonts**.

### Example

```css
h1 {
    font-family: Caslon, Georgia, 'Times New Roman';
}
```

### Browser Search Order

The browser checks fonts from **left to right**.

```
Caslon
   ↓
Georgia
   ↓
Times New Roman
```

If **Caslon** isn't installed, the browser tries **Georgia**.

If **Georgia** isn't installed, it uses **Times New Roman**.

---

# Font Stack

A **Font Stack** is a comma-separated list of fonts arranged in order of preference.

### Example

```css
font-family: Caslon, Georgia, 'Times New Roman';
```

The browser stops searching as soon as it finds the **first available font**.

### Best Practice

Always list fonts:

1. Preferred font
2. Similar fallback fonts
3. Generic font family

---

# Serif vs Sans-Serif

Fonts are generally grouped into families.

---

## Serif Fonts

Serif fonts have **small decorative strokes** (called *serifs*) at the ends of letters.

Example:

```
T
│
└─ decorative edge
```

### Examples

- Times New Roman
- Georgia
- Garamond
- Caslon

### Characteristics

- Traditional
- Formal
- Excellent for printed material

---

## Sans-Serif Fonts

Sans-serif fonts **do not** have decorative strokes.

### Examples

- Arial
- Helvetica
- Verdana
- Tahoma

### Characteristics

- Modern
- Clean
- Excellent for websites and mobile devices

---

# Generic Font Families

CSS provides generic font families that work as the **final fallback**.

Common generic families include:

```text
serif
sans-serif
monospace
cursive
fantasy
```

---

## Example

```css
h1 {
    font-family: Caslon, Georgia, 'Times New Roman', serif;
}
```

### Browser Search Order

```
Caslon
   ↓
Georgia
   ↓
Times New Roman
   ↓
Any available Serif font
```

If none of the specified fonts exist, the browser simply loads **any serif font** installed on the computer.

---

# Complete Example

```css
body {
    font-family: Arial, Helvetica, sans-serif;
}

h1 {
    font-family: Georgia, 'Times New Roman', serif;
}

code {
    font-family: Consolas, 'Courier New', monospace;
}
```

---

# Font Stack Flow

```text
Preferred Font
      │
      ▼
Fallback Font #1
      │
      ▼
Fallback Font #2
      │
      ▼
Generic Font Family
      │
      ▼
Browser Default
```

---

# Best Practices

✅ Always provide fallback fonts.

✅ Quote font names containing multiple words.

```css
'Times New Roman'
```

✅ End every font stack with a generic font family.

```css
serif
sans-serif
monospace
```

✅ Arrange fonts from **most preferred** to **least preferred**.

✅ Use web safe fonts when compatibility is important.

---

# Examples of Professional Font Stacks

## Modern Websites

```css
body {
    font-family: Arial, Helvetica, sans-serif;
}
```

---

## News Websites

```css
body {
    font-family: Georgia, 'Times New Roman', serif;
}
```

---

## Programming Editors

```css
code {
    font-family: Consolas, 'Courier New', monospace;
}
```

---

# Quick Reference

| Property | Purpose |
|----------|---------|
| `font-family` | Specifies the font used for text |
| Quotes | Required for multi-word font names |
| Web Safe Fonts | Fonts installed on most systems |
| Fallback Font | Backup font if the preferred font is unavailable |
| Font Stack | Ordered list of fonts |
| `serif` | Generic serif font |
| `sans-serif` | Generic sans-serif font |
| `monospace` | Generic fixed-width font |

---

# Key Takeaways

- The **`font-family`** property controls the font used for text.
- Multi-word font names should be enclosed in quotation marks.
- Web safe fonts improve compatibility across browsers and operating systems.
- Fallback fonts ensure text remains readable even if the preferred font is unavailable.
- A **font stack** is an ordered list of fonts that the browser checks from left to right.
- Always end a font stack with a **generic font family** such as `serif`, `sans-serif`, or `monospace`.

---

> **Remember:** The browser always uses the **first font it finds** in the font stack. Designing a thoughtful font stack ensures your website remains attractive and readable on every device.
