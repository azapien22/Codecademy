# CSS — Margin

## Overview

Margin is the space outside an element's border.

It is the fourth and final component of the:

    CSS Box Model

Box Model:

    Margin
        ↓
    Border
        ↓
    Padding
        ↓
    Content

---

## What is Margin?

Margin creates space between:

    one element
    and
    other surrounding elements

Think of margin as:

    personal space around a box

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

## Basic Syntax

    selector {
      margin: value;
    }

Example:

    p {
      border: 1px solid aquamarine;
      margin: 20px;
    }

---

## How It Works

CSS:

    p {
      margin: 20px;
    }

Result:

    20 pixels of space added outside
    the border on all four sides

---

## Visual Example

Without Margin:

    +--------++--------+
    | Box 1 || Box 2 |
    +--------++--------+

With Margin:

    +--------+      +--------+
    | Box 1 |      | Box 2 |
    +--------+      +--------+

---

## Why Use Margin?

Margin helps:

- separate elements
- improve readability
- create layout spacing
- prevent crowded designs

---

# Margin on All Sides

Example:

    margin: 20px;

Applies:

    top    = 20px
    right  = 20px
    bottom = 20px
    left   = 20px

---

# Individual Margin Properties

CSS allows you to set margin on specific sides.

---

## Top Margin

    margin-top: 20px;

Adds space above the element.

---

## Right Margin

    margin-right: 15px;

Adds space to the right of the element.

---

## Bottom Margin

    margin-bottom: 25px;

Adds space below the element.

---

## Left Margin

    margin-left: 10px;

Adds space to the left of the element.

---

## Example — Right Margin Only

CSS:

    p {
      border: 3px solid DarkSlateGrey;
      margin-right: 15px;
    }

Result:

    only the right side receives margin

Diagram:

    +---------+      15px
    | Content |<------------>
    +---------+

---

# Margin vs Padding

## Margin

Space outside the border.

Diagram:

    Margin
      ↓
    Border

Purpose:

    separates elements

---

## Padding

Space inside the border.

Diagram:

    Border
      ↓
    Padding
      ↓
    Content

Purpose:

    creates breathing room inside element

---

## Comparison

Margin:

    outside spacing

Padding:

    inside spacing

---

# Margin Shorthand

Just like padding, margin supports shorthand values.

---

## 1 Value

    margin: 20px;

Meaning:

    Top    = 20px
    Right  = 20px
    Bottom = 20px
    Left   = 20px

---

## 2 Values

    margin: 10px 20px;

Meaning:

    Top/Bottom = 10px
    Left/Right = 20px

---

## 3 Values

    margin: 10px 20px 30px;

Meaning:

    Top        = 10px
    Left/Right = 20px
    Bottom     = 30px

---

## 4 Values

    margin: 5px 10px 15px 20px;

Meaning:

    Top    = 5px
    Right  = 10px
    Bottom = 15px
    Left   = 20px

---

# Memory Trick

Margin shorthand follows:

    TRBL

        Top
        Right
        Bottom
        Left

Clockwise order:

             Top
              ↑
              |
    Left ← Element → Right
              |
              ↓
           Bottom

---

# Real-World Example

CSS:

    .card {
      border: 2px solid black;
      padding: 20px;
      margin: 30px;
    }

Result:

    content has internal spacing
    card has external spacing from nearby elements

---

# Quick Reference

Property             Purpose

    margin           all sides
    margin-top       top side
    margin-right     right side
    margin-bottom    bottom side
    margin-left      left side

---

# Box Model Summary

    Margin
        ↓
    Border
        ↓
    Padding
        ↓
    Content

---

# Key Takeaways

- Margin is the space outside an element's border.
- Margin separates elements from one another.
- Margin can be applied to:
  
      all sides
      top
      right
      bottom
      left

- Margin uses the same shorthand patterns as padding.
- Margin improves spacing, readability, and layout design.

Remember:

    Padding = inside spacing
    Margin  = outside spacing
