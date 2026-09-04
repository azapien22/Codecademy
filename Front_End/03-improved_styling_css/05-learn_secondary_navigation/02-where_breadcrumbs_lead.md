# Learn Secondary Navigation: Where Do Breadcrumbs Lead?

> **Breadcrumbs should not merely show where a user is—they should provide working links back to broader pages in the site hierarchy. As users move between pages, the breadcrumb trail should change to reflect the current location while preserving the same ordering and visual style.**

---

# Overview

A breadcrumb trail such as:

```text
Shoes > Flats > Brown
```

is useful because it communicates both:

```text
Location
+
Navigation
```

Each earlier breadcrumb should normally lead to the corresponding broader page.

For example:

```text
Shoes > Flats > Brown
^^^^^   ^^^^^   ^^^^^
 link     link   current page
```

If the user clicks:

```text
Flats
```

they should navigate to the general Flats page.

That page's breadcrumb should then become:

```text
Shoes > Flats
```

The trail becomes shorter because the user moved one level higher in the site hierarchy.

---

# Breadcrumbs Should Lead Somewhere

In earlier exercises, breadcrumb links used:

```html
href="#"
```

Example:

```html
<a href="#">Shoes</a>
```

This is often used as a temporary placeholder while building a page.

It does **not** lead to another HTML document.

Instead, `#` represents an empty fragment identifier associated with the current document and commonly causes the browser to jump to the top of the page.

---

# Placeholder Link

```html
<a href="#">Brown</a>
```

Conceptually:

```text
User Clicks
    │
    ▼
Current Page
    │
    ▼
Top of Page
```

In a real website, parent breadcrumb links should normally point to actual pages.

---

# Linking Breadcrumbs to Real Pages

Suppose the project contains:

```text
shoes.html
flats.html
brownshoes.html
```

and all three files are stored in the same directory.

The `Brown Shoes` page should contain:

```html
<ul class="breadcrumb">
    <li>
        <a href="shoes.html">Shoes</a>
    </li>

    <li>
        <a href="flats.html">Flats</a>
    </li>

    <li>
        <a href="#">Brown</a>
    </li>
</ul>
```

The resulting hierarchy is:

```text
Shoes > Flats > Brown
```

---

# Understanding the Links

Each breadcrumb corresponds to a page:

| Breadcrumb | Destination  |
| ---------- | ------------ |
| `Shoes`    | `shoes.html` |
| `Flats`    | `flats.html` |
| `Brown`    | Current page |

So:

```html
<a href="shoes.html">Shoes</a>
```

navigates to:

```text
shoes.html
```

while:

```html
<a href="flats.html">Flats</a>
```

navigates to:

```text
flats.html
```

---

# Current Page

In the Codecademy exercise, the current page uses:

```html
<a href="#">Brown</a>
```

because the user is already on the Brown Shoes page.

Conceptually:

```text
Shoes > Flats > Brown
                  ▲
                  │
             Current Page
```

---

# Production Best Practice

In a production website, the current page usually does **not** need to link to itself.

Instead of:

```html
<a href="#">Brown</a>
```

a more semantic implementation could be:

```html
<span aria-current="page">Brown</span>
```

or:

```html
<li aria-current="page">Brown</li>
```

Example:

```html
<nav aria-label="Breadcrumb">
    <ol class="breadcrumb">
        <li>
            <a href="shoes.html">Shoes</a>
        </li>

        <li>
            <a href="flats.html">Flats</a>
        </li>

        <li aria-current="page">
            Brown
        </li>
    </ol>
</nav>
```

Codecademy uses `href="#"` here primarily to keep the exercise simple.

---

# Breadcrumbs Change With the Current Page

Breadcrumbs are contextual.

The breadcrumb trail depends on the user's current position within the site hierarchy.

Consider:

```text
Shoes
  │
  ▼
Flats
  │
  ▼
Brown
```

Each page should show only the hierarchy necessary to reach that page.

---

# Brown Shoes Page

Current page:

```text
Brown
```

Breadcrumb:

```text
Shoes > Flats > Brown
```

HTML:

