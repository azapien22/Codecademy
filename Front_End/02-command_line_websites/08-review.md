# Navigation: Review

## Overview

The command line provides a text-based interface for interacting with a computer's operating system.

To access and use the command line, we use a **terminal**.

Through the terminal, we can navigate the filesystem, inspect directories, move between locations, and create new files and directories.

---

## Understanding the Filesystem

A **filesystem** organizes a computer's files and directories into a hierarchical tree structure.

The filesystem begins with the **root directory**.

From the root directory, the filesystem branches into additional directories and files.

A directory can contain:

* Files
* Child directories
* Additional nested directories

A simplified filesystem might look like this:

```text
/
├── home/
│   └── user/
│       ├── documents/
│       ├── projects/
│       └── notes.txt
├── media/
└── tmp/
```

In this structure:

* `/` is the root directory.
* `home/` is a child directory of the root directory.
* `user/` is a child directory of `home/`.
* `documents/` and `projects/` are child directories of `user/`.
* `notes.txt` is a file located inside `user/`.

---

## Navigation Commands

Several commands are commonly used to navigate and modify the filesystem from the command line.

### `pwd` - Print Working Directory

The `pwd` command displays the full path of the current working directory.

```bash
pwd
```

Example output:

```text
/home/user/projects
```

Use `pwd` when you need to confirm your current location in the filesystem.

---

### `ls` - List Directory Contents

The `ls` command displays the files and directories located inside the current working directory.

```bash
ls
```

Example output:

```text
README.md
documents
media
notes.txt
```

Use `ls` to inspect the contents of a directory.

---

### `cd` - Change Directory

The `cd` command moves from the current working directory into another directory.

```bash
cd <directory_name>
```

Example:

```bash
cd media
```

This changes the current working directory to `media/`.

You can verify the new location with:

```bash
pwd
```

---

### `..` - Parent Directory

The `..` symbol represents the directory directly above the current working directory.

To move up one directory level:

```bash
cd ..
```

For example:

```text
/home/user/projects
```

After running:

```bash
cd ..
```

The working directory becomes:

```text
/home/user
```

Multiple `..` references can be combined to move up several directory levels.

```bash
cd ../..
```

---

### `mkdir` - Make Directory

The `mkdir` command creates a new directory inside the current working directory.

```bash
mkdir <directory_name>
```

Example:

```bash
mkdir media
```

This creates:

```text
media/
```

---

### `touch` - Create a File

The `touch` command can be used to create a new empty file inside the current working directory.

```bash
touch <filename>
```

Example:

```bash
touch keyboard.txt
```

This creates:

```text
keyboard.txt
```

If the file already exists, `touch` updates its timestamps without deleting or changing its contents.

---

## Helper Commands and Shortcuts

Terminal helper commands and keyboard shortcuts can make filesystem navigation faster and more efficient.

### Clear the Terminal

Use:

```bash
clear
```

Or the keyboard shortcut:

```text
Ctrl + L
```

These clear the visible terminal screen.

The `clear` command does not delete command history, remove files, or undo previous commands.

---

### Tab Completion

Press:

```text
Tab
```

to autocomplete the name of an existing file or directory.

For example, instead of typing:

```bash
cd documents
```

You may be able to type:

```text
cd doc
```

and then press `Tab` to complete the directory name.

---

### Command History

Use the arrow keys to navigate through previously entered commands.

```text
↑    Previous command
↓    Next command
```

The `Up Arrow` moves backward through command history.

The `Down Arrow` moves forward toward more recent commands.

This is especially useful for repeating or editing previously entered commands.

---

## Command Summary

| Command or Key | Description                            |
| -------------- | -------------------------------------- |
| `pwd`          | Displays the current working directory |
| `ls`           | Lists files and directories            |
| `cd`           | Changes the current working directory  |
| `..`           | Represents the parent directory        |
| `cd ..`        | Moves up one directory level           |
| `mkdir`        | Creates a new directory                |
| `touch`        | Creates a new empty file               |
| `clear`        | Clears the visible terminal screen     |
| `Tab`          | Autocompletes file and directory names |
| `↑`            | Moves backward through command history |
| `↓`            | Moves forward through command history  |

---

## Key Takeaways

The command line allows us to interact directly with the operating system through a text-based interface.

The filesystem is organized as a hierarchical tree that begins with the root directory and branches into parent directories, child directories, and files.

The essential navigation commands covered in this section are:

```text
pwd
ls
cd
mkdir
touch
```

These commands allow you to determine your current location, inspect directory contents, move through the filesystem, create directories, and create files.

Helper commands and keyboard shortcuts such as `clear`, `Tab`, `↑`, and `↓` make terminal navigation faster and more efficient.

> **Remember:** Becoming comfortable with filesystem navigation is foundational for software development, Git, server administration, Linux, WSL, and working with development environments from the command line.

