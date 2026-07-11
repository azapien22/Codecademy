# HTML Page Titles

## Overview

Webpages contain **metadata** inside the `<head>` element.

One important type of metadata is the **page title**.

The page title is defined using the `<title>` tag.

---

## The `<title>` Element

The `<title>` element sets the **title of the webpage**.

This title appears in:

- the browser tab
- the browser title bar
- search engine results

The `<title>` element must always be placed **inside the `<head>` element**.

Example structure:
```Text
    <title>Page Title</title>
```
---

## Example from the Lesson

Example HTML:
```Text
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Coding Journal</title>
      </head>
    </html>
```
---

## Structure Diagram

HTML hierarchy:
```Text
    DOCTYPE
      |
    html
     └── head
          └── title
```
Expanded structure:
```Text
    html
     └── head
          └── title
                └── page title text
```
---

## Browser Display Concept

If the HTML example is opened in a browser, the browser tab will show:

    My Coding Journal

Example concept:

    [ My Coding Journal ]

This text appears **in the browser tab**, not inside the webpage content.

---

## Why Page Titles Matter

Page titles are important for:

- identifying the webpage
- improving user navigation
- search engine optimization (SEO)
- bookmarking pages

A clear title helps users understand what the page contains.

---

## Best Practice

Use descriptive titles that clearly explain the page.

Example:

    <title>My Coding Journal</title>

Better examples:

    <title>HTML Learning Notes</title>
    <title>JavaScript Tutorial - Beginner Guide</title>

---

## Key Pattern

Typical document structure with a page title:
```Text
    <!DOCTYPE html>
    <html>
      <head>
        <title>Page Title</title>
      </head>
      <body>
        webpage content
      </body>
    </html>
```
Hierarchy diagram:
```Text
    DOCTYPE
      |
    html
     ├── head
     │    └── title
     └── body
          └── page content
```
