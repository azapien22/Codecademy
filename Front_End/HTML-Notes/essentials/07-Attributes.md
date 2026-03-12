# HTML Attributes

## Overview

HTML elements can be expanded using **attributes**.

Attributes provide **additional information** about an element or modify how the element behaves.

Attributes are placed **inside the opening tag** of an HTML element.

Example structure:

    <tag attribute="value">content</tag>

---

## Parts of an Attribute

An HTML attribute has two parts:

1. Attribute name
2. Attribute value

Structure:

    attribute="value"

Example:

    id="intro"

Diagram:
```Text
    attribute name = attribute value
           |               |
           v               v
         id="intro"
```
---

## Example with an Element

Example HTML:
```Text
    <div id="intro">
      <h1>Introduction</h1>
    </div>
```
Explanation:

- `<div>` → element
- `id` → attribute name
- `"intro"` → attribute value

The attribute provides extra information about the element.

---

## Structure Diagram

HTML structure:
```Text
    div (id="intro")
      └── h1
```
Code example:
```Text
    <div id="intro">
      <h1>Introduction</h1>
    </div>
```
Hierarchy:
```Text
    div
     └── h1
```
Attribute attached to:
```Text
    div → id="intro"
```
---

## The id Attribute

The **id attribute** is commonly used to identify specific elements on a webpage.

Example:
```Text
    <div id="intro">
```
Purpose of `id`:

- identify elements uniquely
- target elements with CSS
- access elements with JavaScript
- link to specific sections of a page

Example concept:
```Text
    <div id="header">
    <div id="content">
    <div id="footer">
```
Each id identifies a specific section of the page.

---

## Attribute Placement

Attributes are placed **inside the opening tag only**.

Correct:
```Text
    <div id="intro">
```
Incorrect:
```Text
    <div>
      id="intro"
    </div>
```
---

## General Attribute Pattern

Typical HTML structure with attributes:
```Text
    <tag attribute="value">
        content
    </tag>
```
Example:
```Text
    <div id="intro">
        <h1>Introduction</h1>
    </div>
```
---

## Multiple Attributes

An element can have **multiple attributes**.

Example:
```Text
    <div id="intro" class="section">
```
Structure:
```Text
    tag
     ├── attribute
     └── attribute
```
Example diagram:
```Text
    div
     ├── id="intro"
     └── class="section"
```
---

## Key Idea

Attributes allow developers to:

- add extra information to elements
- identify elements
- control styling
- enable JavaScript interactions

General pattern:
```Text
    <tag attribute="value">content</tag>
```
