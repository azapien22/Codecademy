# CSS — Border Radius

## Overview

By default, HTML elements have:

    square corners

CSS allows you to round these corners using:

    border-radius

This creates softer, more modern-looking designs.

---

## What is Border Radius?

The `border-radius` property controls:

    corner curvature

The larger the value:

    the more rounded the corners

---

## Basic Syntax

    selector {
      border-radius: value;
    }

Example:

    div {
      border-radius: 5px;
    }

---

## Example — Rounded Corners

CSS:

    div.container {
      border: 3px solid blue;
      border-radius: 5px;
    }

Result:

    square corners become rounded

---

## Structure Diagram

Before:

    +-----------+
    |           |
    |           |
    +-----------+

After:

    /-----------\
    |           |
    |           |
    \-----------/

---

## Border Radius Values

Small Radius:

    border-radius: 5px;

Slightly rounded corners.

---

Medium Radius:

    border-radius: 15px;

More noticeable rounding.

---

Large Radius:

    border-radius: 30px;

Very rounded appearance.

---

## Using Percentages

Border radius can also use percentages.

Example:

    border-radius: 50%;

---

## Creating a Perfect Circle

Requirements:

### Step 1

Width and height must be equal.

Example:

    width: 60px;
    height: 60px;

---

### Step 2

Set:

    border-radius: 50%;

---

## Example — Circle

CSS:

    div.container {
      width: 60px;
      height: 60px;
      border: 3px solid blue;
      border-radius: 50%;
    }

Result:

    perfect circle

---

## Structure Diagram

Square:

    +------+
    |      |
    +------+

Rounded:

    /------\
    |      |
    \------/

Circle:

       *****
     **     **
    *         *
    *         *
     **     **
       *****

---

## Why 50% Works

When:

    width = height

and:

    border-radius = 50%

the corners curve inward enough to form a circle.

Example:

    width: 100px;
    height: 100px;
    border-radius: 50%;

Result:

    circle

---

## Common Use Cases

Rounded Buttons:

    button {
      border-radius: 5px;
    }

---

Rounded Cards:

    .card {
      border-radius: 10px;
    }

---

Profile Images:

    img {
      border-radius: 50%;
    }

Result:

    circular profile picture

---

## Border Radius and the Box Model

Box Model:

    Margin
      ↓
    Border
      ↓
    Padding
      ↓
    Content

`border-radius` changes the shape of:

    the border box

without changing the content itself.

---

## Quick Reference

Property:

    border-radius

Examples:

    border-radius: 5px;
    border-radius: 10px;
    border-radius: 25px;
    border-radius: 50%;

---

## Key Takeaways

- Borders are square by default.
- `border-radius` rounds element corners.
- Larger values create more curvature.
- Equal width and height + `50%` radius creates a perfect circle.

Example:

    border-radius: 50%;

Result:

    circular element
