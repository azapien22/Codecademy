# CSS — Flow of HTML

## Overview

When a web page contains only HTML and no CSS positioning rules, the browser displays elements in their natural order.

This default rendering behavior is known as:

    Flow of HTML

---

# Default HTML Flow

Browsers render elements:

    Left to Right
    Top to Bottom

following the exact order in which elements appear in the HTML document.

Example:

HTML:

    <h1>Welcome</h1>
    <p>First paragraph</p>
    <p>Second paragraph</p>

Browser Output:

    Welcome

    First paragraph

    Second paragraph

Elements appear in the same order they exist in the source code.

---

# Normal Document Flow

HTML elements naturally flow down the page.

Visual Example:

    Element 1
    ─────────────

    Element 2
    ─────────────

    Element 3
    ─────────────

The browser stacks elements vertically unless instructed otherwise by CSS.

---

# Why Positioning Matters

Without CSS positioning:

- layouts are very limited
- elements remain in normal flow
- complex page designs are difficult

CSS provides tools to control:

- element placement
- stacking order
- alignment
- overlapping elements
- side-by-side layouts

---

# CSS Positioning Properties

This lesson introduces five important positioning properties:

---

## 1. position

Controls how an element is positioned.

Examples:

    position: static;
    position: relative;
    position: absolute;
    position: fixed;
    position: sticky;

Used to move elements from their normal location.

---

## 2. display

Controls how elements appear and occupy space.

Examples:

    display: block;
    display: inline;
    display: inline-block;
    display: none;

Determines:

- line behavior
- width behavior
- visibility in layout

---

## 3. z-index

Controls stacking order.

Example:

    z-index: 10;

Higher values appear in front of lower values.

Visual:

    z-index: 20   ← Front
    z-index: 10
    z-index: 1    ← Back

---

## 4. float

Moves elements to one side of a container.

Examples:

    float: left;
    float: right;

Often used in older layouts.

Visual:

    [Image] Text Text Text
    [Image] Text Text Text

---

## 5. clear

Controls behavior around floated elements.

Examples:

    clear: left;
    clear: right;
    clear: both;

Prevents elements from wrapping around floats.

---

# Positioning and Styling

Positioning properties work together with all other CSS properties.

Example:

    .box {
      width: 300px;
      padding: 20px;
      background-color: lightblue;
      position: relative;
    }

An element can have:

- colors
- borders
- padding
- margins
- positioning

all at the same time.

---

# Visual Example

Without Positioning:

    Header

    Paragraph

    Image

    Footer

Everything follows normal flow.

---

With Positioning:

    Header

          Image

    Paragraph

    Footer

CSS changes where elements appear.

---

# Why Learn Positioning?

Positioning is essential for creating:

- navigation bars
- sidebars
- image galleries
- dashboards
- forms
- landing pages
- responsive layouts

Almost every modern website relies on positioning techniques.

---

# Quick Reference

Default Browser Behavior:

    Left → Right
    Top → Bottom

This is called:

    Normal Flow
    or
    Document Flow

---

Important Positioning Properties:

    position
    display
    z-index
    float
    clear

---

# Key Takeaways

- Browsers render HTML in document order.
- Elements naturally flow from top to bottom.
- This behavior is called the flow of HTML.
- CSS can change how elements are positioned.
- Five major positioning properties are:

      position
      display
      z-index
      float
      clear

- These properties allow developers to create complex page layouts and control exactly where elements appear.

Remember:

    HTML Alone
        ↓
    Natural Flow

    HTML + CSS Positioning
        ↓
    Custom Layouts
