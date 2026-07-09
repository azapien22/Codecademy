===============================================================================
NAVIGATION — CD II
===============================================================================

OVERVIEW
-------------------------------------------------------------------------------

The:

    cd

command can navigate through multiple directories using a single command.

Instead of running:

    cd 2015

    cd jan

    cd memory


you can use a:

    relative path


Example:

    cd 2015/jan/memory


This allows you to move through several nested directories at once.


MEMORY:

    cd

      +

    relative path

      =

    MOVE THROUGH MULTIPLE DIRECTORIES


===============================================================================
1. REVIEW: BASIC CD NAVIGATION
===============================================================================

The:

    cd

command stands for:

    Change Directory


Basic syntax:

    cd directory_name


Example:

    cd 2015


This changes the working directory to:

    2015/


However, directories are often nested several levels deep.


Example:

    blog/
    |
    +-- 2014/
    |
    +-- 2015/
        |
        +-- jan/
            |
            +-- memory/


To move from:

    blog/

to:

    memory/


you could run:

    cd 2015

    cd jan

    cd memory


But there is a faster method.


===============================================================================
2. NAVIGATING MULTIPLE DIRECTORIES
===============================================================================

To navigate across multiple directories with one command, provide `cd` with a:

    relative path


Example:

    cd 2015/jan/memory


Starting location:

    blog/


Destination:

    memory/


Filesystem:

    blog/
    |
    +-- 2015/
        |
        +-- jan/
            |
            +-- memory/


Command:

    cd 2015/jan/memory


Movement:

    blog/
      |
      v
    2015/
      |
      v
    jan/
      |
      v
    memory/


The entire movement happens with:

    ONE COMMAND


===============================================================================
3. WHAT IS A RELATIVE PATH?
===============================================================================

A:

    relative path

describes the location of a file or directory relative to your current working
directory.


Example:

Current directory:

    blog/


Goal directory:

    memory/


Filesystem:

    blog/
    |
    +-- 2015/
        |
        +-- jan/
            |
            +-- memory/


Relative path:

    2015/jan/memory


Command:

    cd 2015/jan/memory


The path is relative to:

    blog/


because that is the current working directory.


===============================================================================
4. FORWARD SLASHES IN PATHS
===============================================================================

A relative path uses:

    /

to separate directory names.


Example:

    2015/jan/memory


Breakdown:

    2015

      /

    jan

      /

    memory


The shell reads this path as:

    Enter 2015/

        then

    Enter jan/

        then

    Enter memory/


Visual:

    2015/jan/memory
      |    |     |
      v    v     v
    2015  jan  memory


===============================================================================
5. COMMAND + RELATIVE PATH
===============================================================================

Example:

    cd 2015/jan/memory


Breakdown:

    cd

        COMMAND


    2015/jan/memory

        ARGUMENT


More specifically, the argument is a:

    relative path


Mental Model:

    cd       2015/jan/memory
    |                |
    v                v
  COMMAND      RELATIVE PATH


Together:

    cd 2015/jan/memory

        ↓

    CHANGE DIRECTORY THROUGH THE PATH

        ↓

    memory/


===============================================================================
6. MULTIPLE CD COMMANDS VS ONE RELATIVE PATH
===============================================================================

METHOD 1:

Multiple commands:

    cd 2015

    cd jan

    cd memory


METHOD 2:

One command:

    cd 2015/jan/memory


Both reach the same destination.


Visual:

MULTIPLE COMMANDS:

    blog/
      |
      | cd 2015
      v
    2015/
      |
      | cd jan
      v
    jan/
      |
      | cd memory
      v
    memory/


SINGLE COMMAND:

    blog/
      |
      | cd 2015/jan/memory
      |
      +------------------------+
                               |
                               v
                            memory/


===============================================================================
7. VERIFYING THE DESTINATION
===============================================================================

Starting location:

    /home/ccuser/workspace/blog


Command:

    cd 2015/jan/memory


Check the new location:

    pwd