```html
<ul class="breadcrumb">
    <li>
        <a href="shoes.html">Shoes</a>
    </li>

    <li>
        <a href="flats.html">Flats</a>
    </li>

    <li>
        <a href="#">Brown</a>
    </li>
</ul>
```

---

# Flats Page

When the user clicks:

```text
Flats
```

they move upward one level.

The breadcrumb should become:

```text
Shoes > Flats
```

Correct HTML:

```html
<ul class="breadcrumb">
    <li>
        <a href="shoes.html">Shoes</a>
    </li>

    <li>
        <a href="#">Flats</a>
    </li>
</ul>
```

---

# Important Correction to the Example Code

The pasted `flats.html` code contains:

```html
<ul class="breadcrumb">
    <li>
        <a href="#">Flats</a>
    </li>
    <li>
        <a href="shoes.html">Shoes</a>
    </li>
</ul>
```

which would display:

```text
Flats > Shoes
```

That reverses the hierarchy.

The correct breadcrumb ordering is:

```text
Shoes > Flats
```

Therefore the HTML should be:

```html
<ul class="breadcrumb">
    <li>
        <a href="shoes.html">Shoes</a>
    </li>

    <li>
        <a href="#">Flats</a>
    </li>
</ul>
```

Breadcrumbs should progress from the broader parent category toward the current, more specific page.

---

# Shoes Page

`Shoes` is the starting point of this particular breadcrumb hierarchy.

Therefore its breadcrumb contains only:

```text
Shoes
```

HTML:

```html
<ul class="breadcrumb">
    <li>
        <a href="#">Shoes</a>
    </li>
</ul>
```

---

# Why Show a Single Breadcrumb?

At first:

```text
Shoes
```

may seem unnecessary.

However, consistency matters.

If the breadcrumb navigation appears on related pages, users expect:

* Similar placement
* Similar styling
* Similar structure
* Predictable behavior

Removing it entirely on one page could make the site feel inconsistent.

---

# Complete Page Hierarchy

The three pages form this hierarchy:

```text
Shoes
  │
  ▼
Flats
  │
  ▼
Brown
```

Each page has a breadcrumb trail representing its position.

---

# Breadcrumbs by Page

| Current Page | Breadcrumb              |
| ------------ | ----------------------- |
| Shoes        | `Shoes`                 |
| Flats        | `Shoes > Flats`         |
| Brown        | `Shoes > Flats > Brown` |

This is one of the most important concepts in breadcrumb navigation.

---

# Breadcrumb Growth

As a user navigates deeper:

```text
Shoes
```

becomes:

```text
Shoes > Flats
```

which becomes:

```text
Shoes > Flats > Brown
```

Visual:

```text
Level 1
Shoes


Level 2
Shoes > Flats


Level 3
Shoes > Flats > Brown
```

---

# Breadcrumb Shrinking

As the user moves upward:

```text
Shoes > Flats > Brown
```

clicking:

```text
Flats
```

produces:

```text
Shoes > Flats
```

Clicking:

```text
Shoes
```

then produces:

```text
Shoes
```

Mental model:

```text
Shoes > Flats > Brown
        ▲
        │ click

Shoes > Flats
▲
│ click

Shoes
```

---

# Consistent Ordering Matters

Breadcrumb categories should stay in the same hierarchical order.

Correct:

```text
Shoes > Flats > Brown
```

Then on Flats:

```text
Shoes > Flats
```

Then on Shoes:

```text
Shoes
```

---

# Incorrect Ordering

This would be confusing:

```text
Shoes > Flats > Brown
```

then suddenly:

```text
Flats > Shopping > Shoes
```

The hierarchy appears to have changed.

Users may wonder:

* Is Shoes inside Shopping?
* Is Flats above Shoes?
* Did I enter a different section?
* Is the site reorganized?

Breadcrumbs should make navigation clearer, not less predictable.

---

# Stable Hierarchy Mental Model

