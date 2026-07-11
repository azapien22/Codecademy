# HTML Tables — Table Borders

## Overview

Tables without borders can be difficult to read because the
rows and columns blend together.

Borders help visually separate **cells, rows, and columns**.

Modern web development uses **CSS** to add borders to tables.

---

## Old HTML Method (Deprecated)

Older versions of HTML used the **border attribute** to add borders.

Example:
```Text
    <table border="1">
      <tr>
        <td>73</td>
        <td>81</td>
      </tr>
    </table>
```
Explanation:

- `border="1"` sets the border thickness
- the number represents the width of the border

Example concept:

    border="1" → thin border
    border="2" → thicker border

---

## Why This Method Is Deprecated

The `border` attribute is **deprecated**.

Deprecated means:

    outdated and no longer recommended.

Although browsers may still support it, developers should **not use it
in modern HTML**.

---

## Modern Approach — Using CSS

Instead of styling tables in HTML, developers use **CSS**.

This keeps **structure and design separate**.

Example CSS:
```Text
    table, td {
        border: 1px solid black;
    }
```
Explanation:

- `table` → adds border to the table
- `td` → adds borders to table cells
- `1px` → border thickness
- `solid` → border style
- `black` → border color

---

## Structure Diagram

HTML table structure:
```Text
    table
     └── tr
          ├── td
          └── td
```
Rendered concept with borders:
```Text
    +----+----+
    | 73 | 81 |
    +----+----+
```
---

## Separation of Responsibilities

Modern web development separates:

    HTML → structure
    CSS  → styling

Concept diagram:
```Text
    HTML
     └── table structure

    CSS
     └── visual design
```
---

## Example Combining HTML and CSS

HTML:
```Text
    <table>
      <tr>
        <td>73</td>
        <td>81</td>
      </tr>
    </table>
```
CSS:
```Text
    table, td {
      border: 1px solid black;
    }
```
Result:
```Text
    +----+----+
    | 73 | 81 |
    +----+----+
```
---

## Key Idea

Do **not use the HTML `border` attribute**.

Instead, style tables with **CSS**.

Pattern:
```Text
    table, td {
        border: 1px solid black;
    }
```
