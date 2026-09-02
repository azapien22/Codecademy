# Color: Foreground vs. Background

## Overview

Before learning the different ways to define colors in CSS, it is important to understand that colors can be applied to two different parts of an HTML element:

* **Foreground color**
* **Background color**

These two properties control different aspects of an element's appearance and are commonly used together to create visually appealing and readable web pages.

---

## Foreground Color

The **foreground color** is the color of the element's visible content.

This typically includes:

* Text
* Icons
* Borders (when specified separately)
* Other visible content

For example, if a heading appears green, the **foreground color** has been changed.

CSS uses the `color` property to style the foreground color.

### Syntax

```css
color: <color>;
```

### Example

```css
h1 {
  color: green;
}
```

Result:

* Heading text appears **green**.
* Background remains unchanged (usually white unless another color is specified).

---

## Background Color

The **background color** is the color displayed behind an element's content.

This includes the area occupied by the element itself.

CSS uses the `background-color` property to style an element's background.

### Syntax

```css
background-color: <color>;
```

### Example

```css
h1 {
  background-color: yellow;
}
```

Result:

* The background behind the heading becomes **yellow**.
* The text color remains unchanged.

---

## Using Both Together

Most web pages style both the foreground and background colors simultaneously.

Example:

```css
h1 {
  color: red;
  background-color: blue;
}
```

### Result

* **Foreground (text):** Red
* **Background:** Blue

Visually:

```text
+-----------------------------+
|        RED HEADING          |
|      (Blue Background)      |
+-----------------------------+
```

---

## Another Example

```css
p {
  color: white;
  background-color: black;
}
```

Result:

* Paragraph text appears **white**.
* Paragraph background appears **black**.

This high-contrast color combination is commonly used to improve readability.

---

## Choosing Good Color Combinations

When styling web pages, always consider **contrast** between the foreground and background.

Good contrast improves readability and accessibility.

### Good Example

```css
color: black;
background-color: white;
```

or

```css
color: white;
background-color: navy;
```

These combinations are easy to read.

### Poor Example

```css
color: yellow;
background-color: white;
```

or

```css
color: lightgray;
background-color: white;
```

Low-contrast combinations make text difficult to read and should generally be avoided.

---

## CSS Properties Summary

| Property           | Purpose                                 |
| ------------------ | --------------------------------------- |
| `color`            | Sets the foreground (text) color        |
| `background-color` | Sets the background color of an element |

---

## Example Stylesheet

```css
body {
  background-color: #f5f5f5;
}

h1 {
  color: darkblue;
}

p {
  color: #333333;
  background-color: white;
}
```

This stylesheet creates:

* A light gray page background
* Dark blue headings
* Dark gray paragraph text
* White paragraph backgrounds

---

## Key Takeaways

CSS distinguishes between two types of color:

* **Foreground color**, controlled by the `color` property, determines the color of an element's text and visible content.
* **Background color**, controlled by the `background-color` property, determines the color behind an element's content.

Using these two properties together allows you to create attractive, readable, and accessible web pages.

> **Remember:** The `color` property changes **what you read**, while the `background-color` property changes **what the content sits on**.

