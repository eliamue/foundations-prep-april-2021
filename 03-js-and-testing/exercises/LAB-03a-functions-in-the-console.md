## Functions in the Console

## Standard Setup Process

1. Create a repo called `lab-03a-functions-in-the-console` on Github
    - make sure to click add a `README.md`
1. Copy the URL of the new repo
1. From the command line (terminal) clone your repo:
    1. Check with `pwd` that you are in correct directory for labs
    1. `git clone <url>`
    1. **`cd` into your repo from the command line**
    1. Launch vscode with `code .`

## Remember To...

1. Read through this entire lab document
1. **Have a plan.** 

## Instructions

1. Make an index.html that points to a javascript file (app.js).
1. In app.js, make five objects that represent a kind of thing in real life (5 cat objects, or 5 truck objects, or 5 smartphone objects, or 5 city objects, etc). Store these objects in different `const`s. For example: `const dog = { name: 'spot', age: 5, weight: '20lbs' };`
1. Put all 5 objects in an array. Store this array in a `const`. For example, `const dogs = [spot, rover, baily, luna, scout];`
1. Log this array out to the console. Serve your project in live server and open up the javascript console to check that it works.
1. ACP
1. Write a function called `logOutThings` that does two things:
    - logs out the words "Here are your 5 things!", using the array.length property to get the right number of things
    - logs your array of things out the the console
1. Call this function in your code. Serve your project in live server and open up the javascript console to check that it works.
1. ACP
1. Deploy this page to github
STRETCH) Instead of using the array of things that is in global scope, re-write your function to take an array of things as an argument, and pass your array of things into that function.