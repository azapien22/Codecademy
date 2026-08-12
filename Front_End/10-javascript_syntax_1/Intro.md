# JavaScript Syntax, Part I

> **Unit Goal:** Build a strong foundation in JavaScript by learning its role in web development and practicing the core syntax used to write simple programs.

---

# Overview

JavaScript is one of the core technologies of modern web development.

It is primarily used to add **behavior, logic, and interactivity** to websites and web applications.

While HTML provides structure and CSS provides presentation, JavaScript provides functionality.

```text
HTML
 │
 ▼
Structure

CSS
 │
 ▼
Presentation

JavaScript
 │
 ▼
Behavior + Logic + Interactivity
```

Together, these technologies form the foundation of front-end web development.

---

# What Is JavaScript?

**JavaScript** is a programming language commonly used to create dynamic and interactive web experiences.

JavaScript can:

* Respond to user input
* Modify webpage content
* Perform calculations
* Validate forms
* Show or hide elements
* Communicate with servers
* Update content without reloading a page
* Power complete web applications

Example:

```javascript
console.log('Hello, JavaScript!');
```

Output:

```text
Hello, JavaScript!
```

---

# JavaScript's Role in Web Development

A useful way to understand the relationship between HTML, CSS, and JavaScript is:

```text
HTML
────
What is on the page?

CSS
───
What does it look like?

JavaScript
──────────
What does it do?
```

---

# Example

## HTML

```html
<button id="message-button">
    Show Message
</button>
```

HTML creates the button.

---

## CSS

```css
button {
    padding: 0.75rem 1rem;
    background-color: royalblue;
    color: white;
}
```

CSS controls the button's appearance.

---

## JavaScript

```javascript
const button = document.querySelector('#message-button');

button.addEventListener('click', () => {
    console.log('The button was clicked!');
});
```

JavaScript defines what happens when the user clicks the button.

---

# Unit Objectives

By the end of this unit, you should be able to:

* Explain JavaScript's role in web development
* Read introductory JavaScript code
* Write basic JavaScript syntax
* Create and use variables
* Write conditional logic
* Define and call functions
* Understand introductory scope
* Practice JavaScript syntax
* Execute JavaScript outside Codecademy

---

# Core Topics

This unit introduces several fundamental programming concepts.

```text
JavaScript Basics
       │
       ├── Variables
       ├── Conditionals
       ├── Functions
       └── Scope
```

These concepts will appear repeatedly throughout JavaScript development.

---

# Variables

A **variable** stores a value so it can be referenced later.

Example:

```javascript
let username = 'Amaury';
```

Here:

```text
let
 │
 └── Declares a variable

username
 │
 └── Variable name

'Amaury'
 │
 └── Stored value
```

---

# Declaring Variables

Modern JavaScript commonly uses:

```javascript
let
const
```

Example:

```javascript
let score = 10;

const course = 'Full Stack Engineer';
```

---

# `let`

Use `let` when the value may change.

```javascript
let score = 10;

score = 20;
```

---

# `const`

Use `const` when the variable should not be reassigned.

```javascript
const language = 'JavaScript';
```

Attempting to reassign it causes an error:

```javascript
language = 'Python';
```

---

# Conditionals

**Conditionals** allow a program to make decisions.

Example:

```javascript
const temperature = 30;

if (temperature < 32) {
    console.log('It is freezing.');
} else {
    console.log('It is above freezing.');
}
```

The program checks a condition and decides which block of code should execute.

---

# Conditional Flow

```text
Evaluate Condition
       │
       ▼
   Is it true?
    │       │
   Yes      No
    │       │
    ▼       ▼
Run if   Run else
block     block
```

---

# Basic `if` Statement

```javascript
if (condition) {
    // Code runs when condition is true
}
```

Example:

```javascript
const isLoggedIn = true;

if (isLoggedIn) {
    console.log('Welcome back!');
}
```

---

# `if...else`

```javascript
if (condition) {
    // Runs if true
} else {
    // Runs if false
}
```

Example:

```javascript
const age = 18;

if (age >= 18) {
    console.log('Adult');
} else {
    console.log('Minor');
}
```

---

# Functions

