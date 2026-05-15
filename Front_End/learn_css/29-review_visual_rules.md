# CSS — Visual Rules Review

## Overview

CSS visual rules control how text, colors, and backgrounds
appear on a webpage.

These properties help create:

- readable layouts
- visual hierarchy
- styling consistency
- modern designs

---

## Font Family

Controls the typeface of text.

Property:

    font-family

Example:
```text
    p {
      font-family: Arial;
    }
```
---

## Font Size

Controls text size.

Property:

    font-size

Example:
```text
    p {
      font-size: 18px;
    }
```
---

## Font Weight

Controls how bold or thin text appears.

Property:

    font-weight

Examples:

    font-weight: bold;
    font-weight: normal;

---

## Text Alignment

Controls horizontal text positioning.

Property:

    text-align

Values:

    left
    center
    right
    justify

Example:
```text
    h1 {
      text-align: center;
    }
```
---

## Text Color

Controls foreground (text) color.

Property:

    color

Example:
```text
    p {
      color: red;
    }
```
---

## Background Color

Controls the color behind content.

Property:

    background-color

Example:
```text
    p {
      background-color: yellow;
    }
```
---

## Opacity

Controls transparency.

Property:

    opacity

Scale:

    1   → fully visible
    0.5 → semi-transparent
    0   → invisible

Example:

    opacity: 0.5;

---

## Background Image

Places an image behind an element.

Property:

    background-image

Example:

    background-image: url('image.jpg');

---

## !important

Forces a declaration to override other styles.

Syntax:

    property: value !important;

Example:

    color: blue !important;

---

## Specificity Reminder

Normal specificity:

    ID > class > type

But:

    !important overrides everything

---

## Visual Concept

    text styling
     ├── font-family
     ├── font-size
     ├── font-weight
     └── text-align

    color styling
     ├── color
     ├── background-color
     ├── opacity
     └── background-image

---

## Best Practices

- use readable fonts
- create strong contrast
- avoid overusing !important
- use background images carefully
- maintain consistent styling

---

## Key Idea

Visual rules control the appearance of text and backgrounds,
making webpages readable, attractive, and organized.
