# Learn Secondary Navigation: Breadcrumb Styles

> **Breadcrumbs do not have to be plain text separated by `>` symbols. With pseudo-elements, borders, positioning, and hover states, CSS can transform simple breadcrumb links into highly visual arrow-shaped navigation components.**

---

# Overview

The previous breadcrumb examples used a minimal design:

```text
Asia > Singapore > Tourism > Hotels
```

That is often enough.

But sometimes you may want breadcrumbs to feel more interactive and visually prominent.

One possible design is:

```text
[ Asia ▶ ][ Singapore ▶ ][ Tourism ▶ ][ Hotels ▶ ]
```

or more precisely:

```text
< Asia >< Singapore >< Tourism >< Hotels >
```

The lesson achieves this effect entirely with CSS.

The important concepts are:

* `float`
* `position: relative`
* `position: absolute`
* `::before`
* `::after`
* CSS borders
* Transparent borders
* Hover states

---

# Starting Point

The previous breadcrumb used something like:

```css
.breadcrumb li {
    display: inline;
}

.breadcrumb li + li::before {
    color: gray;
    content: ">";
}
```

This produced:

```text
Asia > Singapore > Tourism > Hotels
```

The new design no longer needs the `>` separators.

Instead, each link itself will become an arrow.

---

# Step 1: Remove the Old Separators

The previous selector:

```css
.breadcrumb li + li::before {
    color: gray;
    content: ">";
}
```

generated the `>` characters.

Because the new breadcrumb will create arrow shapes using pseudo-elements, this separator is removed.

So delete:

```css
.breadcrumb li + li::before {
    color: gray;
    content: ">";
}
```

---

# Why Remove It?

If the old separator remained, you might get something visually redundant like:

```text
[Asia ▶] > [Singapore ▶] > [Tourism ▶]
```

The arrow shape itself now communicates direction.

---

# Step 2: Create the Arrow Body

The links are styled with:

```css
.breadcrumb a {
    color: #fff;
    background: darkcyan;
    text-decoration: none;
    position: relative;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-right: 15px;
    padding: 0 5px;
}
```

And the list items become:

```css
.breadcrumb li {
    float: left;
}
```

---

# What `float: left` Does

Previously:

```css
display: inline;
```

placed breadcrumb items on one line.

The new example uses:

```css
float: left;
```

This makes each list item float to the left, allowing them to sit horizontally.

Conceptually:

```text
li
li
li
li
```

becomes:

```text
li li li li
```

---

# Why Float Is Used Here

This lesson uses floats because the arrow-shaped links are being treated more like small blocks than ordinary inline text.

Each breadcrumb needs:

* A height
* Background color
* Padding
* Positioned pseudo-elements

Historically, floats were a common way to lay out components like this horizontally.

---

# Modern Note

Today, Flexbox would usually be preferred for this layout.

For example:

```css
.breadcrumb {
    display: flex;
}
```

But the lesson's use of:

```css
float: left;
```

is still valuable to understand because many older CSS layouts use floats.

---

# Understanding the Link Styles

Let's examine each declaration.

---

# `color: #fff`

```css
color: #fff;
```

sets the link text to white.

Equivalent:

```css
color: white;
```

So:

```text
darkcyan background
+
white text
```

creates strong contrast.

---

# `background: darkcyan`

```css
background: darkcyan;
```

creates the main colored rectangle that becomes the body of the arrow.

Conceptually:

```text
┌────────────┐
│ Singapore  │
└────────────┘
```

Later, pseudo-elements will add the arrow head and tail.

---

# `text-decoration: none`

```css
text-decoration: none;
```

removes the browser's default underline from the links.

That helps the links look more like navigation components or buttons.

---

# `position: relative`

```css
position: relative;
```

is extremely important.

The pseudo-elements will use:

```css
position: absolute;
```

By making the link relatively positioned, the pseudo-elements can be positioned relative to that link.

Mental model:

```text
Link
│
└── position: relative
     │
     ├── ::before positioned relative to link
     └── ::after positioned relative to link
```

---

# Positioning Relationship

Without:

```css
position: relative;
```

the absolutely positioned pseudo-elements might position themselves relative to some other ancestor.

With it:

