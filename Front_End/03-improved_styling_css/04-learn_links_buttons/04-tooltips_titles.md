# Learn Links and Buttons: Tooltips and Titles

> **Tooltips provide additional context about an element, helping users understand what a link, button, or icon does before interacting with it.**

---

# Overview

Sometimes the visible text of a link isn't enough to fully explain its purpose.

For example:

* An image may act as a link.
* An icon may open a settings page.
* A logo may return to the homepage.
* A short link label may not provide enough information.

In these situations, developers can provide **additional descriptive information**.

One built-in HTML method is the **`title` attribute**.

---

# What Is the `title` Attribute?

The **`title`** attribute adds supplementary text to an HTML element.

When supported by the browser, this text is typically displayed as a **tooltip** when a user hovers the mouse pointer over the element.

Basic syntax:

```html
<a href="https://www.codecademy.com"
   title="Codecademy is an online learning platform">
    Codecademy
</a>
```

When the pointer pauses over the link, most browsers display:

```text
┌─────────────────────────────────────────────┐
│ Codecademy is an online learning platform   │
└─────────────────────────────────────────────┘
```

---

# What Is a Tooltip?

A **tooltip** is a small pop-up box that provides additional information about an element.

Tooltips commonly appear:

* After hovering with a mouse
* Near the cursor
* Without changing the page layout

```text
Mouse Pointer
      │
      ▼
Hover over Link
      │
      ▼
Tooltip Appears
      │
      ▼
User Learns More Before Clicking
```

---

# Basic Example

```html
<p>
  <a
    href="https://www.codecademy.com"
    title="Codecademy is an online learning platform"
  >
    Codecademy
  </a>
  is the best place to learn to code!
</p>
```

### Visible Page

```text
Codecademy is the best place to learn to code!
```

### Hovering the Link

```text
Cursor
   ▼
Codecademy

┌─────────────────────────────────────────────┐
│ Codecademy is an online learning platform   │
└─────────────────────────────────────────────┘
```

---

# Anatomy of the Example

```html
<a
  href="https://www.codecademy.com"
  title="Codecademy is an online learning platform"
>
  Codecademy
</a>
```

### `href`

```html
href="https://www.codecademy.com"
```

Specifies the destination.

---

### `title`

```html
title="Codecademy is an online learning platform"
```

Provides additional descriptive information.

---

### Anchor Text

```html
Codecademy
```

The visible clickable text shown on the page.

---

# When Should You Use `title`?

The `title` attribute is most useful when the visible content doesn't completely explain the interaction.

Examples include:

* Icons
* Images
* Logos
* Abbreviations
* Very short labels
* Compact navigation controls

---

# Example: Image Link

Without additional information:

```html
<a href="products.html">
    <img src="shopping-cart.png" alt="Shopping cart">
</a>
```

A user may understand the image, but extra context can still be useful.

Improved:

```html
<a
    href="products.html"
    title="View your shopping cart"
>
    <img src="shopping-cart.png" alt="Shopping cart">
</a>
```

---

# Example: Icon Button

```html
<a
    href="settings.html"
    title="Open account settings"
>
    ⚙️
</a>
```

The gear icon suggests settings, but the tooltip confirms its purpose.

---

# Example: Logo Link

Many websites make their logo clickable.

```html
<a
    href="/"
    title="Return to the homepage"
>
    <img src="logo.png" alt="Company Logo">
</a>
```

The tooltip helps explain the navigation behavior.

---

# Example: Abbreviations

```html
<abbr
    title="Cascading Style Sheets"
>
    CSS
</abbr>
```

Hovering reveals the full phrase.

---

# The `title` Attribute Is Not Limited to Links

Although commonly used with links, the `title` attribute can be added to nearly any HTML element.

Example:

```html
<button
    title="Save your current changes"
>
    Save
</button>
```

Or:

```html
<img
    src="map.png"
    alt="Campus map"
    title="Interactive campus map"
>
```

---

# Common Elements That Use `title`

| Element      | Example Use                |
| ------------ | -------------------------- |
| `<a>`        | Describe the destination   |
| `<button>`   | Explain the action         |
| `<img>`      | Provide additional context |
| `<abbr>`     | Expand an abbreviation     |
| `<iframe>`   | Describe embedded content  |
| Custom icons | Explain icon meaning       |

---

# How Browsers Display Tooltips

Most browsers automatically render a simple tooltip.

```text
HTML
 │
 ▼
title Attribute
 │
 ▼
Browser
 │
 ▼
Tooltip
```

Developers do not need CSS or JavaScript to create this default behavior.

---

# Advantages of `title`

The `title` attribute is:

* Easy to implement
* Built into HTML
* Automatically supported by browsers
* Helpful for brief supplemental information
* Useful for icons and images

Example:

```html
<a
    href="faq.html"
    title="Frequently Asked Questions"
>
    FAQ
</a>
```

---

# Limitations of `title`

Although convenient, the `title` attribute has important drawbacks.

Many users never see tooltips because they:

* Use touch devices
* Navigate with a keyboard
* Use assistive technology
* Do not hover long enough
* Have browser settings that suppress tooltips

