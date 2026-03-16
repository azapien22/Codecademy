# HTML Tables — Spanning Columns

## Overview

Sometimes table data needs to cover **multiple columns**.

Example use cases:

- calendar events spanning multiple days
- schedules covering multiple hours
- labels covering several columns
- grouped data

HTML allows cells to span across multiple columns using the
`colspan` attribute.

---

## The `colspan` Attribute

`colspan` allows a cell to extend across **two or more columns**.

Structure:

    <td colspan="number">content</td>

Rules:

- value must be an **integer**
- value must be **1 or greater**

Example:

    <td colspan="2">Event</td>

Meaning:

    this cell spans **2 columns**

---

## Example from the Lesson

HTML:
```Text
    <table>
      <tr>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
      </tr>
      <tr>
        <td colspan="2">Out of Town</td>
        <td>Back in Town</td>
      </tr>
    </table>
```
---

## Structure Diagram

HTML hierarchy:
```Text
    table
     ├── tr
     │    ├── th Monday
     │    ├── th Tuesday
     │    └── th Wednesday
     └── tr
          ├── td colspan="2"
          └── td
```
---

## Visual Table Concept

Rendered table:
```Text
    +-----------+-----------+-------------+
    | Monday    | Tuesday   | Wednesday   |
    +-----------+-----------+-------------+
    | Out of Town           | Back in Town|
    +-----------------------+-------------+
```
Explanation:

- **Out of Town** spans Monday and Tuesday
- **Back in Town** appears under Wednesday

---

## How `colspan` Works

Without colspan:
```Text
    +----+----+----+
    | A  | B  | C  |
    +----+----+----+
```
With `colspan="2"`:
```Text
    +---------+----+
    |    A    | C  |
    +---------+----+
```
The first cell now covers **two columns**.

---

## Table Layout Concept

General structure:
```Text
    table
     └── tr
          ├── td colspan="2"
          └── td
```
Example HTML:
```Text
    <tr>
      <td colspan="3">Meeting</td>
    </tr>
```
Meaning:

    one cell spans **three columns**.

---

## Key Pattern

Spanning columns:

    <td colspan="number">Content</td>

Example:

    <td colspan="2">Out of Town</td>

Hierarchy diagram:
```Text
    tr
     ├── td colspan="2"
     └── td
```
