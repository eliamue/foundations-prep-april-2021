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

This is where _alllll_ the magic lives.

### Finding Elements

```js
const result = document.getElementById('result');
```

### Reading Values

* `const value = input.value`
* `const checked = input.checked`
* More...

## Changing Text

```js
const paragraph = document.getElementById('result');
paragraph.textContent = 'The text you want to show';
```

## Outcome
Let's add functionality to our nametag!