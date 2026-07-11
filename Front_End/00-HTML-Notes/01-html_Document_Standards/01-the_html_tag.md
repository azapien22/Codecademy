# The <html> Tag

## Overview

The `<!DOCTYPE html>` declaration tells the browser:

- the document type
- the HTML version to expect

However, it **does not create the HTML structure itself**.

To define the beginning and end of the HTML document,
we use the `<html>` element.

---

## The `<html>` Element

The `<html>` tag contains **all HTML code in the document**.

It is placed immediately after the `<!DOCTYPE html>` declaration.

Structure:
```Text
    <!DOCTYPE html>
    <html>

    </html>
```
Anything between the opening and closing `<html>` tags
is interpreted as **HTML code by the browser**.

---

## Basic Example

Example HTML structure:
```Text
    <!DOCTYPE html>
    <html>

    </html>
```
This creates the **root container** of the webpage.

---

## Structure Diagram

HTML hierarchy:
```Text
    DOCTYPE
      |
    html
```
Expanded view:
```Text
    <!DOCTYPE html>
    <html>
        HTML content goes here
    </html>
```
Diagram:
```Text
    DOCTYPE
      |
    html
     └── webpage content
```
---

## Why the `<html>` Tag Is Important

The `<html>` element:

- defines the **root of the HTML document**
- tells the browser where HTML content begins
- ensures the browser correctly interprets the page

Without the `<html>` element, browsers may interpret
the document incorrectly.

---

## Full Document Context

Typical HTML document structure:
```Text
    <!DOCTYPE html>
    <html>
      <head>
        <title>Page Title</title>
      </head>
      <body>
        Page content
      </body>
    </html>
```
Hierarchy:
```Text
    DOCTYPE
      |
    html
     ├── head
     │    └── title
     └── body
          └── content
```
---

## Key Pattern

The `<html>` tag surrounds the entire webpage.

General structure:
```Text
    <!DOCTYPE html>
    <html>
        webpage code
    </html>
```
