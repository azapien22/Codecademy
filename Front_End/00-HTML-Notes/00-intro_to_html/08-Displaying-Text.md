# Displaying Text in HTML

## Overview

HTML provides elements for displaying text on a webpage.

Two commonly used elements are:

- `<p>` (paragraph)
- `<span>` (inline container)

These elements help organize and control how text appears on a page.

---

# Paragraph Element

The **`<p>`** element is used to display **paragraphs of text**.

Paragraphs create **block-level content**, meaning they appear on their own line.

Example:
```Text
    <p>This is a paragraph.</p>
```
Structure:
```Text
    p
     └── text
```
Paragraph elements are used for:

- articles
- descriptions
- long sections of text
- general written content

---

# Span Element

The **`<span>`** element is used for **small pieces of inline text**.

It does not create a new line.

Instead, it highlights or separates **specific content within a line of text**.

Example:
```Text
    <span>Highlighted text</span>
```
Structure:
```Text
    span
     └── text
```
Spans are commonly used for:

- styling specific words
- identifying text segments
- applying CSS styles

---

# Example HTML

Example code:
```Text
    <div>
      <h1>Technology</h1>
    </div>

    <div>
      <p>
        <span>Self-driving cars</span>
        are anticipated to replace up to 2 million jobs over the next two decades.
      </p>
    </div>
```
---

# Structure Diagram

Hierarchy:
```Text
    body
     ├── div
     │    └── h1
     │         └── Technology
     │
     └── div
          └── p
               ├── span
               │    └── Self-driving cars
               └── remaining paragraph text
```
Breakdown:

- `div` → groups content
- `p` → contains paragraph text
- `span` → isolates a small piece of text

---

# Inline vs Block Elements

HTML elements behave differently depending on how they display.

### Block Elements

Block elements:

- take up the full width of a line
- start on a new line

Example:
```Text
    <div>
    <p>
    <h1>
```
Structure:
```Text
    block element
     └── new line content
```
---

### Inline Elements

Inline elements:

- remain on the same line
- only affect small pieces of content

Example:
```Text
    <span>
```
Structure:
```Text
    text text text
       span
        │
     styled text
```
---

# When to Use Each Element

`<p>` when:

- displaying paragraphs
- presenting large blocks of text

Example:
```Text
    <p>This article explains artificial intelligence.</p>
```
Use `<span>` when:

- targeting specific words
- styling part of a sentence
- isolating inline content

Example:
```Text
    <p>The term <span>AI</span> stands for Artificial Intelligence.</p>
```
---

# Div vs Span

Both `<div>` and `<span>` group content, but they behave differently.

Div:

- block-level element
- divides content into sections

Span:

- inline element
- targets small pieces of content within text

Example comparison:

Div structure:
```Text
    <div>
      paragraph
    </div>
```
Span structure:
```Text
    <p>
      sentence with
      <span>highlighted text</span>
    </p>
```
---

# Key Idea

Use the correct element based on the type of content:

- `<div>` → group large sections
- `<p>` → display paragraphs
- `<span>` → isolate small inline text

General pattern:
```Text
    <p>
      text with
      <span>specific highlighted content</span>
    </p>
```
