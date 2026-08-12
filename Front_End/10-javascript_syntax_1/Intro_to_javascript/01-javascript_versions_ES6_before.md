# JavaScript Versions: ES6 and Before

> **ES6, also known as ECMAScript 2015, was one of the most important updates in JavaScript's history. Understanding the relationship between JavaScript and ECMAScript helps explain why modern JavaScript looks and behaves the way it does today.**

---

# Overview

You may frequently encounter terms such as:

```text
ES5
ES6
ES2015
ES7
ES8
ECMAScript
Modern JavaScript
```

These terms refer to versions of the **ECMAScript specification**, the standard that defines how JavaScript should behave.

A simple way to think about the relationship is:

```text
ECMAScript
     │
     ▼
Language Specification
     │
     ▼
JavaScript
     │
     ▼
Implementation of the Specification
```

---

# JavaScript vs ECMAScript

JavaScript and ECMAScript are closely related, but they are not exactly the same thing.

## JavaScript

JavaScript is the programming language developers actually write and execute.

Example:

```javascript
const message = 'Hello, JavaScript!';

console.log(message);
```

---

## ECMAScript

ECMAScript is the **standardized specification** that describes how a JavaScript-like language should work.

It defines language features such as:

* Variables
* Functions
* Objects
* Classes
* Operators
* Syntax rules
* Promises
* Modules
* Data structures

---

# A Useful Analogy

Think of ECMAScript as a blueprint.

```text
ECMAScript
──────────
Blueprint / Specification

JavaScript
──────────
The actual language implementation
```

Another way to visualize it:

```text
ECMAScript Specification
          │
          ▼
Browser JavaScript Engines
          │
          ├── Chrome
          ├── Firefox
          ├── Safari
          └── Edge
          │
          ▼
JavaScript Code Runs Consistently
```

---

# Early JavaScript History

JavaScript was introduced in **1995** by Netscape Communications.

It was designed as a scripting language that could make webpages interactive.

Soon after its creation, Netscape submitted the language to a standards organization so that JavaScript behavior could become more consistent across implementations.

---

# Ecma International

In 1996, Netscape submitted JavaScript to **Ecma International**, a standards organization.

Ecma developed a formal specification for the language.

In 1997, the first ECMAScript standard was published as:

```text
ECMA-262
```

This created the first official version of ECMAScript.

---

# Why Standardization Was Important

Without a common standard, different browsers could implement JavaScript features differently.

That creates problems for developers.

```text
Developer Writes JavaScript
           │
           ▼
Different Browsers
   │        │        │
   ▼        ▼        ▼
Chrome   Firefox   Safari
   │        │        │
   └────────┴────────┘
            │
            ▼
Need Consistent Behavior
            │
            ▼
ECMAScript Standard
```

The specification provides a common set of rules that browser vendors can follow.

---

# JavaScript Evolution Timeline

A simplified timeline looks like this:

```text
1995
 │
 └── JavaScript created
      │
1997
 │
 └── ECMAScript 1
      │
1998
 │
 └── ECMAScript 2
      │
1999
 │
 └── ECMAScript 3
      │
2009
 │
 └── ECMAScript 5
      │
2015
 │
 └── ECMAScript 6 / ES2015
      │
2016
 │
 └── ES2016
      │
2017
 │
 └── ES2017
      │
2018+
 │
 └── Continued yearly ECMAScript releases
```

---

# What Does ES Mean?

**ES** is short for:

```text
ECMAScript
```

Therefore:

```text
ES5
```

means:

```text
ECMAScript 5
```

and:

```text
ES6
```

means:

```text
ECMAScript 6
```

---

# ES6 and ES2015 Are the Same Thing

ES6 was released in **2015**.

Therefore, you may see either:

```text
ES6
```

or:

```text
ES2015
```

Both names refer to the same major version of ECMAScript.

```text
ES6
 =
ECMAScript 6
 =
ECMAScript 2015
 =
ES2015
```

---

# Why the Naming Changed

Before ES6, ECMAScript versions were commonly identified by edition number:

```text
ES3
ES5
ES6
```

After 2015, annual release names became common:

```text
ES2015
ES2016
ES2017
ES2018
...
```

This reflects the move toward a more regular release cycle.

---

# Why ES6 Was So Important

ES6 was one of the largest updates in the history of JavaScript.

It introduced many features that fundamentally changed how developers write the language.

Because of its significance, ES6 is often associated with:

```text
Modern JavaScript
```

---

# Major ES6 Features

Some of the most important additions include:

