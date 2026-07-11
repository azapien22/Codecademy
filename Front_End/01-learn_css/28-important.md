# CSS — !important

## Overview

`!important` forces a CSS declaration to override
other styles, regardless of specificity.

It gives a declaration the **highest priority**.

---

## Basic Syntax
```text
    selector {
      property: value !important;
    }
```
Example:
```text
    p {
      color: blue !important;
    }
```
---

## Example

CSS:
```text
    p {
      color: blue !important;
    }

    .main p {
      color: red;
    }
```
HTML:
```text
    <div class="main">
      <p>Paragraph</p>
    </div>
```
---

## Result

    paragraph color = blue

Reason:

    !important overrides specificity

---

## Structure Diagram

    normal specificity:
      ID > class > type

    with !important:
      declaration wins regardless

---

## How It Works

Normally:

    .main p > p

But:
```text
    p {
      color: blue !important;
    }
```
forces the browser to use blue.

---

## Visual Concept

    normal rules
         ↓
    !important
         ↓
    override everything

---

## Why `!important` is Dangerous

Using `!important` can:

- make CSS difficult to maintain
- create override conflicts
- increase complexity
- make debugging harder

---

## Best Practice

Avoid using:

    !important

unless absolutely necessary.

---

## Acceptable Use Cases

One common use:

- overriding external frameworks

Example:

    Bootstrap
    Tailwind
    third-party stylesheets

---

## Example — Framework Override
```text
    .btn {
      background-color: red !important;
    }
```
Purpose:

    force custom style over framework styles

---

## Important Notes

- applies to individual declarations
- not entire rulesets
- difficult to override later

---

## Key Pattern

    property: value !important;

Example:

    color: blue !important;

---

## Key Idea

`!important` overrides normal CSS specificity rules
and should be used sparingly.