```text
ROOT
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

The hierarchy itself remains stable.

Only the amount of that hierarchy displayed changes according to the current page.

---

# Stable Style Matters Too

The content of breadcrumbs changes from page to page.

The visual design should generally remain consistent.

For example:

```text
Shoes > Flats > Brown
```

should not suddenly become:

```text
SHOES / Flats → Brown
```

on another page unless there is a deliberate design reason.

Users rely on consistent visual patterns.

---

# What Should Stay Consistent?

Across breadcrumb trails, try to preserve:

* Font
* Font size
* Link styling
* Separator style
* Spacing
* Position
* Hover behavior
* Hierarchical ordering

---

# What Should Change?

The trail itself changes according to location.

For example:

```text
Page: Shoes
Breadcrumb:
Shoes
```

```text
Page: Flats
Breadcrumb:
Shoes > Flats
```

```text
Page: Brown Shoes
Breadcrumb:
Shoes > Flats > Brown
```

---

# Relative Links

Because these HTML files are located in the same directory, the exercise can use simple relative URLs.

Example project:

```text
project/
│
├── shoes.html
├── flats.html
├── brownshoes.html
└── styles.css
```

From:

```text
brownshoes.html
```

you can link directly to:

```html
<a href="shoes.html">Shoes</a>
```

because `shoes.html` is in the same folder.

---

# Relative URL Mental Model

Current file:

```text
project/brownshoes.html
```

Target:

```text
project/shoes.html
```

Because both share the same directory:

```html
href="shoes.html"
```

is sufficient.

You do not need:

```html
href="/some/long/path/shoes.html"
```

---

# Important Terminology Clarification

The lesson says breadcrumbs are typically **relative to the current page**.

Here, **relative** refers to the breadcrumb's contextual relationship to the site's hierarchy.

It is **not** referring to the CSS declaration:

```css
position: relative;
```

These are unrelated concepts.

Similarly, a **relative URL** such as:

```html
href="shoes.html"
```

is a URL resolved relative to the current document's location.

Keep these meanings separate:

```text
Breadcrumb relative to current page
        ≠
CSS position: relative
        ≠
Relative URL
```

They use the same English word but refer to different concepts.

---

# How Browser Navigation Works

On `brownshoes.html`:

```html
<a href="flats.html">Flats</a>
```

When clicked:

```text
brownshoes.html
      │
      │ click Flats
      ▼
flats.html
```

The browser loads:

```text
flats.html
```

That page contains its own breadcrumb:

```text
Shoes > Flats
```

---

# Each Page Owns Its Breadcrumb

With basic static HTML, each page contains its own breadcrumb markup.

Example:

```text
brownshoes.html
│
└── Shoes > Flats > Brown


flats.html
│
└── Shoes > Flats


shoes.html
│
└── Shoes
```

This means the HTML changes from page to page.

---

# Why Each Breadcrumb Is Different

The breadcrumb answers:

> Where is this page in the hierarchy?

Since each page occupies a different position, its breadcrumb trail must reflect that position.

---

# Complete Corrected Exercise

## `brownshoes.html`

```html
<!DOCTYPE html>
<html>
    <link rel="stylesheet" type="text/css" href="./styles.css">

    <h1>Brown Shoes</h1>

    <ul class="breadcrumb">
        <li>
            <a href="shoes.html">Shoes</a>
        </li>

        <li>
            <a href="flats.html">Flats</a>
        </li>

        <li>
            <a href="#">Brown</a>
        </li>
    </ul>
</html>
```

Rendered:

```text
Shoes > Flats > Brown
```

---

# `flats.html`

```html
<!DOCTYPE html>
<html>
    <link rel="stylesheet" type="text/css" href="./styles.css">

    <h1>Flats</h1>

    <ul class="breadcrumb">
        <li>
            <a href="shoes.html">Shoes</a>
        </li>

        <li>
            <a href="#">Flats</a>
        </li>
    </ul>
</html>
```

Rendered:

```text
Shoes > Flats
```

---

# `shoes.html`

```html
<!DOCTYPE html>
<html>
    <link rel="stylesheet" type="text/css" href="./styles.css">

    <h1>Shoes</h1>

    <ul class="breadcrumb">
        <li>
            <a href="#">Shoes</a>
        </li>
    </ul>
</html>
```

Rendered:

```text
Shoes
```

---

# Navigation Flow

```text
brownshoes.html
────────────────────
Shoes > Flats > Brown
        │
        │ Click "Flats"
        ▼