* `let`
* `const`
* Arrow functions
* Classes
* Default parameters
* Template literals
* Destructuring
* Rest parameters
* Spread syntax
* Promises
* Modules
* Enhanced object syntax

These additions made JavaScript more expressive, concise, and maintainable.

---

# `let`

Before ES6, variables were commonly declared with:

```javascript
var
```

ES6 introduced:

```javascript
let
```

Example:

```javascript
let score = 10;

score = 20;
```

`let` is block-scoped and is generally preferred when a variable needs to be reassigned.

---

# `const`

ES6 also introduced:

```javascript
const
```

Example:

```javascript
const course = 'Full Stack Engineer';
```

A `const` variable cannot be reassigned.

```javascript
const language = 'JavaScript';

// Error
language = 'Python';
```

---

# `var` vs `let` vs `const`

| Keyword |    Reassignable | Scope           |
| ------- | --------------: | --------------- |
| `var`   |             Yes | Function scoped |
| `let`   |             Yes | Block scoped    |
| `const` | No reassignment | Block scoped    |

Modern JavaScript generally favors:

```text
const
```

by default, and:

```text
let
```

when reassignment is required.

---

# Arrow Functions

Before ES6:

```javascript
function add(a, b) {
    return a + b;
}
```

ES6 introduced arrow functions:

```javascript
const add = (a, b) => {
    return a + b;
};
```

This can be shortened further:

```javascript
const add = (a, b) => a + b;
```

---

# Function Syntax Comparison

```text
Traditional Function
────────────────────

function greet(name) {
    return `Hello, ${name}`;
}


Arrow Function
──────────────

const greet = name => `Hello, ${name}`;
```

Arrow functions can make simple functions more concise.

---

# Classes

ES6 introduced class syntax.

Example:

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, ${this.name}`);
    }
}
```

Create an instance:

```javascript
const user = new Person('Amaury');

user.greet();
```

---

# Classes and Object-Oriented Programming

Class syntax made object-oriented programming patterns more familiar to developers coming from languages such as:

* Java
* C#
* C++
* Python

Conceptually:

```text
Class
 │
 ▼
Blueprint

Object
 │
 ▼
Instance of Blueprint
```

---

# Default Parameters

Before ES6, developers often manually checked whether an argument was provided.

ES6 introduced default parameter values.

```javascript
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}
```

Calling:

```javascript
greet();
```

produces:

```text
Hello, Guest!
```

---

# Template Literals

ES6 introduced template literals using backticks.

Old approach:

```javascript
const name = 'Amaury';

console.log('Hello, ' + name + '!');
```

Modern approach:

```javascript
const name = 'Amaury';

console.log(`Hello, ${name}!`);
```

Template literals make string interpolation easier to read.

---

# Destructuring

ES6 introduced destructuring syntax.

Example object:

```javascript
const user = {
    name: 'Amaury',
    role: 'Developer'
};
```

Traditional approach:

```javascript
const name = user.name;
const role = user.role;
```

Destructuring:

```javascript
const { name, role } = user;
```

---

# Array Destructuring

```javascript
const coordinates = [41.88, -87.63];

const [latitude, longitude] = coordinates;
```

This extracts values based on position.

---

# Spread Syntax

ES6 introduced the spread operator:

```javascript
...
```

Example:

```javascript
const numbers = [1, 2, 3];

const moreNumbers = [...numbers, 4, 5];
```

Result:

```javascript
[1, 2, 3, 4, 5]
```

---

# Rest Parameters

The same `...` syntax can collect remaining arguments.

```javascript
function sum(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}
```

Call:

```javascript
sum(1, 2, 3, 4);
```

Result:

```text
10
```

---

# Promises

ES6 introduced native **Promises** for asynchronous operations.

Example:

```javascript
fetch('/api/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
```

Promises make asynchronous workflows easier to organize than deeply nested callbacks.

---

# Promise Concept

```text
Start Asynchronous Task
          │
          ▼
      Promise
       /   \
      /     \
Resolved   Rejected
   │          │
   ▼          ▼
.then()     .catch()
```

---

# Modules

ES6 introduced standardized JavaScript modules.

Export:

```javascript
export const add = (a, b) => a + b;
```

Import:

```javascript
import { add } from './math.js';
```

Modules allow large programs to be divided into smaller files.

---

# Why Modules Matter

```text
Large Application
       │
       ├── user.js
       ├── api.js
       ├── math.js
       ├── ui.js
       └── app.js
```

This improves:

* Organization
* Maintainability
* Reusability
* Separation of concerns

---

# Pre-ES6 JavaScript

JavaScript written before ES6 often uses patterns such as:

