# CSS — Display: Inline-Block

## Overview

The third commonly used value for the:

    display

property is:

    inline-block

Inline-block combines the best features of:

    inline

and

    block

elements.

---

# What is Inline-Block?

An inline-block element:

✔ Appears on the same line as other inline elements.

✔ Allows custom width.

✔ Allows custom height.

Think of it as:

    Inline

        +

    Block

---

# Characteristics

Inline-Block Elements

✔ Sit next to each other.

✔ Can have custom width.

✔ Can have custom height.

✔ Do not automatically occupy the full width.

---

# Syntax

    display: inline-block;

---

# Example

HTML:

    <div class="rectangle">
      <p>I'm a rectangle!</p>
    </div>

    <div class="rectangle">
      <p>So am I!</p>
    </div>

    <div class="rectangle">
      <p>Me three!</p>
    </div>

CSS:

    .rectangle {
      display: inline-block;
      width: 200px;
      height: 300px;
    }

---

# Result

If there is enough horizontal space:

    +-----------+ +-----------+ +-----------+
    | Rectangle | | Rectangle | | Rectangle |
    |           | |           | |           |
    |           | |           | |           |
    +-----------+ +-----------+ +-----------+

All three boxes appear on the same line.

---

# Width

Unlike inline elements:

Inline-block supports:

    width

Example:

    width: 200px;

Each rectangle becomes:

    200px wide

regardless of its content.

---

# Height

Inline-block also supports:

    height

Example:

    height: 300px;

Each rectangle becomes:

    300px tall

even if the text is much smaller.

---

# Why Use Inline-Block?

Suppose you want:

Three cards

side by side

with identical sizes.

Inline cannot do this.

Block places each card on a separate line.

Inline-block provides both.

---

# Visual Comparison

## Inline

    Home About Contact

Everything stays together.

Cannot set width.

---

## Block

    Home

    About

    Contact

Each occupies its own line.

---

## Inline-Block

    +-------+ +-------+ +-------+
    | Home  | | About | |Contact|
    +-------+ +-------+ +-------+

Side by side

with custom sizes.

---

# Real Example

Navigation Buttons

CSS:

    li {
      display: inline-block;
      width: 120px;
    }

Result:

    [ Home ] [ About ] [ Contact ]

Uniform button widths.

---

# Another Example

Product Cards

CSS:

    .card {
      display: inline-block;
      width: 250px;
      height: 350px;
    }

Result:

    +--------+ +--------+ +--------+
    | Card 1 | | Card 2 | | Card 3 |
    +--------+ +--------+ +--------+

---

# Default Inline-Block Elements

Some HTML elements are already:

    inline-block

The best example is:

    <img>

Images:

✔ Sit beside text.

✔ Have adjustable width.

✔ Have adjustable height.

---

# Comparison

## Inline

✔ Same line

✔ Width fits content

✖ Cannot change width

✖ Cannot change height

---

## Block

✔ New line

✔ Full width

✔ Width adjustable

✔ Height adjustable

---

## Inline-Block

✔ Same line

✔ Width adjustable

✔ Height adjustable

✔ Does NOT occupy full width

---

# Visual Memory

Inline

    Text Text Text

---

Block

    Box

    Box

    Box

---

Inline-Block

    Box    Box    Box

---

# Common Uses

Inline-block is commonly used for:

- navigation menus
- buttons
- product cards
- image galleries
- icons
- feature cards
- badges
- small layouts

---

# Display Comparison Table

| Feature | Inline | Block | Inline-Block |
|----------|---------|--------|--------------|
| Same Line | ✔ | ✖ | ✔ |
| Starts New Line | ✖ | ✔ | ✖ |
| Width Adjustable | ✖ | ✔ | ✔ |
| Height Adjustable | ✖ | ✔ | ✔ |
| Full Width | ✖ | ✔ | ✖ |

---

# Quick Reference

Property

    display

---

Value

    inline-block

---

Characteristics

✔ Same Line

✔ Width Adjustable

✔ Height Adjustable

✔ Content Does Not Fill Full Width

---

# Memory Trick

Inline

    Like Words

↓

No Width

---

Block

    Like Paragraphs

↓

Full Width

---

Inline-Block

    Like Cards

↓

Side by Side

↓

Custom Size

---

# Key Takeaways

- `display: inline-block;` combines features of inline and block elements.
- Inline-block elements sit beside one another when there is enough horizontal space.
- Width and height can be explicitly set.
- Unlike block elements, inline-block elements do not automatically occupy the full width of their parent.
- Images (`<img>`) are a common example of default inline-block elements.
- Inline-block is commonly used for buttons, navigation menus, image galleries, cards, and horizontal layouts.

Remember:

    Inline
        ↓
    Same Line
    No Width

    Block
        ↓
    New Line
    Full Width

    Inline-Block
        ↓
    Same Line
    Custom Width
    Custom Height
