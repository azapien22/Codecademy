# Introduction to JavaScript: What Is JavaScript?

> **JavaScript is a powerful, flexible programming language that drives the interactive behavior of modern websites and serves as one of the core technologies of web development.**

---

# Overview

JavaScript is one of the most widely used programming languages in modern web development.

It is primarily known for running inside web browsers and making webpages interactive.

JavaScript can:

* Respond to user actions
* Update webpage content
* Perform calculations
* Validate forms
* Create animations
* Communicate with servers
* Build complete web applications

Although JavaScript had some unusual behavior in its early years, the language has continued to evolve and improve.

Today, it is:

* Powerful
* Fast
* Flexible
* Widely supported
* Used far beyond simple browser scripting

---

# JavaScript and the Web

JavaScript works alongside HTML and CSS.

```text
HTML
 │
 └── Structure

CSS
 │
 └── Presentation

JavaScript
 │
 └── Behavior + Interactivity
```

Together, these technologies form the foundation of front-end web development.

---

# HTML: Structure

HTML defines what appears on the page.

```html
<button id="greet-button">
    Say Hello
</button>
```

This creates a button.

---

# CSS: Presentation

CSS controls how the button looks.

```css
button {
    padding: 0.75rem 1rem;
    background-color: royalblue;
    color: white;
}
```

---

# JavaScript: Behavior

JavaScript determines what happens when the user interacts with the button.

```javascript
const button = document.querySelector('#greet-button');

button.addEventListener('click', () => {
    console.log('Hello!');
});
```

Now the button responds when clicked.

---

# Why JavaScript Is Important

JavaScript is responsible for much of the dynamic behavior users experience on websites.

Examples include:

* Dropdown menus
* Form validation
* Image galleries
* Shopping carts
* Search suggestions
* Interactive maps
* Games
* Modals
* Notifications
* Real-time updates

Without JavaScript, many webpages would be mostly static.

---

# Dynamic Behavior

A webpage is **dynamic** when its content or behavior can change while the user interacts with it.

Example:

```javascript
let count = 0;

count++;

console.log(count);
```

Output:

```text
1
```

JavaScript can change data while a program is running.

---

# Example: Interactive Counter

```html
<button id="counter-button">
    Increase
</button>

<p id="count">0</p>
```

```javascript
let count = 0;

const button = document.querySelector('#counter-button');
const display = document.querySelector('#count');

button.addEventListener('click', () => {
    count++;
    display.textContent = count;
});
```

Each click changes the displayed number.

```text
User Clicks Button
        │
        ▼
JavaScript Runs
        │
        ▼
count Increases
        │
        ▼
Page Updates
```

---

# Why JavaScript Is Often a First Programming Language

JavaScript is commonly learned early because it allows beginners to quickly create visible results in a web browser.

A learner can start with:

```javascript
console.log('Hello, world!');
```

and gradually progress toward:

```text
Variables
    │
    ▼
Conditionals
    │
    ▼
Functions
    │
    ▼
Arrays
    │
    ▼
Objects
    │
    ▼
DOM Manipulation
    │
    ▼
Events
    │
    ▼
Applications
```

Because JavaScript is central to web development, learning it provides an immediate path toward building real websites and applications.

---

# JavaScript Has Evolved

Early JavaScript developed a reputation for having unusual behavior and inconsistent patterns.

However, the language has improved substantially through new ECMAScript standards.

Modern JavaScript includes features such as:

* `let`
* `const`
* Arrow functions
* Classes
* Template literals
* Promises
* Modules
* Destructuring
* Spread syntax

These additions make modern JavaScript more expressive and easier to maintain.

---

# JavaScript Beyond the Browser

Although JavaScript is strongly associated with browsers, it is now used in many other environments.

```text
JavaScript
    │
    ├── Browser Applications
    ├── Server Applications
    ├── Desktop Applications
    ├── Mobile Development
    ├── Games
    └── Automation
```

Node.js, for example, allows JavaScript to run outside the browser.

---

# What You Will Learn

This lesson introduces foundational JavaScript programming concepts.

