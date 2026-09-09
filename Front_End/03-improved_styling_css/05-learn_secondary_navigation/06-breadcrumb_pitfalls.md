# Learn Secondary Navigation

## Breadcrumb Pitfalls

> Breadcrumbs are useful secondary navigation tools, but they should only be
> used when they genuinely improve the user's understanding of a website.

---

# Overview

Breadcrumbs can improve navigation by showing:

* The user's location within a website hierarchy
* The attributes or filters applied to the current page
* In some cases, the path a user followed through the site

However, breadcrumbs are **not appropriate for every website**.

Poorly implemented breadcrumbs can:

* Confuse users
* Duplicate existing navigation
* Add unnecessary visual clutter
* Create misleading expectations
* Complicate otherwise simple interfaces

The key principle is:

> **Use breadcrumbs only when they provide meaningful navigational context.**

---

# Users Have Expectations

Users are already familiar with common breadcrumb conventions.

Most users expect breadcrumbs to represent one of two things:

```text
1. Website hierarchy
2. Page or product attributes
```

For example:

```text
Home > Electronics > Computers > Laptops
```

clearly communicates a hierarchical relationship.

Likewise:

```text
Shoes > Brown x  Size 10 x
```

can communicate active product attributes or filters.

Because users have learned these conventions, designing breadcrumbs that behave
in unexpected ways can cause confusion.

---

# Avoid Reinventing Breadcrumb Behavior

Breadcrumbs are a familiar interface pattern.

That familiarity is useful because users do not need instructions explaining
how they work.

However, that advantage disappears when a breadcrumb behaves differently from
what users expect.

For example, a breadcrumb that unexpectedly:

* Changes order
* Displays unrelated pages
* Mixes navigation and actions
* Behaves like a menu
* Uses unclear labels

may become harder to understand than ordinary navigation.

A useful design principle is:

```text
Familiar pattern
      +
Familiar behavior
      =
Lower cognitive load
```

---

# Be Cautious With Path-Based Breadcrumbs

Path-based breadcrumbs represent the specific journey a user took through the
website.

Example:

```text
Home > About > Careers > Application
```

Another user might reach the same page through:

```text
Home > Jobs > Open Positions > Application
```

Because these breadcrumb trails depend on individual navigation history, they
can vary from one user to another.

---

## Why Path-Based Breadcrumbs Are Less Common

Path-based breadcrumbs can become difficult to manage because:

* Every user's path may be different
* Navigation histories may become long
* Users may revisit the same page through different routes
* The trail may not represent the site's actual structure
* Users may find the breadcrumb unpredictable

For these reasons, path-based breadcrumbs are relatively uncommon.

They should generally only be used when there is a **compelling user experience
reason** for displaying the user's navigation history.

---

# Breadcrumbs Are Secondary Navigation

One of the most important principles to remember is:

> **Breadcrumbs should support primary navigation, not replace it.**

Users typically navigate a website through elements such as:

```text
Navigation bars
Menus
Links
Buttons
Search
Sidebars
```

Breadcrumbs provide additional context.

They should not become the site's only navigation mechanism.

---

# Bad Navigation Structure

A site should not depend entirely on:

```text
Home > Products > Shoes > Running Shoes
```

as the only way to move between sections.

Users should still have access to primary navigation such as:

```text
Home | Products | Services | About | Contact
```

The breadcrumb then becomes an additional navigational aid.

---

# Primary vs. Secondary Navigation

A useful mental model is:

```text
PRIMARY NAVIGATION
        ↓
Main method for moving through the website
        ↓
Menus, navigation bars, search, links

SECONDARY NAVIGATION
        ↓
Provides additional context or shortcuts
        ↓
Breadcrumbs
```

Breadcrumbs enhance the navigation system rather than replace it.

---

# Avoid Unnecessary Breadcrumbs

Breadcrumbs should not be added simply because they are a common web design
pattern.

Before adding them, ask:

```text
Do users actually need this information?
```

If the answer is no, the breadcrumb may simply create unnecessary clutter.

---

# Small Websites May Not Need Breadcrumbs

Consider a website containing only:

```text
Home
About
Services
Contact
```

A breadcrumb such as:

```text
Home > About
```

may not provide much value if the navigation bar already contains:

```text
Home | About | Services | Contact
```

In this situation, the breadcrumb duplicates information that is already
clearly available.

---

# Avoid Navigation Duplication

Breadcrumbs should provide **additional navigational context**.

They should not simply repeat what users can already see.

For example:

```text
Primary Navigation
------------------
Home | About | Services | Contact

Breadcrumb
----------
Home > About
```

If the website is shallow and simple, the breadcrumb contributes little useful
information.

In contrast, a deeper website structure might benefit greatly from:

```text
Home > Products > Electronics > Computers > Laptops
```

because the breadcrumb reveals relationships that may not be immediately
visible in the primary navigation.

---

# Complexity Matters

Breadcrumb usefulness generally increases as website hierarchy becomes deeper.

For example:

```text
Shallow Website
===============

Home
├── About
├── Services
└── Contact
```

Breadcrumbs may be unnecessary.

Compare that with:

```text
Large Website
=============

Home
└── Products
    └── Electronics
        └── Computers
            └── Laptops
                └── Gaming Laptops
```

