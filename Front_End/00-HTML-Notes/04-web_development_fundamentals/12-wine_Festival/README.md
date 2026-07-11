# Project: Wine Festival Schedule

## Overview

In this project, you will build a webpage that displays a
**wine festival schedule** using an HTML table.

The goal is to apply your knowledge of:

- tables
- rows and columns
- headings
- table structure

---

## Project Scenario

The **Aguillar Family** is hosting their annual wine festival.

They need a webpage that clearly displays:

- event schedule
- times
- activities

Your task is to create a **table-based schedule** for attendees.

---

## Key Concepts Used

This project reinforces:

### Tables

    <table>

Used to organize data into rows and columns.

---

### Table Rows

    <tr>

Each row represents a **time slot or event row**.

---

### Table Data

    <td>

Each `<td>` represents a **cell of data**.

---

### Table Headings

    <th>

Used for:

- column titles
- row labels

---

### Table Sections

    <thead>
    <tbody>

Used to organize:

- headings (top)
- data (body)

---

## Example Table Structure

Example HTML:

    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Event</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>12:00 PM</td>
          <td>Welcome Reception</td>
        </tr>
        <tr>
          <td>1:00 PM</td>
          <td>Wine Tasting</td>
        </tr>
      </tbody>
    </table>

---

## Structure Diagram

HTML hierarchy:
```text
    table
     ├── thead
     │    └── tr
     │         ├── th
     │         └── th
     └── tbody
          ├── tr
          │    ├── td
          │    └── td
          └── tr
```
---

## Visual Concept
```text
    +----------+------------------+
    | Time     | Event            |
    +----------+------------------+
    | 12:00 PM | Welcome Reception|
    | 1:00 PM  | Wine Tasting     |
    +----------+------------------+
```
---

## Project Goals

By completing this project, you will:

- build a structured HTML table
- organize data into rows and columns
- use headings for clarity
- create a readable event schedule

---

## Key Idea

Tables are used to display **structured, real-world data**.

This project simulates a real use case:
```text
    schedule
     └── table
          ├── headings
          └── data rows
```
---

## Bonus (Optional Enhancements)

You can improve your project by adding:

- CSS styling for borders
- centered text
- improved fonts

Example:
```text
    table, th, td {
      border: 1px solid black;
      text-align: center;
    }
```
