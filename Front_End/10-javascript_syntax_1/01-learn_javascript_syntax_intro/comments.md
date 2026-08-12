# Introduction to JavaScript: Comments

> **Comments are notes written inside source code for humans to read. JavaScript ignores them during execution, making them useful for explaining logic, documenting decisions, and temporarily disabling code while debugging.**

---

# Overview

Programming is often collaborative.

Code may be read by:

* You
* Teammates
* Future maintainers
* Reviewers
* Instructors
* Open-source contributors

Even code you wrote yourself can become difficult to understand after some time has passed.

JavaScript comments allow developers to leave explanatory notes directly inside the program.

---

# What Is a Comment?

A **comment** is text inside source code that JavaScript does not execute.

Comments exist only for human readers.

Example:

```javascript
// Display a message in the console
console.log('Hello!');
```

JavaScript executes:

```javascript
console.log('Hello!');
```

but ignores:

```javascript
// Display a message in the console
```

---

# Why Comments Matter

Comments can help developers:

* Explain complicated logic
* Describe why code exists
* Document important decisions
* Leave instructions
* Add reminders
* Organize code
* Temporarily disable code
* Help teammates understand a program

---

# Mental Model

```text
JavaScript File
      │
      ├── Executable Code ─────► JavaScript Runs It
      │
      └── Comments ────────────► JavaScript Ignores Them
                                     │
                                     ▼
                               Humans Read Them
```

---

# Two Types of JavaScript Comments

JavaScript provides two primary comment styles:

```text
1. Single-Line Comments
   //

2. Multi-Line Comments
   /* ... */
```

---

# 1. Single-Line Comments

A **single-line comment** begins with two forward slashes:

```javascript
//
```

Everything after `//` on that line is ignored by JavaScript.

---

## Basic Example

```javascript
// Prints 5 to the console
console.log(5);
```

Output:

```text
5
```

The first line explains what the following statement does.

---

# Anatomy of a Single-Line Comment

```javascript
// Prints 5 to the console
```

Breakdown:

```text
//
│
└── Begins the comment

Prints 5 to the console
│
└── Human-readable explanation
```

---

# Inline Single-Line Comments

A single-line comment can also appear after JavaScript code.

```javascript
console.log(5); // Prints 5
```

JavaScript executes:

```javascript
console.log(5);
```

and ignores:

```javascript
// Prints 5
```

---

# Example

```javascript
const age = 25; // User's age

console.log(age);
```

Output:

```text
25
```

---

# When to Use Single-Line Comments

Single-line comments work well for:

* Short explanations
* Quick reminders
* Small annotations
* Describing the next statement
* Temporarily disabling one line

Example:

```javascript
// Calculate the final price
const total = price * quantity;
```

---

# Temporarily Disabling a Line

Comments can prevent code from executing.

Original:

```javascript
console.log('Start');
console.log('Debug information');
console.log('Finish');
```

Temporarily disable the second statement:

```javascript
console.log('Start');
// console.log('Debug information');
console.log('Finish');
```

Output:

```text
Start
Finish
```

This technique is often called **commenting out code**.

---

# 2. Multi-Line Comments

A **multi-line comment** begins with:

```javascript
/*
```

and ends with:

```javascript
*/
```

Everything between those markers is ignored.

---

# Basic Multi-Line Example

```javascript
/*
This is a multi-line comment.
JavaScript ignores all of this text.
*/
console.log('Hello!');
```

Output:

```text
Hello!
```

---

# Multi-Line Comment Structure

```javascript
/*
Line one
Line two
Line three
*/
```

Visual structure:

```text
/*        ← Start comment
│
├── Line one
├── Line two
├── Line three
│
*/        ← End comment
```

---

# Commenting Out Multiple Lines

Multi-line comments are useful when temporarily disabling several statements.

```javascript
/*
console.log(10);
console.log(20);
console.log(30);
*/
```

None of these statements execute.

---

# Codecademy Example

```javascript
/*
This is all commented
console.log(10);
None of this is going to run!
console.log(99);
*/
```

Since all the content appears between `/*` and `*/`, JavaScript ignores everything.

---

# Multi-Line Comments Inside a Line

The `/* ... */` syntax can also appear in the middle of a statement.

```javascript
console.log(/* IGNORED! */ 5);
```

Output:

```text
5
```

JavaScript effectively reads this as:

```javascript
console.log(5);
```

---

# Another Inline Example

```javascript
const total = 10 /* base amount */ + 5;
```

Result:

```javascript
15
```

The comment has no effect on the calculation.

---

# Single-Line vs Multi-Line Comments

| Type        | Syntax      | Best Use                       |
| ----------- | ----------- | ------------------------------ |
| Single-line | `//`        | Short explanations             |
| Multi-line  | `/* ... */` | Longer notes or multiple lines |

---

# Quick Comparison

## Single-Line

