# HTML Indentation

## Overview

Indentation is another tool developers use to make HTML code easier
to read and understand.

Indentation helps visualize **how elements are nested inside one another**.

Indentation is created by inserting spaces or tabs using the keyboard.

---

## HTML Style Standards

The **World Wide Web Consortium (W3C)** maintains the style standards
for HTML.

The W3C recommends:

    2 spaces per indentation level

Although HTML will work without indentation, this formatting standard
is widely used by professional developers.

---

## Why Indentation Matters

Indentation helps developers:

- identify parent and child elements
- understand document structure
- maintain readable code
- debug code more easily

Example concept:

    parent element
      child element
        nested element

---

## Example from the Lesson

Example HTML:
```Text
    <body>
      <p>Paragraph 1</p>
      <div>
        <p>Paragraph 2</p>
      </div>
    </body>
```
---

## Structure Diagram

HTML hierarchy:
```Text
    body
     ├── p   Paragraph 1
     └── div
          └── p   Paragraph 2
```
Indentation visualization:
```Text
    <body>
      <p>Paragraph 1</p>
      <div>
        <p>Paragraph 2</p>
      </div>
    </body>
```
Explanation:

- `<p>` and `<div>` are inside `<body>` → indented **2 spaces**
- the second `<p>` is inside `<div>` → indented **4 spaces**

---

## Parent-Child Relationships

Indentation makes **nesting relationships** clear.

Example structure:
```Text
    body
     └── div
          └── p
```
HTML code:
```Text
    <body>
      <div>
        <p>Text</p>
      </div>
    </body>
```
---

## Without Indentation

Example HTML without indentation:

    <body><p>Paragraph 1</p><div><p>Paragraph 2</p></div></body>

This code works but is **harder to read**.

---

## With Indentation

Example with proper formatting:
```Text
    <body>
      <p>Paragraph 1</p>
      <div>
        <p>Paragraph 2</p>
      </div>
    </body>
```
This structure clearly shows the **relationship between elements**.

---

## Key Pattern

Recommended HTML indentation pattern:
```Text
    <parent>
      <child>
        <grandchild>
        </grandchild>
      </child>
    </parent>
```
Example:
```Text
    <body>
      <div>
        <p>Example text</p>
      </div>
    </body>
```
