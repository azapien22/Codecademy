# Linking to the Same Page

## Overview

Sometimes a webpage contains a lot of content, and not everything fits
on one screen.

To make navigation easier, HTML allows users to click a link and jump
to a **specific section on the same page**.

This is done by:

1. giving an element an `id`
2. creating a link that points to that `id`

---

## The `id` Attribute

To link to a location on the same page, the target element must have
an `id` attribute.

Example:
```Text
    <p id="top">This is the top of the page!</p>
    <h1 id="bottom">This is the bottom!</h1>
```
In this example:

- the `<p>` element has the id `"top"`
- the `<h1>` element has the id `"bottom"`

An `id` can be added to most HTML elements.

---

## Why `id` Values Matter

Each `id` should be:

- unique
- descriptive
- easy to remember

Good examples:
```Text
    id="top"
    id="bottom"
    id="about"
    id="contact"
```
Descriptive ids make links easier to understand and maintain.

---

## Linking to an `id`

To create a same-page link, the anchor tag uses:

    href="#id-name"

The `#` symbol tells the browser to look for an element with that id.

Example:
```Text
    <a href="#top">Top</a>
    <a href="#bottom">Bottom</a>
```
---

## Example from the Lesson

Target elements:
```Text
    <p id="top">This is the top of the page!</p>
    <h1 id="bottom">This is the bottom!</h1>
```
Navigation links:
```Text
    <ol>
      <li><a href="#top">Top</a></li>
      <li><a href="#bottom">Bottom</a></li>
    </ol>
```
---

## Structure Diagram

HTML hierarchy:
```Text
    body
     ├── p   id="top"
     ├── h1  id="bottom"
     └── ol
          ├── li
          │    └── a  href="#top"
          └── li
               └── a  href="#bottom"
```
Navigation concept:
```Text
    a href="#top"      ───►   p id="top"
    a href="#bottom"   ───►   h1 id="bottom"
```
---

## Browser Behavior

When the user clicks:

    <a href="#top">Top</a>

the browser scrolls to:

    <p id="top">This is the top of the page!</p>

When the user clicks:

    <a href="#bottom">Bottom</a>

the browser scrolls to:

    <h1 id="bottom">This is the bottom!</h1>

---

## Ordered List Example

The lesson places same-page links inside an ordered list:
```Text
    <ol>
      <li><a href="#top">Top</a></li>
      <li><a href="#bottom">Bottom</a></li>
    </ol>
```
Browser output concept:

    1. Top
    2. Bottom

Each item is a clickable link to a different section on the same page.

---

## Why This Is Useful

Same-page links are useful for:

- long webpages
- table of contents navigation
- jumping to sections quickly
- documentation pages
- FAQs
- returning to the top of the page

---

## Useful with `<div>`

An `id` is especially useful when attached to a `<div>` that groups content.

Example:
```Text
    <div id="about">
      <h2>About</h2>
      <p>About content here</p>
    </div>
```
Link:

    <a href="#about">Go to About</a>

Structure:
```Text
    a href="#about"
        |
        ▼
    div id="about"
```
---

## Key Pattern

Target element:

    <element id="section-name">Content</element>

Link to target:

    <a href="#section-name">Go to Section</a>

Example:

    <h2 id="contact">Contact</h2>
    <a href="#contact">Jump to Contact</a>

---

## Full Example
```Text
    <p id="top">This is the top of the page!</p>
    <h1 id="bottom">This is the bottom!</h1>

    <ol>
      <li><a href="#top">Top</a></li>
      <li><a href="#bottom">Bottom</a></li>
    </ol>
```
Hierarchy diagram:
```Text
    body
     ├── p    id="top"
     ├── h1   id="bottom"
     └── ol
          ├── li
          │    └── a href="#top"
          └── li
               └── a href="#bottom"
```
