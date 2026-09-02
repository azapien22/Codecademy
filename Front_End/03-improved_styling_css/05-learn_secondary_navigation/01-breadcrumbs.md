# Learn Secondary Navigation: Simple Example of Breadcrumbs

> **Breadcrumbs are usually displayed as a compact horizontal trail of links separated by symbols such as `>` or `/`. CSS can transform a plain unordered list into a familiar breadcrumb navigation pattern using inline list items, pseudo-elements, link styling, and hover states.**

---

# Overview

In the previous lesson, breadcrumb navigation was introduced as a way to help users understand:

* Where they are on a website
* How the current page fits into the larger site hierarchy
* What broader sections may exist
* How to navigate back to parent categories

In this exercise, the goal is to take a plain HTML list and style it so that it behaves visually like a breadcrumb trail.

The finished result looks conceptually like:

```text
Shopping > Fashion > Shoes > Flats > Brown
```

---

# Starting HTML

The breadcrumb structure is written as an unordered list:

```html
<!DOCTYPE html>
<html>
    <link rel="stylesheet" type="text/css" href="./styles.css">

    <ul class="breadcrumb">
        <li>
            <a href="shopping">Shopping</a>
        </li>
        <li>
            <a href="fashion">Fashion</a>
        </li>
        <li>
            <a href="shoes">Shoes</a>
        </li>
        <li>
            <a href="flats">Flats</a>
        </li>
        <li>
            <a href="brown">Brown</a>
        </li>
    </ul>
</html>
```

The hierarchy represented here is:

```text
Shopping
   │
   ▼
Fashion
   │
   ▼
Shoes
   │
   ▼
Flats
   │
   ▼
Brown
```

The user is currently navigating deeper and deeper into a product hierarchy.

---

# Starting Problem

By default, `<li>` elements are displayed as block-level list items.

That means the browser may display them vertically:

```text
Shopping
Fashion
Shoes
Flats
Brown
```

But breadcrumb navigation is normally horizontal:

```text
Shopping > Fashion > Shoes > Flats > Brown
```

CSS is therefore used to transform the list.

---

# Final CSS

The completed CSS from the exercise is:

```css
.breadcrumb > li {
    display: inline;
}

.breadcrumb li + li::before {
    padding: 10px;
    content: ">";
}

.breadcrumb a {
    text-decoration: none;
}

.breadcrumb a:hover {
    color: red;
}
```

Each rule solves a different part of the breadcrumb design.

---

# Step 1: Display Breadcrumb Items Inline

The first selector is:

```css
.breadcrumb > li {
    display: inline;
}
```

This changes the `<li>` elements from their normal vertical layout to an inline layout.

---

# What `display: inline` Does

Normally:

```text
Shopping
Fashion
Shoes
Flats
Brown
```

After:

```css
display: inline;
```

the elements appear on the same line:

```text
Shopping Fashion Shoes Flats Brown
```

They are now positioned horizontally.

---

# Understanding the Selector

```css
.breadcrumb > li
```

Breakdown:

```text
.breadcrumb
    │
    └── Select an element with class="breadcrumb"

>
│
└── Direct child combinator

li
│
└── Select direct <li> children
```

So:

```css
.breadcrumb > li
```

means:

> Select every `<li>` element that is a direct child of an element with the class `breadcrumb`.

---

# HTML Relationship

Given:

```html
<ul class="breadcrumb">
    <li>Shopping</li>
    <li>Fashion</li>
</ul>
```

the structure is:

```text
ul.breadcrumb
    │
    ├── li
    │
    └── li
```

Both `<li>` elements are direct children of `.breadcrumb`.

Therefore:

```css
.breadcrumb > li
```

selects both.

---

# Why Use `>`?

The `>` symbol is known as the **child combinator**.

It selects only direct descendants.

Compare:

```css
.breadcrumb li
```

with:

```css
.breadcrumb > li
```

The first selects any `<li>` nested anywhere inside `.breadcrumb`.

The second selects only immediate child `<li>` elements.

---

