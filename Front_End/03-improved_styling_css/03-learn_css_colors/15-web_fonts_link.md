# CSS Typography: Web Fonts Using `<link>`

> *"Online font services like **Google Fonts** make it easy to add beautiful, professional fonts to your website. By inserting a single `<link>` element into your HTML document, you can use custom fonts just like any built-in font."*

---

# Overview

Previously, you learned about **web safe fonts** and **web fonts**.

One of the easiest ways to use web fonts is through an online font hosting service such as **Google Fonts**.

Instead of downloading font files yourself, Google hosts the fonts and allows your browser to download them automatically when your webpage loads.

---

# What is Google Fonts?

**Google Fonts** is a free online library containing thousands of open-source fonts.

Benefits include:

* Free to use
* Easy to implement
* Optimized for the web
* Cross-browser compatible
* Large collection of font families
* Multiple font weights and styles available

---

# How Google Fonts Works

```text
Developer
     │
     ▼
Choose Font
     │
     ▼
Google Fonts
     │
     ▼
Generate <link>
     │
     ▼
Paste into HTML <head>
     │
     ▼
Browser Downloads Font
     │
     ▼
CSS Uses Font
```

---

# Step 1 — Choose a Font

Visit **Google Fonts** and browse the available font families.

Each font may include multiple styles such as:

```text
Roboto

100  Thin
200  Extra Light
300  Light
400  Regular
500  Medium
700  Bold
900  Black

Italic Variations
```

Not every font supports every weight or style.

---

# Step 2 — Select Font Styles

After choosing a font, select the styles you plan to use.

Example:

```text
Roboto

☑ Regular (400)

☑ Bold (700)

☑ Italic (400 Italic)
```

Selecting only the styles you need improves website performance because fewer font files must be downloaded.

---

# Step 3 — Copy the Generated `<link>`

Google Fonts automatically generates an HTML `<link>` element.

Example:

```html
<head>
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
        rel="stylesheet">
</head>
```

### What does this do?

When the webpage loads:

1. The browser reads the `<link>` element.
2. It requests the font from Google's servers.
3. The font is downloaded.
4. CSS can now use the font.

---

# Where Does the `<link>` Go?

The generated `<link>` element belongs inside the HTML **`<head>`** element.

Example:

```html
<!DOCTYPE html>
<html>

<head>

    <meta charset="UTF-8">

    <title>My Website</title>

    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
        rel="stylesheet">

</head>

<body>

    ...

</body>

</html>
```

The browser loads the font **before** rendering the webpage.

---

# Step 4 — Use the Font in CSS

Once the font has been loaded, use it with the **`font-family`** property.

Example:

```css
p {
    font-family: 'Roboto', sans-serif;
}
```

Every `<p>` element now displays using **Roboto**.

---

# Always Include Fallback Fonts

Even though Google Fonts are reliable, it's still best practice to provide fallback fonts.

Example:

```css
body {
    font-family: 'Roboto', Arial, sans-serif;
}
```

Browser search order:

```text
Roboto
    │
    ▼
Arial
    │
    ▼
Any Sans-Serif Font
```

If Roboto cannot be downloaded, the browser automatically uses the next available font.

---

# Complete Example

## HTML

```html
<!DOCTYPE html>

<html>

<head>

    <title>Typography Demo</title>

    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet">

</head>

<body>

    <h1>Hello World</h1>

    <p>This text uses Roboto.</p>

</body>

</html>
```

---

## CSS

```css
body {
    font-family: 'Roboto', Arial, sans-serif;
}

h1 {
    font-weight: 700;
}

p {
    font-weight: 400;
}
```

---

# Browser Loading Process

```text
HTML Document
      │
      ▼
<head>
      │
      ▼
<link>
      │
      ▼
Google Fonts Server
      │
      ▼
Font Downloaded
      │
      ▼
CSS Applies Font
      │
      ▼
Rendered Text
```

---

# Why Use `<link>`?

Using the HTML `<link>` element offers several advantages:

✅ Simple to implement

✅ No font files to manage

✅ Automatically optimized

✅ Fast content delivery through Google's CDN

✅ Easy to update or replace fonts

---

# Performance Tip

Only request the font weights and styles you actually use.

Good:

```text
Roboto

400
700
```

Not ideal:

```text
100
200
300
400
500
600
700
800
900
```

Loading unnecessary weights increases download size and slows page rendering.

---

# Common Mistakes

## ❌ Forgetting the `<link>`

```css
body {
    font-family: 'Roboto';
}
```

Without the Google Fonts `<link>`, the browser cannot download Roboto and immediately falls back to another font.

---

## ❌ Placing the `<link>` in the `<body>`

Incorrect:

```html
<body>

<link ...>

</body>
```

Correct:

```html
<head>

<link ...>

</head>
```

The `<head>` is where browsers expect external resources like stylesheets and fonts.

---

## ❌ Omitting Fallback Fonts

Incorrect:

```css
font-family: 'Roboto';
```

Better:

```css
font-family: 'Roboto', Arial, sans-serif;
```

Fallback fonts ensure readable text if the web font cannot be loaded.

---

# Best Practices

✅ Place the generated `<link>` inside the HTML `<head>`.

✅ Always include fallback fonts.

✅ Load only the weights and styles your project uses.

✅ Use descriptive, readable font stacks.

✅ Test your website with and without the custom font to verify fallback behavior.

---

# Quick Reference

| Step | Action                             |
| ---- | ---------------------------------- |
| 1    | Visit Google Fonts                 |
| 2    | Select a font family               |
| 3    | Choose required weights/styles     |
| 4    | Copy the generated `<link>`        |
| 5    | Paste it inside `<head>`           |
| 6    | Apply the font using `font-family` |
| 7    | Include fallback fonts             |

---

# Visual Summary

```text
Google Fonts Workflow

Choose Font
      │
      ▼
Select Weights
      │
      ▼
Copy <link>
      │
      ▼
Paste into <head>
      │
      ▼
Browser Downloads Font
      │
      ▼
Use font-family
      │
      ▼
Professional Typography
```

---

# Key Takeaways

* **Google Fonts** provides an easy way to use custom fonts on your website.
* After selecting a font, Google generates a **`<link>`** element that loads the font from its servers.
* The generated `<link>` must be placed inside the HTML **`<head>`** element.
* Once loaded, the font can be applied using the **`font-family`** property.
* Always provide fallback fonts such as `Arial` or `sans-serif`.
* Loading only the font weights and styles your site requires improves performance and reduces page load times.

---

> **Remember:** The `<link>` element **loads** the font, while the `font-family` property **uses** the font. Both are required for custom web fonts to appear correctly on your webpage.

