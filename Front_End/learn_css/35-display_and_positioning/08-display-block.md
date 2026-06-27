# CSS — Display: Block

## Overview

Some HTML elements are displayed differently from inline elements.

These are called:

    Block-Level Elements

A block element starts on a new line and, by default, occupies the full width of its parent container.

---

# What is a Block Element?

A block-level element:

✔ Starts on a new line.

✔ Takes up the full available width of its parent.

✔ Pushes other elements onto new lines.

✔ Can have its width and height changed.

---

# Default Behavior

Visual Example:

    +----------------------------------+
    | Block Element                    |
    +----------------------------------+

    +----------------------------------+
    | Block Element                    |
    +----------------------------------+

Each element gets its own row.

---

# Width

By default:

    width: auto;

which means:

    fill the available width
    of the parent element.

However, the width can be changed.

Example:

    div {
      width: 300px;
    }

Now the element is only 300 pixels wide.

---

# Height

By default, a block element's height is:

    auto

Meaning:

    only as tall
    as necessary

to contain its content.

Example:

    <p>Hello</p>

The paragraph's height is just large enough to display:

    Hello

---

# Common Block Elements

Default block-level elements include:

    <h1>
    <h2>
    <h3>
    <h4>
    <h5>
    <h6>

    <p>

    <div>

    <section>

    <article>

    <header>

    <footer>

    <nav>

---

# Display Property

CSS allows any element to become a block element.

Syntax:

    display: block;

---

# Example

CSS:

    strong {
      display: block;
    }

Normally:

    <strong>

is an inline element.

After:

    display: block;

it behaves like a block element.

---

# Before

HTML:

    This is
    <strong>important</strong>
    text.

Browser:

    This is important text.

Everything stays on one line.

---

# After

CSS:

    strong {
      display: block;
    }

Browser:

    This is

    important

    text.

The `<strong>` element now occupies its own line.

---

# Visual Comparison

Inline

    Text Text Text

Everything stays together.

---

Block

    Text

    Text

    Text

Each element starts on a new line.

---

# Width Example

Default

    +----------------------------------+
    | Paragraph                        |
    +----------------------------------+

Uses full width.

---

Custom Width

CSS:

    p {
      width: 300px;
    }

Visual:

    +---------------+
    | Paragraph     |
    +---------------+

---

# Height Example

CSS:

    div {
      height: 150px;
    }

Result:

The element becomes exactly:

    150px tall

regardless of content.

---

# Inline vs Block

## Inline

✔ Same line

✔ Width fits content

✔ Cannot set width

✔ Cannot set height

---

## Block

✔ New line

✔ Full width

✔ Width can be changed

✔ Height can be changed

---

# Display Property Summary

Default

    <strong>

↓

Inline

---

After

    display: block;

↓

Behaves like a paragraph.

---

# Common Uses

Developers use block display for:

- page sections
- navigation
- containers
- cards
- headings
- footers
- sidebars
- layout elements

---

# Quick Reference

Property

    display

---

Value

    block

---

Characteristics

✔ New Line

✔ Full Width

✔ Width Adjustable

✔ Height Adjustable

---

# Memory Trick

Inline

    Like Words
    In A Sentence

↓

Stay Together

---

Block

    Like Paragraphs

↓

Each Gets

Its Own Line

---

# Display Comparison

| Feature | Inline | Block |
|----------|---------|--------|
| Starts New Line | No | Yes |
| Uses Full Width | No | Yes |
| Width Can Be Set | No | Yes |
| Height Can Be Set | No | Yes |

---

# Key Takeaways

- Block-level elements begin on a new line.
- They occupy the full width of their parent by default.
- Their width and height can be customized with CSS.
- Common block elements include:

      <div>
      <p>
      <h1>–<h6>
      <header>
      <footer>
      <section>

- Any HTML element can become a block element using:

      display: block;

Remember:

    Block

        ↓

    New Line

    Full Width

    Adjustable Size
