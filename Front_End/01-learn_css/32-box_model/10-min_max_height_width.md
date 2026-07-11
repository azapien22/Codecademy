# CSS — Minimum and Maximum Height and Width

## Overview

Web pages are viewed on many different devices:

- desktop monitors
- laptops
- tablets
- mobile phones

Because screen sizes vary, elements can become:

    too narrow
    too wide
    too short
    too tall

CSS provides special properties that prevent elements from
becoming too large or too small.

These properties are:

    min-width
    max-width
    min-height
    max-height

---

# Why Use Minimum and Maximum Sizes?

Without limits:

    content may become difficult to read

Example:

    Browser window shrinks

Result:

    paragraph becomes extremely narrow

Or:

    Browser window expands

Result:

    paragraph stretches across the entire screen

Both situations reduce readability.

---

# min-width

## Definition

Sets the minimum width an element is allowed to have.

Syntax:

    min-width: value;

Example:

    p {
      min-width: 300px;
    }

Result:

    paragraph can never become
    narrower than 300px

---

## Visual Example

Without min-width:

    +----+
    |Text|
    +----+

With min-width:

    +------------------+
    |       Text       |
    +------------------+

---

# max-width

## Definition

Sets the maximum width an element is allowed to have.

Syntax:

    max-width: value;

Example:

    p {
      max-width: 600px;
    }

Result:

    paragraph can never exceed
    600px in width

---

## Visual Example

Without max-width:

    +---------------------------------------------+
    | Extremely long line of text across screen   |
    +---------------------------------------------+

With max-width:

    +------------------------+
    | Easier to read text    |
    +------------------------+

---

# Combining min-width and max-width

Example:

    p {
      min-width: 300px;
      max-width: 600px;
    }

Result:

    width stays between:

        300px
        and
        600px

---

## Diagram

    300px  ← minimum

    +------------------+
    |      Content     |
    +------------------+

          ↔

    +----------------------------------+
    |             Content              |
    +----------------------------------+

    600px  ← maximum

---

# min-height

## Definition

Sets the minimum height an element is allowed to have.

Syntax:

    min-height: value;

Example:

    p {
      min-height: 150px;
    }

Result:

    element height can never be
    less than 150px

---

## Visual Example

Without min-height:

    +------+
    |Text  |
    +------+

With min-height:

    +------+
    |Text  |
    |      |
    |      |
    +------+

---

# max-height

## Definition

Sets the maximum height an element is allowed to have.

Syntax:

    max-height: value;

Example:

    p {
      max-height: 300px;
    }

Result:

    height can never exceed 300px

---

# Combining min-height and max-height

Example:

    p {
      min-height: 150px;
      max-height: 300px;
    }

Result:

    height remains between:

        150px
        and
        300px

---

# Complete Example

CSS:

    p {
      min-width: 300px;
      max-width: 600px;

      min-height: 150px;
      max-height: 300px;
    }

Result:

    Width range:

        300px → 600px

    Height range:

        150px → 300px

---

# What Happens If max-height Is Too Small?

Example:

    p {
      max-height: 50px;
    }

But content needs:

    200px

Result:

    content may overflow

---

## Overflow Example

    +-------------+
    | Paragraph   |
    | text        |
    +-------------+
      More text
      spilling out

This creates:

    unreadable content

---

# Real-World Use Cases

## Article Content

    article {
      max-width: 700px;
    }

Prevents text lines from becoming too long.

---

## Images

    img {
      max-width: 100%;
    }

Prevents images from exceeding container size.

---

## Cards

    .card {
      min-height: 250px;
    }

Keeps all cards a consistent height.

---

# Width vs Height

## Width

Controls:

    horizontal size

Properties:

    width
    min-width
    max-width

---

## Height

Controls:

    vertical size

Properties:

    height
    min-height
    max-height

---

# Quick Reference

Minimum Width

    min-width: 300px;

---

Maximum Width

    max-width: 600px;

---

Minimum Height

    min-height: 150px;

---

Maximum Height

    max-height: 300px;

---

# Box Model Review

    Margin
        ↓
    Border
        ↓
    Padding
        ↓
    Content

These properties control:

    Content Area Size

Specifically:

    width
    height

and their limits.

---

# Key Takeaways

- Different screen sizes can affect content readability.
- `min-width` prevents an element from becoming too narrow.
- `max-width` prevents an element from becoming too wide.
- `min-height` prevents an element from becoming too short.
- `max-height` prevents an element from becoming too tall.
- These properties improve responsive design and readability.
- Setting `max-height` too small may cause content overflow.

Most common pattern:

    min-width: 300px;
    max-width: 600px;

to keep text readable across different devices.
