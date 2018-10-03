JavaScript Syntax
===

> Evaluate the basics

## Typing in Console

**Evaluate** JavaScript "on the fly"

### Evaluation

* Primitive Types
    * Numbers
    * Boolean
    * String
* `undefined`
* `null`
* Operators
    * Mathematic
        * `+`, `-`, `*`, `/`, `%`
    * Logical
        * `!`, `&&`, `||`
* Grouping via `(` `)`
* Literals
    * Arrays `[` `]`
    * Object `{` `}`

### Remembering Values

Introducing variables...

* `var`, or `let` and `const`
* names
    * `a-z`
    * `A-Z`
    * `$` and `_`
    * `1-9` (not at beginning!)
* assignment
* reassignment
* scope
* use place of the stored value!

### Increment/Decrement
* `--`/`++`
* before vs after

### Statements and Expressions

The Basics:

1. Statements **perform an action**
    * Define and assign variables
    * Control Flow statements
2. Expressions produce a value

Practice vs Theory:

* Some expressions can be used as statements:
    ```js
    console.log('hello');
    1 + 2;
    ```

* **But** most statements cannot be used where an expression is expected

    ```js 
    // this will throw a syntax error!
    console.log(if(x > 2) { 
        x = x + 7; 
    });
    ```

[Let's Explore the Abstract Syntax Tree](https://astexplorer.net/)

### Debugging

Stopping script

## Outcome

Use the browser console to evaluate JavaScript
