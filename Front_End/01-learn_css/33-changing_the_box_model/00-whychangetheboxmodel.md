# Changing the Box Model

## Why Change the Box Model?

In the previous lesson, you learned the four major parts of the CSS Box Model:

    Content
    Padding
    Border
    Margin

These components determine the total size of an element on a webpage.

---

# The Problem with the Default Box Model

The traditional box model has a limitation:

    Padding and borders increase
    the overall size of the box.

This can make layouts difficult to predict.

---

## Example HTML

    <h1>Hello World</h1>

---

## Example CSS

    h1 {
      border: 1px solid black;
      height: 200px;
      width: 300px;
      padding: 10px;
    }

---

# What Developers Expect

Most beginners assume:

    width  = 300px
    height = 200px

Final Size:

    300px × 200px

---

# What Actually Happens

The browser applies:

    width
    + padding
    + border

to calculate the final dimensions.

---

## Step 1 — Content Size

    Width  = 300px
    Height = 200px

---

## Step 2 — Add Padding

Padding:

    10px on left
    10px on right

Width becomes:

    300 + 10 + 10

    = 320px

---

Padding:

    10px on top
    10px on bottom

Height becomes:

    200 + 10 + 10

    = 220px

---

## Step 3 — Add Border

Border:

    1px left
    1px right

Width becomes:

    320 + 1 + 1

    = 322px

---

Border:

    1px top
    1px bottom

Height becomes:

    220 + 1 + 1

    = 222px

---

# Final Dimensions

CSS:

    width: 300px;
    height: 200px;

Actual Size:

    Width  = 322px
    Height = 222px

---

# Visual Breakdown

Declared Width:

    300px

Actual Width:

    +---------------------------+
    | Border (1px)             |
    | +---------------------+  |
    | | Padding (10px)      |  |
    | | +---------------+   |  |
    | | |   Content     |   |  |
    | | +---------------+   |  |
    | +---------------------+  |
    +---------------------------+

Width Calculation:

    300
    + 20 padding
    + 2 border

    = 322px

---

# Why Is This a Problem?

As websites become larger:

- layouts become harder to control
- spacing becomes difficult to predict
- elements may not align properly
- calculations become tedious

Example:

You create three boxes:

    width: 300px;

Expected:

    900px total

Actual:

    966px+

because padding and borders increase size.

---

# Traditional Box Model Formula

Total Width:

    width
    + left padding
    + right padding
    + left border
    + right border

---

Total Height:

    height
    + top padding
    + bottom padding
    + top border
    + bottom border

---

# Example Formula

Width:

    300
    + 10
    + 10
    + 1
    + 1

    = 322px

---

Height:

    200
    + 10
    + 10
    + 1
    + 1

    = 222px

---

# Why Developers Change the Box Model

Developers often prefer a model where:

    width means width

and

    height means height

without needing extra calculations.

This makes:

- sizing predictable
- layouts easier
- responsive design simpler

---

# What's Coming Next?

The solution is:

    box-sizing

Specifically:

    box-sizing: border-box;

This modern approach includes:

    padding
    border

inside the declared width and height.

---

# Comparison

## Default Box Model

    width
    + padding
    + border

Result:

    actual size grows

---

## Border-Box Model

    width includes padding
    width includes border

Result:

    actual size remains fixed

---

# Key Takeaways

- The default box model has a sizing limitation.
- Padding and borders increase an element's final dimensions.
- A box declared as:

      width: 300px;
      height: 200px;

  may actually be larger.

- Example:

      300px × 200px

  becomes:

      322px × 222px

- This makes layouts harder to manage.
- Modern CSS solves this problem using:

      box-sizing: border-box;

which you'll learn next.
