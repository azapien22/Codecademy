# CSS — Chaining Selectors

## Overview

CSS allows combining multiple selectors to target elements
that meet **multiple conditions**.

This is called:

    chaining selectors

---

## What is Chaining?

Chaining means:

    combining selectors together (no spaces)

to target more specific elements.

---

## Basic Syntax
```text
    element.class {
      property: value;
    }
```
---

## Example
```text
    h1.special {
      color: blue;
    }
```
---

## How It Works

HTML:

    <h1 class="special">Title</h1>
    <p class="special">Paragraph</p>

CSS:
```text
    h1.special {
      color: blue;
    }
```
---

## Result

- `<h1 class="special">` → styled
- `<p class="special">`  → NOT styled

Reason:

    selector requires BOTH:
      element = h1
      class   = special

---

## Structure Diagram
```text
    selector → h1.special
        |
        ├── type → h1
        └── class → .special
```
Condition:

    must match BOTH

---

## Multiple Conditions

Chaining allows precise targeting:

    element + class
    element + id
    class + class

---

## Example — Multiple Classes
```text
    .btn.primary {
      background-color: blue;
    }
```
HTML:

    <button class="btn primary">Click</button>

---

## Example — ID + Class
```text
    #main.highlight {
      color: red;
    }
```
HTML:

    <p id="main" class="highlight">Text</p>

---

## Difference from Grouping

Chaining:

    h1.special

→ same element must match both

Grouping:

    h1, .special

→ either condition applies

---

## Visual Concept
```text
    element
     ├── matches type
     ├── matches class
     └── styled only if BOTH match
```
---

## Key Pattern
```text
    selector1.selector2 {
      property: value;
    }
```
Example:
```text
    h1.special {
      color: blue;
    }
```
---

## Key Idea

Chaining increases specificity by requiring an element
to match **multiple selectors at the same time**.

    more conditions → more precise styling
