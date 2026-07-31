# Learn Links and Buttons: Link Styling

> Links should look different from surrounding text, clearly describe their destination, and remain easy to recognize for all users.

---

# Overview

The most important goal of link styling is to make links visually distinct from ordinary text.

Users should be able to scan a page and immediately recognize which text is clickable.

Browsers traditionally accomplish this with two properties:

```css
color
text-decoration
```

Together, these properties create the familiar appearance of blue, underlined links.

---

# Why Links Need Distinct Styling

A link is an interactive element.

If it looks identical to surrounding text, users may not realize that it can be clicked.

Compare the following examples.

## Poor Differentiation

```css
a {
    color: inherit;
    text-decoration: none;
}
```

This makes the link look like normal text.

## Clear Differentiation

```css
a {
    color: blue;
    text-decoration: underline;
}
```

This provides two familiar signifiers:

* A unique color
* An underline

```text
Unique Color
     +
Underline
     =
Recognizable Link
```

---

# Core Link Styling Properties

Several CSS properties can help distinguish links from surrounding content.

| Property           | Purpose                       |
| ------------------ | ----------------------------- |
| `color`            | Changes the link text color   |
| `text-decoration`  | Adds or removes an underline  |
| `background-color` | Adds a contrasting background |
| `font-weight`      | Makes the link appear heavier |
| `border`           | Adds a visible boundary       |

---

# Using `color`

The `color` property controls the text color.

```css
a {
    color: #005ea8;
}
```

A link color should:

* Contrast with the page background
* Contrast with surrounding text
* Remain consistent throughout the site
* Be easy to recognize

---

# Using `text-decoration`

The `text-decoration` property commonly adds an underline to links.

```css
a {
    text-decoration: underline;
}
```

Underlines are especially useful for inline links because they do not depend on color alone.

```html
<p>
    Learn more about
    <a href="accessibility.html">web accessibility</a>.
</p>
```

---

# Improving Underline Appearance

Modern CSS can refine the appearance of link underlines.

```css
a {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.15em;
}
```

These properties control:

* Underline thickness
* Distance between the text and underline

---

# Using `background-color`

A background color can make a link more prominent.

```css
a {
    background-color: lightyellow;
}
```

This may be useful for:

* Call-to-action links
* Navigation items
* Important resources
* Promotional links

Example:

```css
.cta-link {
    display: inline-block;
    padding: 0.5rem 0.75rem;
    background-color: lightyellow;
}
```

---

# Using `font-weight`

A link can be emphasized with a heavier font weight.

```css
a {
    font-weight: 700;
}
```

This can help important links stand out, but it should not replace all other signifiers.

Better:

```css
a {
    color: darkblue;
    font-weight: 700;
    text-decoration: underline;
}
```

---

# Using `border`

A border can make a link resemble a button or labeled control.

```css
a {
    border: 1px solid currentColor;
}
```

Example:

```css
.button-link {
    display: inline-block;
    padding: 0.75rem 1rem;
    border: 1px solid currentColor;
    text-decoration: none;
}
```

Use button-like styling primarily for prominent navigation or calls to action.

---

# Do Not Reuse Link Styles for Regular Text

Link styles should remain unique to interactive content.

For example, if links are underlined, ordinary text should generally not be underlined.

Poor example:

```css
a,
.important-text {
    color: blue;
    text-decoration: underline;
}
```

This creates confusion because users may assume that `.important-text` is clickable.

Better:

```css
a {
    color: blue;
    text-decoration: underline;
}

.important-text {
    font-weight: bold;
}
```

---

# Visual Consistency

Users learn the meaning of styles through repetition.

If blue, underlined text represents links, that style should consistently represent links throughout the site.

```text
Link Style
     │
     ▼
Repeated Consistently
     │
     ▼
User Learns the Pattern
     │
     ▼
Faster Navigation
```

---

# Link Color Contrast

Link colors should contrast with:

1. The page background
2. The surrounding body text

Example:

```css
body {
    color: #222;
    background-color: white;
}

a {
    color: #005ea8;
}
```

The link should be visually distinct without becoming difficult to read.

---

# Avoid Color-Only Differentiation

Color alone may not be sufficient for every user.

Poor example:

```css
a {
    color: green;
    text-decoration: none;
}
```

Better:

```css
a {
    color: green;
    text-decoration: underline;
}
```

The improved version uses two signifiers:

* Color
* Underlining

---

# What Is Anchor Text?

**Anchor text** is the visible, clickable text inside an anchor element.

```html
<a href="guide.html">Read the accessibility guide</a>
```

In this example:

```text
Read the accessibility guide
```

is the anchor text.

---

# Descriptive Anchor Text

Anchor text should describe the linked destination or action.

Good anchor text helps users understand what will happen before clicking.

## Good Example

```html
<a href="typography-guide.html">
    Read the CSS typography guide
</a>
```

The destination is clear.

## Weak Example

```html
<a href="typography-guide.html">
    Click here
</a>
```

The phrase `Click here` does not describe the linked resource.

---

# Why Descriptive Anchor Text Matters

Descriptive anchor text improves:

* Usability
* Accessibility
* Search engine optimization
* Page scanning
* Navigation clarity

Users should not need surrounding text to understand what a link does.

---

# Screen Reader Accessibility

Screen-reader users may navigate through a page by requesting a list of links.

