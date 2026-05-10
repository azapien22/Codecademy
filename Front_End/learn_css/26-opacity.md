# CSS — Opacity

## Overview

Opacity controls how transparent an element appears.

It is measured on a scale from:

    0 → fully invisible
    1 → fully visible

---

## Opacity Scale

    1.0 → 100% visible
    0.5 → 50% visible
    0.0 → completely transparent

---

## Basic Syntax
```text
    selector {
      opacity: value;
    }
```
Example:
```text
    .overlay {
      opacity: 0.5;
    }
```
---

## How It Works

HTML:

    <div class="overlay"></div>

CSS:
```text
    .overlay {
      opacity: 0.5;
    }
```
Result:

    element becomes semi-transparent

---

## Structure Diagram

    opacity values
     ├── 1.0 → solid
     ├── 0.5 → transparent
     └── 0.0 → invisible

---

## Visual Concept

### Full Opacity

    opacity: 1;

    ██████████

---

### Half Opacity

    opacity: 0.5;

    ▓▓▓▓▓▓▓▓▓▓

---

### Invisible

    opacity: 0;

    (not visible)

---

## Common Use Cases

- overlays
- fade effects
- transparent backgrounds
- hover effects
- layered designs

---

## Example — Overlay Effect
```text
    .overlay {
      background-color: black;
      opacity: 0.5;
    }
```
Result:

    background behind overlay partially visible

---

## Important Notes

- opacity affects the entire element
- includes text, images, and children
- lower opacity = more transparency

---

## Key Pattern

    opacity: value;

Examples:

    opacity: 1;
    opacity: 0.5;
    opacity: 0;

---

## Key Idea

The `opacity` property controls the transparency level
of an element.
