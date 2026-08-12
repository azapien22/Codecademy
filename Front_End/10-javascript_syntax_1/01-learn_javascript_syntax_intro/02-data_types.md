# Introduction to JavaScript: Data Types

> **Data types classify the different kinds of values that JavaScript can work with. Understanding them is essential because every value in a JavaScript program has a type.**

---

# Overview

JavaScript works with many kinds of data.

Examples include:

```javascript
42
'Hello'
true
null
```

Each value belongs to a **data type**.

A data type tells JavaScript what kind of information a value represents and influences what operations can be performed on it.

---

# What Is a Data Type?

A **data type** is a classification assigned to a value.

For example:

```javascript
42
```

is a:

```text
Number
```

while:

```javascript
'JavaScript'
```

is a:

```text
String
```

and:

```javascript
true
```

is a:

```text
Boolean
```

---

# JavaScript's Eight Fundamental Data Types

JavaScript has eight fundamental data types:

```text
JavaScript Data Types
        │
        ├── Number
        ├── BigInt
        ├── String
        ├── Boolean
        ├── Null
        ├── Undefined
        ├── Symbol
        └── Object
```

The first seven are known as **primitive data types**.

`Object` is the non-primitive type used to create more complex collections of information.

---

# Primitive vs Object Types

```text
JavaScript Data
      │
      ├── Primitive Types
      │      │
      │      ├── Number
      │      ├── BigInt
      │      ├── String
      │      ├── Boolean
      │      ├── Null
      │      ├── Undefined
      │      └── Symbol
      │
      └── Object
             │
             └── Complex collections of data
```

---

# Primitive Data Types

Primitive values are the most basic forms of data available in JavaScript.

They represent individual values rather than complex collections.

The seven primitive types are:

1. `number`
2. `bigint`
3. `string`
4. `boolean`
5. `null`
6. `undefined`
7. `symbol`

---

# 1. Number

The **Number** data type represents numerical values.

JavaScript uses the same `number` type for:

* Positive numbers
* Negative numbers
* Whole numbers
* Decimal numbers

Examples:

```javascript
4
8
1516
23.42
-50
0
```

---

# Number Examples

```javascript
console.log(40);
console.log(3.14);
console.log(-25);
```

Output:

```text
40
3.14
-25
```

---

# Numbers Do Not Use Quotes

A numeric value should generally be written without quotation marks.

Number:

```javascript
40
```

String:

```javascript
'40'
```

These may look similar to a human, but JavaScript treats them as different data types.

---

# Number vs String

```javascript
console.log(40);
console.log('40');
```

Conceptually:

```text
40
│
└── Number

'40'
 │
 └── String
```

This difference becomes extremely important when performing calculations.

---

# Numeric Operations

Numbers can participate in mathematical operations.

```javascript
console.log(5 + 5);
console.log(10 - 3);
console.log(4 * 2);
console.log(20 / 4);
```

Output:

```text
10
7
8
5
```

---

# 2. BigInt

The **BigInt** type represents integers that are too large to be safely represented by JavaScript's ordinary `number` type.

A BigInt is written by adding:

```text
n
```

to the end of an integer.

Example:

```javascript
12345678901234567890n
```

---

# Why BigInt Exists

JavaScript's ordinary `number` type can safely represent integers only within a certain range.

The largest safe integer is:

```javascript
Number.MAX_SAFE_INTEGER
```

which is:

```text
9,007,199,254,740,991
```

or mathematically:

```text
2^53 - 1
```

For integers beyond that safe range, BigInt can be used.

---

# BigInt Example

```javascript
const hugeNumber = 123456789012345678901234567890n;

console.log(hugeNumber);
```

---

# BigInt Syntax

Correct:

```javascript
10000000000000000000n
```

The trailing `n` tells JavaScript:

```text
Treat this value as a BigInt.
```

---

# Important BigInt Rule

Ordinary numbers and BigInts generally cannot be mixed directly in arithmetic operations.

Incorrect:

```javascript
10n + 5
```

This causes an error because one value is a BigInt and the other is a Number.

Instead:

```javascript
10n + 5n
```

Result:

```text
15n
```

---

# 3. String

A **String** represents text.

Strings can contain:

* Letters
* Numbers
* Spaces
* Symbols
* Punctuation

Strings are commonly surrounded by:

```text
' '
```

or:

```text
" "
```

---

# String Examples

```javascript
'Hello'
'JavaScript'
'123'
'Hello, World!'
'575 Broadway, New York City'
```

---

# Codecademy Example

```javascript
console.log(
    'Location of Codecademy headquarters: 575 Broadway, New York City'
);
```