Consider this list:

```text
Click here
Click here
Read more
Learn more
```

Without surrounding context, these links are difficult to understand.

Now compare:

```text
Read the CSS typography guide
View current job openings
Download the annual report
Learn about accessible link design
```

Each link makes sense independently.

---

# Weak Anchor Text Example

```html
<p>
    Text for links should be
    <a href="https://example.com">descriptive</a>.
</p>
```

Although the word `descriptive` relates to the sentence, it does not clearly identify the destination.

A screen-reader user hearing only the link text may not know where it leads.

---

# Improved Anchor Text Example

```html
<p>
    Read the
    <a href="https://example.com/anchor-text">
        guide to writing descriptive anchor text
    </a>.
</p>
```

The destination is now understandable even without the surrounding sentence.

---

# Anchor Text Comparison

| Weak Anchor Text | Better Anchor Text                  |
| ---------------- | ----------------------------------- |
| Click here       | View the course schedule            |
| Read more        | Read the full accessibility article |
| Learn more       | Learn how CSS specificity works     |
| Download         | Download the project files          |
| Details          | View pricing details                |

---

# Link Purpose Should Be Predictable

Before activating a link, users should know:

* Where it leads
* What resource it opens
* Whether it downloads a file
* Whether it opens another website
* Whether it opens in a new tab

Example:

```html
<a href="report.pdf">
    Download the 2026 annual report PDF
</a>
```

This anchor text clearly identifies both the content and file type.

---

# External Links

When appropriate, external links can be identified in the anchor text.

```html
<a
    href="https://developer.mozilla.org/"
    target="_blank"
    rel="noopener noreferrer"
>
    Visit MDN Web Docs
</a>
```

The link text should still describe the destination.

---

# Opening Links in a New Tab

The following attributes are commonly used together:

```html
target="_blank"
rel="noopener noreferrer"
```

Example:

```html
<a
    href="https://example.com"
    target="_blank"
    rel="noopener noreferrer"
>
    Visit the external documentation
</a>
```

`target="_blank"` opens the destination in a new browser tab or window.

`rel="noopener noreferrer"` helps prevent the opened page from accessing the original page through the browser context and can limit referrer information.

---

# Complete Link Styling Example

```css
a {
    color: #005ea8;
    font-weight: 600;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.15em;
}

a:hover {
    text-decoration-thickness: 2px;
}

a:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 3px;
}

a:active {
    color: #b00020;
}
```

---

# Example HTML

```html
<p>
    Read the
    <a href="link-accessibility.html">
        complete guide to accessible link design
    </a>
    before styling navigation elements.
</p>
```

---

# Link Styling Workflow

```text
Identify the Link
      │
      ▼
Write Descriptive Anchor Text
      │
      ▼
Choose a Distinct Color
      │
      ▼
Add a Second Signifier
      │
      ▼
Style Interaction States
      │
      ▼
Test Contrast and Accessibility
```

---

# Best Practices

* Make links visually different from surrounding text.
* Use more than color alone whenever possible.
* Preserve underlines for inline links.
* Keep link styling consistent across the site.
* Avoid using link styles on non-interactive text.
* Use descriptive anchor text.
* Make links understandable without surrounding context.
* Ensure sufficient contrast.
* Provide visible hover and focus states.
* Identify downloads or external destinations when useful.

---

# Common Mistakes

## Using “Click Here”

```html
<a href="courses.html">Click here</a>
```

This does not describe the destination.

Better:

```html
<a href="courses.html">Browse available courses</a>
```

---

## Making Links Indistinguishable

```css
a {
    color: inherit;
    text-decoration: none;
}
```

This removes the clearest signs of clickability.

---

## Styling Ordinary Text Like a Link

```css
.note {
    color: blue;
    text-decoration: underline;
}
```

Users may incorrectly assume the note is clickable.

---

## Relying Only on Color

```css
a {
    color: red;
}
```

Use an additional signifier:

```css
a {
    color: red;
    text-decoration: underline;
}
```

---

## Removing Focus Indicators

```css
a:focus {
    outline: none;
}
```

This makes keyboard navigation harder.

Better:

```css
a:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 3px;
}
```

---

# Quick Reference

| Concept                 | Purpose                                  |
| ----------------------- | ---------------------------------------- |
| `color`                 | Changes link text color                  |
| `text-decoration`       | Adds or removes an underline             |
| `background-color`      | Highlights the link background           |
| `font-weight`           | Adds visual emphasis                     |
| `border`                | Creates a visible boundary               |
| Anchor text             | The clickable text inside a link         |
| Descriptive anchor text | Explains the link destination or action  |
| Contrast                | Makes links distinguishable and readable |

---

# Key Takeaways

* Links must look different from surrounding text.
* Color and underlining are familiar and effective link signifiers.
* Background color, font weight, and borders can provide additional distinction.
* Link styles should not be reused for non-interactive content.
* Link colors should contrast with both the background and surrounding text.
* Anchor text should clearly describe the linked resource.
* Descriptive links improve usability, accessibility, and SEO.
* Screen-reader users benefit from links that make sense independently.
* Avoid vague phrases such as `Click here` and `Read more`.
* Clear styling and descriptive text work together to create effective links.

---

> **Final Reminder:** A well-designed link should answer two questions immediately: “Can I click this?” and “Where will it take me?”

