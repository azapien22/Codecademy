# Learn Links and Buttons: Hover States and Cursors

> **Hover effects and cursor changes provide immediate visual feedback, helping users recognize interactive elements and understand when an element is ready to be clicked.**

---

# Overview

Interactive websites should respond when users interact with them.

One of the most common interactions is **hovering** a mouse pointer over an element.

CSS allows developers to create these interactive responses using:

* `:hover`
* `cursor`

Together, these properties provide users with immediate feedback that an element is interactive.

---

# What is `:hover`?

The **`:hover`** pseudo-class applies CSS styles when a pointing device (such as a mouse) is positioned over an element.

It creates temporary visual feedback without requiring a click.

### Syntax

```css
selector:hover {
    property: value;
}
```

---

# Basic Example

```css
a {
    color: blue;
}

a:hover {
    color: orange;
}
```

### What Happens?

Default:

```text
Link
```

(Hover)

```text
Link
```

The link changes from **blue** to **orange** while the cursor is positioned over it.

When the pointer leaves the link, the original style returns automatically.

---

# Hover State Lifecycle

```text
Default State
      │
      ▼
Mouse Moves Over Link
      │
      ▼
:hover Activates
      │
      ▼
Hover Styles Applied
      │
      ▼
Mouse Leaves Element
      │
      ▼
Default Styles Restored
```

The browser automatically manages this transition.

---

# How CSS Applies Hover Styles

```css
a {
    color: blue;
}

a:hover {
    color: orange;
}
```

Step-by-step:

```text
Browser loads page
        │
        ▼
Link appears blue
        │
        ▼
User hovers
        │
        ▼
:hover rule overrides color
        │
        ▼
Link becomes orange
        │
        ▼
User moves cursor away
        │
        ▼
Original blue color returns
```

---

# Common Hover Effects

Hover states can modify many CSS properties.

Examples include:

* Color
* Background color
* Border
* Box shadow
* Opacity
* Scale
* Transform
* Text decoration

Example:

```css
button:hover {
    background-color: royalblue;
}
```

---

## Changing Text Color

```css
a:hover {
    color: orange;
}
```

---

## Changing Background Color

```css
button:hover {
    background-color: #2563eb;
}
```

---

## Adding an Underline

```css
a:hover {
    text-decoration: underline;
}
```

---

## Increasing Font Weight

```css
a:hover {
    font-weight: bold;
}
```

---

## Adding a Border

```css
button:hover {
    border-color: royalblue;
}
```

---

## Scaling an Element

```css
button:hover {
    transform: scale(1.05);
}
```

This slightly enlarges the button while hovering.

---

## Adding a Shadow

```css
button:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
```

Shadows help create depth and indicate interactivity.

---

# Combining Multiple Hover Effects

Hover states often combine several visual changes.

```css
button {
    background-color: white;
    border: 1px solid royalblue;
    color: royalblue;
}

button:hover {
    background-color: royalblue;
    color: white;
    transform: translateY(-2px);
}
```

The button now:

* Changes background color
* Changes text color
* Appears to lift slightly

---

# What is the `cursor` Property?

The **`cursor`** property controls the appearance of the mouse pointer.

It communicates how users can interact with an element.

### Syntax

```css
selector {
    cursor: value;
}
```

---

# Pointer Cursor

The most common value is:

```css
cursor: pointer;
```

This changes the cursor from the default arrow into a pointing hand.

Example:

```css
a {
    cursor: pointer;
}
```

---

# Cursor Workflow

```text
Default Cursor
      │
      ▼
Move Over Link
      │
      ▼
Pointer Cursor
      │
      ▼
User Recognizes Clickability
```

The pointer cursor is a familiar signifier across nearly all modern websites.

---

# Browser Defaults

Fortunately, browsers already apply `cursor: pointer` to most interactive elements.

Examples include:

* Links
* Buttons
* Form controls

Because this behavior is built into the browser's **user agent stylesheet**, developers usually don't need to add it manually.

Example:

```css
a {
    cursor: pointer;
}
```

Although unnecessary for standard links, it becomes useful when creating custom interactive elements.

---

# Common Cursor Values

| Value         | Appearance        | Typical Use        |
| ------------- | ----------------- | ------------------ |
| `default`     | Arrow             | Normal content     |
| `pointer`     | Hand              | Clickable elements |
| `text`        | I-beam            | Editable text      |
| `move`        | Four-way arrow    | Draggable items    |
| `grab`        | Open hand         | Draggable objects  |
| `grabbing`    | Closed hand       | Active dragging    |
| `wait`        | Spinner           | Loading            |
| `not-allowed` | Circle with slash | Disabled controls  |

---

# Example

```css
button {
    cursor: pointer;
}

textarea {
    cursor: text;
}

.disabled {
    cursor: not-allowed;
}
```

---

# Hover Is Visual Feedback

