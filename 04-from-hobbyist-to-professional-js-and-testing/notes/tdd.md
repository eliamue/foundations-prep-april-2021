Testing with qUnit
===

## Why test?

- Formalize our expectations
    - I _expect_ something to happen. . . . but is it really happening?
    - What do you expect `add(3, 5)` to return?
    - What do you expect `showDate('tomorrow')` to return?
    - What do you expect `makeGreeting('dani')` to return?
- If we figure out and describe our intentions ahead of time, we have a better chance of 1) _doing it right_ and 2) _validating that we did it right_.

Notice that all of these are pure functions. They have input (`arguments`) and output, and I expect to get the same output every time I supply the same input (`arguments`). Impure functions are much more challenging to test. Therefore, we will mostly only test pure functions in this foundational course.

## Setup QUnit

Look in the `test` folder

Launch the `index.html` file in `live-server`

## TDD

**T**est **D**riven **D**evelopment

## Test Structure

1. **Arrange** Set up your parameters and expectations
1. **Act** Call the function you're testing and capture the result
1. **Assert** Make assertions about what is expected valid result


```js
const test = QUnit.test;

test('time to test a function', function(expect) {
    //Arrange
    // Set up your arguments and expectations
    const firstNumber = 3;
    const secondNumber = 4;
    const expectedResult = 7;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = add(firstNumber, secondNumber);

    //Expectation
    // Make expectations about what is expected and the actual result
    expect.equal(actualResult, expectedResult);
});
```
