# CSS — Borders

## Overview

A border is a line that surrounds an HTML element.

Think of a border as:

    a frame around a picture

Borders help:

- separate content
- define element boundaries
- improve readability
- highlight important sections

---

## Border Properties

A border consists of three parts:

    width
    style
    color

Syntax:

    border: width style color;

Example:

    p {
      border: 3px solid coral;
    }

---

## Border Width

Controls:

    thickness of the border

Values:

    thin
    medium
    thick

Or pixel values:

    1px
    2px
    3px
    5px

Examples:

    border-width: thin;
    border-width: medium;
    border-width: thick;
    border-width: 3px;

---

## Border Style

Controls:

    appearance of the border

Common styles:

    none
    solid
    dotted
    dashed
    double

Examples:

    border-style: solid;
    border-style: dotted;
    border-style: dashed;

---

## Border Style Examples

Solid:

    -----------

Dotted:

    ...........

Dashed:

    - - - - - -

Double:

    ===========

None:

    (invisible)

---

## Border Color

Controls:

    color of the border

Examples:

    red
    blue
    green
    black
    coral

Example:

    border-color: coral;

---

## Border Shorthand

Instead of writing:

    border-width: 3px;
    border-style: solid;
    border-color: coral;

You can write:

    border: 3px solid coral;

This is called:

    shorthand syntax

---

## Example

CSS:

    p {
      border: 3px solid coral;
    }

Result:

    width  = 3px
    style  = solid
    color  = coral

---

## Default Border Values

If values are omitted, browsers apply defaults.

Default border:

    medium none currentColor

Meaning:

    width  → medium
    style  → none
    color  → current text color

---

## Example — Width Omitted

CSS:

    p.content-header {
      height: 80px;
      width: 240px;
      border: solid coral;
    }

Browser interprets as:

    border: medium solid coral;

Result:

    width defaults to medium

---

## Border in the Box Model

Box Model Structure:

    Margin
      ↓
    Border
      ↓
    Padding
      ↓
    Content

Diagram:

    +-----------------------+
    |        Margin         |
    |  +-----------------+  |
    |  |     Border      |  |
    |  | +-----------+   |  |
    |  | | Padding   |   |  |
    |  | | Content   |   |  |
    |  | +-----------+   |  |
    |  +-----------------+  |
    +-----------------------+

---

## Common Border Examples

Thin Black Border:

    border: 1px solid black;

---

Thick Red Border:

    border: 5px solid red;

---

Blue Dotted Border:

    border: 3px dotted blue;

---

Green Dashed Border:

    border: 2px dashed green;

---

## Quick Reference

Property      Purpose
--------      ------------------------
width         thickness
style         appearance
color         border color

Shorthand:

    border: width style color;

Example:

    border: 3px solid coral;

---

## Key Takeaways

- Borders surround HTML elements.
- Borders have three components:
  
      width
      style
      color

- Shorthand syntax combines all three properties.

      border: 3px solid coral;

- Default border values are:

      medium none currentColor

- Borders are part of the CSS Box Model and sit between:

      padding and margin
