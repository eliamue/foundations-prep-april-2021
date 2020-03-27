/*
    i want the name to change to 
    'Lady Gaga' and make the text 
    'red'
 */

// get my button from the dom
const myButton = document.getElementById('my-button');

function changeName() {
    // go get the p tag we want to change
    const pTag = document.getElementById('name');

    // make the p tag orange
    pTag.style.color = 'orange';
     
    // go get the input that has the new name
    const myInput = document.getElementById('name-input');

    // get the name from that input
    const theCurrentStateOfTheInput = myInput.value;

    // set the p tag's text content to that name
    pTag.textContent = theCurrentStateOfTheInput;     
}

myButton.addEventListener('click', changeName);

