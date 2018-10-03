GitHub/Git
===

> Managing Code

## Prerequisites

Have a `GitHub` account.

## Github vs Git???

* Git is a system for 
    1. Managing changes to files
    2. Distributing copies of code, including different versions of the code.
* GitHub is an online site to which you can distribute your code

## Setting up SSH for credentials
*Pay attention to which operating system you are viewing instructions for when you follow the various links.*
1. Check to see if you have existing SSH keys: [link](https://help.github.com/articles/checking-for-existing-ssh-keys/)
    - If you are creating a new key, continue on to step 2.
    - If you already have a key you want to use, proceed to step 3.
1. Create a new SSH key: [link](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)
1. Add your new key to your github account: [link](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)


## Workflow

### Create a Repository

1. Add the repository to your Github account
1. Notice Github offers instructions
1. Copy the download link
1. Go to terminal window (use keyboard to switch apps!)
1. Go to your `dev` directory
1. `git clone <repo>`
1. `cd <repo>` (<-- don't forget this)

### Create a README.md

```
$ echo "hello world, time for git!" > README.md
```

### Add and Commit

(Note: Will seem redundant at first to add and commit!)

command | notes
---|---
`git status` | to make sure you have changes to the repo
`git add -A` | to "stage" the changes
`git status` | this time, to check that everything has been staged
`git commit -m "commit message"` | to "take the snapshot". "why" (not "what")
`git status` | this time, to check everything is committed
`git push origin master` | to share the changes with your remote repo
`git status` | overkill, to check that local in sync with origin

## Outcome

Update Github with a change made locally on your computer
