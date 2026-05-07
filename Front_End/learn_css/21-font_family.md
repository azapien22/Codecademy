# CSS — Font Family

## Overview

Fonts determine the appearance of text on a webpage.

In CSS, fonts are controlled using:

    font-family

The term "font" refers to:

    typeface
    font family

---

## Basic Syntax
```text
    selector {
      font-family: font-name;
    }
```
Example:
```text
    h1 {
      font-family: Garamond;
    }
```
---

## How It Works

HTML:

    <h1>Heading</h1>

CSS:
```text
    h1 {
      font-family: Garamond;
    }
```
Result:

    heading uses Garamond font

---

## Structure Diagram

    selector → h1
        |
        ▼
    property → font-family
        |
        ▼
    value → Garamond

---

## Example — Multi-word Font

Fonts with spaces should be wrapped in quotes.

Example:
```text
    h1 {
      font-family: 'Courier New';
    }
```
---

## Why Quotes Are Used

Correct:

    font-family: 'Courier New';

Incorrect:

    font-family: Courier New;

Reason:

    browser may misinterpret multi-word names

---

## Web Safe Fonts

Web safe fonts are fonts supported across:

- most browsers
- most operating systems

Examples:

    Arial
    Verdana
    Times New Roman
    Courier New

---

## Important Notes

### Font Availability

A font must be:

- installed on the user's computer
OR
- downloaded from the web

---

### Browser Differences

Some fonts may appear differently depending on:

- operating system
- browser
- device

---

## Example — Multiple Fonts (Fallbacks)

CSS allows backup fonts.

Example:
```text
    p {
      font-family: Arial, Helvetica, sans-serif;
    }
```
Meaning:

    try Arial
    if unavailable → Helvetica
    if unavailable → generic sans-serif

---

## Visual Concept

    browser checks fonts in order:
     ├── Arial
     ├── Helvetica
     └── sans-serif

---

## Generic Font Families

Common generic families:

    serif
    sans-serif
    monospace
    cursive
    fantasy

---

## Key Pattern

    font-family: 'Font Name';

Example:

    font-family: 'Courier New';

---

## Key Idea

The `font-family` property controls the typeface used for text.

    font-family → text appearance
