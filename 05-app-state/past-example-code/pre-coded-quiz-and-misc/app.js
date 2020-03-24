import { isCorrect } from './functions.js';

const myButton = document.getElementById('action-button');

myButton.onclick = () => {
    alert('welcome to my quiz!');
    const myConfirmation = confirm('do you want to take my quiz?');
    console.log(myConfirmation);

    const userAnswer = prompt('is my favorite color bluish? (yes/no)');
    const lowercaseUserAnswer = userAnswer.toLowerCase();
    const trimmedLowercaseUserAnswer = lowercaseUserAnswer.trim();

    const userIsCorrect = isCorrect(trimmedLowercaseUserAnswer);

    if (userIsCorrect) {
        alert('yeys!');
    } else {
        alert('booo');
    }
};