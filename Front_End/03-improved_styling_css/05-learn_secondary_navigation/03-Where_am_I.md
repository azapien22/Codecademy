# Learn Secondary Navigation: Where Am I?

> **Breadcrumb navigation helps users answer one of the most important usability questions on a website: “Where am I?” In this exercise, a travel page for Singapore hotels is given a breadcrumb trail that shows the page’s position within a larger hierarchy.**

---

# Overview

The page in this exercise represents:

```text
Singapore Hotels
```

Without breadcrumbs, a user sees the page but may not understand how it fits into the broader website.

By adding:

```text
Asia > Singapore > Tourism > Hotels
```

the page gains immediate context.

The breadcrumb communicates:

```text
Asia
  │
  ▼
Singapore
  │
  ▼
Tourism
  │
  ▼
Hotels
```

This gives the user a compact view of the site's hierarchy.

---

# The Core Question: “Where Am I?”

One of the primary purposes of breadcrumb navigation is orientation.

A user should be able to look at the breadcrumb and understand:

* The broader region
* The country or city
* The category
* The current page type

In this example:

```text
Asia > Singapore > Tourism > Hotels
```

the user can infer:

```text
Region: Asia
Location: Singapore
Section: Tourism
Current category: Hotels
```

---

# Step 1: Create the Breadcrumb HTML

The exercise asks for an unordered list:

```html
<ul class="breadcrumb">
    <li><a href="#">Asia</a></li>
    <li><a href="#">Singapore</a></li>
    <li><a href="#">Tourism</a></li>
    <li><a href="#">Hotels</a></li>
</ul>
```

This structure contains:

```text
ul.breadcrumb
│
├── li
│   └── a → Asia
│
├── li
│   └── a → Singapore
│
├── li
│   └── a → Tourism
│
└── li
    └── a → Hotels
```

---

# Why Use a List?

Breadcrumbs represent a sequence of related navigation items.

A list is a natural HTML structure for this.

The exercise uses:

```html
<ul>
```

which creates an unordered list.

Each navigation level becomes:

```html
<li>
```

and each clickable item becomes:

```html
<a>
```

---

# Breadcrumb HTML Breakdown

Consider:

```html
<li><a href="#">Asia</a></li>
```

Breakdown:

```text
<li>
│
└── List item

<a>
│
└── Anchor / link

href="#"
│
└── Placeholder destination

Asia
│
└── Visible link text
```

---

# Why `href="#"` Is Used Here

The exercise does not yet require the breadcrumb links to navigate to real pages.

So each link uses:

```html
href="#"
```

Example:

```html
<a href="#">Singapore</a>
```

This acts as a placeholder.

In a real site, it might instead be:

```html
<a href="/asia/singapore">Singapore</a>
```

or:

```html
<a href="singapore.html">Singapore</a>
```

---

# Placeholder vs Real Link

Development placeholder:

```html
<a href="#">Asia</a>
```

Production-style link:

```html
<a href="/asia">Asia</a>
```

The visible breadcrumb structure may look the same, but the second link actually takes the user somewhere meaningful.

---

# Step 2: Display Breadcrumb Items Inline

By default, list items appear vertically.

Without styling:

```text
Asia
Singapore
Tourism
Hotels
```

But breadcrumbs are usually horizontal:

```text
Asia > Singapore > Tourism > Hotels
```

The exercise uses:

```css
.breadcrumb li {
    display: inline;
}
```

---

# What `display: inline` Does

The declaration:

```css
display: inline;
```

causes the `<li>` elements to flow next to one another on the same line.

Before:

```text
Asia

Singapore

Tourism

Hotels
```

After:

```text
Asia Singapore Tourism Hotels
```

This creates the basic horizontal breadcrumb layout.

---

# Understanding the Selector

```css
.breadcrumb li
```

means:

> Select every `<li>` inside an element with the class `breadcrumb`.

Breakdown:

```text
.breadcrumb
│
└── Element with class="breadcrumb"

(space)
│
└── Descendant combinator

li
│
└── Any descendant <li>
```

So this:

```css
.breadcrumb li {
    display: inline;
}
```

styles all list items inside the breadcrumb.

---

# Step 3: Add the `>` Separators

