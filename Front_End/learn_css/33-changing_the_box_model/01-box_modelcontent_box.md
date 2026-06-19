# CSS — Box Model: Content-Box

## Overview

CSS uses the `box-sizing` property to determine how a browser
calculates an element's size.

Property:

    box-sizing

The browser can use different box models when rendering a page.

The default box model is:

    content-box

---

# Default Browser Behavior

Many CSS properties have default values.

Examples:

    font-weight: normal;
    visibility: visible;
    overflow: visible;

Similarly:

    box-sizing: content-box;

is the default box model used by browsers.

Even if you never write:

    box-sizing: content-box;

the browser assumes it automatically.

---

# What is Content-Box?

Content-box means:

    width and height apply
    only to the content area

Padding and borders are added on top of those dimensions.

---

# Example

CSS:

    div {
      width: 300px;
      height: 200px;
      padding: 10px;
      border: 1px solid black;
    }

---

## Browser Calculation

Content Width:

    300px

Padding:

    10px left
    10px right

Border:

    1px left
    1px right

---

## Actual Width

    300
    + 10
    + 10
    + 1
    + 1

    = 322px

---

## Actual Height

    200
    + 10
    + 10
    + 1
    + 1

    = 222px

---

# Visual Diagram

Content-Box:

    +-----------------------+
    |       Border          |
    |  +-----------------+  |
    |  |    Padding      |  |
    |  | +-----------+   |  |
    |  | | Content   |   |  |
    |  | +-----------+   |  |
    |  +-----------------+  |
    +-----------------------+

Declared Width:

    Content Only

Actual Width:

    Content
    + Padding
    + Border

---

# Why It Can Be Confusing

Suppose you create:

    width: 300px;

Most people expect:

    final width = 300px

But content-box calculates:

    final width > 300px

because padding and borders are added.

---

# Formula

## Content-Box Width

    Total Width

    =
    Content Width
    + Left Padding
    + Right Padding
    + Left Border
    + Right Border

---

## Content-Box Height

    Total Height

    =
    Content Height
    + Top Padding
    + Bottom Padding
    + Top Border
    + Bottom Border

---

# Example Calculation

CSS:

    width: 500px;
    padding: 20px;
    border: 5px solid black;

---

Width:

    500
    + 20
    + 20
    + 5
    + 5

    = 550px

---

# Content-Box Summary

Declared:

    width: 500px

Actual:

    550px

This surprises many beginners.

---

# Why Developers Dislike Content-Box

Problems:

- harder calculations
- unpredictable layouts
- difficult alignment
- responsive design complications

Example:

Three boxes:

    width: 300px;

Expected:

    900px total

Actual:

    larger than 900px

because borders and padding increase size.

---

# box-sizing Property

Controls which box model the browser uses.

Syntax:

    box-sizing: content-box;

---

Example:

    div {
      box-sizing: content-box;
    }

This explicitly uses the browser's default behavior.

---

# Content-Box vs Border-Box

## Content-Box

Width applies to:

    Content Only

Actual Size:

    Width
    + Padding
    + Border

---

## Border-Box

Width applies to:

    Content
    + Padding
    + Border

Actual Size:

    Exactly the declared width

---

# Comparison

Content-Box:

    width: 300px;

Actual:

    322px

(with padding and border)

---

Border-Box:

    width: 300px;

Actual:

    300px

(total size)

---

# Quick Reference

Property:

    box-sizing

Default Value:

    content-box

Meaning:

    width applies only
    to content area

---

Formula:

    Total Width

    =
    Content
    + Padding
    + Border

---

# Key Takeaways

- Browsers use `content-box` by default.
- `box-sizing` controls which box model is used.
- In `content-box`, width and height apply only to the content area.
- Padding and borders increase the final size of the element.
- This can make layouts difficult to manage.
- Modern developers often prefer:

      box-sizing: border-box;

which solves this sizing problem.