Because of these limitations, the `title` attribute should **not** contain essential information that users need to complete a task.

---

# Accessibility Considerations

The built-in browser tooltip is **not considered fully accessible**.

Some accessibility concerns include:

* Touchscreen users cannot hover.
* Keyboard users may not trigger browser tooltips consistently.
* Screen readers may ignore or inconsistently announce `title`.
* Timing and placement of browser tooltips cannot be customized.
* Users cannot control how the tooltip appears.

Modern web applications often build custom tooltips with HTML, CSS, and JavaScript to provide a more accessible experience.

---

# `title` vs `alt`

These attributes serve different purposes.

| Attribute | Purpose                                                             |
| --------- | ------------------------------------------------------------------- |
| `title`   | Additional advisory information shown as a tooltip in many browsers |
| `alt`     | Alternative text describing an image when it cannot be seen         |

Example:

```html
<img
    src="logo.png"
    alt="Codecademy logo"
    title="Visit the Codecademy homepage"
>
```

Here:

* `alt` describes the image.
* `title` provides additional interaction information.

---

# `title` vs Anchor Text

Good anchor text already explains the destination.

Example:

```html
<a href="pricing.html">
    View pricing plans
</a>
```

Adding this title provides little additional value:

```html
title="View pricing plans"
```

Instead, use the title attribute only if it contributes meaningful new information.

Example:

```html
<a
    href="pricing.html"
    title="Compare monthly and annual subscription options"
>
    View pricing plans
</a>
```

Now the tooltip supplements the visible text rather than repeating it.

---

# Good Tooltip Examples

### Navigation

```html
<a
    href="support.html"
    title="Contact our customer support team"
>
    Support
</a>
```

---

### Download

```html
<a
    href="report.pdf"
    title="Download the annual report (PDF)"
>
    Annual Report
</a>
```

---

### External Website

```html
<a
    href="https://developer.mozilla.org/"
    title="Visit MDN Web Docs"
>
    MDN
</a>
```

---

### Settings

```html
<button
    title="Open application settings"
>
    ⚙️
</button>
```

---

# Poor Tooltip Examples

### Repeating Visible Text

```html
<a
    href="about.html"
    title="About"
>
    About
</a>
```

The tooltip adds no useful information.

---

### Essential Instructions

```html
<button
    title="Click this before submitting or your work will be lost."
>
    Submit
</button>
```

Important instructions should always remain visible on the page rather than being hidden inside a tooltip.

---

### Long Paragraphs

```html
title="This tooltip contains multiple sentences explaining every detail..."
```

Tooltips should remain short and focused.

---

# Best Practices

* Use `title` only for supplemental information.
* Keep tooltip text concise.
* Do not duplicate the visible label.
* Do not hide essential instructions inside tooltips.
* Use descriptive anchor text first.
* Use `alt` text appropriately for images.
* Remember that many users cannot access browser tooltips.
* Consider more accessible custom tooltips for production applications.

---

# Common Mistakes

## Using `title` Instead of Good Link Text

Poor:

```html
<a
    href="guide.html"
    title="Complete CSS Guide"
>
    Click here
</a>
```

Better:

```html
<a href="guide.html">
    Complete CSS Guide
</a>
```

Good anchor text reduces the need for a tooltip.

---

## Hiding Important Information

If users must see certain instructions, place them directly on the page.

Avoid relying on hover behavior.

---

## Assuming Everyone Can Hover

Many users interact using:

* Touchscreens
* Keyboard navigation
* Screen readers

Those users may never see browser tooltips.

---

# Tooltip Workflow

```text
Create Interactive Element
          │
          ▼
Write Descriptive Visible Text
          │
          ▼
Need Extra Context?
      │          │
     No         Yes
      │          ▼
      │    Add title Attribute
      │          ▼
      └──► Browser Shows Tooltip
```

---

# Quick Reference

| Concept       | Purpose                                       |
| ------------- | --------------------------------------------- |
| `title`       | Adds supplementary advisory text              |
| Tooltip       | Small pop-up shown on hover in many browsers  |
| Anchor text   | Visible clickable text inside a link          |
| `alt`         | Alternative description for images            |
| Hover         | Pointer positioned over an element            |
| Accessibility | Ensures information is available to all users |

---

# Key Takeaways

* The **`title`** attribute adds optional descriptive information to HTML elements.
* Most browsers display the `title` text as a tooltip when the user hovers over the element.
* Tooltips are especially helpful for links that use images, icons, logos, or short labels.
* The `title` attribute can be applied to many HTML elements, not just links.
* Descriptive anchor text should remain the primary way of communicating a link's purpose.
* The `title` attribute should supplement—not replace—clear visible text.
* Browser-generated tooltips have accessibility limitations and should not contain essential instructions or critical information.
* Modern applications often use custom HTML, CSS, and JavaScript tooltips to create more accessible experiences.

---

> **Final Reminder:** A tooltip should enhance understanding, not provide information that users cannot afford to miss. Always make the primary purpose of a link or button clear through visible text, and use the `title` attribute only as helpful supplementary context.

