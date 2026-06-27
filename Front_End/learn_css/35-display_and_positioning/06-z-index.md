# CSS — z-index

## Overview

When elements are positioned using:

    relative
    absolute
    fixed
    sticky

they may overlap each other.

When this happens, CSS uses the:

    z-index

property to determine which element appears in front and which appears behind.

---

# Why z-index Exists

Consider two overlapping boxes.

Without `z-index`:

    Browser decides
    stacking order
    automatically.

Sometimes this is not the order you want.

---

# Example

CSS:

    .blue-box {
      background-color: blue;
    }

    .green-box {
      background-color: green;
      position: relative;
      top: -170px;
      left: 170px;
    }

Result:

The green box overlaps the blue box.

---

# Visual Example

Without z-index

    ┌───────────────┐
    │   Blue Box    │
    │       ┌───────────────┐
    │       │  Green Box    │
    └───────┴───────────────┘

Green appears on top.

---

# What is z-index?

The:

    z-index

property controls an element's:

    stacking order

Think of it as:

    depth

Higher values move elements toward the viewer.

Lower values move elements farther away.

---

# Syntax

    z-index: 1;

---

# Example

CSS:

    .blue-box {
      position: relative;
      z-index: 1;
    }

---

Result

Blue Box

moves

    in front

of the Green Box.

---

# Visual Diagram

Blue Box

z-index: 1

Green Box

z-index: 0 (default)

Result:

    ┌───────────────┐
    │   Blue Box    │
    │───────────────│
    │ Green Box     │
    └───────────────┘

Blue appears on top.

---

# Default Value

If you do not specify:

    z-index

the browser assumes:

    z-index: 0;

---

# Larger Numbers

Higher values appear closer to the user.

Example:

    z-index: 1;

↓

Behind

    z-index: 5;

↓

In Front

    z-index: 100;

↓

Even More Forward

---

# Visual Stack

    z-index: 100

    ───────────────

    z-index: 10

    ───────────────

    z-index: 5

    ───────────────

    z-index: 1

    ───────────────

    z-index: 0

---

# Important Rule

The:

    z-index

property only works on positioned elements.

The element must use:

    position: relative;
    position: absolute;
    position: fixed;
    position: sticky;

---

# Does NOT Work

CSS:

    div {
      z-index: 10;
    }

If:

    position: static;

Result:

    z-index ignored

---

# Correct Usage

CSS:

    div {
      position: relative;
      z-index: 10;
    }

Now:

    z-index works.

---

# Position + z-index

Example:

    .blue-box {
      position: relative;
      z-index: 1;
    }

    .green-box {
      position: relative;
    }

Result:

Blue Box

appears above

Green Box.

---

# Real-World Uses

z-index is commonly used for:

- dropdown menus
- modal dialogs
- pop-up windows
- tooltips
- sticky navigation bars
- floating buttons
- image overlays
- notifications

---

# Example

Navigation Bar

    nav {
      position: fixed;
      top: 0;
      z-index: 1000;
    }

Why?

To ensure it stays above page content.

---

# Example

Modal Window

    .modal {
      position: fixed;
      z-index: 9999;
    }

Result:

Modal appears above everything else.

---

# Visual Memory

Higher Number

        ↑

    Closer to User

        ↑

    Appears On Top

---------------------------

Lower Number

        ↓

    Farther Away

        ↓

    Appears Behind

---

# Common Values

Background

    z-index: -1;

---

Default

    z-index: 0;

---

Content

    z-index: 1;

---

Navigation

    z-index: 100;

---

Modal

    z-index: 9999;

---

# Position Comparison

| Property | Controls |
|----------|----------|
| position | Where the element is located |
| z-index | Which element appears on top |

Think of it as:

    position

↓

Moves the box

---

    z-index

↓

Moves the layer

---

# Quick Reference

Property

    z-index

---

Requires

    position

not equal to

    static

---

Higher Number

    In Front

---

Lower Number

    Behind

---

Default

    0

---

# Key Takeaways

- `z-index` controls the stacking order of overlapping elements.
- Higher values appear in front of lower values.
- Lower values appear behind higher values.
- The default `z-index` is `0`.
- `z-index` only works on positioned elements (`relative`, `absolute`, `fixed`, or `sticky`).
- It is commonly used for menus, overlays, tooltips, popups, navigation bars, and modal windows.

Remember:

    position
        ↓
    Moves the Element

    z-index
        ↓
    Moves the Layer
