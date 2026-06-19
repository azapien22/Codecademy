# CSS — Review: Changing the Box Model

## Overview

The default CSS box model has an important limitation:

    padding
    and
    border

increase the overall size of an element.

This can make layouts difficult to predict and maintain.

To solve this problem, CSS provides an alternative box model:

    border-box

---

# What You Learned

## 1. Default Box Model

Browsers use:

    box-sizing: content-box;

by default.

In this model:

    width and height
    apply only to content

Padding and borders are added to the declared dimensions.

Example:

    width: 200px;
    padding: 20px;
    border: 1px solid black;

Actual Width:

    242px

---

## 2. box-sizing Property

The:

    box-sizing

property controls which box model the browser uses.

Syntax:

    box-sizing: content-box;
    box-sizing: border-box;

---

## 3. Content-Box

Default Value:

    content-box

Behavior:

    Width = Content Area

Formula:

    Content
    + Padding
    + Border
    = Actual Size

Result:

    Element grows larger than expected.

---

## 4. Border-Box

Alternative Value:

    border-box

Behavior:

    Width = Entire Element

Formula:

    Content
    + Padding
    + Border
    = Declared Width

Result:

    Element size remains fixed.

---

# Common Usage

Apply border-box globally:

    * {
      box-sizing: border-box;
    }

This makes layouts:

- easier to build
- easier to maintain
- easier to debug

---

# Content-Box vs Border-Box

## Content-Box

    width: 200px;

    + padding
    + border

    = larger element

---

## Border-Box

    width: 200px;

    padding and border
    stay inside

    = 200px total width

---

# Quick Comparison

| Feature | Content-Box | Border-Box |
|----------|------------|------------|
| Browser Default | Yes | No |
| Width Applies To | Content Only | Entire Box |
| Padding Adds Size | Yes | No |
| Border Adds Size | Yes | No |
| Easier Layouts | No | Yes |
| Modern Standard | No | Yes |

---

# Key Takeaways

- Browsers default to:

      box-sizing: content-box;

- The `box-sizing` property controls the box model.
- `content-box` allows padding and borders to increase element size.
- `border-box` keeps dimensions fixed.
- Most modern websites use:

      * {
        box-sizing: border-box;
      }

because it creates predictable and maintainable layouts.

Remember:

    content-box
        ↓
    Box grows

    border-box
        ↓
    Box stays fixed
