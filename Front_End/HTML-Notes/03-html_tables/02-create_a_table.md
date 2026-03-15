# HTML Tables — Creating a Table

## Overview

Before displaying data in rows and columns, we must first create
the **table container**.

HTML provides the `<table>` element to define a table.

The `<table>` element holds **all tabular data**.

---

## The `<table>` Element

The `<table>` element is used to create a **table structure**.

Structure:
```Text
    <table>

    </table>
```
Anything placed inside the `<table>` element becomes part
of the table.

---

## Example Table Container

Example HTML:
```Text
    <table>

    </table>
```
At this stage the table is **empty**, because no rows
or data cells have been added yet.

---

## Structure Diagram

HTML hierarchy:

    table

Expanded structure:
```Text
    table
     └── table content (rows and cells)
```
Future structure concept:
```Text
    table
     ├── row
     │    ├── cell
     │    ├── cell
     │    └── cell
     └── row
```
---

## Role of the `<table>` Element

The `<table>` element acts as the **container for tabular data**.

Inside the table we will later add:

- table rows (`<tr>`)
- table data cells (`<td>`)
- table headers (`<th>`)

Example concept:
```Text
    table
     └── rows
          └── cells
```
---

## Key Idea

The `<table>` element defines the **structure that holds tabular data**.

General pattern:
```Text
    <table>
        table rows and cells
    </table>
```
