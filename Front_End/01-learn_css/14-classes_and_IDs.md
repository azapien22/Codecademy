# CSS — Classes vs IDs

## Overview

CSS can target elements using:

    type selectors
    class selectors
    ID selectors

Classes and IDs serve **different purposes** and should be used
strategically.

---

## CSS Classes

Classes are used to style **multiple elements**.

They are:

- reusable
- flexible
- designed for grouping styles

---

## Example — Classes

CSS:
```text
    .bold {
      font-weight: bold;
    }

    .blue {
      color: blue;
    }

    .green {
      color: green;
    }
```
HTML:

    <h1 class="bold blue">Headline 1</h1>
    <h1 class="bold green">Headline 2</h1>

---

## Structure Diagram
```text
    element
     └── class="bold blue"
           ├── .bold → font-weight
           └── .blue → color
```
---

## Benefits of Classes

- reusable across many elements
- can combine multiple styles
- reduces duplicate code
- scalable for large projects

---

## CSS IDs

IDs are used to style **one unique element**.

They are:

- unique
- used once per page
- specific

---

## Example — ID

HTML:

    <h1 id="main-title">Title</h1>

CSS:
```text
    #main-title {
      color: red;
    }
```
---

## Structure Diagram
```text
    element
     └── id="main-title"
           └── #main-title → styles
```
---

## Key Differences

    class → reusable (many elements)
    id    → unique (one element)

---

## Combining Classes vs IDs

Classes:

    <h1 class="bold blue"></h1>

ID:

    <h1 id="title"></h1>

---

## CSS Specificity (Important)

IDs have higher priority than classes and types.

Order of strength:

    ID (#)        → highest
    class (.)     → medium
    type (p, h1)  → lowest

---

## Example — Specificity

CSS:
```text
    p {
      color: blue;
    }

    .text {
      color: green;
    }

    #main {
      color: red;
    }
```
HTML:

    <p id="main" class="text">Hello</p>

Result:

    text is red (ID wins)

---

## Best Practices

Use:

    classes → most of the time

Use IDs:

    sparingly
    for unique elements only

Avoid:

    overusing IDs

---

## Visual Concept
```text
    styles
     ├── type → basic styling
     ├── class → reusable styling
     └── id → unique override
```
---

## Key Pattern

Class:

    .classname { }

ID:

    #idname { }

---

## Key Idea

Classes provide **flexibility and reuse**,
while IDs provide **unique, high-priority styling**.
