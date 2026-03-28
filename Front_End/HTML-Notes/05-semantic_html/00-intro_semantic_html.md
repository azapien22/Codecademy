# Semantic HTML — Introduction

## Overview

When building web pages, developers use:

- semantic HTML
- non-semantic HTML

The word **semantic** means:

    "relating to meaning"

Semantic HTML elements describe the **meaning of the content**
inside them.

---

## Semantic vs Non-Semantic Elements

### Non-Semantic Elements

These elements provide **no meaning or context**:

    <div>
    <span>

They only act as containers.

Example:
```text
    <div>
      Header content
    </div>
```
Problem:

    unclear what the content represents

---

### Semantic Elements

Semantic elements describe **what the content is**.

Example:
```text
    <header>
      Header content
    </header>
```
Meaning:

    this section represents a header

---

## Example Comparison

Non-semantic:
```text
    <div>
      <h1>My Website</h1>
    </div>
```
Semantic:
```text
    <header>
      <h1>My Website</h1>
    </header>
```
---

## Why Use Semantic HTML?

### 1. Accessibility

Semantic HTML improves accessibility for:

- screen readers
- assistive technologies
- mobile devices

Concept:

    semantic structure
        ↓
    easier interpretation

---

### 2. SEO (Search Engine Optimization)

Semantic HTML helps search engines:

- understand page content
- rank important sections properly
- improve visibility

Concept:

    better structure → better SEO

---

### 3. Readability for Developers

Semantic HTML makes code:

- easier to read
- easier to maintain
- easier to understand

Example:
```text
    <header> vs <div>
    <nav>    vs <div>
    <footer> vs <div>
```
---

## Real-World Analogy

Non-semantic HTML:

    store with no labels

    aisle 1 → unknown
    aisle 2 → unknown

Semantic HTML:

    store with labeled aisles

    aisle 1 → food
    aisle 2 → electronics

Meaning:

    easier to navigate and understand

---

## Structure Concept

Non-semantic structure:
```text
    div
     └── div
          └── div
```
Semantic structure:

    header
    nav
    main
    footer

---

## Key Idea

Semantic HTML focuses on:

    meaning over appearance

General pattern:

    use elements based on what they represent,
    not how they look
