# CSS — Overflow

## Overview

Every HTML element occupies space according to the:

    CSS Box Model

An element's total size includes:

    Content
    Padding
    Border
    Margin

Sometimes an element becomes larger than the area that
contains it.

When this happens:

    content overflows

CSS uses the `overflow` property to control how that
extra content is displayed.

---

# Box Model Review

    Margin
        ↓
    Border
        ↓
    Padding
        ↓
    Content

Total Element Size:

    Content
    + Padding
    + Border
    + Margin

---

# Example Dimensions

Suppose an image has:

    Content Width  = 300px
    Content Height = 200px

Padding:

    Left  = 10px
    Right = 10px

    Top    = 10px
    Bottom = 10px

Border:

    Left  = 2px
    Right = 2px

    Top    = 2px
    Bottom = 2px

Margin:

    Left  = 20px
    Right = 20px

    Top    = 10px
    Bottom = 10px

---

## Total Width Calculation

Content:

    300px

Padding:

    10 + 10 = 20px

Border:

    2 + 2 = 4px

Margin:

    20 + 20 = 40px

Total Width:

    300 + 20 + 4 + 40

    = 364px

---

## Total Height Calculation

Content:

    200px

Padding:

    10 + 10 = 20px

Border:

    2 + 2 = 4px

Margin:

    10 + 10 = 20px

Total Height:

    200 + 20 + 4 + 20

    = 244px

---

# What is Overflow?

Overflow occurs when:

    content is larger than
    its containing box

Example:

    Container = 200px tall

    Content = 400px tall

Result:

    content spills outside

---

## Visual Example

Container:

    +--------------+
    | Content      |
    | Content      |
    | Content      |
    +--------------+
      More content
      spilling out

This is:

    overflow

---

# The overflow Property

Controls:

    what happens when content
    exceeds the box size

Syntax:

    overflow: value;

Example:

    p {
      overflow: scroll;
    }

---

# Common Overflow Values

## visible

Default value.

Overflow content remains visible.

CSS:

    overflow: visible;

---

### Diagram

    +---------+
    | Content |
    +---------+
      More text
      outside box

Result:

    content spills out

---

## hidden

Hides overflow content.

CSS:

    overflow: hidden;

---

### Diagram

    +---------+
    | Content |
    | Content |
    +---------+

Hidden text:

    not visible

Result:

    excess content is clipped

---

## scroll

Adds scrollbars.

CSS:

    overflow: scroll;

---

### Diagram

    +---------+
    | Content |
    | Content |
    | Content |
    +---------+
      ↑
    Scrollbar

Result:

    user can scroll
    to see hidden content

---

# Example

CSS:

    p {
      overflow: scroll;
    }

Result:

    scrollbar appears whenever
    content exceeds box size

---

# Why Use Overflow?

Without overflow control:

    content may become unreadable

Overflow helps:

- preserve layouts
- improve usability
- allow scrolling
- prevent content from breaking designs

---

# Overflow on Parent Elements

The overflow property is usually applied to:

    parent containers

Example:

    div {
      overflow: scroll;
    }

Any child element that exceeds
the parent container will follow
the overflow rules.

---

## Parent/Child Example

HTML:

    <div>
      <p>Very long text...</p>
    </div>

CSS:

    div {
      width: 300px;
      height: 100px;
      overflow: scroll;
    }

Result:

    scrollbars appear inside div

---

# Horizontal and Vertical Overflow

CSS also provides:

    overflow-x
    overflow-y

These properties control overflow separately.

---

## Horizontal Overflow

    overflow-x: scroll;

Controls:

    left ↔ right overflow

---

## Vertical Overflow

    overflow-y: scroll;

Controls:

    top ↕ bottom overflow

---

# Examples

Horizontal Only:

    overflow-x: scroll;

---

Vertical Only:

    overflow-y: scroll;

---

Both Directions:

    overflow: scroll;

---

# Comparison Table

Value        Behavior

visible      show overflow outside box
hidden       hide overflow
scroll       add scrollbars

---

# Real-World Examples

## Chat Window

    overflow-y: scroll;

Allows messages to scroll vertically.

---

## Code Block

    overflow-x: scroll;

Allows long code lines to scroll horizontally.

---

## Image Gallery

    overflow: hidden;

Prevents images from spilling outside containers.

---

# Quick Reference

Default:

    overflow: visible;

Hide Content:

    overflow: hidden;

Add Scrollbars:

    overflow: scroll;

Horizontal Control:

    overflow-x: scroll;

Vertical Control:

    overflow-y: scroll;

---

# Key Takeaways

- Overflow occurs when content exceeds its container.
- The `overflow` property controls how extra content is displayed.
- Common values:

      visible
      hidden
      scroll

- `visible` is the default behavior.
- `hidden` clips content.
- `scroll` adds scrollbars.
- Overflow is typically applied to parent containers.
- `overflow-x` and `overflow-y` provide separate horizontal and vertical control.

Most common usage:

    overflow: scroll;

to ensure users can access all content inside a container.
