# Learn Links and Buttons: Skeuomorphic Button Styling

> **Skeuomorphic buttons imitate physical buttons by appearing raised when idle and pressed when activated. CSS can create this effect using borders, rounded corners, shadows, and interaction states.**

---

# Overview

Skeuomorphic button design attempts to reproduce the appearance and behavior of a real-world button.

A typical skeuomorphic button has two main visual states:

```text
Unpressed
─────────
Raised above the surface

Pressed
───────
Moves downward and loses elevation
```

The goal is to help users understand the interaction through a familiar physical metaphor.

---

# What Makes a Button Skeuomorphic?

A skeuomorphic button often includes:

* A visible border
* Rounded corners
* A raised appearance
* A drop shadow
* Hover feedback
* A pressed state
* Movement during activation

These effects create the illusion that the button has physical depth.

---

# Physical Button Metaphor

```text
Real Button
     │
     ▼
Raised Surface
     │
     ▼
User Presses
     │
     ▼
Button Moves Down
     │
     ▼
Action Occurs
```

A skeuomorphic web button imitates this sequence visually.

---

# Ways to Create Skeuomorphic Buttons

Skeuomorphic button designs can be created with:

1. Image files
2. CSS rules
3. A combination of images and CSS

Modern websites should generally prefer CSS whenever possible.

---

# Why Prefer CSS Over Images?

CSS-based button styling offers several advantages.

| CSS Styling                 | Image-Based Styling                 |
| --------------------------- | ----------------------------------- |
| Smaller file size           | Requires image downloads            |
| Faster loading              | Can increase page weight            |
| Scales smoothly             | May blur when resized               |
| Easier to edit              | Requires editing the source image   |
| Responsive                  | May need separate image sizes       |
| Supports interaction states | Often requires multiple image files |

Modern CSS can create:

* Shadows
* Gradients
* Rounded corners
* Transformations
* Animations
* Two-dimensional effects
* Three-dimensional effects

---

# Basic HTML Button

```html
<button type="button">Click me</button>
```

The `<button>` element already includes default browser styles.

CSS can override those defaults to create a customized skeuomorphic design.

---

# Basic Skeuomorphic CSS

```css
button {
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
    text-decoration: none;
    box-shadow: 0 5px;
}

button:hover {
    cursor: pointer;
}

button:active {
    margin-top: 5px;
    color: black;
    box-shadow: 0 0;
}
```

---

# Complete Example

```html
<button type="button">Click me</button>
```

```css
button {
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
    text-decoration: none;
    box-shadow: 0 5px;
}

button:hover {
    cursor: pointer;
}

button:active {
    margin-top: 5px;
    color: black;
    box-shadow: 0 0;
}
```

---

# Understanding the Default State

```css
button {
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
    text-decoration: none;
    box-shadow: 0 5px;
}
```

This rule creates the button’s resting appearance.

---

## `padding`

```css
padding: 5px;
```

Adds space between the button text and its border.

```text
┌─────────────────┐
│   Click me      │
└─────────────────┘
    ↑         ↑
   padding around text
```

Without padding, the label may appear cramped.

---

## `border`

```css
border: 1px solid black;
```

Creates a visible boundary around the button.

The border helps users recognize the element as a separate interactive control.

---

## `border-radius`

```css
border-radius: 5px;
```

Rounds the button’s corners.

```text
Square Corners       Rounded Corners

┌──────────┐         ╭──────────╮
│ Click me │         │ Click me │
└──────────┘         ╰──────────╯
```

Rounded corners contribute to the familiar appearance of physical buttons.

---

## `text-decoration`

```css
text-decoration: none;
```

Removes decorative text styling, such as underlining.

This property is especially relevant when similar styles are applied to links that are designed to resemble buttons.

---

## `box-shadow`

```css
box-shadow: 0 5px;
```

Adds a shadow beneath the button.

The shadow creates the illusion that the button is elevated above the page.

```text
╭────────────╮
│  Click me  │
╰────────────╯
██████████████  ← shadow
```

---