```text
breadcrumb link
┌──────────────┐
│ Singapore    │
└──────────────┘
      ▲
      │
Pseudo-elements anchor here
```

---

# `height: 30px`

```css
height: 30px;
```

gives the breadcrumb link a fixed height.

This is important because the pseudo-element borders are also built around a total vertical size of `30px`.

---

# `line-height: 30px`

```css
line-height: 30px;
```

matches the element's height.

This vertically centers the text inside the breadcrumb.

Because:

```text
height = 30px
line-height = 30px
```

the text appears centered vertically.

---

# `text-align: center`

```css
text-align: center;
```

centers the text horizontally.

---

# `margin-right: 15px`

```css
margin-right: 15px;
```

creates spacing between breadcrumb links.

That spacing is necessary because the arrow head extends beyond the rectangular body.

---

# `padding: 0 5px`

```css
padding: 0 5px;
```

means:

```text
top/bottom padding: 0
left/right padding: 5px
```

This creates space around the breadcrumb text.

---

# Arrow Body Mental Model

At this point, each breadcrumb is roughly:

```text
┌──────────────┐
│  Singapore   │
└──────────────┘
```

The arrow head and tail do not exist yet.

---

# Step 3: Create `::before` and `::after`

The lesson adds:

```css
.breadcrumb a::before,
.breadcrumb a::after {
    content: "";
    position: absolute;
    border-color: darkcyan;
    border-style: solid;
    border-width: 15px 5px;
}
```

This creates two pseudo-elements for every breadcrumb link.

---

# Two Pseudo-Elements

Each link receives:

```text
::before
```

and:

```text
::after
```

Conceptually:

```text
::before    Link Body      ::after
    │           │              │
    ▼           ▼              ▼
   [?]   [ Singapore ]        [?]
```

These will eventually become:

* `::before` → arrow tail
* `::after` → arrow head

---

# `content: ""`

```css
content: "";
```

creates the pseudo-elements without displaying any text.

They exist purely for visual styling.

This is a common CSS technique.

---

# Why Empty Content?

The pseudo-elements are not meant to display characters.

Instead, their borders create geometric shapes.

So:

```css
content: "";
```

means:

> Create the pseudo-element, but give it no textual content.

---

# `position: absolute`

```css
position: absolute;
```

allows the pseudo-elements to be positioned precisely around the breadcrumb link.

Because the link itself has:

```css
position: relative;
```

the pseudo-elements use the link as their positioning reference.

---

# `border-style: solid`

```css
border-style: solid;
```

makes the pseudo-element's borders visible.

---

# `border-color: darkcyan`

```css
border-color: darkcyan;
```

initially makes all borders the same color as the breadcrumb body.

---

# `border-width: 15px 5px`

```css
border-width: 15px 5px;
```

uses shorthand.

It means:

```text
top:    15px
right:   5px
bottom: 15px
left:    5px
```

---

# Border Width Visualization

```text
          15px
            ▲
            │
        ┌───────┐
   5px  │       │  5px
        └───────┘
            │
            ▼
          15px
```

The total height becomes:

```text
15px + 15px = 30px
```

which matches:

```css
height: 30px;
```

on the breadcrumb link.

---

# Why the Pseudo-Elements Initially Look Wrong

At first, both pseudo-elements are positioned directly on top of the breadcrumb body.

Conceptually:

```text
[ pseudo-element ]
[ Singapore      ]
[ pseudo-element ]
```

They exist, but they have not yet been moved into place.

---

# Step 4: Move the Pseudo-Elements

The lesson uses:

```css
.breadcrumb a::before {
    left: -10px;
}

.breadcrumb a::after {
    left: 100%;
}
```

---

# Why `left: -10px`?

Each pseudo-element has:

```text
left border  = 5px
right border = 5px
```

Total horizontal width:

```text
5px + 5px = 10px
```

So:

```css
left: -10px;
```

moves the `::before` element exactly one pseudo-element width to the left.

---

# Before Position

```text
::before
     │
     ▼
[?][ Singapore ]
```

The pseudo-element now sits immediately to the left of the link.

---

# Why `left: 100%`?

```css
left: 100%;
```

positions the `::after` pseudo-element at the full width of the link.

