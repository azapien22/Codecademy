# CSS — Float

## Overview

The:

    float

property moves an element as far left or as far right as possible inside its parent container.

Originally, `float` was designed to wrap text around images, similar to how text wraps around pictures in newspapers.

Today, modern layouts usually use:

    Flexbox

or

    CSS Grid

instead of float.

---

# Purpose of Float

Float is commonly used to:

- wrap text around images
- push elements left
- push elements right

It is **not** the preferred tool for building entire page layouts.

---

# Syntax

Move Left

    float: left;

---

Move Right

    float: right;

---

# Float Values

## Left

    float: left;

Moves an element as far left as possible.

Visual:

    +--------+
    | Image  |  Text Text Text Text...
    +--------+

---

## Right

    float: right;

Moves an element as far right as possible.

Visual:

                     +--------+
    Text Text Text   | Image  |
    Text Text Text   +--------+

---

# Example

CSS:

    .green-section {
      width: 50%;
      height: 150px;
    }

    .orange-section {
      background-color: orange;
      width: 50%;
      float: right;
    }

---

# Result

Container

    +---------------------------------------+
    | Green Section | Orange Section        |
    +---------------------------------------+

The orange section floats to the right side.

---

# Width Requirement

A floated element

must

have a width.

Example:

    .box {
      float: right;
      width: 200px;
    }

---

# Why?

Without a width:

The browser assumes:

    width: 100%;

The element already occupies the full row.

Floating has no visible effect.

---

# Incorrect Example

CSS:

    div {
      float: right;
    }

Result:

No visible movement.

Because:

    width = 100%

---

# Correct Example

CSS:

    div {
      width: 250px;
      float: right;
    }

Result:

Element moves to the right.

---

# Float and Position

Float works with:

✔ position: static;

✔ position: relative;

It is generally **not** used with:

    absolute

or

    fixed

positioning.

---

# Text Wrapping

This is the original purpose of float.

Example:

HTML:

    <img class="photo">

    <p>
      Long paragraph...
    </p>

CSS:

    .photo {
      float: left;
      width: 200px;
    }

---

# Result

    +--------+
    | Photo  |  Paragraph text wraps
    |        |  around the image.
    +--------+

The text flows naturally around the floated image.

---

# Visual Example

Without Float

    Image

    Paragraph

Everything appears vertically.

---

With Float

    +--------+
    | Image  | Paragraph text...
    |        | continues here...
    +--------+

The paragraph wraps beside the image.

---

# Float vs Position

## Float

Moves an element

    Left

or

    Right

inside its container.

---

## Position

Moves an element

to

    exact coordinates

using:

    top
    bottom
    left
    right

---

# Float vs Flexbox

Old Method

    float

↓

Limited layout control.

---

Modern Method

    display: flex;

↓

Responsive layouts

↓

Better alignment

↓

Easier spacing

---

# Float vs Grid

Old

    float

↓

One-dimensional layouts.

---

Modern

    display: grid;

↓

Two-dimensional layouts.

↓

Rows

↓

Columns

↓

Much more powerful.

---

# Common Uses Today

Although mostly replaced by Flexbox and Grid, float is still useful for:

- wrapping text around images
- legacy websites
- maintaining older codebases

---

# Quick Reference

Property

    float

---

Values

    left

    right

---

Requires

    width

---

Best For

✔ Text Wrapping

✔ Images

---

Avoid For

✖ Entire Page Layouts

Use:

    Flexbox

or

    Grid

instead.

---

# Comparison

| Feature | Float | Flexbox | Grid |
|----------|--------|----------|------|
| Wrap Text Around Images | ✔ | ✖ | ✖ |
| Modern Layouts | ✖ | ✔ | ✔ |
| Responsive Design | Limited | Excellent | Excellent |

---

# Memory Trick

Float

↓

Push Left

or

Push Right

---

Position

↓

Move Anywhere

---

Flexbox

↓

Arrange Items

---

Grid

↓

Arrange Entire Layout

---

# Key Takeaways

- `float` moves an element as far left or right as possible within its container.
- Common values are:

      float: left;
      float: right;

- Floated elements **must** have a specified width.
- Float works with static and relative positioned elements.
- The original purpose of float is wrapping text around images.
- Modern CSS layouts generally use **Flexbox** or **Grid** instead of float.

Remember:

    Float

        ↓

    Push Left

    or

    Push Right

    Best For

    Text Around Images
