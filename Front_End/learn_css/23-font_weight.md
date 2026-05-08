# CSS — Font Weight

## Overview

The `font-weight` property controls how:

- bold
- thick
- thin

text appears on a webpage.

---

## Basic Syntax
```text
    selector {
      font-weight: value;
    }
```
Example:
```text
    p {
      font-weight: bold;
    }
```
---

## How It Works

HTML:

    <p>Paragraph text</p>

CSS:
```text
    p {
      font-weight: bold;
    }
```
Result:

    paragraph text appears bold

---

## Structure Diagram

    selector → p
        |
        ▼
    property → font-weight
        |
        ▼
    value → bold

---

## Common Values

### `bold`

Makes text thicker/heavier.

Example:

    font-weight: bold;

---

### `normal`

Displays regular text weight.

Example:

    font-weight: normal;

---

## Example — Bold Text
```text
    h1 {
      font-weight: bold;
    }
```
Result:

    heading appears bold

---

## Example — Normal Text
```text
    p {
      font-weight: normal;
    }
```
Result:

    paragraph appears regular

---

## Why `normal` Exists

If many elements are bolded globally:
```text
    * {
      font-weight: bold;
    }
```
You can disable bold on specific elements:
```text
    p {
      font-weight: normal;
    }
```
---

## Visual Concept

    normal → regular text
    bold   → thicker text

---

## Common Use Cases

- emphasize headings
- highlight important content
- create contrast between sections

---

## Key Pattern

    font-weight: value;

Examples:

    font-weight: bold;
    font-weight: normal;

---

## Key Idea

The `font-weight` property controls the thickness and emphasis
of text.
