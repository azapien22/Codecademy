# HTML Tables — Spanning Rows

## Overview

Sometimes table data needs to cover **multiple rows**.

Example use cases:

- events spanning multiple hours
- schedules covering multiple time blocks
- grouped row data
- repeated values across rows

HTML allows cells to span vertically using the
`rowspan` attribute.

---

## The `rowspan` Attribute

`rowspan` allows a cell to extend across **two or more rows**.

Structure:

    <td rowspan="number">content</td>

Rules:

- value must be an **integer**
- value must be **1 or greater**

Example:

    <td rowspan="2">Work</td>

Meaning:

    this cell spans **2 rows**

---

## Example from the Lesson

HTML:
```Text
    <table>
      <tr> <!-- Row 1 -->
        <th></th>
        <th>Saturday</th>
        <th>Sunday</th>
      </tr>
      <tr> <!-- Row 2 -->
        <th>Morning</th>
        <td rowspan="2">Work</td>
        <td rowspan="3">Relax</td>
      </tr>
      <tr> <!-- Row 3 -->
        <th>Afternoon</th>
      </tr>
      <tr> <!-- Row 4 -->
        <th>Evening</th>
        <td>Dinner</td>
      </tr>
    </table>
```
---

## Structure Diagram

HTML hierarchy:
```Text
    table
     ├── tr (header row)
     │    ├── th
     │    ├── th Saturday
     │    └── th Sunday
     ├── tr (Morning)
     │    ├── th
     │    ├── td rowspan="2"  Work
     │    └── td rowspan="3"  Relax
     ├── tr (Afternoon)
     │    └── th
     └── tr (Evening)
          ├── th
          └── td Dinner
```
---

## Visual Table Concept

Rendered table:
```Text
    +----------+----------+--------+
    |          | Saturday | Sunday |
    +----------+----------+--------+
    | Morning  |  Work    | Relax  |
    +----------+          |        |
    | Afternoon          |        |
    +----------+----------+        |
    | Evening  | Dinner   |        |
    +----------+----------+--------+
```
Explanation:

- **Work** spans 2 rows (Morning + Afternoon)
- **Relax** spans 3 rows (Morning + Afternoon + Evening)
- some cells are omitted because rowspan fills that space

---

## How `rowspan` Works

Without rowspan:
```Text
    +----+----+
    | A  | B  |
    +----+----+
    | C  | D  |
    +----+----+
```
With `rowspan="2"`:
```Text
    +----+----+
    | A  | B  |
    |    +----+
    |    | D  |
    +----+----+
```
The first cell now covers **two rows vertically**.

---

## Table Layout Concept

General structure:
```Text
    table
     ├── tr
     │    ├── td rowspan="2"
     │    └── td
     └── tr
          └── td
```
Example HTML:

    <td rowspan="3">Relax</td>

Meaning:

    this cell spans **three rows**

---

## Key Pattern

Spanning rows:

    <td rowspan="number">Content</td>

Example:

    <td rowspan="2">Work</td>

Hierarchy diagram:
```Text
    tr
     ├── td rowspan="2"
     └── td
```
