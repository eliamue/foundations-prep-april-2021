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
paragraph.innerText = 'The text you want to show';
```