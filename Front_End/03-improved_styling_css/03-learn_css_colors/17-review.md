# CSS Typography: Review

> *Typography is the art of arranging text so that written content is readable, accessible, and visually appealing.*

---

# Lesson Summary

In this lesson, you learned how CSS can control the appearance, spacing, alignment, and font selection of text on a webpage.

Typography plays a major role in the user experience because well-styled text is easier to read, scan, and understand.

---

# Core Typography Concepts

## Typography

**Typography** is the art of arranging and styling text on a page.

Effective typography improves:

* Readability
* Accessibility
* Visual hierarchy
* User engagement
* Overall user experience

---

## Font Family

The **`font-family`** property controls the typeface used to display text.

```css
body {
    font-family: Arial, Helvetica, sans-serif;
}
```

A font stack provides fallback options in case the preferred font is unavailable.

```text
Preferred Font
      │
      ▼
Fallback Font
      │
      ▼
Generic Font Family
```

---

## Serif and Sans-Serif Fonts

### Serif Fonts

Serif fonts have decorative strokes at the ends of letters.

Examples:

* Georgia
* Garamond
* Times New Roman
* Caslon

### Sans-Serif Fonts

Sans-serif fonts do not have decorative strokes.

Examples:

* Arial
* Helvetica
* Verdana
* Tahoma

---

## Fallback Fonts

Fallback fonts are used when a preferred font is not installed or cannot be loaded.

```css
h1 {
    font-family: Caslon, Georgia, 'Times New Roman', serif;
}
```

The browser checks each font from left to right and uses the first available option.

---

## Font Weight

The **`font-weight`** property controls how thick or thin text appears.

```css
h1 {
    font-weight: 700;
}
```

Common values include:

| Value     | Meaning                 |
| --------- | ----------------------- |
| `normal`  | Standard weight         |
| `bold`    | Bold text               |
| `lighter` | Lighter than the parent |
| `bolder`  | Bolder than the parent  |
| `400`     | Equivalent to `normal`  |
| `700`     | Equivalent to `bold`    |

---

## Font Style

The **`font-style`** property controls whether text appears normally or in italics.

```css
.creator {
    font-style: italic;
}
```

Common values:

* `normal`
* `italic`
* `oblique`

---

## Text Transformation

The **`text-transform`** property changes the capitalization of displayed text without changing the original HTML.

```css
h1 {
    text-transform: uppercase;
}
```

Common values:

| Value        | Result                      |
| ------------ | --------------------------- |
| `uppercase`  | Converts text to uppercase  |
| `lowercase`  | Converts text to lowercase  |
| `capitalize` | Capitalizes each word       |
| `none`       | Preserves the original case |

---

# Text Layout Properties

## Letter Spacing

The **`letter-spacing`** property controls the horizontal space between individual characters.

```css
p {
    letter-spacing: 2px;
}
```

```text
Default:
Typography

With letter spacing:
T y p o g r a p h y
```

Use letter spacing carefully because excessive spacing can reduce readability.

---

## Word Spacing

The **`word-spacing`** property controls the horizontal space between words.

```css
h1 {
    word-spacing: 0.3em;
}
```

Using `em` values is useful because the spacing scales with the font size.

---

## Line Height

The **`line-height`** property controls the vertical space between lines of text.

```css
p {
    line-height: 1.4;
}
```

Unitless values are generally preferred because they scale automatically with the current font size.

```text
font-size × line-height = rendered line height
```

Example:

```text
16px × 1.4 = 22.4px
```

---

## Text Alignment

The **`text-align`** property controls the horizontal alignment of text inside its parent container.

```css
h1 {
    text-align: right;
}
```

Common values:

* `left`
* `right`
* `center`
* `justify`

---

# Web Fonts

Custom fonts can be added to a webpage using either:

1. An HTML `<link>` element
2. A CSS `@font-face` rule

---

## Google Fonts with `<link>`

