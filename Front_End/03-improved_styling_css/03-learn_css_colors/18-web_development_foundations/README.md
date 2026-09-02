# Web Development Foundations: Typography Project

## Aoife Conleavy — Morocco Travel Journal

> **Project Goal:** Improve the readability and visual appearance of Aoife Conleavy’s professional website by modifying font weights, line heights, font families, fallback fonts, and custom web fonts.

---

## Project Overview

Aoife Conleavy is a novelist who has written about her travels for nearly two decades.

Before launching her new novel, ***Tide Blade***, she wants to improve the typography of her professional website. The novel features stories inspired by real-life characters in Morocco.

In this project, CSS typography properties are used to make the page:

* Easier to read
* More visually appealing
* More consistent
* More accessible
* More professional

---

# Skills Practiced

This project reinforces the following typography concepts:

* `font-weight`
* `font-family`
* `line-height`
* Google Fonts
* Font stacks
* Fallback fonts
* `@font-face`
* Locally hosted fonts
* Relative file paths

---

# Project Tasks

## Task 1: Make the Header Bold

The header contains:

* The author’s name
* Travels
* Fiction
* Contact

Set the header’s `font-weight` to `bold`.

```css
header {
    font-weight: bold;
}
```

### Explanation

The `font-weight` property controls how thick or thin text appears.

```css
font-weight: bold;
```

is equivalent to:

```css
font-weight: 700;
```

---

## Task 2: Set Banner Font Weights

The banner contains:

* An `<h2>` element displaying `DEC 20XX`
* An `<h1>` element displaying `Morocco`

Set the following font weights:

| Element       | Font Weight |
| ------------- | ----------: |
| Banner `<h2>` |       `500` |
| Banner `<h1>` |       `900` |

```css
.banner h2 {
    font-weight: 500;
}

.banner h1 {
    font-weight: 900;
}
```

### Visual Hierarchy

```text
DEC 20XX
font-weight: 500
      │
      ▼
Moderate emphasis

MOROCCO
font-weight: 900
      │
      ▼
Strong emphasis
```

The heavier `<h1>` makes the main location name more visually prominent.

---

## Task 3: Adjust Line Height

The `line-height` property controls the vertical spacing between lines of text.

Use the following values:

| Element                           | Line Height |
| --------------------------------- | ----------: |
| Journal paragraph                 |       `1.4` |
| First letter of journal paragraph |      `0.87` |
| Quote                             |       `1.2` |
| Footer                            |       `1.5` |

### CSS

```css
.journal p {
    line-height: 1.4;
}

.journal p::first-letter {
    line-height: 0.87;
}

.quote {
    line-height: 1.2;
}

footer {
    line-height: 1.5;
}
```

### Why Use Unitless Values?

Unitless values scale according to the element’s current font size.

```text
Rendered Line Height = Font Size × Line Height
```

For example:

```text
16px × 1.4 = 22.4px
```

If the font size changes, the line height adjusts automatically.

---

## Task 4: Add Google Fonts

Add these fonts to `index.html`:

### Abril Fatface

Used for the main banner heading.

### Work Sans

Required weights:

* `400`
* `500`
* `800`

### Merriweather

Required styles:

* `400`
* `400 italic`

---

## Google Fonts `<link>` Example

Place the following inside the `<head>` element of `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link
    href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Merriweather:ital@0;1&family=Work+Sans:wght@400;500;800&display=swap"
    rel="stylesheet"
>
```

### Example Document Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Aoife Conleavy | Morocco</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">

    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
    >

    <link
        href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Merriweather:ital@0;1&family=Work+Sans:wght@400;500;800&display=swap"
        rel="stylesheet"
    >

    <link rel="stylesheet" href="styles/style.css">
</head>
<body>
    <!-- Page content -->
</body>
</html>
```

---

# Understanding the Google Fonts URL

```text
Abril Fatface
      │
      ├── Regular style
      │
Work Sans
      │
      ├── 400
      ├── 500
      └── 800
      │
Merriweather
      │
      ├── 400 normal
      └── 400 italic
```

Only the required font weights and styles should be loaded.

This helps avoid downloading unnecessary font files.

---

## Task 5: Apply the Google Fonts

Apply the imported fonts to the following sections:

| Element         | Font Family   |
| --------------- | ------------- |
| Banner `<h2>`   | Work Sans     |
| Banner `<h1>`   | Abril Fatface |
| Journal section | Work Sans     |
| Photo caption   | Merriweather  |

### CSS

```css
.banner h2 {
    font-family: 'Work Sans';
}

