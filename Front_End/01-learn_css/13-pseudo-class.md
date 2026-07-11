# CSS — Pseudo-class Selector

## Overview

Pseudo-classes are used to style elements based on their **state**.

States can change due to:

- user interaction
- navigation
- element condition
- position in the document

---

## What is a Pseudo-class?

A pseudo-class applies styles when an element is in a
specific condition or state.

Syntax:
```text
    selector:pseudo-class {
      property: value;
    }
```
---

## Example — Hover
```text
    p:hover {
      background-color: lime;
    }
```
---

## How It Works

HTML:

    <p>Hover over me</p>

CSS:
```text
    p:hover {
      background-color: lime;
    }
```
Result:

    background turns lime when hovered

---

## Structure Diagram

    selector → p
        |
        ▼
    state → :hover
        |
        ▼
    style applied

---

## Common Pseudo-classes

### `:hover`

- activates when mouse is over element

---

### `:active`

- activates when element is being clicked

---

### `:focus`

- activates when element is selected (e.g., input field)

---

### `:visited`

- styles links that have been clicked

---

### `:disabled`

- styles disabled elements

---

## Example — Multiple States
```text
    a:visited {
      color: purple;
    }

    input:focus {
      border: 2px solid blue;
    }
```
---

## Visual Concept
```text
    element
     ├── default state
     ├── hover state
     ├── active state
     └── focus state
```
---

## Real-World Examples

- links change color after clicking
- buttons change when pressed
- input fields highlight when selected

---

## Key Rules

- always use `:` before pseudo-class
- attach to a selector
- styles apply only during that state

---

## Key Pattern
```text
    selector:pseudo-class {
      property: value;
    }
```
Example:
```text
    p:hover {
      background-color: lime;
    }
```
---

## Key Idea

Pseudo-classes allow styling elements based on **interaction and state**.

    :hover   → mouse over
    :active  → click
    :focus   → selected
