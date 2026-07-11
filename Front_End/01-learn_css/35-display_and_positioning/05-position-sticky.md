# CSS — Position: Sticky

## Overview

The `sticky` position combines the behavior of:

    position: relative;

and

    position: fixed;

An element behaves like a relatively positioned element while scrolling normally, but once it reaches a specified offset, it "sticks" to that position until its parent container ends.

---

# How Sticky Works

Initially:

    position: relative;

↓

User scrolls

↓

Element reaches offset value

↓

Behaves like:

    position: fixed;

↓

Parent container ends

↓

Returns to normal document flow

---

# Syntax

    .box {
      position: sticky;
      top: 0;
    }

Like relative and fixed positioning, sticky uses offset properties.

---

# Offset Properties

Sticky positioning works with:

    top
    bottom
    left
    right

Most commonly:

    top

---

# Example

CSS:

    .box-bottom {
      background-color: darkgreen;
      position: sticky;
      top: 240px;
    }

---

# What Happens?

Initially:

The element remains in its normal position.

↓

User scrolls.

↓

When the top of the element reaches:

    240px

from the top of the viewport,

the element becomes "stuck."

↓

It remains there while scrolling continues.

↓

When the bottom of its parent container is reached,

the element unsticks

and continues scrolling normally.

---

# Visual Timeline

Initial Page

    Header

    Content

    Sticky Box

    More Content

---

User Scrolls

    Header

    Sticky Box

    More Content

---

Element Reaches

    top: 240px

↓

Becomes Fixed

    ---------------------
    Sticky Box
    ---------------------

Content continues moving underneath.

---

Parent Ends

    Sticky Box

↓

Unsticks

↓

Continues moving normally.

---

# Important Rule

Sticky elements:

✔ Stay in normal document flow.

✔ Reserve their original space.

✔ Become fixed only after reaching the specified offset.

✔ Stop sticking at the end of their parent container.

---

# Relative vs Sticky

## Relative

    position: relative;

Behavior:

✔ Moves from original position

✔ Stays in document flow

✔ Never sticks

---

## Sticky

    position: sticky;

Behavior:

✔ Starts like relative

✔ Scrolls normally

✔ Sticks after reaching offset

✔ Unsticks at parent boundary

---

# Sticky vs Fixed

## Fixed

    position: fixed;

Behavior:

✔ Always attached to viewport

✔ Never moves while scrolling

✔ Ignores parent container

---

## Sticky

    position: sticky;

Behavior:

✔ Scrolls at first

✔ Sticks only after reaching offset

✔ Respects parent container boundaries

---

# Visual Comparison

Static

    Scroll

    Element moves normally.

---

Relative

    Slightly repositioned

    Scrolls normally.

---

Absolute

    Positioned from parent

    Scrolls away.

---

Fixed

    Attached to browser

    Never moves.

---

Sticky

    Scrolls

        ↓

    Reaches Offset

        ↓

    Sticks

        ↓

    Parent Ends

        ↓

    Unsticks

---

# Common Uses

Sticky positioning is commonly used for:

- sticky navigation bars
- table headers
- section headings
- side navigation
- category labels
- floating menus
- documentation sidebars

---

# Example

Sticky Navigation

CSS:

    nav {
      position: sticky;
      top: 0;
    }

Result:

The navigation scrolls normally until it reaches the top of the browser.

Then it remains visible.

---

# Example

Sticky Sidebar

CSS:

    aside {
      position: sticky;
      top: 20px;
    }

Result:

The sidebar follows the page while remaining inside its parent section.

---

# Position Comparison

| Position | In Document Flow | Scrolls | Sticks |
|----------|------------------|----------|---------|
| static | Yes | Yes | No |
| relative | Yes | Yes | No |
| absolute | No | Yes | No |
| fixed | No | No | Always |
| sticky | Yes | Initially | Yes |

---

# Quick Reference

Enable Sticky Positioning

    position: sticky;

---

Stick to Top

    top: 0;

---

Stick 100px From Top

    top: 100px;

---

Stick to Bottom

    bottom: 0;

(less common)

---

# Memory Trick

Relative

    Stay in Flow

↓

Sticky

    Stay in Flow

↓

Scroll

↓

Reach Offset

↓

Stick

↓

Parent Ends

↓

Unstick

---

# Key Takeaways

- `position: sticky;` combines relative and fixed positioning.
- Sticky elements remain in normal document flow.
- Sticky elements scroll normally until reaching an offset.
- Once the offset is reached, the element sticks to that position.
- The element unsticks when it reaches the end of its parent container.
- Sticky positioning is commonly used for navigation bars, section headers, and sidebars.

Remember:

    Relative
        ↓
    Always Scrolls

    Fixed
        ↓
    Never Scrolls

    Sticky
        ↓
    Scroll
          ↓
    Stick
          ↓
    Unstick
