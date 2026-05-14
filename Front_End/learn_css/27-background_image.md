# CSS — Background Image

## Overview

CSS allows elements to use images as backgrounds using:

    background-image

This property places an image behind the content
of an element.

---

## Basic Syntax
```text
    selector {
      background-image: url('image-path');
    }
```
Example:
```text
    .main-banner {
      background-image: url('https://www.example.com/image.jpg');
    }
```
---

## How It Works

HTML:

    <div class="main-banner"></div>

CSS:
```text
    .main-banner {
      background-image: url('image.jpg');
    }
```
Result:

    image appears behind the element

---

## Structure Diagram
```text
    element
     └── background-image
           └── url('image-path')
```
---

## The `url()` Function

The image source is provided using:

    url('path')

The path can be:

- external URL
- local project file

---

## External Image Example

    background-image: url('https://www.example.com/image.jpg');

Meaning:

    image loaded from another website

---

## Local Image Example

    background-image: url('images/mountains.jpg');

Meaning:

    image loaded from project folder

---

## Relative File Paths

Example project structure:

    project-folder/
     ├── index.html
     ├── style.css
     └── images/
          └── mountains.jpg

CSS:

    background-image: url('images/mountains.jpg');

---

## Visual Concept

    element
     ├── background image
     └── content displayed on top

---

## Common Use Cases

- banners
- hero sections
- page backgrounds
- cards and panels

---

## Example — Banner
```text
    .banner {
      background-image: url('images/banner.jpg');
    }
```
Result:

    banner section displays image background

---

## Important Notes

- image appears behind content
- element must have size to display background
- path must be correct

---

## Key Pattern

    background-image: url('path');

Examples:

    background-image: url('image.jpg');
    background-image: url('images/mountains.jpg');

---

## Key Idea

The `background-image` property places an image
behind an element’s content.