Conceptually:

```text
[ Singapore ][?]
             ▲
             │
         left: 100%
```

This places it immediately after the breadcrumb body.

---

# Positioning Mental Model

```text
           breadcrumb link
        ┌──────────────┐
        │  Singapore   │
        └──────────────┘
        ▲              ▲
        │              │
left:-10px         left:100%
 ::before           ::after
```

---

# Step 5: Create the Arrow Head

The `::after` pseudo-element becomes the arrow head:

```css
.breadcrumb a::after {
    left: 100%;
    border-color: transparent;
    border-left-color: darkcyan;
}
```

---

# The CSS Border Triangle Trick

This is one of the most important concepts in this lesson.

A CSS element with no width or height but with thick borders can form triangles.

Imagine:

```text
        top border
            ▲
            │
left ◀──── center ────▶ right
            │
            ▼
       bottom border
```

Each border extends diagonally toward the center.

By making some borders transparent, only one triangular section remains visible.

---

# Arrow Head

The code:

```css
border-color: transparent;
border-left-color: darkcyan;
```

makes:

```text
top border    → transparent
right border  → transparent
bottom border → transparent
left border   → darkcyan
```

Only the left border remains visible.

That produces a right-pointing triangle:

```text
▶
```

---

# Why a Left Border Creates a Right-Pointing Triangle

This may initially seem backwards.

But border triangles point toward the element's center.

A visible left border extends inward from the left side, producing:

```text
▶
```

So:

```css
border-left-color: darkcyan;
```

creates the arrow head pointing right.

---

# Arrow Head Visualization

```text
       transparent
           /\
          /  \
darkcyan >    transparent
          \  /
           \/
       transparent
```

Simplified:

```text
▶
```

---

# Combined Arrow Body + Head

Now the link becomes:

```text
┌──────────────┐▶
│  Singapore   │
└──────────────┘
```

Conceptually:

```text
[ Singapore ▶ ]
```

---

# Step 6: Create the Arrow Tail

The `::before` element uses:

```css
.breadcrumb a::before {
    left: -10px;
    border-left-color: transparent;
}
```

Unlike the arrow head, the other borders remain `darkcyan`.

Only the left border becomes transparent.

---

# Tail Effect

The transparent left border cuts a triangular notch out of the left side.

Conceptually:

```text
   >
  / 
<   [ Singapore ]
  \
```

More simply:

```text
< Singapore ▶
```

The left side appears indented.

---

# Why the Tail Works

Initially all borders are darkcyan:

```text
████
████
```

Making:

```css
border-left-color: transparent;
```

removes the left triangle.

That creates the visual notch needed to fit the breadcrumb behind the previous arrow.

---

# Arrow Tail and Arrow Head Together

Conceptually:

```text
    tail          body           head
     │             │              │
     ▼             ▼              ▼
    <        Singapore           ▶
```

Combined:

```text
< Singapore ▶
```

Multiple breadcrumbs can visually interlock:

```text
< Asia ▶ < Singapore ▶ < Tourism ▶ < Hotels ▶
```

---

# Full Arrow Structure

Each breadcrumb link is composed of three parts:

```text
::before        link        ::after
   │             │             │
   ▼             ▼             ▼
  Tail         Body           Head
```

Or:

```text
     ┌─────────────┐
   < │ Singapore   │ >
     └─────────────┘
```

---

# Step 7: Add Hover Styling

The lesson adds:

```css
.breadcrumb a:hover {
    background-color: blue;
}

.breadcrumb a:hover::before {
    border-color: blue;
    border-left-color: transparent;
}

.breadcrumb a:hover::after {
    border-left-color: blue;
}
```

---

# Why All Three Parts Must Change

Remember that each visual breadcrumb is actually composed of:

```text
::before + link + ::after
```

If you changed only:

```css
background-color: blue;
```

the body would turn blue, but the arrow pieces would remain darkcyan.

That would look broken:

```text
darkcyan tail
      ▼
< [ BLUE BODY ] darkcyan head
```

So the pseudo-elements must also update.

---

# Hover State Breakdown

## Body

```css
.breadcrumb a:hover {
    background-color: blue;
}
```

Changes:

