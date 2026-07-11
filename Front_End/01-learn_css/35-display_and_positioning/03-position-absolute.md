# CSS — Position: Absolute

## Overview

Another way to move an element is by using:

    position: absolute;

Absolute positioning removes an element from the normal document flow and allows it to be placed exactly where you want.

---

# Syntax

    .box {
      position: absolute;
    }

By itself, this does not move the element.

To control placement, use:

    top
    bottom
    left
    right

offset properties.

---

# What Makes Absolute Different?

Unlike:

    position: relative;

an absolutely positioned element is:

    removed from normal flow

Other elements behave as though it does not exist.

---

# Normal Flow Example

HTML:

    Box A
    Box B
    Box C

Visual:

    Box A

    Box B

    Box C

---

# Absolute Position Example

CSS:

    .box-b {
      position: absolute;
      left: 200px;
    }

Visual:

    Box A

                Box B

    Box C

Notice:

    Box C moves up

because Box B no longer occupies space in the document flow.

---

# Important Rule

Absolute elements are positioned relative to:

    the nearest ancestor

whose position is NOT:

    static

---

# Valid Ancestor Positions

An ancestor may be:

    position: relative;
    position: absolute;
    position: fixed;
    position: sticky;

Any of these can become the reference point.

---

# Example

HTML:

    <div class="container">
      <div class="notice">
        Under Construction
      </div>
    </div>

CSS:

    .container {
      position: relative;
    }

    .notice {
      position: absolute;
      top: 50px;
      right: 20px;
    }

---

# Result

The notice is positioned relative to:

    .container

because:

    .container
    position: relative;

---

# Visual Diagram

Parent Container

    +----------------------------------+
    |                                  |
    |                          Notice  |
    |                                  |
    |                                  |
    +----------------------------------+

Reference Point:

    Parent Container

---

# If No Positioned Ancestor Exists

Suppose:

    .container {
      position: static;
    }

Then:

    .notice {
      position: absolute;
    }

The element will use:

    the browser window

as its reference point.

---

# Offset Properties

Absolute positioning uses:

    top
    bottom
    left
    right

---

## top

Moves element downward.

    top: 50px;

---

## bottom

Moves element upward.

    bottom: 50px;

---

## left

Moves element rightward.

    left: 100px;

---

## right

Moves element leftward.

    right: 100px;

---

# Example

CSS:

    .message {
      position: absolute;
      top: 300px;
      right: 0;
    }

---

Result

The element is:

    300px from the top

and

    aligned with the right edge

of its positioned parent.

---

# Real Example From Lesson

Message:

    "This website is in progress.
     Please come back later!"

CSS:

    position: absolute;
    top: 300px;
    right: 0px;

Result:

    ↓ 300px from top
    → aligned to right edge

of the white content container.

---

# Relative vs Absolute

## Relative

    position: relative;

Characteristics:

✔ Stays in document flow

✔ Original space remains

✔ Other elements unaffected

---

Visual:

    Box A

          Box B

    Box C

---

## Absolute

    position: absolute;

Characteristics:

✔ Removed from flow

✔ Original space disappears

✔ Can overlap elements

✔ Positioned from ancestor

---

Visual:

    Box A

              Box B

    Box C

(Box C ignores Box B)

---

# Common Uses

Absolute positioning is useful for:

- badges
- tooltips
- notification bubbles
- popups
- overlays
- floating labels
- image captions
- custom UI components

---

# Common Pattern

Container:

    position: relative;

Child:

    position: absolute;

Example:

    .card {
      position: relative;
    }

    .badge {
      position: absolute;
      top: 0;
      right: 0;
    }

This is one of the most common CSS patterns.

---

# Visual Memory Trick

Relative

    Moves Element

    Original Space Exists

---

Absolute

    Moves Element

    Original Space Removed

    Positioned From Parent

---

# Quick Reference

Enable Absolute Positioning

    position: absolute;

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

- `position: absolute;` removes an element from normal document flow.
- Other elements behave as if the element does not exist.
- Absolute elements use the nearest positioned ancestor as their reference point.
- Offset properties include:

      top
      bottom
      left
      right

- If no positioned ancestor exists, the browser window becomes the reference point.
- Absolute positioning is commonly used for overlays, badges, tooltips, and UI components.

Remember:

    Relative
        ↓
    Move Element
    Keep Space

    Absolute
        ↓
    Move Element
    Remove Space
    Position From Parent
