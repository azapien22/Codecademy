# CSS — Multiple Classes

## Overview

HTML elements can have **more than one class**.

This allows combining multiple styles without creating new classes
for every variation.

---

## Why Use Multiple Classes?

Without multiple classes:

- each style combination requires a new class
- leads to repetitive and inefficient CSS

With multiple classes:

- reuse existing styles
- mix and match styles easily

---

## Example — CSS Classes
```text
    .green {
      color: green;
    }

    .bold {
      font-weight: bold;
    }
```
---

## Example — HTML with Multiple Classes

    <h1 class="green bold">Text</h1>

---

## Structure Diagram
```text
    element
     └── class="green bold"
           ├── .green → color: green
           └── .bold  → font-weight: bold
```
---

## Result

The `<h1>` element will be:

- green
- bold

---

## How It Works

CSS:
```text
    .green { color: green; }
    .bold  { font-weight: bold; }
```
HTML:

    <h1 class="green bold">Text</h1>

Result:

    both styles are applied

---

## Syntax Rules

- separate class names with a space
- each class applies its own styles

Correct:

    class="green bold"

Incorrect:

    class="green,bold"

---

## Reusability

Classes can be reused across multiple elements:

    <p class="green">Text</p>
    <h1 class="green bold">Heading</h1>

---

## Visual Concept
```text
    element
     ├── class 1 → style
     ├── class 2 → style
     └── combined result
```
---

## Benefits

- reduces code duplication
- improves flexibility
- easier to maintain
- scalable styling system

---

## Key Pattern

HTML:

    class="class1 class2"

CSS:
```text
    .class1 { property: value; }
    .class2 { property: value; }
```
---

## Key Idea

Multiple classes allow combining styles efficiently.

    class1 + class2 → combined styling