```text
darkcyan
   ↓
blue
```

---

# Tail

```css
.breadcrumb a:hover::before {
    border-color: blue;
    border-left-color: transparent;
}
```

This changes the tail borders to blue while preserving the transparent notch.

---

# Head

```css
.breadcrumb a:hover::after {
    border-left-color: blue;
}
```

The visible triangular border becomes blue.

---

# Hover Mental Model

Normal:

```text
< darkcyan breadcrumb ▶
```

Hover:

```text
< blue breadcrumb ▶
```

All visible parts change together.

---

# Full Exercise CSS

```css
.breadcrumb li {
    float: left;
}

.breadcrumb a {
    color: #fff;
    background: darkcyan;
    text-decoration: none;
    position: relative;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-right: 15px;
    padding: 0 5px;
}

.breadcrumb a::before,
.breadcrumb a::after {
    content: "";
    position: absolute;
    border-color: darkcyan;
    border-style: solid;
    border-width: 15px 5px;
}

.breadcrumb a::before {
    left: -10px;
    border-left-color: transparent;
}

.breadcrumb a::after {
    left: 100%;
    border-color: transparent;
    border-left-color: darkcyan;
}

.breadcrumb a:hover {
    background-color: blue;
}

.breadcrumb a:hover::before {
    border-color: blue;
    border-left-color: transparent;
}

.breadcrumb a:hover::after {
    border-left-color: blue;
}
```

---

# How the CSS Builds the Breadcrumb

The process is:

```text
Step 1
Plain Link

Singapore
```

Then:

```text
Step 2
Add Background

[ Singapore ]
```

Then:

```text
Step 3
Add ::before and ::after

[?][ Singapore ][?]
```

Then:

```text
Step 4
Position Them

[?] [ Singapore ] [?]
```

Then:

```text
Step 5
Make ::after a Triangle

[?] [ Singapore ] ▶
```

Then:

```text
Step 6
Make ::before a Notch

< [ Singapore ] ▶
```

Finally:

```text
Step 7
Add Hover State

< [ Singapore ] ▶
        ↓
< [ BLUE ] ▶
```

---

# The CSS Border Triangle Trick

This technique deserves special attention because it appears in many CSS designs.

Suppose an element has:

```css
width: 0;
height: 0;
border-style: solid;
border-width: 20px;
```

Each border forms a triangle around the center.

Conceptually:

```text
          ▲
         / \
        /   \
   ◀───•────▶
        \   /
         \ /
          ▼
```

If all borders are transparent except the left border:

```css
border-color: transparent;
border-left-color: red;
```

you get:

```text
▶
```

---

# Triangle Direction Reference

A useful memory aid:

```text
Visible border       Triangle points

border-left          ▶ right

border-right         ◀ left

border-top           ▼ down

border-bottom        ▲ up
```

This is one of those CSS behaviors that becomes easier to remember through practice.

---

# Why Borders Create Triangles

Borders meet diagonally at an element's corners.

With zero or near-zero content dimensions, those angled border intersections become very obvious.

Conceptually:

```text
┌─────────────┐
│             │
└─────────────┘
```

shrinks toward:

```text
      ▲
     / \
◀───•───▶
     \ /
      ▼
```

Each border effectively occupies a triangular region.

---

# The Role of Transparency

Transparency does not remove the geometry of the border.

It only makes it invisible.

So:

```css
border-color: transparent;
```

keeps the border space but hides it.

Then:

```css
border-left-color: darkcyan;
```

reveals only the left triangle.

---

# Positioning Relationship

This lesson demonstrates an extremely common CSS pattern:

```css
.parent {
    position: relative;
}

.parent::before {
    position: absolute;
}
```

Mental model:

```text
Relative Parent
┌──────────────────────┐
│                      │
│   Absolute Child     │
│                      │
└──────────────────────┘
```

The absolutely positioned element is anchored to the relatively positioned parent.

---

# Why `position: relative` Is So Useful

Setting:

```css
position: relative;
```

does not necessarily move the element.

It can simply establish a positioning context.

That is exactly what happens here.

The breadcrumb link stays in its normal location, but becomes the reference box for:

```css
::before
```

and:

```css
::after
```