```javascript
var name = 'Amaury';

function greet(name) {
    return 'Hello, ' + name + '!';
}
```

Modern ES6-style JavaScript might look like:

```javascript
const name = 'Amaury';

const greet = name => `Hello, ${name}!`;
```

---

# Side-by-Side Comparison

## Pre-ES6

```javascript
var user = 'Amaury';

function greet(name) {
    return 'Hello, ' + name + '!';
}
```

## ES6+

```javascript
const user = 'Amaury';

const greet = name => `Hello, ${name}!`;
```

Both are valid JavaScript.

The second uses newer language features.

---

# Why Learn Pre-ES6 Syntax?

Modern JavaScript code heavily uses ES6+ features.

However, older JavaScript still exists in:

* Legacy applications
* Older tutorials
* Enterprise systems
* Long-lived websites
* Existing libraries
* Older Node.js projects

Therefore, developers should be able to read both older and modern syntax.

---

# Legacy Code

**Legacy code** refers to older code that is still in active use or maintenance.

Example:

```javascript
var userName = 'Amaury';

function getUserName() {
    return userName;
}
```

A modern developer may prefer to write:

```javascript
const userName = 'Amaury';

const getUserName = () => userName;
```

But understanding the older version remains valuable.

---

# Why Not Rewrite Everything?

Legacy systems may be:

* Large
* Stable
* Business-critical
* Expensive to rewrite
* Difficult to test
* Dependent on older environments

Developers frequently need to maintain existing code instead of replacing it.

---

# ES6 and Browser Support

When ES6 was initially released, not every browser supported every new feature.

Developers often needed tools to transform modern JavaScript into older JavaScript.

Conceptually:

```text
Modern ES6+ Code
       │
       ▼
Transpiler
       │
       ▼
Older Compatible JavaScript
       │
       ▼
Older Browser
```

---

# Babel

A well-known JavaScript transpiler is **Babel**.

Example input:

```javascript
const greet = name => `Hello, ${name}`;
```

A transpiler could convert it into syntax similar to:

```javascript
var greet = function(name) {
    return 'Hello, ' + name;
};
```

This historically allowed developers to use modern syntax while supporting older browsers.

---

# Modern Browser Support

Modern browsers now support the vast majority of commonly used ES6 features.

This means developers can routinely write:

```javascript
const
let
class
=>
...
```

without requiring special work for most current environments.

---

# ES6 and Modern Frameworks

Modern JavaScript frameworks and libraries heavily rely on ES6+ syntax.

For example, React code often uses:

```javascript
const App = () => {
    return <h1>Hello!</h1>;
};
```

This includes:

* `const`
* Arrow functions

Other modern application code frequently uses:

* Imports
* Exports
* Destructuring
* Spread syntax
* Promises
* Classes

---

# Why ES6 Matters for Frameworks

Learning modern frameworks without understanding ES6 can make the code feel unnecessarily complicated.

A useful progression is:

```text
JavaScript Fundamentals
        │
        ▼
ES6 Syntax
        │
        ▼
Modern JavaScript
        │
        ▼
Frameworks
        │
        ├── React
        ├── Vue
        └── Others
```

---

# ES6 and Object-Oriented Programming

One reason ES6 was widely adopted was its improved support for familiar OOP syntax.

Example:

```javascript
class Vehicle {
    constructor(make) {
        this.make = make;
    }

    drive() {
        console.log(`${this.make} is moving`);
    }
}
```

This syntax can feel familiar to developers coming from other object-oriented languages.

---

# Important Note About JavaScript Classes

Although ES6 introduced the `class` keyword, JavaScript still uses a **prototype-based inheritance model** underneath.

In other words:

```text
class syntax
     │
     ▼
Cleaner OOP-style syntax
     │
     ▼
JavaScript prototypes underneath
```

This becomes important as you progress into advanced JavaScript.

---

# ECMAScript After ES6

ES6 was not the final version.

JavaScript continues to evolve.

Examples of later additions include:

```text
ES2016
ES2017
ES2018
ES2019
ES2020
ES2021
...
```

Features have continued to include improvements to:

* Arrays
* Objects
* Async programming
* Modules
* Strings
* Operators
* Collections
* Language syntax

---

# Modern Release Model

Instead of waiting many years for enormous language updates, ECMAScript now evolves more incrementally.

Conceptually:

```text
Older Model
───────────

ES3
 │
 │  many years
 ▼
ES5
 │
 │  many years
 ▼
ES6


Modern Model
────────────

ES2015
  │
ES2016
  │
ES2017
  │
ES2018
  │
...
```

This allows the language to improve more steadily.

---

# JavaScript Versioning Summary