# Understanding `box-shadow`

A simplified `box-shadow` syntax is:

```css
box-shadow: horizontal-offset vertical-offset;
```

In this example:

```css
box-shadow: 0 5px;
```

means:

| Value | Meaning                           |
| ----: | --------------------------------- |
|   `0` | No horizontal movement            |
| `5px` | Shadow moves downward by 5 pixels |

---

# Hover State

```css
button:hover {
    cursor: pointer;
}
```

The `:hover` pseudo-class activates while the mouse pointer is over the button.

The declaration:

```css
cursor: pointer;
```

changes the cursor to a pointing hand.

This provides additional visual feedback that the element is clickable.

---

# Active State

```css
button:active {
    margin-top: 5px;
    color: black;
    box-shadow: 0 0;
}
```

The `:active` pseudo-class applies while the button is being pressed.

This state imitates the physical movement of a real button.

---

## Moving the Button Down

```css
margin-top: 5px;
```

Moves the button downward by 5 pixels.

This makes the button appear to occupy the space previously represented by the shadow.

```text
Before Click

╭────────────╮
│  Click me  │
╰────────────╯
██████████████


During Click

     ╭────────────╮
     │  Click me  │
     ╰────────────╯
```

---

## Removing the Shadow

```css
box-shadow: 0 0;
```

Removes the vertical shadow.

The button now appears flat against the page, reinforcing the illusion that it has been pressed.

---

## Setting the Text Color

```css
color: black;
```

Ensures that the button text remains black while the active-state styles are applied.

---

# Button State Comparison

## Default State

```text
╭────────────╮
│  Click me  │
╰────────────╯
██████████████

Raised appearance
```

## Hover State

```text
╭────────────╮    ☝
│  Click me  │
╰────────────╯
██████████████

Pointer cursor appears
```

## Active State

```text
     ╭────────────╮
     │  Click me  │
     ╰────────────╯

Button moves down
Shadow disappears
```

---

# Interaction Flow

```text
Page Loads
    │
    ▼
Button Appears Raised
    │
    ▼
User Hovers
    │
    ▼
Pointer Cursor Appears
    │
    ▼
User Presses Button
    │
    ▼
Button Moves Down
    │
    ▼
Shadow Disappears
    │
    ▼
Button Appears Pressed
```

---

# Why Interaction States Matter

A skeuomorphic button should not only look like a physical button—it should also behave like one.

The following states provide important feedback:

| State    | Purpose                                  |
| -------- | ---------------------------------------- |
| Default  | Shows the button is available            |
| Hover    | Confirms that it is interactive          |
| Active   | Shows that the press is being registered |
| Focus    | Shows keyboard selection                 |
| Disabled | Shows that interaction is unavailable    |

---

# Improved Modern Version

The course example demonstrates the core concept, but moving a button with `margin-top` can affect surrounding layout.

A modern approach uses `transform`.

```css
button {
    padding: 0.75rem 1.25rem;
    border: 1px solid #111;
    border-radius: 0.4rem;
    background-color: #f2f2f2;
    color: #111;
    box-shadow: 0 5px 0 #111;
    cursor: pointer;
}

button:hover {
    background-color: #ffffff;
}

button:active {
    transform: translateY(5px);
    box-shadow: 0 0 0 #111;
}
```

---

# Why Use `transform`?

Compare:

```css
margin-top: 5px;
```

with:

```css
transform: translateY(5px);
```

`transform` is often preferred because it moves the visual appearance without changing the document layout.

| `margin-top`                 | `transform`                         |
| ---------------------------- | ----------------------------------- |
| Can move surrounding content | Does not reflow surrounding content |
| Changes layout spacing       | Changes visual position             |
| Useful for layout            | Better for interaction animation    |

---

# Adding a Smooth Transition

```css
button {
    transition:
        transform 100ms ease,
        box-shadow 100ms ease,
        background-color 100ms ease;
}
```

Complete example:

