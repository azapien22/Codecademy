# Opening Links in a New Window or Tab

## Overview

By default, when a user clicks a link, the browser opens the
destination **in the same tab or window**.

However, HTML allows links to open in a **new tab or window**.

This behavior is controlled using the **target attribute** of the
anchor `<a>` element.

---

## The `target` Attribute

The `target` attribute specifies **how the linked page should open**.

It is added inside the opening `<a>` tag.

Structure:

    <a href="URL" target="value">Link Text</a>

---

## Opening a Link in a New Tab

To open a link in a new tab (or window), use the value:

    target="_blank"

Example:
```Text
    <a href="https://en.wikipedia.org/wiki/Brown_bear"
       target="_blank">
       The Brown Bear
    </a>
```
---

## Structure Diagram

HTML element structure:
```Text
    a
     ├── href
     ├── target
     └── link text
```
Example:
```Text
    a
     ├── href="https://en.wikipedia.org/wiki/Brown_bear"
     ├── target="_blank"
     └── The Brown Bear
```
---

## Browser Behavior

Default link behavior:

    <a href="URL">Link</a>

Result:

    opens in the same tab

---

Link with target attribute:

    <a href="URL" target="_blank">Link</a>

Result:

    opens in a new tab

Concept:

    Current Tab  → Your Website
    New Tab      → Linked Website

---

## Why Use `target="_blank"`

Opening links in a new tab is useful when linking to:

- external websites
- documentation
- reference material
- third-party resources

This allows users to **visit another page without leaving your site**.

Example:
```Text
    <a href="https://example.com" target="_blank">
      External Resource
    </a>
```
---

## Browser Note

Older browsers used **separate windows**.

Modern browsers usually open `_blank` links in a **new tab instead**.

Example concept:

    Browser Tabs

    [Your Site] [Linked Site]

---

## Key Pattern

Opening a link in a new tab:

    <a href="URL" target="_blank">Link Text</a>

Example:
```Text
    <a href="https://en.wikipedia.org/wiki/Brown_bear"
       target="_blank">
       The Brown Bear
    </a>
```
Hierarchy diagram:
```Text
    a
     ├── href="URL"
     ├── target="_blank"
     └── link text
```
