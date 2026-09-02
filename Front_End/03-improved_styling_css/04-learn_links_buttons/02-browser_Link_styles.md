# Learn Links and Buttons: Browser Link Styles

> Browsers provide default link styles to help users recognize which text is clickable and understand a link’s current state.

---

# Overview

Web browsers include built-in styles for common HTML elements.

These default styles help raw HTML remain readable and usable even when a developer has not written any custom CSS.

Examples of elements that receive browser styling include:

* Headings
* Paragraphs
* Tables
* Lists
* Forms
* Links
* Buttons

The browser’s collection of default styles is known as a **user agent stylesheet**.

---

# What Is a User Agent?

A **user agent** is software that accesses and displays web content.

In most cases, the user agent is a web browser such as:

* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Safari

Each browser includes its own default CSS rules for displaying HTML elements.

---

# What Is a User Agent Stylesheet?

A **user agent stylesheet** is the browser’s built-in collection of CSS rules.

These styles are automatically applied before any custom CSS written by the developer.

For example, browsers typically display an `<h1>` element as:

* Large
* Bold
* Separated from nearby content by margins

```html
<h1>Page Title</h1>
```

Even without custom CSS, the heading still appears visually distinct.

---

# Browser Styling Order

A simplified CSS styling order looks like this:

```text
Browser Defaults
      │
      ▼
User Agent Stylesheet
      │
      ▼
Developer Stylesheet
      │
      ▼
Final Rendered Page
```

Custom styles usually override browser defaults when they target the same property.

---

# Why Browser Defaults Exist

The HTML specification defines expected rendering behavior for many elements.

Browser defaults help ensure that a plain HTML document is:

* Readable
* Structured
* Navigable
* Reasonably accessible
* Understandable without custom styling

For example, a raw HTML file may still clearly show:

```text
Large heading

Normal paragraph text

• Bulleted list item

Underlined blue link
```

This provides a usable baseline.

---

# Default Link Signifiers

Traditionally, browsers distinguish links from ordinary text using:

* Blue text
* Underlining

Example:

```html
<a href="about.html">About Us</a>
```

Typical browser appearance:

```text
About Us
```

The text is normally blue and underlined.

These visual characteristics act as **signifiers** because they communicate that the text is clickable.

---

# Why Links Are Traditionally Blue

Blue links became a widely recognized web convention.

Users learned that blue, underlined text usually represents navigation.

This consistency allows users to recognize links quickly without needing additional instructions.

```text
Blue Text
    +
Underline
    =
Recognizable Link
```

Even though modern websites may use different colors, links should still remain visually distinct from surrounding text.

---

# Default Link States

Links can exist in several different states.

Browsers often style each state differently to provide feedback.

The most common link states are:

| State     | Meaning                                          |
| --------- | ------------------------------------------------ |
| Unvisited | The user has not opened the destination          |
| Visited   | The user previously opened the destination       |
| Hover     | The pointer is positioned over the link          |
| Focus     | The link is selected through keyboard navigation |
| Active    | The link is currently being clicked              |

---

# Unvisited Links

An unvisited link usually appears:

* Blue
* Underlined

```css
a:link {
    color: blue;
    text-decoration: underline;
}
```

The `:link` pseudo-class targets links that have not yet been visited.

---

# Visited Links

A link that the user previously opened is commonly displayed in purple.

```css
a:visited {
    color: purple;
}
```

This gives users a visual record of where they have already navigated.

```text
Blue Link
    │
    ▼
User Visits Destination
    │
    ▼
Purple Link
```

Visited styling can help users avoid reopening the same content repeatedly.

---

# Active Links

An active link is a link that is currently being activated.

This usually occurs during the brief moment when the user presses the mouse button but has not yet released it.

Browsers traditionally display active links in red.

```css
a:active {
    color: red;
}
```

The active state provides immediate visual feedback that the click is being registered.

---

# Clicked vs Visited

These states are related but different.

## Active

The link is being clicked right now.

```text
Mouse button pressed
        │
        ▼
Link is active
```

## Visited

The destination has already been opened.

```text
Destination opened previously
          │
          ▼
Link is visited
```

---

# Default Browser Link Pattern

A traditional browser stylesheet may behave like this:

```css
a:link {
    color: blue;
    text-decoration: underline;
}

a:visited {
    color: purple;
}

a:active {
    color: red;
}
```

The exact colors may vary slightly between browsers.

---

# Link State Lifecycle

```text
Unvisited Link
      │
      ▼
User Hovers
      │
      ▼
User Presses Link
      │
      ▼
Active State
      │
      ▼
Destination Opens
      │
      ▼
Visited State
```

This sequence helps users understand the status of an interaction.

---

# Why Consistency Matters

Users develop expectations based on common interface patterns.

When a link behaves like other links they have encountered, they can interact with it confidently.

Consistent styling improves:

* Learnability
* Navigation
* Usability
* Accessibility
* User confidence

A familiar interface reduces the amount of thinking required to use a website.

---

# Custom Link Styles

Designers frequently override browser defaults to match a website’s visual identity.

Example:

```css
a {
    color: darkgreen;
    text-decoration: none;
}
```

However, removing traditional styles can make links harder to recognize.

A better custom design should preserve clear signifiers.

```css
a {
    color: darkgreen;
    text-decoration: underline;
}

a:hover {
    color: green;
}

a:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 3px;
}
```

---

# Preserving Clickability

A custom link does not have to be blue, but it should remain visually distinct.

Useful signifiers include:

* Underlining
* A contrasting color
* A hover effect
* A focus outline
* A background change
* An icon
* Consistent placement

