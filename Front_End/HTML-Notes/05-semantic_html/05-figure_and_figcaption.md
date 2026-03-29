# Semantic HTML — Figure and Figcaption

## Overview

When adding media such as images or diagrams, HTML provides:

    <figure>
    <figcaption>

These elements help group media with its description.

---

## The `<figure>` Element

The `<figure>` element is used to contain **media content**.

Examples of media:

- images
- illustrations
- diagrams
- code snippets

Structure:
```text
    <figure>
      media content
    </figure>
```
---

## Example — `<figure>`
```text
    <figure>
      <img src="overwatch.jpg">
    </figure>
```
Structure:
```text
    figure
     └── img
```
---

## Purpose of `<figure>`

`<figure>` is used to:

- group media content
- associate media with related content
- separate media from text flow if needed

Important:

    figure content is related to the page,
    but not required for understanding it

---

## The `<figcaption>` Element

The `<figcaption>` element provides a **caption or description**
for the media inside `<figure>`.

Structure:

    <figcaption>description</figcaption>

---

## Example — `<figcaption>`
```text
    <figure>
      <img src="overwatch.jpg">
      <figcaption>
        This picture shows characters from Overwatch.
      </figcaption>
    </figure>
```
---

## Structure Diagram

HTML hierarchy:
```text
    figure
     ├── img
     └── figcaption
```
---

## Why Use `<figcaption>`

Benefits:

- keeps caption tied to the media
- moves with the image if repositioned
- improves accessibility
- better than using a separate <p> tag

---

## Comparison with `<p>`

Using `<p>`:
```text
    <img src="image.jpg">
    <p>Caption</p>

Problem:

- caption may become separated from the image

Using `<figcaption>`:
```text
    <figure>
      <img src="image.jpg">
      <figcaption>Caption</figcaption>
    </figure>
```
Benefit:

- caption stays linked to the image

---

## Content Flow Concept
```text
    main content
        |
        └── figure (optional media)
```
Meaning:

- `<figure>` is related to the page
- but not required for understanding the content

---

## Real-World Analogy

Think of a textbook:

- image → figure
- caption under image → figcaption

Example:
```text
    image of diagram
        ↓
    explanation of diagram
```
---

## Key Pattern

Basic usage:
```text
    <figure>
      <img src="image.jpg">
      <figcaption>Description</figcaption>
    </figure>
```
---

## Key Idea

Use `<figure>` to group media and `<figcaption>` to describe it.

    figure     → media container
    figcaption → media description