Output:

```text
Location of Codecademy headquarters: 575 Broadway, New York City
```

Although the string contains:

* Capital letters
* Lowercase letters
* Numbers
* Spaces
* Punctuation

it is still one String value because everything is enclosed in quotation marks.

---

# String Quotes

Valid:

```javascript
console.log('Hello');
console.log("Hello");
```

Both create strings.

A consistent coding style is generally preferred within a project.

---

# Numbers Inside Strings

Consider:

```javascript
'40'
```

Although it contains digits, the quotation marks make it a String.

Compare:

```javascript
40
```

which is a Number.

---

# Visual Comparison

```text
40
│
└── Number
    Can participate directly
    in arithmetic


'40'
 │
 └── String
     Represents text
```

---

# Example

```javascript
console.log(40 + 2);
```

Output:

```text
42
```

But:

```javascript
console.log('40' + '2');
```

Output:

```text
402
```

With strings, the `+` operator can join text together.

---

# 4. Boolean

The **Boolean** data type has only two possible values:

```javascript
true
false
```

Booleans are written without quotation marks.

---

# Boolean Mental Model

Think of a Boolean as an:

```text
ON / OFF switch
```

or the answer to a:

```text
YES / NO question
```

For example:

```javascript
const isLoggedIn = true;
const hasPermission = false;
```

---

# Boolean Examples

```javascript
console.log(true);
console.log(false);
```

Output:

```text
true
false
```

---

# Boolean Values Are Not Strings

Boolean:

```javascript
true
```

String:

```javascript
'true'
```

These are different values.

```text
true
│
└── Boolean


'true'
 │
 └── String
```

---

# Booleans and Decisions

Booleans become extremely important when writing conditional logic.

Example:

```javascript
const isLoggedIn = true;

if (isLoggedIn) {
    console.log('Welcome back!');
}
```

The Boolean determines whether the code inside the `if` statement executes.

---

# 5. Null

The value:

```javascript
null
```

represents the **intentional absence of a value**.

Example:

```javascript
const selectedUser = null;
```

This could mean:

```text
A user could exist here,
but currently no user has been selected.
```

---

# Null Mental Model

```text
Value intentionally empty
        │
        ▼
       null
```

The absence is deliberate.

---

# Example

```javascript
let currentSelection = null;

console.log(currentSelection);
```

Output:

```text
null
```

---

# 6. Undefined

The value:

```javascript
undefined
```

also represents the absence of a value, but its meaning differs from `null`.

`undefined` generally means:

```text
A value has not been assigned or does not exist.
```

---

# Example

```javascript
let username;

console.log(username);
```

Output:

```text
undefined
```

The variable exists, but no value has been assigned to it.

---

# Null vs Undefined

These concepts are closely related but different.

| Value       | Meaning                                |
| ----------- | -------------------------------------- |
| `null`      | Intentionally empty                    |
| `undefined` | Value has not been defined or assigned |

---

# Mental Model

```text
null
────
"I intentionally put nothing here."


undefined
─────────
"Nothing has been assigned here yet."
```

---

# Example

```javascript
let currentUser;

const selectedArticle = null;

console.log(currentUser);
console.log(selectedArticle);
```

Output:

```text
undefined
null
```

---

# 7. Symbol

A **Symbol** is a primitive value designed to create unique identifiers.

Example:

```javascript
const id = Symbol('id');
```

Two Symbols with the same description are still unique.

```javascript
const firstId = Symbol('id');
const secondId = Symbol('id');

console.log(firstId === secondId);
```

Output:

```text
false
```

---

# Why Symbols Exist

Symbols are useful in more advanced JavaScript when developers need property keys that will not accidentally conflict with other property names.

For now, the key concept is:

```text
Symbol
   │
   └── Unique identifier
```

You will encounter Symbols more deeply later.

---

# 8. Object

An **Object** is a collection of related data.

Example:

```javascript
const user = {
    name: 'Ada',
    age: 36,
    isDeveloper: true
};
```

This single object contains several values.

---

# Object Structure

```text
user
 │
 ├── name
 │     └── 'Ada'
 │
 ├── age
 │     └── 36
 │
 └── isDeveloper
       └── true
```

Objects allow developers to organize related information together.

---

# Object Example

```javascript
const course = {
    name: 'Full Stack Engineer',
    language: 'JavaScript',
    completed: false
};

console.log(course);
```

---

# Objects Can Contain Different Data Types

```javascript
const developer = {
    name: 'Ada',            // String
    age: 36,                // Number
    isEmployed: true,       // Boolean
    middleName: null        // Null
};
```

