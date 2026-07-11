# CSS — Visibility

## Overview

The `visibility` property controls whether an element can be seen
on a web page.

Unlike some other methods of hiding content, `visibility`
can hide an element while still preserving its space in the layout.

---

## Visibility Values

The `visibility` property can be set to:

    visible
    hidden
    collapse

---

# visible

## Definition

Displays the element normally.

Syntax:

    visibility: visible;

Example:

    p {
      visibility: visible;
    }

Result:

    element is displayed

---

# hidden

## Definition

Hides the element from view.

Syntax:

    visibility: hidden;

Example:

    p {
      visibility: hidden;
    }

Result:

    element disappears
    space remains

---

## Example

HTML:

    <ul>
      <li>Explore</li>
      <li>Connect</li>
      <li class="future">Donate</li>
    </ul>

CSS:

    .future {
      visibility: hidden;
    }

Result:

    Explore
    Connect
    _______

The word:

    Donate

is hidden, but the space where it would appear still exists.

---

## Visual Diagram

Before:

    Explore
    Connect
    Donate

After:

    Explore
    Connect
    _______

Space remains reserved.

---

# collapse

## Definition

Collapses an element.

Syntax:

    visibility: collapse;

This value is primarily used with:

    table rows
    table columns

Browser support and behavior may vary.

---

# Important Note

Hidden content is NOT removed from the HTML source.

Users can still see hidden content by:

    viewing page source
    inspecting elements

Example:

    visibility: hidden;

Only affects:

    display

Not:

    source code

---

# visibility vs display

A very common interview question.

---

## visibility: hidden

Element:

    hidden

Space:

    preserved

Example:

    visibility: hidden;

Diagram:

    +-----------+
    |           |
    +-----------+

Empty space remains.

---

## display: none

Element:

    removed

Space:

    removed

Example:

    display: none;

Diagram:

    (element completely gone)

No space remains.

---

# Comparison

## visibility: hidden

Before:

    Item 1
    Item 2
    Item 3

After:

    Item 1
    _____
    Item 3

Space remains.

---

## display: none

Before:

    Item 1
    Item 2
    Item 3

After:

    Item 1
    Item 3

Space disappears.

---

# Example

HTML:

    <div class="box">
      Hidden Content
    </div>

CSS:

    .box {
      visibility: hidden;
    }

Result:

    content invisible

    layout unchanged

---

# Real-World Uses

## Future Features

Hide navigation items until launch.

Example:

    .future {
      visibility: hidden;
    }

---

## Temporary Content

Hide content without affecting page layout.

---

## Responsive Design

Hide specific elements while maintaining spacing.

---

# Quick Reference

Show Element

    visibility: visible;

---

Hide Element

    visibility: hidden;

---

Collapse Element

    visibility: collapse;

---

Remove Element Completely

    display: none;

---

# Visibility vs Display Summary

visibility: hidden

    Hidden?
        Yes

    Space Kept?
        Yes

---

display: none

    Hidden?
        Yes

    Space Kept?
        No

---

# Key Takeaways

- `visibility` controls whether an element can be seen.
- Common values:

      visible
      hidden
      collapse

- `visibility: hidden` hides the element but preserves its space.
- Hidden elements still exist in the HTML source code.
- `display: none` removes both the element and its space.
- Understanding the difference between `visibility` and `display`
  is an important CSS concept.

Remember:

    visibility: hidden
        ↓
    Hidden but space remains

    display: none
        ↓
    Hidden and removed
