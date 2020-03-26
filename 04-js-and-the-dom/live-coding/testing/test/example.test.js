const test = QUnit.test;

function sum(a, b) {
    return a + b;
}

test('sum!', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = sum(3, 4);
    const anotherResult = sum(3, -4);
    
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 7);
    assert.equal(anotherResult, -1);
});

function multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

test('multiply!', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    const result = multiply(3, 4);
    const result2 = multiply(5, 2);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 12);
    assert.equal(result2, 10);
});

function getEvenNumbers(someNumber) {
    const myCoolArray = [];

    for (let i = 0; i < someNumber; i++) {
        // check if it's an even number
        const itIsEven = i % 2 === 0;
        if (itIsEven) {
            // if it's an even number, push it
            myCoolArray.push(i);
        }
    }

    return myCoolArray;
}

test('get numbers!', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = [2, 4, 6, 8];
    //Act 
    // Call the function you're testing and set the result to a const
    const result = getEvenNumbers(9);
    const result2 = getEvenNumbers(7);

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(result, expected);
    assert.deepEqual(result2, [2, 4, 6]);    
});
