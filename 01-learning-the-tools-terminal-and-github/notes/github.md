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

## Workflow

### Create a Repository

1. Create the repository in your Github account
    - Choose add `README.md`!
1. Click on the friendly, green Clone button
1. Copy the download link (HTTPS only)
1. Go to terminal window (use keyboard to switch apps!)
1. Go to your `~/alchemy/foundations-prep` directory
1. `git clone <repo>`
1. `cd <repo>` (<-- don't forget this)

### Add and Commit

(Note: Will seem redundant at first to add and commit!)

command | notes
---|---
`git status` | to make sure you have changes to the repo
`git add -A` | to "stage" the changes
`git status` | this time, to check that everything has been staged
`git commit -m "commit message"` | to "take the snapshot". "why" (not "what")
`git status` | this time, to check everything is committed
`git push origin main` | to share the changes with your remote repo (you will be asked for email and password)
`git status` | overkill, to check that local in sync with origin

## Setting up Credentials

During the next step of creating a repository, [let's follow these instructions](https://help.github.com/articles/caching-your-github-password-in-git/). Make sure
to use the right OS!

## Outcome

Update Github with a change made locally on your computer
