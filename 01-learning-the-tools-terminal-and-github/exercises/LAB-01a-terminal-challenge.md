Challenge!
===

Create the following structure inside your `~/alchemy` directory (folder).

## Step 0

(If you don't have a `~/alchemy` directory, go make one!)

## Step 1

Make directories with `mkdir`, `cd` and `pwd`

```
~
    |
    +- alchemy
        |
        +- dev-101-empty
        |
        +- dev-101-files
        |
        +- dev-101-prep
        |
        +- dev-101-rename-me
            |
            +-dev-101-sub-directory
```

## Step 2

Creating files with `echo`

```
~
    |
    +- alchemy
        |
        +- dev-101-empty
        |
        +- dev-101-files
            |
            +- hello-world.txt  "hello world"
            |
            +- foo-bar.txt  "if foo then bar"
        |
        +- dev-101-one
        |
        +- dev-101-prep
            |
            +-dev-101-sub-directory

```

## Step 3

Moving files with `mv`

```
~
    |
    +- alchemy
        |
        +- dev-101-empty
            |
            +- hello-world.txt  "hello world"
            |
            +- foo-bar.txt  "if foo then bar"
        
        +- dev-101-files
        |
        +- dev-101-one
        |
        +- dev-101-prep
            |
            +-dev-101-sub-directory

```


## Step 4

Renaming with `mv`

```
~
    |
    +- alchemy
        |
        +- dev-101-full
            |
            +- hello-world.txt  "hello world"
            |
            +- foo-bar.txt  "if foo then bar"
        |
        +- dev-101-files
        |
        +- dev-101-one
        |
        +- dev-101-prep
            |
            +-dev-101-sub-directory

```

## Step 5

Remove empty directory with `rmdir`

```
~
    |
    +- alchemy
        |
        +- dev-101-full
            |
            +- hello-world.txt  "hello world"
            |
            +- foo-bar.txt  "if foo then bar"
        
        +- dev-101-one
        |
        +- dev-101-prep
            |
            +-dev-101-sub-directory
```

## Step 6

Remove the dev-101-full directory and its contents with `rm -rf`

```
~
    |
    +- alchemy
        |        |        
        +- dev-101-one
        |
        +- dev-101-prep
            |
            +-dev-101-sub-directory

```

> Submit a screenshot of your `~/alchemy` directory, with the correct directories inside, using `ls -R` to show the contents of all the children.
