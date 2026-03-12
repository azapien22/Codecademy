# HTML Images

## Overview

So far, many HTML elements have displayed **text content**, such as:
```Text
    <h1>  headings
    <p>   paragraphs
    <ul>  lists
    <span> inline text
```
However, webpages often include **non-text content**, such as images.

HTML provides the **image element**:
```Text
    <img>
```
This element allows images to appear on a webpage.

---

## The `<img>` Element

The `<img>` tag is used to **display images**.

Example:
```Text
    <img src="image-location.jpg" />
```
Unlike most HTML elements, `<img>` is a **self-closing tag**.

---

## Self-Closing Tags

Most HTML elements have:

    opening tag
    content
    closing tag

Example:
```Text
    <p>Paragraph text</p>
```
However, some elements are **self-closing** and do not contain content.

Example:
```Text
    <img src="image.jpg" />
```
Structure:
```Text
    img
     └── attribute
```
The closing slash `/` may appear at the end of the tag.

Example:
```Text
    <img src="image.jpg" />
    <img src="image.jpg">
```
Both versions work in modern browsers.

---

## The `src` Attribute

The `<img>` element requires an attribute called **src**.

`src` stands for **source**.

It tells the browser **where the image file is located**.

Example:
```Text
    <img src="image-location.jpg" />
```
Structure:
```Text
    img
     └── src="image-location.jpg"
```
---

## Image Source (URL)

The `src` attribute must contain the **location of the image file**.

This location is usually a **URL**.

A URL is the **address of a file on the internet or on a local system**.

Example:
```Text
    <img src="https://example.com/image.jpg" />
```
Example of a local file:
```Text
    <img src="images/photo.jpg" />
```
---

## Structure Diagram

HTML hierarchy:
```Text
    img
     └── src attribute
```
Example element:
```Text
    <img src="image-location.jpg" />
```
Breakdown:

    tag:        img
    attribute:  src
    value:      image-location.jpg

---

## Example Usage

Example HTML:
```Text
    <div>
        <img src="river.jpg" />
    </div>
```
Hierarchy:
```Text
    div
     └── img
```
Conceptual browser output:

    [ image displayed here ]

---

## Key Rules

1. `<img>` is a **self-closing tag**
2. It **requires the src attribute**
3. The `src` value must be a **valid file location**

Correct:
```Text
    <img src="photo.jpg" />
```
Incorrect:
```Text
    <img>
```
---

## Key Pattern

Typical image element structure:
```Text
    <img src="image-file.jpg" />
```
Diagram:
```Text
    img
     └── src="image-file.jpg"
```