```css
button {
    padding: 0.75rem 1.25rem;
    border: 1px solid #111;
    border-radius: 0.4rem;
    background-color: #f2f2f2;
    color: #111;
    box-shadow: 0 5px 0 #111;
    cursor: pointer;

    transition:
        transform 100ms ease,
        box-shadow 100ms ease,
        background-color 100ms ease;
}

button:hover {
    background-color: #ffffff;
}

button:active {
    transform: translateY(5px);
    box-shadow: 0 0 0 #111;
}
```

The transition softens the movement between states.

---

# Adding a Focus State

Keyboard users need visible feedback as well.

```css
button:focus-visible {
    outline: 3px solid royalblue;
    outline-offset: 3px;
}
```

Complete accessible version:

```css
button {
    padding: 0.75rem 1.25rem;
    border: 1px solid #111;
    border-radius: 0.4rem;
    background-color: #f2f2f2;
    color: #111;
    box-shadow: 0 5px 0 #111;
    cursor: pointer;

    transition:
        transform 100ms ease,
        box-shadow 100ms ease,
        background-color 100ms ease;
}

button:hover {
    background-color: #ffffff;
}

button:focus-visible {
    outline: 3px solid royalblue;
    outline-offset: 3px;
}

button:active {
    transform: translateY(5px);
    box-shadow: 0 0 0 #111;
}
```

---

# Adding More Visual Depth

A more detailed skeuomorphic button can use gradients and multiple shadows.

```css
button {
    padding: 0.75rem 1.5rem;
    border: 1px solid #1d3f84;
    border-radius: 0.5rem;
    background: linear-gradient(#5b91f2, #2f62c7);
    color: white;
    font-weight: 700;
    box-shadow:
        0 5px 0 #1d3f84,
        0 8px 12px rgba(0, 0, 0, 0.25);
    cursor: pointer;
}
```

This adds:

* A color gradient
* A solid lower edge
* A soft external shadow
* Stronger depth

---

# Detailed Pressed State

```css
button:active {
    transform: translateY(5px);
    box-shadow:
        0 0 0 #1d3f84,
        0 2px 4px rgba(0, 0, 0, 0.2);
}
```

The shadow becomes smaller as the button moves downward.

This creates a more convincing pressed effect.

---

# Full Polished Example

```html
<button class="skeuomorphic-button" type="button">
    Click me
</button>
```

```css
.skeuomorphic-button {
    padding: 0.75rem 1.5rem;
    border: 1px solid #1d3f84;
    border-radius: 0.5rem;
    background: linear-gradient(#5b91f2, #2f62c7);
    color: white;
    font: inherit;
    font-weight: 700;
    box-shadow:
        0 5px 0 #1d3f84,
        0 8px 12px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    transition:
        transform 100ms ease,
        box-shadow 100ms ease,
        filter 100ms ease;
}

.skeuomorphic-button:hover {
    filter: brightness(1.08);
}

.skeuomorphic-button:focus-visible {
    outline: 3px solid #f59e0b;
    outline-offset: 4px;
}

.skeuomorphic-button:active {
    transform: translateY(5px);
    box-shadow:
        0 0 0 #1d3f84,
        0 2px 4px rgba(0, 0, 0, 0.2);
}
```

---

# Respecting Reduced Motion

Some users prefer reduced animation.

Use the `prefers-reduced-motion` media query to remove or minimize transitions.

```css
@media (prefers-reduced-motion: reduce) {
    .skeuomorphic-button {
        transition: none;
    }
}
```

The button can still show pressed feedback without animated movement.

---

# Semantic HTML

Use the `<button>` element for actions.

Correct:

```html
<button type="button">
    Open Menu
</button>
```

Avoid using a generic element as a button:

```html
<div class="button">
    Open Menu
</div>
```

The semantic `<button>` element provides:

* Keyboard support
* Focus behavior
* Screen-reader meaning
* Form-related behavior
* Built-in interactivity

---

# Button Types

The `type` attribute controls button behavior.

| Type     | Purpose                    |
| -------- | -------------------------- |
| `button` | Performs a scripted action |
| `submit` | Submits a form             |
| `reset`  | Resets form controls       |

