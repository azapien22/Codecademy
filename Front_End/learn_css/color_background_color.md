# CSS — Color and Background Color

## Overview

CSS can style two important color areas:

    foreground color
    background color

These control how text and backgrounds appear on a webpage.

---

## Foreground Color

Foreground color refers to:

    the color of the element itself

Example:

    text color

---

## Background Color

Background color refers to:

    the color behind the element

Example:

    the area behind text

---

## CSS Properties

### `color`

Styles the foreground (text) color.

Example:

    color: red;

---

### `background-color`

Styles the background color.

Example:

    background-color: blue;

---

## Basic Syntax
```text
    selector {
      color: value;
      background-color: value;
    }
```
---

## Example
```text
    h1 {
      color: red;
      background-color: blue;
    }
```
---

## How It Works

HTML:

    <h1>Heading</h1>

CSS:
```text
    h1 {
      color: red;
      background-color: blue;
    }
```
Result:

    text → red
    background → blue

---

## Structure Diagram

    element
     ├── foreground → color
     └── background → background-color

---

## Visual Concept

    [ blue background ]
         red text

---

## Common Color Values

Examples:

    red
    blue
    green
    yellow
    black
    white

---

## Example — Paragraph Styling
```text
    p {
      color: white;
      background-color: black;
    }
```
Result:

    white text on black background

---

## Why Color Matters

Color helps:

- improve readability
- create contrast
- emphasize content
- establish design style

---

## Key Pattern

    color: value;
    background-color: value;

Example:

    color: red;
    background-color: blue;

---

## Key Idea

CSS separates:

    foreground (text) color
    background color

allowing independent styling of both.
