# Semantic HTML — Article and Section

## Overview

Inside the `<main>` content of a webpage, we use semantic elements
to organize content.

Two important elements are:

    <section>
    <article>

These elements help group and structure content meaningfully.

---

## The `<section>` Element

The `<section>` element is used to group **related content**.

It represents:

- a topic
- a theme
- a logical part of a page

Examples:

- chapters
- news sections
- categories
- homepage sections

---

## Example — `<section>`
```text
    <section>
      <h2>Fun Facts About Cricket</h2>
    </section>
```
Structure:
```text
    section
     └── h2
```
---

## Purpose of `<section>`

Use `<section>` when:

- content shares a common theme
- grouping related information
- organizing page layout

Example concept:
```text
    section
     ├── heading
     └── related content
```
---

## The `<article>` Element

The `<article>` element contains **independent content**.

It represents content that:

- can stand on its own
- can be reused or shared
- has a clear beginning and end

---

## Examples of `<article>` Content

- blog posts
- news articles
- comments
- forum posts
- magazine entries

---

## Example — `<article>`
```text
    <article>
      <p>A single match of cricket can last up to 5 days.</p>
    </article>
```
Structure:
```text
    article
     └── p
```
---

## `<section>` + `<article>` Together

Example:
```text
    <section>
      <h2>Fun Facts About Cricket</h2>
      <article>
        <p>A single match of cricket can last up to 5 days.</p>
      </article>
    </section>
```
---

## Structure Diagram

HTML hierarchy:
```text
    section
     ├── h2
     └── article
          └── p
```
---

## Relationship Between `<section>` and `<article>`

Common pattern:
```text
    section
     └── article
```
However, depending on context:
```text
    article
     └── section
```
Both are valid.

---

## Key Differences

    section → groups related content
    article → standalone content

Concept:

    section = category
    article = individual item

---

## Real-World Analogy

Website structure:

    News Website

    section → Sports
        ├── article → Football news
        ├── article → Basketball news
        └── article → Baseball news

---

## Key Pattern

Using both elements:
```text
    <section>
      <h2>Section Title</h2>
      <article>
        content
      </article>
    </section>
```
---

## Key Idea

Use semantic elements to describe **content meaning**:

    section → group content
    article → independent content
