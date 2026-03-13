# HTM Image Alt Attribute

## Overview

A key part of good web development is **accessibility**.

Websites should be usable by people of all backgrounds, including users who rely on **assistive technologies** such as screen readers.

To support accessibility, HTML provides the **alt attribute** for images.

---

## The `alt` Attribute

`alt` stands for **alternative text**.

The `alt` attribute provides a **text description of an image**.

Example:
```Text
    <img src="#" alt="A field of yellow sunflowers" />
```
Structure:
```Text
    img
     ├── src="image location"
     └── alt="image description"
```
---

## Example Image Element

Example HTML:
```Text
    <img src="#" alt="A field of yellow sunflowers" />
```
Breakdown:

    tag:        img
    attribute:  src
    attribute:  alt

Diagram:
```Text
    img
     ├── src
     └── alt
```
The `alt` value should describe **what the image shows**.

---

## Why the `alt` Attribute is Important

The `alt` attribute serves several important purposes.

### 1. Accessibility

Screen readers used by visually impaired users read the **alt description** aloud.

Example:
```Text
    <img src="sunflowers.jpg" alt="A field of yellow sunflowers">
```
Screen reader output concept:

    "Image: A field of yellow sunflowers"

---

### 2. Image Loading Failures

If an image fails to load, the browser may display the **alt text** instead.

Example concept:

    [image failed to load]

    A field of yellow sunflowers

This allows users to understand what the image was meant to show.

---

### 3. Search Engine Optimization (SEO)

Search engines cannot see images.

They rely on **alt descriptions** to understand image content.

Good alt text can help improve:

- search rankings
- website visibility
- content indexing

---

## When to Leave `alt` Empty

If an image **does not convey meaningful information**, the alt attribute should be empty.

Example:
```Text
    <img src="decorative-line.png" alt="">
```
This tells assistive technologies that the image is **decorative only**.

---

## Best Practices for Alt Text

Good alt descriptions should be:

- clear
- concise
- descriptive

Example:

Good:

    alt="Golden retriever playing in the snow"

Bad:

    alt="dog"

---

## Key Pattern

Typical image element with accessibility support:
```Text
    <img src="image.jpg" alt="description of image">
```
Diagram:
```Text
    img
     ├── src="image location"
     └── alt="image description"
```
