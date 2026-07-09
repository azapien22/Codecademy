# Navigation: Creating Directories with `mkdir`

## Overview

Now that we can navigate through the existing filesystem, we can begin modifying its structure by creating new directories (folders) directly from the command line.

The command used to create a directory is:

```bash
mkdir
```

The name `mkdir` stands for **make directory**.

---

## Basic Syntax

```bash
mkdir <directory_name>
```

The `mkdir` command takes the name of the directory you want to create as an argument.

### Example

```bash
mkdir media
```

This command creates a new directory named:

```text
media/
```

The directory is created inside the **current working directory**.

---

## Example Directory Structure

Before running the command:

```text
project/
├── index.html
└── README.md
```

Run:

```bash
mkdir media
```

After running the command:

```text
project/
├── media/
├── index.html
└── README.md
```

---

## Verify the Directory

After creating the directory, use the `ls` command to verify that it exists:

```bash
ls
```

Example output:

```text
README.md
index.html
media
```

For a more detailed listing:

```bash
ls -l
```

---

## Key Concept

The general pattern for using `mkdir` is:

```bash
mkdir directory_name
```

For example:

```bash
mkdir images
mkdir css
mkdir scripts
mkdir documents
```

Each command creates a new directory inside the current working directory.

---

## Quick Reference

| Command        | Description                            |
| -------------- | -------------------------------------- |
| `mkdir media`  | Creates a directory named `media`      |
| `mkdir images` | Creates a directory named `images`     |
| `ls`           | Lists files and directories            |
| `pwd`          | Displays the current working directory |

> **Remember:** `mkdir` means **make directory**, and the directory is created in your current location unless you specify another path.

