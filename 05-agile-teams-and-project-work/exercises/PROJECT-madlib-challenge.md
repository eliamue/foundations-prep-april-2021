MadLib Challenge
===

Create a web page that allows the user to play a MadLib game!

## Create Repo

![Mad Lib](./madlib1.png)

![Mad Lib](./madlib2.png)

Create and clone a new repo: `madlib-game`, then `cd` into it and open in VSCode!

Add:

```
app.js
index.html
style.css
```

## Group Work

You should work in a mob on this project, with one person driving and everybody looking at the same screen.

1) One person should make a repo, and should give everybody permission to work on it.
1) Everybody should clone this repo.
1) One person should drive,  while everybody else watches and contributes verbally. Then every 20 minutes or so, that person will push their code, and everybody else will pull, and you will pick a new driver.
    - When it's time for you to "drive", you can `git pull origin master` in your cloned version of the repo to get the freshest code. 
    - When it's time for you to pass off to the next person, add, commit, and `git push origin master` so they can pull to get the freshest code.
    - No harm in gratuitously running `git pull origin master`. The more often you do this, the easier everything will be!
1) You could run into merge issues here. The way to avoid this is to do the project in _advanced mode_ (see below)

## STRETCH GOAL: Advanced group work
1) In addition to all of the above, when you become driver, you should make a branch off of master. Using your name for the branch is fine for now: `git checkout -b danis-branch`.
1) Make sure you have all the freshest code by using `git pull origin master` while on your new branch.
1) You can see what branch you're on at any time by using `git status`
1) When it's time to push your code and swap off (ACP), you will
    1)  use `git push -u origin danis-branch`.
    1) Then you will go to the repo in github and see the yellow div with a green button that says "Compare and Pull Request". This will make a pull request.
    1) You can merge the code with this pull request.

## Design MadLib

Come up with a few short paragraphs and pick some key words for which the user will provide values. Use `<span>`'s for "blanks" where the words will be inserted and give each one an `id`. Keep in mind each span needs a unique `id`, so you might sequentially number them like `noun-1`, `noun-2`. 

Read your html code and improve.

Time for a commit!

Give yourself a 60 minute time box to style the page and the story, maybe find some fun images! 

Time for a commit!

## Prompt for Words

Provide labels and inputs for the user. Describe the grammar you want them to provide (noun, verb, adjective, etc). Keep in mind each input needs a unique `id`, so you might sequentially number them like `noun-1-input`, `noun-2-input`.

Also provide a button for them to click when it is time to make the MadLib. 

Read your html code and make any needed improvements.

Time for a commit!

## Make MadLib

1. In your JavaScript `app.js`, make variables for all the DOM elements you will
to read data from (input form controls) or write data to (text spans).
2. Add a function, then add an `onclick` attribute to the button that calls the function. Validate that the function is running when the button is clicked.
3. Write JavaScript logic in your function that mediates data between the inputs and the spans. Validate that it works.
4. Read your code and make it as well crafted as you possibly can.

Read your JavaScript code and make any needed improvements.

Time for a commit!

## Reveal MadLib

Your MadLib is working, but part of the fun is not knowing what the story is. Find the containing element for your story and:
1. Create a CSS class (like `.hidden`) to hide the story (see [docs on controling `display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display))
1. Add that class and an `id` attribute to the containing element.
1. Reference the element in your JavaScript
1. In your function, add a line to remove the hidden class from the element. See if you can figure out how to do that based on [the docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList). Feel free to discuss and share with classmates!
1. Validate that it works

Read your JavaScript code and make any needed improvements.

Time for a commit!

## Show the World

1. Push to GitHub
1. Turn on GitHub pages so everyone can play your MadLib game!

## Points Break Down

Looking For | Points (10)
:--|--:
Deployed on GitHub pages, with link in the About section of the Github repo | 2
Styling and Semantic HTML | 2
Inputs (with id) for each word that will be replaced in Mad Lib | 2
On clicking the submit button, show the Mad Lib text (initially hidden) | 2
On clicking the submit button, replace `<span/>`s with the correct words from text inputs | 2