# Step 2: Add Breadcrumb Separators

After placing the list items on one line, the result is approximately:

```text
Shopping Fashion Shoes Flats Brown
```

But breadcrumbs usually contain separators:

```text
Shopping > Fashion > Shoes > Flats > Brown
```

Instead of manually typing `>` into the HTML, CSS can generate the separators automatically.

The lesson uses:

```css
.breadcrumb li + li::before {
    padding: 10px;
    content: ">";
}
```

---

# Understanding the Selector

This selector is the most advanced part of the exercise:

```css
.breadcrumb li + li::before
```

It combines:

* A class selector
* Descendant selection
* The adjacent sibling combinator
* A pseudo-element

Break it apart:

```text
.breadcrumb li + li::before
│           │   │    │
│           │   │    └── Create content before selected <li>
│           │   │
│           │   └── Select the second adjacent <li>
│           │
│           └── Adjacent sibling combinator
│
└── Inside .breadcrumb
```

---

# The Adjacent Sibling Combinator

The `+` symbol is called the:

> **Adjacent sibling combinator**

Example:

```css
li + li
```

This means:

> Select an `<li>` that immediately follows another `<li>` with the same parent.

---

# Example Structure

```html
<ul>
    <li>Shopping</li>
    <li>Fashion</li>
    <li>Shoes</li>
</ul>
```

Relationships:

```text
li Shopping
     │
     └── immediately followed by

li Fashion
     │
     └── immediately followed by

li Shoes
```

The selector:

```css
li + li
```

selects:

```text
Fashion
Shoes
```

but not:

```text
Shopping
```

because the first `<li>` does not have another `<li>` immediately before it.

---

# Why This Is Perfect for Breadcrumbs

We do not want a separator before the first item.

Incorrect:

```text
> Shopping > Fashion > Shoes
```

Desired:

```text
Shopping > Fashion > Shoes
```

Because:

```css
li + li
```

selects every breadcrumb after the first one, it is ideal for adding separators.

---

# Understanding `::before`

The:

```css
::before
```

pseudo-element creates a generated element immediately before the content of the selected element.

Example:

```css
li::before {
    content: ">";
}
```

Conceptually:

```text
Original:

Fashion


With ::before:

> Fashion
```

---

# Combining `+` and `::before`

Now combine:

```css
li + li::before
```

JavaScript is not involved here—this is entirely CSS.

For:

```html
<li>Shopping</li>
<li>Fashion</li>
<li>Shoes</li>
```

CSS effectively produces:

```text
Shopping
> Fashion
> Shoes
```

Since the `<li>` elements are inline, the rendered result becomes:

```text
Shopping > Fashion > Shoes
```

---

# The `content` Property

The pseudo-element will not display anything unless content is provided.

The lesson uses:

```css
content: ">";
```

So:

```css
.breadcrumb li + li::before {
    content: ">";
}
```

adds:

```text
>
```

before every breadcrumb item except the first.

---

# Alternative Separator

The lesson also demonstrates:

```css
.breadcrumb li + li::before {
    content: "/";
}
```

which produces:

```text
Shopping / Fashion / Shoes / Flats / Brown
```

Both are common breadcrumb styles.

---

# Adding Padding Around the Separator

The full rule is:

```css
.breadcrumb li + li::before {
    padding: 10px;
    content: ">";
}
```

The `padding` adds space around the separator.

Without spacing:

```text
Shopping>Fashion>Shoes
```

With spacing:

```text
Shopping > Fashion > Shoes
```

This improves readability.

---

# How the Separator Is Generated

Given:

```html
<ul class="breadcrumb">
    <li>Shopping</li>
    <li>Fashion</li>
    <li>Shoes</li>
</ul>
```

and:

```css
.breadcrumb li + li::before {
    content: ">";
}
```

conceptually:

```text
Shopping
Fashion → gets ::before
Shoes   → gets ::before
```

Result:

```text
Shopping > Fashion > Shoes
```

---

# Why Generated Separators Are Better Than Manual HTML

You could write:

