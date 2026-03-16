# HTML Tables — Table Rows

## Overview

After creating a table using the `<table>` element, the next step
is to add **rows**.

Rows organize data horizontally across the table.

HTML uses the **table row element**:

    <tr>

Each `<tr>` represents one **row of the table**.

---

## The `<tr>` Element

The `<tr>` element stands for **table row**.

Structure:

    <tr>
    </tr>

Rows must always be placed **inside a `<table>` element**.

---

## Example from the Lesson

Example HTML:
```Text
    <table>
      <tr>
      </tr>
      <tr>
      </tr>
    </table>
```
Explanation:

- the `<table>` element creates the table container
- two `<tr>` elements create **two rows**

---

## Structure Diagram

HTML hierarchy:
```Text
    table
     ├── tr
     └── tr
```
Expanded concept:
```Text
    table
     ├── row 1
     └── row 2
```
ASCII diagram:
```Text
    +-----------+
    |   Row 1   |
    +-----------+
    |   Row 2   |
    +-----------+
```
---

## Role of Table Rows

Table rows are used to organize data **horizontally**.

Example concept:

    row 1 → first set of data
    row 2 → second set of data
    row 3 → third set of data

Each row will later contain **cells**.

---

## Future Table Structure

Rows will contain **table data cells** (`<td>`).

Example concept:
```Text
    table
     └── tr
          ├── td
          ├── td
          └── td
```
Visual structure:
```Text
    +-------+-------+-------+
    | cell  | cell  | cell  |
    +-------+-------+-------+
```
---

## Key Pattern

Basic table with rows:
```Text
    <table>
      <tr></tr>
      <tr></tr>
    </table>
```
Hierarchy diagram:
```Text
    table
     ├── tr
     └── tr
```
