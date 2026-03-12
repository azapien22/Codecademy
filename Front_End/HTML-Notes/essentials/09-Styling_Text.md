# Styling Text in HTML

## Overview

HTML provides tags that allow developers to **emphasize or highlight text**.

Two common text styling elements are:
```Text
    <em>
    <strong>
```
These tags help give **importance or emphasis** to specific words or phrases.

---

## The <em> Element

The `<em>` tag is used to **emphasize text**.

Browsers typically display emphasized text as **italic**.

Example:
```Text
    <em>important word</em>
```
Rendered concept:

    important word  (italic)

Purpose:

- emphasize words
- indicate stress in sentences
- highlight meaning

---

## The <strong> Element

The `<strong>` tag is used to indicate **strong importance**.

Browsers typically display strong text as **bold**.

Example:
```Text
    <strong>important phrase</strong>
```
Rendered concept:

    important phrase  (bold)

Purpose:

- highlight important information
- indicate strong emphasis
- mark critical content

---

## Example from the Lesson

Example HTML:
```Text
    <p>
      <strong>The Nile River</strong> is the
      <em>longest</em> river in the world,
      measuring over 6,850 kilometers long
      (approximately 4,260 miles).
    </p>
```
---

## Structure Diagram

HTML hierarchy:
```Text
    p
     ├── strong
     ├── text
     ├── em
     └── text
```
Expanded view:
```Text
    p
     ├── strong  The Nile River
     ├── text    is the
     ├── em      longest
     └── text    river in the world...
```
---

## Rendered Concept

Result displayed in browser:

    The Nile River is the longest river in the world,
    measuring over 6,850 kilometers long.

Formatting:

- **The Nile River** → bold
- *longest* → italic

---

## Default Browser Styling

Browsers have built-in styles that usually display:

    <em>      → italic text
    <strong>  → bold text

Example concept:
```Text
    normal text
    <strong>bold text</strong>
    <em>italic text</em>
```
---

## Why These Tags Are Important

These tags provide **semantic meaning**, not just visual styling.

They indicate:

- importance
- emphasis
- meaning in text

This is helpful for:

- accessibility
- screen readers
- search engines
- content structure

---

## Best Practice

Use:

    `<strong>`

for **important content**.

Use:

    `<em>`

for **emphasized words or phrases**.

Example:
```Text
    <p>
        <strong>Warning:</strong>
        This product may cause
        <em>serious injury</em>.
    </p>
```
---

## Key Pattern

Inline text styling:
```Text
    <p>
        text
        <strong>important text</strong>
        more text
        <em>emphasized text</em>
    </p>
```
