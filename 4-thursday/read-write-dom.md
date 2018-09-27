Reading and Writing DOM
===

> Change All the Things!

## Using `document`

* Built in "global", like `console`

## Finding Elements

* `const input = document.getElementById(id);`

**Advanced!**

* `const input = document.querySelector('any css selector');`
 
## Reading Values

* `const value = input.value`
* `const checked = input.checked`
* More...

## Writing Text

```js
const paragraph = document.getElementById('output');
paragraph.textContent = 'The text you want to show';
```

## Outcome

1. Create two inputs, one for `x` and one for `y`, plus an "Add Me" button. When the button is clicked, write the result in sentence format ("3 plus 7 is 10") to a `<p>` element.

2. Create an input for a number `n`. Create radio buttons for "square", "cube", "tesseract" whose values are 2, 3, and 4 respectively. When the "compute" button is clicked, calculate `n` to the chosen power. (In Javascript you can use the `**` operator to raise a number to a power: `3 ** 2` would be `9`). Write the result in sentence format ("3 to the power of 3 is 27") to a `<p>` element.