---

# `left: 100%` Explained

Suppose the breadcrumb link is:

```text
100px wide
```

Then:

```css
left: 100%;
```

means:

```text
move to the point 100% across the parent's width
```

So:

```text
0%                     100%
│                         │
▼                         ▼
┌─────────────────────────┐
│       Singapore         │
└─────────────────────────┘
                          ▲
                          │
                     ::after
```

---

# Negative Positioning

The tail uses:

```css
left: -10px;
```

Negative positioning moves the pseudo-element to the left of its normal reference point.

```text
-10px      0px
  │         │
  ▼         ▼
[tail][ breadcrumb body ]
```

---

# Why the Pseudo-Element Width Is 10px

The border shorthand:

```css
border-width: 15px 5px;
```

means:

```text
left  = 5px
right = 5px
```

Therefore:

```text
5px + 5px = 10px
```

So:

```css
left: -10px;
```

moves the tail exactly its total horizontal border width.

---

# Height Relationship

Similarly:

```css
border-width: 15px 5px;
```

gives:

```text
top    = 15px
bottom = 15px
```

Total:

```text
15px + 15px = 30px
```

The link also has:

```css
height: 30px;
```

This alignment is deliberate.

---

# Dimension Relationship

```text
Breadcrumb body height:
30px

Pseudo-element vertical border:
15px + 15px
= 30px
```

These matching dimensions make the arrow pieces align with the body.

---

# Why `margin-right: 15px` Matters

The arrow head extends outside the normal rectangular link.

Without enough spacing, neighboring breadcrumb items could overlap.

Conceptually:

```text
Without spacing:

[Asia▶][Singapore▶]
```

Potential overlap:

```text
[Asia▶Singapore▶]
```

With:

```css
margin-right: 15px;
```

there is room for the arrow geometry.

---

# Pseudo-Element Anatomy

```text
            ::before
                │
                ▼
          ┌──────────┐
          │ borders  │
          └──────────┘
               +
          breadcrumb
          ┌──────────┐
          │   Asia   │
          └──────────┘
               +
             ::after
                │
                ▼
                ▶
```

---

# Hover State as Feedback

The hover style makes the breadcrumb more obviously interactive.

Without hover:

```text
< Asia ▶
```

With hover:

```text
< BLUE Asia ▶
```

This tells the user:

> This breadcrumb is clickable.

---

# Why Consistent Hover Styling Matters

Since the arrow consists of several CSS pieces, the visual state should change cohesively.

Good:

```text
BODY = blue
TAIL = blue
HEAD = blue
```

Bad:

```text
BODY = blue
TAIL = darkcyan
HEAD = darkcyan
```

The component should appear as one object.

---

# Pseudo-Class vs Pseudo-Element

This lesson combines both:

```css
:hover
```

and:

```css
::before
::after
```

They are different concepts.

---

# Pseudo-Class

```css
:hover
```

describes a state.

Example:

```text
User's pointer is over the element.
```

---

# Pseudo-Element

```css
::before
```

and:

```css
::after
```

create stylable generated parts of an element.

Mental model:

```text
:hover
│
└── State


::before / ::after
│
└── Generated visual pieces
```

---

# Combined Selector

Consider:

```css
.breadcrumb a:hover::after
```

Read it from left to right:

```text
.breadcrumb
│
└── inside breadcrumb

a
│
└── anchor element

:hover
│
└── while anchor is hovered

::after
│
└── style its after pseudo-element
```

In plain English:

> Select the `::after` pseudo-element of a breadcrumb link while the link is being hovered.

---

# Selector Breakdown Table

| Selector                      | Purpose                      |
| ----------------------------- | ---------------------------- |
| `.breadcrumb li`              | Select breadcrumb list items |
| `.breadcrumb a`               | Select breadcrumb links      |
| `.breadcrumb a::before`       | Tail pseudo-element          |
| `.breadcrumb a::after`        | Head pseudo-element          |
| `.breadcrumb a:hover`         | Hovered link body            |
| `.breadcrumb a:hover::before` | Hovered tail                 |
| `.breadcrumb a:hover::after`  | Hovered head                 |

---

# Visual Hierarchy