Hover styling provides immediate confirmation that the browser recognizes the user's interaction.

Example:

```text
User Moves Cursor
        │
        ▼
Button Changes Color
        │
        ▼
User Knows It Is Interactive
```

Without feedback, users may hesitate before clicking.

---

# Hover Should Never Be the Only Signifier

This is one of the most important lessons.

Incorrect approach:

```text
Normal Text

(Mouse Hover)

Blue Underlined Text
```

In this design, users must accidentally hover over the text before discovering it is clickable.

Interactive elements should already look interactive before hovering.

---

# Better Design

Default:

```text
Blue Underlined Link
```

Hover:

```text
Orange Underlined Link
```

Users immediately recognize the link, while the hover state simply reinforces the interaction.

---

# Mobile Devices

Hover behaves differently on touchscreens.

Most mobile devices:

* Do not have a mouse
* Do not display a cursor
* Do not support traditional hover behavior

Instead, users interact by touching the screen directly.

```text
Desktop
────────
Move Mouse
      │
      ▼
Hover

Mobile
──────
Touch Screen
      │
      ▼
Click
```

Because of this, hover effects should never contain information that users must see.

---

# Accessibility Considerations

Hover effects should enhance interaction—not replace other visual cues.

Interactive elements should still be identifiable through:

* Color
* Underlines
* Borders
* Labels
* Icons
* Focus indicators

Keyboard users rely on **focus**, not hover.

Example:

```css
a:hover,
a:focus-visible {
    color: orange;
}
```

This ensures both mouse and keyboard users receive feedback.

---

# Complete Example

```css
a {
    color: #005ea8;
    text-decoration: underline;
}

a:hover {
    color: orange;
}

a:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 3px;
}

a {
    cursor: pointer;
}
```

The link now provides:

* Default styling
* Hover feedback
* Keyboard focus feedback
* Pointer cursor

---

# Hover + Focus Workflow

```text
User Sees Link
       │
       ▼
Recognizes It Is Clickable
       │
       ▼
Mouse Hover
       │
       ▼
Color Changes
       │
       ▼
Pointer Cursor
       │
       ▼
User Clicks

Keyboard Users
       │
       ▼
Focus Indicator Appears
```

Both interaction methods receive appropriate feedback.

---

# Best Practices

* Make links recognizable before hover.
* Use hover as additional feedback, not primary identification.
* Pair hover effects with visible focus styles.
* Keep hover effects consistent across the website.
* Use the pointer cursor for clickable custom elements.
* Avoid dramatic hover animations that distract users.
* Test both mouse and keyboard navigation.
* Remember that touch devices do not support traditional hover interactions.

---

# Common Mistakes

## Making Links Invisible Until Hover

```css
a {
    color: inherit;
    text-decoration: none;
}

a:hover {
    color: blue;
}
```

Users must search the page by moving their cursor around.

Instead:

```css
a {
    color: blue;
    text-decoration: underline;
}

a:hover {
    color: orange;
}
```

---

## Using Hover Without Focus

Poor:

```css
button:hover {
    background: blue;
}
```

Better:

```css
button:hover,
button:focus-visible {
    background: blue;
}
```

Keyboard users receive the same feedback.

---

## Adding `cursor: pointer` to Everything

```css
body {
    cursor: pointer;
}
```

Only interactive elements should display the pointer cursor.

---

## Hiding Information in Hover States

Never require users to hover in order to discover essential instructions or navigation.

Hover should enhance—not reveal—critical information.

---

# Quick Reference

| Property / Pseudo-Class | Purpose                                        |
| ----------------------- | ---------------------------------------------- |
| `:hover`                | Styles an element while the pointer is over it |
| `cursor`                | Changes the appearance of the mouse pointer    |
| `pointer`               | Indicates that an element is clickable         |
| `default`               | Standard arrow cursor                          |
| `text`                  | Indicates editable text                        |
| `not-allowed`           | Indicates interaction is unavailable           |
| `:focus-visible`        | Styles elements during keyboard navigation     |

---

# Key Takeaways

* The **`:hover`** pseudo-class styles elements while the pointer is positioned over them.
* Hover effects provide immediate visual feedback during interaction.
* The **`cursor`** property controls the appearance of the mouse pointer.
* `cursor: pointer` is the standard cursor for clickable elements.
* Most browsers automatically apply the pointer cursor to links and buttons.
* Hover effects should reinforce—not replace—other visual signifiers of clickability.
* Mobile devices generally do not support traditional hover interactions.
* Pair hover styles with **focus** styles to support keyboard accessibility.
* Interactive elements should always look interactive, even before a user hovers over them.

---

> **Final Reminder:** Hover effects are enhancements, not requirements. A well-designed interface should make interactive elements obvious before the user moves the mouse, while hover and cursor changes simply confirm that the interaction is available.

