# HTML Tables — Table Head (<thead>)

## Overview

When a table is divided into sections, it is best practice to
separate the **column headings** from the main data.

HTML provides the `<thead>` element for this purpose.

---

## The `<thead>` Element

The `<thead>` element is used to group **table column headings**.

Structure:
```text
    <table>
      <thead>
        table header rows
      </thead>
    </table>
```
Important:

- `<thead>` contains **column headings only**
- it must include a `<tr>` (table row)

---

## Example from the Lesson

HTML:
```Text
    <table>
      <thead>
        <tr>
          <th></th>
          <th scope="col">Saturday</th>
          <th scope="col">Sunday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Morning</th>
          <td rowspan="2">Work</td>
          <td rowspan="3">Relax</td>
        </tr>
        <tr>
          <th scope="row">Afternoon</th>
        </tr>
        <tr>
          <th scope="row">Evening</th>
          <td>Dinner</td>
        </tr>
      </tbody>
    </table>
```
---

## Structure Diagram

HTML hierarchy:
```text
    table
     ├── thead
     │    └── tr
     │         ├── th
     │         ├── th
     │         └── th
     └── tbody
          ├── tr
          ├── tr
          └── tr
```
---

## Visual Table Concept
```Text
    +----------+----------+--------+
    |          | Saturday | Sunday |
    +----------+----------+--------+
    | Morning  |  Work    | Relax  |
    | Afternoon|          |        |
    | Evening  | Dinner   |        |
    +----------+----------+--------+
```
---

## Role of `<thead>`

`<thead>` is used to:

- separate column headings from data
- improve readability
- organize table structure
- help browsers and screen readers

---

## The `scope` Attribute

The `scope` attribute defines what a `<th>` applies to.

### Column Headings

    <th scope="col">Saturday</th>

Meaning:

    applies to the column below

Diagram:
```text
    Saturday
       │
       ▼
    column data
```
---

### Row Headings

    <th scope="row">Morning</th>

Meaning:

    applies to the row beside it

Diagram:

    Morning → row data

---

## Table Sectioning Concept

Complete table structure:
```Text
    table
     ├── thead   (column headings)
     ├── tbody   (main data)
     └── tfoot   (footer, optional)
```
---

## Key Pattern

Basic usage:
```Text
    <table>
      <thead>
        <tr>
          <th>Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Data</td>
        </tr>
      </tbody>
    </table>
```
Hierarchy:
```text
    table
     ├── thead
     │    └── tr
     └── tbody
          └── tr
               └── td
```
