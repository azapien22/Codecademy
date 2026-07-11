# CSS — Selectors Review

## Overview

CSS selectors are used to **target HTML elements**
and apply styles to them.

This lesson covered the core selector system used in CSS.

---

## Types of Selectors

CSS can select elements using:

    type      → p, h1
    class     → .class
    id        → #id
    attribute → [attr]

---

## Universal Selector

    * {
      property: value;
    }

- selects all elements
- applies global styles

---

## Pseudo-classes

Used to style elements based on **state**.

Examples:

    :hover
    :active
    :focus
    :visited

---

## Multiple Classes

HTML elements can have multiple classes:

    <h1 class="bold blue"></h1>

Result:

    combined styles applied

---

## Classes vs IDs

Classes:

    reusable
    used on many elements

IDs:

    unique
    used once per page

---

## Specificity Hierarchy

    ID (#)        → highest
    class (.)     → medium
    type          → lowest

Rule:

    higher specificity overrides lower

---

## Chaining Selectors

    h1.special

- element must match ALL conditions
- increases specificity

---

## Descendant Selector

    parent child

Example:

    .main p

- selects nested elements

---

## Multiple Selectors
```text
    h1, .menu {
      property: value;
    }
```
- applies same style to multiple elements

---

## Key Patterns

Type:

    p { }

Class:

    .class { }

ID:

    #id { }

Attribute:

    [attr] { }

---

## Visual Summary
```text
    selectors
     ├── type
     ├── class
     ├── id
     ├── attribute
     ├── pseudo-class
     ├── chaining
     ├── descendant
     └── multiple
```
---

## Key Idea

Selectors determine **what elements get styled**.

    more specific → stronger rule
    less specific → easier to override
