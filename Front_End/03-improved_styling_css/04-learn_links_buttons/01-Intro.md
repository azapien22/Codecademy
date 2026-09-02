# Learn Links and Buttons: Introduction

> Interactive elements should clearly communicate what users can click, select, open, or navigate.

---

# Overview

When users visit a website, they should be able to quickly identify which elements are interactive.

They should understand:

* What can be clicked
* Where links will take them
* Which elements behave like buttons
* How the interface will respond to their actions

A well-designed interface communicates these possibilities visually.

A poorly designed interface forces users to guess.

---

# The Problem with Unclear Interfaces

Imagine arriving at a webpage and seeing several pieces of text, images, and controls.

Before clicking anything, you may ask:

```text
Can I click this heading?

Is this image a link?

Does this text open another page?

Is this element a button?

Will anything happen when I hover over it?
```

When a webpage provides few visual clues, users may struggle to understand how to interact with it.

Even experienced users can become confused when clickable elements do not look interactive.

---

# Clickability Should Be Obvious

Interactive elements should not require experimentation.

Users should not have to click random parts of a webpage to discover what works.

A clear interface helps users predict behavior before they interact.

```text
Visible Clue
     │
     ▼
User Recognizes Interaction
     │
     ▼
User Clicks Confidently
     │
     ▼
Expected Action Occurs
```

This creates a smoother and more intuitive user experience.

---

# What Are Signifiers?

A **signifier** is a visual or sensory clue that communicates how an object can be used.

In web design, signifiers help users recognize interactive elements.

Common signifiers include:

* Underlined link text
* Distinct link colors
* Button shapes
* Borders
* Background colors
* Hover effects
* Cursor changes
* Icons
* Shadows
* Labels

---

# Real-World Signifier Example

Consider the handle on a drawer.

Its shape suggests that a person should:

1. Place a hand around it
2. Pull it
3. Open the drawer

```text
Drawer Handle
      │
      ▼
Suggests Grabbing
      │
      ▼
Suggests Pulling
      │
      ▼
Drawer Opens
```

The handle acts as a signifier because it provides a clue about the object's intended interaction.

---

# Signifiers in Web Interfaces

Web interfaces use visual styling to communicate clickability.

For example, a traditional hyperlink often appears:

* Blue
* Underlined
* Different from surrounding text

```html
<a href="about.html">About Us</a>
```

The browser's default styling helps users understand that the text is clickable.

---

# Button Signifiers

Buttons often use several visual clues at once.

```css
button {
    padding: 0.75rem 1.25rem;
    border: 1px solid black;
    border-radius: 0.25rem;
    background-color: white;
    cursor: pointer;
}
```

These styles communicate that the element can be pressed or clicked.

Common button signifiers include:

```text
Button Shape
     +
Border
     +
Background
     +
Label
     +
Pointer Cursor
     =
Recognizable Interactive Control
```

---

# What Are Affordances?

An **affordance** describes what an object allows a user to do.

For example:

* A button affords clicking
* A text field affords typing
* A scrollbar affords scrolling
* A link affords navigation
* A checkbox affords selection

A **signifier** communicates or reveals that affordance.

---

# Affordance vs Signifier

| Concept    | Meaning                                        |
| ---------- | ---------------------------------------------- |
| Affordance | The action an object makes possible            |
| Signifier  | The clue that communicates the possible action |

### Example

A button:

```text
Affordance
──────────
The button can be clicked.

Signifier
─────────
Its shape, border, label, and hover effect show that it is clickable.
```

---

# Why Signifiers Matter

Signifiers reduce uncertainty.

Without them, users may:

* Miss important links
* Ignore clickable elements
* Click non-interactive content
* Become frustrated
* Leave the website
* Make navigation mistakes

With effective signifiers, users can interact confidently and efficiently.

---

# Poor Interface Design

A poorly designed interactive element may look like ordinary text.

```html
<div class="checkout">Complete Purchase</div>
```

```css
.checkout {
    color: black;
}
```

The user receives little indication that the element is clickable.

---

# Improved Interface Design

```css
.checkout {
    display: inline-block;
    padding: 0.75rem 1.25rem;
    border: 1px solid black;
    border-radius: 0.25rem;
    background-color: white;
    cursor: pointer;
}

.checkout:hover {
    background-color: lightgray;
}
```

The element now includes several signifiers:

* Padding
* A visible border
* A button-like shape
* A pointer cursor
* A hover response

---

# Common Interactive States

Interactive elements should often communicate more than their default appearance.

Important states include:

| State    | Description                                          |
| -------- | ---------------------------------------------------- |
| Default  | Normal appearance before interaction                 |
| Hover    | Appearance when the pointer is over the element      |
| Focus    | Appearance when selected through keyboard navigation |
| Active   | Appearance while being clicked                       |
| Visited  | Appearance of a previously visited link              |
| Disabled | Appearance when interaction is unavailable           |

---

# Example Link States

```css
a {
    color: blue;
    text-decoration: underline;
}

a:hover {
    color: darkblue;
}

a:focus {
    outline: 2px solid currentColor;
}

a:active {
    color: red;
}

a:visited {
    color: purple;
}
```

Each state provides feedback about the link's condition or behavior.

---

# Example Button States

