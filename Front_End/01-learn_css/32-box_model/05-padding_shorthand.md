# CSS — Padding Shorthand

## Overview

Instead of writing four separate padding properties:

    padding-top
    padding-right
    padding-bottom
    padding-left

CSS allows you to use:

    padding

as a shorthand property.

A shorthand property allows multiple values to be specified
in a single declaration.

---

## Standard Padding Properties

Without shorthand:

    padding-top: 6px;
    padding-right: 11px;
    padding-bottom: 4px;
    padding-left: 9px;

Equivalent shorthand:

    padding: 6px 11px 4px 9px;

---

## Padding Value Order

Padding shorthand follows a clockwise pattern:

    Top
    Right
    Bottom
    Left

Memory Trick:

    TRBL

        T = Top
        R = Right
        B = Bottom
        L = Left

Diagram:

             Top
              ↑
              |
    Left ← Content → Right
              |
              ↓
           Bottom

---

# 4-Value Shorthand

## Syntax

    padding: top right bottom left;

Example:

    padding: 6px 11px 4px 9px;

Interpretation:

    Top    = 6px
    Right  = 11px
    Bottom = 4px
    Left   = 9px

---

## Diagram

    padding: 6px 11px 4px 9px;

           6px
            ↑
            |
      9px ← □ → 11px
            |
            ↓
           4px

---

# 3-Value Shorthand

## Syntax

    padding: top left-right bottom;

Example:

    padding: 5px 10px 20px;

Interpretation:

    Top    = 5px
    Right  = 10px
    Bottom = 20px
    Left   = 10px

---

## Diagram

    padding: 5px 10px 20px;

           5px
            ↑
            |
     10px ← □ → 10px
            |
            ↓
          20px

---

# 2-Value Shorthand

## Syntax

    padding: top-bottom left-right;

Example:

    padding: 5px 10px;

Interpretation:

    Top    = 5px
    Right  = 10px
    Bottom = 5px
    Left   = 10px

---

## Diagram

    padding: 5px 10px;

           5px
            ↑
            |
     10px ← □ → 10px
            |
            ↓
           5px

---

# 1-Value Shorthand

## Syntax

    padding: value;

Example:

    padding: 10px;

Interpretation:

    Top    = 10px
    Right  = 10px
    Bottom = 10px
    Left   = 10px

---

## Diagram

    padding: 10px;

          10px
            ↑
            |
     10px ← □ → 10px
            |
            ↓
          10px

---

# Comparison

## Four Separate Properties

    padding-top: 6px;
    padding-right: 11px;
    padding-bottom: 4px;
    padding-left: 9px;

---

## Equivalent Shorthand

    padding: 6px 11px 4px 9px;

Much shorter and easier to maintain.

---

# Box Model Review

Structure:

    Margin
        ↓
    Border
        ↓
    Padding
        ↓
    Content

Padding creates space between:

    content
    and
    border

---

# Common Examples

Equal Padding

    padding: 20px;

---

Top/Bottom Different

    padding: 10px 20px;

Meaning:

    Top/Bottom = 10px
    Left/Right = 20px

---

Different Bottom

    padding: 10px 20px 30px;

Meaning:

    Top        = 10px
    Left/Right = 20px
    Bottom     = 30px

---

Unique Values

    padding: 5px 10px 15px 20px;

Meaning:

    Top    = 5px
    Right  = 10px
    Bottom = 15px
    Left   = 20px

---

# Quick Reference

1 Value

    padding: A;

    Top    = A
    Right  = A
    Bottom = A
    Left   = A

---

2 Values

    padding: A B;

    Top    = A
    Right  = B
    Bottom = A
    Left   = B

---

3 Values

    padding: A B C;

    Top    = A
    Right  = B
    Bottom = C
    Left   = B

---

4 Values

    padding: A B C D;

    Top    = A
    Right  = B
    Bottom = C
    Left   = D

---

# Key Takeaways

- `padding` is a shorthand property.
- Values follow a clockwise order:

      Top → Right → Bottom → Left

- Shorthand reduces code duplication.
- You can specify:

      1 value
      2 values
      3 values
      4 values

- Remember:

      TRBL
      Top
      Right
      Bottom
      Left
