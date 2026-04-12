# CSS — Introduction

## Overview

HTML provides the **structure** of a webpage.

By itself, HTML can look plain or visually unappealing.

CSS stands for:

    Cascading Style Sheets

CSS is the language used to **style HTML content**.

---

## What CSS Can Do

CSS can be used to change:

- colors
- fonts
- font sizes
- images
- spacing
- layout
- positioning
- overall design

Concept:

    HTML → structure
    CSS  → appearance

---

## Why CSS Matters

Without CSS:

- webpages look plain
- elements use default browser styles

With CSS:

- webpages look polished
- design becomes customizable
- layout becomes more readable and attractive

---

## Linking CSS to HTML

To use CSS, the HTML file must link to a stylesheet.

Example:

    <link href="style.css" rel="stylesheet">

This line connects:

- the HTML file
- the CSS file

---

## Placement of the `<link>` Tag

The `<link>` tag is typically placed inside the `<head>` element.

Example:
```text
    <!DOCTYPE html>
    <html>
      <head>
        <link href="style.css" rel="stylesheet">
      </head>
      <body>
        content
      </body>
    </html>
```
---

## Structure Diagram

HTML hierarchy:
```text
    html
     ├── head
     │    └── link → style.css
     └── body
          └── page content
```
Concept:
```text
    index.html
        |
        └── linked to → style.css
```
---

## The `style.css` File

The CSS file contains the rules that control how HTML elements appear.

Example concept:

    HTML file  → content
    CSS file   → styling rules

---

## What Happens When CSS Is Linked

When the browser loads the webpage:

1. it reads the HTML structure
2. it loads the linked CSS file
3. it applies the styles to matching HTML elements

Result:

    styled webpage

---

## Key Pattern

Linking CSS in HTML:

    <link href="style.css" rel="stylesheet">

Meaning:

- `href` → path to the CSS file
- `rel="stylesheet"` → tells the browser this file is a stylesheet

---

## Key Idea

CSS makes webpages visually appealing by styling HTML structure.

    HTML = content and structure
    CSS  = presentation and design
