# HTML Tables — Table Data

## Overview

Rows alone are not enough to store data in a table.

To place actual data inside a table row, HTML uses the
**table data element**:

    <td>

Each `<td>` element represents a **cell of data** inside a row.

---

## The `<td>` Element

The `<td>` element stands for **table data**.

It is used to define a **cell containing data**.

Structure:

    <td>data</td>

The `<td>` element must be placed **inside a `<tr>` element**.

---

## Example from the Lesson

Example HTML:
```Text
    <table>
      <tr>
        <td>73</td>
        <td>81</td>
      </tr>
    </table>
```
Explanation:

- `<table>` creates the table container
- `<tr>` creates one row
- `<td>` elements create cells within the row

---

## Structure Diagram

HTML hierarchy:
```Text
    table
     └── tr
          ├── td  73
          └── td  81
```
Expanded view:
```Text
    table
     └── row
          ├── cell
          └── cell
```
---

## Browser Output Concept

The table would display:
```Text
    +----+----+
    | 73 | 81 |
    +----+----+
```
This creates:

- 1 row
- 2 columns
- 2 data cells

---

## Table Layout Concept

Each `<td>` adds a **new column within the row**.

Example concept:
```Text
    row
     ├── column 1
     ├── column 2
     └── column 3
```
Example HTML:
```Text
    <tr>
        <td>A</td>
        <td>B</td>
        <td>C</td>
    </tr>
```
---

## Complete Table Pattern

Basic table structure:
```Text
    <table>
      <tr>
        <td>data</td>
        <td>data</td>
      </tr>
    </table>
```
Hierarchy diagram:
```Text
    table
     └── tr
          ├── td
          └── td
```