Two important topics are:

* Data types
* Built-in objects

These concepts form part of the foundation needed for more advanced JavaScript.

---

# Data Types

A **data type** describes the kind of value stored or used in a program.

Examples include:

```javascript
'Hello'
42
true
```

These values represent different kinds of data.

---

# Common JavaScript Data Types

| Data Type | Example           |
| --------- | ----------------- |
| String    | `'Hello'`         |
| Number    | `42`              |
| Boolean   | `true`            |
| Undefined | `undefined`       |
| Null      | `null`            |
| BigInt    | `123n`            |
| Symbol    | `Symbol('id')`    |
| Object    | `{ name: 'Ada' }` |

---

# Strings

Strings represent text.

```javascript
const message = 'Hello, JavaScript!';
```

Examples:

```javascript
'Codecademy'
"JavaScript"
`Full Stack Engineer`
```

---

# Numbers

Numbers represent numeric values.

```javascript
const age = 25;

const price = 19.99;
```

JavaScript uses the `number` type for both integers and decimal values.

---

# Booleans

Booleans represent logical values.

They can only be:

```javascript
true
false
```

Example:

```javascript
const isLoggedIn = true;
```

Booleans are especially important in conditionals.

```javascript
if (isLoggedIn) {
    console.log('Welcome back!');
}
```

---

# `undefined`

A variable may have the value `undefined` when no value has been assigned.

```javascript
let username;

console.log(username);
```

Output:

```text
undefined
```

---

# `null`

`null` represents an intentionally empty value.

```javascript
const selectedUser = null;
```

It can be used when a program intentionally needs to represent:

```text
No Value
```

---

# Objects

An **object** organizes related data and behavior.

Example:

```javascript
const user = {
    name: 'Ada',
    age: 30
};
```

The object contains properties:

```text
user
 │
 ├── name → 'Ada'
 └── age  → 30
```

---

# Accessing Object Properties

You can access object properties with dot notation.

```javascript
console.log(user.name);
```

Output:

```text
Ada
```

---

# Built-In Objects

JavaScript includes many objects that are already provided by the language.

These are known as **built-in objects**.

Examples include:

* `Math`
* `String`
* `Number`
* `Array`
* `Object`
* `Date`
* `JSON`

These objects provide useful properties and methods that developers can use immediately.

---

# The `Math` Object

The built-in `Math` object provides mathematical functionality.

Example:

```javascript
console.log(Math.random());
```

This produces a random decimal between `0` and `1`.

---

# `Math.floor()`

```javascript
console.log(Math.floor(4.9));
```

Output:

```text
4
```

`Math.floor()` rounds a number down to the nearest integer.

---

# Combining Built-In Methods

```javascript
const randomNumber = Math.floor(Math.random() * 10);

console.log(randomNumber);
```

This can generate an integer between `0` and `9`.

---

# String Methods

Strings provide built-in methods.

```javascript
const language = 'javascript';

console.log(language.toUpperCase());
```

Output:

```text
JAVASCRIPT
```

---

# Array Methods

Arrays also include useful built-in methods.

```javascript
const languages = ['JavaScript', 'Python'];

languages.push('Ruby');

console.log(languages);
```

Output:

```javascript
['JavaScript', 'Python', 'Ruby']
```

---

# Why Built-In Objects Matter

Built-in objects save developers from having to recreate common functionality.

Instead of manually implementing common operations, JavaScript provides reusable tools.

```text
Need Functionality
      │
      ▼
Use Built-In Object
      │
      ▼
Call Property or Method
      │
      ▼
Receive Result
```

---

# Methods and Properties

Objects can contain:

* Properties
* Methods

A **property** stores information.

A **method** performs an action.

Example:

```javascript
const text = 'hello';
```

Property:

```javascript
text.length
```

Method:

```javascript
text.toUpperCase()
```

---

# Property vs Method

```text
Property
────────
Describes information

text.length
     │
     ▼
5


Method
──────
Performs an action

text.toUpperCase()
     │
     ▼
HELLO
```

