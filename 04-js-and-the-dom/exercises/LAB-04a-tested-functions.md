# Math Functions with Tests

## Write Test, Fail. Write Code, Pass. Edit

Expand on our test suite for `add` and `getNumbers` by writing more tests and  functions (in that order!)

**For today, you can assume valid input**

**For testing tables with multiple rows, each row should be its own test**

### `subtract` two numbers

Input | Expected
---|---
5, 3 | 2

### `multiply` two numbers

Input | Expected
---|---
4, 3 | 12

### `divide` two numbers

Input | Expected
---|---
6, 2 | 3
7, 0 | `Math.Infinity`

### `isEven` a number

Input | Expected
---|---
6 | `true`
7 | `false`

### `getNumbers` **EXAMPLE**

This is a reference function and test for the next testing problem `getEvenNumbers`:

Input | Expected
---|---
5 | `[1, 2, 3, 4, 5]`

```js
function getNumbers(upTo) {
    const numbers = [];
    for(let i = 1; i <= upTo; i++) {
        numbers.push(i);
    }
    return numbers;
}

test('getNumbers function', function(assert) {
    // arrange
    const upTo = 5;
    const expected = [1, 2, 3, 4, 5];

    // act
    const numbers = getNumbers(upTo);

    //assert
    assert.deepEqual(numbers, expected);
});
```

### `getEvenNumbers`

This function takes a number and returns an array of even number from 2 to the supplied number. **Use your `isEven`
function as part of your solution.**

Input | Expected
---|---
9 | `[2, 4, 6, 8]`

### STRETCH: `fizzBuzz`

Write a function called `fizzBuzz` that takes a number and returns an array of number from 1 to that number, except:
1. Replace any number divisible by 3 with `fizz`
1. Replace any number divisible by 5 with `fizzbuzz`
1. Replace any number divisible by 3 and 5 with `fizzbuzz`

Input | Expected
16 | `[1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz']`