After placing the list items inline, the breadcrumb looks like:

```text
Asia Singapore Tourism Hotels
```

This is not yet visually clear enough.

Breadcrumbs normally use separators such as:

```text
>
/
›
```

The exercise uses:

```text
>
```

---

# CSS for the Separator

```css
.breadcrumb li + li::before {
    color: gray;
    content: ">";
}
```

This transforms:

```text
Asia Singapore Tourism Hotels
```

into:

```text
Asia > Singapore > Tourism > Hotels
```

---

# Understanding the Advanced Selector

The selector:

```css
.breadcrumb li + li::before
```

combines several CSS concepts.

Breakdown:

```text
.breadcrumb
    │
    └── Inside the breadcrumb

li
│
└── First list item in sibling relationship

+
│
└── Adjacent sibling combinator

li
│
└── Select the next <li>

::before
│
└── Create generated content before it
```

---

# Adjacent Sibling Combinator: `+`

The `+` symbol means:

> Select an element that immediately follows another specified sibling.

Example:

```css
li + li
```

Given:

```html
<li>Asia</li>
<li>Singapore</li>
<li>Tourism</li>
<li>Hotels</li>
```

the selector matches:

```text
Singapore
Tourism
Hotels
```

but not:

```text
Asia
```

because `Asia` has no `<li>` immediately before it.

---

# Why This Is Ideal for Breadcrumbs

We do not want:

```text
> Asia > Singapore > Tourism > Hotels
```

We want:

```text
Asia > Singapore > Tourism > Hotels
```

Using:

```css
li + li
```

naturally skips the first breadcrumb.

That makes it perfect for inserting separators.

---

# Pseudo-Element: `::before`

The `::before` pseudo-element creates generated content before the selected element.

Example:

```css
li::before {
    content: ">";
}
```

Conceptually:

```text
Singapore
```

becomes:

```text
> Singapore
```

---

# Why `content` Is Required

A `::before` pseudo-element normally needs the:

```css
content
```

property to display generated text.

Example:

```css
content: ">";
```

Without it:

```css
.breadcrumb li + li::before {
    color: gray;
}
```

there would be no visible separator.

---

# Separator Color

The exercise also adds:

```css
color: gray;
```

This makes the separator less visually dominant.

Example:

```text
Asia > Singapore > Tourism > Hotels
     ^             ^
     gray separators
```

This is a good visual hierarchy technique because the breadcrumb labels should be more prominent than the separator symbols.

---

# Complete CSS

The completed exercise code is:

```css
.breadcrumb li {
    display: inline;
}

.breadcrumb li + li::before {
    color: gray;
    content: ">";
}
```

One small syntax refinement:

```css
content: ">";
```

should conventionally end with a semicolon.

So the polished version is:

```css
.breadcrumb li {
    display: inline;
}

.breadcrumb li + li::before {
    color: gray;
    content: ">";
}
```

---

# Complete HTML + CSS

## HTML

```html
<ul class="breadcrumb">
    <li><a href="#">Asia</a></li>
    <li><a href="#">Singapore</a></li>
    <li><a href="#">Tourism</a></li>
    <li><a href="#">Hotels</a></li>
</ul>
```

## CSS

```css
.breadcrumb li {
    display: inline;
}

.breadcrumb li + li::before {
    color: gray;
    content: ">";
}
```

---

# Rendered Result

Conceptually:

```text
Asia > Singapore > Tourism > Hotels
```

This now communicates the page's hierarchy at a glance.

---

# Site Hierarchy Represented

The breadcrumb corresponds to a tree like this:

```text
Asia
└── Singapore
    └── Tourism
        └── Hotels
```

The horizontal breadcrumb is simply a compact representation of the same hierarchy:

```text
Asia > Singapore > Tourism > Hotels
```

---

# Tree vs Breadcrumb

```text
SITE TREE                     BREADCRUMB

Asia                          Asia
│                              │
└── Singapore         →        > Singapore
    │                          │
    └── Tourism                > Tourism
        │                      │
        └── Hotels             > Hotels
```

---

# Why Breadcrumbs Help on a Travel Site

Travel websites often contain deep structures.

For example:

```text
World
├── Asia
│   ├── Singapore
│   │   ├── Tourism
│   │   │   ├── Hotels
│   │   │   ├── Attractions
│   │   │   └── Tours
│   │   │
│   │   └── Restaurants
│   │
│   └── Japan
│
└── Europe
```

A breadcrumb helps users understand where their current page fits into such a large structure.

---

# What the User Can Infer

From:

```text
Asia > Singapore > Tourism > Hotels
```

a user may reasonably infer that the site probably also contains:

```text
Asia
├── Singapore
├── Japan
├── Thailand
└── Other destinations
```

and perhaps:

```text
Singapore
├── Tourism
│   ├── Hotels
│   ├── Tours
│   └── Attractions
│
├── Restaurants
└── Transportation
```

Breadcrumbs therefore communicate both:

```text
Current Location
+
Potential Site Scope
```

---

# Breadcrumbs Provide Orientation

The breadcrumb answers:

```text
Where am I?
```

with:

```text
You are inside:
Asia
  >
Singapore
  >
Tourism
  >
Hotels
```

---

# Breadcrumbs Also Provide Context

The page title might simply say:

```text
Singapore Hotels
```

but the breadcrumb adds broader context:

```text
Asia > Singapore > Tourism > Hotels
```

Now the user understands that hotels are part of a larger tourism section.

---

# Typical Page Layout

Breadcrumbs are commonly placed:

* Below primary navigation
* Near the top of the content area
* Above the page heading

Example:

```text
------------------------------------------------
LOGO              Primary Navigation
------------------------------------------------

Asia > Singapore > Tourism > Hotels

Singapore Hotels

[Hotel cards and page content]
```

This matches the expectation users have developed from many large websites.

---

# Why Breadcrumbs Are Usually Compact

Breadcrumbs are secondary navigation.

They should not overpower the primary page content.

Typical appearance:

```text
Asia > Singapore > Tourism > Hotels
```

rather than:

```text
============================================
ASIA
   >
SINGAPORE
   >
TOURISM
   >
HOTELS
============================================
```

The breadcrumb should help with orientation without becoming the visual focus.

---

# Descendant Selector vs Child Selector

The exercise uses:

```css
.breadcrumb li
```

This selects any `<li>` nested inside `.breadcrumb`.

You could also write:

```css
.breadcrumb > li
```

which selects only direct children.

Difference:

```text
.breadcrumb li
│
└── Any descendant li


.breadcrumb > li
│
└── Direct child li only
```

For this simple markup, either would select the intended list items.

---

# Example

Given:

```html
<ul class="breadcrumb">
    <li>Asia</li>
    <li>Singapore</li>
</ul>
```

both:

```css
.breadcrumb li
```

and:

```css
.breadcrumb > li
```

select the same two elements.

---

# Selector Relationships

This lesson reinforces several CSS relationships.

```text
.breadcrumb li
        │
        └── Descendant relationship


li + li
    │
    └── Adjacent sibling relationship


::before
    │
    └── Generated pseudo-element
```

---

# Visualizing `li + li::before`

Given:

```text
li Asia
li Singapore
li Tourism
li Hotels
```

CSS evaluates:

```text
Asia
│
└── No previous li
    → no ::before

Singapore
│
└── Previous sibling is li
    → add >

Tourism
│
└── Previous sibling is li
    → add >

Hotels
│
└── Previous sibling is li
    → add >
```

Result:

```text
Asia > Singapore > Tourism > Hotels
```

---

# Why Not Type the Separators in HTML?

You could write:

```html
<li>Asia ></li>
<li>Singapore ></li>
<li>Tourism ></li>
<li>Hotels</li>
```

but this mixes presentation into the content.

A cleaner separation is:

```text
HTML
│
└── Navigation structure


CSS
│
└── Visual separators
```

This makes maintenance easier.

---

# Easier Maintenance

Suppose you decide to change:

```text
>
```

to:

```text
/
```

If the separator is in CSS:

```css
content: "/";
```

one edit changes the entire breadcrumb.

If separators were manually typed into every HTML item, you would need to update them individually.

---

# Example Separator Change

Original:

```css
content: ">";
```

Result:

```text
Asia > Singapore > Tourism > Hotels
```

Change to:

```css
content: "/";
```