```javascript
// Calculate user's total
const total = 25 + 10;
```

## Multi-Line

```javascript
/*
Calculate the user's final total
after adding the service charge.
*/
const total = 25 + 10;
```

---

# Comments Do Not Affect Output

Consider:

```javascript
// First number
const a = 10;

/* Second number */
const b = 5;

console.log(a + b);
```

Output:

```text
15
```

The comments do not alter the program's result.

---

# Comments Are for Humans

The computer does not need comments to understand JavaScript.

Humans do.

```text
Computer
────────
Reads syntax
Executes instructions

Developer
─────────
Reads syntax
Reads comments
Understands intent
```

This distinction is important.

---

# Good Comments Explain Why

Weak comments often simply repeat what the code already says.

Poor:

```javascript
// Set score to 100
const score = 100;
```

The code already makes this obvious.

A better comment explains **why** the value exists.

```javascript
// Start every new player with the maximum tutorial score.
const score = 100;
```

The second comment provides useful context that cannot be immediately inferred from the code.

---

# Code Should Still Be Readable

Comments should support good code—not replace it.

Poor:

```javascript
const x = 120; // This is the maximum number of login attempts allowed per hour
```

Better:

```javascript
const maxLoginAttemptsPerHour = 120;
```

The improved variable name makes the code self-explanatory.

A comment may still be added if there is additional reasoning:

```javascript
// Matches the current API rate-limit policy.
const maxLoginAttemptsPerHour = 120;
```

---

# Comments and Collaboration

Imagine another developer finds this:

```javascript
const delay = 3000;
```

They may wonder:

```text
Why 3000?

Milliseconds?

Why exactly three seconds?

Can I change it?
```

A comment provides context:

```javascript
// Wait three seconds before retrying the failed request.
const delay = 3000;
```

This makes maintenance easier.

---

# Comments for Complex Logic

Comments are particularly helpful when code uses logic that is not immediately obvious.

Example:

```javascript
// Apply the discount only after the customer reaches the loyalty threshold.
if (orders >= 10) {
    price *= 0.9;
}
```

The comment explains the business rule behind the condition.

---

# Comments as Documentation

Comments can describe:

* Assumptions
* Constraints
* Business rules
* Algorithms
* External dependencies
* Unexpected behavior

Example:

```javascript
// The API returns temperatures in Celsius,
// so convert only when displaying values to US users.
```

This kind of explanation may prevent future bugs.

---

# TODO Comments

Developers sometimes leave reminders using `TODO`.

```javascript
// TODO: Add validation for empty usernames.
```

Another example:

```javascript
// TODO: Replace temporary test data with API response.
```

These comments identify unfinished work.

---

# FIXME Comments

`FIXME` is sometimes used for known problems.

```javascript
// FIXME: This calculation fails for negative values.
```

These conventions are not special JavaScript syntax.

They are simply common developer practices.

---

# Common Comment Conventions

```javascript
// TODO: Add search filtering.

// FIXME: Prevent duplicate submissions.

// NOTE: This endpoint returns UTC timestamps.

// WARNING: Changing this value affects billing calculations.
```

These labels can make annotations easier to scan.

---

# Comments While Debugging

Suppose your program contains:

```javascript
console.log('Step 1');
calculateTotal();
sendPayment();
displayConfirmation();
```

If you suspect `sendPayment()` is causing a problem:

```javascript
console.log('Step 1');
calculateTotal();
// sendPayment();
displayConfirmation();
```

You can temporarily remove that operation from execution without deleting it.

---

# Comments and Version Control

When using Git, temporary comments can be useful, but long-term disabled code should usually not remain in a project.

Instead of keeping:

```javascript
/*
oldFunction();
anotherOldFunction();
deprecatedFeature();
*/
```

Git already preserves previous versions of the code.

In a real project, obsolete code can usually be removed instead of leaving large commented-out sections.

---

# Avoid Excessive Comments

Too many comments can make code harder to read.

Poor:

```javascript
// Declare a variable
const number = 5;

// Print the variable
console.log(number);

// Add one
const result = number + 1;

// Print the result
console.log(result);
```

Many of these statements are already obvious.

Cleaner:

```javascript
const number = 5;
const result = number + 1;

console.log(number);
console.log(result);
```

---

# Comments Can Become Outdated

Comments must stay synchronized with code.

Consider:

```javascript
// Apply a 10% discount
const discount = 0.20;
```

The comment says **10%**, but the code uses **20%**.

This is dangerous because the comment now provides incorrect information.

---

# Rule of Thumb

```text
Good Comment
     │
     ├── Explains WHY
     ├── Provides context
     ├── Documents unusual behavior
     └── Helps future developers

Bad Comment
     │
     ├── Repeats obvious code
     ├── Is outdated
     ├── Adds clutter
     └── Hides poor naming
```

---

# Practical Example

