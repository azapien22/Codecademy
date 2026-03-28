# Semantic HTML — Main and Footer

## Overview

In addition to `<header>` and `<nav>`, two more important
semantic elements are:

    <main>
    <footer>

These elements help define **where content belongs** on a webpage.

---

## The `<main>` Element

The `<main>` element contains the **primary content** of a webpage.

It represents:

- the main topic
- the central information
- the most important content

Important:
```text
    <main> does NOT include:
      - navigation
      - headers
      - footers
```
---

## Why Use `<main>`

Benefits:

- identifies core content
- improves accessibility
- helps screen readers
- improves SEO
- better than using <div>

Concept:

    main → primary content
    div  → generic container

---

## Example — `<main>`
```text
    <main>
      <header>
        <h1>Types of Sports</h1>
      </header>

      <article>
        <h3>Baseball</h3>
        <p>
          The first game of baseball was played in Cooperstown, New York in 1839.
        </p>
      </article>
    </main>
```
---

## Structure Diagram

HTML hierarchy:
```text
    main
     ├── header
     │    └── h1
     └── article
          ├── h3
          └── p
```
---

## The `<footer>` Element

The `<footer>` element represents the **bottom section of a webpage**.

It contains **supplementary information**.

---

## Common Footer Content

Footers often include:

- contact information
- copyright information
- terms of use
- site map
- links to top of page

---

## Example — `<footer>`
```text
    <footer>
      <p>Email me at Codey@Codecademy.com</p>
    </footer>
```
Structure:
```text
    footer
     └── p
```
---

## Placement of `<footer>`

The `<footer>` element is typically placed:

- at the bottom of the page
- outside the `<main>` element

Structure:
```text
    html
     ├── main
     └── footer
```
---

## Full Page Structure

Example layout:
```text
    <html>
      <header></header>
      <nav></nav>
      <main>
        content
      </main>
      <footer>
        footer content
      </footer>
    </html>
```
---

## Structure Diagram
```text
    html
     ├── header
     ├── nav
     ├── main
     │    └── content
     └── footer
```
---

## Key Pattern

Basic usage:
```text
    <main>
      main content
    </main>

    <footer>
      footer content
    </footer>
```
---

## Key Idea

Semantic layout:

    header → introduction
    nav    → navigation
    main   → primary content
    footer → supporting information