.banner h1 {
    font-family: 'Abril Fatface';
}

.journal {
    font-family: 'Work Sans';
}

.photo-caption {
    font-family: 'Merriweather';
}
```

---

## Task 6: Add Fallback Fonts

External fonts may fail to load because of:

* Internet connection problems
* Third-party font restrictions
* Browser privacy settings
* Content blockers
* Google Fonts service interruptions

A font stack ensures that readable text still appears.

### Required Font Stacks

| Element       | Font Stack                   |
| ------------- | ---------------------------- |
| Banner `<h2>` | Work Sans, Arial, sans-serif |
| Banner `<h1>` | Abril Fatface, sans-serif    |
| Journal       | Work Sans, serif             |
| Photo caption | Merriweather, serif          |

### CSS

```css
.banner h2 {
    font-family: 'Work Sans', Arial, sans-serif;
}

.banner h1 {
    font-family: 'Abril Fatface', sans-serif;
}

.journal {
    font-family: 'Work Sans', serif;
}

.photo-caption {
    font-family: 'Merriweather', serif;
}
```

---

# How a Font Stack Works

```text
Preferred Font
      │
      ▼
First Fallback
      │
      ▼
Generic Font Family
```

Example:

```css
font-family: 'Work Sans', Arial, sans-serif;
```

The browser attempts to use:

1. Work Sans
2. Arial
3. Any available sans-serif font

---

## Task 7: Load a Local Font with `@font-face`

The project includes the following custom font file:

```text
CroissantOne-Regular.ttf
```

The file is stored in:

```text
styles/fonts/
```

Assuming the CSS file is located directly inside the `styles/` directory, the relative path from the stylesheet is:

```text
fonts/CroissantOne-Regular.ttf
```

---

## Project Directory Example

```text
project/
│
├── index.html
│
└── styles/
    ├── style.css
    │
    └── fonts/
        └── CroissantOne-Regular.ttf
```

---

## Define the Local Font

Place the `@font-face` rule near the top of the CSS stylesheet.

```css
@font-face {
    font-family: 'Croissant One';

    src:
        url('fonts/CroissantOne-Regular.ttf')
        format('truetype');
}
```

### Rule Breakdown

```css
@font-face {
```

Defines a custom font.

```css
font-family: 'Croissant One';
```

Creates the name that will be used elsewhere in the stylesheet.

```css
src: url('fonts/CroissantOne-Regular.ttf');
```

Specifies the relative path to the local font file.

```css
format('truetype');
```

Identifies the font file as a TrueType font.

---

## Task 8: Apply the Local Font to the Footer

Set the footer’s font stack to:

1. Croissant One
2. Merriweather
3. Any available serif font

```css
footer {
    font-family: 'Croissant One', 'Merriweather', serif;
}
```

### Browser Selection Order

```text
Croissant One
      │
      ▼
Merriweather
      │
      ▼
System Serif Font
```

---

# Complete CSS Solution

```css
/* ==========================================================
   Local Font
   ========================================================== */

@font-face {
    font-family: 'Croissant One';

    src:
        url('fonts/CroissantOne-Regular.ttf')
        format('truetype');
}


/* ==========================================================
   Header
   ========================================================== */

header {
    font-weight: bold;
}


/* ==========================================================
   Banner
   ========================================================== */

.banner h2 {
    font-family: 'Work Sans', Arial, sans-serif;
    font-weight: 500;
}

.banner h1 {
    font-family: 'Abril Fatface', sans-serif;
    font-weight: 900;
}


/* ==========================================================
   Journal
   ========================================================== */

.journal {
    font-family: 'Work Sans', serif;
}

.journal p {
    line-height: 1.4;
}

.journal p::first-letter {
    line-height: 0.87;
}


/* ==========================================================
   Quote
   ========================================================== */

.quote {
    line-height: 1.2;
}


/* ==========================================================
   Photo Caption
   ========================================================== */

.photo-caption {
    font-family: 'Merriweather', serif;
}


/* ==========================================================
   Footer
   ========================================================== */

footer {
    font-family: 'Croissant One', 'Merriweather', serif;
    line-height: 1.5;
}
```

---

# Important Selector Note

The exact selectors in the Codecademy project may differ from the examples above.

For example, the project may use selectors such as:

```css
#banner h1 {
    /* Styles */
}
```

or:

```css
.banner h1 {
    /* Styles */
}
```

or:

```css
.banner .content h1 {
    /* Styles */
}
```

Use the selectors already provided in the project’s `style.css` file.

The typography declarations remain the same.

---

# Completed Task Checklist

* [x] Set the header text to bold
* [x] Set the banner `<h2>` weight to `500`
* [x] Set the banner `<h1>` weight to `900`
* [x] Set journal paragraph line height to `1.4`
* [x] Set the journal’s first-letter line height to `0.87`
* [x] Set quote line height to `1.2`
* [x] Set footer line height to `1.5`
* [x] Import Abril Fatface
* [x] Import Work Sans weights `400`, `500`, and `800`
* [x] Import Merriweather regular and italic styles
* [x] Apply Work Sans to the banner `<h2>`
* [x] Apply Abril Fatface to the banner `<h1>`
* [x] Apply Work Sans to the journal
* [x] Apply Merriweather to the photo caption
* [x] Add fallback fonts
* [x] Define Croissant One using `@font-face`
* [x] Apply Croissant One to the footer
* [x] Add Merriweather and `serif` as footer fallbacks

---

# Quick Reference

| Property or Rule | Purpose                                 |
| ---------------- | --------------------------------------- |
| `font-weight`    | Controls how thick or thin text appears |
| `font-family`    | Selects a font or font stack            |
| `line-height`    | Controls vertical spacing between lines |
| `<link>`         | Loads an external font stylesheet       |
| `@font-face`     | Defines a locally hosted custom font    |
| `src`            | Specifies the font file location        |
| `url()`          | Provides the path to a resource         |
| `format()`       | Identifies the font file format         |

---

# Typography Architecture

```text
index.html
    │
    ├── Google Fonts <link>
    │       │
    │       ├── Abril Fatface
    │       ├── Work Sans
    │       └── Merriweather
    │
    ▼
