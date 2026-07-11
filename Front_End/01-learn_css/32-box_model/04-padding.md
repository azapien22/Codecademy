# CSS — Padding

## Overview

Padding is the space between:

    content
    and
    border

Think of padding as the space between:

    a picture
    and
    its frame

Padding creates breathing room around content and helps
prevent elements from looking cramped.

---

## Box Model Review

Box Model:

    Margin
      ↓
    Border
      ↓
    Padding
      ↓
    Content

Diagram:

    +-------------------------+
    |        Margin           |
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

## Basic Syntax

    selector {
      padding: value;
    }

Example:

    p.content-header {
      border: 3px solid coral;
      padding: 10px;
    }

---

## How It Works

CSS:

    p.content-header {
      padding: 10px;
    }

Result:

    10px of space added between:

        content
        and
        border

on all four sides.

---

## Visual Example

Without Padding:

    +---------+
    |Hello    |
    +---------+

With Padding:

    +-------------+
    |             |
    |   Hello     |
    |             |
    +-------------+

---

## Why Use Padding?

Padding helps:

- improve readability
- create visual spacing
- expand background color area
- make layouts look cleaner

---

## Padding on All Sides

Example:

    padding: 20px;

Applies:

    top    = 20px
    right  = 20px
    bottom = 20px
    left   = 20px

---

## Individual Padding Properties

CSS allows different padding values for each side.

### Top

    padding-top: 10px;

Adds space above content.

---

### Right

    padding-right: 10px;

Adds space to the right of content.

---

### Bottom

    padding-bottom: 10px;

Adds space below content.

---

### Left

    padding-left: 10px;

Adds space to the left of content.

---

## Example — Bottom Padding

CSS:

    p.content-header {
      border: 3px solid fuchsia;
      padding-bottom: 10px;
    }

Result:

    only the bottom side receives padding

Diagram:

    +-----------+
    | Content   |
    |           |
    |           |
    +-----------+

---

## Example — Mixed Padding

CSS:

    div {
      padding-top: 20px;
      padding-right: 10px;
      padding-bottom: 30px;
      padding-left: 15px;
    }

Result:

    each side has a unique padding value

---

## Padding Expands Background Color

CSS:

    div {
      background-color: yellow;
      padding: 20px;
    }

Result:

    yellow background expands into padding area

Diagram:

    +------------------+
    |  Yellow Area     |
    |                  |
    |    Content       |
    |                  |
    +------------------+

---

## Padding vs Margin

### Padding

Space inside the border.

    Border
      ↓
    Padding
      ↓
    Content

---

### Margin

Space outside the border.

    Margin
      ↓
    Border

---

## Quick Reference

Property               Purpose

    padding            all sides
    padding-top        top side
    padding-right      right side
    padding-bottom     bottom side
    padding-left       left side

---

## Common Examples

Equal Padding:

    padding: 10px;

---

Large Padding:

    padding: 25px;

---

Bottom Only:

    padding-bottom: 10px;

---

Top Only:

    padding-top: 15px;

---

## Key Takeaways

- Padding is the space between content and border.
- Padding increases internal spacing.
- Padding can be applied to all sides or individual sides.
- Padding expands an element's background area.
- Padding improves readability and layout appearance.

Box Model Order:

    Margin
        ↓
    Border
        ↓
    Padding
        ↓
    Content