```html
<li>Shopping ></li>
<li>Fashion ></li>
<li>Shoes ></li>
```

but this mixes decorative presentation with page structure.

A better separation of responsibilities is:

```text
HTML
│
└── Structure and meaning


CSS
│
└── Presentation and appearance
```

The separator is primarily visual, so CSS is a natural place to generate it.

---

# Step 3: Remove Link Underlines

Browsers normally underline links.

Example:

```text
Shopping
────────
```

The lesson removes those underlines using:

```css
.breadcrumb a {
    text-decoration: none;
}
```

---

# `text-decoration`

The CSS property:

```css
text-decoration
```

controls decorative lines around text.

Common values include:

```css
text-decoration: underline;
text-decoration: line-through;
text-decoration: none;
```

For breadcrumbs:

```css
text-decoration: none;
```

removes the default underline.

---

# Understanding the Selector

```css
.breadcrumb a
```

means:

> Select every anchor `<a>` inside an element whose class is `breadcrumb`.

Given:

```html
<ul class="breadcrumb">
    <li>
        <a href="shopping">Shopping</a>
    </li>
</ul>
```

the `<a>` is a descendant of `.breadcrumb`, so it receives the rule.

---

# Why Breadcrumb Links May Not Be Underlined

Ordinary inline links inside paragraphs commonly use underlines to communicate clickability.

Example:

```html
<p>
    Read our <a href="/privacy">privacy policy</a>.
</p>
```

An underline helps users distinguish the clickable words from normal paragraph text.

Breadcrumbs, however, already appear inside a recognizable navigation structure.

Example:

```text
Shopping > Fashion > Shoes
```

Their placement and formatting help communicate that they are navigational.

---

# Important Accessibility Note

Removing underlines is acceptable only when users still have a clear way to recognize interactive elements.

That is why hover, focus, color, layout, and other visual cues remain important.

---

# Step 4: Add a Hover State

The lesson adds:

```css
.breadcrumb a:hover {
    color: red;
}
```

When the mouse pointer moves over a breadcrumb link, the text turns red.

---

# What `:hover` Means

`:hover` is a CSS pseudo-class.

It applies styles when the user points at an element.

Example:

```css
a:hover {
    color: red;
}
```

means:

> While the pointer is positioned over a link, make the link red.

---

# Breadcrumb Hover Example

Normal:

```text
Shopping > Fashion > Shoes
```

If the pointer moves over `Fashion`:

```text
Shopping > Fashion > Shoes
           ^^^^^^^
           hover
```

CSS applies:

```css
color: red;
```

to that link.

---

# Why Hover Feedback Matters

Hover feedback communicates:

```text
This element is interactive.
```

Without feedback, a user may wonder whether a breadcrumb is clickable.

A hover state creates immediate visual confirmation.

---

# Navigation Feedback

```text
User Moves Pointer
       │
       ▼
Pointer Enters Link
       │
       ▼
:hover Activates
       │
       ▼
Link Changes Appearance
       │
       ▼
User Recognizes Clickability
```

---

# Complete Transformation

Start with:

```text
Shopping
Fashion
Shoes
Flats
Brown
```

Step 1:

```css
display: inline;
```

Result:

```text
Shopping Fashion Shoes Flats Brown
```

Step 2:

```css
content: ">";
```

Result:

```text
Shopping > Fashion > Shoes > Flats > Brown
```

Step 3:

```css
text-decoration: none;
```

Result:

```text
Clean breadcrumb links without default underlines
```

Step 4:

```css
a:hover {
    color: red;
}
```

Result:

```text
Interactive hover feedback
```

---

# Complete Exercise Code

## HTML

```html
<!DOCTYPE html>
<html>
    <link rel="stylesheet" type="text/css" href="./styles.css">

    <ul class="breadcrumb">
        <li>
            <a href="shopping">Shopping</a>
        </li>

        <li>
            <a href="fashion">Fashion</a>
        </li>

        <li>
            <a href="shoes">Shoes</a>
        </li>

        <li>
            <a href="flats">Flats</a>
        </li>

        <li>
            <a href="brown">Brown</a>
        </li>
    </ul>
</html>
```

