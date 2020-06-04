Testing with qUnit
===

We can create tested functions in isolation. This encourages modularity and correctness.

## Setup qUnit

Copy `test` folder

## TDD

**T**est **D**riven **D**evelopment

## Test Structure

1. **Arrange** Set up your parameters and expectations
1. **Act** Call the function you're testing and capture the result
1. **Assert** Make assertions about what is expected valid result


```js
const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(true, false);
});
```