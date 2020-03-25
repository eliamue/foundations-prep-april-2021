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