Objects allow many different kinds of values to be grouped together.

---

# Primitive Types vs Objects

Primitive:

```javascript
const age = 36;
```

One simple value.

Object:

```javascript
const person = {
    name: 'Ada',
    age: 36,
    language: 'JavaScript'
};
```

A collection of related values.

---

# All Eight Types at a Glance

| Type      | Example             | Purpose                    |
| --------- | ------------------- | -------------------------- |
| Number    | `42`                | Numeric values             |
| BigInt    | `9007199254740993n` | Very large integers        |
| String    | `'Hello'`           | Text                       |
| Boolean   | `true`              | True/false logic           |
| Null      | `null`              | Intentional absence        |
| Undefined | `undefined`         | Missing/unassigned value   |
| Symbol    | `Symbol('id')`      | Unique identifier          |
| Object    | `{ name: 'Ada' }`   | Collection of related data |

---

# Primitive Types

Remember:

```text
Primitive Data Types
────────────────────

Number
BigInt
String
Boolean
Null
Undefined
Symbol
```

And:

```text
Non-Primitive
─────────────

Object
```

---

# Checking a Value's Type

JavaScript provides the:

```javascript
typeof
```

operator for inspecting many value types.

Example:

```javascript
console.log(typeof 42);
```

Output:

```text
number
```

---

# More `typeof` Examples

```javascript
console.log(typeof 'Hello');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof 123n);
```

Output:

```text
string
boolean
undefined
bigint
```

---

# Checking Objects

```javascript
const user = {
    name: 'Ada'
};

console.log(typeof user);
```

Output:

```text
object
```

---

# Important JavaScript Quirk: `typeof null`

You might expect:

```javascript
typeof null
```

to return:

```text
null
```

but JavaScript actually returns:

```text
object
```

Example:

```javascript
console.log(typeof null);
```

Output:

```text
object
```

This is a long-standing historical quirk in JavaScript.

Despite this result, `null` is considered a **primitive value**.

---

# Strings vs Numbers in Practice

Understanding whether a value is text or numeric data is extremely important.

Consider:

```javascript
const first = 10;
const second = 20;

console.log(first + second);
```

Output:

```text
30
```

Now compare:

```javascript
const first = '10';
const second = '20';

console.log(first + second);
```

Output:

```text
1020
```

---

# Why the Difference?

```text
Numbers
───────

10 + 20
   │
   ▼
Addition
   │
   ▼
30


Strings
───────

'10' + '20'
     │
     ▼
Concatenation
     │
     ▼
'1020'
```

The data type changes the meaning of the operation.

---

# Data Types Influence Program Behavior

Consider:

```javascript
console.log(5 + 5);
```

Result:

```text
10
```

But:

```javascript
console.log('5' + '5');
```

Result:

```text
55
```

Same-looking values.

Different data types.

Different behavior.

---

# Primitive Data Type Mental Model

```text
VALUE
 │
 ▼
What kind of data is it?
 │
 ├── Numeric? ───────► Number / BigInt
 │
 ├── Text? ──────────► String
 │
 ├── True or False? ─► Boolean
 │
 ├── Empty? ─────────► Null
 │
 ├── Missing? ───────► Undefined
 │
 ├── Unique ID? ─────► Symbol
 │
 └── Collection? ────► Object
```

---

# Codecademy Example

```javascript
console.log(
    'Location of Codecademy headquarters: 575 Broadway, New York City'
);

console.log(40);
```

The first value is:

```text
String
```

because it is surrounded by quotation marks.

The second value is:

```text
Number
```

because it is written numerically without quotes.

---

# Understanding the Output

```javascript
console.log('Location of Codecademy headquarters: 575 Broadway, New York City');
```

Output:

```text
Location of Codecademy headquarters: 575 Broadway, New York City
```

The entire sentence—including numbers and punctuation—is still one String.

---

```javascript
console.log(40);
```

Output:

```text
40
```

This is a Number.

---

# Common Beginner Mistake: Quoting Numbers

Suppose you want to calculate someone's age next year.

Incorrect approach:

```javascript
const age = '40';

console.log(age + 1);
```

Possible output:

```text
401
```

Why?

Because:

```javascript
'40'
```

is a String.

Better:

```javascript
const age = 40;

console.log(age + 1);
```

Output:

```text
41
```

---

# Common Beginner Mistake: Quoting Booleans

Incorrect:

```javascript
const isLoggedIn = 'false';
```

This is not a Boolean.

It is a String.

Correct:

```javascript
const isLoggedIn = false;
```

---

# Comparing Values

JavaScript's strict equality operator:

```javascript
===
```

