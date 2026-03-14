# Linking At Will

## Overview

Links in HTML are commonly created using **text**.

Example:
```Text
    <a href="https://en.wikipedia.org/wiki/Opuntia"
       target="_blank">
       Prickly Pear
    </a>
```
However, HTML allows developers to create links using **more than just text**.

Almost **any HTML element can become a link**.

This is done by wrapping the element inside an **anchor `<a>` element**.

---

## Wrapping Elements with Anchor Tags

The anchor element can surround other HTML elements.

Structure:
```Text
    <a href="URL">
        element
    </a>
```
Example:
```Text
    <a href="https://example.com">
        <img src="image.jpg" alt="example image">
    </a>
```
This turns the **image into a clickable link**.

---

## Turning Images into Links

Images can become clickable links by placing the `<img>`
element inside an `<a>` element.

Example:
```Text
    <a href="https://en.wikipedia.org/wiki/Opuntia"
       target="_blank">
       <img src="https://www.Prickly_Pear_Closeup.jpg"
            alt="A red prickly pear fruit" />
    </a>
```
Result:

    clicking the image opens the linked webpage.

---

## Structure Diagram

HTML hierarchy:
```Text
    a
     └── img
```
Expanded structure:
```Text
    a
     ├── href
     ├── target
     └── img
          ├── src
          └── alt
```
Example diagram:
```Text
    a
     ├── href="https://en.wikipedia.org/wiki/Opuntia"
     ├── target="_blank"
     └── img
          ├── src="Prickly_Pear_Closeup.jpg"
          └── alt="A red prickly pear fruit"
```
---

## Why This Is Useful

Wrapping elements in links allows developers to create:

- clickable images
- clickable buttons
- clickable icons
- clickable cards
- interactive page elements

This technique increases **design flexibility**.

---

## Example Use Case

Clickable image:
```Text
    <a href="https://example.com">
        <img src="photo.jpg" alt="Example Photo">
    </a>
```
User behavior:

    click image → browser opens linked page

---

## Browser Concept

Page content:

    [ image ]

User clicks image:

    browser navigates to linked URL

Diagram:
```Text
    image
      |
      ▼
    link destination
```
---

## Key Pattern

Wrapping an element in a link:
```Text
    <a href="URL">
        element
    </a>
```
Example:
```Text
    <a href="https://example.com">
        <img src="photo.jpg" alt="Example image">
    </a>
```
Hierarchy diagram:
```Text
    a
     └── element
```