---

# Learning JavaScript Foundations

The concepts introduced here may seem basic, but they form the foundation for everything that follows.

```text
Data Types
     │
     ▼
Variables
     │
     ▼
Operators
     │
     ▼
Conditionals
     │
     ▼
Functions
     │
     ▼
Arrays + Objects
     │
     ▼
DOM + Events
     │
     ▼
Applications
```

Skipping the fundamentals makes advanced concepts much harder to understand.

---

# Recommended Learning Approach

JavaScript is best learned by actively writing code.

A strong learning process is:

```text
Read Concept
     │
     ▼
Study Example
     │
     ▼
Type Code Yourself
     │
     ▼
Predict Output
     │
     ▼
Run Program
     │
     ▼
Experiment
     │
     ▼
Debug Mistakes
```

---

# Practice Example

Start with:

```javascript
const language = 'JavaScript';

console.log(language);
```

Then experiment:

```javascript
console.log(language.length);
```

Then:

```javascript
console.log(language.toUpperCase());
```

Then:

```javascript
console.log(language.toLowerCase());
```

Experimentation helps connect syntax to behavior.

---

# Browser Console Practice

JavaScript can be practiced directly in a browser console.

Try:

```javascript
console.log('Hello!');
```

Then:

```javascript
2 + 2
```

Then:

```javascript
Math.random()
```

This provides immediate feedback while learning.

---

# JavaScript Mental Model

```text
Program
  │
  ▼
Values
  │
  ├── Strings
  ├── Numbers
  ├── Booleans
  └── Objects
        │
        ▼
Operations + Methods
        │
        ▼
Program Behavior
```

---

# Quick Reference

| Concept          | Meaning                                           |
| ---------------- | ------------------------------------------------- |
| JavaScript       | Programming language used for behavior and logic  |
| Dynamic Behavior | Content or behavior that changes during execution |
| Data Type        | Classification of a value                         |
| String           | Text data                                         |
| Number           | Numeric data                                      |
| Boolean          | `true` or `false`                                 |
| `undefined`      | Value has not been assigned                       |
| `null`           | Intentional absence of a value                    |
| Object           | Collection of related properties and behaviors    |
| Built-In Object  | Object provided by JavaScript                     |
| Property         | Information stored on an object                   |
| Method           | Function associated with an object                |

---

# Beginner Syntax Preview

```javascript
const language = 'JavaScript';

const year = 1995;

const isPopular = true;

const developer = {
    name: 'Ada',
    language: 'JavaScript'
};

console.log(language);
console.log(year);
console.log(isPopular);
console.log(developer.name);
```

This small example already demonstrates:

* Variables
* Strings
* Numbers
* Booleans
* Objects
* Properties
* `console.log()`

---

# Key Takeaways

* JavaScript is a powerful and flexible programming language.
* It is one of the core technologies of modern web development.
* HTML provides structure, CSS provides presentation, and JavaScript provides behavior.
* JavaScript powers dynamic and interactive website features.
* The language has evolved significantly since its early versions.
* JavaScript is commonly one of the first programming languages learned by web developers.
* Data types describe the different kinds of values used by a program.
* Important data types include strings, numbers, booleans, `undefined`, `null`, and objects.
* JavaScript provides many built-in objects and methods.
* Built-in objects allow developers to perform common tasks without recreating functionality from scratch.
* Strong fundamentals make advanced JavaScript concepts easier to understand.

---

# Final Mental Model

```text
JavaScript
     │
     ▼
Programming Language
     │
     ├── Data
     │    ├── Strings
     │    ├── Numbers
     │    ├── Booleans
     │    └── Objects
     │
     ├── Built-In Tools
     │    ├── Math
     │    ├── String
     │    ├── Array
     │    └── Object
     │
     ▼
Logic + Interactivity
     │
     ▼
Dynamic Web Applications
```

---

> **Final Reminder:** JavaScript becomes much easier when you build a strong understanding of the fundamentals. Take time to understand values, data types, objects, and methods now—they will appear in nearly every JavaScript program you write.

