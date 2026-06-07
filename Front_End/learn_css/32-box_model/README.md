# CSS — Introduction to the Box Model

## Overview

Browsers automatically place HTML elements on a page using
default positioning rules.

To understand how elements are displayed and spaced on a webpage,
you must understand:

    The Box Model

The Box Model is one of the most important concepts in CSS.

---

## What is the Box Model?

Every HTML element is treated as if it lives inside a box.

Think of every element as:

    +-------------------+
    |      Element      |
    +-------------------+

The browser uses this box to determine:

- size
- spacing
- positioning
- layout

---

## Key Concept

All HTML elements are boxes.

Examples:

    <h1>
    <p>
    <div>
    <img>
    <ul>

Each element occupies space on a page through its box.

---

## Example — Background Color

HTML:

    <p>Hello World</p>

CSS:

    p {
      background-color: yellow;
    }

Result:

    yellow appears behind the entire box,
    not just behind the text.

---

## Why Text Align Works

When text is centered:

    text-align: center;

The text is aligned relative to:

    its box

not the page itself.

---

## Structure of the Box Model

Every element consists of four parts:

    Content
    Padding
    Border
    Margin

Diagram:

    +-------------------------+
    |         Margin          |
    |  +-------------------+  |
    |  |      Border       |  |
    |  | +-------------+   |  |
    |  | |  Padding    |   |  |
    |  | | +---------+ |   |  |
    |  | | | Content | |   |  |
    |  | | +---------+ |   |  |
    |  | +-------------+   |  |
    |  +-------------------+  |
    +-------------------------+

---

# 1. Content

The actual content of the element.

Examples:

    text
    image
    video

Example:

    <p>Hello World</p>

Content:

    Hello World

---

# 2. Padding

Space between:

    content
    and
    border

Diagram:

    Border
      |
      ▼
    [ Padding ]
      |
      ▼
    Content

Purpose:

    creates internal spacing

---

# 3. Border

The line surrounding content and padding.

Example:

    border: 1px solid black;

Purpose:

    visually outlines the box

---

# 4. Margin

Space outside the border.

Diagram:

    Margin
      |
      ▼
    Border
      |
      ▼
    Padding
      |
      ▼
    Content

Purpose:

    separates elements from each other

---

## Visual Summary

    Margin
      ↓
    Border
      ↓
    Padding
      ↓
    Content

---

## Why the Box Model Matters

The Box Model controls:

- spacing
- sizing
- alignment
- layout

Without understanding the Box Model:

- layouts become difficult
- spacing seems unpredictable
- positioning becomes confusing

---

## Real-World Example

Button:

    +----------------------+
    |       Margin         |
    |  +----------------+  |
    |  |    Border      |  |
    |  | +------------+ |  |
    |  | |  Padding   | |  |
    |  | |  Submit    | |  |
    |  | +------------+ |  |
    |  +----------------+  |
    +----------------------+

---

## Topics Covered in This Lesson

You will learn:

### Dimensions

Controls:

    width
    height

---

### Borders

Controls:

    border width
    border style
    border color

---

### Padding

Controls:

    internal spacing

---

### Margins

Controls:

    external spacing

---

## Key Idea

Every HTML element exists inside a box.

    Content
        ↓
    Padding
        ↓
    Border
        ↓
    Margin

Understanding the Box Model is the foundation of CSS layout
and webpage design.
