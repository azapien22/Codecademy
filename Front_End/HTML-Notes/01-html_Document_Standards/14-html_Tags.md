# HTML Tags

## Overview

HTML uses **tags** to describe and structure webpage content.

Some tags have a very specific purpose, such as:

- image tags
- video tags
- link tags

Other tags are more general and are used to describe the content they surround.

Well-chosen, descriptive tags are important in high-quality web development because they help:

- organize content
- improve readability
- support styling with CSS
- support behavior with JavaScript

---

## Key Idea

Most HTML tags describe the content they surround.

Example:
```Text
    <p>Paragraph text</p>
```
Here:

- `<p>` describes the content as a paragraph

Example:
```Text
    <h1>Main Title</h1>
```
Here:

- `<h1>` describes the content as a main heading

The choice of tag depends on **how you want to describe the content**.

---

## Why Tags Matter

Using the correct HTML tags helps with:

- code organization
- styling later with CSS
- accessibility
- search engine understanding
- semantic structure

Descriptive HTML leads to better web development.

---

## Lesson Review

### 1. `<!DOCTYPE html>`

The `<!DOCTYPE html>` declaration should always be the **first line** in an HTML file.

Purpose:

- tells the browser which version of HTML to expect

Example:

    <!DOCTYPE html>

---

### 2. `<html>`

The `<html>` element contains **all HTML code** on the page.

Example:
```Text
    <html>
      ...
    </html>
```
Structure:
```Text
    html
     ├── head
     └── body
```
---

### 3. `<head>`

The `<head>` element stores information **about the webpage**.

This information is not usually displayed on the page itself.

Example content inside `<head>`:

- title
- metadata
- links to stylesheets

Example:
```Text
    <head>
      ...
    </head>
```
---

### 4. `<title>`

The `<title>` element sets the title of the webpage.

It must be placed inside the `<head>` element.

Example:
```Text
    <head>
      <title>My Webpage</title>
    </head>
```
The title appears in the **browser tab**.

---

### 5. Anchor Tags `<a>`

Anchor tags are used to create **links**.

They can link to:

- internal pages
- external pages
- content on the same page

Example:
```Text
    <a href="https://example.com">Visit Example</a>
```
---

### 6. Linking to Sections with `id`

You can create jump links within the same page by:

- giving an element an `id`
- linking to that `id` with an anchor tag

Example:
```Text
    <h2 id="about">About</h2>
    <a href="#about">Go to About</a>
```
Structure:
```Text
    a
     └── href="#about"

    h2
     └── id="about"
```
---

### 7. Whitespace

Whitespace between elements makes HTML easier to read.

Whitespace includes:

- spaces
- line breaks
- empty lines

Important:

Whitespace usually does **not** change how elements appear in the browser.

Example:
```Text
    <h1>Title</h1>
    <p>Paragraph</p>
```
---

### 8. Indentation

Indentation makes parent-child relationships easier to see.

Example:
```Text
    <body>
      <div>
        <p>Text</p>
      </div>
    </body>
```
Hierarchy:
```Text
    body
     └── div
          └── p
```
Indentation improves code readability.

---

### 9. Comments

Comments are notes in HTML that are **not displayed in the browser**.

Syntax:

    <!-- comment -->

Example:

    <!-- This is a note for developers -->

Comments help explain code or leave reminders.

---

## Structure Diagram

Typical HTML page structure:
```Text
    <!DOCTYPE html>
    <html>
      <head>
        <title>Page Title</title>
      </head>
      <body>
        <h1>Main Heading</h1>
        <p>Paragraph text</p>
        <a href="#section">Jump to Section</a>
      </body>
    </html>
```
Hierarchy diagram:
```Text
    doctype
      |
    html
     ├── head
     │    └── title
     └── body
          ├── h1
          ├── p
          └── a
```
---

## Key Pattern

General HTML document pattern:
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
---

## Final Takeaway

HTML tags are the building blocks of webpages.

Good HTML uses:

- correct tags
- clear structure
- readable indentation
- meaningful organization

The better you choose your tags, the easier it becomes to:

- style pages with CSS
- add interactivity with JavaScript
- build professional websites