```text
JavaScript
    │
    ▼
Based on ECMAScript
    │
    ├── ES1
    ├── ES2
    ├── ES3
    ├── ES5
    ├── ES6 / ES2015
    ├── ES2016
    ├── ES2017
    ├── ES2018
    └── ...
```

---

# Why ES6 Is Still Discussed So Much

Even though many newer editions have been released, ES6 remains a major milestone because it introduced many of the features developers now consider normal JavaScript.

For example:

```javascript
const user = 'Amaury';

const greet = name => `Hello, ${name}`;

class Developer {
    constructor(language) {
        this.language = language;
    }
}
```

All of these patterns trace back to the major changes introduced in ES6.

---

# Pre-ES6 vs Modern JavaScript

```text
PRE-ES6
────────────────────

var
traditional functions
string concatenation
prototype-heavy patterns


ES6+
────────────────────

let / const
arrow functions
template literals
classes
destructuring
spread syntax
promises
modules
```

---

# Practical Learning Strategy

As you study JavaScript, aim to understand both forms.

### Recognize older syntax:

```javascript
var total = 0;

function add(a, b) {
    return a + b;
}
```

### Be comfortable writing modern syntax:

```javascript
let total = 0;

const add = (a, b) => a + b;
```

This gives you flexibility when working with real-world projects.

---

# JavaScript Evolution Workflow

```text
JavaScript Created
       │
       ▼
Need for Standards
       │
       ▼
ECMAScript Created
       │
       ▼
Language Evolves
       │
       ▼
ES5
       │
       ▼
ES6 / ES2015
       │
       ▼
Major Modern Features
       │
       ▼
Annual ECMAScript Updates
       │
       ▼
Modern JavaScript
```

---

# Quick Reference

| Term              | Meaning                                            |
| ----------------- | -------------------------------------------------- |
| JavaScript        | Programming language used by developers            |
| ECMAScript        | Specification that standardizes JavaScript         |
| ECMA-262          | Official ECMAScript language specification         |
| ES                | Short for ECMAScript                               |
| ES5               | ECMAScript 5                                       |
| ES6               | ECMAScript 6                                       |
| ES2015            | Another name for ES6                               |
| Legacy JavaScript | Older JavaScript syntax and codebases              |
| Modern JavaScript | Commonly refers to ES6+ syntax                     |
| Transpiler        | Converts newer syntax into older compatible syntax |
| Babel             | Popular JavaScript transpiler                      |

---

# ES6 Feature Quick Reference

| Feature            | Example                             |
| ------------------ | ----------------------------------- |
| `let`              | `let score = 10;`                   |
| `const`            | `const name = 'Ada';`               |
| Arrow functions    | `const add = (a, b) => a + b;`      |
| Classes            | `class User {}`                     |
| Default parameters | `function greet(name = 'Guest') {}` |
| Template literals  | `` `Hello ${name}` ``               |
| Destructuring      | `const { name } = user;`            |
| Spread syntax      | `[...numbers]`                      |
| Rest parameters    | `(...args)`                         |
| Promises           | `new Promise(...)`                  |
| Modules            | `import` / `export`                 |

---

# Key Takeaways

* JavaScript was introduced in 1995.
* JavaScript was standardized through Ecma International.
* ECMAScript defines the specification that JavaScript implementations follow.
* ECMA-262 is the official ECMAScript specification.
* ES is short for ECMAScript.
* ES6 and ES2015 refer to the same major release.
* ES6 was one of the largest updates in JavaScript history.
* ES6 introduced features such as `let`, `const`, arrow functions, classes, default parameters, promises, modules, destructuring, and spread syntax.
* Many developers associate ES6 with the beginning of **modern JavaScript**.
* Modern frameworks depend heavily on ES6+ syntax.
* Legacy JavaScript remains important because many existing projects still use older patterns.
* A strong JavaScript developer should be able to read both pre-ES6 and modern syntax.
* ECMAScript continues to evolve through regular language updates.

---

# Final Mental Model

```text
ECMAScript
────────────────────
Defines the rules
        │
        ▼
JavaScript
────────────────────
Implements the rules
        │
        ▼
ES6 / ES2015
────────────────────
Major modernization
        │
        ▼
Modern JavaScript
────────────────────
let
const
arrow functions
classes
promises
modules
destructuring
spread syntax
        │
        ▼
Modern Web Development
```

---

> **Final Reminder:** When you see **ES6**, think **“the major 2015 modernization of JavaScript.”** Learning both pre-ES6 and ES6+ syntax gives you the ability to understand older codebases while confidently writing modern JavaScript.

