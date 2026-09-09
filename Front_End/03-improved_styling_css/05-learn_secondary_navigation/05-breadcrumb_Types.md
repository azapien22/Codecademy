# Learn Secondary Navigation

## Breadcrumb Types

> A practical guide to designing and styling breadcrumb navigation using
> HTML and CSS.

---

## Table of Contents

1. [What Are Breadcrumbs?](#what-are-breadcrumbs)
2. [Why Use Breadcrumbs?](#why-use-breadcrumbs)
3. [The Three Types of Breadcrumbs](#the-three-types-of-breadcrumbs)

   * [Location-Based Breadcrumbs](#1-location-based-breadcrumbs)
   * [Attribute-Based Breadcrumbs](#2-attribute-based-breadcrumbs)
   * [Path-Based Breadcrumbs](#3-path-based-breadcrumbs)
4. [Location vs. Attribute Breadcrumbs](#location-vs-attribute-breadcrumbs)
5. [Building the Breadcrumb Structure](#building-the-breadcrumb-structure)
6. [Styling the Breadcrumbs](#styling-the-breadcrumbs)
7. [Adjacent Sibling Combinator](#understanding-the-adjacent-sibling-combinator)
8. [Pseudo-Elements](#understanding-pseudo-elements)
9. [Complete HTML](#complete-html)
10. [Complete CSS](#complete-css)
11. [Key Takeaways](#key-takeaways)

---

# What Are Breadcrumbs?

Breadcrumbs are a form of **secondary navigation** that help users understand
where they are within a website or how they arrived at the current page.

A typical breadcrumb trail might look like:

```text
Home > Products > Shoes > Running Shoes
```

Breadcrumbs complement the site's primary navigation rather than replacing it.

They are especially useful on websites with:

* Deep navigation hierarchies
* Many categories
* Product filtering
* Large amounts of content
* Multiple levels of pages

Examples include:

* E-commerce websites
* Documentation sites
* News websites
* Travel websites
* Online marketplaces
* Administrative dashboards

---

# Why Use Breadcrumbs?

Breadcrumbs improve navigation by giving users additional context about their
current location.

They can help users:

* Understand where they are within a website
* Navigate back to higher-level sections
* Recognize the hierarchy of the site's content
* Understand which filters or attributes are currently active
* Retrace the path they followed through the site

---

# The Three Types of Breadcrumbs

There are three major types of breadcrumbs:

1. **Location**
2. **Attribute**
3. **Path**

Each type communicates different information to the user.

---

## 1. Location-Based Breadcrumbs

**Location-based breadcrumbs** represent the user's current position within the
website's navigation hierarchy.

For example:

```text
Shopping > Fashion > Shoes
```

This represents the following hierarchy:

```text
Shopping
└── Fashion
    └── Shoes
```

The user is currently inside the `Shoes` section, which belongs to `Fashion`,
which itself belongs to `Shopping`.

### Example HTML

```html
<ul class="breadcrumb">
  <li class="location"><a href="">Shopping</a></li>
  <li class="location"><a href="">Fashion</a></li>
  <li class="location"><a href="">Shoes</a></li>
</ul>
```

### Key Idea

Location breadcrumbs answer the question:

> **Where am I within the website?**

---

## 2. Attribute-Based Breadcrumbs

**Attribute-based breadcrumbs** represent characteristics, filters, or
attributes associated with the current page or product selection.

For example, imagine a user shopping for shoes with the following filters:

```text
Shoes
Flats
Brown
```

Here:

```text
Shoes  -> Location
Flats  -> Attribute
Brown  -> Attribute
```

Unlike location breadcrumbs, attributes do not necessarily represent a strict
hierarchical order.

For example:

```text
Flats + Brown
```

does not necessarily imply:

```text
Flats > Brown
```

Both are simply attributes applied to the current selection.

### Example HTML

```html
<ul class="breadcrumb">
  <li class="location"><a href="">Shoes</a></li>
  <li class="attribute"><a href="">Flats</a></li>
  <li class="attribute"><a href="">Brown</a></li>
</ul>
```

### Removable Attributes

Because attributes often represent filters, interfaces may display an `x`
beside them to indicate that the filter can be removed.

For example:

```text
Shoes > Flats x  Brown x
```

This creates a visual distinction between:

```text
Location navigation
```

and:

```text
Active filters
```

### Key Idea

Attribute breadcrumbs answer the question:

> **What characteristics or filters are currently applied?**

---

## 3. Path-Based Breadcrumbs

**Path-based breadcrumbs** represent the unique path a user followed through
the website.

For example, suppose a user visits:

```text
Home
  ↓
About
  ↓
Register
```

The breadcrumb trail might display:

```text
Home > About > Register
```

Unlike location breadcrumbs, this trail depends on the user's navigation
history.

Another user might reach the same registration page through:

```text
Home > Pricing > Register
```

Therefore, the path can vary between:

* Users
* Sessions
* Visits
* Navigation choices

### Long Paths

On complex websites, path-based breadcrumb trails can become very long.

Instead of displaying:

```text
Home > Products > Services > Account > About > Register
```

the beginning may be abbreviated:

```text
... > About > Register
```

### Key Idea

Path breadcrumbs answer the question:

> **How did I get here?**

---

# Location vs. Attribute Breadcrumbs

Understanding the difference between location and attribute breadcrumbs is
important.

| Type      | Represents                 | Example                   |
| --------- | -------------------------- | ------------------------- |
| Location  | Website hierarchy          | `Hotels`                  |
| Attribute | Filters or characteristics | `Pets`                    |
| Path      | User navigation history    | `Home > About > Register` |

Consider the following breadcrumb:

```text
... > Hotels > Pets x  Queen Bed x
```

The elements can be classified as:

```text
...        -> Location
Hotels     -> Location
Pets       -> Attribute
Queen Bed  -> Attribute
```

The location elements show **where the user is**.

The attribute elements show **which filters are active**.

---

# Building the Breadcrumb Structure

Consider a travel website that allows users to browse hotels and apply filters.

The breadcrumb HTML can be structured as:

```html
<ul class="breadcrumb">
  <li class="location"><a href="">...</a></li>
  <li class="location"><a href="">Hotels</a></li>
  <li class="attribute"><a href="">Pets</a></li>
  <li class="attribute"><a href="">Queen Bed</a></li>
</ul>
```

Notice that each `<li>` element receives a class describing its purpose.

Location breadcrumbs use:

```html
class="location"
```

Attribute breadcrumbs use:

```html
class="attribute"
```

This allows CSS to style the two types independently.

---

# Styling the Breadcrumbs

## Step 1: Align the Breadcrumbs

```css
.breadcrumb {
  text-align: left;
}
```

This aligns the breadcrumb navigation to the left.

---

## Step 2: Display List Items Inline

By default, `<li>` elements behave like block-level list items.

To display the breadcrumbs horizontally:

```css
.breadcrumb li {
  display: inline;
}
```

Instead of:

```text
Hotels
Pets
Queen Bed
```

the browser can display:

```text
Hotels Pets Queen Bed
```

---

## Step 3: Add Separators Between Locations

A `>` character can visually separate location-based breadcrumbs.

```css
.breadcrumb li.location + li.location::before {
  color: gray;
  content: ">";
}
```

This creates:

```text
... > Hotels
```

Importantly, the separator is only inserted **between location breadcrumbs**.

It is not automatically inserted between attribute breadcrumbs.

---

# Understanding the Adjacent Sibling Combinator

The selector:

```css
.breadcrumb li.location + li.location::before
```

contains several important CSS concepts.

Let's break it down.

```text
.breadcrumb
```

Selects an element with the `breadcrumb` class.

```text
li.location
```

Selects an `<li>` element with the `location` class.

```text
+
```

The `+` symbol is the **adjacent sibling combinator**.

It selects an element that immediately follows another specified element.

Therefore:

```css
li.location + li.location
```

means:

> Select a `.location` `<li>` that immediately follows another `.location`
> `<li>`.

Given:

```html
<li class="location">...</li>
<li class="location">Hotels</li>
<li class="attribute">Pets</li>
```

the second `.location` matches:

```css
li.location + li.location
```

because it immediately follows another `.location`.

The `.attribute` element does not match.

---

# Understanding Pseudo-Elements

The lesson uses two CSS pseudo-elements:

```css
::before
```

and:

```css
::after
```

These allow CSS to insert presentational content without adding additional
HTML elements.

---

## `::before`

The following rule:

```css
.breadcrumb li.location + li.location::before {
  content: ">";
}
```

inserts content immediately **before** the selected element's content.

Conceptually:

```text
Hotels
```

becomes:

```text
> Hotels
```

---

## `::after`

The following rule:

```css
.attribute a::after {
  content: " x";
}
```

adds content immediately after each attribute link.

For example:

```text
Pets
```

becomes:

```text
Pets x
```

and:

```text
Queen Bed
```

becomes:

```text
Queen Bed x
```

---

# Styling Attribute Breadcrumbs

Attribute links can be styled differently to distinguish them from location
navigation.

```css
.attribute a {
  color: gray;
}
```

This communicates visually that attributes serve a different purpose.

---

# Adding the Close Indicator

A close indicator can be added using the `::after` pseudo-element:

```css
.attribute a::after {
  content: " x";
  font-size: 8px;
  vertical-align: super;
}
```

### Property Breakdown

#### `content`

```css
content: " x";
```

Adds the `x` after the anchor text.

#### `font-size`

```css
font-size: 8px;
```

Makes the `x` smaller than the surrounding text.

#### `vertical-align`

```css
vertical-align: super;
```

Raises the `x` vertically, producing a superscript-style appearance.

The result resembles:

```text
Pets ˣ
Queen Bed ˣ
```

> **Important:** The `x` in this exercise is only a visual indicator.
> No functionality has been implemented to actually remove the filter.

---

# Complete HTML

```html
<!DOCTYPE html>
<html>

  <head>

    <title>Hotels In Singapore</title>

    <link
      href="https://fonts.googleapis.com/css?family=Catamaran:100|Pontano+Sans|Ruda:900"
      rel="stylesheet"
    >

    <link
      rel="stylesheet"
      type="text/css"
      href="./style.css"
    >

    <link
      rel="stylesheet"
      type="text/css"
      href="./breadcrumb.css"
    >

  </head>

  <body>

    <div class="jumbotron">
      <h1>Hotels In Singapore</h1>
    </div>

    <ul class="breadcrumb">
      <li class="location"><a href="">...</a></li>
      <li class="location"><a href="">Hotels</a></li>
      <li class="attribute"><a href="">Pets</a></li>
      <li class="attribute"><a href="">Queen Bed</a></li>
    </ul>

  </body>

</html>
```

---

# Complete CSS

```css
.breadcrumb {
  text-align: left;
}

.breadcrumb li {
  display: inline;
}

.breadcrumb li.location + li.location::before {
  color: gray;
  content: ">";
}

.breadcrumb a {
  display: inline;
}

.attribute a {
  color: gray;
}

.attribute a::after {
  content: " x";
  font-size: 8px;
  vertical-align: super;
}
```

---

# CSS Selector Breakdown

The important selectors from this lesson are:

```css
.breadcrumb
```

Selects the breadcrumb container.

```css
.breadcrumb li
```

Selects all `<li>` elements inside `.breadcrumb`.

```css
.breadcrumb li.location + li.location::before
```

Selects the `::before` pseudo-element of a location breadcrumb that immediately
follows another location breadcrumb.

```css
.breadcrumb a
```

Selects every anchor inside the breadcrumb.

```css
.attribute a
```

Selects anchors inside elements with the `.attribute` class.

```css
.attribute a::after
```

Creates a pseudo-element after each attribute link.

---

# Visual Model

The final breadcrumb can be thought of as:

```text
LOCATION              ATTRIBUTES
──────────────         ───────────────────
... > Hotels          Pets x   Queen Bed x
```

Or structurally:

```text
Breadcrumb
│
├── Location
│   └── ...
│
├── Location
│   └── Hotels
│
├── Attribute
│   └── Pets
│       └── ::after -> " x"
│
└── Attribute
    └── Queen Bed
        └── ::after -> " x"
```

---

# Key Concepts Introduced

## HTML

```text
<ul>
<li>
<a>
class
```

## CSS

```text
Class selectors
Descendant selectors
Adjacent sibling combinator (+)
Pseudo-elements (::before and ::after)
content
font-size
vertical-align
display
text-align
```

---

# Key Takeaways

### 1. Breadcrumbs provide secondary navigation

They help users understand their location, active filters, or navigation
history without replacing the website's primary navigation.

### 2. There are three major breadcrumb types

```text
Location  -> Where am I?
Attribute -> What filters or characteristics are active?
Path      -> How did I get here?
```

### 3. Classes can distinguish breadcrumb types

```html
<li class="location">
```

and:

```html
<li class="attribute">
```

allow different breadcrumb types to receive different styles.

### 4. The `+` combinator selects adjacent siblings

```css
li.location + li.location
```

targets a location element only when it immediately follows another location
element.

### 5. `::before` can create breadcrumb separators

```css
::before {
  content: ">";
}
```

allows separators to be generated through CSS rather than manually placing
them in the HTML.

### 6. `::after` can create visual indicators

```css
.attribute a::after {
  content: " x";
}
```

adds a visual close indicator to attribute breadcrumbs.

### 7. Visual appearance is not functionality

Adding:

```text
x
```

through CSS does **not** make an attribute removable.

JavaScript or another interactive mechanism would be required to implement
actual filter-removal behavior.

---

# Quick Reference

```text
Breadcrumb Types
================

Location
--------
Purpose: Shows position in site hierarchy
Example: Home > Products > Shoes

Attribute
---------
Purpose: Shows active characteristics or filters
Example: Shoes > Brown x  Size 10 x

Path
----
Purpose: Shows the user's navigation history
Example: Home > About > Register


Important CSS
=============

Adjacent sibling:
A + B

Pseudo-element before:
::before

Pseudo-element after:
::after


Example:
.breadcrumb li.location + li.location::before {
  content: ">";
}

.attribute a::after {
  content: " x";
}
```

---

# Summary

Breadcrumb navigation provides users with contextual information about their
position or activity within a website.

The three major breadcrumb strategies are:

```text
Location-Based
    ↓
Represents the site's hierarchy.

Attribute-Based
    ↓
Represents filters or characteristics.

Path-Based
    ↓
Represents the user's navigation history.
```

Combining semantic HTML classes with CSS selectors, combinators, and
pseudo-elements makes it possible to create breadcrumb interfaces that clearly
distinguish hierarchical navigation from active attributes.

The most important selector from this lesson is:

```css
.breadcrumb li.location + li.location::before
```

It demonstrates how multiple CSS concepts can work together:

```text
.breadcrumb
     +
li.location
     +
Adjacent Sibling Combinator (+)
     +
li.location
     +
Pseudo-element (::before)
     ↓
Insert ">" only between adjacent location breadcrumbs
```

This creates a cleaner breadcrumb interface while keeping the HTML structure
simple and meaningful.