Output:

    /home/ccuser/workspace/blog/2015/jan/memory


Workflow:

    pwd

      ↓

    CHECK STARTING LOCATION


    cd 2015/jan/memory

      ↓

    NAVIGATE MULTIPLE LEVELS


    pwd

      ↓

    CONFIRM DESTINATION


===============================================================================
8. MOVING UP MULTIPLE DIRECTORIES
===============================================================================

Previously:

    cd ..

was used to move up:

    ONE DIRECTORY


To move up multiple directories, combine multiple:

    ..

using forward slashes.


Example:

    cd ../..


This means:

    Go up one directory

        then

    Go up another directory


MEMORY:

    ..

        =

    UP ONE LEVEL


    ../..

        =

    UP TWO LEVELS


===============================================================================
9. CD ../.. EXAMPLE
===============================================================================

Starting location:

    /home/ccuser/workspace/blog/2015/jan/memory


Check location:

    $ pwd


Output:

    /home/ccuser/workspace/blog/2015/jan/memory


Move up two directories:

    $ cd ../..


Check location again:

    $ pwd


Output:

    /home/ccuser/workspace/blog/2015


Movement:

    memory/
      |
      | ..
      v
    jan/
      |
      | ..
      v
    2015/


Therefore:

    ../..

can be read as:

    "the directory above and the directory above that"


===============================================================================
10. VISUALIZING ../..
===============================================================================

Filesystem:

    blog/
    |
    +-- 2015/
        |
        +-- jan/
            |
            +-- memory/
                  ^
                  |
              YOU ARE HERE


Command:

    cd ../..


Step 1:

    memory/
      |
      | ..
      v
    jan/


Step 2:

    jan/
      |
      | ..
      v
    2015/


Final Location:

    blog/
    |
    +-- 2015/
          ^
          |
      YOU ARE HERE


===============================================================================
11. MOVING UP THREE OR MORE DIRECTORIES
===============================================================================

The same pattern can continue.


Up one directory:

    cd ..


Up two directories:

    cd ../..


Up three directories:

    cd ../../..


Up four directories:

    cd ../../../..


Pattern:

    ..

        one level up


    ../..

        two levels up


    ../../..

        three levels up


    ../../../..

        four levels up


===============================================================================
12. MOVING TO AN ADJACENT DIRECTORY
===============================================================================

You can combine:

    ..

with:

    directory names


This allows you to move to an:

    adjacent directory


Example filesystem:

    blog/
    |
    +-- 2014/
    |
    +-- 2015/


Suppose you are inside:

    2015/


and want to move to:

    2014/


The directories are siblings because they share the same parent:

    blog/


Command:

    cd ../2014


===============================================================================
13. UNDERSTANDING ../2014
===============================================================================

Starting location:

    blog/2015/


Command:

    cd ../2014


Breakdown:

    ..

        Move up to blog/


    /

        Path separator


    2014

        Move into 2014/


Movement:

    2015/
      |
      | ..
      v
    blog/
      |
      | 2014
      v
    2014/


Visual:

                    blog/
                   /     \
                  /       \
               2014/     2015/
                 ^          |
                 |          |
                 +----------+
                   ../2014


===============================================================================
14. ADJACENT DIRECTORY EXAMPLE
===============================================================================

List the contents of:

    blog/


Command:

    $ ls


Output:

    2014    2015    hardware.txt


Move into:

    2015/


Command:

    $ cd 2015


Check location:

    $ pwd


Output:

    /home/ccuser/workspace/blog/2015


Now move directly to:

    2014/


Command:

    $ cd ../2014


Check location:

    $ pwd


Output:

    /home/ccuser/workspace/blog/2014


===============================================================================
15. PARENT, CHILD, AND SIBLING DIRECTORIES
===============================================================================

Example:

    blog/
    |
    +-- 2014/
    |
    +-- 2015/


Relationship:

    blog/

        PARENT


    2014/

        CHILD OF blog/


    2015/

        CHILD OF blog/


Because:

    2014/

and:

    2015/