The arrow breadcrumb is more prominent than a simple text breadcrumb.

Simple:

```text
Asia > Singapore > Tourism > Hotels
```

Prominent:

```text
< Asia ▶ < Singapore ▶ < Tourism ▶ < Hotels ▶
```

This can encourage interaction.

---

# When More Prominent Breadcrumbs May Help

Arrow-style breadcrumbs may make sense when:

* Navigation is central to the experience
* Users frequently move among levels
* The breadcrumb doubles as a progress-like interface
* The site's visual language supports button-like navigation
* You want hierarchy to stand out

---

# When Simple Breadcrumbs May Be Better

A highly styled breadcrumb can also become distracting.

A simple breadcrumb may be preferable when:

* The page already has strong visual elements
* Breadcrumbs are only secondary navigation
* Minimalism is important
* Accessibility and clarity are the priority
* The hierarchy is long

Example:

```text
Home > Products > Electronics > Cameras
```

may be easier to scan than four large arrow buttons.

---

# Design Is a Judgment Call

The lesson emphasizes that breadcrumb styling depends on context.

There is no universal rule that breadcrumbs must be:

```text
plain
```

or:

```text
arrow-shaped
```

The right choice depends on:

* Site complexity
* Visual hierarchy
* Interaction needs
* Brand style
* Available space
* Accessibility
* Device size

---

# Common Mistake: Forgetting `position: relative`

If you remove:

```css
position: relative;
```

from:

```css
.breadcrumb a
```

the absolutely positioned pseudo-elements may no longer align with each breadcrumb correctly.

Always remember:

```text
relative parent
+
absolute pseudo-element
```

is a common positioning pattern.

---

# Common Mistake: Changing Only the Body on Hover

Incomplete:

```css
.breadcrumb a:hover {
    background-color: blue;
}
```

This can leave:

```text
darkcyan tail
blue body
darkcyan head
```

Better:

```css
.breadcrumb a:hover::before {
    border-color: blue;
    border-left-color: transparent;
}

.breadcrumb a:hover::after {
    border-left-color: blue;
}
```

---

# Common Mistake: Forgetting `content`

This will not create useful pseudo-elements:

```css
.breadcrumb a::before {
    position: absolute;
}
```

You normally need:

```css
content: "";
```

to generate them.

---

# Common Mistake: Forgetting Transparency

If all arrow-head borders remain visible:

```css
border-color: darkcyan;
```

you may get a block-like or diamond-like shape rather than a clean triangle.

You need:

```css
border-color: transparent;
border-left-color: darkcyan;
```

to isolate the correct triangle.

---

# Common Mistake: Wrong Border Direction

If you use:

```css
border-right-color: darkcyan;
```

instead of:

```css
border-left-color: darkcyan;
```

the triangle points the opposite direction.

Remember:

```text
left border  → points right
right border → points left
```

---

# Common Mistake: Forgetting Semicolons

CSS may sometimes recover from a missing final semicolon, but consistent syntax is best.

Prefer:

```css
content: "";
```

not:

```css
content: ""
```

especially when additional declarations follow.

---

# Production Accessibility Consideration

The visual arrow shape should not be the only indicator of meaning.

HTML should still preserve a logical breadcrumb structure.

For example:

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

CSS should enhance the navigation, not replace its semantic structure.

---

# Keyboard Focus

Hover works for mouse users, but keyboard users navigate links using focus.

A production version should also consider:

```css
.breadcrumb a:focus {
    outline: 2px solid currentColor;
}
```

or:

```css
.breadcrumb a:focus-visible {
    outline: 2px solid currentColor;
}
```

That ensures the focused link remains visible when navigating with the keyboard.

---

# Hover vs Focus

```text
Mouse user
    │
    ▼
:hover


Keyboard user
    │
    ▼
:focus / :focus-visible
```

Both interaction methods should receive clear feedback.

---

# Modern Layout Alternative

Instead of:

```css
.breadcrumb li {
    float: left;
}
```

you could use:

```css
.breadcrumb {
    display: flex;
}
```

This is generally easier to maintain.

However, the border and pseudo-element technique itself remains valid.

---

# Modern Example

```css
.breadcrumb {
    display: flex;
    list-style: none;
}

.breadcrumb li {
    margin-right: 15px;
}
```

