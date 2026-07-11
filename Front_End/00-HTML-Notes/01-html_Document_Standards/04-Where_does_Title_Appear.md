# Where Does the Page Title Appear?

## Overview

The `<title>` element defines the **title of a webpage**.

This title appears in the **browser tab or title bar** when the webpage
is opened in a browser.

In the Codecademy learning environment, the browser panel does not
include a title bar, so the page title may not appear.

However, in a normal browser the title will be visible.

---

## Browser Tab Example

Example page title:
```Text
    <title>Brown Bear</title>
```
Browser tab concept:

    [ Brown Bear ]

The text "Brown Bear" would appear in the **browser tab title**.

---

## HTML Structure So Far

So far we have learned the basic structure of an HTML document.

Example:
```Text
    <!DOCTYPE html>
    <html>
      <head>
        <title>Brown Bear</title>
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
     ├── head
     │    └── title
     └── body (coming next)
```
---

## Review of Core HTML Elements

### `<!DOCTYPE html>`

The declaration that specifies the **HTML version** used by the browser.

Example:

    <!DOCTYPE html>

---

### `<html>`

The root element that **contains all HTML code**.

Example:
```Text
    <html>
        HTML content
    </html>
```
---

### `<head>`

The section containing **metadata about the webpage**.

Example:
```Text
    <head>
        metadata here
    </head>
```
---

### `<title>`

The element that defines the **page title displayed in the browser tab**.

Example:

    <title>Brown Bear</title>

---

## Full Document Structure (So Far)

Example HTML document:
```Text
    <!DOCTYPE html>
    <html>
      <head>
        <title>Brown Bear</title>
      </head>
      <body>
        webpage content will go here
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
---

## Key Idea

The `<title>` element controls the **name shown in the browser tab**.

General pattern:
```Text
    <head>
        <title>Page Title</title>
    </head>
```