## CSS

```css
.breadcrumb > li {
    display: inline;
}

.breadcrumb li + li::before {
    padding: 10px;
    content: ">";
}

.breadcrumb a {
    text-decoration: none;
}

.breadcrumb a:hover {
    color: red;
}
```

---

# Selector Breakdown

| Selector                      | Meaning                                            |
| ----------------------------- | -------------------------------------------------- |
| `.breadcrumb > li`            | Direct `<li>` children of `.breadcrumb`            |
| `.breadcrumb li + li`         | `<li>` immediately following another `<li>`        |
| `.breadcrumb li + li::before` | Generated content before adjacent breadcrumb items |
| `.breadcrumb a`               | Links inside `.breadcrumb`                         |
| `.breadcrumb a:hover`         | Breadcrumb links while being hovered               |

---

# Combinators Introduced

This lesson exposes two important CSS combinators.

---

# Child Combinator: `>`

```css
.breadcrumb > li
```

Means:

```text
Select direct children only.
```

Visual:

```text
.breadcrumb
    │
    ├── li  ✓
    ├── li  ✓
    └── div
         └── li  ✗
```

The nested `<li>` inside the `<div>` would not be selected.

---

# Adjacent Sibling Combinator: `+`

```css
li + li
```

Means:

```text
Select an li immediately preceded by another li.
```

Visual:

```text
li  ← first, not selected

li  ← selected because previous sibling is li

li  ← selected because previous sibling is li
```

---

# Pseudo-Element: `::before`

```css
li::before
```

creates generated content before the element's content.

Example:

```css
li::before {
    content: ">";
}
```

Conceptually:

```text
Generated content
      │
      ▼
> Fashion
```

---

# Pseudo-Class: `:hover`

```css
a:hover
```

selects an anchor only during a particular state.

That state is:

```text
Pointer is over the element.
```

---

# Pseudo-Class vs Pseudo-Element

These are related but different.

| Syntax     | Type           | Purpose                           |
| ---------- | -------------- | --------------------------------- |
| `:hover`   | Pseudo-class   | Selects an element in a state     |
| `::before` | Pseudo-element | Creates/styles part of an element |

Mental model:

```text
:hover
│
└── "What state is the element in?"


::before
│
└── "What generated part of the element should be styled?"
```

---

# Why Breadcrumbs Are Usually Horizontal

Breadcrumbs are secondary navigation.

They should usually occupy minimal visual space.

A vertical trail:

```text
Shopping
>
Fashion
>
Shoes
>
Flats
>
Brown
```

would consume unnecessary vertical space.

A horizontal trail:

```text
Shopping > Fashion > Shoes > Flats > Brown
```

is much more compact.

---

# Typical Breadcrumb Placement

Users often expect breadcrumbs:

```text
Website Header
────────────────────────────────

Primary Navigation
Home | Shop | Account | Contact

Breadcrumb Navigation
Shopping > Fashion > Shoes > Flats

Page Heading
Brown Flats

Page Content
...
```

They usually appear:

* Near the top of the page
* Below primary navigation
* Above main page content
* Left-aligned

---

# Breadcrumb Hierarchy in This Example

The lesson's breadcrumb:

```text
Shopping > Fashion > Shoes > Flats > Brown
```

represents:

```text
Shopping
   │
   └── Fashion
          │
          └── Shoes
                 │
                 └── Flats
                        │
                        └── Brown
```

Each level becomes increasingly specific.

---

# What Users Can Infer

From:

```text
Shopping > Fashion > Shoes > Flats > Brown
```

users can infer that the website may also offer:

```text
Shopping
├── Fashion
│   ├── Shoes
│   │   ├── Flats
│   │   ├── Boots
│   │   └── Sneakers
│   │
│   └── Clothing
│
├── Accessories
└── Other categories
```

Breadcrumbs therefore communicate more than location.

They can reveal **site scope**.

---

