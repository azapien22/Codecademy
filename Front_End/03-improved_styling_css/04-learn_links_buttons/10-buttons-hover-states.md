# Learn Links and Buttons: Button Hover States

> **Buttons should provide clear visual feedback when users interact with them. Hover styles and pointer cursors reinforce clickability, while the entire button surface should behave as one consistent interactive control.**

---

# Overview

Buttons, like links, should respond visibly when users move a mouse pointer over them.

Two common CSS tools for this are:

* `:hover`
* `cursor: pointer`

These features help communicate that the button is interactive.

However, hover should remain an enhancement rather than the only signifier of clickability because touch devices generally do not provide traditional hover behavior.

---

# Why Buttons Need Hover States

Users expect buttons to be clickable.

A hover state confirms that expectation by changing the button’s appearance when the pointer moves over it.

```text
Default Button
      │
      ▼
Pointer Moves Over Button
      │
      ▼
:hover Activates
      │
      ▼
Button Changes Appearance
      │
      ▼
User Receives Feedback
```

This feedback helps the interface feel responsive and predictable.

---

# Basic Hover Example

```html
<button type="button">
    Save Changes
</button>
```

```css
button {
    background-color: royalblue;
    color: white;
}

button:hover {
    background-color: darkblue;
}
```

When the user hovers over the button, its background becomes darker.

When the pointer leaves, the original color returns.

---

# The `:hover` Pseudo-Class

The `:hover` pseudo-class styles an element while a pointing device is positioned over it.

### Syntax

```css
selector:hover {
    property: value;
}
```

### Example

```css
button:hover {
    background-color: navy;
}
```

Hover styles are temporary and apply only while the pointer remains over the element.

---

# Common Button Hover Effects

A hover state can change many CSS properties.

Common effects include:

* Background color
* Text color
* Border color
* Box shadow
* Opacity
* Scale
* Position
* Brightness

---

## Change the Background Color

```css
button:hover {
    background-color: #1d4ed8;
}
```

---

## Change the Text Color

```css
button:hover {
    color: yellow;
}
```

---

## Change the Border

```css
button:hover {
    border-color: navy;
}
```

---

## Add a Shadow

```css
button:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
```

---

## Slightly Enlarge the Button

```css
button:hover {
    transform: scale(1.03);
}
```

Small movements can reinforce interaction, but large effects may feel distracting.

---

# Pointer Cursor

The `cursor` property controls the appearance of the mouse pointer.

For clickable controls, the common value is:

```css
cursor: pointer;
```

Example:

```css
button {
    cursor: pointer;
}
```

This changes the normal arrow cursor into a pointing hand.

```text
Default Cursor
      │
      ▼
Moves Over Button
      │
      ▼
Pointer Cursor Appears
      │
      ▼
Clickability Is Reinforced
```

---

# Complete Basic Example

```html
<button class="save-button" type="button">
    Save Changes
</button>
```

```css
.save-button {
    padding: 0.75rem 1.25rem;
    border: none;
    border-radius: 0.375rem;
    background-color: #2563eb;
    color: white;
    font: inherit;
    font-weight: 700;
    cursor: pointer;
}

.save-button:hover {
    background-color: #1d4ed8;
}
```

---

# Hover Is Not Enough

A button should already look clickable before a user hovers over it.

Poor design:

```css
button {
    background: none;
    border: none;
    color: inherit;
}

button:hover {
    background-color: blue;
    color: white;
}
```

Before hovering, this may look like ordinary text.

Better:

```css
button {
    padding: 0.75rem 1.25rem;
    border: 1px solid #2563eb;
    border-radius: 0.375rem;
    background-color: #2563eb;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #1d4ed8;
}
```

The default state is already recognizable as a button.

---

# Mobile Devices and Hover

Traditional hover behavior depends on a mouse or similar pointing device.

Many mobile devices:

* Do not display a cursor
* Do not support persistent hover
* Require direct touch
* May activate the button immediately

```text
Desktop
────────
Move Pointer
      │
      ▼
Hover
      │
      ▼
Click

Mobile
──────
Touch Button
      │
      ▼
Action Activates
```

