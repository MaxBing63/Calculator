function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return Math.round(num1 / num2 * 100) / 100;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
    }
}

let currentDisplay = document.querySelector('#currentdisplay');
let resultDisplay = document.querySelector('#result');

//numTxt - the textContent of the 1-9 buttons
function fillNumbers(numTxt) {
    currentDisplay.textContent += numTxt;
}

let numberButtons = document.querySelectorAll('.button.number');
numberButtons.forEach((num) => {
    num.addEventListener('click', () => {
        fillNumbers(num.textContent);
    });
});