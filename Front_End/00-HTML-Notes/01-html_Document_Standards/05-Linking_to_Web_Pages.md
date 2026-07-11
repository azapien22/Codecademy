# Linking to Other Web Pages

## Overview

One of the most powerful features of HTML is the ability to **link to other web pages**.

Links allow users to navigate between:

- webpages
- websites
- documents
- sections within pages

HTML creates links using the **anchor element**.

    <a>

---

## The `<a>` Element

The `<a>` tag is called the **anchor tag**.

It is used to create a **hyperlink**.

Basic structure:

    <a>Link Text</a>

Example:

    <a>This Is A Link To Wikipedia</a>

However, this example is **incomplete** because it does not specify
where the link should go.

---

## The `href` Attribute

To create a functional link, the anchor tag must include the **href attribute**.

`href` stands for **Hypertext Reference**.

The `href` attribute tells the browser **where the link should go**.

Structure:

    <a href="URL">Link Text</a>

---

## Example from the Lesson

Example HTML:
```Text
    <a href="https://www.wikipedia.org/">
      This Is A Link To Wikipedia
    </a>
```
Breakdown:

    tag:        a
    attribute:  href
    value:      https://www.wikipedia.org/

---

## Structure Diagram

HTML element structure:
```Text
    a
     ├── href
     └── link text
```
Example diagram:
```Text
    a
     ├── href="https://www.wikipedia.org/"
     └── This Is A Link To Wikipedia
```
---

## Browser Output Concept

When displayed in a browser, the link appears as clickable text.

Example:

    This Is A Link To Wikipedia

When clicked, the browser navigates to:

    https://www.wikipedia.org/

---

## What the `href` Can Link To

The `href` attribute can point to:

- another website
- another page on the same website
- a file on your computer
- a section within the same page

Example:

    <a href="https://example.com">External Website</a>

---

## Link Terminology

Two common terms are used:

    link
    hyperlink

Both terms mean the same thing.

A **hyperlink** is simply the technical term for a link.

---

## Key Pattern

Basic HTML link structure:

    <a href="URL">Link Text</a>

Example:
```Text
    <a href="https://www.wikipedia.org/">
        Visit Wikipedia
    </a>
```
Hierarchy diagram:
```Text
    a
     ├── href="URL"
     └── link text
```
