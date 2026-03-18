# HTML Tables — Table Footer <tfoot>

## Overview

Large tables often include summary information at the bottom.

HTML provides the `<tfoot>` element to define the **footer section**
of a table.

---

## The `<tfoot>` Element

The `<tfoot>` element is used to group **summary data** at the bottom
of a table.

Structure:
```text
    <table>
      <tfoot>
        table footer rows
      </tfoot>
    </table>
```
---

## Purpose of `<tfoot>`

`<tfoot>` is commonly used to display:

- totals
- sums
- averages
- calculated results
- summary data

---

## Example from the Lesson

HTML:
```text
    <table>
      <thead>
        <tr>
          <th>Quarter</th>
          <th>Revenue</th>
          <th>Costs</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Q1</th>
          <td>$10M</td>
          <td>$7.5M</td>
        </tr>
        <tr>
          <th>Q2</th>
          <td>$12M</td>
          <td>$5M</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <td>$22M</td>
          <td>$12.5M</td>
        </tr>
      </tfoot>
    </table>
```
---

## Structure Diagram

HTML hierarchy:
```text
    table
     ├── thead
     │    └── tr
     ├── tbody
     │    ├── tr
     │    └── tr
     └── tfoot
          └── tr
```
---

## Visual Table Concept
```text
    +---------+---------+--------+
    | Quarter | Revenue | Costs  |
    +---------+---------+--------+
    | Q1      | $10M    | $7.5M  |
    | Q2      | $12M    | $5M    |
    +---------+---------+--------+
    | Total   | $22M    | $12.5M |
    +---------+---------+--------+
```
---

## Role of `<tfoot>`

`<tfoot>`:

- appears at the bottom of the table
- summarizes data from `<tbody>`
- improves table organization
- enhances readability

---

## Table Sectioning Summary

Complete table structure:
```text
    table
     ├── thead   (column headings)
     ├── tbody   (main data)
     └── tfoot   (summary/footer)
```
---

## Key Pattern

Basic usage:
```text
    <table>
      <tfoot>
        <tr>
          <td>Summary</td>
        </tr>
      </tfoot>
    </table>
```
Hierarchy:
```text
    table
     └── tfoot
          └── tr
               └── td
```   
