# The <head> Element

## Overview

After setting up the basic HTML structure, the next step is to add
information **about the webpage itself**.

So far we have:

1. Declared the HTML document type

       <!DOCTYPE html>

2. Added the root HTML container

       <html>

The next element added inside `<html>` is the **head element**.

---

## The `<head>` Element

The `<head>` element contains **metadata about the webpage**.

Metadata means **information about the page**, not content that is
displayed directly on the webpage.

Structure:
```Text
    <head>
    </head>
```
The `<head>` element appears **before the `<body>` element**.

---

## Metadata

Metadata is information describing the webpage.

Examples of metadata include:

- page title
- character encoding
- links to CSS files
- script references
- SEO information

Important:

Content inside `<head>` is **not shown on the webpage itself**.

---

## Placement in the HTML Document

The `<head>` element is typically the **first element inside `<html>`**.

Example structure:
```Text
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
      </body>
    </html>
```
---

## Structure Diagram

HTML hierarchy:
```Text
    DOCTYPE
      |
    html
     ├── head
     └── body
```
Expanded view:
```Text
    html
     ├── head
     │    └── metadata
     └── body
          └── visible content
```
---

## HTML Metaphor

HTML elements can be compared to parts of a body:

    head → information about the page
    body → visible content of the page

Diagram:
```Text
    html
     ├── head  (page information)
     └── body  (page content)
```
---

## Example Document Structure

Example HTML file:
```Text
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Webpage</title>
      </head>
      <body>
        <h1>Hello World</h1>
        <p>This is my webpage.</p>
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
          ├── h1
          └── p
```
---

## Key Idea

The `<head>` element stores **information about the webpage**,
not the visible content.

General pattern:
```Text
    <head>
        metadata about the webpage
    </head>
```
