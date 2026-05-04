# CSS — Chaining and Specificity

## Overview

Combining selectors (chaining or descendant selectors)
increases **specificity**.

Higher specificity determines which styles are applied
when multiple rules target the same element.

---

## Key Concept

    more selectors → higher specificity

---

## Example

CSS:
```text
    p {
      color: blue;
    }

    .main p {
      color: red;
    }
```
---

## How It Works

HTML:
```text
    <div class="main">
      <p>Text</p>
    </div>
```
---

## Result

    text is red

Reason:

    .main p → more specific than p

---

## Structure Diagram
```text
    selectors:
     ├── p           → general rule
     └── .main p     → more specific
```
Priority:

    .main p > p

---

## Why It Happens

Specificity increases when selectors include:

- classes
- IDs
- multiple conditions
- context (parent + child)

---

## Specificity Breakdown

    p           → type selector (low)
    .main p     → class + type (higher)

---

## Visual Concept

    general rule
        ↓
    more specific rule
        ↓
    applied style

---

## Example — Context Matters

CSS:
```text
    p {
      color: blue;
    }

    .container p {
      color: green;
    }

    #main p {
      color: red;
    }
```
Priority:

    #main p > .container p > p

---

## Key Rule

When multiple rules apply:

    most specific selector wins

---

## Combining Selectors

Chaining:

    h1.special

Descendant:

    .main p

Both:

    increase specificity

---

## Best Practice

- avoid overly complex selectors
- keep specificity manageable
- prefer classes over IDs
- use simple, readable rules

---

## Key Pattern
```text
    general selector {
      style
    }

    more specific selector {
      overrides style
    }
```
---

## Key Idea

Adding more selectors increases specificity,
which determines which CSS rule is applied.

    more specific → overrides less specific