flats.html
────────────────────
Shoes > Flats
  │
  │ Click "Shoes"
  ▼

shoes.html
────────────────────
Shoes
```

This gives users a natural way to move toward broader categories.

---

# Breadcrumbs vs Browser Back

The breadcrumb:

```text
Shoes > Flats > Brown
```

does not mean:

```text
These are exactly the pages the user previously visited.
```

It means:

```text
These are the hierarchical ancestors of the current page.
```

That distinction remains important.

---

# Example

A user might arrive directly from Google:

```text
Google
  │
  ▼
Brown Shoes
```

They never previously visited:

```text
Shoes
```

or:

```text
Flats
```

Yet the breadcrumb should still show:

```text
Shoes > Flats > Brown
```

because that is the site's hierarchy.

---

# Breadcrumbs Describe Structure

```text
Browsing History
────────────────
Where did I come from?


Breadcrumb Hierarchy
────────────────────
Where does this page belong?
```

These are different questions.

---

# Why Consistency Matters

Users develop expectations as they interact with an interface.

After seeing:

```text
Shoes > Flats > Brown
```

they learn:

```text
Left = broader

Right = more specific
```

If the order suddenly changes:

```text
Brown > Shoes > Flats
```

the navigation model breaks.

---

# Breadcrumb Direction

Standard hierarchical breadcrumbs typically progress:

```text
Broad
  │
  ▼
Specific
```

or visually:

```text
Parent > Child > Grandchild > Current Page
```

Example:

```text
Shoes > Flats > Brown
```

Not:

```text
Brown > Flats > Shoes
```

---

# Site Tree Visualization

The same information can be represented as a tree:

```text
Shoes
└── Flats
    └── Brown
```

Breadcrumb form:

```text
Shoes > Flats > Brown
```

These are two representations of the same hierarchy.

---

# Relationship Between Tree and Breadcrumb

```text
SITE TREE                     BREADCRUMB

Shoes                         Shoes
│                              │
└── Flats             →        > Flats
    │                          │
    └── Brown                   > Brown
```

Breadcrumbs flatten the hierarchy into a horizontal trail.

---

# Better Production Structure

For modern semantic HTML, a breadcrumb could be:

```html
<nav aria-label="Breadcrumb">
    <ol class="breadcrumb">
        <li>
            <a href="shoes.html">Shoes</a>
        </li>

        <li>
            <a href="flats.html">Flats</a>
        </li>

        <li aria-current="page">
            Brown
        </li>
    </ol>
</nav>
```

This improves semantics while preserving the same hierarchy.

---

# Why `aria-current="page"` Helps

The attribute:

```html
aria-current="page"
```

communicates to assistive technologies:

> This breadcrumb represents the page currently being viewed.

Example:

```html
<li aria-current="page">
    Brown
</li>
```

---

# Current Page Should Usually Not Be Clickable

Suppose the user is already on:

```text
Brown
```

Clicking:

```text
Brown
```

again provides little value.

A more natural breadcrumb is:

```text
Shoes > Flats > Brown
^^^^^   ^^^^^   ^^^^^
 links   links   current page
```

---

# Breadcrumb Link Direction

Breadcrumb links normally move upward in hierarchy.

```text
Current Page
Brown
  │
  ▼
Parent
Flats
  │
  ▼
Parent
Shoes
```

Users can jump directly to any broader level shown in the trail.

---

# Example User Journey

Imagine the user starts on Brown Shoes.

```text
Shoes > Flats > Brown
```

They decide they want another color but still want flats.

Instead of:

```text
Back
Back
Search
Navigate
```

they can simply click:

```text
Flats
```

Now:

```text
Shoes > Flats
```

and they can explore other flat shoes.

---

# Breadcrumb Efficiency

Without breadcrumbs:

```text
Brown Shoes
    │
    ▼
Back
    │
    ▼
Possibly Previous Page
    │
    ▼
Search Again
```

With breadcrumbs:

```text
Brown Shoes
    │
    ▼
Click "Flats"
    │
    ▼
