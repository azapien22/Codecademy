# Learn Links and Buttons: Link States

> **Links change appearance as users interact with them. CSS pseudo-classes allow developers to style each stage of a link's lifecycle, providing clear visual feedback and improving usability.**

---

# Overview

A hyperlink is not limited to a single appearance.

As users interact with a link, it transitions through different **states**.

CSS provides **pseudo-classes** that allow each state to be styled independently.

The four primary link states are:

1. **Unvisited (`:link`)**
2. **Visited (`:visited`)**
3. **Hover (`:hover`)**
4. **Active (`:active`)**

These states communicate where a user has been, what they are interacting with, and whether an action is currently occurring.

---

# What Are Link States?

A **link state** describes the current condition of a hyperlink.

Every hyperlink exists in one of several possible states depending on the user's interaction.

```text
Unvisited
     │
     ▼
Hover
     │
     ▼
Active (Click)
     │
     ▼
Visited
```

Each state provides useful feedback during navigation.

---

# The Four Link States

| Pseudo-Class | Description                                   |
| ------------ | --------------------------------------------- |
| `:link`      | An unvisited hyperlink                        |
| `:visited`   | A hyperlink the user has already visited      |
| `:hover`     | A hyperlink currently under the mouse pointer |
| `:active`    | A hyperlink currently being clicked           |

---

# 1. `:link`

The **`:link`** pseudo-class styles hyperlinks that have **not yet been visited**.

### Example

```css
a:link {
    color: blue;
    text-decoration: underline;
}
```

### Result

```text
Unvisited Link
```

Traditionally:

* Blue
* Underlined

---

# 2. `:visited`

The **`:visited`** pseudo-class styles links that the user has previously opened.

### Example

```css
a:visited {
    color: purple;
}
```

### Result

```text
Visited Link
```

Visited links help users remember where they have already navigated.

---

# 3. `:hover`

The **`:hover`** pseudo-class applies styles while the mouse pointer is positioned over the link.

### Example

```css
a:hover {
    color: orange;
}
```

### Result

```text
User Moves Mouse
        │
        ▼
Link Changes Color
```

Hover provides immediate visual feedback before clicking.

---

# 4. `:active`

The **`:active`** pseudo-class styles the brief moment when a user is actively clicking the link.

### Example

```css
a:active {
    color: red;
}
```

### Result

```text
Mouse Button Pressed
        │
        ▼
Link Turns Red
```

The active state typically lasts only while the mouse button remains pressed.

---

# Link State Lifecycle

```text
Unvisited Link
      │
      ▼
User Moves Mouse
      │
      ▼
:hover
      │
      ▼
User Clicks
      │
      ▼
:active
      │
      ▼
Destination Opens
      │
      ▼
:visited
```

This progression gives users continuous feedback throughout the interaction.

---

# Complete Example

```css
a:link {
    color: blue;
}

a:visited {
    color: purple;
}

a:hover {
    color: orange;
}

a:active {
    color: red;
}
```

Each pseudo-class targets a specific interaction state.

---

# Why Link States Matter

Without visual feedback, users may wonder:

* Can I click this?
* Did my click work?
* Have I already visited this page?

Link states answer these questions visually.

```text
Visual Feedback
       │
       ▼
User Confidence
       │
       ▼
Better Navigation
```

---

# Every State Should Look Like a Link

Even when a link changes appearance, it should still remain recognizable as a hyperlink.

Good example:

```css
a:hover {
    color: orange;
    text-decoration: underline;
}
```

Poor example:

```css
a:hover {
    color: black;
    text-decoration: none;
}
```

The poor example makes the link resemble ordinary body text.

Users may no longer recognize it as clickable.

---

# The Cascade

CSS follows the **Cascade**, meaning later rules can override earlier ones when they have equal specificity.

Because multiple link states may apply simultaneously, the order of pseudo-class rules is important.

---

# Correct Order

The recommended order is:

```text
:link
:visited
:hover
:active
```

Remember it as:

```text
L
V
H
A
```

or the classic mnemonic:

> **LoVe HAte**

```text
LoVe
  │
  ▼
:link
:visited

HAte
  │
  ▼
:hover
:active
```

This ordering ensures that more immediate interaction states override earlier ones.

---

# Why Order Matters

Suppose the rules were written like this:

```css
a:hover {
    color: orange;
}

a:link {
    color: blue;
}
```

When hovering over an unvisited link:

* `:hover` applies
* `:link` also applies

Because `:link` appears later, it overrides `:hover`.

Result:

The hover effect disappears.

Correct ordering prevents this problem.

---

# Correct Example

```css
a:link {
    color: blue;
}

a:visited {
    color: purple;
}

a:hover {
    color: orange;
}

a:active {
    color: red;
}
```

Here:

```text
Static State
      │
      ▼
Hover
      │
      ▼
Click
```

Each interaction receives the highest priority.

---

# Visual Priority

```text
Lowest Priority
────────────────

:link

:visited

:hover

:active

────────────────
Highest Priority
```