have the same parent, they are:

    SIBLING DIRECTORIES


Movement between siblings:

    2015/

      ↓

    cd ../2014

      ↓

    2014/


===============================================================================
16. RELATIVE PATH MOVEMENT PATTERNS
===============================================================================

MOVE DOWN ONE LEVEL:

    cd directory


Example:

    cd 2015


-------------------------------------------------------------------------------

MOVE DOWN MULTIPLE LEVELS:

    cd directory/subdirectory/destination


Example:

    cd 2015/jan/memory


-------------------------------------------------------------------------------

MOVE UP ONE LEVEL:

    cd ..


-------------------------------------------------------------------------------

MOVE UP TWO LEVELS:

    cd ../..


-------------------------------------------------------------------------------

MOVE TO A SIBLING DIRECTORY:

    cd ../sibling_directory


Example:

    cd ../2014


-------------------------------------------------------------------------------

MOVE UP AND THEN DOWN MULTIPLE LEVELS:

    cd ../../other/path


The path can combine:

    ..

    directory names

    forward slashes


===============================================================================
17. RELATIVE PATH VS ABSOLUTE PATH
===============================================================================

A:

    relative path

starts from the current working directory.


Example:

    cd 2015/jan/memory


An:

    absolute path

starts from the root directory:

    /


Example:

    cd /home/ccuser/workspace/blog/2015/jan/memory


Comparison:

RELATIVE PATH:

    cd 2015/jan/memory


ABSOLUTE PATH:

    cd /home/ccuser/workspace/blog/2015/jan/memory


The relative path depends on:

    WHERE YOU CURRENTLY ARE


The absolute path begins from:

    ROOT DIRECTORY /


===============================================================================
18. CODECADEMY EXERCISE WORKFLOW
===============================================================================

Goal:

Start inside:

    blog/2015/


First, check your location:

    pwd


If necessary, use the absolute path:

    cd /home/ccuser/workspace/blog/2015/


Confirm:

    pwd


Expected output:

    /home/ccuser/workspace/blog/2015


Next, navigate to:

    feb/


using one command.


The exact relative path depends on the filesystem structure shown in the
exercise.

General pattern:

    cd path/to/feb


Then check the working directory:

    pwd


Workflow:

    pwd

      ↓

    CHECK LOCATION


    cd /home/ccuser/workspace/blog/2015/

      ↓

    MOVE TO STARTING DIRECTORY


    pwd

      ↓

    CONFIRM START


    cd relative/path/to/feb

      ↓

    MOVE TO FEB/


    pwd

      ↓

    CONFIRM DESTINATION


===============================================================================
19. PRACTICAL PROJECT EXAMPLE
===============================================================================

Suppose your project structure is:

    web-development/
    |
    +-- projects/
        |
        +-- dasmoto/
            |
            +-- resources/
                |
                +-- pics/


Starting location:

    web-development/


Move directly to:

    pics/


Command:

    cd projects/dasmoto/resources/pics


Check location:

    pwd


Possible output:

    /home/amaury/web-development/projects/dasmoto/resources/pics


Move up two levels:

    cd ../..


New location:

    dasmoto/


Movement:

    pics/
      |
      | ..
      v
    resources/
      |
      | ..
      v
    dasmoto/


===============================================================================
20. NAVIGATION DECISION MODEL
===============================================================================

Ask:

    WHERE AM I?


Use:

    pwd


Then ask:

    WHAT IS HERE?


Use:

    ls


Then decide:


IF DESTINATION IS BELOW CURRENT DIRECTORY:

    cd path/to/destination


IF DESTINATION IS ONE LEVEL ABOVE:

    cd ..


IF DESTINATION IS MULTIPLE LEVELS ABOVE:

    cd ../..


IF DESTINATION IS A SIBLING DIRECTORY:

    cd ../sibling


IF YOU KNOW THE COMPLETE PATH:

    cd /absolute/path/to/destination


===============================================================================
21. COMMON BEGINNER MISTAKES
===============================================================================

