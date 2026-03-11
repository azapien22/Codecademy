# HTML Structure

## Overview

HTML documents are organized like a **family tree**.

Elements can contain other elements.  
When one element is placed inside another, it creates a **parent-child relationship**.

Example:

    <body>
      <p>This paragraph is a child of the body</p>
    </body>

In this example:

- `<body>` is the **parent**
- `<p>` is the **child**
- The `<p>` element is **nested** inside the `<body>` element

---

## Nesting

When an element is placed inside another element, it is called **nesting**.

Example:

    <body>
      <p>This paragraph is nested inside the body</p>
    </body>

Key idea:

Parent element
    contains child elements

Child element
    is nested inside the parent

Indentation is used to make this easier to read.

---

## HTML Hierarchy

HTML structure forms a **hierarchy**, similar to a family tree.

Example hierarchy:

```text
<body>
   |
   └── <p>
         This paragraph is a child of body
