# Semantic HTML — The <aside> Element

## Overview

The `<aside>` element is used to contain **additional or supporting content**
that enhances the main content but is **not essential** to understand it.

---

## The `<aside>` Element

The `<aside>` element represents:

- supplementary information
- related content
- side content

Structure:
```text
    <aside>
      additional content
    </aside>
```
---

## Common Uses of `<aside>`

The `<aside>` element is often used for:

- bibliographies
- endnotes
- comments
- pull quotes
- editorial sidebars
- related links
- extra information

---

## Example — `<aside>` with `<article>`

HTML:
```text
    <article>
      <p>
        The first World Series was played between Pittsburgh and Boston in 1903.
      </p>
    </article>

    <aside>
      <p>
        Babe Ruth once stated, “Heroes get remembered, but legends never die.”
      </p>
    </aside>
```
---

## Structure Diagram

HTML hierarchy:
```text
    article
     └── p

    aside
     └── p
```
---

## Content Relationship

Concept:

    article → main content
    aside   → supporting content

Diagram:
```text
    main content (article)
        |
        └── additional info (aside)
```
---

## Key Difference

    article → essential information
    aside   → optional enhancement

---

## Real-World Analogy

Think of a textbook:

- main text → article
- side notes or quotes → aside

Example:

    Chapter content → main idea
    side note      → extra insight

---

## Placement of `<aside>`

`<aside>` can be used:

- alongside `<article>`
- inside `<section>`
- within `<main>`

Example:
```text
    main
     ├── article
     └── aside
```
---

## Key Pattern

Using `<aside>`:
```text
    <article>
      main content
    </article>

    <aside>
      related or additional content
    </aside>
```
---

## Key Idea

Use `<aside>` for **supporting content that enhances but does not define
the main content**.