Here, breadcrumbs can help users understand exactly where they are.

---

# The Principle of Simplicity

A strong design principle applies directly to breadcrumb navigation:

> **Do not add unnecessary elements to an interface.**

Every interface element should have a purpose.

Before adding breadcrumbs, ask:

```text
1. Does this help users understand where they are?

2. Does this reveal information that primary navigation does not?

3. Is the site's hierarchy complex enough to justify it?

4. Will users understand the breadcrumb immediately?

5. Does it reduce navigation effort?
```

If the answer to most of these questions is no, breadcrumbs may not be
necessary.

---

# When Breadcrumbs Are Useful

Breadcrumbs are particularly useful when:

```text
✓ The website has a deep hierarchy

✓ Users frequently move between parent and child categories

✓ Product filtering is important

✓ The current page's location may not be obvious

✓ The website contains many sections or categories

✓ Users benefit from understanding their context
```

Common examples include:

```text
E-commerce websites
Documentation websites
Government websites
Educational platforms
Large corporate websites
Online marketplaces
Content-heavy websites
```

---

# When Breadcrumbs May Be Unnecessary

Breadcrumbs may not provide much value when:

```text
✗ The website contains only a few pages

✗ The navigation hierarchy is very shallow

✗ Primary navigation already exposes every important page

✗ Breadcrumbs duplicate existing navigation

✗ The breadcrumb would add visual clutter

✗ The breadcrumb behavior would be unconventional or confusing
```

---

# Breadcrumb Decision Model

A simple decision process can help determine whether breadcrumbs are
appropriate:

```text
Does the site have a meaningful hierarchy?
                |
        +-------+-------+
        |               |
       YES              NO
        |               |
        v               v
Would breadcrumbs      Breadcrumbs may
help users understand  not be necessary
their location?
        |
    +---+---+
    |       |
   YES      NO
    |       |
    v       v
Consider   Avoid
using      unnecessary
breadcrumbs breadcrumbs
```

---

# Breadcrumb Pitfalls at a Glance

| Pitfall                            | Why It Matters                              |
| ---------------------------------- | ------------------------------------------- |
| Replacing primary navigation       | Breadcrumbs are secondary navigation        |
| Overusing path breadcrumbs         | User journeys vary and can become confusing |
| Adding breadcrumbs to simple sites | May create unnecessary clutter              |
| Duplicating primary navigation     | Provides little additional value            |
| Breaking familiar conventions      | Users expect predictable behavior           |
| Adding unnecessary UI elements     | Increases complexity without helping users  |

---

# Design Principle: Convention Over Novelty

Breadcrumbs are effective partly because users already recognize them.

A conventional breadcrumb:

```text
Home > Products > Shoes
```

requires almost no explanation.

An unconventional breadcrumb system may require users to stop and determine:

```text
What does this mean?

Is this navigation?

Is this history?

Is this a filter?

Can I click it?
```

Whenever users must spend additional effort understanding a familiar interface
pattern, usability usually decreases.

---

# Key Takeaways

### 1. Breadcrumbs are not appropriate for every website

Use them when they provide meaningful context rather than adding them by
default.

### 2. Users expect conventional breadcrumb behavior

Breadcrumbs normally represent:

```text
Location
```

or:

```text
Attributes
```

Unexpected behavior may confuse users.

### 3. Path-based breadcrumbs should be used carefully

Because they depend on an individual user's journey, they can become
unpredictable and difficult to understand.

Use them only when there is a strong reason.

### 4. Breadcrumbs are secondary navigation

They should complement:

```text
Menus
Navigation bars
Links
Search
```

rather than replace them.

### 5. Do not duplicate navigation unnecessarily

If users can already access the same information easily through primary
navigation, breadcrumbs may provide little additional value.

### 6. Simple websites may not need breadcrumbs

A website with only a few pages and a shallow hierarchy usually does not
require additional navigational context.

### 7. Keep the interface purposeful

Every interface element should solve a user problem.

If the breadcrumb does not make navigation easier or the site's structure
clearer, leave it out.

---

# Quick Reference

```text
Breadcrumb Pitfalls
===================

Do NOT:
-------
- Replace primary navigation with breadcrumbs
- Use breadcrumbs simply because other sites use them
- Add them to very simple websites without a reason
- Duplicate information already visible in primary navigation
- Make breadcrumbs behave unpredictably
- Overuse path-based breadcrumbs


DO:
---
- Follow familiar breadcrumb conventions
- Use breadcrumbs for meaningful hierarchy
- Use attributes when representing filters
- Keep primary navigation available
- Evaluate whether breadcrumbs improve usability
- Keep the interface simple
```

---

# Summary

Breadcrumbs are most effective when they communicate meaningful navigation
context without introducing unnecessary complexity.

A useful breadcrumb should answer questions such as:

```text
Where am I?
```

or:

```text
Which attributes are currently applied?
```

It should not force the user to ask:

```text
What does this breadcrumb mean?
```

The fundamental design rule is:

```text
Useful Context
      +
Predictable Behavior
      +
Primary Navigation
      -
Unnecessary Complexity
      =
Effective Breadcrumb Navigation
```

When breadcrumbs do not add meaningful value, the best design decision may be
to leave them out entirely.

