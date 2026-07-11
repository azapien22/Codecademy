# CSS — Descendant Combinator

## Overview

CSS can target elements that are **nested inside other elements**.

These nested elements are called:

    descendants

---

## What is a Descendant?

A descendant is:

    an element inside another element

Example:
```text
    <ul>
      <li></li>
    </ul>
```
Here:

    li → descendant of ul

---

## Descendant Combinator Syntax
```text
    parent child {
      property: value;
    }
```
Note:

    space between selectors

---

## Example

HTML:
```text
    <ul class="main-list">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
```
CSS:
```text
    .main-list li {
      color: blue;
    }
```
---

## How It Works

Selector:

    .main-list li

Meaning:

    select all <li> elements inside .main-list

---

## Structure Diagram
```text
    .main-list (ul)
        ├── li
        ├── li
        └── li
```
Selector targets:

    all li inside .main-list

---

## Result

- all `<li>` elements inside `.main-list` are styled
- `<li>` elements outside `.main-list` are NOT affected

---

## Increasing Specificity

Descendant selectors are more specific because they require:

    element + context

Example:

    li → all list items
    .main-list li → only list items inside .main-list

---

## Example — Multiple Levels

HTML:
```text
    <div class="container">
      <ul>
        <li>Item</li>
      </ul>
    </div>
```
CSS:
```text
    .container li {
      color: red;
    }
```
Meaning:

    any li inside .container (no matter how deep)

---

## Difference from Chaining

Chaining:

    h1.special

→ same element must match both

Descendant:

    .main-list li

→ li inside .main-list

---

## Visual Concept
```text
    parent
     └── child (descendant)
          └── child (descendant)
```
Selector:

    parent child → matches all nested children

---

## Key Pattern
```text
    parent child {
      property: value;
    }
```
Example:
```text
    .main-list li {
      color: blue;
    }
```
---

## Key Idea

Descendant combinators style elements based on their
**position within other elements**.

    parent child → nested relationship