A **function** is a reusable block of code designed to perform a task.

Example:

```javascript
function greet() {
    console.log('Hello!');
}
```

The function is defined first.

It can then be executed by calling it:

```javascript
greet();
```

Output:

```text
Hello!
```

---

# Function Flow

```text
Define Function
      │
      ▼
Call Function
      │
      ▼
Execute Statements
      │
      ▼
Optional Return Value
```

---

# Function with Parameters

Functions can receive values called **parameters**.

```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}
```

Call the function:

```javascript
greet('Aoife');
```

Output:

```text
Hello, Aoife!
```

---

# Returning Values

Functions can also return values.

```javascript
function add(a, b) {
    return a + b;
}
```

Use the result:

```javascript
const total = add(5, 3);

console.log(total);
```

Output:

```text
8
```

---

# Scope

**Scope** determines where variables can be accessed within a program.

Consider:

```javascript
const globalMessage = 'Hello';

function displayMessage() {
    const localMessage = 'World';

    console.log(globalMessage);
    console.log(localMessage);
}
```

Inside the function, both variables are accessible.

Outside the function:

```javascript
console.log(globalMessage);
```

works.

But:

```javascript
console.log(localMessage);
```

does not work because `localMessage` exists only inside the function.

---

# Scope Visualization

```text
Global Scope
│
├── globalMessage
│
└── displayMessage()
      │
      └── Local Scope
            │
            └── localMessage
```

---

# Why Scope Matters

Scope helps:

* Prevent naming conflicts
* Organize code
* Protect values
* Control where data can be accessed
* Make programs easier to reason about

---

# Practicing JavaScript Syntax

Programming is learned primarily through writing code.

Reading JavaScript is useful, but frequent practice is essential.

A strong learning cycle looks like:

```text
Learn Concept
      │
      ▼
Read Example
      │
      ▼
Write Code
      │
      ▼
Run Code
      │
      ▼
Encounter Errors
      │
      ▼
Debug
      │
      ▼
Understand Concept Better
```

Errors are a normal part of programming and often provide valuable information about how the language works.

---

# Executing JavaScript

JavaScript is not limited to Codecademy's browser environment.

There are several ways to run JavaScript independently.

---

# Browser Console

Modern browsers include a JavaScript console.

In Chrome or Edge:

```text
Developer Tools
      │
      ▼
Console
```

You can type:

```javascript
console.log('Hello from the browser!');
```

and execute it immediately.

---

# JavaScript in an HTML File

JavaScript can be placed inside a `<script>` element.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Practice</title>
</head>

<body>

    <h1>JavaScript Practice</h1>

    <script>
        console.log('JavaScript is running!');
    </script>

</body>
</html>
```

---

# External JavaScript File

A more common approach is to keep JavaScript in its own file.

Project structure:

```text
project/
│
├── index.html
└── script.js
```

### `script.js`

```javascript
console.log('Hello from script.js!');
```

### `index.html`

```html
<script src="script.js"></script>
```

---

# Running JavaScript with Node.js

JavaScript can also run outside the browser with **Node.js**.

Example file:

```javascript
console.log('Running JavaScript with Node.js');
```

Save it as:

```text
app.js
```

Then execute:

```bash
node app.js
```

Output:

```text
Running JavaScript with Node.js
```

This becomes increasingly important in full-stack development.

---

# Front-End vs Back-End JavaScript

JavaScript can run in multiple environments.

```text
JavaScript
    │
    ├── Browser
    │     │
    │     └── Front-End Development
    │
    └── Node.js
          │
          └── Back-End Development
```

This ability to work on both sides of an application is one reason JavaScript is so important for full-stack engineers.

---

# Basic JavaScript Program

```javascript
const userName = 'Aoife';
let visits = 3;

function welcomeUser(name) {
    if (visits > 1) {
        return `Welcome back, ${name}!`;
    } else {
        return `Welcome, ${name}!`;
    }
}

console.log(welcomeUser(userName));
```

This small program combines:

* Variables
* A function
* A conditional
* Scope
* A return value

---

# Program Breakdown

```text
Variables
   │
   ├── userName
   └── visits

Function
   │
   └── welcomeUser()

