# Web Development Foundations: The Summit

> **Project Goal:** Apply link and button design principles to improve the usability of a ski lodge landing page by making interactive elements easier to recognize and more responsive to user interaction.

---

# Project Overview

**The Summit** is a ski lodge landing page with several clickable elements that currently provide little visual indication that they are interactive.

The goal of this project is to improve the overall **user experience (UX)** by making navigation and interactive controls:

* Easier to identify
* More intuitive to use
* More visually consistent
* More responsive to hover and click interactions
* More accessible to users

This project builds directly on the concepts covered in **Learn Links and Buttons**.

---

# Core Design Problem

Users should be able to tell which elements are clickable **before** interacting with them.

Poor interface design can force users to guess:

```text
Is this text a link?

Is this image clickable?

Is this a button?

What happens if I hover here?

Did my click actually register?
```

The Summit project challenges you to eliminate that uncertainty.

---

# Primary Objective

Improve the visual communication of interactivity.

```text
Existing Interface
       │
       ▼
Unclear Clickable Elements
       │
       ▼
Apply CSS Signifiers
       │
       ├── Link Styling
       ├── Hover States
       ├── Active States
       ├── Button Styling
       ├── Cursor Feedback
       └── Visual Contrast
       │
       ▼
Clearer User Experience
```

---

# Skills Practiced

This project reinforces the following concepts:

* Link styling
* Button styling
* `:hover`
* `:active`
* `:visited`
* `cursor`
* `text-decoration`
* `background-color`
* `border`
* `border-radius`
* `box-shadow`
* Visual feedback
* Signifiers
* Affordances
* Interaction states
* Skeuomorphic design
* Flat design

---

# Design Freedom

The project intentionally gives you flexibility.

There is no single correct visual design.

You may experiment with:

* Colors
* Borders
* Shadows
* Rounded corners
* Hover effects
* Button movement
* Text decoration
* Background changes
* Typography
* Cursor feedback

However, every styling decision should support usability.

---

# Creativity vs Usability

A visually impressive interface is only successful if users understand how to interact with it.

```text
Creative Styling
       +
Clear Signifiers
       +
Consistent Feedback
       =
Strong Interface Design
```

A stylish button that does not look clickable is still poor UI design.

---

# Questions to Ask While Designing

Before styling an interactive element, ask:

```text
Can users tell this is clickable?

Does it look different from ordinary content?

Does it respond when hovered?

Does it respond when clicked?

Does the interaction feel predictable?

Is the same visual language used elsewhere?
```

These questions help keep design decisions focused on the user.

---

# Links Should Look Like Links

Links should be distinguishable from surrounding content.

Useful signifiers include:

* Color
* Underlining
* Font weight
* Background color
* Hover effects
* Borders

Example:

```css
a {
    color: #1d4ed8;
    text-decoration: underline;
    text-underline-offset: 0.15em;
}
```

---

# Add Hover Feedback

```css
a:hover {
    color: #f97316;
}
```

Hover states confirm that the element is interactive.

```text
Default Link
      │
      ▼
User Hovers
      │
      ▼
Visual Change
      │
      ▼
Clickability Confirmed
```

---

# Buttons Should Look Clickable

Buttons should have a recognizable visual form.

Example:

```css
button {
    padding: 0.75rem 1.25rem;
    border: none;
    border-radius: 0.375rem;
    background-color: #2563eb;
    color: white;
    font-weight: 700;
    cursor: pointer;
}
```

Useful button signifiers include:

* Shape
* Padding
* Contrast
* Clear label
* Hover response
* Active response

---

# Hover State Example

```css
button:hover {
    background-color: #1d4ed8;
}
```

---

# Active State Example

```css
button:active {
    transform: translateY(2px);
}
```

This provides physical feedback when the user clicks.

---

# Cursor Feedback

Interactive elements should display an appropriate cursor.

```css
button,
a {
    cursor: pointer;
}
```

The pointing-hand cursor reinforces clickability for desktop users.

---

# Keep Interactions Consistent

