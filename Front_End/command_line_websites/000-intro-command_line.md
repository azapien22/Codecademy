# COMMAND LINE — INTRODUCTION

===============================================================================
1. WHAT IS THE COMMAND LINE?
===============================================================================

The command line is a:

    text-based interface

for interacting with a computer.

Instead of using:

    mouse clicks
    icons
    menus
    graphical windows

you interact with the computer by typing:

    commands

The basic process is:

    User
      |
      v
    Command Line
      |
      v
    Operating System
      |
      v
    Computer performs task


Example:

    pwd

The command line receives the command and asks the operating system to execute
it.

-------------------------------------------------------------------------------
COMMAND LINE VS GRAPHICAL INTERFACE
-------------------------------------------------------------------------------

Graphical Interface:

    User
      |
      v
    Click Folder
      |
      v
    Open Folder
      |
      v
    Find File


Command Line:

    User
      |
      v
    Type Command
      |
      v
    Navigate Directory
      |
      v
    Access File


Examples of graphical file managers:

    Windows:
        File Explorer

    macOS:
        Finder


The command line performs many of the same tasks but uses text commands.

===============================================================================
2. NAVIGATING THE FILESYSTEM
===============================================================================

From the command line, you can navigate:

    files

    directories

    projects

    programs

    configuration files


Example filesystem:

    home/
    |
    +-- amaury/
        |
        +-- projects/
            |
            +-- website/
                |
                +-- index.html
                +-- style.css


Command-line navigation might look like:

    cd projects

    cd website

    ls


Result:

    index.html
    style.css

===============================================================================
3. WHY USE THE COMMAND LINE?
===============================================================================

The command line is powerful because it allows you to:

    navigate files

    create files

    create directories

    move files

    rename files

    delete files

    run programs

    install software

    manage servers

    write scripts

    automate repetitive tasks

    combine commands


Example:

    mkdir project

creates a directory named:

    project


Example:

    touch index.html

creates a file named:

    index.html

===============================================================================
4. AUTOMATION
===============================================================================

One major advantage of the command line is:

    automation

Instead of performing the same task manually many times, commands can be
placed into scripts.

Manual workflow:

    Open folder
        |
        v
    Create file
        |
        v
    Rename file
        |
        v
    Move file
        |
        v
    Repeat


Automated workflow:

    Script
      |
      v
    Executes multiple commands automatically


This is especially useful for:

    development

    system administration

    AI infrastructure

    server management

    deployment

    backups

    data processing

===============================================================================
5. COMBINING COMMANDS
===============================================================================

Simple commands can be combined to perform more complex tasks.

Example:

    cat notes.txt | grep "CSS"


Conceptually:

    cat notes.txt
          |
          v
      file contents
          |
          v
        grep
          |
          v
    lines containing CSS


The output of one command becomes the input of another command.

This is one of the most powerful ideas in Unix-based command-line systems.

===============================================================================
6. UNIX-BASED SYSTEMS
===============================================================================

This course focuses on Unix-based command-line environments such as:

    Linux

and Unix-like systems such as:

    macOS


The commands are also highly relevant to:

    Ubuntu

    Debian

    Fedora

    WSL2

    Linux servers

    cloud servers


For a Windows computer running WSL2:

    Windows 11
        |
        v
    WSL2
        |
        v
    Ubuntu
        |
        v
    Bash Shell
        |
        v
    Unix/Linux Commands


Therefore, these skills transfer directly to Linux environments running under
WSL2.

===============================================================================
7. COMMAND-LINE MENTAL MODEL
===============================================================================

Think of the command line as a conversation:

    User:
        "Where am I?"

    Command:
        pwd


    User:
        "What files are here?"

    Command:
        ls


    User:
        "Move into this directory."

    Command:
        cd directory_name


    User:
        "Create a file."

    Command:
        touch file.txt


    User:
        "Create a directory."

    Command:
        mkdir directory_name

===============================================================================
8. QUICK REFERENCE
===============================================================================

Command Line:

    Text interface for interacting with the operating system.


Terminal:

    Application window that provides access to a shell.


Shell:

    Program that interprets commands.


Command:

    Instruction entered by the user.


Script:

    File containing commands that can be executed automatically.


Filesystem:

    Tree structure containing files and directories.

===============================================================================
9. KEY TAKEAWAYS
===============================================================================

- The command line is a text-based interface.

- Commands are passed to the operating system for execution.

- The command line can navigate files and directories.

- It provides capabilities beyond graphical file managers.

- Commands can run programs and manage systems.

- Scripts can automate repetitive tasks.

- Simple commands can be combined into powerful workflows.

- This course focuses on Unix-based and Unix-like command-line environments.

- Linux command-line skills are directly applicable to Ubuntu and WSL2.


MEMORY MODEL:

    USER
      |
      v
    TERMINAL
      |
      v
    SHELL
      |
      v
    COMMAND
      |
      v
    OPERATING SYSTEM
      |
      v
    RESULT
