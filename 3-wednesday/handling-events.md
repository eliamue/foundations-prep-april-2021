Handling Events
===

> Saving code for later/sharing behavior

## Functions

```js
function doThing() {

}
```

## `onclick`

```html
<button onclick="doThing()">Do Thing</button>
```


## `oninput`

```html
<label>
    Search: <input oninput="doThing()">
</label>
```

## pure JS event listener

```
const myButton = document.getElementById('my-special-button');

myButton.addEventListener('click', doThing)

const myInput = document.getElementById('my-special-input');

myButton.addEventListener('input', doOtherThing)

```