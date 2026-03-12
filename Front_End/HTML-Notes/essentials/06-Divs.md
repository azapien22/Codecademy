# HTML Divs

## Overview

One of the most commonly used HTML elements is the **div element**.

`div` stands for **division**.

A `<div>` is a **container element** used to group sections of HTML together.

Divs help organize webpage content into logical sections.

---

## Basic Div Example

Example HTML:
```Text
    <body>
      <div>
        <h1>Why use divs?</h1>
        <p>Great for grouping elements!</p>
      </div>
    </body>
```
Explanation:

- `<div>` groups the heading and paragraph together
- Both elements belong to the same container

---

## Structure Diagram

HTML structure:
```Text
    body
     └── div
          ├── h1
          └── p
```
Example breakdown:
```Text
    <body>
      <div>
        <h1>Why use divs?</h1>
        <p>Great for grouping elements!</p>
      </div>
    </body>
```
Hierarchy diagram:
```Text
    body
     └─ div
         ├─ h1  Why use divs?
         └─ p   Great for grouping elements!
```
---

## What Divs Do

Divs are used to:

- group related HTML elements
- divide a webpage into sections
- organize page layout
- apply styling to groups of elements

---

## Visual Behavior

A `<div>` **does not automatically display anything visually**.

It simply acts as a **container**.

Example:
```Text
    <div>
        content here
    </div>
```
Without CSS styling, it is invisible on the page.

---

## Styling Divs

Divs are commonly used to apply **CSS styles** to groups of elements.

Example concept:
```Text
    <div>
        multiple elements
    </div>
```
CSS can then style:

- the entire div
- everything inside the div

Example layout concept:
```Text
    div
     ├── heading
     ├── paragraph
     └── image
```
All elements can share the same styling.

---

## What Can Go Inside a Div

Divs can contain many types of HTML content:

- text
- headings
- paragraphs
- links
- images
- videos
- buttons
- lists
- other divs

Example:
```Text
    <div>
      <h1>My Website</h1>
      <p>Welcome to my page.</p>
      <img src="photo.jpg">
      <a href="#">Click here</a>
    </div>
```
---

## Nesting Divs

Divs can also be nested inside other divs.

Example:
```Text
    <div>
        <div>
            <p>Nested content</p>
        </div>
    </div>
```
Hierarchy:
```Text
    div
     └── div
          └── p
```
---

## Indentation Best Practice

Indent nested elements for readability.

Example:
```Text
    <div>
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
```
Recommended indentation:

- two spaces per level

Example structure:
```Text
    parent
      child
        grandchild
```
---

## Key Idea

Divs are **structural containers** used to organize HTML.

They allow developers to:

- group elements
- structure layouts
- apply shared styling
- improve code organization

General pattern:
```Text
    <div>
        grouped content
    </div>
```