```javascript
// Customer information
const customerName = 'Ada';
const accountAge = 4;

// Customers qualify for loyalty pricing after three years.
const receivesDiscount = accountAge >= 3;

console.log('Customer:', customerName);
console.log('Discount eligible:', receivesDiscount);
```

Output:

```text
Customer: Ada
Discount eligible: true
```

The comments provide structure and business context.

---

# Multi-Line Documentation Example

```javascript
/*
Calculate the final ticket price.

Students receive a 20% discount,
while all other customers pay full price.
*/

const ticketPrice = 50;
const isStudent = true;

const finalPrice = isStudent
    ? ticketPrice * 0.8
    : ticketPrice;

console.log(finalPrice);
```

---

# JavaScript Ignores Comments During Execution

Conceptually:

```text
Source Code
    │
    ▼
JavaScript Parser
    │
    ├── Comment? ─────► Ignore
    │
    └── Code? ────────► Execute
```

Comments therefore do not produce output themselves.

---

# Comments and Syntax Errors

Although comment content is ignored, comment syntax must still be written correctly.

Correct:

```javascript
/* This comment is closed correctly. */
console.log('Hello');
```

Incorrect:

```javascript
/*
This comment never closes.

console.log('Hello');
```

Because the closing:

```javascript
*/
```

is missing, the remaining code may be interpreted as part of the comment.

---

# Nested Multi-Line Comments

JavaScript does not support ordinary nested block comments.

Problematic:

```javascript
/*
Outer comment

/* Inner comment */

Outer comment continues
*/
```

The first `*/` closes the original comment.

This can produce unexpected syntax errors.

When commenting out code that already contains block comments, use caution.

---

# Keyboard-Friendly Development Habit

When editing JavaScript in Vim or another code editor, commenting and uncommenting code is useful during experimentation.

Typical workflow:

```text
Write Code
   │
   ▼
Run It
   │
   ▼
Unexpected Result
   │
   ▼
Comment Out Suspected Code
   │
   ▼
Run Again
   │
   ▼
Isolate the Problem
```

This is one simple debugging strategy.

---

# Best Practices

* Use comments when they add useful context.
* Prefer comments that explain **why** code exists.
* Keep comments concise.
* Keep comments accurate and updated.
* Use meaningful variable and function names first.
* Avoid commenting every obvious statement.
* Use `//` for short notes.
* Use `/* ... */` for longer explanations.
* Remove obsolete commented-out code when version control already preserves it.

---

# Common Mistakes

## Forgetting the Second Slash

Incorrect:

```javascript
/ This is a comment
```

Correct:

```javascript
// This is a comment
```

---

## Forgetting to Close a Multi-Line Comment

Incorrect:

```javascript
/*
This comment never ends
```

Correct:

```javascript
/*
This comment ends correctly.
*/
```

---

## Commenting Out Needed Code

```javascript
// calculateTotal();
```

If the function is required, it will no longer execute.

Always remember that commented code is ignored.

---

## Writing Misleading Comments

Poor:

```javascript
// Multiply by 10
const result = value * 20;
```

Comments should match the code.

---

# Quick Reference

| Concept             | Syntax                    |
| ------------------- | ------------------------- |
| Single-line comment | `// comment`              |
| Inline comment      | `code; // comment`        |
| Multi-line comment  | `/* comment */`           |
| Commented-out code  | `// code` or `/* code */` |
| TODO note           | `// TODO: ...`            |

---

# Syntax Quick Reference

### Single-line comment

```javascript
// This is a comment
```

### Comment above code

```javascript
// Print the answer
console.log(42);
```

### Inline comment

```javascript
console.log(42); // Print the answer
```

### Multi-line comment

```javascript
/*
This comment
spans multiple
lines.
*/
```

### Inline block comment

```javascript
console.log(/* ignored */ 42);
```

---

# Key Takeaways

* Comments are written for humans, not the computer.
* JavaScript ignores comments during program execution.
* Single-line comments begin with `//`.
* Single-line comments can appear on their own line or after code.
* Multi-line comments begin with `/*` and end with `*/`.
* Multi-line comments can span several lines.
* Comments can temporarily disable code while debugging.
* Good comments explain intent, reasoning, or important context.
* Avoid comments that simply repeat obvious code.
* Keep comments updated so they do not become misleading.
* Clear code and meaningful names should reduce the need for unnecessary comments.

---

# Final Mental Model

```text
JavaScript Source Code
         │
         ▼
   ┌─────────────┐
   │ Is it code? │
   └──────┬──────┘
          │
     ┌────┴────┐
     │         │
    Yes        No
     │         │
     ▼         ▼
 Execute    Comment
             │
             ▼
           Ignore
             │
             ▼
        Human-readable
        documentation
```

---

> **Final Reminder:** Comments are most valuable when they explain information that the code itself cannot clearly communicate. Write code that explains **what** it does, and use comments when necessary to explain **why**.

