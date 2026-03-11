# HTML Headings

## Overview

Headings in HTML are used to **title and organize content** on a webpage.

They function similarly to headings in other media such as:

- newspapers
- books
- articles
- movie titles
- educational materials

Headings help:
- capture attention
- describe sections of content
- organize information on a page

---

## HTML Heading Elements

HTML provides **six heading levels**.

They range from **largest (most important)** to **smallest (least important)**.

List of heading elements:

    <h1>
    <h2>
    <h3>
    <h4>
    <h5>
    <h6>

Hierarchy:

```text
Largest
  h1
   h2
    h3
     h4
      h5
       h6
Smallest

# Purpose of Each Heading

## h1

Main heading of the page.

Usually used for:

- page titles
- main article titles
- primary topics

Example:

    <h1>BREAKING NEWS</h1>

---

## h2

Used for major section headings.

Example:

    <h2>World News</h2>

---

## h3

Used for subsections inside h2 sections.

Example:

    <h3>Economic Developments</h3>

---

## h4

Used for smaller subsections.

Example:

    <h4>Market Reactions</h4>

---

## h5

Used for minor headings.

Example:

    <h5>Analyst Comments</h5>

---

## h6

Smallest heading level.

Example:

    <h6>Additional Notes</h6>

---

# Heading Hierarchy Example

Example HTML:

    <h1>World News</h1>
    <h2>Europe</h2>
    <h3>Germany</h3>
    <h4>Berlin</h4>

Hierarchy diagram:

    h1  World News
     └─ h2  Europe
         └─ h3  Germany
             └─ h4  Berlin

This structure helps organize information logically.

---

# Example Usage

Example webpage structure:

    <h1>BREAKING NEWS</h1>
    <h2>Major Storm Approaches</h2>
    <h3>Weather Forecast</h3>
    <h4>Safety Guidelines</h4>

Diagram:

    h1  BREAKING NEWS
     ├─ h2  Major Storm Approaches
     │    └─ h3  Weather Forecast
     │         └─ h4  Safety Guidelines

---

# Why Headings Are Important

Headings help with:

- page organization
- content readability
- accessibility
- search engine optimization (SEO)

Search engines use headings to understand the structure of a page.

---

# Key Rule

Headings should follow a logical order.

Example good structure:

    <h1>Main Title</h1>
    <h2>Section</h2>
    <h3>Subsection</h3>

Avoid skipping levels unnecessarily.

Example bad structure:

    <h1>Main Title</h1>
    <h4>Subsection</h4>

---

# Key Pattern

Typical webpage heading structure:

    h1  Page Title
     ├─ h2  Section
     │    ├─ h3  Subsection
     │    └─ h3  Subsection
     └─ h2  Section
          └─ h3  Subsection

Example:

    <h1>My Website</h1>
    <h2>About</h2>
    <h2>Services</h2>
    <h3>Consulting</h3>
    <h3>Development</h3>:
