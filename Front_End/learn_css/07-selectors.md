# CSS — Type Selector

## Overview

CSS uses **selectors** to choose which HTML elements
should be styled.

A selector targets specific elements and applies
CSS declarations to them.

---

## What is a Selector?

A selector is used to:

    target HTML element(s)

Structure:
```text
    selector {
      property: value;
    }
```
---

## Type Selector

A **type selector** selects elements based on their HTML tag name.

Example:
```text
    p {
      color: green;
    }
```
---

## How It Works

HTML:

    <p>Hello World</p>

CSS:
```text
    p {
      color: green;
    }
```
Result:

    all <p> elements become green

---

## Structure Diagram

    selector → p
        |
        ▼
    targets → <p> elements

    declaration:
      color → green

---

## Key Rules

- use the tag name only
- do NOT include angle brackets

Correct:

    p

Incorrect:

    <p>

---

## Common Type Selectors

Examples:

    p        → paragraphs
    h1       → main headings
    h2       → subheadings
    div      → containers
    span     → inline elements

---

## Naming Notes

Type selectors are also called:

    element selectors
    tag selectors

---

## Example — Multiple Elements
```text
    h1 {
      color: blue;
    }

    p {
      font-size: 16px;
    }
```
---

## Key Pattern
```text
    element {
      property: value;
    }
```
Example:
```text
    p {
      color: green;
    }
```
---

## Key Idea

Type selectors apply styles to **all elements of a given type**.

    p → all paragraphs
    h1 → all headings
