# CSS — Margin Shorthand

## Overview

Just like `padding`, CSS allows `margin` to be written using
a shorthand property.

Instead of writing:

    margin-top
    margin-right
    margin-bottom
    margin-left

You can write all margin values on a single line.

This makes CSS:

- shorter
- cleaner
- easier to maintain

---

## Standard Margin Properties

Without shorthand:

    margin-top: 6px;
    margin-right: 10px;
    margin-bottom: 5px;
    margin-left: 12px;

Equivalent shorthand:

    margin: 6px 10px 5px 12px;

---

## Margin Value Order

Margin shorthand follows a clockwise pattern:

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
    Left ← Element → Right
              |
              ↓
           Bottom

---

# 4-Value Shorthand

## Syntax

    margin: top right bottom left;

Example:

    margin: 6px 10px 5px 12px;

Interpretation:

    Top    = 6px
    Right  = 10px
    Bottom = 5px
    Left   = 12px

---

## Diagram

    margin: 6px 10px 5px 12px;

           6px
            ↑
            |
     12px ← □ → 10px
            |
            ↓
           5px

---

# 3-Value Shorthand

## Syntax

    margin: top left-right bottom;

Example:

    margin: 5px 12px 4px;

Interpretation:

    Top    = 5px
    Right  = 12px
    Bottom = 4px
    Left   = 12px

---

## Diagram

    margin: 5px 12px 4px;

           5px
            ↑
            |
     12px ← □ → 12px
            |
            ↓
           4px

---

# 2-Value Shorthand

## Syntax

    margin: top-bottom left-right;

Example:

    margin: 20px 10px;

Interpretation:

    Top    = 20px
    Right  = 10px
    Bottom = 20px
    Left   = 10px

---

## Diagram

    margin: 20px 10px;

          20px
            ↑
            |
     10px ← □ → 10px
            |
            ↓
          20px

---

# 1-Value Shorthand

## Syntax

    margin: value;

Example:

    margin: 15px;

Interpretation:

    Top    = 15px
    Right  = 15px
    Bottom = 15px
    Left   = 15px

---

## Diagram

    margin: 15px;

          15px
            ↑
            |
     15px ← □ → 15px
            |
            ↓
          15px

---

# Comparison

## Four Separate Properties

    margin-top: 6px;
    margin-right: 10px;
    margin-bottom: 5px;
    margin-left: 12px;

---

## Equivalent Shorthand

    margin: 6px 10px 5px 12px;

Result:

    identical behavior
    less code

---

# Margin vs Padding

## Margin

Space outside the border.

    Margin
      ↓
    Border

Purpose:

    separates elements

---

## Padding

Space inside the border.

    Border
      ↓
    Padding
      ↓
    Content

Purpose:

    creates internal spacing

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

---

# Common Examples

Equal Margin

    margin: 20px;

---

Top/Bottom Different

    margin: 10px 20px;

Meaning:

    Top/Bottom = 10px
    Left/Right = 20px

---

Different Bottom

    margin: 10px 20px 30px;

Meaning:

    Top        = 10px
    Left/Right = 20px
    Bottom     = 30px

---

Unique Values

    margin: 5px 10px 15px 20px;

Meaning:

    Top    = 5px
    Right  = 10px
    Bottom = 15px
    Left   = 20px

---

# Quick Reference

1 Value

    margin: A;

    Top    = A
    Right  = A
    Bottom = A
    Left   = A

---

2 Values

    margin: A B;

    Top    = A
    Right  = B
    Bottom = A
    Left   = B

---

3 Values

    margin: A B C;

    Top    = A
    Right  = B
    Bottom = C
    Left   = B

---

4 Values

    margin: A B C D;

    Top    = A
    Right  = B
    Bottom = C
    Left   = D

---

# Key Takeaways

- `margin` supports shorthand syntax.
- Values follow the clockwise order:

      Top → Right → Bottom → Left

- The same shorthand rules used for `padding`
  apply to `margin`.

Remember:

      TRBL
      Top
      Right
      Bottom
      Left

- Shorthand reduces repetitive code.
- Margin controls space outside an element's border.