Flats Category
```

Breadcrumbs reduce unnecessary navigation effort.

---

# Common Mistake: Reversing the Hierarchy

Incorrect:

```text
Flats > Shoes
```

if `Flats` is a category inside `Shoes`.

Correct:

```text
Shoes > Flats
```

Remember:

```text
Broad → Specific
```

---

# Common Mistake: Using `#` Everywhere

During development:

```html
<a href="#">Shoes</a>
```

may be useful as a placeholder.

But on a completed multi-page site, parent breadcrumbs should navigate somewhere meaningful.

Better:

```html
<a href="shoes.html">Shoes</a>
```

---

# Common Mistake: Changing Category Order

Incorrect:

```text
Brown Page:
Shoes > Flats > Brown

Flats Page:
Flats > Shoes
```

Correct:

```text
Brown Page:
Shoes > Flats > Brown

Flats Page:
Shoes > Flats
```

The hierarchy should remain stable.

---

# Common Mistake: Treating Breadcrumbs as History

Do not construct:

```text
Google > Homepage > Search > Shoes > Brown
```

simply because that is how the user traveled.

Breadcrumbs usually represent:

```text
Shoes > Flats > Brown
```

regardless of how the user arrived.

---

# Common Mistake: Inconsistent Styling

Avoid:

```text
Page 1:
Shoes > Flats > Brown

Page 2:
SHOES / FLATS

Page 3:
Shoes → Flats
```

unless the design intentionally requires different patterns.

Consistency improves learnability.

---

# Quick Reference

| Concept               | Meaning                                                                |
| --------------------- | ---------------------------------------------------------------------- |
| `href="#"`            | Link to an empty fragment on current page; often used as a placeholder |
| `href="shoes.html"`   | Link to another file in the same directory                             |
| Relative URL          | URL resolved from the current document's location                      |
| Current breadcrumb    | Represents current page                                                |
| Parent breadcrumb     | Links to a broader level                                               |
| Breadcrumb hierarchy  | Broadest category → most specific page                                 |
| Consistency           | Keep ordering and visual style predictable                             |
| `aria-current="page"` | Semantically identifies the current page                               |

---

# Breadcrumb Rules

A useful mental checklist:

```text
1. Start broad.
2. Move toward specific.
3. Link parent levels.
4. Identify the current page.
5. Keep the order stable.
6. Keep styling consistent.
7. Update the trail on every page.
```

---

# Exercise Mental Model

```text
Site Hierarchy

Shoes
  │
  ▼
Flats
  │
  ▼
Brown
```

Corresponding pages:

```text
shoes.html
Shoes


flats.html
Shoes > Flats


brownshoes.html
Shoes > Flats > Brown
```

---

# Key Takeaways

* Breadcrumb links should normally navigate to their corresponding parent pages.
* `href="#"` is commonly used as a temporary placeholder or for the current page in simple exercises.
* Real parent breadcrumb links should use appropriate URLs.
* If files are in the same directory, simple relative URLs such as `shoes.html` are sufficient.
* Breadcrumb trails change according to the page being viewed.
* Moving deeper into the site adds breadcrumb levels.
* Moving upward removes deeper breadcrumb levels.
* Breadcrumb ordering should remain consistent across pages.
* Breadcrumbs generally progress from broad categories to more specific ones.
* Breadcrumbs represent site hierarchy, not necessarily browsing history.
* A single breadcrumb can still be useful for interface consistency.
* In production HTML, the current page is usually better represented without a self-link and can use `aria-current="page"`.
* The correct Flats breadcrumb in this exercise is `Shoes > Flats`, not `Flats > Shoes`.

---

# Final Mental Model

```text
SITE STRUCTURE
────────────────────────

Shoes
  │
  ▼
Flats
  │
  ▼
Brown


BREADCRUMBS
────────────────────────

Shoes Page:
Shoes


Flats Page:
Shoes > Flats


Brown Page:
Shoes > Flats > Brown


NAVIGATION RULE
────────────────────────

Broadest
   │
   ▼
More Specific
   │
   ▼
Current Page
```

---

> **Final Reminder:** A breadcrumb trail is a compact representation of a site's hierarchy. As users navigate deeper, the trail grows; as they move toward broader categories, it shrinks. The labels, order, destinations, and styling should remain predictable so users always understand where they are and where each breadcrumb will take them.

