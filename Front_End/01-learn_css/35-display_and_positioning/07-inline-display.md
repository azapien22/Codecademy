# CSS — Display: Inline

## Overview

Every HTML element has a default:

    display

value.

The display property determines:

- how an element occupies space
- whether it starts on a new line
- whether it can sit next to other elements
- whether width and height can be changed

This lesson introduces three display values:

    inline
    block
    inline-block

---

# What is an Inline Element?

An inline element:

✔ Takes up only as much width as its content requires.

✔ Does NOT start on a new line.

✔ Can sit directly beside other inline elements.

---

# Visual Example

HTML:

    This is
    <em>important</em>
    text.

Browser:

    This is important text.

Everything appears on one line.

---

# Default Inline Elements

Common inline elements include:

    <a>
    <em>
    <strong>
    <span>
    <img>

These naturally flow within surrounding text.

---

# Characteristics

Inline elements:

✔ Stay on the same line.

✔ Wrap tightly around their content.

✔ Only use the width they need.

✔ Do not force a new line.

---

# Example

HTML:

    Learn more about
    <em>inline</em>
    elements.

Browser:

    Learn more about inline elements.

The `<em>` element stays on the same line.

---

# Another Example

HTML:

    Read the
    <a href="#">documentation</a>.

Browser:

    Read the documentation.

The anchor (`<a>`) also remains inline.

---

# Width and Height

One important limitation:

Inline elements

cannot use

    width
    height

properties.

Example:

    a {
      width: 300px;
      height: 100px;
    }

Result:

Ignored

because:

    <a>

is an inline element.

---

# Why?

Inline elements are sized automatically based on their content.

Example:

    <a>Home</a>

Only enough space is used to display:

    Home

---

# Display Property

CSS allows you to change any element's display type.

Syntax:

    display: inline;

---

# Example

CSS:

    h1 {
      display: inline;
    }

Normally:

    <h1>

is a block element.

After:

    display: inline;

it behaves like inline text.

---

# Before

HTML:

    <h1>Home</h1>
    <h1>About</h1>

Browser:

    Home

    About

Each heading occupies its own line.

---

# After

CSS:

    h1 {
      display: inline;
    }

Browser:

    Home About

Both headings appear on the same line.

---

# Visual Comparison

Block

    +----------------------+
    | Heading              |
    +----------------------+

    +----------------------+
    | Heading              |
    +----------------------+

---

Inline

    Heading   Heading   Heading

Everything stays on one line.

---

# Inline Box

Inline elements create a box that wraps tightly around their content.

Example:

    +--------+
    | Home   |
    +--------+

The box is only as wide as necessary.

---

# Common Inline Elements

| Element | Purpose |
|---------|---------|
| `<a>` | Hyperlink |
| `<em>` | Emphasized text |
| `<strong>` | Important text |
| `<span>` | Generic inline container |
| `<img>` | Image |

---

# Block vs Inline

## Block

✔ Starts new line

✔ Uses full width

✔ Width can be changed

✔ Height can be changed

---

## Inline

✔ Same line

✔ Width fits content

✔ Width cannot be changed

✔ Height cannot be changed

---

# Display Property Summary

Default

    h1

↓

Block

---

After

    display: inline;

↓

Behaves like text.

---

# Common Uses

Developers use inline display when:

- placing headings beside other elements
- creating horizontal menus
- displaying labels inline
- styling navigation links
- formatting text

---

# Quick Reference

Property

    display

---

Value

    inline

---

Characteristics

✔ Same line

✔ Content-sized width

✔ No width property

✔ No height property

---

# Memory Trick

Inline

    Like Words
    In A Sentence

Everything stays

    Side by Side

---

Block

    Like Paragraphs

Each begins

    On A New Line

---

# Key Takeaways

- Every HTML element has a default display type.
- Inline elements occupy only the width required by their content.
- Inline elements do not start on a new line.
- Common inline elements include:

      <a>
      <em>
      <strong>
      <span>

- Inline elements cannot have their width or height set with CSS.
- Any element can be converted into an inline element using:

      display: inline;

Remember:

    Inline

        ↓

    Same Line

    Content-Sized

    No Width

    No Height