Remember:

    content-box

        Width
           ↓
        Content Only

        +
        Padding
        +
        Border

        =
        Actual Size


# CSS — Box Model: Content-Box

## Overview

Many CSS properties have default values.

Examples:

    font-weight: normal;
    visibility: visible;
    overflow: visible;

These values are automatically assumed by the browser unless
you explicitly change them.

The same principle applies to the CSS Box Model.

---

# The box-sizing Property

CSS uses the:

    box-sizing

property to determine how an element's dimensions should be calculated.

Syntax:

    box-sizing: content-box;

---

## Purpose

The `box-sizing` property tells the browser:

    which box model to use

when calculating:

    width
    height

of an element.

---

# Default Value

The default value is:

    content-box

Browsers automatically assume:

    box-sizing: content-box;

even if it is not written in your CSS.

---

# What Does Content-Box Mean?

In the content-box model:

    width
    height

apply only to the content area.

Padding and borders are added on top of the declared dimensions.

---

## Diagram

Content-Box:

    +-----------------------+
    |       Border          |
    |  +-----------------+  |
    |  |    Padding      |  |
    |  | +-----------+   |  |
    |  | | Content   |   |  |
    |  | +-----------+   |  |
    |  +-----------------+  |
    +-----------------------+

Width and height apply only to:

    Content

---
# Example

CSS:
```text
    div {
      width: 300px;
      height: 200px;
      padding: 10px;
      border: 1px solid black;
    }
```    
---

## Content Area

    Width  = 300px
    Height = 200px

---

## Add Padding

Width:

    300 + 10 + 10

    = 320px

Height:

    200 + 10 + 10

    = 220px

---

## Add Border

Width:

    320 + 1 + 1

    = 322px

Height:

    220 + 1 + 1

    = 222px

---

# Final Size

Declared:

    width: 300px;
    height: 200px;

Actual Size:

    322px × 222px

Because:

    padding and border
    increase total size

---

# Why It Matters

When using content-box:

    actual dimensions
    are larger than
    declared dimensions

This can make layouts:

- harder to predict
- harder to align
- harder to maintain

---

# Formula

## Total Width

    Content Width
    + Left Padding
    + Right Padding
    + Left Border
    + Right Border

---

## Total Height

    Content Height
    + Top Padding
    + Bottom Padding
    + Top Border
    + Bottom Border

---

# Example Formula

CSS:

    width: 500px;
    padding: 20px;
    border: 5px solid black;

Width:

    500
    + 20
    + 20
    + 5
    + 5

    = 550px

---

# Browser Assumption

Even if you write:

    div {
      width: 300px;
    }

The browser internally assumes:

    box-sizing: content-box;

---

# Content-Box Summary

Width Controls:

    Content Only

Height Controls:

    Content Only

Padding:

    Added outside content

Border:

    Added outside padding

Result:

    total size grows

---

# Looking Ahead

Because content-box can make sizing difficult,
modern developers often switch to:

    box-sizing: border-box;

With border-box:

    width includes padding
    width includes border

making sizing much easier.

---

# Comparison

## Content-Box

Declared Width:

    300px

Actual Width:

    322px

(with padding and border)

---

## Border-Box

Declared Width:

    300px

Actual Width:

    300px

(total size remains fixed)

---

# Quick Reference

Property:

    box-sizing

Default Value:

    content-box

Meaning:

    width and height apply
    only to content

---

Formula:

    Total Size

    =
    Content
    + Padding
    + Border

---

# Key Takeaways

- CSS uses the `box-sizing` property to determine box calculations.
- Browsers default to:

      box-sizing: content-box;

- In content-box, width and height apply only to the content area.
- Padding and borders increase the final size of an element.
- This behavior can make layouts difficult to manage.
- Modern CSS often replaces content-box with:

      box-sizing: border-box;

for easier sizing and layout control.

Remember:

    content-box

        Width
          ↓
      Content Only

      + Padding
      + Border

      = Actual Size
