# CSS Typography: Web Fonts Using `@font-face`

> *"The **`@font-face`** at-rule allows you to load custom fonts directly from your website instead of relying on fonts installed on a user's computer or linking to an external font service. This gives you complete control over your website's typography."*

---

# What is `@font-face`?

The **`@font-face`** at-rule imports a custom font into your CSS stylesheet.

Unlike **Google Fonts** (which loads fonts from an external server), `@font-face` loads **font files stored within your own project**.

Once the font is loaded, it behaves just like any other font and can be used with the `font-family` property.

---

# Why Use `@font-face`?

Using local web fonts offers several advantages.

✅ Complete control over your fonts

✅ No dependency on third-party services

✅ Fonts remain available even without an internet connection (after the site loads)

✅ Better privacy since browsers don't contact external font providers

✅ Consistent typography across all users

---

# How `@font-face` Works

```text
Downloaded Font Files
        │
        ▼
fonts/
├── Roboto.ttf
├── Roboto.woff
└── Roboto.woff2
        │
        ▼
@font-face
        │
        ▼
font-family
        │
        ▼
Applied to HTML Elements
```

---

# Common Font Formats

Fonts can be downloaded in several different file formats.

| Format  | Full Name              | Purpose                                       |
| ------- | ---------------------- | --------------------------------------------- |
| `OTF`   | OpenType Font          | Modern desktop font format                    |
| `TTF`   | TrueType Font          | Widely supported font format                  |
| `WOFF`  | Web Open Font Format   | Optimized for the web                         |
| `WOFF2` | Web Open Font Format 2 | Newest, smallest, and fastest web font format |

---

# Which Formats Should You Include?

For maximum browser compatibility, include multiple font formats.

Recommended order:

```text
WOFF2
   ↓
WOFF
   ↓
TTF
```

Modern browsers use **WOFF2**, while older browsers can fall back to **WOFF** or **TTF**.

---

# Downloading Fonts

Fonts can be downloaded from services such as **Google Fonts**.

Typical workflow:

```text
Google Fonts
      │
      ▼
Download Font Files
      │
      ▼
Move Files Into Project
      │
      ▼
fonts/
├── Roboto.ttf
├── Roboto.woff
└── Roboto.woff2
```

---

# Project Structure

A common project layout looks like this:

```text
project/
│
├── index.html
├── style.css
│
└── fonts/
    ├── Roboto.ttf
    ├── Roboto.woff
    └── Roboto.woff2
```

Keeping fonts in a dedicated **fonts** directory keeps your project organized.

---

# Basic `@font-face` Syntax

```css
@font-face {
    font-family: 'MyParagraphFont';

    src:
        url('fonts/Roboto.woff2') format('woff2'),
        url('fonts/Roboto.woff') format('woff'),
        url('fonts/Roboto.ttf') format('truetype');
}
```

---

# Understanding the Rule

## Step 1 — `@font-face`

```css
@font-face {

}
```

This tells the browser that you are defining a custom font.

**Best Practice**

Place all `@font-face` rules near the **top of your CSS stylesheet**.

---

## Step 2 — Give the Font a Name

```css
font-family: 'MyParagraphFont';
```

This creates a **custom CSS name**.

It **does not** need to match the actual filename.

Example:

```css
font-family: 'HeadingFont';
```

or

```css
font-family: 'BodyText';
```

You can choose any meaningful name.

---

## Step 3 — Specify the Font Files

```css
src:
    url('fonts/Roboto.woff2') format('woff2'),
    url('fonts/Roboto.woff') format('woff'),
    url('fonts/Roboto.ttf') format('truetype');
```

Each entry tells the browser:

* where the file is located
* what format it uses

The browser searches **from top to bottom** until it finds a supported format.

---

# Why Order Matters

Browsers read the `src` list sequentially.

```text
Browser
   │
   ▼
WOFF2?
   │
Yes ─────────► Load WOFF2
   │
No
   ▼
WOFF?
   │
Yes ─────────► Load WOFF
   │
No
   ▼
TTF?
   │
Yes ─────────► Load TTF
```