Google Fonts provides free fonts that can be linked inside an HTML document.

```html
<link
    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
    rel="stylesheet"
>
```

The font can then be applied in CSS:

```css
body {
    font-family: 'Roboto', sans-serif;
}
```

---

## Local Fonts with `@font-face`

Local font files can be added directly to a project with `@font-face`.

```css
@font-face {
    font-family: 'MyCustomFont';

    src:
        url('fonts/MyCustomFont.woff2') format('woff2'),
        url('fonts/MyCustomFont.woff') format('woff'),
        url('fonts/MyCustomFont.ttf') format('truetype');
}
```

The font can then be used like any other font:

```css
body {
    font-family: 'MyCustomFont', sans-serif;
}
```

---

# Common Font Formats

| Format  | Full Name              |
| ------- | ---------------------- |
| `OTF`   | OpenType Font          |
| `TTF`   | TrueType Font          |
| `WOFF`  | Web Open Font Format   |
| `WOFF2` | Web Open Font Format 2 |

Recommended loading order:

```text
WOFF2
  ↓
WOFF
  ↓
TTF
```

The browser checks each source and loads the first supported format.

---

# Complete Typography Example

```css
@font-face {
    font-family: 'BodyFont';

    src:
        url('fonts/Roboto.woff2') format('woff2'),
        url('fonts/Roboto.woff') format('woff'),
        url('fonts/Roboto.ttf') format('truetype');
}

body {
    font-family: 'BodyFont', Arial, sans-serif;
    font-weight: 400;
    line-height: 1.6;
}

h1 {
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 2px;
}

.creator {
    font-style: italic;
}

.subtitle {
    word-spacing: 0.2em;
}
```

---

# Quick Reference

| Property or Rule | Purpose                                 |
| ---------------- | --------------------------------------- |
| `font-family`    | Selects the typeface                    |
| `font-weight`    | Controls text thickness                 |
| `font-style`     | Applies normal or italic styling        |
| `text-transform` | Controls capitalization                 |
| `letter-spacing` | Changes space between letters           |
| `word-spacing`   | Changes space between words             |
| `line-height`    | Controls vertical spacing between lines |
| `text-align`     | Controls horizontal text alignment      |
| `@font-face`     | Loads a custom local font               |

---

# Typography Workflow

```text
Choose a Font
      │
      ▼
Create a Font Stack
      │
      ▼
Set Font Weight and Style
      │
      ▼
Adjust Letter and Word Spacing
      │
      ▼
Set Line Height
      │
      ▼
Align the Text
      │
      ▼
Test Readability and Accessibility
```

---

# Best Practices

* Use clear and readable fonts for body text.
* Always include fallback fonts.
* End font stacks with a generic family such as `serif` or `sans-serif`.
* Use unitless values for `line-height`.
* Avoid excessive letter or word spacing.
* Use bold and italic text sparingly.
* Keep the original HTML text readable and use CSS for presentation.
* Verify which font weights are supported by a custom font.
* Use `WOFF2` before older font formats.
* Maintain consistent typography throughout the website.

---

# Key Takeaways

* Typography is the art of arranging and styling text.
* `font-family` selects the typeface.
* `font-weight` controls how bold or thin text appears.
* `font-style` can display text in italics.
* `text-transform` changes displayed capitalization.
* `letter-spacing` controls spacing between characters.
* `word-spacing` controls spacing between words.
* `line-height` controls vertical spacing between lines.
* `text-align` controls horizontal alignment.
* Serif fonts contain decorative details, while sans-serif fonts do not.
* Fallback fonts protect against unavailable fonts.
* Google Fonts can be loaded with an HTML `<link>` element.
* Local fonts can be loaded with `@font-face`.
* Good typography improves readability, accessibility, and user experience.

---

> **Final Reminder:** Effective typography is not created by one CSS property. It comes from carefully combining font selection, spacing, alignment, weight, style, and hierarchy to create content that is both attractive and easy to read.

