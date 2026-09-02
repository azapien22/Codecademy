# CSS Typography: Web Fonts

> *"Web fonts allow developers to use virtually any typeface on a website, removing the limitations of traditional web safe fonts. By loading fonts from external services or local files, you can create unique, modern, and professional-looking web pages."*

---

# What are Web Fonts?

**Web fonts** are fonts that are downloaded by the browser when a webpage loads.

Unlike **web safe fonts**, which depend on fonts already installed on the user's computer, web fonts are delivered with your website, ensuring a consistent appearance across devices and browsers.

---

# Why Use Web Fonts?

Using web fonts gives designers and developers much greater creative freedom.

### Benefits

* Create a unique visual identity.
* Maintain consistent typography across devices.
* Access thousands of modern fonts.
* Improve branding and design flexibility.
* Go beyond the limited selection of web safe fonts.

---

# Web Safe Fonts vs Web Fonts

| Feature                      | Web Safe Fonts | Web Fonts             |
| ---------------------------- | -------------- | --------------------- |
| Installed on user's computer | ✅ Yes          | ❌ No                  |
| Downloaded by browser        | ❌ No           | ✅ Yes                 |
| Limited selection            | ✅ Yes          | ❌ Thousands available |
| Consistent appearance        | Mostly         | Yes                   |
| Custom branding              | Limited        | Excellent             |

---

# Ways to Use Web Fonts

There are two common methods for adding web fonts to a website:

## 1. Font Hosting Services

Popular font services host fonts online.

Examples include:

* Google Fonts
* Adobe Fonts

These services provide a `<link>` element that you place inside your HTML document.

```
HTML
      │
      ▼
<link>
      │
      ▼
Font Service
      │
      ▼
Browser Downloads Font
```

This is the easiest and most common method.

---

## 2. Self-Hosted Fonts

Instead of relying on an external service, you can download font files and include them with your website.

Typical font formats include:

* `.woff`
* `.woff2`
* `.ttf`
* `.otf`

The font files become part of your project's directory.

Example structure:

```text
project/
│
├── index.html
├── style.css
└── fonts/
    ├── MyFont.woff2
    └── MyFont.woff
```

---

# The `@font-face` Rule

When using self-hosted fonts, CSS uses the **`@font-face`** at-rule to define a custom font.

### Syntax

```css
@font-face {
    font-family: 'CustomFont';
    src: url('fonts/CustomFont.woff2') format('woff2');
}
```

Once defined, the font can be used like any other font family.

```css
body {
    font-family: 'CustomFont', sans-serif;
}
```

---

# Loading Process

```text
Website
    │
    ▼
Browser Requests Font
    │
    ├── Google Fonts
    ├── Adobe Fonts
    └── Local Font Files
    │
    ▼
Font Downloaded
    │
    ▼
Text Rendered
```

---

# Google Fonts

Google Fonts is one of the most popular free font libraries.

Advantages include:

* Free to use
* Large font collection
* Easy to implement
* Optimized for the web
* Reliable performance

Google Fonts provides an HTML `<link>` that loads the selected font automatically.

---

# Adobe Fonts

Adobe Fonts offers another large collection of professional typefaces.

Advantages include:

* High-quality commercial fonts
* Excellent integration with Adobe Creative Cloud
* Professional typography options

---

# Self-Hosting Fonts

Some developers prefer hosting fonts themselves.

Advantages include:

* Full control over font files
* No dependency on third-party services
* Better privacy
* Can improve performance in certain situations

---

# Best Practices

✅ Always provide fallback fonts.

Example:

```css
body {
    font-family: 'Roboto', Arial, sans-serif;
}
```

If the web font fails to load, the browser automatically uses the fallback fonts.

---

✅ Use only the font weights and styles your website needs.

Loading unnecessary font files increases page load times.

---

✅ Prefer the modern **WOFF2** format whenever possible.

It provides excellent compression and broad browser support.

---

✅ Limit the number of different font families on a page.

Most professional websites use only **2–3 fonts**.

---

# Common Mistakes

## ❌ Forgetting Fallback Fonts

```css
font-family: 'Roboto';
```

Better:

```css
font-family: 'Roboto', Arial, sans-serif;
```

---

## ❌ Loading Too Many Fonts

Loading many font families and multiple weights can slow down your website.

Instead, load only what you need.

Example:

```
Regular (400)

Bold (700)
```

Instead of:

```
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

unless every weight is actually used.

---

# Typical Font Workflow

```text
Choose Font
      │
      ▼
Google Fonts
Adobe Fonts
OR
Self-Hosted Font
      │
      ▼
Load Font
      │
      ▼
Apply with font-family
      │
      ▼
Fallback Fonts
      │
      ▼
Beautiful Typography
```

---

# Quick Reference

| Concept        | Purpose                             |
| -------------- | ----------------------------------- |
| Web Font       | Font downloaded by the browser      |
| Google Fonts   | Free online font library            |
| Adobe Fonts    | Professional font service           |
| `@font-face`   | Defines self-hosted fonts           |
| `font-family`  | Applies the font                    |
| Fallback Fonts | Used if the custom font cannot load |

---

# Key Takeaways

* **Web fonts** allow developers to use custom typefaces beyond traditional web safe fonts.
* Fonts can be loaded from **online font services** (such as Google Fonts and Adobe Fonts) or **self-hosted** within your project.
* Self-hosted fonts are defined using the **`@font-face`** CSS at-rule.
* Always include **fallback fonts** to ensure text remains readable if a custom font fails to load.
* Loading only the fonts and font weights you actually use helps improve website performance.
* Web fonts make it possible to create distinctive, consistent, and professional typography across all modern browsers.

---

> **Remember:** Typography is a key part of your website's identity. Web fonts give you the freedom to move beyond the limited selection of web safe fonts while maintaining a consistent look across devices. Choose fonts thoughtfully, load them efficiently, and always provide reliable fallback options.

