# HTML Comments

## Overview

HTML allows developers to include **comments** in their code.

Comments are notes written inside the HTML file that are **not displayed in the browser**.

They are used to:

- explain code
- organize sections
- temporarily disable code
- leave notes for future development

---

## Comment Syntax

HTML comments begin with:

    <!--

and end with:

    -->

Structure:

    <!-- comment text -->

Example:

    <!-- This is a comment that the browser will not display -->

---

## How Browsers Treat Comments

Browsers **ignore everything inside a comment**.

Example HTML:

    <!-- This text will not appear on the webpage -->

Result:

    nothing is displayed to the user.

Diagram:
```Text
    comment
      |
      ▼
    ignored by browser
```
---

## Example from the Lesson

Example comment:

    <!-- Favorite Films Section -->

HTML code:

    <!-- Favorite Films Section -->
    <p>The following is a list of my favorite films:</p>

Explanation:

The comment labels the section of the webpage.

Structure:
```Text
    comment
      |
      ▼
    paragraph content
```
---

## Commenting Out Code

Developers sometimes **disable code temporarily** using comments.

Example:

    <!-- <p> Test Code </p> -->

The browser ignores this code, so the paragraph does not appear.

Concept:
```Text
    commented code
        |
        ▼
    ignored by browser
```
---

## Why Developers Use Comments

Comments help developers:

- explain complex code
- mark sections of a page
- collaborate with other developers
- test new ideas safely
- temporarily disable code

Example:

    <!-- Navigation Menu -->
    <!-- Header Section -->
    <!-- Footer Section -->

---

## Example Page with Comments

Example HTML:
```Text
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Website</title>
      </head>
      <body>

        <!-- Page Header -->
        <h1>Welcome</h1>

        <!-- Main Content -->
        <p>This is my webpage.</p>

      </body>
    </html>
```
Structure diagram:
```Text
    html
     ├── head
     │    └── title
     └── body
          ├── comment
          ├── h1
          ├── comment
          └── p
```
---

## Key Pattern

Basic comment structure:

    <!-- comment text -->

Example:

    <!-- This section contains navigation links -->
