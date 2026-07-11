# HTML Tables — Table Headings

## Overview

Table data is difficult to understand without **labels** describing
what the data represents.

HTML provides the **table heading element**:

    <th>

The `<th>` element is used to create **titles for rows or columns**
in a table.

---

## The `<th>` Element

`<th>` stands for **table header**.

It functions similarly to `<td>`, but is used for **headings instead
of regular data**.

Structure:

    <th>Heading</th>

Important rule:

`<th>` elements must be placed **inside a `<tr>` element**.

---

## Example from the Lesson

Example HTML:
```Text
    <table>
      <tr>
        <th></th>
        <th scope="col">Saturday</th>
        <th scope="col">Sunday</th>
      </tr>
      <tr>
        <th scope="row">Temperature</th>
        <td>73</td>
        <td>81</td>
      </tr>
    </table>
```
---

## Structure Diagram

HTML hierarchy:
```Text
    table
     ├── tr
     │    ├── th
     │    ├── th
     │    └── th
     └── tr
          ├── th
          ├── td
          └── td
```
Expanded view:
```Text
    table
     ├── header row
     └── data row
```
---

## Visual Table Concept

Browser output:
```Text
    +-------------+----------+--------+
    |             | Saturday | Sunday |
    +-------------+----------+--------+
    | Temperature |   73     |   81   |
    +-------------+----------+--------+
```
Explanation:

- first row contains **column headings**
- second row contains **data values**

---

## Why a Blank `<th>` Exists

The first `<th>` is empty:

    <th></th>

This creates a **placeholder cell** so column headings align
correctly with the table data.

Structure:
```Text
    table
     ├── blank header
     ├── Saturday
     └── Sunday
```
---

## The `scope` Attribute

The `scope` attribute explains **what the heading describes**.

Structure:

    scope="value"

Possible values:

    row
    col

---

### Column Scope

Indicates that the heading describes a **column**.

Example:

    <th scope="col">Saturday</th>

Meaning:

    this heading applies to the column beneath it.

Diagram:
```Text
    Saturday
       │
       ▼
    column data
```
---

### Row Scope

Indicates that the heading describes a **row**.

Example:

    <th scope="row">Temperature</th>

Meaning:

    this heading applies to the row beside it.

Diagram:

    Temperature → row data

---

## Table Layout Concept

General structure:
```Text
    table
     ├── tr (header row)
     │    ├── th
     │    ├── th
     │    └── th
     └── tr (data row)
          ├── th
          ├── td
          └── td
```
---

## Key Pattern

Basic table with headings:
```Text
    <table>
      <tr>
        <th>Heading</th>
        <th>Heading</th>
      </tr>
      <tr>
        <td>Data</td>
        <td>Data</td>
      </tr>
    </table>
```
Hierarchy diagram:
```Text
    table
     ├── tr
     │    ├── th
     │    └── th
     └── tr
          ├── td
          └── td
```
