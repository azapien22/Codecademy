# CSS — External Stylesheet

## Overview

Developers separate HTML and CSS into different files to keep code:

- clean
- organized
- maintainable

This approach uses an **external stylesheet**.

---

## What is an External Stylesheet?

An external stylesheet is a **separate `.css` file** that contains CSS code.

Example file:

    style.css

---

## File Structure

Project structure:
```text
    project-folder/
     ├── index.html
     └── style.css
```
---

## Linking CSS to HTML

To use an external stylesheet, link it in the `<head>`:

    <link href="style.css" rel="stylesheet">

---

## Structure Diagram
```text
    index.html
        |
        └── linked to → style.css

    style.css
        └── CSS rules
```
---

## Example

HTML:
```text
    <head>
      <link href="style.css" rel="stylesheet">
    </head>
```
CSS (style.css):
```text
    p {
      color: red;
    }
```
Result:

    all <p> elements turn red

---

## How It Works

1. browser loads HTML
2. browser finds `<link>` tag
3. browser loads CSS file
4. styles are applied to HTML elements

---

## Benefits of External Stylesheets

- separates structure (HTML) from design (CSS)
- improves readability
- easier to maintain
- reusable across multiple pages
- scalable for large projects

---

## Comparison

Inline:

    <p style="color: red;">Text</p>

Internal:
```text
    <style>
      p { color: red; }
    </style>
```
External:

    p { color: red; }

---

## Best Practice

External stylesheets are:

    the standard in real-world web development

---

## Key Pattern

Linking external CSS:

    <link href="style.css" rel="stylesheet">

---

## Key Idea

External stylesheets keep HTML clean and allow CSS to be
managed separately, making development more efficient.
