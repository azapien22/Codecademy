# CSS — Class Selector

## Overview

CSS can target elements not only by type, but also by **attributes**.

One of the most commonly used attributes is:

    class

The **class selector** allows styling specific elements.

---

## HTML with Class

Example:

    <p class="brand">Sole Shoe Company</p>

Structure:

    element
     └── class="brand"

---

## CSS Class Selector

To select a class in CSS, use a **period (.)** before the class name.

Example:
```text
    .brand {
      property: value;
    }
```
---

## Structure Diagram

    selector → .brand
        |
        ▼
    targets → class="brand"

---

## How It Works

HTML:

    <p class="brand">Text</p>

CSS:
```text
    .brand {
      color: blue;
    }
```
Result:

    text becomes blue

---

## Key Rules

- class selector starts with `.`
- matches elements with that class
- can be reused across multiple elements

---

## Example — Multiple Elements

HTML:

    <p class="brand">Item 1</p>
    <h1 class="brand">Item 2</h1>

CSS:
```text
    .brand {
      color: red;
    }
```
Result:

    both elements become red

---

## Reusability

Classes are reusable:

    class="brand"

can be applied to many elements.

---

## Multiple Classes

An element can have multiple classes:

    <p class="brand highlight">Text</p>

CSS:

    .brand { color: red; }
    .highlight { font-weight: bold; }

---

## Class vs Type Selector

Type selector:
```text
    p {
      color: blue;
    }
```
Class selector:
```text
    .brand {
      color: red;
    }
```
Difference:

    type → all elements of that type
    class → specific elements

---

## Key Pattern
```text
    .classname {
      property: value;
    }
```
Example:
```text
    .brand {
      color: blue;
    }
```
---

## Key Idea

Class selectors allow styling **specific groups of elements**
without affecting all elements of that type.

    .class → targeted styling
