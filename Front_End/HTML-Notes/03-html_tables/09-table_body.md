# HTML Tables — Table Body (<tbody>)

## Overview

As tables grow larger, they can become difficult to manage and read.

To improve organization, HTML allows tables to be divided into sections.

One of these sections is the **table body**:

    <tbody>

---

## The `<tbody>` Element

The `<tbody>` element groups the **main data** of a table.

Structure:
```Text
    <table>
      <tbody>
        table rows and data
      </tbody>
    </table>
```
---

## Purpose of `<tbody>`

`<tbody>` is used to:

- organize large tables
- group table data
- separate data from headings (best practice)
- improve readability and structure

---

## Example from the Lesson

HTML:
```Text
    <table>
      <tbody>
        <tr>
          <th></th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        <tr>
          <th>Morning</th>
          <td rowspan="2">Work</td>
          <td rowspan="3">Relax</td>
        </tr>
        <tr>
          <th>Afternoon</th>
        </tr>
        <tr>
          <th>Evening</th>
          <td>Dinner</td>
        </tr>
      </tbody>
    </table>
```
---

## Structure Diagram

HTML hierarchy:
```Text
    table
     └── tbody
          ├── tr (row)
          ├── tr (row)
          ├── tr (row)
          └── tr (row)
```
Expanded:
```Text
    table
     └── tbody
          └── rows
               └── cells
```
---

## Visual Concept
```Text
    table
     └── tbody
          ├── row
          ├── row
          └── row
```
---

## Important Note

In this example:

- `<th>` elements (headings) are still inside `<tbody>`

However:

    best practice → place headings inside <thead>

(This will be introduced in the next lesson.)

---

## Why `<tbody>` Matters

Benefits:

- improves structure of large tables
- helps separate data logically
- makes styling easier with CSS
- improves maintainability

---

## Table Sectioning Concept

Full table structure (preview):
```Text
    table
     ├── thead   (headings)
     ├── tbody   (main data)
     └── tfoot   (footer)
```
---

## Key Pattern

Basic usage:
```Text
    <table>
      <tbody>
        <tr>
          <td>Data</td>
        </tr>
      </tbody>
    </table>
```
Hierarchy:
```Text
    table
     └── tbody
          └── tr
               └── td
```
