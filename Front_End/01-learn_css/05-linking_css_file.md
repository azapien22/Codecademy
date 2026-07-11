# CSS — Linking the CSS File

## Overview

Separating HTML and CSS into different files is good practice,
but the styles will not apply unless the files are **linked**.

If not linked:

    HTML → loads
    CSS  → ignored

---

## The `<link>` Element

The `<link>` element connects an HTML file to a CSS file.

It must be placed inside the `<head>`.

Structure:

    <link href="path" rel="stylesheet">

---

## Important Attributes

### `href`

Specifies the **path to the CSS file**.

Example:

    href="style.css"

---

### `rel`

Defines the relationship between files.

For CSS:

    rel="stylesheet"

---

## Example — Linking CSS
```text
    <head>
      <link href="style.css" rel="stylesheet">
    </head>
```
---

## Structure Diagram
```text
    html
     ├── head
     │    └── link → CSS file
     └── body
          └── content
```
Concept:
```text
    index.html
        |
        └── style.css (linked)
```
---

## Absolute Path (URL)

You can link using a full URL.

Example:

    <link href="https://www.codecademy.com/stylesheets/style.css" rel="stylesheet">

Use case:

- external stylesheets
- hosted CSS files

---

## Relative Path

Most common method.

Example:

    <link href="./style.css" rel="stylesheet">

Meaning:

    look in the current folder

---

## Path Examples

Same folder:

    ./style.css

Subfolder:

    ./css/style.css

Parent folder:

    ../style.css

---

## How Linking Works

1. browser loads HTML
2. finds `<link>` in `<head>`
3. loads CSS file
4. applies styles

Result:

    styled webpage

---

## Common Mistakes

- forgetting `<link>` tag
- placing `<link>` outside `<head>`
- incorrect file path
- missing `rel="stylesheet"`

---

## Key Pattern

Linking CSS:

    <link href="style.css" rel="stylesheet">

---

## Key Idea

HTML and CSS must be linked for styles to apply.

    HTML → structure
    CSS  → styling
    link → connection
