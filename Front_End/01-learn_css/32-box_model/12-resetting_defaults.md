# CSS — Resetting Browser Defaults

## Overview

All major web browsers include a built-in stylesheet.

This stylesheet is called a:

    User Agent Stylesheet

In this context:

    User Agent = Browser

Examples:

    Chrome
    Firefox
    Safari
    Edge

When no external CSS file is provided, the browser uses
its own default styles to display HTML elements.

---

## What are User Agent Stylesheets?

User agent stylesheets contain default CSS rules that browsers
automatically apply to HTML elements.

Common defaults include:

    margin
    padding
    font sizes
    heading styles
    list indentation

These defaults affect how elements appear before any custom CSS
is applied.

---

## Why Can Browser Defaults Be a Problem?

Default browser styling can:

- create unexpected spacing
- make layouts inconsistent
- differ slightly between browsers
- make page design harder to control

Example:

    <h1>Welcome</h1>

Even without CSS, the heading appears:

    larger
    bold
    spaced apart

because the browser applied default styles.

---

## The Solution: Reset Defaults

Many developers prefer to start with a:

    clean slate

by removing browser default margins and padding.

This process is called:

    resetting defaults

---

## Universal Selector

The universal selector:

    *

targets every HTML element.

Example:

    * {
      margin: 0;
      padding: 0;
    }

---

## What Does This Do?

CSS:

    * {
      margin: 0;
      padding: 0;
    }

Result:

    all HTML elements receive

        margin: 0
        padding: 0

This removes the browser's default spacing.

---

## Visual Example

Before Reset:

    Browser adds spacing

    ----------------------
        Heading

        Paragraph

    ----------------------

---

After Reset:

    ----------------------
    Heading
    Paragraph
    ----------------------

All spacing is now controlled by your CSS.

---

## Why Developers Use Resets

Benefits:

- consistent layouts
- easier styling
- predictable spacing
- improved cross-browser compatibility

Instead of fighting browser defaults:

    you control everything

---

## Common Placement

The reset rule is often the very first rule in an external
stylesheet.

Example:

    /* CSS Reset */

    * {
      margin: 0;
      padding: 0;
    }

---

## Why No Units?

Notice:

    margin: 0;
    padding: 0;

instead of:

    margin: 0px;
    padding: 0px;

---

### Rule

When a value equals:

    0

a unit is not required.

Valid:

    margin: 0;
    padding: 0;

Also valid:

    margin: 0px;
    padding: 0px;

Preferred:

    margin: 0;
    padding: 0;

---

## Example Stylesheet

    * {
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Arial;
    }

    h1 {
      color: navy;
    }

The reset removes browser defaults before custom styling begins.

---

## Universal Selector Review

Selector:

    *

Meaning:

    select all elements

Example:

    * {
      color: blue;
    }

Result:

    all text becomes blue

---

## Browser Defaults Commonly Applied To

Elements:

    body
    h1
    h2
    h3
    p
    ul
    ol
    li

Properties:

    margin
    padding

---

## Quick Reference

User Agent Stylesheet

    Browser's built-in CSS

---

Universal Selector

    *

Selects:

    every HTML element

---

Reset Rule

    * {
      margin: 0;
      padding: 0;
    }

Purpose:

    remove browser default spacing

---

## Key Takeaways

- Browsers include built-in CSS called user agent stylesheets.
- User agent stylesheets often add default margins and padding.
- Default browser styling can make layouts harder to control.
- Developers often reset browser defaults using:

      * {
        margin: 0;
        padding: 0;
      }

- The universal selector (*) targets all HTML elements.
- Zero values do not require measurement units.

Remember:

    Browser Defaults
           ↓
        Reset
           ↓
      Clean Slate
           ↓
      Custom CSS
