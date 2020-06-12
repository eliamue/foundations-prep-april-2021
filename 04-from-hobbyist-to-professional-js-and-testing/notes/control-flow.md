Control Flow
===

> Managing variation and repetition

### Conditional

* `if`
* `else if`
* `else`


```js
export function isOldEnoughToDrink(country, age) {
    if (country === 'UK' && age >= 18) {
        return true
    } else if (country === 'USA' && age >= 21) {
        return true
    } else {
        return false
    }

    console.log('side note: this block of code is unreachable because return stops the execution of the function')
}
```

Refactored:

```js
export function isOldEnoughToDrink(country, age) {
    const over21 = age >= 21;
    const over18InUK = age >= 18 && country === 'UK';

    return over21 || over18InUK;
}
```

### Loop

* `for`
* `while`

```js
const colors = [
    'yellow',
    'lightblue',
    'pink',
    'lightgreen'
];

// const mySpecialNumber = 2;

// console.log(colors[mySpecialNumber]);

// looping or iterating through lists of things
for (let i = 0; i < colors.length; i++) {
    console.log(i);
    console.log(colors[i]);
}

// colors.forEach(item => console.log(item));
```

## Together 

**Even/odd Logging**

Loop through numbers 1 through 15:
- If a number is odd, log 'odd'. 
- If a number is even, log 'even'.

## Debugging

* Open Dev Tools
* Find "Sources" tab
* `CMD/CTRL + P` - type name of file
* Drop some breakpoints and watch the magic happen!
