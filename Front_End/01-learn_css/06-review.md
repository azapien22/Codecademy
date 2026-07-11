# CSS — Setup & Syntax Review

## Overview

You’ve learned how to add CSS to HTML and understand
basic CSS structure and terminology.

This is the foundation for styling modern websites.

---

## CSS Syntax Anatomy

CSS can be written in:

    inline styles
    stylesheets (internal / external)

Core structure:
```text
    selector {
      property: value;
    }
```
---

## Key CSS Terms

### Ruleset

Complete CSS block:
```text
    p {
      color: red;
    }
```
---

### Selector

Targets the HTML element:

    p

---

### Declaration

Applies style:

    color: red;

---

### Property

What you change:

    color

---

### Value

How it changes:

    red

---

## Inline Styles

Applied directly inside HTML:

    <p style="color: red;">Text</p>

Characteristics:

- quick to use
- not reusable
- not best practice

---

## Internal Stylesheet

Defined inside `<head>`:
```text
    <style>
      p {
        color: red;
      }
    </style>
```
Characteristics:

- styles multiple elements
- better than inline
- still not best practice

---

## External Stylesheet

Stored in a separate file:

    style.css

Example:
```text
    p {
      color: red;
    }
```
---

## Linking CSS

External CSS is linked using:

    <link href="style.css" rel="stylesheet">

---

## Structure Diagram
```text
    HTML
     ├── head
     │    └── link → CSS file
     └── body
          └── content

    CSS
     └── styling rules
```
---

## Comparison

Inline:

    style="color: red;"

Internal:

    <style>...</style>

External:

    style.css

---

## Best Practice

Use:

    external stylesheets

Avoid:

    excessive inline or internal styles

---

## Key Idea

Modern workflow:

    HTML → structure
    CSS  → styling
    link → connects both