Result:

```text
Asia / Singapore / Tourism / Hotels
```

This demonstrates why pseudo-elements are useful.

---

# Improving Spacing

The exercise's minimum CSS works, but the result may look tight:

```text
Asia>Singapore>Tourism>Hotels
```

You can improve readability with spacing:

```css
.breadcrumb li + li::before {
    color: gray;
    content: ">";
    padding: 0 8px;
}
```

Result:

```text
Asia > Singapore > Tourism > Hotels
```

---

# Removing Default List Styling

An unordered list normally includes bullets and default spacing.

A polished breadcrumb often resets those styles:

```css
.breadcrumb {
    list-style: none;
    padding: 0;
    margin: 0;
}
```

This removes:

```text
• Asia
• Singapore
• Tourism
• Hotels
```

and unwanted indentation.

---

# Polished Version

A cleaner version could be:

```css
.breadcrumb {
    list-style: none;
    padding: 0;
}

.breadcrumb li {
    display: inline;
}

.breadcrumb li + li::before {
    color: gray;
    content: ">";
    padding: 0 8px;
}
```

---

# Link Styling

You may also choose to remove the default underline:

```css
.breadcrumb a {
    text-decoration: none;
}
```

and provide a hover state:

```css
.breadcrumb a:hover {
    text-decoration: underline;
}
```

This gives:

```text
Normal:
Asia > Singapore > Tourism > Hotels

Hover:
       Singapore
       ─────────
```

---

# Accessibility Improvement

The exercise uses:

```html
<ul class="breadcrumb">
```

which is fine for learning the styling concept.

For production code, a more semantic structure is:

```html
<nav aria-label="Breadcrumb">
    <ol class="breadcrumb">
        <li><a href="/asia">Asia</a></li>
        <li><a href="/asia/singapore">Singapore</a></li>
        <li><a href="/asia/singapore/tourism">Tourism</a></li>
        <li aria-current="page">Hotels</li>
    </ol>
</nav>
```

---

# Why `<nav>`?

Breadcrumbs are a form of navigation.

Using:

```html
<nav>
```

communicates that purpose semantically.

---

# Why `aria-label="Breadcrumb"`?

A page may have multiple navigation areas:

```text
Main Navigation
Footer Navigation
Breadcrumb Navigation
```

The attribute:

```html
aria-label="Breadcrumb"
```

helps assistive technologies distinguish this navigation region.

---

# Why `<ol>`?

Breadcrumb order matters.

This:

```text
Asia > Singapore > Tourism > Hotels
```

is not interchangeable with:

```text
Hotels > Tourism > Asia > Singapore
```

Because it represents an ordered hierarchy, `<ol>` is often semantically appropriate.

---

# Why `aria-current="page"`?

The current page can be identified with:

```html
aria-current="page"
```

Example:

```html
<li aria-current="page">Hotels</li>
```

This tells assistive technology:

> Hotels is the current page.

---

# Production-Style Example

```html
<nav aria-label="Breadcrumb">
    <ol class="breadcrumb">
        <li>
            <a href="/asia">Asia</a>
        </li>

        <li>
            <a href="/asia/singapore">Singapore</a>
        </li>

        <li>
            <a href="/asia/singapore/tourism">Tourism</a>
        </li>

        <li aria-current="page">
            Hotels
        </li>
    </ol>
</nav>
```

CSS:

```css
.breadcrumb {
    list-style: none;
    padding: 0;
}

.breadcrumb li {
    display: inline;
}

.breadcrumb li + li::before {
    color: gray;
    content: ">";
    padding: 0 8px;
}

.breadcrumb a {
    text-decoration: none;
}
```

---

# Flexbox Alternative

A more modern layout could use Flexbox instead of:

```css
display: inline;
```

Example:

```css
.breadcrumb {
    display: flex;
    list-style: none;
    padding: 0;
}
```

Then the list items naturally appear horizontally.

However, this Codecademy exercise specifically reinforces:

```css
display: inline;
```

and:

```css
li + li::before
```

so those concepts are worth learning directly.

---

# Exercise Transformation

Start:

```text
Asia
Singapore
Tourism
Hotels
```

Apply:

```css
display: inline;
```

Result:

