# CSS — Position

## Overview

Block-level elements naturally occupy their own line on a webpage.

Examples:

    <div>
    <h1>
    <p>
    <section>

These elements:

- take up the full width of their parent container
- start on a new line
- prevent other elements from appearing beside them

---

# Default Block Behavior

Visual Example:

    +----------------------+
    | Block Element 1      |
    +----------------------+

    +----------------------+
    | Block Element 2      |
    +----------------------+

    +----------------------+
    | Block Element 3      |
    +----------------------+

Each element gets its own row.

---

# Why Elements Don't Overlap

Block-level elements:

    occupy their own space

and therefore:

    do not overlap
    do not sit side-by-side

unless CSS positioning rules change their behavior.

---

# Default Position

Every HTML element has a default position.

That default value is:

    static

Example:

    div {
      position: static;
    }

This is automatically assumed by the browser.

---

# Position Property

CSS uses the:

    position

property to control where elements appear on a page.

Syntax:

    position: value;

---

# Available Position Values

CSS provides five positioning modes:

    static
    relative
    absolute
    fixed
    sticky

Each changes how an element behaves within the document.

---

# 1. Static

Default value.

Syntax:

    position: static;

Characteristics:

- normal document flow
- appears where HTML places it
- ignores top, right, bottom, left offsets

Example:

    p {
      position: static;
    }

Most elements use this automatically.

---

# 2. Relative

Syntax:

    position: relative;

Characteristics:

- remains in normal flow
- can be moved relative to its original location
- space is still reserved

Example:

    div {
      position: relative;
      top: 20px;
    }

Moves down 20 pixels.

---

# 3. Absolute

Syntax:

    position: absolute;

Characteristics:

- removed from normal flow
- positioned relative to nearest positioned ancestor
- can overlap other elements

Example:

    div {
      position: absolute;
      top: 0;
      left: 0;
    }

---

# 4. Fixed

Syntax:

    position: fixed;

Characteristics:

- removed from normal flow
- fixed relative to browser window
- stays visible while scrolling

Example:

    nav {
      position: fixed;
      top: 0;
    }

Common use:

    navigation bars

---

# 5. Sticky

Syntax:

    position: sticky;

Characteristics:

- behaves like relative at first
- becomes fixed when scrolling reaches a threshold

Example:

    header {
      position: sticky;
      top: 0;
    }

Common use:

    sticky headers

---

# Visual Comparison

Static:

    Header
    Content
    Footer

Normal flow.

---

Relative:

    Header
         Content
    Footer

Moved from original location.

---

Absolute:

    Header

           Content

    Footer

Placed independently.

---

Fixed:

    Header (always visible)

    Content
    Content
    Content

Header stays on screen.

---

Sticky:

    Header

    Scroll...

    Header sticks to top.

---

# Most Important Concept

If you like the browser's default placement:

    do nothing

You do NOT need:

    position: static;

because it is already assumed.

---

# When to Use Position

Use positioning when you need:

- custom layouts
- overlays
- floating elements
- sticky navigation
- fixed headers
- badges
- popups

---

# Quick Reference

Property:

    position

---

Default:

    static

---

Available Values:

    static
    relative
    absolute
    fixed
    sticky

---

# Key Takeaways

- Block-level elements naturally occupy their own line.
- Their default position is:

      static

- CSS uses the `position` property to change element placement.
- Five position values exist:

      static
      relative
      absolute
      fixed
      sticky

- If the default behavior is acceptable, you do not need to specify a position value.

Remember:

    position

        ↓

    Controls where
    an element appears
    on a webpage.