Conditional
   │
   ├── visits > 1
   │
   ├── true  → Welcome back
   │
   └── false → Welcome

Output
   │
   ▼
console.log()
```

---

# Useful Beginner Syntax

## Comments

Single-line comment:

```javascript
// This is a JavaScript comment
```

Multi-line comment:

```javascript
/*
This is a
multi-line comment.
*/
```

---

## Printing Values

```javascript
console.log('Hello!');
```

---

## Variable

```javascript
let score = 10;
```

---

## Constant

```javascript
const language = 'JavaScript';
```

---

## Conditional

```javascript
if (score > 5) {
    console.log('High score!');
}
```

---

## Function

```javascript
function sayHello() {
    console.log('Hello!');
}
```

---

## Function Call

```javascript
sayHello();
```

---

# JavaScript Syntax Fundamentals

JavaScript syntax includes several common symbols.

| Symbol  | Purpose                       |
| ------- | ----------------------------- |
| `()`    | Function calls and conditions |
| `{}`    | Code blocks                   |
| `[]`    | Arrays and bracket access     |
| `;`     | Ends a statement              |
| `=`     | Assignment                    |
| `===`   | Strict equality               |
| `//`    | Single-line comment           |
| `/* */` | Multi-line comment            |

You will encounter these symbols constantly as you progress.

---

# Learning Strategy

A strong approach to this unit is:

1. Read each concept carefully.
2. Type every example manually.
3. Experiment with the values.
4. Predict the output before running the code.
5. Run the code.
6. Read errors instead of immediately deleting them.
7. Rewrite examples from memory.
8. Build small experiments outside Codecademy.

---

# Practice Example

Start with:

```javascript
let number = 5;

if (number > 3) {
    console.log('The number is greater than 3.');
}
```

Then experiment.

Change:

```javascript
number = 2;
```

Predict what will happen before running the program.

This type of experimentation develops programming intuition.

---

# Community and Learning

Learning programming does not have to be an isolated activity.

Codecademy encourages learners to participate in its community to:

* Ask questions
* Discuss difficult concepts
* Share projects
* Celebrate progress
* Learn from other developers

Community interaction can make the learning process more sustainable and motivating.

---

# Full-Stack Perspective

These JavaScript fundamentals may seem simple, but they form the basis of much more advanced development.

```text
Variables
Conditionals
Functions
Scope
      │
      ▼
Arrays + Objects
      │
      ▼
DOM Manipulation
      │
      ▼
Events
      │
      ▼
Async JavaScript
      │
      ▼
APIs
      │
      ▼
Node.js
      │
      ▼
Back-End Applications
      │
      ▼
Full-Stack Development
```

A strong understanding of the fundamentals makes advanced JavaScript much easier to learn.

---

# Quick Reference

| Concept         | Purpose                                   |
| --------------- | ----------------------------------------- |
| JavaScript      | Adds behavior and logic to applications   |
| Variable        | Stores a value                            |
| `let`           | Declares a reassignable variable          |
| `const`         | Declares a non-reassignable variable      |
| Conditional     | Makes decisions                           |
| Function        | Groups reusable logic                     |
| Parameter       | Input defined by a function               |
| Argument        | Value passed into a function              |
| `return`        | Sends a value back from a function        |
| Scope           | Determines where variables are accessible |
| `console.log()` | Prints information to the console         |
| Node.js         | Runs JavaScript outside the browser       |

---

# Key Takeaways

* JavaScript is one of the core technologies of web development.
* HTML provides structure, CSS provides presentation, and JavaScript provides behavior.
* This unit introduces foundational JavaScript syntax.
* Variables store and reference data.
* Conditionals allow programs to make decisions.
* Functions organize reusable logic.
* Scope controls where variables can be accessed.
* JavaScript can run both inside and outside a browser.
* Node.js allows JavaScript to run in server-side and command-line environments.
* Frequent practice is essential for developing programming skill.
* These fundamentals form the foundation for more advanced full-stack development.

---

> **Final Reminder:** Do not focus only on memorizing JavaScript syntax. Focus on understanding what each piece of code tells the computer to do. Syntax becomes much easier to remember once the underlying programming logic makes sense.

