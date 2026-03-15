# HTML Tables — Introduction

## Overview

Many websites display **structured data**, such as:

- stock prices
- sports scores
- invoices
- schedules
- statistics

This type of information is called **tabular data**.

Tabular data is best displayed using **tables**.

HTML provides the `<table>` element to organize data into
**rows and columns**.

---

## The `<table>` Element

The `<table>` element is used to display data in a
**two-dimensional structure**.

Structure:

    <table>
    </table>

A table organizes information using:

- rows
- columns
- cells

---

## Table Concept

A table consists of:

    rows
    columns
    cells

Example visual concept:
```Text
    +---------+---------+---------+
    |  Name   |  Score  |  Team   |
    +---------+---------+---------+
    |  Alex   |   25    |  Bears  |
    |  Sam    |   18    |  Lions  |
    +---------+---------+---------+
```
---

## Why Tables Are Useful

Tables help organize and display data clearly.

Common uses include:

- financial data
- sports statistics
- schedules
- product comparisons
- inventory lists

Example concept:
```Text
    table
     ├── row
     │    ├── cell
     │    ├── cell
     │    └── cell
     └── row
```
---

## Basic Table Structure

HTML tables will eventually include elements like:

    <table>
    <tr>
    <td>

Hierarchy diagram:
```Text
    table
     └── tr (table row)
          └── td (table data cell)
```
Example concept:
```Text
    table
     ├── row
     │    ├── cell
     │    ├── cell
     │    └── cell
     └── row
```
---

## Key Idea

Tables allow developers to present **structured data
in rows and columns**.

General pattern:
```Text
    <table>
        rows
            cells
    </table>
```