For this reason, essential instructions or functionality must never depend on hover.

---

# Buttons May Contain Multiple Elements

A button can contain more than plain text.

For example:

```html
<button type="button">
    <img src="download-icon.svg" alt="">
    <span>Download Report</span>
</button>
```

The button contains:

* A rectangular body
* An image
* Text

All parts should function as one control.

---

# The Entire Button Should Be Clickable

Users should be able to click anywhere inside the visible button area.

```text
┌──────────────────────────┐
│  [icon] Download Report  │
└──────────────────────────┘

Every visible part should activate
the same button action.
```

The following areas should all be clickable:

* Background
* Border
* Icon
* Text
* Internal spacing

---

# Good Button Structure

```html
<button class="download-button" type="button">
    <img
        src="download-icon.svg"
        alt=""
        aria-hidden="true"
    >
    <span>Download Report</span>
</button>
```

```css
.download-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    padding: 0.75rem 1rem;
    border: none;
    border-radius: 0.375rem;
    background-color: #2563eb;
    color: white;
    cursor: pointer;
}

.download-button:hover {
    background-color: #1d4ed8;
}
```

Because the icon and text are inside the `<button>`, clicking either one activates the same control.

---

# Avoid Separate Click Targets Inside a Button

Poor structure:

```html
<div class="button">
    <img src="download-icon.svg" alt="Download">
    <span onclick="downloadFile()">Download Report</span>
</div>
```

Problems:

* Only the text may work
* The icon may not be clickable
* The background may not be clickable
* Keyboard accessibility is missing
* Behavior becomes inconsistent

Better:

```html
<button type="button">
    <img src="download-icon.svg" alt="">
    <span>Download Report</span>
</button>
```

The whole element behaves consistently.

---

# Consistent Behavior

Every part of the button should produce the same result.

```text
Click Background ─┐
Click Label ──────┼──► Same Action
Click Icon ───────┘
```

Users should never have to aim at a specific internal part of the control.

---

# Hovering Child Elements

When elements are nested inside a button, the button’s `:hover` state still activates while the pointer is over those children.

```html
<button class="icon-button" type="button">
    <span class="icon">★</span>
    <span class="label">Favorite</span>
</button>
```

```css
.icon-button:hover {
    background-color: gold;
}
```

Hovering over either the star or the label applies the button’s hover style.

---

# Add Focus Feedback

Hover helps mouse users, but keyboard users rely on focus.

```css
button:focus-visible {
    outline: 3px solid orange;
    outline-offset: 3px;
}
```

A strong implementation includes both:

```css
button:hover {
    background-color: #1d4ed8;
}

button:focus-visible {
    outline: 3px solid orange;
    outline-offset: 3px;
}
```

---

# Add an Active State

The active state provides feedback while the button is being pressed.

```css
button:active {
    transform: scale(0.98);
}
```

A complete interaction sequence might look like:

```text
Default
   │
   ▼
Hover
   │
   ▼
Focus
   │
   ▼
Active
   │
   ▼
Action Completed
```

---

# Complete Accessible Example

```html
<button class="action-button" type="button">
    <span aria-hidden="true">✓</span>
    <span>Confirm Selection</span>
</button>
```

```css
.action-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    min-height: 44px;
    padding: 0.75rem 1.25rem;
    border: none;
    border-radius: 0.375rem;
    background-color: #2563eb;
    color: white;
    font: inherit;
    font-weight: 700;
    cursor: pointer;

    transition:
        background-color 150ms ease,
        transform 100ms ease;
}

.action-button:hover {
    background-color: #1d4ed8;
}

.action-button:focus-visible {
    outline: 3px solid #f59e0b;
    outline-offset: 3px;
}

.action-button:active {
    background-color: #1e40af;
    transform: scale(0.98);
}

.action-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
```

---

# Disabled Buttons

Disabled buttons should not display the same interaction feedback as active buttons.

HTML:

```html
<button type="button" disabled>
    Submit Form
</button>
```

CSS:

```css
button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
```

You can also prevent hover effects from visually suggesting availability:

```css
button:not(:disabled):hover {
    background-color: #1d4ed8;
}
```

---