```text
Asia Singapore Tourism Hotels
```

Then apply:

```css
li + li::before {
    content: ">";
}
```

Result:

```text
Asia > Singapore > Tourism > Hotels
```

---

# Transformation Mental Model

```text
HTML List
   │
   ▼
Vertical Items
   │
   │ display: inline
   ▼
Horizontal Items
   │
   │ li + li::before
   ▼
Generated Separators
   │
   ▼
Breadcrumb Navigation
```

---

# Common Mistake: Adding `>` Before Every Item

Incorrect:

```css
.breadcrumb li::before {
    content: ">";
}
```

Result:

```text
> Asia > Singapore > Tourism > Hotels
```

Better:

```css
.breadcrumb li + li::before {
    content: ">";
}
```

Result:

```text
Asia > Singapore > Tourism > Hotels
```

---

# Common Mistake: Forgetting `display: inline`

Without:

```css
display: inline;
```

you may get:

```text
Asia
> Singapore
> Tourism
> Hotels
```

The items remain on separate lines.

---

# Common Mistake: Forgetting `content`

This does not show a separator:

```css
.breadcrumb li + li::before {
    color: gray;
}
```

You need:

```css
content: ">";
```

---

# Common Mistake: Reversing the Hierarchy

Incorrect:

```text
Hotels > Tourism > Singapore > Asia
```

Correct:

```text
Asia > Singapore > Tourism > Hotels
```

Breadcrumbs normally move from:

```text
Broad
  │
  ▼
Specific
```

---

# Common Mistake: Thinking the Separator Is a Link

The `>` is generated by CSS.

It is not itself a navigation destination.

Conceptually:

```text
Asia > Singapore
^^^^   ^^^^^^^^^
link     link

     ^
     separator only
```

---

# Common Mistake: Overstyling Breadcrumbs

Breadcrumbs should usually remain visually secondary.

Avoid making them more prominent than:

* The page title
* Primary navigation
* Main content

Their purpose is orientation, not visual dominance.

---

# Quick Reference

| CSS / HTML                | Purpose                                           |
| ------------------------- | ------------------------------------------------- |
| `<ul class="breadcrumb">` | Creates breadcrumb container                      |
| `<li>`                    | Represents one breadcrumb level                   |
| `<a href="#">`            | Placeholder breadcrumb link                       |
| `.breadcrumb li`          | Selects breadcrumb list items                     |
| `display: inline`         | Places list items horizontally                    |
| `+`                       | Adjacent sibling combinator                       |
| `::before`                | Creates generated content before selected element |
| `content: ">"`            | Adds breadcrumb separator                         |
| `color: gray`             | Styles separator                                  |

---

# Selector Quick Reference

```css
.breadcrumb li
```

Means:

```text
All <li> elements inside .breadcrumb
```

```css
li + li
```

Means:

```text
An li immediately following another li
```

```css
li + li::before
```

Means:

```text
Generate content before each li after the first
```

---

# Key Takeaways

* Breadcrumbs help users answer “Where am I?”
* The exercise represents the hierarchy `Asia > Singapore > Tourism > Hotels`.
* Breadcrumbs can be built from a simple HTML list.
* `display: inline` places breadcrumb list items on one line.
* The adjacent sibling combinator `+` selects breadcrumb items after the first.
* `::before` creates generated content before those selected items.
* `content: ">"` inserts the breadcrumb separator.
* CSS-generated separators are easier to maintain than manually typing separators into HTML.
* Breadcrumbs usually move from broad categories to more specific ones.
* Breadcrumb navigation should remain compact and visually secondary.
* Production breadcrumbs can be improved with `<nav>`, `<ol>`, real URLs, and `aria-current="page"`.

---

# Final Mental Model

```text
Current Page: Singapore Hotels
            │
            ▼
     Site Hierarchy
            │
            ▼
Asia
  >
Singapore
  >
Tourism
  >
Hotels
            │
            ▼
User Immediately Knows
Where the Page Belongs
```

---

> **Final Reminder:** A breadcrumb is more than a row of links. It is a visual representation of a site's hierarchy. In this exercise, CSS converts a plain list into a compact navigation trail by placing items inline and automatically inserting separators between adjacent list items.

