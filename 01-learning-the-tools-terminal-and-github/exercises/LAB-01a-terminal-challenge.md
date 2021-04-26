Challenge!
===

Create the following structure inside your `~/alchemy` directory (folder).

## Hint: Have the finder open while you do this!

![](../notes/screens.png)
## Step 0

If you don't have a `~/alchemy` directory, go make one!

## Step 1

Make the following directories and subdirectories with `mkdir`, `cd` and `pwd`

```
~
    |
    +- alchemy
        |
        +- foundations-prep-empty
        |
        +- foundations-prep-files-to-remove
        |
        +- foundations-prep
            |
            +-foundations-prep-sub-directory
```

## Step 2

`cd` into `foundations-prep-files-to-remove` and create the files listed below with this command: `echo "words" > name.txt`

```
~
    |
    +- alchemy
        |
        +- foundations-prep-empty
        |
        +- foundations-prep-files-to-remove
            |
            +- hello-world.txt  "hello world"
            |
            +- foo-bar.txt  "if foo then bar"
        |
        +- foundations-prep
            |
            +-foundations-prep-sub-directory

```

## Step 3

Move files with from `foundations-prep-files-to-remove` to `foundations-prep-empty` with `mv`

```
~
    |
    +- alchemy
        |
        +- foundations-prep-empty
            |
            +- hello-world.txt  "hello world"
            |
            +- foo-bar.txt  "if foo then bar" 
        |
        +- foundations-prep-files-to-remove
        |
        +- foundations-prep
            |
            +-foundations-prep-sub-directory

```


## Step 4

Rename `foundations-prep-empty` to `foundations-prep-full` with `mv`.

```
~
    |
    +- alchemy
        |
        +- foundations-prep-full
            |
            +- hello-world.txt  "hello world"
            |
            +- foo-bar.txt  "if foo then bar"
        |
        +- foundations-prep-files-to-remove
        |
        +- foundations-prep
            |
            +-foundations-prep-sub-directory

```

## Step 5

Remove newly empty `foundations-prep-files-to-remove` directory with `rmdir`

```
~
    |
    +- alchemy
        |
        +- foundations-prep-full
            |
            +- hello-world.txt  "hello world"
            |
            +- foo-bar.txt  "if foo then bar" 
        |
        +- foundations-prep
            |
            +-foundations-prep-sub-directory
```

## 6

Copy `foundations-prep-full` directory (and name the copy `foundations-prep-full-copy`) with `cp -r`

```
~
    |
    +- alchemy
        |
        +- foundations-prep-full
            |
            +- hello-world.txt  "hello world"
            |
            +- foo-bar.txt  "if foo then bar"
        |
        +- foundations-prep-full-copy
            |
            +- hello-world.txt  "hello world"
            |
            +- foo-bar.txt  "if foo then bar"
        |
        +- foundations-prep
            |
            +-foundations-prep-sub-directory
```

## Step 7

Remove the `foundations-prep-full` directory and its contents with `rm -rf` (keep the copy around).

```
~
    |
    +- alchemy
        |
        +- foundations-prep-full-copy
            |
            +- hello-world.txt  "hello world"
            |
            +- foo-bar.txt  "if foo then bar"
        |
        +- foundations-prep
            |
            +-foundations-prep-sub-directory

```

> Submit a screenshot of your `~/alchemy` directory in the terminal, with the correct directories inside, using `ls -R` to show the contents of all the children in the directory.

## Points Break Down

Looking For | Points (10)
:--|--:
Screenshot in canvas reflects the correct final state of the files in the directory | 10
STRETCH: Add at least 3 aliases to your `.bash_profile` or `.zshrc` | +1
STRETCH: Change your terminal using the `PS1` variable in your `.bash_profile` or `.zshrc` to suit your preferences | +1
