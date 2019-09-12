JS Does Browser 
===

> Introducing the DOM

## "Built-in's"

Utility object that are built into either:
* JavaScript
* The Browser (DOM)

Examples:
* `document`
* `console`
* `Math`

## `document`

Represents active browser page

### Finding Elements

```js
const result = document.getElementById('result');
```

### Reading Values

* `const value = input.value`
* `const checked = input.checked`
* More...

## Writing Text

```js
const paragraph = document.getElementById('result');
paragraph.textContent = 'The text you want to show';
```
