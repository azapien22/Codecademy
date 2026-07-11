# CSS — Margin Collapse

## Overview

Padding and margin both create space, but they behave differently.

### Padding

Creates space:

    inside the border

### Margin

Creates space:

    outside the border

One important difference:

    Vertical margins collapse.
    Padding never collapses.

---

# Box Model Review

    Margin
        ↓
    Border
        ↓
    Padding
        ↓
    Content

---

# What is Margin Collapse?

When two vertical margins touch:

    they do NOT add together

Instead:

    the larger margin wins

This behavior is called:

    margin collapse

---

# Horizontal Margins

Horizontal margins:

    left
    right

DO NOT collapse.

They always add together.

---

## Example

CSS:

    #img-one {
      margin-right: 20px;
    }

    #img-two {
      margin-left: 20px;
    }

Result:

    20px + 20px = 40px

Distance between elements:

    40px

---

## Diagram

    +-------+<--20px--><--20px-->+-------+
    | Img 1 |                    | Img 2 |
    +-------+                    +-------+

Total spacing:

    40px

---

# Vertical Margins

Vertical margins:

    top
    bottom

DO collapse.

They do NOT add together.

The larger margin determines the spacing.

---

## Example

CSS:

    #img-one {
      margin-bottom: 30px;
    }

    #img-two {
      margin-top: 20px;
    }

Result:

    NOT 50px

Browser chooses:

    30px

Distance between elements:

    30px

---

## Diagram

    +-------+
    | Img 1 |
    +-------+
       ↓
      30px
       ↓
    +-------+
    | Img 2 |
    +-------+

---

# Why Does This Happen?

Browser Rule:

    Adjacent vertical margins collapse
    into a single margin.

The larger margin survives.

Smaller margin is ignored.

---

# Memory Trick

Horizontal:

    Add

Vertical:

    Collapse

---

# Example Comparison

## Horizontal Margins

    margin-right: 15px;
    margin-left: 15px;

Result:

    30px

Calculation:

    15 + 15 = 30

---

## Vertical Margins

    margin-bottom: 15px;
    margin-top: 15px;

Result:

    15px

Calculation:

    larger value wins

---

# Graphic Example

## Elements A and B

CSS:

    margin: 10px;

Both elements have:

    10px horizontal margins

Distance:

    10px + 10px

Result:

    20px

---

## Elements A and C

Element A:

    margin: 10px;

Element C:

    margin: 30px 10px;

Meaning:

    Top/Bottom = 30px
    Left/Right = 10px

Vertical spacing:

    10px + 30px

Would normally equal:

    40px

Because of margin collapse:

    larger value wins

Result:

    30px

---

# Padding vs Margin Collapse

## Padding

Never collapses.

Example:

    padding-bottom: 20px;
    padding-top: 20px;

Result:

    40px

---

## Margin

Collapses vertically.

Example:

    margin-bottom: 20px;
    margin-top: 20px;

Result:

    20px

---

# Quick Reference

Horizontal Margins

    Add together

Example:

    20px + 20px = 40px

---

Vertical Margins

    Collapse

Example:

    30px + 20px = 30px

---

# Real-World Analogy

Imagine:

    a short person
    pushing a tall person

The tall person has longer arms.

Only the larger reach matters.

Similarly:

    the larger margin determines
    the final spacing.

---

# Key Takeaways

- Padding and margin are different.
- Padding never collapses.
- Horizontal margins always add together.
- Vertical margins collapse.
- The larger vertical margin determines spacing.

Remember:

    Horizontal = Add
    Vertical   = Collapse

Examples:

    20px + 20px horizontal = 40px

    30px + 20px vertical   = 30px
