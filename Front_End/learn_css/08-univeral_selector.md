# CSS — Universal Selector

## Overview

The **universal selector** targets **all HTML elements** on a page.

It applies styles globally to every element.

---

## Syntax
```text
    * {
      property: value;
    }
```
---

## Example
```text
    * {
      font-family: Verdana;
    }
```
Result:

    all text on the page uses Verdana font

---

## Structure Diagram
```text
    selector → *
        |
        ▼
    targets → ALL elements
```
---

## How It Works

HTML:
```text
    <h1>Title</h1>
    <p>Paragraph</p>
```
CSS:
```text
    * {
      font-family: Verdana;
    }
```
Result:

    every element uses Verdana

---

## Common Use Cases

- reset default browser styles
- apply global styling
- style all elements at once
- target all children of a parent (advanced)

---

## Visual Concept
```text
    *
     ├── h1
     ├── p
     ├── div
     └── all elements
```
---

## Important Notes

- affects every element on the page
- can override default browser styles
- should be used carefully

---

## Example — Reset Style
```text
    * {
      margin: 0;
      padding: 0;
    }
```
Purpose:

    removes default spacing

---

## Key Pattern
```text
    * {
      property: value;
    }
```
Example:
```text
    * {
      font-family: Verdana;
    }
```
---

## Key Idea

The universal selector applies styles to **everything on the page**.

    * → all elements
