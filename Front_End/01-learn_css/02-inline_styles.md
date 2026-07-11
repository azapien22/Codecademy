# CSS — Inline Styles

## Overview

CSS can be written directly inside HTML using **inline styles**.

Inline styles are applied using the `style` attribute
within an HTML element’s opening tag.

---

## Basic Syntax
```text
    <tag style="property: value;">Content</tag>

Example:

    <p style="color: red;">I'm learning to code!</p>
```
---

## Structure Diagram
```text
    element
     ├── opening tag
     │    └── style attribute
     │         └── declaration
     │              ├── property → color
     │              └── value    → red
     └── content
```
---

## Example — Single Style
```text
    <p style="color: red;">
      I'm learning to code!
    </p>

Result:

    text appears in red
```
---

## Multiple Styles

You can apply multiple styles by separating them with semicolons.

Example:
```text
    <p style="color: red; font-size: 20px;">
      I'm learning to code!
    </p>
```
---

## Structure for Multiple Styles
```text
    style="property: value; property: value;"

Example:

    style="color: red; font-size: 20px;"
```
---

## Important Rules

- styles must be inside quotes
- each declaration ends with a semicolon `;`
- multiple styles are separated by semicolons

---

## Common Properties Used Inline

Examples:

    color
    font-size
    background
    text-align

---

## Advantages of Inline Styles

- quick and easy
- useful for testing styles
- applies directly to a single element

---

## Disadvantages of Inline Styles

- not reusable
- harder to maintain
- clutters HTML code
- not scalable for large projects

---

## Best Practice

Inline styles are:

    rarely used in real-world development

Preferred method:

    external CSS (style.css)

---

## Comparison

Inline:
```text
    <p style="color: red;">Text</p>

External CSS:

    p {
      color: red;
    }
```
---

## Key Pattern

Inline styling:

    style="property: value;"

Example:

    style="color: red; font-size: 20px;"

---

## Key Idea

Inline styles directly apply CSS to a single HTML element,
but are not ideal for large or maintainable projects.
