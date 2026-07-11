# HTML Unordered Lists

## Overview

HTML allows developers to organize content in **lists**.

One common list type is the **unordered list**, which displays
items in **no specific order**.

Unordered lists typically display **bullet points** before each item.

The HTML element used to create an unordered list is:

    <ul>

---

## The `<ul>` Element

The `<ul>` element stands for **unordered list**.

It acts as a **container for list items**.

Example structure:
```Text
    <ul>
        list items go here
    </ul>
```
Important rule:

The `<ul>` element **cannot contain raw text directly**.

Instead, it must contain **list item elements**.

---

## The `<li>` Element

The `<li>` element stands for **list item**.

It is used to define **individual items inside a list**.

Example:
```Text
    <li>Item</li>
```
Structure:
```Text
    ul
     └── li
```
Each `<li>` represents **one item in the list**.

---

## Example from the Lesson

Example HTML:
```Text
    <ul>
      <li>Limes</li>
      <li>Tortillas</li>
      <li>Chicken</li>
    </ul>
```
---

## Structure Diagram

HTML hierarchy:
```Text
    ul
     ├── li  Limes
     ├── li  Tortillas
     └── li  Chicken
```
Breakdown:
```Text
    ul
     └── list items
            ├── li
            ├── li
            └── li
```
---

## Browser Output Concept

The webpage will display the list like this:

    • Limes
    • Tortillas
    • Chicken

Each list item receives a **bullet point automatically**.

---

## Key Rules

1. `<ul>` contains list items
2. `<li>` defines each list item
3. Raw text should not be placed directly inside `<ul>`

Correct:
```Text
    <ul>
        <li>Item</li>
    </ul>
```
Incorrect:
```Text
    <ul>
        Item
    </ul>
```
---

## Typical Usage

Unordered lists are often used for:

- grocery lists
- navigation menus
- feature lists
- bullet point summaries
- grouped information

Example:
```Text
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>
```
---

## Key Pattern

General unordered list structure:
```Text
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
```
Hierarchy diagram:
```Text
    ul
     ├── li
     ├── li
     └── li
```
