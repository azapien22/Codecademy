# CSS — Position: Relative

## Overview

One way to change an element's default location is by using:

    position: relative;

Relative positioning allows an element to move relative to where it would normally appear in the document flow.

---

# Default Position

Every element starts with:

    position: static;

Example:

    div {
      position: static;
    }

This is the browser's normal behavior.

Elements appear exactly where HTML places them.

---

# Relative Positioning

Syntax:

    position: relative;

Example:

    .green-box {
      position: relative;
    }

This tells the browser:

    "This element may be moved
     from its normal position."

However:

    position: relative;

by itself does not move anything.

---

# Offset Properties

To actually move a relative element, use:

    top
    bottom
    left
    right

These are called:

    offset properties

---

# top

Moves element downward.

Example:

    top: 50px;

Visual:

    Original Position
          ↓
        50px
          ↓
    New Position

---

# bottom

Moves element upward.

Example:

    bottom: 50px;

Visual:

    New Position
          ↑
        50px
          ↑
    Original Position

---

# left

Moves element to the right.

Example:

    left: 120px;

Visual:

    Original Position → 120px → New Position

---

# right

Moves element to the left.

Example:

    right: 120px;

Visual:

    New Position ← 120px ← Original Position

---

# Example 1

CSS:

    .green-box {
      background-color: green;
      position: relative;
    }

Result:

    No visible movement

Because:

    no offset values were provided

---

# Example 2

CSS:

    .green-box {
      background-color: green;
      position: relative;
      top: 50px;
      left: 120px;
    }

Result:

    Move Down 50px
    Move Right 120px

---

# Visual Diagram

Original Position:

    +-----------+
    | Green Box |
    +-----------+

---

After:

    top: 50px;
    left: 120px;

                    +-----------+
                    | Green Box |
                    +-----------+

Moved:

    ↓ 50px
    → 120px

---

# Important Rule

Offset properties only work when:

    position ≠ static

Example:

    div {
      top: 50px;
    }

Result:

    No movement

Because:

    position is still static

---

# Correct Usage

    div {
      position: relative;
      top: 50px;
    }

Result:

    Element moves

---

# Relative Positioning and Document Flow

A relative element:

    remains in normal document flow

The browser still reserves its original space.

---

# Visual Example

Original Layout:

    Box A

    Box B

    Box C

---

Move Box B:

    position: relative;
    left: 100px;

Result:

    Box A

            Box B

    Box C

Notice:

    Box C does not move upward.

The original space for Box B still exists.

---

# Key Difference

Relative Positioning:

    Moves visual location

But:

    Keeps original space reserved

---

# Common Units

Offset values can use:

Pixels

    top: 50px;

---

Percentages

    left: 25%;

---

Ems

    right: 2em;

---

Rems

    top: 1rem;

---

# Real-World Uses

Relative positioning is commonly used for:

- small visual adjustments
- badges
- icons
- labels
- positioning anchors for absolute elements

---

# Relative vs Static

## Static

    position: static;

Behavior:

    normal flow
    no offsets

---

## Relative

    position: relative;

Behavior:

    normal flow
    offsets allowed

---

# Quick Reference

Enable Relative Positioning

    position: relative;

---

Move Down

    top: 50px;

---

Move Up

    bottom: 50px;

---

Move Right

    left: 50px;

---

Move Left

    right: 50px;

---

# Key Takeaways

- `position: relative;` moves an element relative to its normal location.
- Relative positioning keeps the element in the normal document flow.
- Offset properties include:

      top
      bottom
      left
      right

- Offset properties only work when the element is positioned.
- Other elements are not affected by the visual movement.
- The original space remains reserved.

Remember:

    Relative Positioning

        Move Element
              ↓
      Keep Original Space
              ↓
      Other Elements Stay Put