If one navigation item behaves a certain way, similar navigation items should behave similarly.

Poor consistency:

```text
Navigation Link #1 → Underline on hover

Navigation Link #2 → Changes background

Navigation Link #3 → No hover effect
```

Better consistency:

```text
Navigation Link #1 ─┐
Navigation Link #2 ─┼──► Same interaction pattern
Navigation Link #3 ─┘
```

Consistency makes interfaces easier to learn.

---

# Potential Design Directions

## Flat Design

```css
.button {
    background-color: #1e3a8a;
    color: white;
    border: none;
    border-radius: 0.375rem;
}
```

Clean and minimal.

---

## Skeuomorphic Design

```css
.button {
    background-color: #2563eb;
    color: white;
    border: 1px solid #1e40af;
    border-radius: 0.375rem;
    box-shadow: 0 4px 0 #1e3a8a;
}

.button:active {
    transform: translateY(4px);
    box-shadow: none;
}
```

Creates a raised, pressable appearance.

---

# Accessibility Considerations

A good design should work for more than mouse users.

Interactive elements should also support:

* Keyboard navigation
* Touch devices
* Screen readers
* Users with low vision

Add visible focus states:

```css
a:focus-visible,
button:focus-visible {
    outline: 3px solid #f59e0b;
    outline-offset: 3px;
}
```

---

# Do Not Rely Only on Hover

Hover does not work consistently on touch devices.

Therefore:

```text
Default State
     │
     ▼
Must Already Look Interactive
     │
     ▼
Hover Provides Extra Feedback
```

Never make hover the only way a user can discover that something is clickable.

---

# Interaction Design Workflow

```text
Identify Clickable Element
          │
          ▼
Make It Visually Distinct
          │
          ▼
Add Hover Feedback
          │
          ▼
Add Active Feedback
          │
          ▼
Add Focus Feedback
          │
          ▼
Check Consistency
          │
          ▼
Test the User Experience
```

---

# Suggested Project Checklist

* [ ] Identify every clickable element
* [ ] Make links visually distinct
* [ ] Style navigation links
* [ ] Add hover states
* [ ] Add active states
* [ ] Add pointer cursors where appropriate
* [ ] Style buttons clearly
* [ ] Ensure labels describe their actions
* [ ] Add keyboard focus styles
* [ ] Keep interaction patterns consistent
* [ ] Avoid relying only on color
* [ ] Avoid relying only on hover
* [ ] Test the finished page for usability

---

# Best Practices

* Make clickability obvious before interaction.
* Use familiar visual patterns.
* Keep interactive styles consistent.
* Provide immediate feedback.
* Use clear labels.
* Avoid excessive animations.
* Maintain sufficient contrast.
* Use semantic links and buttons.
* Include visible focus indicators.
* Design for both desktop and mobile interaction.

---

# Common Mistakes

## Making Links Look Like Plain Text

```css
a {
    color: inherit;
    text-decoration: none;
}
```

This removes important signifiers.

---

## Making Hover the Only Clue

```css
a:hover {
    color: blue;
}
```

Users should not have to hunt for interactive elements.

---

## Over-Styling

Too many effects can distract users.

Avoid combining excessive:

* Shadows
* Animations
* Transforms
* Color changes
* Gradients

Use visual effects with purpose.

---

## Inconsistent Feedback

If similar elements behave differently, users may become confused.

Interaction patterns should remain predictable.

---

# Key Takeaways

* The Summit project applies link and button design principles in a realistic interface.
* The primary goal is to improve usability by making interactive elements obvious.
* Hover and active states provide important feedback.
* Cursor changes reinforce clickability.
* Flat and skeuomorphic styles are both valid approaches.
* Creativity should support clarity rather than replace it.
* Consistent interaction patterns help users learn the interface faster.
* Accessible design should include focus states and should not rely solely on hover.
* The best interface is one where users immediately understand what they can interact with and what will happen when they do.

---

> **Final Reminder:** The goal of The Summit is not simply to make the page look better. The real objective is to make every interactive element feel obvious, predictable, and satisfying to use.

