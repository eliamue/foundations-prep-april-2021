Git
===
## Workflow

### Create a Repository

1. Go to the repo you made earlier in github.
1. Click the green button to get the repo url.
1. Go to terminal window (use keyboard to switch apps!)
1. Go to your `~/alchemy/dev-101` directory
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
`git push origin master` | to share the changes with your remote repo (you will be asked for username and password)
`git status` | overkill, to check that local in sync with origin

## Setting up Credentials

During the next step of creating a repository, [let's follow these instructions](https://help.github.com/articles/caching-your-github-password-in-git/). Make sure
to use the right OS!

## Outcome

Update Github with a change made locally on your computer
