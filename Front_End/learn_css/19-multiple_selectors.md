# CSS — Multiple Selectors

## Overview

CSS allows applying the **same styles to multiple selectors**
at once.

This helps:

- reduce repetition
- write cleaner code
- improve readability

---

## Basic Syntax
```text
    selector1,
    selector2 {
      property: value;
    }
```
---

## Example — Repetitive Code
```text
    h1 {
      font-family: Georgia;
    }

    .menu {
      font-family: Georgia;
    }
```
Problem:

    duplicated styles

---

## Improved Version
```text
    h1,
    .menu {
      font-family: Georgia;
    }
```
---

## Structure Diagram
```text
    selectors
     ├── h1
     └── .menu
          ↓
    same style applied
```
---

## How It Works

CSS:
```text
    h1, .menu {
      font-family: Georgia;
    }
```
Result:

- all `<h1>` elements styled
- all `.menu` elements styled

---

## Key Rule

Separate selectors using a **comma (,)**.

---

## Multiple Selectors Example
```text
    h1, h2, p {
      color: blue;
    }
```
Result:

- all headings and paragraphs become blue

---

## Difference from Chaining

Multiple selectors:

    h1, .menu

→ applies to BOTH separately

Chaining:

    h1.menu

→ applies only if BOTH match same element

---

## Visual Concept

    selector1 → style
    selector2 → same style

---

## Benefits

- reduces code duplication
- improves maintainability
- cleaner CSS structure

---

## Key Pattern
```text
    selector1,
    selector2,
    selector3 {
      property: value;
    }
```
---

## Key Idea

Multiple selectors allow applying the same style
to different elements efficiently.

    selector1, selector2 → shared styling
