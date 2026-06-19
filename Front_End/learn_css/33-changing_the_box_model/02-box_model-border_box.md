# CSS — Box Model: Border-Box

## Overview

The default CSS box model:

    content-box

has a major limitation:

    padding and borders increase
    the total size of an element.

Fortunately, CSS provides a better alternative:

    border-box

This is the box model most modern developers use.

---

# Setting Border-Box

To apply the border-box model to every element:

    * {
      box-sizing: border-box;
    }

This is often one of the first rules added to a stylesheet.

---

# What Does Border-Box Do?

In the border-box model:

    width remains fixed
    height remains fixed

Padding and borders are included inside the declared dimensions.

---

## Content-Box Formula

    Actual Width

    =
    Content
    + Padding
    + Border

Result:

    box grows larger

---

## Border-Box Formula

    Actual Width

    =
    Declared Width

Padding and border fit inside the box.

Result:

    box size remains fixed

---

# Example

HTML:

    <h1>Hello World</h1>

CSS:

    * {
      box-sizing: border-box;
    }

    h1 {
      border: 1px dashed #4f768e;
      height: 150px;
      width: 200px;
      padding: 20px;
    }

---

# Declared Dimensions

Width:

    200px

Height:

    150px

---

# Final Dimensions

Actual Width:

    200px

Actual Height:

    150px

Even though the element contains:

    padding: 20px;
    border: 1px;

the overall size does not increase.

---

# Visual Diagram

Border-Box:

    +------------------------+
    | Border                 |
    |  +------------------+  |
    |  | Padding          |  |
    |  | +------------+   |  |
    |  | | Content    |   |  |
    |  | +------------+   |  |
    |  +------------------+  |
    +------------------------+

Entire Box Width:

    200px

Everything fits inside.

---

# Content-Box vs Border-Box

## Content-Box

CSS:

    width: 200px;
    padding: 20px;
    border: 1px;

Actual Width:

    200
    + 20
    + 20
    + 1
    + 1

    = 242px

---

## Border-Box

CSS:

    width: 200px;
    padding: 20px;
    border: 1px;

Actual Width:

    200px

Padding and borders are absorbed inside.

---

# Side-by-Side Comparison

Content-Box

    Width = Content Only

    + Padding
    + Border

    = Actual Size

---

Border-Box

    Width = Entire Box

    Includes:
        Content
        Padding
        Border

---

# Why Developers Prefer Border-Box

Benefits:

- predictable sizing
- easier layouts
- easier calculations
- better responsive design
- less debugging

Instead of calculating:

    width
    + padding
    + border

you simply trust the declared width.

---

# Common CSS Reset

Many developers combine:

    reset defaults

and

    border-box

together.

Example:

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

This creates:

    a clean and predictable layout foundation

---

# Real-World Example

Create a card:

    .card {
      width: 300px;
      padding: 20px;
      border: 2px solid gray;
    }

---

## Content-Box

Actual Width:

    344px

---

## Border-Box

Actual Width:

    300px

Much easier to manage.

---

# Quick Reference

Default Browser Model

    box-sizing: content-box;

---

Modern Preferred Model

    box-sizing: border-box;

---

Content-Box

    Width = Content Only

---

Border-Box

    Width = Content
          + Padding
          + Border

---

# Visual Memory Trick

Content-Box

    Width
      ↓
    Content

    + Padding
    + Border

    = Bigger Box

---

Border-Box

    Width
      ↓
    Entire Box

    Content shrinks if needed

    Box size stays fixed

---

# Key Takeaways

- `box-sizing` controls which box model the browser uses.
- The default model is:

      content-box

- `border-box` keeps width and height fixed.
- Padding and borders are included inside the declared dimensions.
- The overall size of the element does not grow.
- Most modern websites use:

      * {
        box-sizing: border-box;
      }

because it makes layouts much easier to build and maintain.

Remember:

    content-box
        ↓
    Box grows

    border-box
        ↓
    Box stays fixed

# CSS Border-Box Diagram

## Visual Layout

    Width Property (Actual Rendered Width)

                    200px
    ┌──────────────────────────────────────────┐
    │                                          │
    │  Border   Padding      Content     Padding   Border
    │   1px      20px         auto        20px      1px
    │                                          │
    └──────────────────────────────────────────┘

    Total Width = 200px

---

# Width Calculation

Declared Width:

    width: 200px;

Border-Box Rule:

    width = actual rendered width

Therefore:

    Total Element Width = 200px

---

# Browser Calculation

The browser reserves space for:

    Left Border    = 1px
    Left Padding   = 20px
    Right Padding  = 20px
    Right Border   = 1px

Total Reserved Space:

    1 + 20 + 20 + 1

    = 42px

---

# Remaining Space

Content Width:

    auto

Browser calculates:

    200px
    - 42px

    = 158px

Content Width:

    158px

---

# Border-Box Formula

    Declared Width

        =
    
    Content
    + Padding
    + Border

---

# Expanded Diagram

    ┌──────────────────────────────────────────────┐
    │<--------------- 200px --------------------->│
    │                                              │
    │ 1px   20px     Content (158px)    20px  1px │
    │                                              │
    └──────────────────────────────────────────────┘

---

# Content-Box Comparison

Content-Box:

    width: 200px;

Means:

    Content Width = 200px

Actual Width:

    200
    + 20
    + 20
    + 1
    + 1

    = 242px

---

# Border-Box Comparison

Border-Box:

    width: 200px;

Means:

    Entire Element = 200px

Content Width:

    automatically adjusted

Actual Width:

    200px

---

# Memory Diagram

Content-Box

    Width
      ↓

    Content

    + Padding
    + Border

    = Larger Box

---

Border-Box

    Width
      ↓

    Entire Box

    Content shrinks automatically

    = Fixed Box Size

---

# Key Takeaway

The statement illustrated by the diagram:

    Width Property

        =

    Actual Rendered Width

The browser automatically calculates the content area after
subtracting:

    padding
    borders

from the declared width.

This is the defining behavior of:

    box-sizing: border-box;