style.css
    │
    ├── @font-face
    │       │
    │       └── Croissant One
    │
    ├── Font weights
    ├── Font stacks
    ├── Line heights
    └── Typography selectors
            │
            ▼
Readable and Professional Webpage
```

---

# Common Mistakes

## Incorrect Local Font Path

```css
src: url('CroissantOne-Regular.ttf');
```

This is incorrect when the file is stored inside `styles/fonts/`.

Use:

```css
src: url('fonts/CroissantOne-Regular.ttf');
```

---

## Forgetting Quotation Marks

Incorrect:

```css
font-family: Croissant One;
```

Correct:

```css
font-family: 'Croissant One';
```

Multi-word font names should be enclosed in quotation marks.

---

## Forgetting Fallback Fonts

Less reliable:

```css
font-family: 'Work Sans';
```

Better:

```css
font-family: 'Work Sans', Arial, sans-serif;
```

---

## Using Units with the Required Line Height

Unnecessary:

```css
line-height: 1.4px;
```

Correct:

```css
line-height: 1.4;
```

A unitless line height scales with the element’s font size.

---

## Applying `@font-face` Inside a Selector

Incorrect:

```css
footer {
    @font-face {
        font-family: 'Croissant One';
    }
}
```

Correct:

```css
@font-face {
    font-family: 'Croissant One';

    src:
        url('fonts/CroissantOne-Regular.ttf')
        format('truetype');
}

footer {
    font-family: 'Croissant One', 'Merriweather', serif;
}
```

The `@font-face` rule should be declared independently, usually near the top of the stylesheet.

---

# Key Takeaways

* Typography significantly affects readability and user experience.
* `font-weight` creates emphasis and visual hierarchy.
* Unitless `line-height` values scale automatically with font size.
* Google Fonts can be imported through a `<link>` element in HTML.
* Font stacks provide backups when preferred fonts are unavailable.
* `@font-face` makes locally stored fonts available to a stylesheet.
* The path inside `url()` is relative to the CSS file’s location.
* Multi-word font-family names should be placed in quotation marks.
* External and local fonts should always include appropriate fallback fonts.
* Effective typography combines font family, weight, spacing, and hierarchy.

---

> **Final Reminder:** A strong typography system does more than make a website attractive. It establishes hierarchy, improves readability, reinforces the site’s personality, and helps readers move comfortably through the content.

