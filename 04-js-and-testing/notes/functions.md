Functions: Saving code for later/sharing behavior
===

## Functions with no input or output

```js
function launchAlertWithCurrentTime() {
    alert(new Date());
}
```

## Functions with input and output

```js
function makeHelloString(name) {
    return 'Hello, ' + name + '!'
}

makeHelloString('kati') // 'Hello kati!'

// return value can be stored in a const to be used later

const greeting = makeHelloString('kati')

// let's use the variable we made!
alert(greeting);
```

