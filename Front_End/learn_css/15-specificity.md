# CSS — Specificity

## Overview

**Specificity** determines which CSS rule is applied when multiple
rules target the same element.

Concept:

    multiple styles → browser chooses one

---

## Specificity Hierarchy

From highest to lowest priority:

    ID (#)        → highest
    class (.)     → medium
    type (p, h1)  → lowest

---

## Example

HTML:

    <h1 class="headline">Breaking News</h1>

CSS:
```text
    h {
      color: red;
    }

    .headline {
      color: firebrick;
    }
```
---

## Result

    color = firebrick

Reason:

    class selector > type selector

---

## Adding an ID

HTML:

    <h1 id="main" class="headline">Breaking News</h1>

CSS:
```text
    #main {
      color: blue;
    }
```
---

## Result

    color = blue

Reason:

    ID selector overrides class and type

---

## Structure Diagram
```text
    element
     ├── type selector → h1
     ├── class selector → .headline
     └── ID selector → #main
```
Priority:

    #main > .headline > h1

---

## Why Specificity Matters

When multiple styles apply:

    browser chooses the most specific rule

---

## Problems with High Specificity

Too many IDs can:

- make CSS harder to override
- increase complexity
- reduce flexibility
- require even more specific selectors

---

## Best Practice

Use the **lowest specificity possible**.

Recommended order:

    1. type selector (if possible)
    2. class selector (most common)
    3. ID selector (only when necessary)

---

## Example — Best Practice

Instead of:
```text
    #title {
      color: red;
    }
```
Prefer:
```text
    .title {
      color: red;
    }
```
---

## Visual Concept

    styles applied
        ↓
    browser evaluates specificity
        ↓
    highest specificity wins

---

## Key Pattern

    ID (#)        → strongest
    class (.)     → medium
    type          → weakest

---

## Key Idea

Specificity controls which CSS rule is applied.

    more specific → higher priority
    less specific → easier to override
