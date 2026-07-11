# CSS Box Model — Review

## Overview

The CSS Box Model is one of the most important concepts in web development.

Every HTML element is treated as a box made up of:

    Content
    Padding
    Border
    Margin

Understanding the box model helps you control:

- spacing
- sizing
- positioning
- layout

---

# Box Model Structure

Diagram:

    Margin
        ↓
    Border
        ↓
    Padding
        ↓
    Content

Expanded View:

    +---------------------------+
    |          Margin           |
    |  +---------------------+  |
    |  |       Border        |  |
    |  | +---------------+   |  |
    |  | |    Padding    |   |  |
    |  | | +-----------+ |   |  |
    |  | | | Content   | |   |  |
    |  | | +-----------+ |   |  |
    |  | +---------------+   |  |
    |  +---------------------+  |
    +---------------------------+

---

# Width and Height

Control:

    content area size

Properties:

    width
    height

Example:

    div {
      width: 300px;
      height: 200px;
    }

Notes:

- Can use pixels (px)
- Can use percentages (%)

Example:

    width: 50%;

---

# Borders

Borders surround:

    content
    and
    padding

Properties:

    border-width
    border-style
    border-color

Shorthand:

    border: 3px solid coral;

Example:

    div {
      border: 2px solid black;
    }

---

# Border Radius

Rounds element corners.

Example:

    border-radius: 5px;

Creates:

    rounded corners

---

Circle Example:

    width: 100px;
    height: 100px;
    border-radius: 50%;

Result:

    perfect circle

---

# Padding

Padding creates space:

    between content and border

Example:

    padding: 20px;

Diagram:

    Border
      ↓
    Padding
      ↓
    Content

---

## Padding Shorthand

1 Value

    padding: 10px;

All sides = 10px

---

2 Values

    padding: 10px 20px;

Top/Bottom = 10px

Left/Right = 20px

---

3 Values

    padding: 10px 20px 30px;

Top        = 10px
Left/Right = 20px
Bottom     = 30px

---

4 Values

    padding: 10px 20px 30px 40px;

Top    = 10px
Right  = 20px
Bottom = 30px
Left   = 40px

---

# Margin

Margin creates space:

    outside the border

Example:

    margin: 20px;

Purpose:

- separates elements
- improves layout spacing

---

## Margin Shorthand

Uses the same rules as padding.

Example:

    margin: 10px 20px 30px 40px;

Meaning:

    Top
    Right
    Bottom
    Left

(TRBL)

---

# Horizontal Margins

Horizontal margins:

    add together

Example:

    margin-right: 20px;
    margin-left: 20px;

Total Space:

    40px

---

# Vertical Margins

Vertical margins:

    collapse

Example:

    margin-bottom: 30px;
    margin-top: 20px;

Result:

    30px

The larger value wins.

---

# Centering Elements

Use:

    margin: 0 auto;

Example:

    div {
      width: 400px;
      margin: 0 auto;
    }

Requirements:

- Width must be set.
- Centers element horizontally.

---

# Minimum and Maximum Sizes

Prevent elements from becoming:

    too small
    too large

Properties:

    min-width
    max-width
    min-height
    max-height

Example:

    p {
      min-width: 300px;
      max-width: 600px;
    }

---

# Overflow

Controls what happens when content exceeds its container.

Property:

    overflow

Values:

    visible
    hidden
    scroll

---

## visible

Default behavior.

Content spills outside box.

    overflow: visible;

---

## hidden

Overflow content is hidden.

    overflow: hidden;

---

## scroll

Adds scrollbars.

    overflow: scroll;

---

# Resetting Browser Defaults

Browsers include:

    User Agent Stylesheets

These apply default:

    margins
    padding

Many developers remove them.

Example:

    * {
      margin: 0;
      padding: 0;
    }

This creates:

    a clean slate

---

# Visibility

Controls whether an element is displayed.

Property:

    visibility

Values:

    visible
    hidden
    collapse

---

## Hidden

    visibility: hidden;

Result:

    element disappears
    space remains

---

## Display None

    display: none;

Result:

    element removed
    space removed

---

# Box Model Summary

Component            Purpose

Content              Actual content
Padding              Space inside border
Border               Surrounds content
Margin               Space outside border

---

# Key Concepts to Remember

## TRBL

Shorthand Order:

    Top
    Right
    Bottom
    Left

Used for:

    padding
    margin

---

## Horizontal vs Vertical Margins

Horizontal:

    add together

Vertical:

    collapse

---

## Centering

    margin: 0 auto;

Requires:

    width

---

## Overflow Values

    visible
    hidden
    scroll

---

## Visibility

    visibility: hidden;

Hidden but keeps space.

---

## Display None

    display: none;

Removes element entirely.

---

# Final Takeaways

The CSS Box Model consists of:

    Content
    Padding
    Border
    Margin

Mastering these properties allows you to:

- build layouts
- control spacing
- create responsive designs
- improve readability
- position elements precisely

The Box Model is the foundation for everything that follows in CSS, including:

    Flexbox
    Grid
    Responsive Design
    Positioning
    Advanced Layouts