```css
button {
    cursor: pointer;
}

button:hover {
    transform: translateY(-1px);
}

button:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
}

button:active {
    transform: translateY(1px);
}

button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}
```

These visual changes help users understand how the button responds to interaction.

---

# User Feedback

A good interface provides immediate feedback after a user performs an action.

Examples include:

* A button changing color
* A link changing state
* A menu opening
* A form showing an error
* A loading indicator appearing
* A confirmation message displaying

```text
User Action
     │
     ▼
Interface Response
     │
     ▼
User Understands Result
```

Without feedback, users may wonder whether their action worked.

---

# Accessibility and Interactivity

Clear signifiers are especially important for accessibility.

Interactive elements should support:

* Mouse users
* Keyboard users
* Touchscreen users
* Screen-reader users
* Users with low vision
* Users with cognitive disabilities

A design should not depend on only one clue, such as color.

---

# Avoid Color-Only Signifiers

Poor example:

```css
a {
    color: green;
    text-decoration: none;
}
```

If color is the only clue, some users may not recognize the text as a link.

Improved example:

```css
a {
    color: green;
    text-decoration: underline;
}
```

This provides both:

* Color
* Underlining

Using multiple visual clues makes interaction easier to recognize.

---

# Use Semantic HTML

Whenever possible, use HTML elements that already represent the intended interaction.

Use an anchor for navigation:

```html
<a href="contact.html">Contact</a>
```

Use a button for an action:

```html
<button type="button">Open Menu</button>
```

Avoid replacing semantic elements with generic elements unless necessary.

Less appropriate:

```html
<div onclick="openMenu()">Open Menu</div>
```

Better:

```html
<button type="button">Open Menu</button>
```

Semantic HTML provides built-in behavior and improves accessibility.

---

# Links vs Buttons

Links and buttons serve different purposes.

| Element | Primary Purpose                                |
| ------- | ---------------------------------------------- |
| Link    | Navigate to another page, section, or resource |
| Button  | Perform an action within the current interface |

### Link Example

```html
<a href="portfolio.html">View Portfolio</a>
```

### Button Example

```html
<button type="submit">Submit Form</button>
```

Use the element that matches the intended behavior.

---

# Core Design Principle

Users should be able to answer the following questions immediately:

```text
What can I interact with?

What will happen when I interact?

Did the interaction work?
```

A strong user interface communicates all three.

---

# Lesson Focus

This lesson explores high-level best practices for:

* Showing clickability
* Communicating interaction
* Styling links
* Styling buttons
* Designing hover states
* Designing active states
* Designing focus states
* Providing visual feedback
* Improving accessibility
* Creating predictable interfaces

---

# Interaction Design Workflow

```text
Identify Interactive Element
          │
          ▼
Choose Semantic HTML
          │
          ▼
Add Clear Signifiers
          │
          ▼
Style Interaction States
          │
          ▼
Provide Immediate Feedback
          │
          ▼
Test Mouse and Keyboard Access
          │
          ▼
Create an Intuitive Interface
```

---

# Best Practices

* Make interactive elements visually distinct.
* Use familiar link and button conventions.
* Add clear hover and focus states.
* Use the pointer cursor for clickable controls when appropriate.
* Avoid relying only on color.
* Provide immediate feedback after interactions.
* Use semantic HTML elements.
* Keep interaction patterns consistent.
* Ensure keyboard users can identify focused elements.
* Avoid making non-interactive content look clickable.

---

# Common Mistakes

## Hiding Link Styling

```css
a {
    color: inherit;
    text-decoration: none;
}
```

This may cause links to appear identical to normal text.

---

## Removing Focus Indicators

```css
button:focus {
    outline: none;
}
```

Removing the outline without providing a replacement makes keyboard navigation difficult.

Better:

```css
button:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 3px;
}
```

---

## Making Text Look Clickable When It Is Not

Underlining normal text or giving it a button shape can create false expectations.

Visual design should match actual behavior.

---

## Making Clickable Elements Look Static

A clickable element without any visible signifier may be ignored by users.

Clickable behavior should be reflected in the design.

---

# Quick Reference

| Concept         | Purpose                                                    |
| --------------- | ---------------------------------------------------------- |
| Signifier       | Indicates how an element can be used                       |
| Affordance      | Describes the action an element allows                     |
| Hover state     | Provides feedback when the pointer is over an element      |
| Focus state     | Identifies the selected element during keyboard navigation |
| Active state    | Shows that an element is currently being activated         |
| Semantic HTML   | Communicates an element's purpose through its tag          |
| Visual feedback | Confirms that an interaction occurred                      |

---

# Key Takeaways

* Interactive elements should clearly look interactive.
* Users should not have to guess what can be clicked.
* Signifiers provide clues about how an interface element behaves.
* Affordances describe the actions an element allows.
* Links and buttons should use familiar visual conventions.
* Hover, focus, active, visited, and disabled states provide important feedback.
* Semantic HTML improves behavior and accessibility.
* Color should not be the only indicator of clickability.
* Clear interaction design makes websites easier, faster, and more enjoyable to use.

---

> **Final Reminder:** Good interface design reduces uncertainty. A user should be able to recognize an interactive element, predict what it will do, and understand the result of the interaction without confusion.