checks both value and type.

Example:

```javascript
console.log(40 === '40');
```

Output:

```text
false
```

Why?

```text
40
│
└── Number


'40'
 │
 └── String
```

The types are different.

---

# Useful Practice

Try predicting each type before running the code:

```javascript
console.log(typeof 100);
console.log(typeof '100');
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof 100n);
console.log(typeof {});
```

Expected output:

```text
number
string
boolean
undefined
bigint
object
```

---

# Practice Exercise

Given:

```javascript
const username = 'Ada';
const age = 36;
const isDeveloper = true;
const middleName = null;
let currentProject;
```

Try identifying the types before running:

```javascript
console.log(typeof username);
console.log(typeof age);
console.log(typeof isDeveloper);
console.log(currentProject);
```

---

# Data Type Workflow

```text
Receive a Value
      │
      ▼
Identify Its Type
      │
      ▼
Understand Available Operations
      │
      ▼
Use the Value Correctly
      │
      ▼
Produce Expected Behavior
```

---

# Why Data Types Matter

Understanding data types helps you:

* Perform correct calculations
* Compare values properly
* Handle user input
* Write conditional logic
* Organize application data
* Avoid unexpected behavior
* Debug programs

They form the foundation for nearly every JavaScript concept that follows.

---

# Best Practices

* Keep text inside quotation marks.
* Do not quote numbers when you intend to perform arithmetic.
* Write Boolean values as `true` or `false`, without quotes.
* Use `null` when deliberately representing no value.
* Recognize that `undefined` commonly represents an unassigned value.
* Use `typeof` when investigating a value's type.
* Pay close attention to the difference between similar-looking values such as `40` and `'40'`.

---

# Common Mistakes

## Confusing Numbers and Strings

```javascript
const score = '100';
```

This is a String.

If the value represents a number used for calculations:

```javascript
const score = 100;
```

---

## Confusing Boolean and String

```javascript
const completed = 'false';
```

This is a String.

Correct Boolean:

```javascript
const completed = false;
```

---

## Confusing `null` and `undefined`

```text
null
────
Intentional absence


undefined
─────────
Not assigned / not available
```

They are related, but they communicate different intentions.

---

# Quick Reference

| Value          | Data Type |
| -------------- | --------- |
| `42`           | Number    |
| `3.14`         | Number    |
| `123n`         | BigInt    |
| `'Hello'`      | String    |
| `"42"`         | String    |
| `true`         | Boolean   |
| `false`        | Boolean   |
| `null`         | Null      |
| `undefined`    | Undefined |
| `Symbol('id')` | Symbol    |
| `{}`           | Object    |

---

# Syntax Quick Reference

### Number

```javascript
const age = 40;
```

### BigInt

```javascript
const hugeNumber = 12345678901234567890n;
```

### String

```javascript
const name = 'Ada';
```

### Boolean

```javascript
const isActive = true;
```

### Null

```javascript
const selectedItem = null;
```

### Undefined

```javascript
let result;
```

### Symbol

```javascript
const id = Symbol('id');
```

### Object

```javascript
const user = {
    name: 'Ada',
    age: 36
};
```

---

# Key Takeaways

* Data types classify the different kinds of values JavaScript can use.
* JavaScript has eight fundamental data types.
* Seven are primitive:

  * Number
  * BigInt
  * String
  * Boolean
  * Null
  * Undefined
  * Symbol
* Objects are more complex collections of related data.
* Numbers are written without quotes.
* Strings are text enclosed in quotation marks.
* Booleans are either `true` or `false`.
* `null` represents an intentional absence of a value.
* `undefined` commonly represents a value that has not been assigned.
* Symbols create unique identifiers.
* BigInts represent integers beyond JavaScript's safe Number range.
* A value's data type influences how JavaScript interprets operations performed on it.
* The difference between `40` and `'40'` is fundamental: one is a Number and the other is a String.

---

# Final Mental Model

```text
JavaScript Value
       │
       ▼
    Data Type
       │
       ├── Number ─────► 42
       ├── BigInt ─────► 42n
       ├── String ─────► '42'
       ├── Boolean ────► true
       ├── Null ───────► null
       ├── Undefined ──► undefined
       ├── Symbol ─────► Symbol('id')
       └── Object ─────► { value: 42 }
              │
              ▼
     Determines How JavaScript
     Can Work with the Value
```

---

> **Final Reminder:** Never judge a JavaScript value only by how it looks. `40`, `'40'`, and `40n` may appear similar, but they represent three different data types and can behave very differently. Understanding those distinctions is one of the first major steps toward understanding JavaScript itself.

