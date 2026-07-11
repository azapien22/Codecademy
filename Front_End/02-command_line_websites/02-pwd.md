===============================================================================
NAVIGATION — PWD
===============================================================================

OVERVIEW
-------------------------------------------------------------------------------

The:

    pwd

command stands for:

    Print Working Directory

It displays the name and full path of the directory you are currently in.

The directory you are currently inside is called the:

    working directory


MEMORY:

    pwd

      ↓

    Print Working Directory

      ↓

    "Where am I?"


===============================================================================
THE WORKING DIRECTORY
===============================================================================

The:

    working directory

is the directory you are currently located inside.


Example:

    blog/
    |
    +-- 2014/
    |
    +-- 2015/
    |
    +-- hardware.txt


If you are currently inside:

    blog/

then:

    blog/

is your working directory.


===============================================================================
USING PWD
===============================================================================

Command:

    pwd


Example:

    $ pwd


Possible output:

    /home/ccuser/workspace/blog


This tells you that your current working directory is:

    blog/


and its full filesystem path is:

    /home/ccuser/workspace/blog


===============================================================================
UNDERSTANDING THE PATH
===============================================================================

Example:

    /home/ccuser/workspace/blog


Breakdown:

    /

        Root directory


    home/

        Directory inside the root directory


    ccuser/

        Directory inside home/


    workspace/

        Directory inside ccuser/


    blog/

        Current working directory


Visual:

    /
    |
    +-- home/
        |
        +-- ccuser/
            |
            +-- workspace/
                |
                +-- blog/
                    ^
                    |
                YOU ARE HERE


===============================================================================
CODECADEMY WORKING DIRECTORY
===============================================================================

In Codecademy courses, the working directory is usually somewhere inside:

    /home/ccuser/workspace/


Example:

    /home/ccuser/workspace/blog


Filesystem:

    /
    |
    +-- home/
        |
        +-- ccuser/
            |
            +-- workspace/
                |
                +-- blog/


The:

    workspace/

directory contains the project directories used in Codecademy exercises.


===============================================================================
PWD AND LS
===============================================================================

The commands:

    pwd

and:

    ls

are commonly used together when navigating the filesystem.


-------------------------------------------------------------------------------
PWD
-------------------------------------------------------------------------------

Command:

    pwd


Question answered:

    "Where am I?"


Example:

    $ pwd


Output:

    /home/ccuser/workspace/blog


-------------------------------------------------------------------------------
LS
-------------------------------------------------------------------------------

Command:

    ls


Question answered:

    "What is here?"


Example:

    $ ls


Output:

    2014    2015    hardware.txt


===============================================================================
PWD + LS WORKFLOW
===============================================================================

Command:

    pwd


Output:

    /home/ccuser/workspace/blog


Meaning:

    Current Location:

        blog/


Next command:

    ls


Output:

    2014    2015    hardware.txt


Meaning:

    Current Contents:

        2014/

        2015/

        hardware.txt


Mental Model:

    pwd

      ↓

    WHERE AM I?


    ls

      ↓

    WHAT IS HERE?


===============================================================================
FILESYSTEM EXAMPLE
===============================================================================

Filesystem:

    /
    |
    +-- home/
        |
        +-- ccuser/
            |
            +-- workspace/
                |
                +-- blog/
                    |
                    +-- 2014/
                    |
                    +-- 2015/
                    |
                    +-- hardware.txt


Current location:

    blog/


Run:

    pwd


Output:

    /home/ccuser/workspace/blog


Run:

    ls


Output:

    2014    2015    hardware.txt


===============================================================================
NAVIGATION COMMAND RELATIONSHIP
===============================================================================

Three important navigation commands are:

    pwd

    ls

    cd


Their purposes:

    pwd

      ↓

    Show current location


    ls

      ↓

    Show current directory contents


    cd

      ↓

    Change current directory


Navigation Loop:

    pwd

      ↓

    WHERE AM I?


    ls

      ↓

    WHAT IS HERE?


    cd directory

      ↓

    MOVE TO ANOTHER DIRECTORY


    pwd

      ↓

    CONFIRM NEW LOCATION


===============================================================================
EXAMPLE TERMINAL SESSION
===============================================================================

Check current location:

    $ pwd


Output:

    /home/ccuser/workspace/blog


Check directory contents:

    $ ls


Output:

    2014    2015    hardware.txt


Move into the 2015 directory:

    $ cd 2015


Confirm the new working directory:

    $ pwd


Output:

    /home/ccuser/workspace/blog/2015


The working directory changed from:

    blog/

to:

    2015/


===============================================================================
QUICK REFERENCE
===============================================================================

COMMAND:

    pwd


FULL NAME:

    Print Working Directory


PURPOSE:

    Display the current working directory.


QUESTION ANSWERED:

    "Where am I?"


EXAMPLE:

    $ pwd


OUTPUT:

    /home/ccuser/workspace/blog


===============================================================================
MEMORY TRICK
===============================================================================

    P = Print

    W = Working

    D = Directory


Therefore:

    pwd

      ↓

    Print Working Directory


Simple Memory:

    pwd

      =

    WHERE AM I?


===============================================================================
KEY TAKEAWAYS
===============================================================================

- `pwd` stands for:

      Print Working Directory

- The working directory is the directory you are currently inside.

- `pwd` displays the path of the current working directory.

- In Codecademy exercises, project directories are commonly located inside:

      /home/ccuser/workspace/

- `pwd` is useful for determining your current location in the filesystem.

- `pwd` and `ls` are commonly used together.

- `pwd` answers:

      "Where am I?"

- `ls` answers:

      "What is here?"


===============================================================================
FINAL MEMORY MAP
===============================================================================

    pwd

      ↓

    PRINT WORKING DIRECTORY

      ↓

    SHOW CURRENT LOCATION


Example:

    $ pwd

      ↓

    /home/ccuser/workspace/blog


Then:

    $ ls

      ↓

    2014    2015    hardware.txt


CORE NAVIGATION MODEL:

    pwd

      ↓

    WHERE AM I?


    ls

      ↓

    WHAT IS HERE?


    cd

      ↓

    WHERE DO I WANT TO GO?


Remember:

    pwd

        =

    PRINT THE PATH
    OF THE DIRECTORY
    I AM CURRENTLY IN
