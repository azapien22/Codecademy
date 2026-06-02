# Project Notes — Healthy Recipes

## Project Overview

Project:

    Healthy Recipes

Goal:

    Use CSS selectors to style an existing recipe webpage.

Concepts Practiced:

- Type Selectors
- Class Selectors
- ID Selectors
- Descendant Selectors
- Chaining Selectors
- Multiple Selectors
- Font Styling

---

# Task 1 — Resize Image

## Objective

Make the recipe image smaller.

## CSS Selector

Type Selector:

    img

## CSS
```text
    img {
      height: 150px;
    }
```
## Result

- image height becomes 150 pixels
- image appears smaller

---

# Task 2 — Increase Description Font Size

## Objective

Make recipe description easier to read.

## CSS Selector

Class Selector:

    .description

## CSS
```text
    .description {
      font-size: 20px;
    }
```
## Result

- larger description text
- improved readability

---

# Task 3 — Style Cooking Time

## Objective

Emphasize cooking time.

## CSS Selector

ID Selector:

    #cook-time

## CSS
```text
    #cook-time {
      font-weight: bold;
    }
```
## Result

- cooking time appears bold

---

# Task 4 — Change Ingredient Bullets

## Objective

Use square bullets instead of circles.

## HTML Structure
```text
    .ingredients
      └── li
```
## CSS Selector

Descendant Selector:

    .ingredients li

## CSS
```text
    .ingredients li {
      list-style: square;
    }
```
## Result

- ingredient bullets become squares

---

# Task 5 — Style Preparation Times

## Objective

Make preparation times gray.

## CSS Selector

Chaining Selector:

    p.time

## CSS
```text
    p.time {
      color: gray;
    }
```
## Result

- only paragraph elements with class="time" become gray

---

# Task 6 — Style External Link

## Objective

Change recipe citation link color.

## HTML Structure
```text
    .citation
      └── a.external-link
```
## CSS Selector

Class Selector:

    .external-link

## CSS
```text
    .external-link {
      color: SeaGreen;
    }
```
## Result

- recipe link appears SeaGreen

---

# Task 7 — Change Font Family

## Objective

Apply Helvetica font to all text elements.

## CSS Selector

Multiple Selectors:

    h1,
    h2,
    p,
    li

## CSS
```text
    h1,
    h2,
    p,
    li {
      font-family: Helvetica;
    }
```
## Result

- all headings, paragraphs, and list items use Helvetica

---

# Selectors Used Review

## Type Selector

    img

Targets:

    all image elements

---

## Class Selector

    .description

Targets:

    elements with class="description"

---

## ID Selector

    #cook-time

Targets:

    element with id="cook-time"

---

## Descendant Selector

    .ingredients li

Targets:

    li elements inside .ingredients

---

## Chaining Selector

    p.time

Targets:

    paragraph elements that also have class="time"

---

## Multiple Selectors

    h1,
    h2,
    p,
    li

Targets:

    all listed elements

---

# Final CSS
```text
    img {
      height: 150px;
    }

    .description {
      font-size: 20px;
    }

    #cook-time {
      font-weight: bold;
    }

    .ingredients li {
      list-style: square;
    }

    p.time {
      color: gray;
    }

    .external-link {
      color: SeaGreen;
    }

    h1,
    h2,
    p,
    li {
      font-family: Helvetica;
    }
```
---

# Key Takeaways

This project demonstrated:

    Type Selectors
    Class Selectors
    ID Selectors
    Descendant Selectors
    Chaining Selectors
    Multiple Selectors
    Font Styling
    Text Styling
    List Styling

These are foundational CSS techniques used in virtually every website.
