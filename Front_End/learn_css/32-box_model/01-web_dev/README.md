# Box Model Practice — Height and Width

## Exercise Overview

This exercise reinforces the use of:

    height
    width

to control the dimensions of HTML elements.

---

# Task 1 — Set Banner Height

## Objective

Increase the height of the banner section.

## CSS Selector

    #banner

## CSS

    #banner {
      height: 700px;
    }

## Result

- banner becomes 700 pixels tall
- creates a larger hero/banner section

---

# Task 2 — Set Pull Quote Width

## Objective

Control the width of the pull quote.

## CSS Selector

    .pull-quote

## CSS

    .pull-quote {
      width: 350px;
    }

## Result

- pull quote width becomes 350 pixels
- text wraps within a fixed width

---

# Task 3 — Set Heading Width

## Objective

Control the width of the banner heading.

## CSS Selector

    #banner .content h1

## CSS

    #banner .content h1 {
      width: 400px;
    }

## Result

- heading width becomes 400 pixels
- heading occupies a fixed amount of horizontal space

---

# Complete CSS Solution

    #banner {
      height: 700px;
    }

    .pull-quote {
      width: 350px;
    }

    #banner .content h1 {
      width: 400px;
    }

---

# Selectors Review

## ID Selector

    #banner

Targets:

    element with id="banner"

---

## Class Selector

    .pull-quote

Targets:

    elements with class="pull-quote"

---

## Descendant Selector

    #banner .content h1

Targets:

    h1 elements
    inside .content
    inside #banner

---

# Width and Height Review

## Height

Controls:

    vertical size

Example:

    height: 700px;

---

## Width

Controls:

    horizontal size

Example:

    width: 350px;

---

# Visual Diagram

    +------------------------+
    |                        |
    |       Content          |
    |                        |
    +------------------------+
          Width

          ↑
          |
        Height

---

# Key Takeaways

This exercise demonstrates:

    height → vertical dimension
    width  → horizontal dimension

Using fixed pixel values creates predictable sizing,
which is useful for banners, quotes, images, and layout sections.
