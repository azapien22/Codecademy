# CSS — Position: Fixed

## Overview

An element with:

    position: absolute;

moves with the page when the user scrolls.

If you want an element to remain visible in the same location regardless of scrolling, use:

    position: fixed;

Fixed positioning attaches an element to the browser's viewport rather than the document.

---

# Syntax

    .title {
      position: fixed;
    }

Like absolute positioning, fixed positioning uses offset properties to determine its location.

---

# Offset Properties

Fixed elements can be positioned with:

    top
    bottom
    left
    right

---

# Example

CSS:

    .title {
      position: fixed;
      top: 0px;
      left: 0px;
    }

Result:

The element stays:

    Top: 0px
    Left: 0px

no matter how far the page is scrolled.

---

# Visual Example

Initial Page

    +--------------------------------+
    | Title                          |
    +--------------------------------+

    Content

    Content

    Content

---

After Scrolling

    +--------------------------------+
    | Title                          |
    +--------------------------------+

          ↑
    Still Visible

    Content continues scrolling underneath.

---

# Fixed vs Absolute

## Absolute

    position: absolute;

Reference Point:

    Positioned Parent

Behavior:

✔ Removed from normal flow

✔ Scrolls with page

Visual:

    Scroll Down

    ↓

    Element moves with content

---

## Fixed

    position: fixed;

Reference Point:

    Browser Viewport

Behavior:

✔ Removed from normal flow

✔ Does NOT scroll

Visual:

    Scroll Down

    ↓

    Element stays in place

---

# Viewport

A viewport is:

    the visible area
    of the browser window

Fixed elements are attached to:

    the viewport

NOT

    the HTML document

---

# Diagram

Browser Window

    +----------------------------------+
    | Navigation Bar                   |
    +----------------------------------+

    Content

    Content

    Content

---

User Scrolls

    +----------------------------------+
    | Navigation Bar                   |
    +----------------------------------+

    New Content

    More Content

    Even More Content

The navigation bar never moves.

---

# Common Offset Examples

Top Left

    position: fixed;
    top: 0;
    left: 0;

---

Top Right

    position: fixed;
    top: 0;
    right: 0;

---

Bottom Left

    position: fixed;
    bottom: 0;
    left: 0;

---

Bottom Right

    position: fixed;
    bottom: 0;
    right: 0;

---

# Common Uses

Fixed positioning is commonly used for:

- navigation bars
- sticky menus
- chat widgets
- floating help buttons
- "Back to Top" buttons
- cookie consent banners
- floating advertisements

---

# Example

Navigation Bar

CSS:

    nav {
      position: fixed;
      top: 0;
      width: 100%;
    }

Result:

Navigation remains visible while users scroll.

---

# Floating Chat Button

CSS:

    .chat {
      position: fixed;
      bottom: 20px;
      right: 20px;
    }

Result:

The chat button always stays in the lower-right corner.

---

# Important Characteristics

A fixed element:

✔ Is removed from normal document flow.

✔ Does not reserve space.

✔ Can overlap other elements.

✔ Remains attached to the browser window.

---

# Absolute vs Fixed

| Property | Absolute | Fixed |
|----------|----------|-------|
| Removed from Flow | Yes | Yes |
| Uses Offsets | Yes | Yes |
| Scrolls with Page | Yes | No |
| Reference Point | Positioned Ancestor | Browser Viewport |

---

# Visual Memory

Absolute

    Parent
      ↓
    Position Here

    Scroll

    Element Moves

---

Fixed

    Browser Window
          ↓
    Position Here

    Scroll

    Element Stays

---

# Quick Reference

Enable Fixed Positioning

    position: fixed;

---

Attach to Top

    top: 0;

---

Attach to Bottom

    bottom: 0;

---

Attach to Left

    left: 0;

---

Attach to Right

    right: 0;

---

# Key Takeaways

- `position: fixed;` removes an element from normal document flow.
- Fixed elements are positioned relative to the browser viewport.
- Fixed elements remain visible while the page scrolls.
- Offset properties include:

      top
      bottom
      left
      right

- Fixed positioning is commonly used for navigation bars, floating buttons, chat widgets, and persistent UI elements.

Remember:

    Absolute
        ↓
    Attached to Parent
    Scrolls Away

    Fixed
        ↓
    Attached to Browser
    Never Moves