Always list formats from **most modern** to **least modern**.

Recommended order:

1. WOFF2
2. WOFF
3. TTF

---

# Using the Font

Once defined, the custom font behaves like any other font.

```css
p {
    font-family: 'MyParagraphFont', sans-serif;
}
```

Here,

* `'MyParagraphFont'` is your custom font.
* `sans-serif` is the fallback if the font cannot be loaded.

---

# Complete Example

```css
@font-face {
    font-family: 'BodyFont';

    src:
        url('fonts/Roboto.woff2') format('woff2'),
        url('fonts/Roboto.woff') format('woff'),
        url('fonts/Roboto.ttf') format('truetype');
}

body {
    font-family: 'BodyFont', Arial, sans-serif;
}

h1 {
    font-family: 'BodyFont', Helvetica, sans-serif;
}
```

---

# Browser Loading Process

```text
Website Loads
      │
      ▼
Read CSS
      │
      ▼
Find @font-face
      │
      ▼
Locate Font Files
      │
      ▼
Load Best Supported Format
      │
      ▼
Apply Font to Elements
```

---

# `@font-face` vs Google Fonts

| `@font-face`                       | Google Fonts                                    |
| ---------------------------------- | ----------------------------------------------- |
| Fonts stored locally               | Fonts loaded from Google's servers              |
| Works without third-party requests | Requires an internet connection to Google's CDN |
| Greater control                    | Easier to set up                                |
| Better privacy                     | Minimal setup effort                            |
| Requires managing font files       | No file management required                     |

---

# Best Practices

✅ Store fonts inside a dedicated `fonts/` directory.

✅ Place all `@font-face` rules at the top of your CSS file.

✅ Use descriptive custom font-family names.

✅ Include **WOFF2**, **WOFF**, and **TTF** for broad browser compatibility.

✅ Always provide a fallback font.

Example:

```css
font-family: 'BodyFont', Arial, sans-serif;
```

---

# Common Mistakes

## ❌ Forgetting a Fallback Font

Incorrect

```css
font-family: 'BodyFont';
```

Better

```css
font-family: 'BodyFont', Arial, sans-serif;
```

---

## ❌ Incorrect File Path

```css
url('Roboto.ttf')
```

If the file is inside a **fonts** folder, the correct path is:

```css
url('fonts/Roboto.ttf')
```

---

## ❌ Wrong Format Order

Incorrect

```css
TTF
WOFF
WOFF2
```

Correct

```text
WOFF2
↓
WOFF
↓
TTF
```

Modern browsers should encounter the most efficient format first.

---

# Quick Reference

| Property / Rule | Purpose                           |
| --------------- | --------------------------------- |
| `@font-face`    | Defines a custom web font         |
| `font-family`   | Assigns a custom name to the font |
| `src`           | Specifies font file locations     |
| `url()`         | Points to the font file           |
| `format()`      | Declares the font's file format   |

---

# Visual Summary

```text
Download Font
        │
        ▼
Place in fonts/
        │
        ▼
Create @font-face
        │
        ▼
Assign font-family
        │
        ▼
Use font-family on elements
        │
        ▼
Browser Displays Custom Font
```

---

# Key Takeaways

* **`@font-face`** allows you to use custom fonts stored within your project.
* Common font formats include **OTF**, **TTF**, **WOFF**, and **WOFF2**.
* For the best browser compatibility, include **WOFF2**, **WOFF**, and **TTF**, listed in that order.
* The **`font-family`** property inside the `@font-face` rule creates a custom name that you'll use throughout your stylesheet.
* The **`src`** property specifies the font file locations and their formats.
* After defining the font, use it just like any other font with the `font-family` property, always including a generic fallback font.
* Organizing fonts in a dedicated `fonts/` directory and following best practices ensures a reliable, professional typography workflow.

---

> **Remember:** `@font-face` gives you full ownership of your website's typography. By hosting your own font files, you gain greater control, better privacy, and consistent styling while still providing fallback fonts for maximum compatibility across browsers.

