# HTML Tables — Styling with CSS

## Overview

By default, HTML tables are **plain and unstyled**:

- no borders
- default font
- basic layout
- minimal visual structure

To improve appearance, developers use **CSS (Cascading Style Sheets)**.

---

## What is CSS?

CSS is a language used to:

- style HTML elements
- control layout and design
- improve readability and presentation

Concept:
```text
    HTML → structure
    CSS  → styling
```
---

## Styling Tables with CSS

CSS can be applied to:

- `<table>`
- `<th>` (table headings)
- `<td>` (table data cells)

Example:
```text
    table, th, td {
      border: 1px solid black;
      font-family: Arial, sans-serif;
      text-align: center;
    }
```
---

## CSS Properties Explained

### Border

    border: 1px solid black;

- adds borders to table and cells
- `1px` → thickness
- `solid` → line style
- `black` → color

---

### Font Family

    font-family: Arial, sans-serif;

- changes the font style
- improves readability

---

### Text Alignment

    text-align: center;

- centers text inside table cells

---

## Structure Diagram

HTML:
```text
    table
     └── tr
          ├── th
          └── td
```
CSS applied to:

    table, th, td

---

## Visual Concept

Without CSS:

    73   81

With CSS:

    +----+----+
    | 73 | 81 |
    +----+----+

Styled with:

- borders
- centered text
- improved font

---

## Separation of Concerns

Modern web development separates:

    HTML → content & structure
    CSS  → design & styling

Diagram:
```text
    HTML
     └── table structure

    CSS
     └── visual styling
```
---

## Why Use CSS for Tables

Benefits:

- improves readability
- enhances visual design
- keeps HTML clean
- allows consistent styling across pages

---

## Key Pattern

Basic table styling:
```Text
    table, th, td {
    border: 1px solid black;
      font-family: Arial, sans-serif;
      text-align: center;
    }
```
