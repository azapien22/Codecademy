# CSS — The Box Model

## Overview

The **Box Model** is the collection of CSS properties that
determine how much space an element occupies on a webpage.

Every HTML element is displayed as a rectangular box.

The Box Model consists of:

    Content
    Padding
    Border
    Margin

---

## Box Model Diagram

    +---------------------------+
    |          Margin           |
    |  +---------------------+  |
    |  |       Border        |  |
    |  | +---------------+   |  |
    |  | |    Padding    |   |  |
    |  | | +-----------+ |   |  |
    |  | | | Content   | |   |  |
    |  | | +-----------+ |   |  |
    |  | +---------------+   |  |
    |  +---------------------+  |
    +---------------------------+

---

## Components of the Box Model

### 1. Content

The actual content inside the element.

Examples:

    text
    image
    video
    button label

Example:

    <p>Hello World</p>

Content:

    Hello World

---

### 2. Padding

Space between:

    content
    and
    border

Diagram:

    Border
      |
      ▼
    Padding
      |
      ▼
    Content

Purpose:

    creates internal spacing

---

### 3. Border

The line surrounding:

    content
    padding

Purpose:

    visually outlines an element

Example:

    border: 1px solid black;

---

### 4. Margin

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

    separates elements from other elements

---

# Width and Height

## Width

Controls the horizontal size of the content area.

Example:

    width: 300px;

---

## Height

Controls the vertical size of the content area.

Example:

    height: 200px;

---

## Diagram

    +------------------+
    |                  |
    |     Content      | ← Height
    |                  |
    +------------------+
          Width

---

# Box Model Properties

## Width

Definition:

    width of content area

Example:

    width: 400px;

---

## Height

Definition:

    height of content area

Example:

    height: 200px;

---

## Padding

Definition:

    space between content and border

Example:

    padding: 20px;

---

## Border

Definition:

    thickness and style surrounding content

Example:

    border: 2px solid black;

---

## Margin

Definition:

    space outside the border

Example:

    margin: 15px;

---

# Visual Layer Order

From inside → outside:

    Content
        ↓
    Padding
        ↓
    Border
        ↓
    Margin

---

# Real-World Example

CSS:

    div {
      width: 300px;
      height: 150px;
      padding: 20px;
      border: 2px solid black;
      margin: 15px;
    }

Structure:

    Margin
      └── Border
            └── Padding
                  └── Content

---

# Why the Box Model Matters

The Box Model controls:

- element size
- spacing
- alignment
- positioning
- page layout

Without understanding the Box Model:

- layouts become difficult
- spacing becomes confusing
- sizing appears inconsistent

---

# Quick Reference

    width   → content width
    height  → content height
    padding → space inside border
    border  → outline around content
    margin  → space outside border

---

# Key Idea

Every HTML element is treated as a box.

    Margin
        ↓
    Border
        ↓
    Padding
        ↓
    Content

Mastering the Box Model is essential for understanding
CSS layouts and webpage design.
