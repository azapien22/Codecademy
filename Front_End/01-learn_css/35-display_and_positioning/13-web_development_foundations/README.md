# Project — Broadway

## Project Overview

In this project, you will use **CSS Display and Positioning** properties to improve the layout of the landing page for a fictional design company called **Broadway Design**.

The HTML structure and basic CSS have already been provided. Your job is to modify the existing CSS to create a cleaner, more professional layout.

---

# Skills Practiced

Throughout this project, you will work with:

- position
- fixed positioning
- relative positioning
- z-index
- top offset
- width
- height
- display
- inline-block

---

# Learning Objectives

By completing this project you will learn how to:

- Create a fixed navigation bar
- Keep content from hiding behind fixed elements
- Layer elements using z-index
- Position elements relative to one another
- Display elements horizontally
- Create equally-sized content columns

---

# Project Files

## index.html

Contains:

- Header
- Navigation
- Main content
- Supporting sections
- Footer

Use this file to identify:

- Classes
- IDs
- HTML structure

---

## style.css

Contains:

- Existing rule sets
- Placeholder styles

Most work will be done by adding declarations to existing selectors.

---

# Tasks

## 1. Fix the Header

The header currently scrolls with the page.

Change its position so it remains visible at the top while scrolling.

CSS:

    header {
        position: fixed;
    }

Result:

✔ Navigation stays visible.

---

## 2. Stretch the Header

After fixing the header, it shrinks.

Make it span the full width of its parent.

CSS:

    header {
        width: 100%;
    }

Result:

✔ Navigation spans the page.

---

## 3. Horizontal Navigation

Navigation list items currently display vertically.

Change their display so they appear horizontally while still allowing custom dimensions.

CSS:

    nav li {
        display: inline-block;
    }

Result:

Home   About   Contact

---

## 4. Set Navigation Width

Each navigation item should have equal width.

CSS:

    nav li {
        width: 80px;
    }

Result:

Uniform navigation spacing.

---

## 5. Position Main

After fixing the header, the rest of the page shifts upward.

Allow the main content to be repositioned.

CSS:

    main {
        position: relative;
    }

Result:

Main content can now use offset properties.

---

## 6. Bring Header Forward

The header disappears behind the main content.

Use:

    z-index

to move it forward.

CSS:

    header {
        z-index: 10;
    }

Result:

✔ Header remains visible.

---

## 7. Offset Main

The fixed header blocks the page title.

Move the main content downward.

CSS:

    main {
        top: 80px;
    }

Result:

Main content begins below the navigation bar.

---

## 8. Supporting Columns

The supporting sections should appear beside one another.

Modify:

    .supporting .col

CSS:

    display: inline-block;

Result:

Three columns display horizontally.

---

## 9. Set Column Size

The supporting columns still have no defined dimensions.

CSS:

    width: 200px;
    height: 200px;

Result:

Uniform content boxes.

---

## 10. Bonus Challenge

Make the footer remain visible at the bottom of the browser window.

Hint:

Use:

    position: fixed;

and

    bottom: 0;

Example:

    footer {
        position: fixed;
        bottom: 0;
        width: 100%;
    }

---

# CSS Properties Used

## Position

    fixed

Keeps an element attached to the browser window.

---

    relative

Allows offsets using:

    top
    left
    right
    bottom

---

# Display

    inline-block

Allows:

✔ Horizontal layout

✔ Custom width

✔ Custom height

---

# Width

Used for:

- Navigation items
- Header
- Supporting columns

---

# Height

Used for:

Supporting columns

---

# z-index

Controls stacking order.

Higher values appear in front.

Example:

    z-index: 10;

---

# top

Offsets relatively positioned elements.

Example:

    top: 80px;

Moves content down 80 pixels.

---

# Project Workflow

1. Fix the header.
2. Expand header width.
3. Align navigation horizontally.
4. Size navigation items.
5. Position main relatively.
6. Bring header to the front.
7. Offset main below the header.
8. Display supporting columns horizontally.
9. Set equal column dimensions.
10. (Optional) Fix the footer.

---

# Concepts Reinforced

This project reinforces:

- Fixed Positioning
- Relative Positioning
- z-index
- Display
- Inline-Block
- Width
- Height
- Offsets

These concepts work together to create responsive layouts.

---

# Real-World Applications

The techniques used in this project appear on nearly every professional website.

Examples include:

- Sticky navigation bars
- Fixed headers
- Dashboard layouts
- Landing pages
- Product grids
- Card layouts
- Responsive menus

---

# Key Takeaways

By completing **Broadway**, you practice combining multiple CSS layout concepts into one project.

You should now understand how to:

- Build a fixed navigation bar.
- Prevent content from hiding behind fixed elements.
- Use `z-index` to control stacking order.
- Offset elements using relative positioning.
- Display elements horizontally with `inline-block`.
- Create equal-sized columns for clean page layouts.

This project is an excellent bridge between basic CSS and more advanced layout systems like **Flexbox** and **CSS Grid**, which you will learn next.
