# CSS — Text Align

## Overview

By default, text appears on the:

    left side

of its container.

The `text-align` property controls the horizontal alignment
of text inside its parent element.

---

## Basic Syntax
```text
    selector {
      text-align: value;
    }
```
Example:
```text
    h1 {
      text-align: right;
    }
```
---

## How It Works

HTML:

    <h1>Heading</h1>

CSS:
```text
    h1 {
      text-align: right;
    }
```
Result:

    heading moves to the right side

---

## Structure Diagram
```text
    parent container
     └── text alignment controlled by:
           text-align
```
---

## Common Values

### `left`

Aligns text to the left side.

Example:

    text-align: left;

---

### `center`

Centers text horizontally.

Example:

    text-align: center;

---

### `right`

Aligns text to the right side.

Example:

    text-align: right;

---

### `justify`

Spreads text evenly between left and right edges.

Example:

    text-align: justify;

---

## Visual Concept

### Left

    Text starts here
    |

---

### Center

           Text centered

---

### Right

                     Text aligned right

---

### Justify

    Text stretches evenly across the container.

---

## Parent Element Concept

Text aligns relative to its:

    parent container

Example:
```text
    div
     └── p
```
If `text-align` is applied to the `div`,
the paragraph aligns inside the `div`.

---

## Example — Centered Heading
```text
    h1 {
      text-align: center;
    }
```
Result:

    heading centered on page

---

## Common Use Cases

- center page titles
- align navigation menus
- justify article text
- create balanced layouts

---

## Key Pattern

    text-align: value;

Examples:

    text-align: left;
    text-align: center;
    text-align: right;
    text-align: justify;

---

## Key Idea

The `text-align` property controls how text is positioned
inside its parent element.