---

# Poor Link Styling

```css
a {
    color: inherit;
    text-decoration: none;
}
```

This may make the link look identical to normal text.

Users may fail to recognize that it is clickable.

---

# Improved Link Styling

```css
a {
    color: #005ea8;
    text-decoration: underline;
    text-underline-offset: 0.15em;
}

a:hover {
    text-decoration-thickness: 2px;
}

a:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 3px;
}
```

This custom design remains visually clear while improving interaction feedback.

---

# Link Pseudo-Classes

CSS pseudo-classes allow developers to style links according to their state.

| Pseudo-Class | Purpose                          |
| ------------ | -------------------------------- |
| `:link`      | Targets unvisited links          |
| `:visited`   | Targets previously visited links |
| `:hover`     | Targets links under the pointer  |
| `:focus`     | Targets keyboard-focused links   |
| `:active`    | Targets links during activation  |

---

# Example

```css
a:link {
    color: blue;
}

a:visited {
    color: purple;
}

a:hover {
    color: darkblue;
}

a:focus-visible {
    outline: 2px solid currentColor;
}

a:active {
    color: red;
}
```

---

# Recommended Link-State Order

A common ordering pattern is:

```text
L V H A
```

This stands for:

```text
:link
:visited
:hover
:active
```

A fuller accessible version may include focus:

```css
a:link {
    color: blue;
}

a:visited {
    color: purple;
}

a:hover {
    color: darkblue;
}

a:focus-visible {
    outline: 2px solid currentColor;
}

a:active {
    color: red;
}
```

Ordering matters because later rules can override earlier rules when they have equal specificity.

---

# Browser Defaults vs Custom Styles

| Browser Defaults          | Custom Styles                         |
| ------------------------- | ------------------------------------- |
| Automatically provided    | Written by the developer              |
| Familiar to users         | Match the website’s visual design     |
| Provide a usable baseline | Can improve branding and polish       |
| Usually accessible        | Must be tested carefully              |
| May look generic          | Can become unclear if over-customized |

---

# Accessibility Considerations

Custom link styles should remain usable for everyone.

Important practices include:

* Do not rely only on color
* Preserve visible focus states
* Maintain sufficient contrast
* Make inline links distinguishable
* Avoid removing underlines without a replacement signifier
* Ensure keyboard users can identify the selected link

---

# Do Not Remove Focus Without Replacement

Poor example:

```css
a:focus {
    outline: none;
}
```

This makes keyboard navigation difficult.

Better:

```css
a:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 3px;
}
```

---

# Inline Links vs Navigation Links

Inline links appear inside paragraphs.

```html
<p>
    Read the
    <a href="guide.html">complete guide</a>
    for more information.
</p>
```

Underlining is especially helpful because the link is surrounded by ordinary text.

Navigation links may use other signifiers such as:

* Spacing
* Menu placement
* Hover backgrounds
* Active-page indicators

```css
nav a {
    display: inline-block;
    padding: 0.5rem 0.75rem;
    text-decoration: none;
}

nav a:hover {
    text-decoration: underline;
}
```

---

# Quick Reference

| Concept               | Meaning                            |
| --------------------- | ---------------------------------- |
| User agent            | Software that displays web content |
| User agent stylesheet | Browser-provided default CSS       |
| Link signifier        | Visual clue that text is clickable |
| `:link`               | Unvisited link state               |
| `:visited`            | Previously visited link state      |
| `:hover`              | Pointer-over-link state            |
| `:focus`              | Keyboard-selected link state       |
| `:active`             | Link currently being activated     |

---

# Visual Summary

```text
Default Link
────────────
Blue + Underlined

Visited Link
────────────
Purple

Active Link
───────────
Red

Purpose
───────
Communicate clickability and interaction state
```

---

# Best Practices

* Preserve clear visual differences between links and regular text.
* Use familiar interaction patterns.
* Provide hover, focus, and active feedback.
* Keep visited styling when it helps navigation.
* Avoid removing underlines from inline links without another strong signifier.
* Do not remove focus outlines unless you provide a visible replacement.
* Test custom styles with mouse and keyboard navigation.
* Maintain adequate color contrast.
* Keep link behavior consistent throughout the site.

---

# Common Mistakes

## Making Links Look Like Plain Text

```css
a {
    color: inherit;
    text-decoration: none;
}
```

This removes the strongest default link signifiers.

---

## Styling Only Hover

```css
a:hover {
    color: red;
}
```

Touchscreen and keyboard users may never receive this feedback.

Include focus styling as well.

```css
a:hover,
a:focus-visible {
    color: red;
}
```

---

## Removing Visited Feedback Unnecessarily

Making visited and unvisited links identical can make it harder for users to remember which pages they have opened.

Visited styling is especially useful in:

* Search results
* Documentation
* Article lists
* Resource directories

---

# Key Takeaways

* Browsers include built-in CSS known as a **user agent stylesheet**.
* Default browser styles make plain HTML readable and usable.
* Links are traditionally shown as blue and underlined.
* These visual conventions act as signifiers of clickability.
* Unvisited links are commonly blue.
* Active links are traditionally red.
* Visited links are commonly purple.
* Developers can override browser styles, but links should remain recognizable.
* Consistent link patterns improve usability and user confidence.
* Hover, focus, active, and visited states provide useful feedback.
* Accessible custom styling should not depend on color alone.

---

> **Final Reminder:** Browser link styles may look simple, but they are based on decades of user expectations. When customizing links, preserve the clarity and feedback that make those default patterns effective.

