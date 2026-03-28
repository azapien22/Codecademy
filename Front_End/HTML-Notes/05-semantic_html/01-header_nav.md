# Semantic HTML — Header and Nav

## Overview

Semantic HTML provides elements that help structure a webpage.

Two important structural elements are:

    <header>
    <nav>

These elements improve:

- readability
- accessibility
- SEO
- organization

---

## The `<header>` Element

The `<header>` element is used for:

- introductory content
- page headings
- navigation sections

It often contains:

    <h1> to <h6>

---

## Example — `<header>`
```text
    <header>
      <h1>
        Everything you need to know about pizza!
      </h1>
    </header>
```
Structure:
```text
    header
     └── h1
```
---

## Non-Semantic Comparison

Using `<div>` instead:
```text
    <div id="header">
      <h1>
        Everything you need to know about pizza!
      </h1>
    </div>
```
Problem:

- `<div>` provides no meaning
- requires extra attributes (like id)

---

## Why `<header>` is Better

Benefits:

- clearly defines purpose
- improves readability
- easier for developers to understand
- better for screen readers

Concept:

    header → meaning
    div    → generic container

---

## The `<nav>` Element

The `<nav>` element is used to define:

- navigation menus
- links to sections
- tables of contents

---

## Example — `<nav>`
```text
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
```
Structure:
```text
    nav
     └── ul
          ├── li
          │    └── a
          └── li
               └── a
```
---

## `<nav>` Inside `<header>`

`<nav>` is often placed inside `<header>`.

Example:
```text
    <header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
```
Hierarchy:
```text
    header
     └── nav
          └── ul
               └── li → a
```
---

## Benefits of `<nav>`

Using `<nav>` helps:

- identify navigation sections
- improve accessibility
- help screen readers understand layout
- improve SEO

---

## Structure Comparison

Non-semantic:
```text
    div
     └── ul
          └── links
```
Semantic:
```text
    nav
     └── ul
          └── links
```
---

## Key Pattern

Header with navigation:
```text
    <header>
      <nav>
        navigation links
      </nav>
    </header>
```
---

## Key Idea

Use semantic elements to describe **what content is**, not just
to group it.

    header → page intro
    nav    → navigation links
