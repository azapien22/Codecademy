# Linking to Relative Pages

## Overview

So far we have learned how to create links to **external websites**.

Example:

    <a href="https://example.com">Visit Example</a>

However, many websites contain **multiple internal pages**, such as:

- Home
- About
- Contact

To connect these internal pages, we use **relative links**.

---

## Project Folder Structure

When building a static website, developers usually store HTML
files in a **project folder (root directory)**.

Example folder structure:
```Text
    project-folder/
     ├── about.html
     ├── contact.html
     └── index.html
```
Each HTML file represents a **different page of the website**.

---

## Linking Pages in the Same Folder

If HTML files are stored in the same folder, we can link
them using a **relative path**.

Example:

    <a href="./contact.html">Contact</a>

This creates a link from the current page to **contact.html**.

---

## What the `./` Means

The `./` symbol tells the browser:

    "Look for this file in the current folder."

Example:

    ./contact.html

Meaning:
```Text
    current folder
        └── contact.html
```
---

## Structure Diagram

Folder structure:
```Text
    project-folder
     ├── index.html
     ├── about.html
     └── contact.html
```
Example link inside `index.html`:

    <a href="./contact.html">Contact</a>

Navigation diagram:
```Text
    index.html
       |
       └── link → contact.html
```
---

## Relative Path vs Absolute Path

### Relative Path

Points to a file **within the same website**.

Example:

    <a href="./contact.html">Contact</a>

Structure:

    ./filename.html

Meaning:

    current folder → file

---

### Absolute Path

Points to a **full web address (URL)**.

Example:
```Text
    <a href="https://www.codecademy.com/learn/learn-html">
        Learn HTML
    </a>
```
Structure:

    https://domain/path/file

Meaning:

    internet location

---

## Example Website Navigation

Example navigation links:
```Text
    <a href="./index.html">Home</a>
    <a href="./about.html">About</a>
    <a href="./contact.html">Contact</a>
```
Hierarchy:
```Text
    index.html
     ├── link → about.html
     └── link → contact.html
```
---

## Browser Behavior

If the browser is currently viewing:

    index.html

and the user clicks:

    <a href="./contact.html">Contact</a>

the browser will open:

    contact.html

from the **same folder**.

---

## Key Pattern

Linking to another page in the same folder:

    <a href="./filename.html">Link Text</a>

Example:

    <a href="./contact.html">Contact</a>

Diagram:
```Text
    current page
        |
        └── ./filename.html
```
