# Navigation — Filesystem

## Overview

A:

    filesystem

organizes a computer's:

- files
- directories

into a hierarchical:

    tree structure

The filesystem begins with a single top-level directory called the:

    root directory

From the root directory, additional directories and files branch outward.

---

# Filesystem Tree Structure

A filesystem can be visualized as an upside-down tree.

Example:

    root/
    │
    ├── home/
    │   │
    │   ├── user/
    │   │   │
    │   │   ├── documents/
    │   │   ├── pictures/
    │   │   └── notes.txt
    │
    └── blog/
        │
        ├── 2014/
        ├── 2015/
        └── hardware.txt

The structure begins at:

    root/

and branches into directories, subdirectories, and files.

---

# Root Directory

The first directory in the filesystem is called the:

    root directory

The root directory is the parent of all other directories and files in the filesystem.

Visual:

    root/
      │
      ├── directory/
      │
      ├── directory/
      │
      └── file

Everything in the filesystem ultimately exists beneath the root directory.

---

# Directory

A:

    directory

is a container that can hold:

- files
- other directories

Directories are commonly called:

    folders

Example:

    blog/

The `/` after the name is commonly used in diagrams and command-line examples to indicate that `blog` is a directory.

---

# Parent Directory

A directory containing another directory or file is called the:

    parent directory

Example:

    blog/
    │
    ├── 2014/
    ├── 2015/
    └── hardware.txt

In this example:

    blog/

is the parent of:

    2014/

    2015/

    hardware.txt

---

# Child Directory

A directory located inside another directory is called a:

    child directory

Example:

    blog/
      │
      └── 2015/

Relationship:

    blog/

        ↓ parent of

    2015/

And:

    2015/

        ↓ child of

    blog/

---

# Parent-Child Relationships

Filesystem navigation is based on relationships between directories.

Example:

    root/
      │
      └── blog/
            │
            ├── 2014/
            │     │
            │     └── article.txt
            │
            ├── 2015/
            │
            └── hardware.txt

Relationships:

    root/

is the parent of:

    blog/

---

    blog/

is the parent of:

    2014/

    2015/

    hardware.txt

---

    2014/

is the parent of:

    article.txt

The parent-child relationship continues for as many levels as directories and files are nested.

---

# Nested Directories

Directories located inside other directories are:

    nested directories

Example:

    projects/
      │
      └── web-development/
            │
            └── css/
                  │
                  └── notes.txt

The nesting hierarchy is:

    projects

        ↓

    web-development

        ↓

    css

        ↓

    notes.txt

---

# Files vs Directories

## Directory

A directory contains other filesystem items.

Example:

    blog/

It may contain:

    files

and:

    child directories

---

## File

A file stores data or content.

Examples:

    hardware.txt

    index.html

    style.css

    image.jpg

    notes.md

---

# Real-World Example

A web development project may have the following filesystem:

    Dasmotos-Arts-Crafts/
    │
    ├── index.html
    │
    └── resources/
        │
        ├── style.css
        │
        └── pics/
            │
            ├── pattern.jpeg
            ├── hacksaw.jpeg
            ├── frames.jpeg
            └── finnish.jpeg

Relationships:

    Dasmotos-Arts-Crafts/

is the parent of:

    index.html

    resources/

---

    resources/

is the parent of:

    style.css

    pics/

---

    pics/

is the parent of:

    pattern.jpeg

    hacksaw.jpeg

    frames.jpeg

    finnish.jpeg

---

# Graphical File Managers

You already interact with filesystem trees when using graphical file managers.

Examples include:

    Windows File Explorer

and:

    macOS Finder

These applications provide a visual interface for navigating the filesystem hierarchy.

Conceptually:

    Computer
      │
      ├── Documents
      │     ├── Notes
      │     └── Projects
      │
      ├── Downloads
      │
      └── Pictures

The command line provides another way to navigate the same filesystem.

---

# Why Filesystem Knowledge Matters

Understanding filesystem structure is essential for:

- terminal navigation
- web development
- programming
- Git
- GitHub
- project organization
- file paths
- importing modules
- linking CSS files
- loading images

For example, in HTML:

    <link rel="stylesheet" href="resources/style.css">

The browser navigates the filesystem structure to locate:

    resources/
        │
        └── style.css

---

# Filesystem Mental Model

Think of a filesystem as a family tree.

    Parent Directory
           │
           ├── Child Directory
           │        │
           │        └── File
           │
           └── File

Or as a tree:

    Root
      │
      ├── Branch
      │     │
      │     └── Smaller Branch
      │              │
      │              └── File
      │
      └── Branch

---

# Quick Reference

Filesystem

    Organizes files and directories.

---

Root Directory

    First directory in the filesystem.

    Parent of all other filesystem items.

---

Parent Directory

    Contains files or child directories.

---

Child Directory

    Exists inside a parent directory.

---

Nested Directory

    A directory located inside another directory.

---

File

    Stores data or content.

---

# Key Takeaways

- A filesystem organizes files and directories into a tree structure.
- The filesystem begins with the root directory.
- The root directory is the ultimate parent of all files and directories.
- Directories can contain files and additional directories.
- A directory containing another filesystem item is its parent.
- A directory inside another directory is its child.
- Parent-child relationships continue through every level of nesting.
- Windows File Explorer and macOS Finder are graphical representations of filesystem trees.
- Understanding filesystem structure is fundamental to terminal navigation, programming, web development, and Git.

Remember:

    Root
      ↓
    Parent Directory
      ↓
    Child Directory
      ↓
    Nested Directory
      ↓
    File