MISTAKE 1:

Using backslashes in a Unix/Linux path.


Incorrect:

    cd 2015\jan\memory


Correct:

    cd 2015/jan/memory


Unix/Linux paths use:

    /


-------------------------------------------------------------------------------
MISTAKE 2:

Forgetting the slash between directories.


Incorrect:

    cd 2015 jan memory


Correct:

    cd 2015/jan/memory


-------------------------------------------------------------------------------
MISTAKE 3:

Confusing:

    .

and:

    ..


Remember:

    .

        CURRENT DIRECTORY


    ..

        PARENT DIRECTORY


-------------------------------------------------------------------------------
MISTAKE 4:

Using a relative path from the wrong starting directory.


Example:

    cd 2015/jan/memory


only works if:

    2015/

exists relative to the current working directory.


Always check:

    pwd


and:

    ls


when uncertain.


===============================================================================
22. QUICK REFERENCE
===============================================================================

MOVE INTO ONE DIRECTORY:

    cd 2015


MOVE THROUGH MULTIPLE DIRECTORIES:

    cd 2015/jan/memory


MOVE UP ONE DIRECTORY:

    cd ..


MOVE UP TWO DIRECTORIES:

    cd ../..


MOVE UP THREE DIRECTORIES:

    cd ../../..


MOVE TO A SIBLING DIRECTORY:

    cd ../2014


CHECK CURRENT LOCATION:

    pwd


VIEW AVAILABLE CONTENTS:

    ls


===============================================================================
23. MEMORY MODEL
===============================================================================

RELATIVE PATH:

    Current Location
          |
          v
    Follow Directions
          |
          v
    Destination


Example:

    cd 2015/jan/memory


Movement:

    blog/
      |
      v
    2015/
      |
      v
    jan/
      |
      v
    memory/


UPWARD MOVEMENT:

    cd ../..


Movement:

    memory/
      |
      v
    jan/
      |
      v
    2015/


SIDEWAYS MOVEMENT:

    cd ../2014


Movement:

    2015/
      |
      v
    blog/
      |
      v
    2014/


===============================================================================
24. KEY TAKEAWAYS
===============================================================================

- `cd` can navigate through multiple directories using one command.

- A relative path describes a location relative to the current working
  directory.

- Directory names in Unix/Linux paths are separated by:

      /

- Example:

      cd 2015/jan/memory

  moves through three nested directory levels.

- The symbol:

      ..

  represents the parent directory.

- The path:

      ../..

  moves up two directory levels.

- The path:

      ../2014

  moves up one level and then into the `2014/` directory.

- Relative paths can move:

      down the filesystem tree

      up the filesystem tree

      between sibling directories

- `pwd` should be used to verify your current location.

- `ls` should be used to inspect available files and directories.

- Absolute paths begin with:

      /

- Relative paths begin from:

      the current working directory


===============================================================================
25. FINAL MEMORY MAP
===============================================================================

    cd directory

      ↓

    DOWN ONE LEVEL


    cd path/to/directory

      ↓

    DOWN MULTIPLE LEVELS


    cd ..

      ↓

    UP ONE LEVEL


    cd ../..

      ↓

    UP TWO LEVELS


    cd ../sibling

      ↓

    UP ONE LEVEL
    THEN DOWN INTO SIBLING


COMPLETE NAVIGATION MODEL:

    pwd

      ↓

    WHERE AM I?


    ls

      ↓

    WHAT IS HERE?


    cd 2015/jan/memory

      ↓

    MOVE DOWN MULTIPLE LEVELS


    cd ../..

      ↓

    MOVE UP MULTIPLE LEVELS


    cd ../2014

      ↓

    MOVE TO AN ADJACENT DIRECTORY


Remember:

    RELATIVE PATH

        =

    DIRECTIONS FROM
    WHERE YOU ARE NOW


Example:

    2015/jan/memory

        =

    DOWN → DOWN → DOWN


    ../..

        =

    UP → UP


    ../2014

        =

    UP → DOWN
