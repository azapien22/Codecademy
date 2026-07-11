# HTML Whitespace

## Overview

As HTML files grow larger, it becomes harder to understand how
different elements relate to each other.

Developers use two tools to make HTML easier to read:

- whitespace
- indentation

These tools improve **code readability**, but they do **not change
how the webpage appears in the browser**.

---

## What Is Whitespace?

Whitespace includes:

- spaces
- line breaks
- blank lines

Browsers **ignore whitespace** when rendering HTML pages.

This means developers can add whitespace to make code easier to read.

---

## Example Without Whitespace

Example HTML:

    <body><p>Paragraph 1</p><p>Paragraph 2</p></body>

This is difficult to read because all elements appear on a single line.

Structure:
```Text
    body
     ├── p
     └── p
```
But visually it is hard to see.

---

## Example With Whitespace

Example HTML:
```Text
    <body>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    </body>
```
This version is easier to read because each element appears
on its own line.

Structure:
```Text
    body
     ├── p  Paragraph 1
     └── p  Paragraph 2
```
---

## Browser Rendering

Even though the code looks different, the browser renders
both examples the same way.

Displayed output:

    Paragraph 1
    Paragraph 2

Browsers ignore extra spaces and line breaks in HTML code.

---

## Why Whitespace Is Useful

Whitespace helps developers:

- understand document structure
- quickly identify elements
- organize large files
- maintain readable code

Example readable structure:
```Text
    <body>
        <h1>Title</h1>
        <p>Paragraph text</p>
        <p>Another paragraph</p>
    </body>
```
---

## Key Idea

Whitespace improves **code readability** but does not affect
**visual layout in the browser**.

General pattern:
```Text
    <parent>
        <child>
            content
        </child>
    </parent>
```
---

## What Comes Next

Indentation is another tool developers use to make
**parent-child relationships between elements easier to see**.

Example concept:
```Text
    body
     └── div
          └── p
```
