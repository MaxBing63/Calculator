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

function isDisEmpty(disTxt) {
    if(disTxt === '') {
        return true;
    }
    return false;
}

function checkOperator(txt) {
    if(txt === '+' || txt === '-' || txt === '%' || txt === 'x') {
        return true;
    }
    return false;
}

let currentDisplay = document.querySelector('#currentdisplay');
let resultDisplay = document.querySelector('#result');

//numTxt - the textContent of the 1-9 buttons
function fillNumbers(numTxt) {
    currentDisplay.textContent += numTxt;
}

let numberButtons = document.querySelectorAll('.button.number');
numberButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        fillNumbers(btn.textContent);
    });
});

function fillOperators(operatorTxt) {
    if(isDisEmpty(currentDisplay.textContent)) {
        return;
    }else if(checkOperator(currentDisplay.textContent.charAt(currentDisplay.textContent.length - 1))) {
        return;
    }else {
        currentDisplay.textContent += operatorTxt;
    }   
}

let operatorButtons = document.querySelectorAll('.button.operator');
operatorButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        fillOperators(btn.textContent);
    });
});