Terminal
===

> Your developer portal!

## Prerequisites

Installed including `git`

## Why?

1. Speed of use (keyboard)
1. Simplicity (no UI)
1. Power (can be dangerous 🔥)
1. Additional tools run from here (CLI): `git`, `npm`, `heroku`

## Compare to GUI

Setup side-by-side Terminal and Finder/GUI

### Compare and Contrast!

Where am I?

```sh
> pwd
```

What is home directory (`~`)?

Lost? Go Home:

```sh
> cd
```

What's in this directory?

```sh
> ls
```

### Cleaning up

Visually clear out commands:

```sh
> clear
```

## Files and Directories

### Paths

sigil | meaning
--- | ---
`~` | home
`/` | root (and path separator)
`.` | current directory
`..`| parent directory

### Autocomplete ⌨️ 🔣

sigil | meaning
--- | ---
`TAB` | auto-complete (**use me!**)
`⬆⬇` | navigate history
`CTRL` + R | find in history
`CTRL` + A | go to beginning of line
`CTRL` + E | go to end of line

### Warning!

Removing things from the command line does **not** put them in the trash/recycling. They are gone. Forever. These commands are marked with 🔥 below

### Directory Commands

command | meaning | notes
--- | --- | ---
`cd` | change `<directory>` | can use relative paths!
`ls` | list `<directory>` | `ls -la` for system files
`ls -R` | list `<directory>` | `ls` recursively
`mv` | move `<directory>` `here` | takes two arguments: `from` **and** `to`
`mkdir` | make `<directory>` | can pass multiple directories to create
`rmdir`🔥 | remove `<directory>` | doesn't work if directory has files

**Demo: let's take a journey through the root and home directories...and back again!**

**Please, please, pleaaaaassse don't delete anything in your root directory**

**Please, please, pleaaaaassse don't delete anything in your root directory**

**Please, please, pleaaaaassse don't delete anything in your root directory**

### File Commands

command | meaning
--- | --- 
`touch` | create `<file>`
`cat`   | read `<file>`
`echo "content" > file` | write a quick snippet to a file
`rm`🔥 | remove `<file>`
`rm -rf`🔥 | remove `<file or directrory>` and all of its children

## Use the `man` Luke

You can look at the "manual" for command line commands by typing `man <command>`, for example:

```sh
> man cd
```

will show you the built-in documentation for `cd` (change directory).

If you are using git bash for your terminal on windows, it won't be able to find the `man` command. Instead try `<command> --help`. 

```sh
> cd --help
```

will show you the documentation for `cd`  (change directory)

## Bash aliases

`~/.bash_profile` and `~/.bashrc` (on mac, sometimes `~/.zshrc`)

These files are basically the configuartion files for your terminal. They are full of terminal commands,and they are run whenever you open a terminal.

Notice the `.` before the filename. That makes it a hidden file. To see hidden files, you need to `ls -la`.

These config files. are a good place to put shortcuts (`alias`es) for yourself. For example, imagine you are sick and tired of typing `git add . && git commit -m` over and over. You can add a line to your `.bash_profile` like so:

```sh
alias gac='git add . && git commit -m'
```

Then close and reopen your terminal (alternatively, you can `source ~/.bash_profile`).

Now you can type `gac` instead of the whole thing.

NOTE: When installing `nvm`, you might have to put stuff in one of these files to get it working.

## Outcome

Create a `~/alchemy/foundations` directory. This is where you will clone your
github repos!
