# Semantic HTML — Review

## Overview

Semantic HTML provides **meaning and structure** to web pages.

By using semantic elements, developers create websites that are:

- easier to read
- more accessible
- better optimized for search engines

---

## What is Semantic HTML?

Semantic HTML uses elements that describe **what content is**, not
just how it looks.

Example:

    <header> → page header
    <nav>    → navigation
    <main>   → main content

---

## Benefits of Semantic HTML

### Accessibility

- improves support for screen readers
- helps assistive technologies interpret content

---

### SEO (Search Engine Optimization)

- helps search engines understand page structure
- improves ranking and visibility

---

### Readability

- easier for developers to understand code
- better organization and maintenance

---

## Core Structure Elements

Basic webpage layout:
```text
    html
     ├── header
     ├── nav
     ├── main
     └── footer
```
---

### `<header>`

- introductory content
- headings or navigation

---

### `<nav>`

- navigation links
- menus

---

### `<main>`

- primary content of the page

---

### `<footer>`

- bottom section
- contact info, copyright, links

---

## Content Organization Elements

### `<section>`

- groups related content
- defines a theme or topic

Example:

    section → category

---

### `<article>`

- independent content
- can stand alone

Example:

    article → blog post

---

### `<aside>`

- supplementary content
- enhances but is not required

Example:

    aside → sidebar

---

## Media Elements

### `<figure>`

- groups media content

---

### `<figcaption>`

- describes media inside `<figure>`

---

### `<video>`

- embeds video content

---

### `<audio>`

- embeds audio content

---

### `<embed>` (Deprecated)

- embeds external media
- replaced by modern elements

---

## Structure Diagram

Complete semantic layout:
```text
    html
     ├── header
     ├── nav
     ├── main
     │    ├── section
     │    │    └── article
     │    └── aside
     └── footer
```
---

## Key Idea

Semantic HTML focuses on:

    meaning + structure + accessibility

---

## Final Takeaway

Use semantic elements to:

- describe content clearly
- improve accessibility
- enhance SEO
- write clean, professional code
