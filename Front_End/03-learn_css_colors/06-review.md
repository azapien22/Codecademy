# Color: Review

## Overview

CSS provides several powerful ways to define and manipulate colors, allowing developers to create visually appealing, accessible, and professional websites.

Throughout this lesson, we explored the four primary methods of representing color in CSS and learned how transparency can be applied using alpha values.

Understanding these color systems gives you precise control over the appearance of your web pages.

---

# The Four Color Systems in CSS

CSS supports four primary methods for defining colors:

1. Named Colors
2. Hexadecimal (Hex)
3. RGB
4. HSL

Each method has its own advantages and use cases.

---

# 1. Named Colors

Named colors use predefined English color names recognized by all modern web browsers.

Examples:

```css
color: red;
color: blue;
background-color: limegreen;
```

### Features

- Easy to remember
- Beginner-friendly
- Approximately **140 predefined colors**
- Best suited for simple projects and quick styling

---

# 2. Hexadecimal (Hex)

Hex colors use a **Base-16 (Hexadecimal)** numbering system to define colors.

General syntax:

```css
#RRGGBB
```

Example:

```css
color: #23F41A;
```

Where:

- `RR` = Red
- `GG` = Green
- `BB` = Blue

Each pair ranges from:

```text
00 → FF
```

Hex colors can represent over **16.7 million unique colors**.

### Three-Digit Shorthand

Some six-digit hex colors can be shortened.

Example:

```css
#FFFFFF
```

becomes

```css
#FFF
```

Likewise:

```css
#000000
```

becomes

```css
#000
```

Shorthand is only possible when each hexadecimal pair contains identical digits.

---

# 3. RGB

RGB stands for:

- **Red**
- **Green**
- **Blue**

General syntax:

```css
rgb(red, green, blue)
```

Example:

```css
color: rgb(7, 210, 50);
```

Each value ranges from:

```text
0 → 255
```

Where:

- `0` = No intensity
- `255` = Maximum intensity

RGB and Hex represent the same colors—they simply use different numbering systems.

---

# 4. HSL

HSL stands for:

- **Hue**
- **Saturation**
- **Lightness**

General syntax:

```css
hsl(hue, saturation, lightness)
```

Example:

```css
color: hsl(200, 20%, 50%);
```

### Hue

Represents the actual color.

Range:

```text
0° → 360°
```

Examples:

| Hue | Color |
| ----: | -------- |
| `0°` | Red |
| `60°` | Yellow |
| `120°` | Green |
| `180°` | Cyan |
| `240°` | Blue |
| `300°` | Magenta |
| `360°` | Red |

---

### Saturation

Represents the intensity or purity of a color.

Range:

```text
0% → 100%
```

- `0%` = Gray
- `100%` = Pure color

---

### Lightness

Represents how light or dark a color appears.

Range:

```text
0% → 100%
```

- `0%` = Black
- `50%` = Normal color
- `100%` = White

---

# Transparency (Alpha)

RGB and HSL support transparency through an additional **alpha** value.

## RGBA

```css
rgba(255, 0, 0, 0.5)
```

## HSLA

```css
hsla(120, 100%, 50%, 0.5)
```

## Modern CSS Syntax

```css
rgb(255 0 0 / 50%)

hsl(120 100% 50% / 50%)
```

The alpha value ranges from:

| Alpha | Result |
| ------ | ---------------------- |
| `0` | Completely transparent |
| `0.5` | Half transparent |
| `1` | Completely opaque |

Hex colors also support transparency by appending alpha values.

Example:

```css
#4285F480
```

Named colors **cannot** have alpha values.

Instead, CSS provides the special keyword:

```css
transparent
```

which is equivalent to:

```css
rgba(0, 0, 0, 0)
```

---

# Comparison of Color Systems

| Color System | Syntax Example | Advantages |
| --- | --- | --- |
| Named Colors | `red` | Simple and easy to remember |
| Hex | `#4285F4` | Compact, widely used, over 16.7 million colors |
| RGB | `rgb(66, 133, 244)` | Easy to understand, excellent for calculations and JavaScript |
| HSL | `hsl(220, 80%, 60%)` | Intuitive for adjusting hue, saturation, and lightness |

---

# Quick Reference

| Method | Example |
| --- | --- |
| Named Color | `blue` |
| Hex | `#FF0000` |
| RGB | `rgb(255, 0, 0)` |
| HSL | `hsl(0, 100%, 50%)` |
| RGBA | `rgba(255, 0, 0, 0.5)` |
| HSLA | `hsla(0, 100%, 50%, 0.5)` |
| Transparent | `transparent` |

---

# When to Use Each

### Named Colors

Use when:

- Learning CSS
- Prototyping
- Simple styling

---

### Hex

Use when:

- Working with design systems
- Matching brand colors
- Following style guides
- Collaborating with designers

---

### RGB

Use when:

- Performing color calculations
- Working with JavaScript
- Using transparency with `rgba()`

---

### HSL

Use when:

- Creating color palettes
- Adjusting brightness
- Adjusting saturation
- Building consistent UI themes

---

# Key Takeaways

CSS offers four primary ways to represent colors:

- **Named Colors** use predefined English color names.
- **Hexadecimal (Hex)** uses a Base-16 numbering system to represent red, green, and blue.
- **RGB** represents colors using decimal values ranging from **0–255** for each color channel.
- **HSL** represents colors using **Hue**, **Saturation**, and **Lightness**, making it intuitive for adjusting and organizing color schemes.

RGB, HSL, and Hex all support transparency through an **alpha** value, allowing colors to blend smoothly with the elements behind them.

Mastering these color systems gives you the flexibility to create visually appealing, accessible, and professional web designs.

> **Remember:** Every color you see on a web page can be represented using **Hex**, **RGB**, or **HSL**. Professional developers typically choose one format for consistency, while HSL is especially useful for creating balanced color palettes and Hex remains the most common format in production CSS.
