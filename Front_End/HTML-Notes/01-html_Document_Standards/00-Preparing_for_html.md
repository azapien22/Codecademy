# Preparing for HTML

## Overview

Before writing HTML content, a webpage must be **properly set up**.

HTML documents require specific elements and declarations so that
web browsers understand:

- what type of document is being used
- which version of HTML the page uses

The first step is adding the **document type declaration**.

---

## Document Type Declaration

The document type declaration is written as:

    <!DOCTYPE html>

This line must always appear as the **first line of an HTML file**.

Purpose:

- tells the browser that the document is written in HTML
- informs the browser which HTML standard to expect

---

## HTML5 Standard

Today, the declaration:

    <!DOCTYPE html>

automatically tells the browser to use **HTML5**, the current HTML standard.

HTML5 is the modern version of HTML used to build most websites today.

In the future, if new HTML standards appear, the declaration ensures
the browser interprets the document correctly.

---

## Placement in the Document

The declaration must be placed **before any other HTML code**.

Example:
```Text
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Webpage</title>
      </head>
      <body>
        <p>Hello world</p>
      </body>
    </html>
```
Hierarchy diagram:
```Text
    DOCTYPE
       |
      html
       ├── head
       │     └── title
       └── body
             └── p
```
---

## HTML File Extension

HTML files must be saved using the **.html file extension**.

Examples:

    index.html
    about.html
    contact.html

This file extension tells the operating system and web browser
that the file contains **HTML code**.

---

## Key Rules

1. Every HTML document should begin with:

       <!DOCTYPE html>

2. The declaration must be the **first line of the file**

3. HTML documents should always be saved with the:

       .html

   file extension.

---

## Key Pattern

Basic HTML file structure:
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
Diagram:
```Text
    DOCTYPE
      |
    html
     ├── head
     │    └── title
     └── body
          └── content
```
