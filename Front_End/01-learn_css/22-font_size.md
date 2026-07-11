# CSS — Font Size

## Overview

Text size can be customized using:

    font-size

Changing font size helps:

- improve readability
- create visual hierarchy
- emphasize important content

---

## Basic Syntax
```text
    selector {
      font-size: value;
    }
```
Example:
```text
    p {
      font-size: 18px;
    }
```
---

## How It Works

HTML:

    <p>Paragraph text</p>

CSS:
```text
    p {
      font-size: 18px;
    }
```
Result:

    paragraph text becomes 18 pixels tall

---

## Structure Diagram

    selector → p
        |
        ▼
    property → font-size
        |
        ▼
    value → 18px

---

## What is `px`?

`px` stands for:

    pixels

Pixels are a unit used to measure size on screens.

---

## Common Font Sizes

Examples:

    12px
    16px
    18px
    24px
    32px

---

## Example — Different Sizes
```text
    h1 {
      font-size: 32px;
    }

    p {
      font-size: 18px;
    }
```
Result:

    headings appear larger than paragraphs

---

## Visual Concept

    small text  → lower emphasis
    large text  → higher emphasis

---

## Why Font Size Matters

Font size helps create:

- page structure
- readability
- emphasis
- visual balance

---

## Key Pattern

    font-size: value;

Example:

    font-size: 18px;

---

## Key Idea

The `font-size` property controls how large or small text appears
on a webpage.
