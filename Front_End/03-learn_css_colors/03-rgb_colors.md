# Color: RGB Colors

## Overview

Another common way to define colors in CSS is by using **RGB** values.

**RGB** stands for:

* **R** — Red
* **G** — Green
* **B** — Blue

Instead of using hexadecimal numbers, RGB uses **decimal numbers** to specify the intensity of each color component.

RGB and hexadecimal colors represent the same color spectrum—they simply use different number systems.

---

## RGB Syntax

The general syntax for an RGB color is:

```css
rgb(red, green, blue)
```

Each color component is represented by a decimal number ranging from **0** to **255**.

Example:

```css
h1 {
  color: rgb(23, 45, 23);
}
```

---

## Understanding RGB Values

Each of the three numbers controls the intensity of one primary color.

| Position | Color Component |   Range |
| -------- | --------------- | ------: |
| First    | Red             | `0–255` |
| Second   | Green           | `0–255` |
| Third    | Blue            | `0–255` |

Where:

* **0** = No intensity
* **255** = Maximum intensity

Example:

```css
rgb(255, 0, 0)
```

Result:

**Pure Red**

---

## Common RGB Colors

| Color       | RGB Value            |
| ----------- | -------------------- |
| Black       | `rgb(0, 0, 0)`       |
| White       | `rgb(255, 255, 255)` |
| Red         | `rgb(255, 0, 0)`     |
| Green       | `rgb(0, 255, 0)`     |
| Blue        | `rgb(0, 0, 255)`     |
| Yellow      | `rgb(255, 255, 0)`   |
| Cyan (Aqua) | `rgb(0, 255, 255)`   |
| Magenta     | `rgb(255, 0, 255)`   |

---

## Using RGB in CSS

RGB values can be used anywhere CSS expects a color value.

Example:

```css
body {
  background-color: rgb(245, 245, 245);
}

h1 {
  color: rgb(0, 51, 102);
}

button {
  background-color: rgb(30, 144, 255);
  color: rgb(255, 255, 255);
}
```

---

## Mixing Colors

RGB creates colors by mixing different amounts of red, green, and blue.

Examples:

```css
rgb(255, 0, 0)
```

Produces:

**Red**

---

```css
rgb(0, 255, 0)
```

Produces:

**Green**

---

```css
rgb(0, 0, 255)
```

Produces:

**Blue**

---

```css
rgb(255, 255, 0)
```

Produces:

**Yellow**

(Red + Green)

---

```css
rgb(255, 255, 255)
```

Produces:

**White**

(All colors at maximum intensity)

---

```css
rgb(0, 0, 0)
```

Produces:

**Black**

(No color intensity)

---

## RGB vs. Hexadecimal

RGB and hexadecimal define the **same colors**, but use different number systems.

Example:

| Color | Hex       | RGB                  |
| ----- | --------- | -------------------- |
| Black | `#000000` | `rgb(0, 0, 0)`       |
| White | `#FFFFFF` | `rgb(255, 255, 255)` |
| Red   | `#FF0000` | `rgb(255, 0, 0)`     |
| Green | `#00FF00` | `rgb(0, 255, 0)`     |
| Blue  | `#0000FF` | `rgb(0, 0, 255)`     |

For example:

```css
color: #FF0000;
```

and

```css
color: rgb(255, 0, 0);
```

produce exactly the same color.

---

## Which Should You Use?

Both RGB and hexadecimal are fully supported by modern browsers and are equally valid.

The choice between them is largely a matter of personal preference or team coding standards.

Many developers prefer:

* **Hex** for shorter color values.
* **RGB** when working with color calculations or transparency (using `rgba()`).

Regardless of which format you choose, **consistency** throughout your stylesheet is important.

---

## Advantages of RGB

* Easy to understand using decimal numbers.
* Clearly shows the intensity of each color channel.
* Works well with JavaScript and CSS functions.
* Easily extended to `rgba()` for transparency.

---

## Quick Reference

| RGB Value            | Color  |
| -------------------- | ------ |
| `rgb(255, 0, 0)`     | Red    |
| `rgb(0, 255, 0)`     | Green  |
| `rgb(0, 0, 255)`     | Blue   |
| `rgb(255, 255, 255)` | White  |
| `rgb(0, 0, 0)`       | Black  |
| `rgb(255, 255, 0)`   | Yellow |

---

## Key Takeaways

RGB colors define colors by combining varying amounts of **red**, **green**, and **blue**.

Each color component is assigned a decimal value from **0** to **255**, allowing over **16 million unique color combinations**.

RGB and hexadecimal color formats are equivalent—they simply represent the same colors using different numbering systems.

> **Remember:** The format `rgb(red, green, blue)` always follows the order **Red → Green → Blue**, with each value ranging from **0** (none) to **255** (maximum intensity).

