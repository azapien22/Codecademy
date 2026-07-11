# CSS — Auto Margin (Centering Elements)

## Overview

The `margin` property can be used to:

    center elements horizontally

This is commonly used for:

- content containers
- cards
- banners
- images
- page sections

The most common centering pattern is:

    margin: 0 auto;

---

## Basic Syntax

    selector {
      width: value;
      margin: 0 auto;
    }

Example:

    div.headline {
      width: 400px;
      margin: 0 auto;
    }

---

## How It Works

### First Value

    0

Sets:

    margin-top    = 0
    margin-bottom = 0

---

### Second Value

    auto

Tells the browser:

    automatically calculate

    margin-left
    margin-right

so the element becomes centered.

---

## Visual Diagram

Container:

    +------------------------+
    |                        |
    |      Element           |
    |                        |
    +------------------------+

After:

    +------------------------+
    |                        |
    |    +------------+      |
    |    | Element    |      |
    |    +------------+      |
    |                        |
    +------------------------+

The browser creates:

    equal left margin
    equal right margin

---

## Example

CSS:

    div.headline {
      width: 400px;
      margin: 0 auto;
    }

Result:

    div centered horizontally

---

# Why Width is Required

Centering only works when:

    width is specified

Example:

    width: 400px;

Without a width:

    browser uses full container width

Example:

    div {
      margin: 0 auto;
    }

Browser interprets:

    width: 100%;

Result:

    nothing to center

---

## Incorrect Example

    div {
      margin: 0 auto;
    }

Result:

    no visible centering

Reason:

    element already occupies full width

---

## Correct Example

    div {
      width: 400px;
      margin: 0 auto;
    }

Result:

    centered element

---

## Visual Concept

Container Width:

    1000px

Element Width:

    400px

Remaining Space:

    600px

Browser calculates:

    left margin  = 300px
    right margin = 300px

Result:

    perfectly centered

---

# Common Use Cases

## Center a Card

    .card {
      width: 500px;
      margin: 0 auto;
    }

---

## Center a Banner

    .banner {
      width: 800px;
      margin: 0 auto;
    }

---

## Center an Image Container

    .image-box {
      width: 300px;
      margin: 0 auto;
    }

---

# Exercise

## Task

Set the width of:

    .pull-quote

to:

    350px

---

## Solution

    .pull-quote {
      width: 350px;
    }

If centering was also required:

    .pull-quote {
      width: 350px;
      margin: 0 auto;
    }

---

# Auto Margin vs Text Align

## margin: auto

Centers:

    entire element

Example:

    div
    image
    card

---

## text-align: center

Centers:

    content inside element

Example:

    text
    links
    inline content

---

# Quick Reference

Center an Element:

    width: 400px;
    margin: 0 auto;

Meaning:

    Top/Bottom = 0
    Left       = auto
    Right      = auto

---

# Box Model Review

    Margin
        ↓
    Border
        ↓
    Padding
        ↓
    Content

`auto` works on:

    left and right margins

to position an element in the center of its container.

---

# Key Takeaways

- `margin: 0 auto;` is a common centering technique.
- `0` sets top and bottom margins.
- `auto` automatically calculates left and right margins.
- A width must be specified.
- Auto margins center the element itself, not the text inside it.

Most common pattern:

    width: 400px;
    margin: 0 auto;