The active state should always have the final visual priority because it represents the user's current interaction.

---

# Hover vs Active

These two states often occur together.

Sequence:

```text
Mouse Over Link
      │
      ▼
:hover

Mouse Button Pressed
      │
      ▼
:active
```

While clicking, the active state temporarily overrides the hover state.

---

# Visited vs Hover

A visited link can still be hovered.

Example:

```text
Visited Link
      │
      ▼
:hover
```

Because `:hover` appears later in the stylesheet, its styles temporarily override the visited appearance.

Once the pointer leaves:

```text
:hover ends
      │
      ▼
Visited appearance returns
```

---

# Typical Link Colors

Historically:

| State      | Traditional Color   |
| ---------- | ------------------- |
| `:link`    | Blue                |
| `:visited` | Purple              |
| `:hover`   | Orange or Dark Blue |
| `:active`  | Red                 |

Modern websites often customize these colors while preserving clear visual differences.

---

# Example Navigation Styling

```css
nav a:link {
    color: #005ea8;
}

nav a:visited {
    color: #6a3ea1;
}

nav a:hover {
    color: #f97316;
    text-decoration: underline;
}

nav a:active {
    color: #dc2626;
}
```

---

# Accessibility Considerations

Every state should remain:

* Readable
* Clickable
* Distinguishable
* High contrast

Avoid removing all visual differences between:

* Links
* Visited links
* Hovered links
* Body text

---

# Hover Isn't Enough

Desktop users experience hover.

Mobile users generally do not.

Therefore:

Hover should provide **additional feedback**, not essential information.

---

# Keyboard Users

Keyboard users interact using **focus**, not hover.

Example:

```css
a:hover,
a:focus-visible {
    color: orange;
}

a:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 3px;
}
```

Providing focus styling improves accessibility.

---

# Complete Accessible Example

```css
a:link {
    color: #005ea8;
}

a:visited {
    color: #6a3ea1;
}

a:hover,
a:focus-visible {
    color: #f97316;
    text-decoration: underline;
}

a:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 3px;
}

a:active {
    color: #dc2626;
}
```

This supports:

* Mouse users
* Keyboard users
* Standard browser behavior

---

# Link State Workflow

```text
Create Link
      │
      ▼
Style :link
      │
      ▼
Style :visited
      │
      ▼
Style :hover
      │
      ▼
Style :active
      │
      ▼
(Optional)
Add :focus-visible
      │
      ▼
Test All Interaction States
```

---

# Best Practices

* Style all four primary link states.
* Keep links recognizable in every state.
* Follow the recommended order:

  * `:link`
  * `:visited`
  * `:hover`
  * `:active`
* Use hover to enhance—not identify—clickability.
* Include focus styles for keyboard users.
* Maintain sufficient color contrast.
* Keep styling consistent across the website.
* Test mouse, keyboard, and touch interactions.

---

# Common Mistakes

## Incorrect Rule Order

```css
a:hover {
    color: orange;
}

a:link {
    color: blue;
}
```

Later rules override earlier ones.

Always follow:

```text
:link
:visited
:hover
:active
```

---

## Making Hover the Only Signifier

Poor:

```css
a {
    color: inherit;
}

a:hover {
    color: blue;
}
```

Users shouldn't have to hunt for links by moving the mouse around the page.

---

## Removing All Differences

```css
a:visited {
    color: inherit;
}
```

Visited links become impossible to distinguish from ordinary text.

---

## Ignoring Keyboard Navigation

Hover alone does not help keyboard users.

Always include visible focus styles.

---

# Quick Reference

| Pseudo-Class     | Purpose                                 |
| ---------------- | --------------------------------------- |
| `:link`          | Styles unvisited links                  |
| `:visited`       | Styles visited links                    |
| `:hover`         | Styles links while hovering             |
| `:active`        | Styles links while clicking             |
| `:focus-visible` | Styles links during keyboard navigation |

---

# Visual Summary

```text
LINK STATES

:link
────────────
Blue

:visited
────────────
Purple

:hover
────────────
Orange

:active
────────────
Red


Rule Order

:link
:visited
:hover
:active
```

---

# Key Takeaways

* Links progress through several interaction states during their lifecycle.
* The four primary CSS link pseudo-classes are:

  * `:link`
  * `:visited`
  * `:hover`
  * `:active`
* Each state provides meaningful visual feedback to the user.
* Every state should still clearly look like a hyperlink.
* CSS rule order is essential because of the Cascade.
* The recommended order is:

  1. `:link`
  2. `:visited`
  3. `:hover`
  4. `:active`
* Hover styles should enhance clickability—not be the only indication that something is interactive.
* Include focus styles to support keyboard accessibility and create a more inclusive user experience.

---

> **Final Reminder:** Link states communicate the entire story of a user's interaction—from discovering a link to clicking it and remembering they've visited it. Properly styling every state creates interfaces that feel responsive, predictable, and easy to navigate.