The arrow construction could still use:

```css
::before
```

and:

```css
::after
```

exactly as in the lesson.

---

# Float Reminder

Floated elements can affect normal document flow.

Historically, developers often had to clear floats afterward.

For example:

```css
.breadcrumb::after {
    content: "";
    display: table;
    clear: both;
}
```

This is known as a **clearfix** pattern.

You do not necessarily need it in this exercise, but it is useful knowledge when working with float-based layouts.

---

# Float vs Flexbox

| Float                                 | Flexbox                       |
| ------------------------------------- | ----------------------------- |
| Originally designed for text wrapping | Designed for layout           |
| Older layout technique                | Modern layout system          |
| Often needs clearing                  | No clearfix needed            |
| Can be harder to control              | Usually easier to align items |
| Common in legacy code                 | Common in modern code         |

---

# Arrow Construction Mental Model

```text
1. Create rectangular body

[ Singapore ]


2. Create empty pseudo-elements

[?][ Singapore ][?]


3. Position them

[?] [ Singapore ] [?]


4. Turn ::after into visible left-border triangle

[?] [ Singapore ] ▶


5. Make ::before's left border transparent

< [ Singapore ] ▶


6. Add hover state

< [ Singapore ] ▶
         │
         ▼
< [ BLUE ] ▶
```

---

# CSS Geometry Mental Model

```text
Pseudo-element
     │
     ▼
No text content
     │
     ▼
Thick borders
     │
     ▼
Borders form triangles
     │
     ▼
Make unwanted borders transparent
     │
     ▼
Visible arrow shape
```

---

# Quick Reference

| CSS                         | Purpose                               |
| --------------------------- | ------------------------------------- |
| `float: left`               | Places breadcrumb items horizontally  |
| `position: relative`        | Creates positioning context           |
| `position: absolute`        | Precisely positions pseudo-elements   |
| `::before`                  | Creates arrow tail                    |
| `::after`                   | Creates arrow head                    |
| `content: ""`               | Creates empty pseudo-element          |
| `border-width: 15px 5px`    | Creates border geometry               |
| `border-color: transparent` | Hides unwanted border triangles       |
| `border-left-color`         | Creates right-pointing arrow triangle |
| `left: -10px`               | Moves tail left                       |
| `left: 100%`                | Places head after link                |
| `:hover`                    | Changes appearance on pointer hover   |

---

# Key Takeaways

* Breadcrumbs can be styled more prominently when greater interaction emphasis is desired.
* The basic `>` separators can be replaced with arrow-shaped breadcrumb components.
* `::before` and `::after` can create decorative pieces without additional HTML.
* `content: ""` creates empty pseudo-elements for styling.
* `position: relative` on the link creates a positioning reference for absolutely positioned pseudo-elements.
* CSS borders can create triangles because borders meet diagonally around an element.
* Transparent borders can hide unwanted portions of that geometry.
* `border-left-color` can create a right-pointing arrow head.
* The `::before` pseudo-element forms the arrow tail.
* The `::after` pseudo-element forms the arrow head.
* `left: -10px` positions the tail to the left.
* `left: 100%` positions the head immediately after the link.
* Hover styles must update the body, tail, and head together.
* `float: left` is used in this lesson, though Flexbox is usually preferred in modern layouts.
* Breadcrumb styling is a design decision: highly decorative breadcrumbs are not always better than simple ones.

---

# Final Mental Model

```text
Breadcrumb Link
      │
      ▼
┌───────────────┐
│   Singapore   │
└───────────────┘
      │
      ├── ::before
      │      │
      │      └── transparent border creates tail
      │
      └── ::after
             │
             └── visible left border creates ▶
```

Combined:

```text
      Tail        Body        Hd
       │           │           │
       ▼           ▼           ▼
       <      Singapore        ▶
```

And on hover:

```text
darkcyan
   │
   ▼
  blue
```

---

> **Final Reminder:** The core CSS trick in this lesson is that pseudo-elements do not need visible text to be useful. By combining `content: ""`, absolute positioning, thick borders, and transparent border colors, CSS can create geometric shapes such as arrows without adding extra HTML elements.