Examples:

```html
<button type="button">Open Menu</button>

<button type="submit">Submit Form</button>

<button type="reset">Reset Form</button>
```

Inside a form, specify the type explicitly to avoid accidental submission.

---

# CSS Images vs CSS Effects

Image-based buttons may require separate files for:

```text
button-default.png
button-hover.png
button-active.png
```

CSS can represent all states in one stylesheet:

```css
button { }
button:hover { }
button:active { }
```

This makes the design easier to maintain and adapt.

---

# Best Practices

* Use CSS instead of images when practical.
* Use a real `<button>` element for actions.
* Provide a raised default state.
* Provide a clear pressed state.
* Add hover and active feedback.
* Include a visible keyboard focus style.
* Prefer `transform` over margins for interaction movement.
* Keep the button label clear and descriptive.
* Maintain sufficient color contrast.
* Test the design across screen sizes.
* Respect reduced-motion preferences.

---

# Common Mistakes

## Removing the Shadow Without Movement

```css
button:active {
    box-shadow: none;
}
```

This changes the depth but may not clearly imitate a physical press.

Better:

```css
button:active {
    transform: translateY(5px);
    box-shadow: none;
}
```

---

## Moving the Button Without Removing the Shadow

```css
button:active {
    transform: translateY(5px);
}
```

The button moves, but the shadow remains in the same relationship, weakening the pressed illusion.

Better:

```css
button:active {
    transform: translateY(5px);
    box-shadow: none;
}
```

---

## Using Hover as the Only Feedback

```css
button:hover {
    background-color: blue;
}
```

Hover does not communicate whether the button is actively being pressed.

Add an active state:

```css
button:active {
    transform: translateY(5px);
    box-shadow: none;
}
```

---

## Forgetting Keyboard Focus

Do not rely only on mouse interactions.

```css
button:focus-visible {
    outline: 3px solid royalblue;
    outline-offset: 3px;
}
```

---

## Using a Generic Element

Poor:

```html
<span class="button">Save</span>
```

Better:

```html
<button type="button">Save</button>
```

---

# Quick Reference

| Property or Selector | Purpose                       |
| -------------------- | ----------------------------- |
| `padding`            | Adds space inside the button  |
| `border`             | Creates a visible boundary    |
| `border-radius`      | Rounds the button corners     |
| `box-shadow`         | Creates elevation and depth   |
| `cursor: pointer`    | Indicates clickability        |
| `:hover`             | Styles the pointer-over state |
| `:active`            | Styles the pressed state      |
| `:focus-visible`     | Styles keyboard focus         |
| `transform`          | Moves the button visually     |
| `transition`         | Smooths state changes         |

---

# Visual Summary

```text
DEFAULT
──────────────
Raised button
Visible shadow

      │
      ▼

HOVER
──────────────
Pointer cursor
Optional color or brightness change

      │
      ▼

ACTIVE
──────────────
Button moves downward
Shadow disappears or becomes smaller

      │
      ▼

RELEASE
──────────────
Button returns to raised position
Shadow returns
```

---

# Key Takeaways

* Skeuomorphic button styling imitates real-world buttons.
* A raised appearance suggests that the button can be pressed.
* A pressed appearance confirms that activation is occurring.
* CSS is generally preferable to image-based button designs.
* `border`, `border-radius`, and `box-shadow` create a basic three-dimensional appearance.
* `:hover` provides pointer feedback.
* `:active` models the pressed state.
* Moving the button downward and removing its shadow creates the illusion of physical movement.
* Modern implementations often use `transform: translateY()` instead of `margin-top`.
* Semantic `<button>` elements provide built-in accessibility and interaction behavior.
* Visible focus states are necessary for keyboard users.
* Effective skeuomorphic styling combines visual depth with clear and responsive interaction feedback.

---

> **Final Reminder:** A convincing skeuomorphic button does more than look raised. It must respond like a physical control—remaining elevated at rest, acknowledging hover or focus, and visibly moving downward when pressed.

