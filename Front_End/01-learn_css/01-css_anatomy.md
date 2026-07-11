# CSS — Anatomy

## Overview

CSS can be written in two main ways:

    1. Ruleset (external/internal CSS)
    2. Inline style (inside HTML tag)

Both methods share the same **core structure**.

---

## Key Concept

The most important concept in CSS:

    declaration → applies style to an element

A declaration always consists of:

    property + value

---

## CSS Ruleset Syntax

Example:
```text
    p {
      color: blue;
    }
```
---

## Ruleset Structure
```text
    selector {
      property: value;
    }
```
---

## Ruleset Diagram
```text
    ruleset
     ├── selector → p
     └── declaration block
          └── declaration
               ├── property → color
               └── value    → blue
```
---

## Ruleset Terms

### Selector

Targets the HTML element to style.

Example:

    p

---

### Declaration Block

Code inside `{ }` containing declarations.

Example:
```text
    {
      color: blue;
    }
```
---

### Declaration

A single rule:

    property: value;

Example:

    color: blue;

---

### Property

What you want to change.

Examples:

    color
    font-size
    background

---

### Value

The setting applied to the property.

Examples:

    blue
    16px
    center

---

## Inline Style Syntax

Example:

    <p style="color: blue;">Hello World!</p>

---

## Inline Structure
```text
    opening tag
     └── attribute (style)
          └── declaration
               ├── property → color
               └── value    → blue
```
---

## Inline Terms

### Opening Tag

The HTML element being styled.

Example:

    <p>

---

### Attribute

The `style` attribute contains CSS.

Example:

    style="color: blue;"

---

### Declaration

Same as ruleset:

    property: value;

---

## Comparison

Ruleset:
```text
    p {
      color: blue;
    }

Inline:

    <p style="color: blue;">Hello</p>
```
---

## Key Differences

    ruleset → reusable, cleaner, preferred
    inline  → quick, but not scalable

---

## Visual Concept

Ruleset (separate CSS):
```text
    HTML → structure
    CSS  → styling

Inline:

    HTML + CSS combined in one line
```
---

## Key Pattern

CSS declaration:

    property: value;

Example:

    color: blue;

---

## Key Idea

All CSS styling is built on:

    selector → chooses element
    declaration → applies style

    property + value → defines appearance
