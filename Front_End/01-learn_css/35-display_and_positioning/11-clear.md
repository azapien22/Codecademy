# CSS — Clear

## Overview

The:

    clear

property controls how an element behaves when it encounters floated elements.

It is primarily used to prevent layout problems caused by:

    float: left;

or

    float: right;

---

# Why Clear Exists

When multiple floated elements have different heights,

they can interfere with one another.

This may cause elements to:

- overlap
- bump into each other
- fail to move where expected

The `clear` property fixes these issues.

---

# Example Problem

CSS:

    div {
      float: left;
      width: 200px;
    }

Visual:

    +--------+
    | Tall   |
    | Box    |
    |        |
    +--------+

        +--------+
        | Short  |
        +--------+

Another element may become trapped beside the taller box instead of starting below it.

---

# What Does Clear Do?

The:

    clear

property tells the browser:

> "Do not allow this element to sit next to floated elements on a specified side."

---

# Syntax

    clear: value;

---

# Available Values

## Left

    clear: left;

The left side of the element

cannot touch

a left-floated element.

---

## Right

    clear: right;

The right side of the element

cannot touch

a right-floated element.

---

## Both

    clear: both;

The element

cannot touch

floated elements on either side.

This is the most commonly used value.

---

## None

    clear: none;

Default value.

The element may sit beside floated elements.

---

# Example

CSS:

    div {
      float: left;
      width: 200px;
    }

    div.special {
      clear: left;
    }

---

# Result

Normal Divs

↓

Float Left

↓

Special Div

↓

Moves below

all left-floated elements

instead of squeezing beside them.

---

# Visual Example

Without Clear

    +--------+
    | Tall   |
    | Box    |
    |        |
    +--------+

        +--------+
        | Short  |
        +--------+

    +--------+
    | Next   |
    +--------+

The next element becomes trapped beside the tall box.

---

# With

    clear: left;

Visual:

    +--------+
    | Tall   |
    | Box    |
    |        |
    +--------+

    +--------+
    | Next   |
    +--------+

The next element starts below the floated box.

---

# Left Clear

CSS:

    clear: left;

Behavior:

✔ Avoids left-floated elements.

---

# Right Clear

CSS:

    clear: right;

Behavior:

✔ Avoids right-floated elements.

---

# Both

CSS:

    clear: both;

Behavior:

✔ Starts below all floated elements.

This is the value most developers use.

---

# Common Uses

The `clear` property is commonly used to:

- stop text from wrapping
- begin a new section
- prevent layout collisions
- clear floated images
- fix legacy float layouts

---

# Float vs Clear

## Float

Moves an element:

    Left

or

    Right

---

## Clear

Stops an element

from sitting beside

floated elements.

---

# Visual Memory

Float

↓

Push Element

Left or Right

---

Clear
[O
↓

Start Below

Floated Elements

---

# Typical Pattern

CSS:

    img {
      float: left;
    }

    footer {
      clear: both;
    }

Result:

Image floats.

Footer begins underneath.

---

# Modern CSS

Historically:

    float

+

    clear

were used to build entire page layouts.

Today,

developers usually use:

    Flexbox

or

    CSS Grid

for layouts.

`clear` is now mostly encountered in:

- legacy websites
- image/text wrapping
- older codebases

---

# Quick Reference

Property

    clear

---

Values

    left

    right

    both

    none

---

Most Common

    clear: both;

---

Purpose

Prevent elements from sitting beside floated elements.

---

# Float + Clear Workflow

    Float

↓

Element moves left/right

↓

Next element collides

↓

Apply

    clear

↓

Element starts underneath

---

# Comparison

| Property | Purpose |
|----------|----------|
| `float` | Pushes an element left or right |
| `clear` | Prevents an element from sitting beside floated elements |

---

# Key Takeaways

- `clear` controls how elements behave around floated elements.
- Available values include:

      left
      right
      both
      none

- `clear: left;` avoids left-floated elements.
- `clear: right;` avoids right-floated elements.
- `clear: both;` avoids floats on both sides and is the most commonly used option.
- `clear` is primarily used with layouts that rely on `float`.
- Modern CSS typically favors **Flexbox** and **Grid** over float-based layouts.

Remember:

    Float

        ↓

    Pushes Elements

    Left / Right

        ↓

    Clear

        ↓

    Starts Below

    Floated Elements
