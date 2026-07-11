# HTML Line Breaks

## Overview

Spacing in an HTML file **does not affect how content appears in the browser**.

For example, adding extra spaces or pressing Enter in your code will not create visible spacing on the webpage.

To create visible spacing in the browser, HTML provides the **line break element**.

    `<br>`

The `<br>` tag inserts a **line break**, moving content to the next line.

---

## The Line Break Element

The `<br>` element creates a **new line within text**.

Example:
```Text
    <p>Hello<br>World</p>
```
Browser output concept:

    Hello
    World

---

## Unique Feature of `<br>`

The `<br>` element is **different from most HTML elements**.

Most elements have:

    opening tag
    content
    closing tag

Example:
```Text
    <p>Paragraph text</p>
```
However, the `<br>` element has **only one tag**.

Example:
```Text
    <br>
```
It does **not contain content** and does **not require a closing tag**.

---

## Example from the Lesson

Example HTML:
```Text
    <p>
      The Nile River is the longest river <br>
      in the world, measuring over 6,850 <br>
      kilometers long (approximately 4,260 <br>
      miles).
    </p>
```
---

## Structure Diagram

HTML structure:
```Text
    p
     ├── text
     ├── br
     ├── text
     ├── br
     ├── text
     ├── br
     └── text
```
Visual concept in browser:

    The Nile River is the longest river
    in the world, measuring over 6,850
    kilometers long (approximately 4,260
    miles).

---

## When to Use `<br>`

The `<br>` element is useful when:

- breaking lines in poetry
- formatting addresses
- formatting song lyrics
- creating controlled line breaks inside text

Example:
```Text
    <p>
      123 Main Street<br>
      Chicago, IL 60601<br>
      United States
    </p>
```
---

## When NOT to Use `<br>`

Do not use `<br>` for large layout spacing.

Instead use:

- paragraphs `<p>`
- div containers `<div>`
- CSS spacing

---

## Key Idea

The `<br>` element creates a **line break within text**.

General pattern:
```Text
    text <br> text
```
Example:
```Text
    <p>
      line one <br>
      line two <br>
      line three
    </p>
```
