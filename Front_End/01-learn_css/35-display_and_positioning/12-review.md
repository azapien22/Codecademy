# CSS — Review: Display & Positioning

## Overview

This lesson introduced the core CSS properties used to control where elements appear on a webpage and how they interact with surrounding elements.

Understanding these properties, together with the **Box Model**, provides the foundation for building professional web layouts.

---

# Position Property

The:

    position

property determines how an element is positioned within the document.

Syntax:

    position: value;

Available values:

    static
    relative
    absolute
    fixed
    sticky

---

# Position: Relative

    position: relative;

Characteristics:

✔ Stays in the normal document flow.

✔ Can be moved using:

    top
    bottom
    left
    right

✔ Original space remains reserved.

Use when:

Small adjustments are needed without affecting nearby elements.

---

# Position: Absolute

    position: absolute;

Characteristics:

✔ Removed from document flow.

✔ Positioned relative to the nearest positioned ancestor.

✔ Moves with the page while scrolling.

✔ Can overlap other elements.

Use when:

Precise positioning is required.

---

# Position: Fixed

    position: fixed;

Characteristics:

✔ Removed from document flow.

✔ Positioned relative to the browser viewport.

✔ Remains visible during scrolling.

Common Uses:

- Navigation bars
- Floating buttons
- Chat widgets

---

# Position: Sticky

    position: sticky;

Characteristics:

✔ Starts in normal document flow.

✔ Scrolls normally.

✔ Sticks at a specified offset.

✔ Unsticks at the end of its parent container.

Common Uses:

- Sticky headers
- Navigation menus
- Section titles

---

# z-index

The:

    z-index

property controls the stacking order of overlapping elements.

Higher value

↓

Appears in front.

Lower value

↓

Appears behind.

Important:

`z-index` only works on positioned elements:

    relative
    absolute
    fixed
    sticky

---

# Display Property

The:

    display

property controls how elements occupy space and flow within a document.

Common values:

    inline
    block
    inline-block

---

# Display: Inline

Characteristics:

✔ Appears on the same line.

✔ Uses only the width needed for its content.

✔ Cannot set:

    width
    height

Examples:

    <a>
    <span>
    <em>
    <strong>

---

# Display: Block

Characteristics:

✔ Starts on a new line.

✔ Occupies the full width of its parent.

✔ Width and height can be adjusted.

Examples:

    <div>
    <p>
    <h1>-<h6>
    <section>
    <footer>

---

# Display: Inline-Block

Characteristics:

✔ Appears on the same line.

✔ Width can be specified.

✔ Height can be specified.

✔ Does not occupy the full width.

Ideal for:

- Buttons
- Cards
- Navigation items
- Image galleries

---

# Float

The:

    float

property pushes elements to the:

    left

or

    right

of their container.

Syntax:

    float: left;

or

    float: right;

Requirements:

✔ Width should be specified.

Best suited for:

- Wrapping text around images

Modern layouts typically use:

    Flexbox

or

    CSS Grid

instead.

---

# Clear

The:

    clear

property prevents an element from sitting beside floated elements.

Values:

    left
    right
    both
    none

Most common:

    clear: both;

Purpose:

Move an element below floated content.

---

# Display Comparison

| Display Type | New Line | Width Adjustable | Height Adjustable | Full Width |
|--------------|----------|------------------|-------------------|------------|
| inline | ✖ | ✖ | ✖ | ✖ |
| block | ✔ | ✔ | ✔ | ✔ |
| inline-block | ✖ | ✔ | ✔ | ✖ |

---

# Position Comparison

| Position | In Document Flow | Scrolls | Uses Offsets |
|----------|------------------|----------|--------------|
| static | ✔ | ✔ | ✖ |
| relative | ✔ | ✔ | ✔ |
| absolute | ✖ | ✔ | ✔ |
| fixed | ✖ | ✖ | ✔ |
| sticky | ✔ (initially) | ✔ → Sticks | ✔ |

---

# Float vs Modern Layout

Older CSS

    float
        +
    clear

↓

Used for layouts.

---

Modern CSS

    display: flex;

↓

One-dimensional layouts.

---

Modern CSS

    display: grid;

↓

Two-dimensional layouts.

---

# Relationship to the Box Model

Display and positioning work together with the **Box Model**.

The Box Model defines:

- width
- height
- padding
- border
- margin

Display and positioning determine:

- where elements appear
- how they flow
- how they overlap
- how they align with one another

Together, they form the foundation of modern CSS layout design.

---

# Quick Reference

## Position

    static

↓

Default

---

    relative

↓

Move while keeping original space.

---

    absolute

↓

Removed from flow.

Positioned from parent.

---

    fixed

↓

Attached to browser window.

---

    sticky

↓

Scroll

↓

Stick

↓

Unstick

---

## Display

    inline

↓

Same line

No width

---

    block

↓

New line

Full width

---

    inline-block

↓

Same line

Custom width

---

## Float

    left

↓

Push Left

---

    right

↓

Push Right

---

## Clear

    left

↓

Avoid left floats

---

    right

↓

Avoid right floats

---

    both

↓

Avoid all floats

---

# Key Takeaways

- The `position` property controls where elements appear on a page.
- `relative` moves an element while preserving its original space.
- `absolute` removes an element from normal flow and positions it relative to its nearest positioned ancestor.
- `fixed` attaches an element to the browser viewport so it remains visible while scrolling.
- `sticky` behaves like `relative` until a scroll threshold is reached, then behaves like `fixed`.
- `z-index` controls the stacking order of overlapping elements.
- The `display` property determines how elements flow and occupy space.
- `inline` elements stay on the same line and cannot have custom width or height.
- `block` elements start on a new line and occupy the full available width.
- `inline-block` elements sit side by side while supporting custom width and height.
- `float` moves elements to the left or right, most commonly for wrapping text around images.
- `clear` prevents elements from sitting beside floated elements.
- Mastering **Display**, **Positioning**, and the **Box Model** is essential for creating clean, responsive, and visually appealing web layouts.