# Improved Semantic HTML

The Codecademy exercise focuses primarily on CSS, but production breadcrumb markup can be made more semantic.

A better structure would be:

```html
<nav aria-label="Breadcrumb">
    <ol class="breadcrumb">
        <li>
            <a href="/shopping">Shopping</a>
        </li>

        <li>
            <a href="/shopping/fashion">Fashion</a>
        </li>

        <li>
            <a href="/shopping/fashion/shoes">Shoes</a>
        </li>

        <li>
            <a href="/shopping/fashion/shoes/flats">Flats</a>
        </li>

        <li aria-current="page">
            Brown
        </li>
    </ol>
</nav>
```

This communicates the navigation structure more clearly to assistive technology.

---

# Why `<nav>` Is Better

Breadcrumbs are navigation.

Therefore:

```html
<nav>
```

adds useful semantic meaning.

The attribute:

```html
aria-label="Breadcrumb"
```

helps screen readers distinguish this navigation region from other navigation menus.

---

# Why `<ol>` Can Be Better Than `<ul>`

Breadcrumbs represent an ordered hierarchical sequence:

```text
1. Shopping
2. Fashion
3. Shoes
4. Flats
5. Brown
```

Because order matters, an ordered list:

```html
<ol>
```

is often semantically appropriate.

---

# Current Page Best Practice

In the original exercise, every item is a link:

```html
<a href="brown">Brown</a>
```

In production, the final breadcrumb usually represents the current page and often should not link to itself.

For example:

```html
<li aria-current="page">Brown</li>
```

Conceptually:

```text
Shopping > Fashion > Shoes > Flats > Brown
^^^^^^^   ^^^^^^^   ^^^^^   ^^^^^   ^^^^^
 links      links     links   links   current
                                      page
```

---

# Improved CSS Example

A modern version could use:

```css
.breadcrumb {
    list-style: none;
    padding: 0;
}

.breadcrumb > li {
    display: inline;
}

.breadcrumb li + li::before {
    content: ">";
    padding: 0 10px;
}

.breadcrumb a {
    text-decoration: none;
}

.breadcrumb a:hover {
    text-decoration: underline;
}
```

This preserves the lesson's core ideas while removing the default list marker and padding.

---

# Another Modern Approach: Flexbox

Instead of:

```css
display: inline;
```

modern layouts often use Flexbox.

Example:

```css
.breadcrumb {
    display: flex;
    list-style: none;
    padding: 0;
}
```

Then the `<li>` elements naturally appear horizontally.

The lesson uses `display: inline` because it demonstrates a simpler technique and reinforces selector behavior.

---

# Important Distinction

Both approaches can produce a horizontal breadcrumb:

```css
.breadcrumb > li {
    display: inline;
}
```

or:

```css
.breadcrumb {
    display: flex;
}
```

But they teach different concepts.

The Codecademy exercise specifically focuses on:

* `display: inline`
* Combinators
* `::before`
* `content`
* `text-decoration`
* `:hover`

---

# Common Mistake: Wrong Hover Selector

Correct:

```css
.breadcrumb a:hover {
    color: red;
}
```

Not:

```css
.breadcrumb a\:hover {
    color: red;
}
```

The backslash may appear in escaped text from copied content, but normal CSS syntax uses:

```css
:hover
```

without a backslash.

---

# Common Mistake: Adding a Separator to Every Item

This:

```css
.breadcrumb li::before {
    content: ">";
}
```

would produce:

```text
> Shopping > Fashion > Shoes > Flats > Brown
```

The first separator is unnecessary.

Better:

```css
.breadcrumb li + li::before {
    content: ">";
}
```

Result:

```text
Shopping > Fashion > Shoes > Flats > Brown
```

---

# Common Mistake: Adding Separators Manually

Avoid:

```html
<li><a href="/shopping">Shopping ></a></li>
<li><a href="/fashion">Fashion ></a></li>
```

This tightly couples the visual separator to the HTML content.

Better:

```css
.breadcrumb li + li::before {
    content: ">";
}
```

