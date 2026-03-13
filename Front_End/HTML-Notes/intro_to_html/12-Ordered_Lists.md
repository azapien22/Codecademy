# HTML Ordered Lists

## Overview

Ordered lists display items in a **specific order**.

Each list item appears with a **number**.

Ordered lists are useful when the order of items matters, such as:

- steps in a process
- instructions
- rankings
- procedures

The HTML element used to create an ordered list is:

    <ol>

---

## The `<ol>` Element

The `<ol>` element stands for **ordered list**.

It acts as a **container for list items**.

Example structure:
```Text
    <ol>
        list items go here
    </ol>
```
The `<ol>` element must contain **list item elements**.

---

## The `<li>` Element

The `<li>` element stands for **list item**.

Each `<li>` represents **one item in the list**.

Example:
```Text
    <li>Step</li>
```
Structure:
```Text
    ol
     └── li
```
---

## Example from the Lesson

Example HTML:
```Text
    <ol>
      <li>Preheat the oven to 350 degrees.</li>
      <li>Mix whole wheat flour, baking soda, and salt.</li>
      <li>Cream the butter and sugar in a separate bowl.</li>
      <li>Add eggs and vanilla extract to the bowl.</li>
    </ol>
```
---

## Structure Diagram

HTML hierarchy:
```Text
    ol
     ├── li  Preheat the oven to 350 degrees
     ├── li  Mix whole wheat flour, baking soda, and salt
     ├── li  Cream the butter and sugar in a separate bowl
     └── li  Add eggs and vanilla extract to the bowl
```
General structure:
```Text
    ol
     └── list items
            ├── li
            ├── li
            ├── li
            └── li
```
---

## Browser Output Concept

The webpage will display the list like this:

    1. Preheat the oven to 350 degrees.
    2. Mix whole wheat flour, baking soda, and salt.
    3. Cream the butter and sugar in a separate bowl.
    4. Add eggs and vanilla extract to the bowl.

Each item automatically receives a **number**.

---

## Key Rules

1. `<ol>` contains list items
2. `<li>` defines each step or item
3. List items appear in **numbered order**

Correct:
```Text
    <ol>
        <li>Step one</li>
        <li>Step two</li>
    </ol>
```
Incorrect:
```Text
    <ol>
        Step one
    </ol>
```
---

## Typical Usage

Ordered lists are commonly used for:

- cooking instructions
- tutorials
- step-by-step guides
- rankings
- procedures

Example:
```Text
    <ol>
        <li>Install software</li>
        <li>Create a project</li>
        <li>Write code</li>
        <li>Run the program</li>
    </ol>
```
---

## Key Pattern

General ordered list structure:
```Text
    <ol>
        <li>Step 1</li>
        <li>Step 2</li>
        <li>Step 3</li>
    </ol>
```
Hierarchy diagram:
```Text
    ol
     ├── li
     ├── li
     └── li
```