# Use `:not(:disabled)` for Hover

This selector applies hover styling only to enabled buttons.

```css
button:not(:disabled):hover {
    background-color: #1d4ed8;
}
```

This prevents a disabled button from appearing interactive.

---

# Button Interaction States

| State    | Purpose                           |
| -------- | --------------------------------- |
| Default  | Shows the button is available     |
| Hover    | Confirms pointer interaction      |
| Focus    | Shows keyboard selection          |
| Active   | Shows the button is being pressed |
| Disabled | Shows the action is unavailable   |

---

# Touch Target Size

Because mobile users do not benefit from hover, the clickable area itself becomes even more important.

A button should provide enough internal space for comfortable tapping.

```css
button {
    min-height: 44px;
    padding-inline: 1rem;
}
```

Large click targets reduce accidental taps and make the interface easier to use.

---

# Common Mistakes

## Only the Text Is Clickable

Poor:

```html
<div class="button">
    <span onclick="submitForm()">Submit Form</span>
</div>
```

Better:

```html
<button type="submit">
    Submit Form
</button>
```

---

## Hover Is the Only Signifier

Poor:

```css
button {
    background: transparent;
    border: none;
}

button:hover {
    background-color: blue;
}
```

The button may be invisible as a control until hover.

---

## Forgetting the Pointer Cursor

```css
.custom-button {
    background-color: blue;
}
```

Better:

```css
.custom-button {
    background-color: blue;
    cursor: pointer;
}
```

---

## Styling Disabled Buttons as Clickable

Poor:

```css
button:disabled {
    cursor: pointer;
}
```

Better:

```css
button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}
```

---

## Using Hover Without Focus

Poor:

```css
button:hover {
    background-color: darkblue;
}
```

Better:

```css
button:hover {
    background-color: darkblue;
}

button:focus-visible {
    outline: 3px solid orange;
    outline-offset: 3px;
}
```

---

# Button Design Workflow

```text
Use Semantic <button>
        │
        ▼
Make Default State Obvious
        │
        ▼
Make Entire Surface Clickable
        │
        ▼
Add cursor: pointer
        │
        ▼
Add Hover Feedback
        │
        ▼
Add Focus Feedback
        │
        ▼
Add Active Feedback
        │
        ▼
Test Mouse, Keyboard, and Touch
```

---

# Best Practices

* Use the semantic `<button>` element for actions.
* Make the button recognizable before hover.
* Apply `cursor: pointer` to enabled custom buttons.
* Use hover to reinforce interactivity.
* Include visible focus styles for keyboard users.
* Make every visible part of the button clickable.
* Keep icons, text, and backgrounds within one button element.
* Ensure all internal parts trigger the same behavior.
* Avoid relying on hover for essential information.
* Make buttons large enough for touch interaction.
* Clearly distinguish disabled buttons.

---

# Quick Reference

| Property or Selector   | Purpose                              |
| ---------------------- | ------------------------------------ |
| `:hover`               | Styles the pointer-over state        |
| `cursor: pointer`      | Indicates clickability               |
| `:focus-visible`       | Styles keyboard focus                |
| `:active`              | Styles the pressed state             |
| `:disabled`            | Styles unavailable buttons           |
| `display: inline-flex` | Aligns button icons and text         |
| `gap`                  | Adds space between internal elements |
| `min-height`           | Helps create a larger touch target   |

---

# Key Takeaways

* Buttons should use hover states to provide visual feedback.
* Enabled buttons should display a pointer cursor when appropriate.
* Hover behavior is useful on desktop but unreliable on mobile devices.
* A button must remain recognizable before the user hovers.
* Buttons can contain text, images, icons, and other elements.
* Every visible part of the button should be clickable.
* All internal button elements should produce the same behavior.
* Semantic `<button>` elements naturally create one consistent click target.
* Focus and active states should accompany hover styling.
* Disabled buttons should not appear clickable.
* Strong button design supports mouse, keyboard, and touchscreen users.

---

> **Final Reminder:** A button should behave as one complete control. Whether users click its background, label, or icon, they should receive the same response—and the interface should clearly communicate that behavior before, during, and after interaction.

