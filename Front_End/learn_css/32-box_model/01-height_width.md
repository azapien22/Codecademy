# CSS — Height and Width

## Overview

Every HTML element contains content that has:

    width
    height

By default, the browser automatically sizes an element
based on its content.

CSS allows you to manually control these dimensions using:

    width
    height

---

## Default Behavior

Without CSS:

    element size = content size

Example:

    <p>Hello World</p>

The paragraph box automatically grows just enough
to contain the text.

---

## Width Property

The `width` property controls:

    horizontal size

Syntax:

    width: value;

Example:

    width: 240px;

---

## Height Property

The `height` property controls:

    vertical size

Syntax:

    height: value;

Example:

    height: 80px;

---

## Basic Syntax

    selector {
      width: value;
      height: value;
    }

Example:

    p {
      width: 240px;
      height: 80px;
    }

---

## How It Works

HTML:

    <p>Hello World</p>

CSS:

    p {
      width: 240px;
      height: 80px;
    }

Result:

    paragraph box becomes:

        width  = 240px
        height = 80px

---

## Structure Diagram

    +----------------------+
    |                      |
    |       Content        | ← Height
    |                      |
    +----------------------+
          Width

---

## What is `px`?

`px` stands for:

    pixels

Pixels provide exact measurements.

Example:

    width: 300px;
    height: 100px;

---

## Example

CSS:

    div {
      width: 400px;
      height: 200px;
    }

Result:

    div always attempts to remain
    400px × 200px

---

## Visual Concept

    width
    <------------------>

    +------------------+
    |                  |
    |                  |
    |                  | ← height
    |                  |
    +------------------+

---

## Advantages of Pixels

- precise sizing
- predictable dimensions
- consistent appearance

Example:

    width: 500px;

always equals:

    500 pixels

---

## Potential Problem

Fixed pixel dimensions may not adapt well to:

- phones
- tablets
- small screens

Example:

    width: 1200px;

May fit:

    desktop monitor

May overflow:

    mobile screen

---

## Overflow Example

Desktop:

    +----------------------+
    |      Element         |
    +----------------------+

Mobile:

    +----------+
    | Element  |
    | extends  |
    | outside  |
    +----------+

---

## Why Responsive Design Matters

Fixed pixel widths:

    width: 1200px;

can create:

- horizontal scrolling
- layout issues
- poor mobile experience

Later you'll learn responsive units such as:

    %
    em
    rem
    vw
    vh

---

## Common Examples

Paragraph:

    p {
      width: 240px;
      height: 80px;
    }

Image:

    img {
      width: 300px;
      height: 200px;
    }

Div:

    div {
      width: 500px;
      height: 250px;
    }

---

## Key Pattern

    width: value;
    height: value;

Example:

    width: 240px;
    height: 80px;

---

## Key Idea

The `width` and `height` properties control the size
of an element's content area.

    width  → horizontal size
    height → vertical size

Pixels provide precise sizing, but fixed dimensions
may not work well on all screen sizes.