---

# Common Mistake: Forgetting `content`

This alone:

```css
.breadcrumb li + li::before {
    padding: 10px;
}
```

does not create a visible separator.

The pseudo-element needs:

```css
content: ">";
```

---

# Common Mistake: Confusing `::before` With `:hover`

Remember:

```css
::before
```

creates generated content.

```css
:hover
```

styles an interaction state.

They serve completely different purposes.

---

# Common Mistake: Removing All Link Feedback

If you remove:

```css
text-decoration: underline;
```

but add no hover or focus feedback, it may become harder for users to recognize clickable links.

Good breadcrumb styling should still communicate interactivity.

---

# CSS Transformation Mental Model

```text
Plain HTML List
      │
      ▼
display: inline
      │
      ▼
Horizontal Items
      │
      ▼
li + li::before
      │
      ▼
Add Separators
      │
      ▼
text-decoration: none
      │
      ▼
Navigation Appearance
      │
      ▼
:hover
      │
      ▼
Interactive Feedback
      │
      ▼
Finished Breadcrumb
```

---

# Selector Mental Model

```text
.breadcrumb > li
        │
        └── Direct breadcrumb items


.breadcrumb li + li
        │
        └── Every breadcrumb after the first


.breadcrumb li + li::before
        │
        └── Generated separator before them


.breadcrumb a
        │
        └── Breadcrumb links


.breadcrumb a:hover
        │
        └── Breadcrumb link being hovered
```

---

# Quick Reference

| CSS                     | Purpose                                 |
| ----------------------- | --------------------------------------- |
| `display: inline`       | Places list items on the same line      |
| `>`                     | Child combinator                        |
| `+`                     | Adjacent sibling combinator             |
| `::before`              | Creates a pseudo-element before content |
| `content: ">"`          | Inserts the breadcrumb separator        |
| `text-decoration: none` | Removes link underlining                |
| `:hover`                | Targets an element while hovered        |
| `color: red`            | Changes text color                      |

---

# Exercise Summary

The exercise starts with:

```html
<ul class="breadcrumb">
```

and transforms its children into:

```text
Shopping > Fashion > Shoes > Flats > Brown
```

using four CSS rules:

```css
.breadcrumb > li {
    display: inline;
}
```

```css
.breadcrumb li + li::before {
    padding: 10px;
    content: ">";
}
```

```css
.breadcrumb a {
    text-decoration: none;
}
```

```css
.breadcrumb a:hover {
    color: red;
}
```

---

# Key Takeaways

* Breadcrumbs are normally displayed horizontally.
* `display: inline` can place list items on the same line.
* The `>` selector is the child combinator.
* The `+` selector is the adjacent sibling combinator.
* `li + li` selects breadcrumb items that immediately follow another `<li>`.
* This naturally excludes the first breadcrumb item.
* `::before` creates a pseudo-element before selected content.
* The `content` property inserts generated content into that pseudo-element.
* `content: ">"` can automatically create breadcrumb separators.
* `text-decoration: none` removes default link underlines.
* `:hover` provides visual feedback when users point at links.
* Breadcrumbs should be compact, recognizable, and easy to navigate.
* In production code, semantic markup such as `<nav>`, `<ol>`, and `aria-current` can make breadcrumbs more accessible.

---

# Final Mental Model

```text
HTML List
   │
   ▼
Shopping
Fashion
Shoes
Flats
Brown
   │
   │ display: inline
   ▼
Shopping Fashion Shoes Flats Brown
   │
   │ li + li::before
   ▼
Shopping > Fashion > Shoes > Flats > Brown
   │
   │ link styling
   ▼
Clean Navigation Appearance
   │
   │ :hover
   ▼
Interactive Breadcrumb Navigation
```

---

> **Final Reminder:** The most important CSS idea in this exercise is the combination `li + li::before`. The adjacent sibling combinator selects every breadcrumb after the first, and `::before` inserts the separator automatically—giving you a clean breadcrumb trail without manually placing `>` characters throughout the HTML.

