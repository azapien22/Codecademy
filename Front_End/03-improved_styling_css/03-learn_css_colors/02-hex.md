# Color: Hexadecimal (Hex Colors)

## Overview

One of the most common ways to define colors in CSS is by using the **hexadecimal color system**, commonly referred to as **Hex**.

Hex colors provide a compact and precise way to represent millions of different colors and are widely used in web development.

A hexadecimal color begins with a hash (`#`) followed by either **six** or **three** hexadecimal characters.

---

## Hex Color Syntax

A six-digit hex color follows this format:

```css
#RRGGBB
```

Where:

* **RR** = Red
* **GG** = Green
* **BB** = Blue

Each pair represents the intensity of that color component.

Example:

```css
#FF0000
```

This represents:

* Red = `FF`
* Green = `00`
* Blue = `00`

Result:

**Pure Red**

---

## Understanding Hexadecimal

Unlike the decimal number system (Base 10), hexadecimal uses **Base 16**.

### Decimal (Base 10)

```text
0 1 2 3 4 5 6 7 8 9
```

### Hexadecimal (Base 16)

```text
0 1 2 3 4 5 6 7 8 9 A B C D E F
```

The letters represent the following decimal values:

| Hex | Decimal |
| --- | ------: |
| A   |      10 |
| B   |      11 |
| C   |      12 |
| D   |      13 |
| E   |      14 |
| F   |      15 |

Because each color channel uses two hexadecimal digits, every channel can represent values from:

```text
00 → FF
```

or

```text
0 → 255 (decimal)
```

This allows over **16 million possible color combinations**.

---

## Common Hex Colors

| Color        | Hex Value |
| ------------ | --------- |
| Black        | `#000000` |
| White        | `#FFFFFF` |
| Red          | `#FF0000` |
| Green        | `#00FF00` |
| Blue         | `#0000FF` |
| Aqua (Cyan)  | `#00FFFF` |
| Brown        | `#A52A2A` |
| SaddleBrown  | `#8B4513` |
| Sienna       | `#A0522D` |
| DarkSeaGreen | `#8FBC8F` |

---

## Using Hex Colors in CSS

Hex colors can be used anywhere CSS expects a color value.

Example:

```css
body {
  background-color: #F5F5F5;
}

h1 {
  color: #003366;
}

p {
  color: #333333;
}
```

---

## Three-Digit Shorthand

Some six-digit hex colors can be shortened to **three digits**.

This is only possible when each color pair contains identical characters.

### Six-digit

```css
#FFFFFF
```

becomes

```css
#FFF
```

---

### Another Example

```css
#000000
```

becomes

```css
#000
```

---

### Another Example

```css
#00FFFF
```

becomes

```css
#0FF
```

---

## How the Shorthand Works

Each digit is duplicated automatically by the browser.

| Shorthand | Expanded  |
| --------- | --------- |
| `#000`    | `#000000` |
| `#FFF`    | `#FFFFFF` |
| `#0FF`    | `#00FFFF` |
| `#F00`    | `#FF0000` |
| `#0F0`    | `#00FF00` |
| `#00F`    | `#0000FF` |

---

## Important Rule

Every three-digit hex color can be expanded into a six-digit hex color.

Example:

```text
#ABC
```

becomes

```text
#AABBCC
```

However, **not every six-digit hex color can be shortened**.

For example:

```text
#8FBC8F
```

cannot be shortened because the digit pairs are not identical.

---

## Uppercase vs. Lowercase

Hexadecimal letters may be written in either uppercase or lowercase.

These are identical:

```css
#FFFFFF
```

```css
#ffffff
```

```css
#FfFfFf
```

Most development teams choose one style and use it consistently throughout a project.

---

## Example Stylesheet

```css
body {
  background-color: #F4F4F4;
}

h1 {
  color: #003366;
}

button {
  background-color: #1E90FF;
  color: #FFFFFF;
}
```

This stylesheet produces:

* Light gray page background
* Dark blue heading
* Bright blue button
* White button text

---

## Advantages of Hex Colors

* Compact and easy to write
* Supported by every modern browser
* Can represent over **16 million colors**
* Commonly used in design systems and style guides
* Easy to copy directly from design tools such as Figma, Adobe XD, and Photoshop

---

## Quick Reference

| Format          | Example             |
| --------------- | ------------------- |
| Six-digit Hex   | `#FF0000`           |
| Three-digit Hex | `#F00`              |
| Black           | `#000` or `#000000` |
| White           | `#FFF` or `#FFFFFF` |
| Aqua            | `#0FF` or `#00FFFF` |

---

## Key Takeaways

Hexadecimal (Hex) colors are one of the most widely used color formats in CSS.

A hex color begins with a `#` and is followed by either **six** or **three** hexadecimal characters representing the **red**, **green**, and **blue** color channels.

Hexadecimal uses a **Base 16** numbering system, allowing browsers to represent over **16 million unique colors**.

Three-digit shorthand notation is available only when each pair of hexadecimal digits is identical.

> **Remember:** The format `#RRGGBB` represents **Red, Green, Blue**. Each pair ranges from `00` (no intensity) to `FF` (maximum intensity), giving you precise control over the color displayed.

