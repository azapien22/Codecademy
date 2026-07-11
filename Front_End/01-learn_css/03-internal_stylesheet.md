# CSS — Internal Stylesheet

## Overview

Inline styles are not efficient for styling multiple elements.

Example problem:

- styling many `<h1>` elements requires repeating code
- difficult to maintain and update

Solution:

    internal stylesheet

---

## What is an Internal Stylesheet?

An internal stylesheet is CSS written inside the HTML file
using the `<style>` element.

It is placed inside the `<head>` section.

---

## Basic Structure
```text
    <head>
      <style>

      </style>
    </head>
```
---

## Example — Internal CSS
```text
    <head>
      <style>
        p {
          color: red;
          font-size: 20px;
        }
      </style>
    </head>
```
---

## Structure Diagram
```text
    html
     ├── head
     │    └── style
     │         └── CSS rules
     └── body
          └── HTML content
```
---

## How It Works

1. browser reads HTML
2. browser reads CSS inside `<style>`
3. CSS rules are applied to matching elements

Example:
```text
    p {
      color: red;
    }

→ all `<p>` elements turn red
```
---

## Key Difference from Inline Styles

Inline:

    <p style="color: red;">Text</p>

Internal:
```text
    <style>
      p {
        color: red;
      }
    </style>

    <p>Text</p>
```
---

## Benefits of Internal Stylesheets

- styles multiple elements at once
- reduces repetition
- easier to manage than inline styles
- keeps styling centralized

---

## Limitations

- still inside HTML file
- not reusable across multiple pages
- not best practice for large projects

---

## When to Use Internal CSS

- small projects
- testing styles
- single-page websites

---

## CSS Syntax Reminder
```text
    selector {
      property: value;
    }
```
Example:
```text
    p {
      color: red;
      font-size: 20px;
    }
```
---

## Key Pattern

Internal stylesheet setup:
```text
    <head>
      <style>
        selector {
          property: value;
        }
      </style>
    </head>
```
---

## Key Idea

Internal stylesheets allow you to style multiple elements
from one place, improving organization compared to inline styles.
