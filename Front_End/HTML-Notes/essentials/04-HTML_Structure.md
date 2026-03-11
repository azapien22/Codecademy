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

Structure:
           body
            └── p
body → parent

p → child

Multiple Levels of Nesting

HTML elements can have multiple generations:

Parent

Child

Grandchild

Great-grandchild

Example:

<body>
  <div>
    <p>Hello</p>
  </div>
</body>

Hierarchy diagram:
body
 └── div
      └── p

Relationships:

body = parent of div

div = child of body

p = child of div

p = grandchild of body

Example with Multiple Elements

Example HTML:

<body>
  <div>
    <h1>Sibling to p, but also grandchild of body</h1>
    <p>Sibling to h1, but also grandchild of body</p>
  </div>
</body>

Hierarchy diagram:

body
 └── div
      ├── h1
      └── p

Relationships:

body → parent of div

div → child of body

h1 → child of div

p → child of div

Because h1 and p share the same parent (div), they are siblings.

Sibling Elements

Sibling elements are elements that share the same parent.

Example:

div
 ├── h1
 └── p

Here:

h1 and p are siblings

Both are children of div

Key Vocabulary
Parent

An element that contains other elements.

Example:

<body>

Child

An element inside another element.

Example:

<p>

Sibling

Elements that share the same parent.

Example:

<h1> and <p>

Descendant

Any element inside another element.

Example:

body
 └── div
      └── p

p is a descendant of body.

Why HTML Structure Matters

HTML hierarchy is important because:

Structure controls how content is organized

Child elements can inherit styles from parents

CSS styling often depends on element hierarchy

JavaScript often interacts with elements based on structure

You will see this used heavily when learning CSS and DOM manipulation.

Key Pattern

HTML structure often looks like this:

parent
 ├── child
 ├── child
 │    └── grandchild
 └── child

 Example:

 <body>
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
</body>
