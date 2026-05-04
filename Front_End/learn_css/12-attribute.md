# CSS — Attribute Selector

## Overview

HTML elements often include **attributes** such as:

- href
- src
- class
- id

CSS can target elements based on these attributes using
**attribute selectors**.

---

## Basic Syntax
```text
    [attribute] {
      property: value;
    }
```
Example:
```text
    [href] {
      color: magenta;
    }
```
---

## How It Works

HTML:

    <a href="link.html">Link</a>

CSS:
```text
    [href] {
      color: magenta;
    }
```
Result:

    all elements with href turn magenta

---

## Structure Diagram

    selector → [attribute]
        |
        ▼
    targets → elements with that attribute

---

## Targeting Specific Elements

You can combine type + attribute:
```text
    element[attribute] {
      property: value;
    }
```
Example:
```text
    a[href] {
      color: blue;
    }
```
---

## Attribute Value Matching

You can target elements based on **attribute values**.

---

### Contains (`*=`)

Selects elements where the attribute contains a value.

Syntax:

    element[attribute*="value"]

---

## Example — Images

HTML:

    <img src="/images/seasons/cold/winter.jpg">
    <img src="/images/seasons/warm/summer.jpg">

CSS:
```text
    img[src*="winter"] {
      height: 50px;
    }

    img[src*="summer"] {
      height: 100px;
    }
```
---

## Structure Diagram
```text
    img
     ├── src contains "winter" → height: 50px
     └── src contains "summer" → height: 100px
```
---

## Result

- winter image → smaller
- summer image → larger

---

## Benefits of Attribute Selectors

- no need to add class or id
- more flexible targeting
- cleaner HTML
- dynamic styling based on values

---

## Common Pattern
```text
    element[attribute*="value"] {
      property: value;
    }
```
---

## Comparison

Class:

    .winter { }

Attribute:

    img[src*="winter"] { }

Difference:

    class → requires HTML change
    attribute → uses existing attributes

---

## Key Idea

Attribute selectors allow styling elements based on:

    attributes
    attribute values

without modifying HTML structure.

    [attr] → has attribute
    [attr*="value"] → contains value
